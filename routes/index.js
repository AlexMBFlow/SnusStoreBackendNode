import Router from "express";
import snus from "./snus.js";
import Order from "./order.js"

const router = new Router();

router.use("/", snus)
router.use("/", Order)

export default router