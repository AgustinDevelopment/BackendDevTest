import { Request, Response } from "express";
import { prisma } from "../config/db";

export class CampaignController {

  async getAllCampaigns(req: Request, res: Response) {

    try {
      const campaign = await prisma.campaign.findMany()
      res.status(200).json(campaign);
    } catch (error) {
      res.status(500).json({ error: 'Error getting all campaigns', details: (error as any).message });
    }

  }

  async getCampaignById(req: Request, res: Response): Promise<void> {

    const { id } = req.params;
    try {
      const campaign = await prisma.campaign.findUnique({
        where: { id: parseInt(id) }
      })
      if(!campaign) {
        res.status(404).json({ error: 'Campaign not found' });
        return;
      }
      res.status(200).json(campaign);
    } catch (error) {
      res.status(500).json({ error: 'Error getting campaign by id', details: (error as any).message });
    }

  }

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

  async updateCampaign(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const { title, description, goal, responsesCount, status } = req.body;
      const updatedCampaign = await prisma.campaign.update({
        where: { id: parseInt(id) },
        data: {
          title,
          description,
          goal,
          responsesCount,
          status
        }
      });
      res.status(200).json(updatedCampaign);
    } catch (error) {
      res.status(500).json({ error: 'Error updating campaign', details: (error as any).message });
    }
  }
  
  async deleteCampaign(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const deletedCampaign = await prisma.campaign.delete({
        where: { id: Number(id) },
      });
      if (deletedCampaign) {
        res.status(200).json(deletedCampaign);
        return
      } else {
        res.status(404).json({ message: 'Campaign not found' });
        return
      }
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the campaign' });
      return
    }
  }

}