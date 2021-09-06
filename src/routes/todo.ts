import { Router } from "express";
import {
  createTodo,
  getTodos,
  getTodoById,
  updateTodoById,
  deleteTodoById,
} from "../controllers/todo";

const router = Router();

router.post("/", createTodo);

router.get("/", getTodos);

router.get("/:id", getTodoById);

router.patch("/:id", updateTodoById);

router.delete("/:id", deleteTodoById);

export default router;
