import express from 'express';
import * as authController from '../controllers/authController.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);

// Protected route example
router.get('/profile', authenticate, (req, res) => {
  res.json(req.user);
});

export default router;