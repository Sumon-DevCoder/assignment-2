"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const productVariantSchema = new mongoose_1.Schema({
    type: {
        type: String,
        required: [true, "Variant type is required"],
        trim: true,
    },
    value: {
        type: String,
        required: [true, "Variant value is required"],
        trim: true,
    },
});
// Define the Inventory schema
const inventorySchema = new mongoose_1.Schema({
    quantity: {
        type: Number,
        required: [true, "Quantity is required"],
        min: [0, "Quantity cannot be negative"],
    },
    inStock: {
        type: Boolean,
        required: [true, "In stock status is required"],
    },
});
// Define the Product schema
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Product name is required"],
        trim: true,
        maxlength: [100, "Product name cannot exceed 100 characters"],
    },
    description: {
        type: String,
        required: [true, "Product description is required"],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, "Product price is required"],
        min: [0, "Product price cannot be negative"],
    },
    category: {
        type: String,
        required: [true, "Product category is required"],
        trim: true,
    },
    tags: {
        type: [String],
        validate: {
            validator: (value) => Array.isArray(value) && value.length > 0,
            message: "There must be at least one tag",
        },
    },
    variants: {
        type: [productVariantSchema],
        validate: {
            validator: (value) => Array.isArray(value) && value.length > 0,
            message: "There must be at least one variant",
        },
    },
    inventory: {
        type: inventorySchema,
        required: [true, "Inventory details are required"],
    },
});
// Create and export the Product model
exports.ProductModel = (0, mongoose_1.model)("Product", productSchema);
