import Router from "express";
import OrderController from "../controllers/orderController.js";

const router = new Router();

router.post("/order", OrderController.SaveOrder);

export default router