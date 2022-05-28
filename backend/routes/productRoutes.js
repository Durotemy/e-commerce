import { requirePropFactory } from "@material-ui/core";
import express from "express";
// import asyncHandler from "express-async-handler";
const router = express.Router();

import { getProductById, getProducts } from "../controllers/productControllers.js"
// import {getProductById} from "../controllers/productControllers.js"
// import {getProducts} from "../controllers/productControllers.js"
// @ fetch all product;

// router.router.get('/', getProducts)
// //fetch @ product by id
// router.router.get('/:id', getProductById)
router.route('/').get(getProducts)
router.route('/:id').get(getProductById)
export default router;