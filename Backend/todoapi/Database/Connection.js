import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/todoapi")
  .then(() => {
    console.log("Connected to database.");
  })
  .catch((err) => {
    console.log("Database connection failed",err);
  });