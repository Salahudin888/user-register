import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});
export default mongoose.model("users", userSchema); // when it comes to name your db you should start with uppercase and it should be singlular mongodb will figure out by it's self so you should name it like "User"
