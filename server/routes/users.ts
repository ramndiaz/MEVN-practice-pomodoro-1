import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
    res.send("home")
})

router.get("/users", (req, res) => {
    res.send("get users")
})

router.post("/users", (req, res) => {
    res.send("post users")
})

router.delete("/users/:id", (req, res) => {
    res.send("delete users id")
})

router.get("/users/:id", (req, res) => {
    res.send("get users id")
})

router.put("/users/:id", (req, res) => {
    res.send("update users id")
})

export default router;