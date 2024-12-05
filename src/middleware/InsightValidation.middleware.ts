import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

const insightSchema = z.object({
  question: z.string().min(5, { message: "La pregunta debe tener al menos 5 caracteres" }),
  category: z.string().min(1, { message: "La categoría no puede estar vacía" }),
  percentage: z.number().min(0, { message: "El porcentaje no puede ser menor a 0" }).max(100, { message: "El porcentaje no puede ser mayor a 100" }),
  comments: z.array(z.string()).optional(),
  campaignId: z.number().int({ message: "El ID de la campaña debe ser un número entero" }),
});

export const validateInsight = (req: Request, res: Response, next: NextFunction) => {
  try {
    insightSchema.parse(req.body);
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