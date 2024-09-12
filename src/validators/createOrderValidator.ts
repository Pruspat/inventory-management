import Joi from 'joi';

export const createOrderValidator = Joi.object({
  customerId: Joi.string().required(),
  products: Joi.array()
    .items(
      Joi.object()
        .keys({
          productId: Joi.string().required(),
          quantity: Joi.number().required().min(1)
        })
        .required()
    )
    .required()
});
