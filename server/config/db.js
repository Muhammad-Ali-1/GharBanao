// config/db.js
const mongoose = require("mongoose");
// const url="mongodb+srv://gharbanao:gharbanao2024@cluster0.3hb9q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const url =
  "mongodb+srv://Ali:Fvd4620jldCi7YoA@gharbanao-cluster.wem2j.mongodb.net/?retryWrites=true&w=majority&appName=GharBanao-Cluster";

const connectToDatabase = async () => {
  mongoose
    .connect(url)
    .then(() => {
      console.log("MongoDB Connected...");
    })
    .catch((err) => {
      console.log("Error while creating MongoDB connection ", err);
    });
};

module.exports = connectToDatabase;
