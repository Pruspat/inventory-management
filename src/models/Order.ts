import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  customerId: { type: String, required: true },
  products: [
    { productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' } }
  ]
});

export const Order = mongoose.model('Order', OrderSchema);
