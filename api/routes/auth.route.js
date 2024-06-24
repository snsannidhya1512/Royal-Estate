import express from "express";
import {
  google,
  signOut,
  signin,
  signup,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", (req, res, next) => {
  signup(req, res, next);
});

router.post("/signin", (req, res, next) => {
  signin(req, res, next);
});

router.post("/google", (req, res, next) => {
  google(req, res, next);
});

router.get("/signout", (req, res, next) => {
  signOut(req, res, next);
});

// router.post("/google", google);
export default router;
