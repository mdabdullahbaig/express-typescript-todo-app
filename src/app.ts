import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import todoRoute from "./routes/todo";

const app = express();

const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: "OPTIONS, GET, HEAD, PUT, PATCH, POST, DELETE",
    allowedHeaders: ["Content-Type", "Depth", "User-Agent", "Cache-Control"],
  })
);

app.use("/todos", todoRoute);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`Server is listenning on ${PORT}`);
});
