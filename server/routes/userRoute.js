import express from "express";

import {
  create,
  deleteuser,
  getalluser,
  getuserbyid,
  update,
} from "../controller/userCntroller.js";

const route = express.Router();

route.post("/user", create);
route.get("/users", getalluser);
route.get("/user/:id", getuserbyid);
route.put("/update/user/:id", update);
route.delete("/delete/user/:id", deleteuser);

/*
 route.put("/update/user/:id",update) these api endpoint is working but you dont need to say /update/user/:id instead do like this /user/:id this is what it should be
 route.delete("/delete/user/:id",deleteuser) // /user/:id
*/

export default route;
