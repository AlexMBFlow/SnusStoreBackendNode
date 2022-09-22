import Router from "express";
import EditsController from "../../controllers/admin/editsController.js";

const routerAdmin = new Router();

routerAdmin.use("/edit", EditsController.editProduct);

export default routerAdmin