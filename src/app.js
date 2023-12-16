import express from 'express'
import fileUpload from "express-fileupload";
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser';

import './config.js'
import indexRoutes from './routes/index.routes.js'
import productosRoutes from './routes/productos.routes.js'
import imagenesRoutes from './routes/imagenes.router.js'
import usuariosRoutes from './routes/authenticacion.routes.js'
import bannerempRoutes from './routes/banneremp.routes.js'
import empresaRoutes from './routes/empresa.routes.js'
import bannerRoutes from './routes/banner.routes.js'
import cors from 'cors'

const app = express();
//const __dirname = dirname(fileURLToPath(import.meta.url));
//console.log(__dirname)
const corsOptions = {
  origin: 'http://localhost:3000' || 'https://reactaap.vercel.app' , // Especifica el origen permitido
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Permite el envío de cookies y encabezados de autenticación
  optionsSuccessStatus: 204, // Permite que las solicitudes OPTIONS tengan un código de estado 204 (sin contenido)
};

app.use(cors(corsOptions));

app.use(express.json({
  limit: '50mb'
}));
app.use(bodyParser.json());

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
app.use(bannerempRoutes);
app.use(empresaRoutes);
app.use(bannerRoutes);

//app.use(express.static(join(__dirname, '../client/dist')))
export default app
