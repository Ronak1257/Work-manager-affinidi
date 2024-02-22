import { connectDb } from "../../../helper/db";
import {getResponseMessage} from "src/helper/responseMessage";
import { NextResponse } from "next/server";
import {Task} from "../../../models/task";

export async function POST(request) {
    const {title,content,email,status}=await request.json();
    try{
        const task=new Task({
            title,
            content,
            email,
            status,
        });
        await connectDb();
        const createdTask=await task.save();
        return NextResponse.json(createdTask,{
            status:201,
        });
    }
    catch(err){
        console.log(err);
        return getResponseMessage("failed to create task",404,false);
    }
}