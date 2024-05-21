import { Product } from "./product.interfaces";
import { ProductModel } from "./product.model";

const createProductDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const getProductSingleValue = async (_id: string) => {
  const result = await ProductModel.findOne({ _id });
  return result;
};

export const ProductServices = {
  createProductDB,
  getAllProductDB,
  getProductSingleValue,
};
