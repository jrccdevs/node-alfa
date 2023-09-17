import { Router } from "express";
import { check, validationResult } from 'express-validator'
import {createImagenes, getImagenes, deleteImagenes, updateImagenes,
  getImagenesNoticias,
  getImagenesBanner,
  getImagenesVademecum
} from '../controllers/imagenes.controllers.js';


const router = Router();

// carrucel 
//insertar imagen de carrucel
/* router.post("/carrucel",  [
    check('nombre')
    .exists()
    .not()
    .isLength({ min: 50 }),
    check('image')
 
    .matches(/\.(mp4|mkv|png)$/)
    
  
  ], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    // Your logic here
  },
 createCarrucel);
 */

// mostrando todos los productos
 router.post("/imagenes", createImagenes);
router.get("/imagenes", getImagenes);
router.get("/imagenes/:id", updateImagenes);
router.get("/imagenes/:id", deleteImagenes);

// mostrando todos los productos
router.get("/imagenes", getImagenesBanner);
router.get("/imagenes", getImagenesNoticias);
router.get("/imagenes", getImagenesVademecum);


export default router;




/* // validacion personalizado
.custom((value, { req }) => {
    //TODO: 18
    if (value) {
        throw new Error('Rango de edad debe ser entre 18 y 40')
    }
    return true
}) */