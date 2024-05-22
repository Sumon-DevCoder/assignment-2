import { Request, Response } from "express";
import { OrderServices } from "./order.services";
import orderItemSchemaJoi from "./order.validation";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;

    //  creating schema a validation using Joi
    const { error, value } = orderItemSchemaJoi.validate(orderData);
    const result = await OrderServices.createOrderDB(value);

    if (error) {
      res.status(500).json({
        success: false,
        message: "something went wrong",
        error: error.details,
      });
    }

    res.status(200).json({
      success: true,
      message: "Order created successfully!",
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

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const userEmail = req.query.email as string;

    if (userEmail) {
      const result = await OrderServices.getOrdersByUserEmailDB(userEmail);

      res.status(200).json({
        success: true,
        message: "Orders fetched successfully!",
        data: result,
      });
    } else {
      const result = await OrderServices.getAllOrderFromDB();

      res.status(200).json({
        success: true,
        message: "Orders fetched successfully!",
        data: result,
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong!",
    });
  }
};

export const OrderControllers = {
  createOrder,
  getAllOrders,
};
