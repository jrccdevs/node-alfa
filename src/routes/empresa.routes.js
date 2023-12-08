import { Router } from "express";
import { check, validationResult } from 'express-validator'
import fs from 'fs-extra';
import { pool } from "../db.js";
import { uploadBannerEmpresa } from "../libs/cloudinary.js";
import {createEmpresaAlfa, getEmpresaAlfa, updateEmpresa, getEmpresaAlfaId,
    deleteEmpresaAlfa,
 
} from '../controllers/empresa.controllers.js';




//import fileUpload from "express-fileupload";


const router = Router();

// mostrando todos los productos
 router.post("/empresaalfa", createEmpresaAlfa);

router.get("/empresaalfa/:id", getEmpresaAlfaId);
router.get("/empresaalfa", getEmpresaAlfa);
router.put("/empresaalfa/:id", updateEmpresa);
router.delete("/empresaalfa/:id", deleteEmpresaAlfa);

export default router;


