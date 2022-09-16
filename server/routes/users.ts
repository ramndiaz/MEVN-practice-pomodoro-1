import { Router } from "express";
import User from '../models/User';
const router = Router();

router.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        if (!users) return res.status(400).json({ message: "users not found" });
        res.send(users);
    } catch (error) {
        return res.status(500).send("Bad request");
    }
})

router.post("/users", async (req, res) => {
    try {
        const {username, email, password} = req.body;
        const user = new User({username, email, password});
        await user.save();
        res.json(user);
    } catch (error) {
        return res.status(500).send(" data was lost or Bad request");
    }
})

router.delete("/users/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(400).json({ message: "user not found" });
        return res.status(200).send("the user has delete");
    } catch (error) {
        return res.status(500).send("Bad request");
    }
})

router.get("/users/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(400).json({ message: "user not found" });
        res.send(user);
    } catch (error) {
        return res.status(500).send("Bad request");
    }
})

router.put("/users/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(user);
    } catch (error) {
        return res.status(500).send("Bad request");
    }
})

export default router;