import Router from "express";
import SnusController from "../controllers/index.js";

const router = new Router()

router.get("/", SnusController.getSnus)

export default router