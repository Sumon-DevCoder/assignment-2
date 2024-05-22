"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdcutRoute = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
// router.get("/", ProductControllers.getAllProducts);
router.get("/", product_controller_1.ProductControllers.searchProduct);
router.post("/", product_controller_1.ProductControllers.createProduct);
router.get("/:productId", product_controller_1.ProductControllers.getProductSingleData);
router.put("/:productId", product_controller_1.ProductControllers.updateSingleData);
router.delete("/:productId", product_controller_1.ProductControllers.deleteSingleData);
exports.ProdcutRoute = router;
