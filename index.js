const express = require("express");
const mongoose = require("mongoose");
// const port = process.env.PORT || 5000;
const app = express();



// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("MongoDb connected");
// });

//middleware
require("./database/db");
app.use("/uploads", express.static("uploads"));
app.use(express.json());
const userRoute = require("./routes/user");
app.use("/user", userRoute);
const profileRoute = require("./routes/profile");
app.use("/profile", profileRoute);
const blogRoute = require("./routes/blogpost");
app.use("/blogPost", blogRoute);


app.route("/").get((req, res) => res.json(data));

app.listen('180');