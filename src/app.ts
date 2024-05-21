import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProdcutRoute } from "./app/module/product.route";
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application route
app.use("/api/products", ProdcutRoute);

// route
app.get("/", (req: Request, res: Response) => {
  res.send("server is running...");
});

export default app;
