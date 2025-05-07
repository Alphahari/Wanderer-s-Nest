const mongoose = require("mongoose");
const URI = process.env.MONGOURI;

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connection Established");
  } catch (error) {
    console.log("connection failed");
    console.log(error)
    process.exit(0);
  }
}

module.exports = connectDb;