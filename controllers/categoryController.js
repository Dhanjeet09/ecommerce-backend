import Category from '../models/Category.js';
import Product from '../models/Product.js';

export const createCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const { 
      page = 1, 
      limit = 10, 
      search = '',
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = req.query;

    const searchQuery = search 
      ? { name: { $regex: search, $options: 'i' } } 
      : {};

    const sortOptions = { [sortBy]: sortOrder === 'desc' ? -1 : 1 };

    const categories = await Category.find(searchQuery)
      .sort(sortOptions)
      .limit(Number(limit))
      .skip((Number(page) - 1) * Number(limit));

    const total = await Category.countDocuments(searchQuery);

    res.json({
      categories,
      currentPage: Number(page),
      totalPages: Math.ceil(total / limit),
      totalCategories: total
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    const products = await Product.find({ categoryId: req.params.id });
    res.json({ category, products });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true, runValidators: true }
    );
    res.json(category);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    await Product.updateMany(
      { categoryId: req.params.id }, 
      { categoryId: null }
    );
    res.json({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};