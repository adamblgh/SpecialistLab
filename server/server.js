import express from "express";
import cors from "cors";
import {router} from "./routes/router.js"
import fileUpload from "express-fileupload";
const app = express();
const port = process.env.PORT || 5000;
import { routerCities } from "./routes/routerCities.js";
import { adminRouter } from "./routes/adminRouter.js";
import { workersRouter } from "./routes/workersRouter.js";

app.use(cors())
app.use(express.json())
//engedélyezni egy temp könyvtárat:
app.use(fileUpload({
    useTempFiles: true,
    /*tempFileDir:'/tmp'*/
}))

app.use('/auth',router)
app.use('/cities',routerCities)
app.use('/admin',adminRouter)
app.use('/workers',workersRouter)

app.listen(port,()=>console.log('listening on port: '+port))