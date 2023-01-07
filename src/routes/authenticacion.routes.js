import { Router } from "express";
import {createUsuarios, loginUsuarios} from '../controllers/authenticacion.controllers.js';


const router = Router();

//router.get("/usuarios", listarUser)


router.post("/usuarios", createUsuarios);
router.post("/login", loginUsuarios);


export default router;