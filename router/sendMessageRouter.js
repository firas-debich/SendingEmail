const messageRouter = require("express").Router();
const sendMessage = require("../controller/SendMessageController");
messageRouter.route("/").post(sendMessage);

module.exports = messageRouter;
