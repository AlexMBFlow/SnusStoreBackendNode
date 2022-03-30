import Router from "express";
import snus from "./snus.js";

const router = new Router();

router.use("/snus", snus)

export default router