import { CreateOrderType } from '../../common';
import { BadRequestError, NotFoundError } from '../../common/errors';
import { Order, Product } from '../../models';

export const createOrderCommand = async (data: CreateOrderType) => {
  await validateOrder(data);
  const order = await createOrder(data);
  await updateStock(data);
  return order;
};

const getProductById = async (productId: string) => {
  return await Product.findById(productId);
};

const validateOrder = async (data: CreateOrderType) => {
  for (const item of data.products) {
    const product = await getProductById(item.productId);
    if (!product) {
      throw new NotFoundError('Product not exist');
    }
    if (product.stock < item.quantity) {
      throw new BadRequestError(
        'Insufficient stock for product ' + product._id
      );
    }
  }
};

const createOrder = async (data: CreateOrderType) => {
  const order = new Order({
    customerId: data.customerId,
    products: data.products
  });
  return await order.save();
};

const updateStock = async (data: CreateOrderType) => {
  for (const item of data.products) {
    const product = await getProductById(item.productId);
    if (!product) {
      throw new NotFoundError('Product not exist');
    }
    product.stock -= item.quantity;
    await product.save();
  }
};
