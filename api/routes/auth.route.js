import express from "express";
import { signin, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", (req, res, next) => {
  signup(req, res, next);
});

router.post("/signin", (req, res, next) => {
  signin(req, res, next);
});

export default router;
