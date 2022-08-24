const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const app = express();
const cors = require("cors");

//middlewares

//it indicates the server about the type of data that we are sending
app.use(express.json());
app.use(cors());
app.use("/books", router);

mongoose
  .connect(
    "mongodb+srv://admin:Nikhilkp@cluster0.snf0alm.mongodb.net/bookstore?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected to the Database"))
  .then(() => {
    app.listen(3005);
  })
  .catch((err) => console.log(err));
