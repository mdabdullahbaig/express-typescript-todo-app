"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodoById = exports.updateTodoById = exports.getTodoById = exports.getTodos = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODOS = [];
let id = 1;
// export const createTodo = (req: Request, res: Response, next:NextFunction) => {}
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const todo = new todo_1.Todo(id++, text);
    TODOS.push(todo);
    return res.status(201).json({ message: "Todo created", createdTodo: todo });
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    return res.status(200).json({ todos: TODOS });
};
exports.getTodos = getTodos;
const getTodoById = (req, res, next) => {
    const todoId = req.params.id;
    const todo = TODOS.find((todo) => todo.id === parseInt(todoId));
    return res.status(200).json({ todo });
};
exports.getTodoById = getTodoById;
const updateTodoById = (req, res, next) => {
    const todoId = req.params.id;
    const updatedText = req.body.text;
    const todoIndex = TODOS.findIndex((td) => td.id === parseInt(todoId));
    if (todoIndex < 0) {
        throw new Error("Could not find todos");
    }
    TODOS[todoIndex] = new todo_1.Todo(parseInt(todoId), updatedText);
    return res
        .status(200)
        .json({ message: "updated todo", todo: TODOS[todoIndex] });
};
exports.updateTodoById = updateTodoById;
const deleteTodoById = (req, res, next) => {
    const todoId = req.params.id;
    const todoIndex = TODOS.findIndex((td) => td.id === parseInt(todoId));
    if (todoIndex < 0) {
        throw new Error("Could not find todos");
    }
    TODOS.splice(todoIndex, 1);
    return res.status(200).json({ message: "Todo updated" });
};
exports.deleteTodoById = deleteTodoById;
