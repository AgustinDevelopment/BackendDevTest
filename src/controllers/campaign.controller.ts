import { Request, Response } from "express";
import { prisma } from "../config/db";

export class CampaignController {
    async createCampaign(req: Request, res: Response) {
        try {
          const { title, description, goal, responsesCount, status } = req.body;
          const newCampaign = await prisma.campaign.create({
            data: {
              title,
              description,
              goal,
              responsesCount: responsesCount || 0, 
              status: status || "Active", 
            },
          });
          res.status(201).json(newCampaign);
        } catch (error) {
          console.error('Error creating campaign:', error);
          res.status(500).json({ error: 'Error creating campaign', details: (error as any).message });
        }
    }

  getTodos(req: Request, res: Response) {
    res.send('Get Todos');
  }
}