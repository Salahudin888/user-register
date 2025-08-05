import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/userRoute.js";
import cors from "cors";

// in your package.json add type: module to able to import and export that will remove the warning from the console

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const Port = process.env.Port || 7000;
const mongourl = process.env.mongo_url;

app.use("/api", route); // here

// if you create a separte function to connect to db in another folder like config

mongoose
  .connect(mongourl)
  .then(() => {
    console.log("DB connected successfully");
    app.listen(Port, () => {
      console.log(`server is running on port :${Port}`);
    });
  })
  .catch((error) => console.log(error));

// app.use("/api",route); it is good if you put before
