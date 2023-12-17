import { Router } from "express";
import { check, validationResult } from 'express-validator'
import fs from 'fs-extra';
import { pool } from "../db.js";
import {createImagenesEmpresa, getEmpresa, updateImagenes, getEmpresaId,
  deleteEmpresa,
 
} from '../controllers/banneremp.controllers.js';




//import fileUpload from "express-fileupload";


const router = Router();

// mostrando todos los productos
 router.post("/empresa", createImagenesEmpresa);
router.get("/empresa", getEmpresa);
router.get("/empresa/:id", getEmpresaId);
router.put("/empresa/:id", updateImagenes);
router.delete("/empresa/:id", deleteEmpresa);

/* router.delete("/imagenes/:id",fileUpload({
  useTempFiles: true,
  tempFileDir: "./uploads",
}), deleteImagenes);
 */

export default router;


