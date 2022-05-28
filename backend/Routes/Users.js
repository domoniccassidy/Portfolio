import express, { Router } from "express";
import { logIn, signUp } from "../Controllers/UserController.js";

const router = express.Router();

router.post(
  "/login",
  (req, res, next) => {
    console.log(`Request from ${req.url}, Request type ${req.method}`);
    next();
  },
  logIn
);
router.post(
  "/signup",
  (req, res, next) => {
    console.log(`Request from ${req.url}, Request type ${req.method}`);
    next();
  },
  signUp
);
export default router;
