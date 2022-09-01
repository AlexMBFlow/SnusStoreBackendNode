import Router from "express";
import ChatController from "../controllers/chatController.js";

const router = new Router()

router.post("/chat", ChatController.printMsg)

export default router