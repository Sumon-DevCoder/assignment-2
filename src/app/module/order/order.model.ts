const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Product",
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
});

export const OrderModel = mongoose.model("Order", orderItemSchema);
