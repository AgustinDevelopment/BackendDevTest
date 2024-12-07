import express, { Router } from 'express';
import colors from 'colors';

export class Server {
  public readonly app = express();

  constructor(
    private readonly port: number,
    private readonly router: Router,
  ) {
    this.config();
  }

  private config(): void {
    this.app.use(express.json()); 
  }
  

  start() {
    this.app.use(this.router);

    this.app.listen(this.port, () => {
      console.log(colors.bgCyan(`Server running on port: ${this.port}`));
    });
  }
}