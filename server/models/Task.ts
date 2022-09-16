import { Schema, model } from "mongoose";

const taskSchema = new Schema({
    id: {
        type: Number,
        required: true,
        trim: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    pomodorosCount: {
        type: Number,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }

},
{
    versionKey: false
})

export default model("Task", taskSchema);