import {
  RequestHandler,
  //  Request, Response, NextFunction
} from "express";
import { Todo } from "../models/todo";
const TODOS: Todo[] = [];
let id: number = 1;

// export const createTodo = (req: Request, res: Response, next:NextFunction) => {}

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;

  const todo = new Todo(id++, text);

  TODOS.push(todo);
  return res.status(201).json({ message: "Todo created", createdTodo: todo });
};

export const getTodos: RequestHandler = (req, res, next) => {
  return res.status(200).json({ todos: TODOS });
};

export const getTodoById: RequestHandler = (req, res, next) => {
  const todoId = (req.params as { id: string }).id;

  const todo = TODOS.find((todo) => todo.id === parseInt(todoId));
  return res.status(200).json({ todo });
};

export const updateTodoById: RequestHandler = (req, res, next) => {
  const todoId = req.params.id;
  const updatedText = (req.body as { text: string }).text;

  const todoIndex = TODOS.findIndex((td) => td.id === parseInt(todoId));

  if (todoIndex < 0) {
    throw new Error("Could not find todos");
  }

  TODOS[todoIndex] = new Todo(parseInt(todoId), updatedText);

  return res
    .status(200)
    .json({ message: "updated todo", todo: TODOS[todoIndex] });
};

export const deleteTodoById: RequestHandler = (req, res, next) => {
  const todoId = (req.params as { id: string }).id;

  const todoIndex = TODOS.findIndex((td) => td.id === parseInt(todoId));
  if (todoIndex < 0) {
    throw new Error("Could not find todos");
  }

  TODOS.splice(todoIndex, 1);

  return res.status(200).json({ message: "Todo updated" });
};
