const {Tourist,Local} = require("../models/user_schema")

const home = async (req, res) => {
  try {
    res
      .status(200)
      .send("Home page");
  } catch (error) {
    console.log(error);
  }
}

const registerTourist = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const userExist = await Tourist.findOne({ email })
    if (userExist) {
      return res.status(400).json("Tourist already exist")
    }
    const createdTourist = await Tourist.create({ username, email, phone, password })
    res
      .status(201)
      .json({ message: "registered successfully" , token: await createdTourist.generateToken() , userId : createdTourist._id.toString() });
  } catch (err) {
    res.status(500);
  }
}

const registerLocal = async (req, res) => {
  try {
    const { username, email, phone, password , description} = req.body;
    const userExist = await Local.findOne({ email })
    if (userExist) {
      return res.status(400).json("Local already exist")
    }
    const createdLocal = await Local.create({ username, email, phone, password , description})
    res
      .status(201)
      .json({ message: "registered successfully" , token: await createdLocal.generateToken() , userId : createdLocal._id.toString() });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500);
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await Local.findOne({ email });
    if (!user) {
      user = await Tourist.findOne({ email });
    }
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const isValidPassword = await user.comparePassword(password);

    if (isValidPassword) {
      res.status(200).json({
        message: "Login successful",
        token: await user.generateToken(),
        userId: user._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email/password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const users = async (req,res) => {
  try {
    const userData = req.user;
    const isLocal = req.isLocal;
    return res.status(200).json({ message: userData, Local: isLocal });
  } catch (error) {
    console.log(`Error from jwt user data ${error}`)
  }
}



module.exports = { home, registerTourist, registerLocal , login , users};