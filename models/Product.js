import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
    min: [0, 'Price must be a positive number']
  },
  stock: {
    type: Number,
    required: [true, 'Stock quantity is required'],
    default: 0,
    min: [0, 'Stock cannot be negative']
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: [true, 'Category is required for the product']
  }
}, { timestamps: true });

export default mongoose.model('Product', ProductSchema);