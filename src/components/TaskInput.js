import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./redux/todoAction";

const TaskInput = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleAddTask = () => {
    if (title === "" || description === "") return;
    dispatch(addTask(title, description, completed));
    setTitle("");
    setDescription("");
    setShowModal(false);
    setCompleted(false);
  };

  return (
    <div className="mb-5">
      <div className="text-center text-3xl font-bold">To do App</div>
      <button
        className="py-2 px-3 my-1 float-right
        font-medium rounded-md cursor-pointer
        transition-colors bg-gradient-to-tr from-indigo-900 to-indigo-200 text-indigo-900"
        onClick={() => setShowModal(true)}
      >
        + Add Task
      </button>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md">
            <h2 className="text-xl font-bold mb-4">Add Task</h2>
            <input
              type="text"
              placeholder="Enter Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 rounded-md px-2 py-1 mb-2 w-full"
            />
            <textarea
              cols="10"
              rows="5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter Description"
              className="border border-gray-300 rounded-md px-2 py-1 mb-[3px] w-full"
            ></textarea>

            <div className="mb-2">
              <input
                type="checkbox"
                checked={completed}
                onChange={(e) => setCompleted(e.target.checked)}
                className="mr-2"
              />
              <span>Completed</span>
            </div>

            <div className="flex justify-end">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={handleAddTask}
              >
                Add Task
              </button>
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskInput;
