import express from "express";
import { OrderControllers } from "./order.controller";

const router = express.Router();

// router.get("/", OrderControllers.getAllOrders);

router.post("/", OrderControllers.createOrder);

router.get("/", OrderControllers.getOrdersByUserEmail);

export const OrderRoute = router;
