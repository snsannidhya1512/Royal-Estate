import express from 'express';
import { signup } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    await signup(req, res);
  } catch (err) {
    console.error('Error in signup route:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;