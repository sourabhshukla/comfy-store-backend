import express from "express";
import productRoute from "./product.route";
import authRoute from "./auth.route";
import userRoute from "./user.route";
import cartRoute from "./cart.route";
import orderRoute from "./order.route";
const router = express.Router();

router.use("/products", productRoute);
router.use("/auth", authRoute);
router.use("/user", userRoute);
router.use("/cart", cartRoute);
router.use("/order", orderRoute);

export default router;
