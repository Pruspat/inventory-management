import { NextFunction, Request, Response } from 'express';
import { createOrderCommand } from '../commands/order';
import { createOrderValidator } from '../validators';

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { customerId, products } = req.body;
  const { error } = createOrderValidator.validate({
    customerId: customerId,
    products: products
  });
  if (error) {
    return res.status(403).send(error.details[0].message);
  }

  try {
    return res.json(await createOrderCommand({ customerId, products }));
  } catch (error) {
    next(error);
  }
};
