import { uploadEmpresaAlfa } from "../libs/cloudinary.js";
import { pool } from "../db.js";
import fs from 'fs-extra';



//cresando imagenes para el banner y la empresa

export const createEmpresaAlfa = async (req, res) => {


    try {
    const { descripcion,
      identificador,
      anio,
      estado,
      accion,
       } = req.body;
  
 
    let image;
    if (req.files?.image) {
      const result = await uploadEmpresaAlfa(req.files.image.tempFilePath);
     
      await fs.remove(req.files.image.tempFilePath);
      image = result.secure_url
        //public_id: result.public_id,
     // };
    }
    //const {imagen} = image;
    const [resultado] = await pool.query(
      "INSERT INTO tblemprebanner(descripcion, identificador, anio, estado, accion, image) VALUES (?, ?, ?, ?, ?, ?)",
      [descripcion, 
      identificador,
      anio,
      estado,
      accion,
      image,
        ]
    );
    console.log(resultado)
  
  
    res.json({
      id: resultado.insertId,
      descripcion, 
      identificador,
      anio,
      estado,
      accion,
      image,
      
      
    });
     } catch (error) {
       console.log(error)
       return res.status(500).json({ message: error.message });
       console.log(error)
     }
  };
  
  export const getEmpresaAlfa = async (req, res) => {
  

    try {
      const [result] = await pool.query(
        "SELECT * FROM tblempresa  ORDER BY identificador DESC"
      );
      res.json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };


  
  
  export const updateEmpresa = async (req, res) => {
    try {
      if (req.files?.image) {
        const result = await uploadEmpresaAlfa(req.files.image.tempFilePath);
        await fs.remove(req.files.image.tempFilePath);
        req.body.image = result.secure_url;
      }
  
      const resultado = await pool.query(
        "UPDATE tblempresa SET ? WHERE id = ?",
        [req.body, req.params.id, req.body.archivo]
      );
      res.json(resultado);
    } catch (error) {
      return res.status(500).json({ message: error.message });
      console-log(error)
    }
  };
  
//mostrando detalle de imagenes por ID
export const getEmpresaAlfaId = async (req, res) => {
  // Recogemos un parametro por la url
  const id = req.params.id;

  try {
    const [result] = await pool.query(
      "SELECT * FROM tblempresa WHERE id = ?",
      [id]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};





  export const deleteEmpresaAlfa = async (req, res) => {
    try {
      const [result] = await pool.query("DELETE FROM tblempresa WHERE id = ?", [
        req.params.id,
      ]);
  
      if (result.affectedRows === 0)
        return res.status(404).json({ message: "Task not found" });
  
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  