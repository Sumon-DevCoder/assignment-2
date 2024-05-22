import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProdcutRoute } from "./app/module/product/product.route";
import { OrderRoute } from "./app/module/order/order.route";
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application route
app.use("/api/products", ProdcutRoute);
app.use("/api/orders", OrderRoute);

// route
app.get("/", (req: Request, res: Response) => {
  res.send("server is running...");
});

app.all("/*", (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;
