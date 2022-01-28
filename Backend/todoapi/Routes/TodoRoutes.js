import express from "express";
import todoModel from "../Models/Schema.js";

const router = express.Router();

//CURD OPERATIONS FOR Todo DATABASE

//Read todos data
router.get("/", async (req, res) => {
    try {
        const Todos = await todoModel.find({});
        res.status(200).send(Todos);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.post("/", async (req, res) => {
    try {
        console.log(req.body);
        const todo = new todoModel(req.body);
        const save_todo = await todo.save();
        console.log(save_todo);
        res.status(200).send(save_todo);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        console.log(req.params.id);
        const id = req.params.id;
       const todo = await todoModel.deleteOne({_id: id});
       res.status(200).send(todo);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.delete("/", async (req, res) => {
    try {
       const todo = await todoModel.deleteMany({});
       res.status(200).send(todo);
    } catch (err) {
        res.status(400).send(err);
    }
});
export default router;