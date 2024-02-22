import { connectDb } from "../../../../helper/db";
import { getResponseMessage } from "../../../../helper/responseMessage";
import {Task} from "../../../../models/task";
import { NextResponse } from "next/server";
export async function GET(request,{params}){
    const {emailId}=params;
    try{
        await connectDb();
        const tasks=await Task.find({
            email:emailId,
        });
        return NextResponse.json(tasks);
    }
    catch(err){
        console.log(err);
        return getResponseMessage("failed to get tasks",404,false);
    }
}
export async function DELETE(request,{params}){
    const {emailId}=params;
    try{
        await connectDb();
        await Task.deleteOne({
            _id:emailId,
        })
        return getResponseMessage("task deleted",200,true);
    }
    catch(err){
        console.log(err);
        return getResponseMessage("failed to delete task",500,false);
    }
}
