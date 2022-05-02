const asyncHandler = require("express-async-handler");
const Message = require("../model/MessageModel");
const sendMessage = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    throw new Error("please fill all the required field");
  }
  try {
    const data = await Message.create({ name, email, message });
    if(!data){
     res.status(404)
     throw new Error("no message is found")   
    }
    res.json("done")
  } catch (error) {
      throw new Error(error.message)
  }
});

module.exports = sendMessage;
