import "dotenv/config"
import express from "express"
import routes from './routes';
import connectDB from "./db/connect";
import cors from 'cors';
import cookieParser from "cookie-parser";


const app = express()
connectDB();
app.use(cookieParser());
app.use(express.json()) // para parcear las peticiones de tipo post
app.use(cors({ origin: "http://localhost:3000", credentials: true })); // esto hay que ponerlo fijo en produccion
//app.get("/", (req, res) => { res.send("Hola Mundo!")})

//iniciamos todas las rutas
app.use('/api', routes);


const PORT = process.env.PORT || 7597 

app.listen(PORT, () => {
    console.log("App escuchando en el puerto: ", PORT)
})

