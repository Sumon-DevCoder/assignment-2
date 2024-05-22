"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderServices = void 0;
const product_model_1 = require("../product/product.model");
const order_model_1 = require("./order.model");
const createOrderDB = (order) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.ProductModel.findById(order.productId);
    console.log("my pp", product);
    if (!product) {
        throw Error("no product found");
    }
    if (order.quantity > product.inventory.quantity) {
        throw Error("Insufficient quantity available in inventory");
    }
    product.inventory.quantity -= order.quantity; // update inventory quantity
    product.inventory.inStock = product.inventory.quantity > 0; // update stock status
    yield product.save(); // save product data in update quantity
    const result = yield order_model_1.OrderModel.create(order); // create order
    return result;
});
const getAllOrderFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.OrderModel.find();
    if (result.length === 0) {
        throw Error("Order not found");
    }
    return result;
});
const getOrdersByUserEmailDB = (userEmail) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.OrderModel.find({ email: userEmail });
    if (result.length === 0) {
        throw Error("Order not found");
    }
    return result;
});
exports.OrderServices = {
    createOrderDB,
    getAllOrderFromDB,
    getOrdersByUserEmailDB,
};
