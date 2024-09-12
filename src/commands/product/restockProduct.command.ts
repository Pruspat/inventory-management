import { RestockProductType } from '../../common';
import { NotFoundError } from '../../common/errors';
import { Product } from '../../models';

export const restockProductCommand = async (data: RestockProductType) => {
  const product = await Product.findById(data.id);
  if (!product) {
    throw new NotFoundError('Product not found');
  }
  product.stock += data.quantity;
  return await product.save();
};
