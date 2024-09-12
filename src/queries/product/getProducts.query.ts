import { Product } from '../../models';

export const getProductsQuery = async () => {
  return await Product.find();
};
