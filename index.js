import app from './src/app.js'
import { PORT } from "./src/config.js";
import cors from 'cors'

const corsOrigin ={
    origin: /\.onrender\.com$/,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",};

app.use(cors(corsOrigin));

app.listen(PORT);
console.log(`Server is listening on port ${PORT}`);