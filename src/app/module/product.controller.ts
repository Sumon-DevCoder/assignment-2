import { ProductServices } from "./product.services";
import { Request, Response } from "express";

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;

    const result = await ProductServices.createProductDB(productData);

    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "something went wrong",
      error: err,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductDB();

    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getProductSingleData = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    console.log(productId);
    const result = await ProductServices.getProductSingleValue(productId);

    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getProductSingleData,
};
