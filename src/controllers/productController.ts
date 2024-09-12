import { NextFunction, Request, Response } from 'express';
import {
  createProductValidator,
  restockProductValidator,
  sellProductValidator
} from '../validators';
import { getProductsQuery } from '../queries/product';
import {
  createProductCommand,
  restockProductCommand,
  sellProductCommand
} from '../commands/product';

export const getProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return res.json(await getProductsQuery());
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = createProductValidator.validate(req.body);
  if (error) {
    return res.status(403).send(error.details[0].message);
  }

  try {
    res.json(await createProductCommand(req.body));
  } catch (error) {
    next(error);
  }
};

export const restockProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const { quantity } = req.body;

  const { error } = restockProductValidator.validate({ id, quantity });
  if (error) {
    return res.status(403).send(error.details[0].message);
  }

  try {
    res.json(await restockProductCommand({ id, quantity }));
  } catch (error) {
    next(error);
  }
};

export const sellProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const { quantity } = req.body;

  const { error } = sellProductValidator.validate({ id, quantity });
  if (error) {
    return res.status(403).send(error.details[0].message);
  }

  try {
    res.json(await sellProductCommand({ id, quantity }));
  } catch (error) {
    next(error);
  }
};
