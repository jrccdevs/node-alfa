import { uploadBannerAlfa } from "../libs/cloudinary.js";
import { pool } from "../db.js";
import fs from 'fs-extra';



//cresando imagenes para el banner y la empresa

export const createBannerAlfa = async (req, res) => {


    try {
    const { descripcion,
      estado,
      accion,
       } = req.body;
  
       let image;
       if (req.files?.image) {
         const result = await uploadBannerAlfa(req.files.image.tempFilePath);
        
         await fs.remove(req.files.image.tempFilePath);
         image = result.secure_url
           //public_id: result.public_id,
        // };
       } 


    let archivo;
    if (req.files?.archivo) {
      const result = await uploadBannerAlfa(req.files.archivo.tempFilePath);
     
      await fs.remove(req.files.archivo.tempFilePath);
      archivo = result.secure_url
        //public_id: result.public_id,
     // };
    }
  
    //const {imagen} = image;
    const [resultado] = await pool.query(
      "INSERT INTO tblbanner(descripcion, estado,  accion, image, archivo) VALUES (?, ?, ?, ?, ?)",
      [descripcion,
        estado,
        accion,
        image,
      archivo,
        ]
    );
    console.log(resultado)
  
  
    res.json({
        id: resultado.insertId,
        descripcion,
        estado,
        accion,
        image,
        archivo
        
        
      });
     } catch (error) {
       console.log(error)
       return res.status(500).json({ message: error.message });
       console.log(error)
     }
  };
  
  export const getBannerAlfa = async (req, res) => {
  

    try {
      const [result] = await pool.query(
        "SELECT * FROM tblbanner  ORDER BY descripcion DESC"
      );
      res.json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };


 
  export const updateBannerAlfa = async (req, res) => {
    try {
      if (req.files?.archivo) {
        const result = await uploadBannerAlfa(req.files.archivo.tempFilePath);
        await fs.remove(req.files.archivo.tempFilePath);
        req.body.archivo = result.secure_url;
      }
  
      const resultado = await pool.query(
        "UPDATE tblbanner SET ? WHERE id = ?",
        [req.body, req.params.id, req.body.archivo]
      );
      res.json(resultado);
    } catch (error) {
      return res.status(500).json({ message: error.message });
      console-log(error)
    }
  };
  
//mostrando detalle de imagenes por ID
export const getBannerAlfaId = async (req, res) => {
  // Recogemos un parametro por la url
  const id = req.params.id;

  try {
    const [result] = await pool.query(
      "SELECT * FROM tblbanner WHERE id = ?",
      [id]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};






  export const deleteBannerAlfa = async (req, res) => {
    try {
      const [result] = await pool.query("DELETE FROM tblbanner WHERE id = ?", [
        req.params.id,
      ]);
  
      if (result.affectedRows === 0)
        return res.status(404).json({ message: "Task not found" });
  
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  