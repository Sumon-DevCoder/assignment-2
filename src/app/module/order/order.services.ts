import { OrderItem } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrderDB = async (order: OrderItem) => {
  const result = await OrderModel.create(order);
  return result;
};

const getAllOrderFromDB = async () => {
  const result = await OrderModel.find();
  if (result.length === 0) {
    throw Error("Order not found");
  }
  return result;
};

const getOrdersByUserEmailDB = async (userEmail: string) => {
  const result = await OrderModel.find({ email: userEmail });
  if (result.length === 0) {
    throw Error("Order not found");
  }
  return result;
};

export const OrderServices = {
  createOrderDB,
  getAllOrderFromDB,
  getOrdersByUserEmailDB,
};
