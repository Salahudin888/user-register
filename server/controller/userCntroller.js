import user from "../model/userModel.js";

export const create = async (req, res) => {
  try {
    /*
        don't bleive what every user give you. you should always validate the data that you take from the user using lib(joy) other wise you can use if else 
        they might send a code to distroy your server or you db or to hack !be awar of it
        and the validation should be both in the front and back end
        */

    const userExist = await user.findOne({ email: req.body });
    if (userExist) {
      return res.status(400).json({ message: "user already exists." });
    }

    /*
         no need to put the user data to the user model instead first check in db then continue
        */
    const newUser = new user(req.body);

    // const userExist=await user.findOne({email});
    // if (userExist){
    //     return res.status(400).json({message:"user already exists."});
    // }
    await newUser.save();
    // res.status(200).json(savedData);
    res.status(200).json({ message: "user created successfully." }); // status code 201 for somting created in db

    /*
        when you response json you should send predictable data instead of message, error message
        {
        success: true | false,
        message: "the massage for the client" | null
        data: null | data
        }
        */
  } catch (error) {
    res.status(500).json({ errorMessage: error.errorMessage });
  }
};

export const getalluser = async (req, res) => {
  try {
    const userdata = await user.find();
    if (!userdata || userdata.length === 0) {
      return res.status("404").json({ message: "user data not found." });
    }
    res.status(200).json(userdata);
  } catch (error) {
    res.status(500).json({ errorMessage: error.errorMessage });
  }
};

export const getuserbyid = async (req, res) => {
  // variable naming or function in js use camel case getUserById
  try {
    const id = req.params.id;
    const userexist = await user.findById(id);
    if (!userexist) {
      return res.status("404").json({ message: "user not found." });
    }
    res.status(200).json(userexist);
  } catch (error) {
    res.status(500).json({ errorMessage: error.errorMessage });
  }
};
export const update = async (req, res) => {
  // when you give name for function it shuold be descibtive like what do you update here updateUser
  try {
    const id = req.params.id;
    const userexist = await user.findById(id);
    if (!userexist) {
      return res.status("404").json({ message: "user not found." });
    }
    const updatedata = await user.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    // res.status(200).json(updatedata);
    res.status(200).json({ message: "user updated successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.errorMessage });
  }
};
export const deleteuser = async (req, res) => {
  try {
    const id = req.params.id;
    const userexist = await user.findById(id);
    if (!userexist) {
      return res.status(404).json({ message: "user not found." });
    }
    await user.findByIdAndDelete(id);
    res.status(200).json({ message: "user deleted successfully" });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};
