import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import type { NextFunction, Request, Response } from 'express';

export const validationMiddleware =
  (validationSchema: any) => async(req: Request, res: Response, next: NextFunction) => {
    const transformedClass: any = plainToInstance(validationSchema, {...req.body, ...req.params, ...req.query});
    const validationResult = await validate(transformedClass);
    if (validationResult.length > 0) {
      return res.status(400).json({
        success: false,
        validationResult,
      });
    }
    
    next();
    return true;
  };