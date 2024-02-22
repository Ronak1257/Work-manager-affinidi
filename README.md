
## Introduction

Welcome to our cutting-edge web application built with React, Next.js, and powered by Affinidi for secure direct logins from the Affinidi Vault. Our platform offers a seamless and secure checkout process, leveraging the latest in authentication and authorization technologies.

At the heart of our application is the integration with Affinidi, a leading provider of secure digital identity solutions. Through Affinidi, users can enjoy a frictionless login experience directly from their Affinidi Vault, ensuring their credentials and personal data remain private and protected.


## Features

### 1. Adding Daily Tasks:
Seamlessly input and organize your daily tasks, ensuring efficient planning and execution of your schedule.
```
export async function addTask(task){
    const result= await httpAxios.post("/api/task",task).then((response)=>response.data);
    return result;
}

route : "/api/task"
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
```
### 2. User Task Management:
Access and manage your personalized task list within the user section, providing a comprehensive view of your tasks and priorities.

### 3. Database Storage and Accessibility:
Store tasks securely in the database, allowing users to access and update their tasks from any location, ensuring flexibility and convenience.

### 4. Task Deletion Functionality:
Easily remove completed or unnecessary tasks with the task deletion feature, keeping your task list concise and focused on current objectives.

```
export async function deleteTask(taskId){
    const result= await httpAxios.delete(`/api/task/${taskId}`).then((response)=>response.data);
    return result;
}

//below emailId is our taskId variable
//route: "/api/task/[emailId]
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
```
### 5. User Profile Viewing:
Click on your profile picture to access and view your user profile, providing insights into your account details and settings.

## User Experience

### Intuitive User Interface:
The application features a user-friendly interface with easy-to-understand navigation and design elements, ensuring users can quickly and effortlessly navigate through the application.

### Simple Task Management:
Users can easily add, edit, and delete tasks through a straightforward interface, streamlining the task management process and allowing for efficient organization of daily activities.

### Responsive Design:
With a responsive design, the application seamlessly adapts to various screen sizes and devices, providing a consistent user experience across desktops, tablets, and mobile devices.

### Real-Time Updates:
Users benefit from real-time updates and synchronization, ensuring that their task lists are always up to date and accessible from anywhere, at any time, facilitating efficient collaboration and task tracking.

site link : https://ronak-affinidi-work-manager.vercel.app/

Images

Home Page:
![home page](https://github.com/Ronak1257/Work-manager-affinidi/assets/130481625/20f92761-3c0b-4be6-ab17-f9e9cc0737c4)

Landing Page:
![landing page](https://github.com/Ronak1257/Work-manager-affinidi/assets/130481625/d9d8e99f-a110-4288-b1b0-ee533808a25b)

Add Task Page:
![add-task](https://github.com/Ronak1257/Work-manager-affinidi/assets/130481625/4a99b808-5849-4bc6-9b1b-088eea42bba4)

Show Task Page:
![show-task](https://github.com/Ronak1257/Work-manager-affinidi/assets/130481625/8c50e937-e45c-4e9a-9808-1dff1c5400ee)

User Profile Page:
![user profile](https://github.com/Ronak1257/Work-manager-affinidi/assets/130481625/98794610-9889-47d2-9976-c105c2607f09)
