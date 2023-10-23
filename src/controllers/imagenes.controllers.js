import { uploadControl } from "../libs/cloudinary.js";
import { pool } from "../db.js";
import fs from 'fs-extra';


//mostrando todos las formas farmaceuticas
export const getFormaImage = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM tblimagenes  ORDER BY nombre DESC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


export const createImagenes = async (req, res) => {


    try {
    const { nombre,
      estado,
      categoria,
       } = req.body;
  
    let image;
    if (req.files?.image) {
      const result = await uploadControl(req.files.image.tempFilePath);
     
      await fs.remove(req.files.image.tempFilePath);
      image = result.secure_url
        //public_id: result.public_id,
     // };
    }
    //const {imagen} = image;
    const [resultado] = await pool.query(
      "INSERT INTO tblimagenes(nombre, image, estado, categoria) VALUES (?, ?, ?, ?)",
      [nombre,
      estado,
      categoria,
        image]
    );
    console.log(resultado)
  
  
    res.json({
      id: resultado.insertId,
      nombre,
      estado,
      categoria,
      
      image
    });
     } catch (error) {
       console.log(error)
       return res.status(500).json({ message: error.message });
       console.log(error)
     }
  };
  
  export const getImagenes = async (req, res) => {
  

    try {
      const [result] = await pool.query(
        "SELECT * FROM tblimagenes  ORDER BY nombre DESC"
      );
      res.json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };


  export const updateImagenes = async (req, res) => {
    try {
      if (req.files?.image) {
        const result = await uploadControl(req.files.image.tempFilePath);
        await fs.remove(req.files.image.tempFilePath);
        req.body.image = result.secure_url;
      }
  
      const resultado = await pool.query(
        "UPDATE tblimagenes SET ? WHERE id = ?",
        [req.body, req.params.id, req.body.image]
      );
      res.json(resultado);
    } catch (error) {
      return res.status(500).json({ message: error.message });
      console-log(error)
    }
  };
  
//mostrando detalle de imagenes por ID
export const getImagenesId = async (req, res) => {
  // Recogemos un parametro por la url
  const id = req.params.id;

  try {
    const [result] = await pool.query(
      "SELECT * FROM tblimagenes WHERE id = ?",
      [id]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};




  export const deleteImagenes = async (req, res) => {
    try {
      const [result] = await pool.query("DELETE FROM tblimagenes WHERE id = ?", [
        req.params.id,
      ]);
  
      if (result.affectedRows === 0)
        return res.status(404).json({ message: "Task not found" });
  
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
// mostrar imagenes del banner
  export const getImagenesBanner = async (req, res) => {
    try {
      const [result] = await pool.query(
        "SELECT * FROM tblimagenes WHERE categoria= 'BANNER' AND estado = 'ACTIVO' ORDER BY nombre DESC"
      );
      res.json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };


  export const getImagenesNoticias = async (req, res) => {
    try {
      const [result] = await pool.query(
        "SELECT * FROM tblimagenes WHERE categoria= 'NOTICIAS' AND estado = 'ACTIVO' ORDER BY nombre DESC"
      );
      res.json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };


  export const getImagenesVademecum = async (req, res) => {
    try {
      const [result] = await pool.query(
        "SELECT * FROM tblimagenes WHERE categoria= 'VADEMECUM' AND estado = 'ACTIVO' ORDER BY nombre DESC"
      );
      res.json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };


  export const getProductosCarrucel = async (req, res) => {
    try {
      const [result] = await pool.query(
        "SELECT * FROM tblproductos WHERE carrucel= 'ACTIVO' ORDER BY nombreproducto DESC"
      );
      res.json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };