import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

const campaignSchema = z.object({
    title: z.string().min(3, { message: "El titulo debe tener al menos 3 caracteres" }),
    description: z.string().min(10, { message: "La descripción debe tener al menos 10 caracteres" }),
    goal: z.number().min(1, { message: "La meta debe ser al menos 1" }).max(100, {message: 'La meta no puede ser mayor a 100'}),
    responsesCount: z.number().optional(),
    status: z.string().optional(),
});

export const validateCampaign = (req: Request, res: Response, next: NextFunction) => {
    try {
      campaignSchema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors = error.errors.map(err => ({
          path: err.path.join('.'),
          message: err.message
        }));
        res.status(400).json({ error: 'Datos inválidos', details: formattedErrors });
      } else {
        res.status(400).json({ error: 'Error desconocido' });
      }
    }
};