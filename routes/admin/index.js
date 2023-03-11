import Router from "express";
import EditsController from "../../controllers/admin/editsController.js";
import activeOrdersController from "../../controllers/admin/activeOrdersController.js";

const routerAdmin = new Router();

routerAdmin.use("/edit", EditsController.editProduct);
routerAdmin.use("/active", activeOrdersController.getAllActiveOrders);

export default routerAdmin