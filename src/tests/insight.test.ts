import { InsightController } from '../controllers/insight.controller';
import { Request, Response } from 'express';
import { prisma } from '../config/db';

describe('InsightController', () => {
  let insightController: InsightController;
  let req: Partial<Request>;
  let res: Partial<Response>;

  beforeEach(() => {
    insightController = new InsightController();
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  it('should get all insights', async () => {
    prisma.insight.findMany = jest.fn().mockResolvedValue([{ id: 1, question: 'Test Insight' }]);
    await insightController.getAllInsights(req as Request, res as Response);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([{ id: 1, question: 'Test Insight' }]);
  });

  it('should create an insight', async () => {
    req.body = { question: 'New Insight', category: 'Category', percentage: 50, campaignId: 1 };
    prisma.insight.create = jest.fn().mockResolvedValue({ id: 1, question: 'New Insight' });
    await insightController.createInsight(req as Request, res as Response);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ id: 1, question: 'New Insight' });
  });

  it('should get an insight by id', async () => {
    req.params = { id: '1' };
    prisma.insight.findUnique = jest.fn().mockResolvedValue({ id: 1, question: 'Test Insight' });
    await insightController.getInsightById(req as Request, res as Response);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ id: 1, question: 'Test Insight' });
  })

  it('should update an insight', async () => {
    req.params = { id: '1' };
    req.body = { question: 'Updated Insight' };
    prisma.insight.update = jest.fn().mockResolvedValue({ id: 1, question: 'Updated Insight' });
    await insightController.updateInsight(req as Request, res as Response);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ id: 1, question: 'Updated Insight' });
  })

  it('should delete an insight', async () => {
    req.params = { id: '1' };
    prisma.insight.delete = jest.fn().mockResolvedValue({ id: 1, question: 'Test Insight' });
    await insightController.deleteInsight(req as Request, res as Response);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ id: 1, question: 'Test Insight' });
  })
});