import express from 'express';
import { 
  createCategory, 
  getAllCategories, 
  getCategoryById, 
  updateCategory, 
  deleteCategory 
} from '../controllers/categoryController.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getAllCategories);
router.get('/:id', getCategoryById);

// Protected routes
router.use(authenticate);
router.post('/', authorize(['admin']), createCategory);
router.put('/:id', authorize(['admin']), updateCategory);
router.delete('/:id', authorize(['admin']), deleteCategory);

export default router;