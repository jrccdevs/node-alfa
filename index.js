import app from './src/app.js'
import { PORT } from "./src/config.js";

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
    next(); 
  })

app.listen(PORT);
console.log(`Server is listening on port ${PORT}`);