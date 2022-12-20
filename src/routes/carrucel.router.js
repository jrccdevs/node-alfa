import { Router } from "express";
import {createCarrucel, getCarrucel} from '../controllers/carrucel.controllers.js';


const router = Router();

// carrucel 
//insertar imagen de carrucel
router.post("/carrucel", createCarrucel);

router.get("/carrucel", getCarrucel);
export default router;