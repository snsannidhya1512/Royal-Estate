import express from 'express';
import { signup } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', (req, res, next) => {
  signup(req, res, next); // Pass next to signup function
});
export default router;