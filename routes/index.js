import Router from "express";
import snus from "./snus.js";
import Order from "./order.js";
import ChatMsg from "./chat.js";

const router = new Router();

router.use("/", snus)
router.use("/", Order)
router.use("/", ChatMsg)

export default router