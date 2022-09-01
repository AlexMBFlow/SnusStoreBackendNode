import Router from "express";
import SnusController from "../controllers/getSnus.js";

const router = new Router()

router.get("/snus", SnusController.getSnus)

export default router