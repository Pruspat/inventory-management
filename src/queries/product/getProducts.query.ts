import { logger } from '../../common';
import { Product } from '../../models';

export const getProductsQuery = async () => {
  logger.info('Quering products');
  return await Product.find();
};
