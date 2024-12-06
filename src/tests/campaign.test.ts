import { CampaignController } from '../controllers/campaign.controller';
import { Request, Response } from 'express';
import { prisma } from '../config/db';

describe('CampaignController', () => {

  //Declaracion de las variables  
  let campaignController: CampaignController;
  let req: Partial<Request>;
  let res: Partial<Response>;

  //Antes de cada test se inicializan las variables
  beforeEach(() => {
    campaignController = new CampaignController();
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  it('should get all campaigns', async () => {
    prisma.campaign.findMany = jest.fn().mockResolvedValue([{ id: 1, title: 'Test Campaign' }]);
    await campaignController.getAllCampaigns(req as Request, res as Response);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([{ id: 1, title: 'Test Campaign' }]);
  });

  it('should create a campaign', async () => {
    req.body = { title: 'New Campaign', description: 'Description', goal: 100 };
    prisma.campaign.create = jest.fn().mockResolvedValue({ id: 1, title: 'New Campaign' });
    await campaignController.createCampaign(req as Request, res as Response);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ id: 1, title: 'New Campaign' });
  });

  it('should get a campaign by id', async () => {
    req.params = { id: '1' };
    prisma.campaign.findUnique = jest.fn().mockResolvedValue({ id: 1, title: 'Test Campaign' });
    await campaignController.getCampaignById(req as Request, res as Response);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ id: 1, title: 'Test Campaign' });
  })

  it('should update a campaign', async () => {
    req.params = { id: '1' };
    req.body = { title: 'Updated Campaign' };
    prisma.campaign.update = jest.fn().mockResolvedValue({ id: 1, title: 'Updated Campaign' });
    await campaignController.updateCampaign(req as Request, res as Response);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ id: 1, title: 'Updated Campaign' });
  })

  it('should delete a campaign', async () => {
    req.params = { id: '1' };
    prisma.campaign.delete = jest.fn().mockResolvedValue({ id: 1, title: 'Test Campaign' });
    await campaignController.deleteCampaign(req as Request, res as Response);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ id: 1, title: 'Test Campaign' });
  })

});