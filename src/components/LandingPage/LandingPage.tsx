import { FC } from "react";

const LandingPage: FC = () => {
  return (
    <div className="bg-sky-400 mb-4 mx-auto w-3/4 rounded-xl flex justify-center items-center">
      <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our Work Manager Website</h1>
        <p className="text-lg text-black mb-8">Organize your work efficiently with our Work Manager tool. Keep track of tasks, access them from anywhere, and stay on top of your work effortlessly.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Add Tasks Easily</h2>
            <p className="text-gray-600">Easily add new tasks to your list with just a few clicks. Stay organized and manage your workload effectively.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Delete Tasks</h2>
            <p className="text-gray-600">Remove completed or unnecessary tasks from your list effortlessly. Keep your task list clean and clutter-free.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Access Anywhere</h2>
            <p className="text-gray-600">Access your tasks from anywhere, anytime. Whether you are at home, in the office, or on the go, your tasks are always within reach.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Data Security</h2>
            <p className="text-gray-600">Your data is securely stored in our database, linked to your email address. Rest assured that your information is safe and protected.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
