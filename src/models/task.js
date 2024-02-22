import mongoose from "mongoose";
const TaskSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    addedDateL:{
        type:Date,
        required:true,
        default:Date.now(),
    },
    status: {
        type:String,
        enum:['pending',"completed"],
        default:"pending",
    },
     
});

export const Task = mongoose.models.tasks || mongoose.model("tasks",TaskSchema);