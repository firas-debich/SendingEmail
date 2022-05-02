const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
    });
  } catch (error) {
    process.exit();
  }
};

module.exports = connectDB