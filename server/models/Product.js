const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      maxlength: 50,
    },
    description: {
      type: String,
    },
    contact: {
      type: String,
      maxlength: 50,
    },
    project: {
      type: String,
      maxlength: 50,
    },
    url: {
      type: String,
    },
    address: {
      type: String,
    },
    images: {
      type: Array,
      default: [],
    },
    category: {
      type: Number,
      default: 1,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

productSchema.index(
  {
    title: "text",
    description: "text",
    address: "text",
  },
  {
    weights: {
      title: 5,
      address: 2,
      description: 1,
    },
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = { Product };
