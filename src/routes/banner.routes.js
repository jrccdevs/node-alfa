import { Router } from "express";
import { check, validationResult } from 'express-validator'
import fs from 'fs-extra';
import { pool } from "../db.js";
import { uploadBannerEmpresa } from "../libs/cloudinary.js";
import {createBannerAlfa, getBannerAlfa, updateBannerAlfa, getBannerAlfaId,
    deleteBannerAlfa,
  
} from '../controllers/banner.controllers.js';




//import fileUpload from "express-fileupload";


const router = Router();

// mostrando todos los productos
 router.post("/banneralfa", createBannerAlfa);
router.get("/banneralfa/:id", getBannerAlfaId);
router.get("/banneralfa", getBannerAlfa);
router.put("/banneralfa/:id", updateBannerAlfa);
router.delete("/banneralfa/:id", deleteBannerAlfa);


export default router;


