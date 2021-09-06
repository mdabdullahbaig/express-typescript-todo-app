"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const todo_1 = __importDefault(require("./routes/todo"));
const app = (0, express_1.default)();
const PORT = 4000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)({
    origin: "*",
    credentials: true,
    methods: "OPTIONS, GET, HEAD, PUT, PATCH, POST, DELETE",
    allowedHeaders: ["Content-Type", "Depth", "User-Agent", "Cache-Control"],
}));
app.use("/todos", todo_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(PORT, () => {
    console.log(`Server is listenning on ${PORT}`);
});
