const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    console.log("Mongo DB Url :", process.env.MONGODB_URL);
    const conection = await mongoose.connect(process.env.MONGODB_URL, {
      autoIndex: true,
    });
  } catch (err) {
    console.log(`Error : ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectToDB;
