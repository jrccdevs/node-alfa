//import passport from 'passport'
//const api = require('passport-local').Strategy;

//import { uploadImage } from "../libs/cloudinary.js";
import { pool } from "../db.js";
//import fs from 'fs-extra';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const createUsuarios = async (req, res) => {
  const { nombre,
    appaterno,
    apmaterno,
    fnacimiento,
    sexo,
    profesion,
    email,
    password



  } = req.body;

  try {

    const hash = await bcryptjs.hash(password, 10);


    //const {imagen} = image;
    const [resultado] = await pool.query(
      "INSERT INTO tblusuarios(nombre, appaterno, apmaterno, fnacimiento, sexo, profesion, email, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [nombre,
        appaterno,
        apmaterno,
        fnacimiento,
        sexo,
        profesion,
        email,
        hash]
    );
    console.log(resultado)


    res.json({
      id: resultado.insertId,
      nombre,
      appaterno,
      apmaterno,
      fnacimiento,
      sexo,
      profesion,
      email,
      hash
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message });
  }
};

export const loginUsuarios = async (req, res) => {
 
  
 

  try {
    const email = req.body.email
    const password = req.body.password
   // let passhash = await bcryptjs.hash(password, 10);
    if (!email || !password) {
      console.log('ingrese email y contraseña')
    } else {
       await pool.query("SELECT * FROM tblusuarios WHERE email = ?", [email], async(error, results, fields) => {

        if (results.length === 0 || !(await bcryptjs.compare(password, results[0].password))) {
          console.log("email y/o Password incorrectas")
        } else {
          //inicio de sesión OK
          const id = results[0].id
          const token = jwt.sign({ id: id }, process.env.JWT_SECRETO, {
            expiresIn: process.env.JWT_TIEMPO_EXPIRA
          })
          //generamos el token SIN fecha de expiracion
          //const token = jwt.sign({id: id}, process.env.JWT_SECRETO)
          console.log("TOKEN: " + token + " para el EMAIL : " + email)

          const cookiesOptions = {
            expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
            httpOnly: true
          }
          res.cookie('jwt', token, cookiesOptions)
          console.log("¡LOGIN CORRECTO!")
        }
     //   res.json(result);
      })
     
    }

  } catch (error) {
    console.log(error)
  }
}
