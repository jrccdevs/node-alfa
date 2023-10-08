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




app.use(cors())
app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Headers, *, Access-Control-Allow-Origin', 'Origin, X-Requested-with, Content_Type,Accept,Authorization','http://localhost:4200');
  if(req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
      return res.status(200).json({});
  }
  next();
});
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
app.use(imagenesRoutes);
app.use(usuariosRoutes);



//app.use(express.static(join(__dirname, '../client/dist')))
export default app
