import { Router } from 'express';
import { CampaignController } from '../controllers/campaign.controller';
import { validateCampaign } from '../middleware/CampaignValidation.middleware';

export class CampaignRoutes {
  constructor(private readonly campaignController: CampaignController) {}

  get router() {
    const router = Router();

    router.get('/', this.campaignController.getAllCampaigns)
    // router.get(':id', this.campaignController.getCampaignById)
    router.post('/', 
      validateCampaign,  
      this.campaignController.createCampaign
    )
    router.put('/:id', 
      validateCampaign,
      this.campaignController.updateCampaign
    )
    router.delete('/:id', this.campaignController.deleteCampaign)

    return router;
  }
}

