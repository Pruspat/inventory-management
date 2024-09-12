import Joi from 'joi';

export const createProductValidator = Joi.object({
  name: Joi.string().required().max(50),
  description: Joi.string().required().max(50),
  price: Joi.number().required().min(0),
  stock: Joi.number().required().min(1)
});
