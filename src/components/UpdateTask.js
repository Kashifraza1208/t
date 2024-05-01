import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTask } from "./redux/todoAction";

const UpdateTask = ({ taskToUpdate, handleCloseEditModal }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(taskToUpdate.title);
  const [description, setDescription] = useState(taskToUpdate.description);
  const [completed, setCompleted] = useState(taskToUpdate.completed);

  const handleUpdateTask = () => {
    dispatch(
      updateTask({ id: taskToUpdate.id, title, description, completed })
    );
    handleCloseEditModal(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-md">
        <h2 className="text-xl font-bold mb-4">Edit Task</h2>
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
            onClick={handleUpdateTask}
          >
            Update Task
          </button>
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
            onClick={() => handleCloseEditModal(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateTask;
