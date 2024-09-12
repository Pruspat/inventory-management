import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 50 },
  description: { type: String, required: true, maxlength: 50 },
  price: { type: Number, required: true, min: 0.01 },
  stock: { type: Number, required: true, min: 0 }
});

export const Product = mongoose.model('Product', ProductSchema);
