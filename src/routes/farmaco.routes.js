import { Router } from "express";
import {createFarmaco} from '../controllers/farmaco.controllers.js';


const router = Router();

// carrucel 
//insertar imagen de carrucel
router.post("/farmaco", createFarmaco);


export default router;