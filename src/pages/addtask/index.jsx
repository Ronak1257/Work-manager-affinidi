"use client";
import Image from 'next/image';
import React, { useState } from 'react'
import loginSvg from '../../../public/login.svg'
import { addTask } from '../../services/taskServices';
import ConfirmationModal from "./Confirm";
import { useLocalContent } from "src/lib/hooks/use-local-content";
const AddTask = () => {
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const[task,setTask]=useState({
        title:"",
        content:"",
        status:"none",
    });
    const {email}=useLocalContent();
    const closeConfirmationModal = () => {
        setShowConfirmationModal(false);
      };
    const handleAddTask = async (event) => {
        event.preventDefault();
        //validate task data

        try{
            task.email=email;
            const result=await addTask(task)
            setShowConfirmationModal(true);
            setTask({
                title:"",
                content:"",
                status:"none",
            })
        }
        catch(err){
            console.log(err);
            toast.error("Task not added",{
                position:"top-center",
            });
        }
    }
  return (
    <div className='grid grid-cols-12 mt-4 justify-center'>
        <div className='col-span-6 col-start-4 p-5 bg-sky-400 rounded-2xl mb-4'>
            <h1 className="text-3xl text-center">Add Your Task Here</h1>
            <div className='flex justify-center mt-4'>
                <Image src={loginSvg} style={{
                        width:"50%",
                    }} alt="Login Banner Image"/>
            </div>
            <form action='#!' onSubmit={handleAddTask}>
                <div className="mt-4">
                    <label htmlFor='task_title' className='block text-sm font-medium mb-2'>Title</label>
                    <input type="text" className='text-white w-full p-3 rounded-2xl bg-gray-700 focus:ring-gray-400-100 border-gray-400' id="task_title" name="task_title" onChange={(event)=>{
                        setTask({
                            ...task,
                            title:event.target.value,
                        });
                    }}
                    value={task.title}></input>
                </div>
                <div className="mt-4">
                    <label htmlFor='task_content' className='block text-sm font-medium mb-2'>Content</label>
                    <textarea type="text" className='text-white w-full p-3 rounded-2xl bg-gray-700 focus:ring-gray-400-100 border-gray-400' id="task_content" rows={4} name="task_content" onChange={(event)=>{
                        setTask({
                            ...task,
                            content:event.target.value,
                        });
                    }}
                    value={task.content}></textarea>
                </div>
                <div className="mt-4">
                    <label htmlFor='task_status' className='block text-sm font-medium mb-2'>Status</label>
                    <select id="task_status" className='text-white w-full p-3 rounded-2xl bg-gray-700 focus:ring-gray-400-100 border-gray-400' name="task_status" onChange={(event)=>{
                        setTask({
                            ...task,
                            status:event.target.value,
                        });
                    }}
                    value={task.status} >
                        <option value="none" disabled>---Select Status---</option>
                        <option value="pending">pending</option>
                        <option value="completed">completed</option>
                    </select>
                </div>
                <div className='mt-4 flex justify-center'>
                    <button className='bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-800'>Add Task</button>
                    <button className='bg-red-600 py-2 px-3 rounded-lg ms-3 hover:bg-red-800'>Clear</button>
                </div>
            </form>
        </div>
        {showConfirmationModal && (
        <ConfirmationModal closeModal={closeConfirmationModal} />
      )}
    </div>
  )
}

export default AddTask