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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductControllers = void 0;
const product_services_1 = require("./product.services");
const product_validation_1 = __importDefault(require("./product.validation"));
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        //  creating schema a validation using Joi
        const { error, value } = product_validation_1.default.validate(productData);
        const result = yield product_services_1.ProductServices.createProductDB(value);
        if (error) {
            res.status(500).json({
                success: false,
                message: "something went wrong",
                error: error.details,
            });
        }
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "something went wrong",
            error: err,
        });
    }
});
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        if (searchTerm) {
            const result = yield product_services_1.ProductServices.searchProductValue(searchTerm);
            res.status(200).json({
                success: true,
                message: `Products matching search term '${searchTerm}' fetched successfully!`,
                data: result,
            });
            if (!searchTerm) {
                return res
                    .status(400)
                    .json({ success: false, message: "Search term is required" });
            }
        }
        else {
            const result = yield product_services_1.ProductServices.getAllProductDB();
            res.status(200).json({
                success: true,
                message: "Products fetched successfully!",
                data: result,
            });
        }
    }
    catch (err) {
        console.log(err);
    }
});
const getProductSingleData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_services_1.ProductServices.getProductSingleValue(productId);
        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
const updateSingleData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const updatedData = req.body;
        //  creating schema a validation using Joi
        const { error, value } = product_validation_1.default.validate(updatedData);
        const result = yield product_services_1.ProductServices.updateProductSingleValue(productId, value);
        if (error) {
            res.status(500).json({
                success: false,
                message: error.message || "something went wrong",
                error: error.details,
            });
        }
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
const deleteSingleData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_services_1.ProductServices.deleteProductSingleValue(productId);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.ProductControllers = {
    createProduct,
    getAllProducts,
    getProductSingleData,
    updateSingleData,
    deleteSingleData,
};
