const express = require("express");
const usercontroller = require("./controller/user.controller.js");
const bookcontroller = require("./controller/book.controller.js");
const commentcontroller = require("./controller/comment.controller.js");
const publicationcontroller = require("./controller/publication.controller.js")

const app = express();
app.use(express.json())

app.use("/user",usercontroller);
app.use("/comment",commentcontroller);
app.use("/book",bookcontroller);
app.use("/publication",publicationcontroller);


module.exports = app;