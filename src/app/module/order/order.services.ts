import { OrderItem } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrderDB = async (order: OrderItem) => {
  const result = await OrderModel.create(order);
  return result;
};

const getAllOrderFromDB = async () => {
  const result = await OrderModel.find();
  return result;
};

export const OrderServices = {
  createOrderDB,
  getAllOrderFromDB,
};
