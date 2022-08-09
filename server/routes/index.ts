import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
    res.send("home")
})

router.get("/tasks", (req, res) => {
    res.send("get task")
})

router.post("/tasks", (req, res) => {
    res.send("post task")
})

router.delete("/tasks/:id", (req, res) => {
    res.send("delete task id")
})

router.get("/tasks/:id", (req, res) => {
    res.send("get task id")
})

router.put("/tasks/:id", (req, res) => {
    res.send("update task id")
})

export default router;