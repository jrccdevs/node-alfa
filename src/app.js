import express from 'express'
import fileUpload from "express-fileupload";
import cookieParser from 'cookie-parser'


import './config.js'
import indexRoutes from './routes/index.routes.js'
import productosRoutes from './routes/productos.routes.js'
import imagenesRoutes from './routes/imagenes.router.js'
import usuariosRoutes from './routes/authenticacion.routes.js'
import cors from 'cors'

const app = express();
//const __dirname = dirname(fileURLToPath(import.meta.url));
//console.log(__dirname)


app.use(cors({
  origin: (origin, callback) => {
    const ACCEPTED_ORIGINS = [
      'http://localhost:3000',
      'https://reactaap.vercel.app'
      
    ]

    if (ACCEPTED_ORIGINS.includes(origin)) {
      return callback(null, true)
    }

    if (!origin) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS'))
  }
}))
app.use(express.json());



app.use(cookieParser())

app.use(indexRoutes);
app.use(productosRoutes);
app.use(imagenesRoutes);
app.use(usuariosRoutes);



//app.use(express.static(join(__dirname, '../client/dist')))
export default app
