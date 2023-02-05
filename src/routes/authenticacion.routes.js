import { Router } from "express";
import {createUsuarios, loginUsuarios, logout} from '../controllers/authenticacion.controllers.js';


const router = Router();

//router.get("/usuarios", listarUser)


router.post("/usuarios", createUsuarios);
router.post("/login", loginUsuarios);
router.get("/logout", logout);

export default router;