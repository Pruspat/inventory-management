import { CreateProductType } from '../../common';
import { Product } from '../../models';

export const createProductCommand = async (data: CreateProductType) => {
  const product = new Product({ ...data });
  await product.save();
};
