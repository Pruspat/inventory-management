import Joi from 'joi';

export const sellProductValidator = Joi.object({
  id: Joi.string().required(),
  quantity: Joi.number().required().min(1)
});
