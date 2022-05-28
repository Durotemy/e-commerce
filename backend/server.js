
import express from "express";
import dotenv from 'dotenv';
import connectDB from './config/db.js'
// import products from "./data/products.js"
import colors from "colors";
import bcrypt from "bcryptjs";
import productsRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js"
// import router from "./routes/userRoutes.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"

dotenv.config()
connectDB()
const app = express();
app.use(express.json())
app.use("/api/products", productsRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold))
