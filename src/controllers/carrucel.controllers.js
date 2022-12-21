import { uploadImage } from "../libs/cloudinary.js";
import { pool } from "../db.js";
import fs from 'fs-extra';

export const createCarrucel = async (req, res) => {


    try {
    const { nombre,
      
      
       } = req.body;
  
    let image;
    if (req.files.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
     
      await fs.remove(req.files.image.tempFilePath);
      image = result.secure_url
        //public_id: result.public_id,
     // };
    }
    //const {imagen} = image;
    const [resultado] = await pool.query(
      "INSERT INTO tblcarrucel(nombre, image) VALUES (?, ?)",
      [nombre,
        image]
    );
    console.log(resultado)
  
  
    res.json({
      id: resultado.insertId,
      nombre,
      
      image
    });
     } catch (error) {
       console.log(error)
       return res.status(500).json({ message: error.message });
     }
  };
  
  export const getCarrucel = async (req, res) => {
  

    try {
      const [result] = await pool.query(
        "SELECT * FROM tblcarrucel  ORDER BY nombre DESC"
      );
      res.json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };