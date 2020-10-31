const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb+srv://admin:arVaeom65th8Fhdj@cluster0.oaedv.mongodb.net/blog?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connection to mongodb database was succesful");
  }
);

//middleware

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set("view engine", "ejs");

// routes
app.use(require("./routes/index"));
app.use(require("./routes/compose"));
app.use(require("./routes/blog"));

//server configuration are here

app.listen(process.env.PORT || 8080, () =>
  console.log("server started listening on port: 8080")
);
 