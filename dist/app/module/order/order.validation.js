"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const orderItemSchemaJoi = joi_1.default.object({
    email: joi_1.default.string().trim().email().required().messages({
        "any.required": "Email is required",
        "string.empty": "Email cannot be empty",
        "string.email": "Please provide a valid email address",
    }),
    productId: joi_1.default.string()
        .trim()
        .pattern(/^[0-9a-fA-F]{24}$/)
        .required()
        .messages({
        "any.required": "Product ID is required",
        "string.empty": "Product ID cannot be empty",
        "string.pattern.base": "Product ID must be a valid ObjectId",
    }),
    price: joi_1.default.number().min(0).required().messages({
        "any.required": "Price is required",
        "number.base": "Price must be a number",
        "number.min": "Price cannot be negative",
    }),
    quantity: joi_1.default.number().min(1).required().messages({
        "any.required": "Quantity is required",
        "number.base": "Quantity must be a number",
        "number.min": "Quantity must be at least 1",
    }),
});
exports.default = orderItemSchemaJoi;
