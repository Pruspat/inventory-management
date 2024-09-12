import Joi from 'joi';

export const restockProductValidator = Joi.object({
  id: Joi.string().required(),
  quantity: Joi.number().required().min(1)
});
