import express from "express";
import { addProject, getProjects } from "../Controllers/ProjectController.js";

const router = express.Router();

router.post(
  "/add",
  (req, res, next) => {
    console.log(`Request from ${req.url}, Request type ${req.method}`);
    next();
  },
  addProject
);
router.get(
  "/get",
  (req, res, next) => {
    console.log(`Request from ${req.url}, Request type ${req.method}`);
    next();
  },
  getProjects
);

export default router;
