import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

router.get("/", ProductControllers.getAllProducts);

router.get("/", ProductControllers.getAllProducts);

router.post("/", ProductControllers.createProduct);

router.get("/:productId", ProductControllers.getProductSingleData);

router.put("/:productId", ProductControllers.updateSingleData);

router.delete("/:productId", ProductControllers.deleteSingleData);

export const ProdcutRoute = router;
