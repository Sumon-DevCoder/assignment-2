"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
// Define Joi schema for product variant
const productVariantSchemaJoi = joi_1.default.object({
    type: joi_1.default.string().trim().required().messages({
        "any.required": "Variant type is required",
        "string.empty": "Variant type cannot be empty",
    }),
    value: joi_1.default.string().trim().required().messages({
        "any.required": "Variant value is required",
        "string.empty": "Variant value cannot be empty",
    }),
});
// Define Joi schema for inventory
const inventorySchemaJoi = joi_1.default.object({
    quantity: joi_1.default.number().min(0).required().messages({
        "any.required": "Quantity is required",
        "number.base": "Quantity must be a number",
        "number.min": "Quantity cannot be negative",
    }),
    inStock: joi_1.default.boolean().required().messages({
        "any.required": "In stock status is required",
        "boolean.base": "In stock status must be a boolean value",
    }),
});
// Define Joi schema for product
const productSchemaJoi = joi_1.default.object({
    name: joi_1.default.string().trim().max(100).required().messages({
        "any.required": "Product name is required",
        "string.empty": "Product name cannot be empty",
        "string.max": "Product name cannot exceed 100 characters",
    }),
    description: joi_1.default.string().trim().required().messages({
        "any.required": "Product description is required",
        "string.empty": "Product description cannot be empty",
    }),
    price: joi_1.default.number().min(0).required().messages({
        "any.required": "Product price is required",
        "number.base": "Product price must be a number",
        "number.min": "Product price cannot be negative",
    }),
    category: joi_1.default.string().trim().required().messages({
        "any.required": "Product category is required",
        "string.empty": "Product category cannot be empty",
    }),
    tags: joi_1.default.array().items(joi_1.default.string()).min(1).required().messages({
        "any.required": "There must be at least one tag",
        "array.min": "There must be at least one tag",
        "array.includesRequiredUnknowns": "Tag must be a string",
    }),
    variants: joi_1.default.array()
        .items(productVariantSchemaJoi)
        .min(1)
        .required()
        .messages({
        "any.required": "There must be at least one variant",
        "array.min": "There must be at least one variant",
        "array.includesRequiredUnknowns": "Variant must be an object",
    }),
    inventory: inventorySchemaJoi.required().messages({
        "any.required": "Inventory details are required",
        "object.base": "Inventory details must be an object",
    }),
});
exports.default = productSchemaJoi;
