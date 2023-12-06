import { uploadBannerEmpresa } from "../libs/cloudinary.js";
import { pool } from "../db.js";
import fs from 'fs-extra';



//cresando imagenes para el banner y la empresa

export const createImagenesEmpresa = async (req, res) => {


    try {
    const { descripcion,
      estado,
      identificador,
      anio,
      categoria,
      accion,
       } = req.body;
  
       

      

    let archivo;
    if (req.files?.archivo) {
      const result = await uploadBannerEmpresa(req.files.archivo.tempFilePath);
     
      await fs.remove(req.files.archivo.tempFilePath);
      archivo = result.secure_url
        //public_id: result.public_id,
     // };
    }
    let image;
    if (req.files?.image) {
      const result = await uploadBannerEmpresa(req.files.image.tempFilePath);
     
      await fs.remove(req.files.image.tempFilePath);
      image = result.secure_url
        //public_id: result.public_id,
     // };
    }
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
  };
  
  export const getEmpresa = async (req, res) => {
  

    try {
      const [result] = await pool.query(
        "SELECT * FROM tblemprebanner  ORDER BY identificador DESC"
      );
      res.json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };


  export const getMovil = async (req, res) => {
  

    try {
      const [result] = await pool.query(
        "SELECT * FROM tblemprebanner WHERE categoria = 'MOVIL' and estado = 'ACTIVO'  ORDER BY identificador DESC"
      );
      res.json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  export const getBanner = async (req, res) => {
  

    try {
      const [result] = await pool.query(
        "SELECT * FROM tblemprebanner WHERE categoria = 'BANNER' and estado = 'ACTIVO'  ORDER BY identificador DESC"
      );
      res.json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  export const updateImagenes = async (req, res) => {
    try {
      if (req.files?.archivo) {
        const result = await uploadControl(req.files.archivo.tempFilePath);
        await fs.remove(req.files.archivo.tempFilePath);
        req.body.archivo = result.secure_url;
      }
  
      const resultado = await pool.query(
        "UPDATE tblemprebanner SET ? WHERE id = ?",
        [req.body, req.params.id, req.body.archivo]
      );
      res.json(resultado);
    } catch (error) {
      return res.status(500).json({ message: error.message });
      console-log(error)
    }
  };
  
//mostrando detalle de imagenes por ID
export const getEmpresaId = async (req, res) => {
  // Recogemos un parametro por la url
  const id = req.params.id;

  try {
    const [result] = await pool.query(
      "SELECT * FROM tblemprebanner WHERE id = ?",
      [id]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


//mostrando detalle de imagenes por ID
export const getMovilId = async (req, res) => {
  // Recogemos un parametro por la url
  const id = req.params.id;

  try {
    const [result] = await pool.query(
      "SELECT * FROM tblemprebanner WHERE id = ? and categoria = 'MOVIL'",
      [id]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//mostrando detalle de imagenes por ID
export const getBannerId = async (req, res) => {
  // Recogemos un parametro por la url
  const id = req.params.id;

  try {
    const [result] = await pool.query(
      "SELECT * FROM tblemprebanner WHERE id = ? and categoria = 'BANNER'",
      [id]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


  export const deleteEmpresa = async (req, res) => {
    try {
      const [result] = await pool.query("DELETE FROM tblemprebanner WHERE id = ?", [
        req.params.id,
      ]);
  
      if (result.affectedRows === 0)
        return res.status(404).json({ message: "Task not found" });
  
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  