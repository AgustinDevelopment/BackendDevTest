import { Router } from 'express';
import { CampaignRoutes } from './campaign.routes';
import { CampaignController } from '../controllers/campaign.controller';
import { InsightRoutes } from './insight.routes';
import { InsightController } from '../controllers/insight.controller';

export class ApiRoutes {

  constructor(private readonly campaignRoutes: CampaignRoutes, private readonly insigthRoutes: InsightRoutes) {}

  get router() {
    const router = Router();

    router.use('/api/campaigns', this.campaignRoutes.router);
    router.use('/api/insights', this.insigthRoutes.router);

    return router;
  }

}