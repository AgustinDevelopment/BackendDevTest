import { Router } from 'express';
import { InsightController } from '../controllers/insight.controller';

export class InsightRoutes {
  constructor(private readonly insightController: InsightController) {}

  get router() {
    const router = Router();

    router.post('/', this.insightController.createInsight);
    router.get('/', this.insightController.getInsights);

    return router;
  }
}