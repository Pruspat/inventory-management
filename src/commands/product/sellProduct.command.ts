import { SellProductType } from '../../common';
import { BadRequestError, NotFoundError } from '../../common/errors';
import { Product } from '../../models';

export const sellProductCommand = async (data: SellProductType) => {
  const product = await Product.findById(data.id);
  if (!product) {
    throw new NotFoundError('Product not found');
  }
  if (product.stock < data.quantity) {
    throw new BadRequestError('Insufficient stock for product ' + product._id);
  }
  product.stock -= data.quantity;
  return await product.save();
};
