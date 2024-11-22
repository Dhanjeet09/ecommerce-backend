import express from 'express';
import { 
  createProduct, 
  getAllProducts, 
  getProductById, 
  updateProduct, 
  deleteProduct 
} from '../controllers/productController.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);

// Protected routes
router.use(authenticate);
router.post('/', authorize(['admin']), createProduct);
router.put('/:id', authorize(['admin']), updateProduct);
router.delete('/:id', authorize(['admin']), deleteProduct);

export default router;