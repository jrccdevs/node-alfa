import { uploadImage } from "../libs/cloudinary.js";
import { pool } from "../db.js";
import fs from 'fs-extra';


export const getProductos = async (req, res) => {
  

  try {
    const [result] = await pool.query(
      "SELECT * FROM tblproductos  ORDER BY nombreproducto DESC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


export const getProducto = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM tblproductos WHERE formafarmaceutica = 'GOTAS'", [
      req.params.formafarmaceutica,
    ]);

    if (result.length === 0)
      return res.status(404).json({ message: "no hay productos" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProductos = async (req, res) => {


  try {
  const { codigoproducto,
    nombreproducto,
    principioactivo,
    accionterapeutica,
    formafarmaceutica,
    precio,
    presentacion,
    
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
    "INSERT INTO tblproductos(codigoproducto, nombreproducto, principioactivo, accionterapeutica, formafarmaceutica, precio, presentacion, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [codigoproducto,
      nombreproducto,
      principioactivo,
      accionterapeutica,
      formafarmaceutica,
      precio,
      presentacion,
      image]
  );
  console.log(resultado)


  res.json({
    id: resultado.insertId,
    codigoproducto,
    nombreproducto,
    principioactivo,
    accionterapeutica,
    formafarmaceutica,
    precio,
    presentacion,
    image
  });
   } catch (error) {
     console.log(error)
     return res.status(500).json({ message: error.message });
   }
};


export const updateProductos = async (req, res) => {
  try {
    
    if (req.files?.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
      await fs.remove(req.files.image.tempFilePath);
      req.body.image = result.secure_url
    }
     
    const resultado = await pool.query("UPDATE tblproductos SET ? WHERE id = ?", [
      req.body,
      req.params.id,
      req.body.image,
    ]);
    res.json(resultado);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


export const deleteProducto = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM tblproductos WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Task not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};