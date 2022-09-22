import Router from "express";
import Snus from "./snus.js";
import Order from "./order.js";

const routerShop = new Router();

routerShop.use("/", Snus);
routerShop.use("/", Order);

export default routerShop