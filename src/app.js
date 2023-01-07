import express from 'express'
import fileUpload from "express-fileupload";
import cookieParser from 'cookie-parser'

import cors from 'cors'
import './config.js'
import indexRoutes from './routes/index.routes.js'
import productosRoutes from './routes/productos.routes.js'
import carrucelRoutes from './routes/carrucel.router.js'
import usuariosRoutes from './routes/authenticacion.routes.js'

const app = express();
//const __dirname = dirname(fileURLToPath(import.meta.url));
//console.log(__dirname)

app.use(cors());
app.use(express.json());


app.use(
    fileUpload({
      tempFileDir: "./cargarimg",
      useTempFiles: true,
    })
  );
app.use(cookieParser())

app.use(indexRoutes);
app.use(productosRoutes);
app.use(carrucelRoutes);
app.use(usuariosRoutes);

//app.use(express.static(join(__dirname, '../client/dist')))
export default app