import { Request, Response } from 'express';

export class InsightController {
    createInsight(req: Request, res: Response) {
        res.send('Create Insight');
    }

    getInsights(req: Request, res: Response) {
        res.send('Get Insights');
    }
}