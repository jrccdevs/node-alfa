import { uploadImage, uploadProspecto } from "../libs/cloudinary.js";
import { pool } from "../db.js";
import fs from "fs-extra";

//mostrar los productos por carrucel activo
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


//mostrando todos los productos
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

//mostrando detalle de producto por ID
export const getProductosId = async (req, res) => {
  // Recogemos un parametro por la url
  const id = req.params.id;

  try {
    const [result] = await pool.query(
      "SELECT * FROM tblproductos WHERE id = ?",
      [id]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//mostrando todos las formas farmaceuticas
export const getFormaFarma = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM tblproductos  ORDER BY nombreproducto ASC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//mostrando todos las formas farmaceuticas
// export const getForma = async (req, res) => {
//   try {
//     const [result] = await pool.query(
//       "SELECT DISTINCT formafarmaceutica from tblproductos"
//     );
//     res.json(result);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

//mostrando detalle de producto por formaFarmaceutica
export const getProductosCate = async (req, res) => {
  // Recogemos un parametro por la url
  const categoria = req.params.categoria;

  try {
    const [result] = await pool.query(
      "SELECT * FROM tblproductos WHERE categoria = ?",
      [categoria]
    );

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProductosCapsulas = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM tblproductos WHERE categoria = 'CAPSULAS' ORDER BY nombreproducto DESC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProductosComprimidos = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM tblproductos WHERE categoria = 'COMPRIMIDOS' ORDER BY nombreproducto DESC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProductosCremas = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM tblproductos WHERE categoria = 'CREMAS' ORDER BY nombreproducto DESC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProductosGel = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM tblproductos WHERE categoria = 'GEL' ORDER BY nombreproducto DESC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProductosGotas = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM tblproductos WHERE categoria = 'GOTAS' ORDER BY nombreproducto DESC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProductosGranulado = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM tblproductos WHERE categoria = 'GRANULADO' ORDER BY nombreproducto DESC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProductosInyectable = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM tblproductos WHERE categoria = 'INYECTABLE' ORDER BY nombreproducto DESC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProductosJarabe = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM tblproductos WHERE categoria = 'JARABES' ORDER BY nombreproducto DESC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProductosPolvo = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM tblproductos WHERE categoria = 'POLVO' ORDER BY nombreproducto DESC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProductosPomada = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM tblproductos WHERE categoria = 'POMADA' ORDER BY nombreproducto DESC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProductosShampo = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM tblproductos WHERE categoria = 'SHAMPO' ORDER BY nombreproducto DESC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProductosSolucion = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM tblproductos WHERE categoria = 'SOLUCION' ORDER BY nombreproducto DESC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProductosSupositorio = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM tblproductos WHERE categoria = 'SUPOSITORIO' ORDER BY nombreproducto DESC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProductosSuspencion = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM tblproductos WHERE categoria = 'SUSPENSION' ORDER BY nombreproducto DESC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProductosTableta = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM tblproductos WHERE categoria = 'TABLETAS' ORDER BY nombreproducto DESC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// funcion prar eliminar un producto
export const getProducto = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM tblproductos WHERE categoria = 'GOTAS'",
      [req.params.formafarmaceutica]
    );

    if (result.length === 0)
      return res.status(404).json({ message: "no hay productos" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProductos = async (req, res) => {
  try {
    const {
      codigoproducto,
      nombreproducto,
      principioactivo,
      accionterapeutica,
      categoria,
      formafarmaceutica,
      carrucel,
      presentacion,
    } = req.body;

    let image;
    if (req.files.image) {
      const result = await uploadImage(req.files.image.tempFilePath);

      await fs.remove(req.files.image.tempFilePath);
      image = result.secure_url;
      //public_id: result.public_id,
      // };
    }

    let prospecto;
    if (req.files.prospecto) {
      const result = await uploadProspecto(req.files.prospecto.tempFilePath);

      await fs.remove(req.files.prospecto.tempFilePath);
      prospecto = result.secure_url;
      //public_id: result.public_id,
      // };
    }

    //const {imagen} = image;
    const [resultado] = await pool.query(
      "INSERT INTO tblproductos(codigoproducto, nombreproducto, principioactivo, accionterapeutica,categoria, formafarmaceutica, carrucel, presentacion, image, prospecto) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        codigoproducto,
        nombreproducto,
        principioactivo,
        accionterapeutica,
        categoria,
        formafarmaceutica,
        carrucel,
        presentacion,
        image,
        prospecto,
      ]
    );

    console.log(resultado);

    res.json({
      id: resultado.insertId,
      codigoproducto,
      nombreproducto,
      principioactivo,
      accionterapeutica,
      categoria,
      formafarmaceutica,
      carrucel,
      presentacion,
      image,
      prospecto,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const updateProductos = async (req, res) => {
  try {
    if (req.files?.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
      await fs.remove(req.files.image.tempFilePath);
      req.body.image = result.secure_url;
    }

    const resultado = await pool.query(
      "UPDATE tblproductos SET ? WHERE id = ?",
      [req.body, req.params.id, req.body.image]
    );
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
