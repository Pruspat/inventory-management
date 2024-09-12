import { CreateProductType, logger } from '../../common';
import { Product } from '../../models';

export const createProductCommand = async (data: CreateProductType) => {
  logger.info('Creatig product: ' + JSON.stringify(data));
  const product = new Product({ ...data });
  await product.save();
};
