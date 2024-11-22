import Product from '../models/Product.js';
import Category from '../models/Category.js';

export const createProduct = async (req, res) => {
  try {
    // Verify category exists
    await Category.findById(req.body.categoryId);
    
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const { 
      page = 1, 
      limit = 10, 
      search = '', 
      category = '',
      minPrice = 0,
      maxPrice = Number.MAX_SAFE_INTEGER,
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = req.query;

    // Build search query
    const searchQuery = {};
    if (search) {
      searchQuery.name = { $regex: search, $options: 'i' };
    }
    if (category) {
      searchQuery.categoryId = category;
    }
    
    // Price range filter
    searchQuery.price = { 
      $gte: Number(minPrice), 
      $lte: Number(maxPrice) 
    };

    // Sorting
    const sortOptions = { [sortBy]: sortOrder === 'desc' ? -1 : 1 };

    // Pagination
    const products = await Product.find(searchQuery)
      .populate('categoryId')
      .sort(sortOptions)
      .limit(Number(limit))
      .skip((Number(page) - 1) * Number(limit));

    // Total count for pagination metadata
    const total = await Product.countDocuments(searchQuery);

    res.json({
      products,
      currentPage: Number(page),
      totalPages: Math.ceil(total / limit),
      totalProducts: total
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('categoryId');
    res.json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true, runValidators: true }
    );
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};