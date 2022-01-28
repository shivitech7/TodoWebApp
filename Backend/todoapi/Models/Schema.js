import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    task: {
        type: String
    }
})

const createtodo = new mongoose.model("Todos", todoSchema);

export default createtodo;