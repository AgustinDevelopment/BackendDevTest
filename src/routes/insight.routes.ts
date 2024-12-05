import { Router } from 'express';
import { InsightController } from '../controllers/insight.controller';
import { validateInsight } from '../middleware/InsightValidation.middleware';

export class InsightRoutes {
  constructor(private readonly insightController: InsightController) {}

  get router() {
    const router = Router();

    router.get('/', this.insightController.getAllInsights)
    router.get('/:id', this.insightController.getInsightById)
    router.post('/', 
      validateInsight,
      this.insightController.createInsight
    )
    router.put('/:id', 
      validateInsight,
      this.insightController.updateInsight
    )
    router.delete('/:id', this.insightController.deleteInsight)

    return router;
  }
}