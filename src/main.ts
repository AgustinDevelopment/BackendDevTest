import { ApiRoutes } from './routes/api.routes';
import { env } from './config/db';
import { Server } from './server';
import { CampaignController } from './controllers/campaign.controller';
import { CampaignRoutes } from './routes/campaign.routes';
import { InsightController } from './controllers/insight.controller';
import { InsightRoutes } from './routes/insight.routes';


(() => {
  const campaignController = new CampaignController();
  const insightController = new InsightController();

  const campaignRouter = new CampaignRoutes(campaignController);
  const insightRoutes = new InsightRoutes(insightController);

  const apiRouter = new ApiRoutes(campaignRouter, insightRoutes);

  const server = new Server(env.PORT, apiRouter.router);

  server.start();
})();
