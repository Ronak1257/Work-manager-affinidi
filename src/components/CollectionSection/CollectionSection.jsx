import React from 'react'

const LocalLandingPage = () => {
  return(
    <>
    <div className="bg-sky-200 flex mx-auto w-3/4 rounded-lg px-auto flex-col justify-center items-center mb-4">
      <div className="mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our Work Manager Website</h1>
        <p className="text-lg text-black mb-8">Our Work Manager website is designed to help you organize your tasks efficiently. Here are some key features:</p>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Add Tasks Easily</h2>
          <p className="text-gray-600">Quickly add new tasks to your list with just a few clicks. Stay on top of your workload effortlessly.</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md mt-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">View Your Tasks</h2>
          <p className="text-gray-600">Easily access and view all your tasks from one centralized location. Stay organized and focused on your priorities.</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md mt-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Track Task Status</h2>
          <p className="text-gray-600">Monitor the status of your tasks, including pending, completed, and upcoming tasks. Stay informed and in control.</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md mt-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Access Anywhere</h2>
          <p className="text-gray-600">Access your tasks from anywhere, anytime. Whether you are at home, in the office, or on the go, your tasks are always within reach.</p>
        </div>
      </div>
    </div>
    </>
  )
};

export default LocalLandingPage;
