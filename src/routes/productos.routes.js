import { Router } from "express";
import {
    getProductos,
    getProducto,
    createProductos,
    updateProductos,
    deleteProducto
  } from "../controllers/productos.controllers.js";
  

const router = Router();

router.get("/productos", getProductos);

router.get("/productos/:id", getProducto);

router.post("/productos", createProductos);

router.put("/productos/:id", updateProductos);

router.delete("/productos/:id", deleteProducto);

export default router;