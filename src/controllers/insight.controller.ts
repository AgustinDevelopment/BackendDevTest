import { Request, Response } from 'express';
import { prisma } from '../config/db';

export class InsightController {

    async getAllInsights(req: Request, res: Response) {
        try {
            const insights = await prisma.insight.findMany();
            res.status(200).json(insights);
        } catch (error) {
            
        }
    }

    async getInsightById(req: Request, res: Response): Promise <void> {
        const { id } = req.params
        try {
            const insight = await prisma.insight.findUnique({
                where: { id: parseInt(id) }
            })
            if(!insight) {
                res.status(404).json({ error: 'Insight not found' });
                return;
            }
        } catch (error) {
            res.status(500).json({ error: 'Error getting insight by id', details: (error as any).message });
        }
    }

    async createInsight(req: Request, res: Response): Promise<void> {
        try {
            const { question, category, percentage, comments, campaignId } = req.body;

            const existingInsights = await prisma.insight.findMany({ where: { campaignId } });

            const totalPercentage = existingInsights.reduce((acc, insight) => acc + insight.percentage, 0);

            if (totalPercentage + percentage > 100) {
                res.status(400).json({ error: 'Total percentage cannot exceed 100%' });
                return;
            }

            const newInsight = await prisma.insight.create({
                data: {
                    question,
                    category,
                    percentage,
                    comments: { set: comments },
                    campaignId
                }
            });

            // Incrementar responsesCount en la campaña asociada
            await prisma.campaign.update({
                where: { id: campaignId },
                data: { responsesCount: { increment: 1 } }
            });

            res.status(201).json(newInsight);
        } catch (error) {
            console.log('Error creating insight:', error);
            res.status(500).json({ error: 'Error creating insight', details: (error as any).message });
        }
    }

    async updateInsight(req: Request, res: Response): Promise<void> {
        const { id } = req.params
        const { question, category, percentage, comments, campaignId } = req.body;
        
        try {
            const currentInsight = await prisma.insight.findUnique({
              where: { id: parseInt(id) }
            });
      
            if (!currentInsight) {
              res.status(404).json({ error: 'Insight not found' });
              return 
            }
      
            const existingInsights = await prisma.insight.findMany({
              where: { campaignId }
            });
      
            // Calcular el nuevo porcentaje
            const totalPercentage = existingInsights.reduce((sum, insight) => sum + insight.percentage, 0) - currentInsight.percentage + percentage;
      
            if (totalPercentage > 100) {
              res.status(400).json({ error: 'El porcentaje total no puede exceder el 100%' });
              return
            }
      
            const updatedInsight = await prisma.insight.update({
              where: { id: parseInt(id) },
              data: {
                question,
                category,
                percentage,
                comments: { set: comments },
                campaignId
              },
            });
      
            res.status(200).json(updatedInsight);
          } catch (error) {
            console.error('Error updating insight:', error);
            res.status(500).json({ error: 'Error updating insight', details: (error as any).message });
          }
    }
    
    async deleteInsight(req: Request, res: Response) {
        const { id } = req.params
        try {
            await prisma.insight.delete({where: {id:parseInt(id)}})
            res.status(204).send()
        } catch (error) {
            res.status(500).json({ error: 'Error deleting insight', details: (error as any).message });
        }
    }
    
}