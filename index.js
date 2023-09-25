import app from './src/app.js'
import { PORT } from "./src/config.js";
import cors from 'cors'

const corsOrigin ={
    origin:'http://localhost:3000', //or whatever port your frontend is using
    credentials:true,            
    optionSuccessStatus:200
}
app.use(cors(corsOrigin));

app.listen(PORT);
console.log(`Server is listening on port ${PORT}`);