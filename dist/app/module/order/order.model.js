"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const orderItemSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        match: [/.+@.+\..+/, "Please fill a valid email address"],
    },
    productId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: "Product",
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
    },
});
exports.OrderModel = mongoose_1.default.model("Order", orderItemSchema);
