import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

router.get("/", ProductControllers.getAllProducts);

router.post("/create-product", ProductControllers.createProduct);

router.get("/:productId", ProductControllers.getProductSingleData);

export const ProdcutRoute = router;
