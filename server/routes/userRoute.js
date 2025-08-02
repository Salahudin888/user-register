import express from "express";

import { create, deleteuser, getalluser, getuserbyid, update } from "../controller/userCntroller.js";

const route = express.Router();

route.post("/user",create)
route.get("/users",getalluser)
route.get("/user/:id",getuserbyid)
route.put("/update/user/:id",update)
route.delete("/delete/user/:id",deleteuser)

export default route;