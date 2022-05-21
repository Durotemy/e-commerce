import { requirePropFactory } from "@material-ui/core";
import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Product from "../models/productModel.js";

// @ fetch all product;

router.get('/', async (req, res) => {
    const product = await Product.find({});
    res.send(product);
})
//fetch @ product by id
router.get('/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        res.status(404);
        throw new Error('Product not found')
    }
    if (req.params.id.length !== 24) {
        res.send(`Error has occured here`)
    }
    res.json(product)
})

export default router;