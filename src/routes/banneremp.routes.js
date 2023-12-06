import { Router } from "express";
import { check, validationResult } from 'express-validator'
import fs from 'fs-extra';
import { pool } from "../db.js";
import { uploadBannerEmpresa } from "../libs/cloudinary.js";
import {createImagenesEmpresa, getEmpresa, updateImagenes, getEmpresaId,
  deleteEmpresa,
  getMovil,
  getBanner,
 
} from '../controllers/banneremp.controllers.js';




//import fileUpload from "express-fileupload";


const router = Router();

// mostrando todos los productos
 router.post("/empresa", createImagenesEmpresa);

 /* router.post('/empresa', async (req, res) => {
  try {
    // Obtener el archivo y otros datos del cuerpo de la solicitud
    const {  descripcion,
      estado,
      identificador,
      archivo,
      anio,
      categoria,
      image,
      accion,
      } = req.body;

    // Ajustar el límite de tamaño aquí (en bytes)
    const maxFileSize = 100 * 1024 * 1024;

    // Verificar el tamaño del archivo
    const base64FileSize = archivo * 0.75;
    if (base64FileSize > maxFileSize) {
      return res.status(400).json({ message: 'El tamaño del archivo es demasiado grande.' });
    }
    // Subir el archivo a Cloudinary
    const result = await uploadBannerEmpresa(req.files.archivo.tempFilePath);
     
    await fs.remove(req.files.archivo.tempFilePath);
    archivo = result.secure_url

    // Guardar información del archivo en la base de datos MySQL
    //const {imagen} = image;
    const [resultado] = await pool.query(
      "INSERT INTO tblemprebanner(descripcion, estado, identificador, archivo, anio, categoria, image, accion) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [descripcion,
      estado,
      identificador,
      archivo,
      anio,
      categoria,
      image,
      accion
        ]
    );
    console.log(resultado)
  
  
    res.json({
      id: resultado.insertId,
      descripcion,
      estado,
      identificador,
      archivo,
      anio,
      categoria,
      image,
      accion
      
      
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message });
    console.log(error)
  }
});
 */
 /* router.post("/imagenes",fileUpload({
  useTempFiles: true,
  tempFileDir: "./uploads",
}),  createImagenes);*/
router.get("/banner", getBanner);
router.get("/movil", getMovil);
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


