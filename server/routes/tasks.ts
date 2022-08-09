import { Router } from "express";
import Task from '../models/Task';
const router = Router();

router.get("/", (req, res) => {
    res.send("home")
})

router.get("/tasks", async (req, res) => {
    const tasks = await Task.find();
    //console.log(tasks);
    res.send(tasks);
})

router.post("/tasks", async (req, res) => {
    const {id, title, pomodorosCount, completed} = req.body;
    const task = new Task({id, title, pomodorosCount, completed});
    await task.save();
    res.json(task);
})

router.delete("/tasks/:id", (req, res) => {
    res.send("delete task id")
})

router.get("/tasks/:id", async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ message: "Task not found" });
        res.send(task);
    } catch (error) {
        return res.status(500).send(error);
    }
})

router.put("/tasks/:id", (req, res) => {
    res.send("update task id")
})

export default router;