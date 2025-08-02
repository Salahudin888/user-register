import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import route from "./routes/userRoute.js"
import cors from 'cors'

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const Port = process.env.Port || 7000;
const mongourl = process.env.mongo_url;

mongoose
 .connect(mongourl)
 .then(()=>{
    console.log("DB connected successfully")
    app.listen(Port,()=>{
        console.log(`server is running on port :${Port}`)
            });
    })
    .catch((error) => console.log(error));
app.use("/api",route);
         
