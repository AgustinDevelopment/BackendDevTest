import { Router } from 'express';
import { CampaignController } from '../controllers/campaign.controller';

export class CampaignRoutes {
  constructor(private readonly campaignController: CampaignController) {}

  get router() {
    const router = Router();

    router.post('/', this.campaignController.createCampaign);
    router.get('/', this.campaignController.getTodos);

    return router;
  }
}

