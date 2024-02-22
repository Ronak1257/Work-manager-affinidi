import React from 'react'
import {RxCross1} from "react-icons/rx";

const Task = ({task ,deleteTaskParent}) => {
    function deleteTask(taskId){
        deleteTaskParent(taskId);
    }
  return (
    <div className={`shadow-lg mt-2 mb-5 rounded-md ${task?.status=='completed' ?"bg-green-600":"bg-gray-400"}`}>
        <div className='p-5'>
            <div className='flex justify-between'>
                <h1 className='text-2xl font-medium'>{task?.title}</h1>
                <span onClick={()=>{
                    deleteTask(task?._id)
                }} className='shadow-lg hover:bg-gray-600 bg-gray-950 rounded-full w-9 h-9 flex justify-center items-center text-white font-bold cursor-pointer'>
                    <RxCross1 />
                </span>
            </div>
            <p className='font-normal'>{task?.content}</p>
            <p className='text-right'>
                Status: <span className='font-bold'>{task?.status.toUpperCase()}</span>
            </p>
        </div>
    </div>
  )
}

export default Task