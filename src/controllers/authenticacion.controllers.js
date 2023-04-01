
import { pool } from "../db.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import promisify from 'util';


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
    let passwordHaash =  bcryptjs.hashSync(password, 8);

   
    if (!email || !password) {
      console.log('ingrese email y contraseña')
    } else {
      console.log('entrando')
      const [result] =  await pool.query("SELECT * FROM tblusuarios WHERE email = ?", [email])
        
        if (result.length === 0 || !(await bcryptjs.compare(password, result[0].password))) {
          console.log("email y/o Password incorrectas")
        } else {
          //inicio de sesión OK
          const id = result[0].id
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
          res.status(200).send('usuario corecto')
        }
       
      
    }

  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
}


export const authenticacion = async (req, res, next)=>{
  if (req.cookies.jwt) {
      try {
          const decodificada = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRETO)
          const [result] =  await pool.query('SELECT * FROM tblusuarios WHERE id = ?', [decodificada.id])
              if(!result){return next()}
              req.email = result[0]
              console.log('autenticado')
              return next()
        
      } catch (error) {
          console.log(error)
          return next()
      }
  }else{
      res.redirect('/login')        
  }
}

export const logout = (req, res)=>{
  res.clearCookie('jwt')  
  console.log('sesion cerrarda') 
  res.status(200).send('Sesión cerrada exitosamente.');
  return res.redirect('/')
}