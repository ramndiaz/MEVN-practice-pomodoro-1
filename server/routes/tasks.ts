import { Router } from "express";
import Task from '../models/Task';
const router = Router();

router.get("/", (req, res) => {
    res.send("home")
})

router.get("/tasks", async (req, res) => {
    try {
        const tasks = await Task.find();
        if (!tasks) return res.status(400).json({ message: "Tasks not found" });
        res.send(tasks);
    } catch (error) {
        return res.status(500).send("Bad request");
    }
})

router.post("/tasks", async (req, res) => {
    try {
        const {id, username, title, pomodorosCount, completed} = req.body;
        const task = new Task({id, username, title, pomodorosCount, completed});
        await task.save();
        res.json(task);
    } catch (error) {
        return res.status(500).send(" data was lost or Bad request");
    }
})

router.delete("/tasks/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) return res.status(400).json({ message: "Task not found" });
        return res.status(200).send("the task has delete");
    } catch (error) {
        return res.status(500).send("Bad request");
    }
})

router.get("/tasks/:id", async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(400).json({ message: "Task not found" });
        res.send(task);
    } catch (error) {
        return res.status(500).send("Bad request");
    }
})

router.put("/tasks/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(task);
    } catch (error) {
        return res.status(500).send("Bad request");
    }
})

export default router;