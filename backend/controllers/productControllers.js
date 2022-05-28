import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";
console.log(Product);

export const getProducts = async (req, res) => {
  const products = await Product.find({});
  res.send(products);
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).send(`no product id was provided`);
  }
  const product = await Product.findById(id);
  if (!product) {
    return res.status(404).send(`no product is found`);
  }
  res.json(product);
};

// export default { getProducts, getProductById };
