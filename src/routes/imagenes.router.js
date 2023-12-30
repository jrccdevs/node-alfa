import { Router } from "express";
import { check, validationResult } from 'express-validator'
import {createImagenes, getImagenes, deleteImagenes, updateImagenes,
  getImagenesNoticias,
  getImagenesBanner,
  getImagenesVademecum,
  getImagenesId,
  getFormaImage,
  getImagenesBannerRespon
} from '../controllers/imagenes.controllers.js';

//import fileUpload from "express-fileupload";


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

 /* router.post("/imagenes",fileUpload({
  useTempFiles: true,
  tempFileDir: "./uploads",
}),  createImagenes);*/

router.get("/imagenes", getImagenes);
router.get("/imagenes/:id", getImagenesId);
router.put("/imagenes/:id", updateImagenes);
router.delete("/imagenes/:id", deleteImagenes);

/* router.delete("/imagenes/:id",fileUpload({
  useTempFiles: true,
  tempFileDir: "./uploads",
}), deleteImagenes);
 */
router.get("/formaImage", getFormaImage);
// mostrando todos los productos
router.get("/responbanner", getImagenesBannerRespon);
router.get("/banner", getImagenesBanner);
router.get("/noticias", getImagenesNoticias);
router.get("/vademecum", getImagenesVademecum);


router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

export default router;




/* // validacion personalizado
.custom((value, { req }) => {
    //TODO: 18
    if (value) {
        throw new Error('Rango de edad debe ser entre 18 y 40')
    }
    return true
}) */