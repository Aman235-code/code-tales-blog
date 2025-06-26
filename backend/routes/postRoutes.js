import express from "express";
import {
  createPost,
  getPosts,
  getPost,
  deletePost,
  editPost,
} from "../controllers/postController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/create", authMiddleware, createPost);
router.delete("/:id", authMiddleware, deletePost);
router.put("/:id", authMiddleware, editPost);

export default router;
