"use client";
import React, { useContext, useEffect, useState } from 'react'
import { deleteTask, getTaskOfUser ,updateTask } from '../../services/taskServices';
import Task from './Task';
import { toast } from 'react-toastify';
import { useLocalContent } from "../../lib/hooks/use-local-content";

const ShowTasks = () => {
  const [tasks,setTask]=useState([]);
  const {email}=useLocalContent();
  async function loadTasks(emailId){
    try{
      const tasks=await getTaskOfUser(emailId);
      setTask([...tasks].reverse())
    }
    catch(err){AC
      console.log(err);
    }
  } 
  useEffect(()=>{
    if(email){
      loadTasks(email);
    }
  }, [email])

  async function deleteTaskParent(taskId){
    try{
        const result=await deleteTask(taskId);
        console.log(result);
        const newTask=tasks.filter(item=>item._id!=taskId)
        setTask(newTask);
        toast.success("Your Task is deleted !!");
    }catch(err){
      console.log(err);
      toast.error("Error in deleting task");
    }
  }
  return (
    <div className='grid grid-cols-12 mt-4'>
      <div className='col-span-8 col-start-3'>
        <h1 className='text-3xl text-center my-4'>Your Tasks ( {tasks.length} )</h1>
        {tasks.map((task)=>(
          <Task task={task} key={task._id} deleteTaskParent={deleteTaskParent} />
        ))}
      </div>
    </div>
  )
}

export default ShowTasks