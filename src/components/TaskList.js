import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { delteTask } from "./redux/todoAction";

import TaskCard from "./TaskCard";
import UpdateTask from "./UpdateTask";

const TaskList = () => {
  const [showModal, setShowModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState({});
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.tasks);

  const handleDelete = (id) => {
    dispatch(delteTask(id));
  };

  const handleOpenEditModal = (task) => {
    setTaskToUpdate(task);
    setShowModal(true);
  };

  const handleCloseEditModal = () => {
    setTaskToUpdate({});
    setShowModal(false);
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-center mt-5 mb-5">
        {tasks && tasks.length > 0 ? (
          <h1 className="text-xl font-semibold text-center">All Tasks</h1>
        ) : (
          <h1 className="text-xl font-semibold text-center">
            You have no tasks. Please add task using +Add Task Button
          </h1>
        )}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 my-5 gap-3">
        {tasks?.map((task, index) => (
          <TaskCard
            key={index}
            task={task}
            handleDelete={handleDelete}
            handleOpenEditModal={handleOpenEditModal}
          />
        ))}
      </div>

      {showModal && (
        <UpdateTask
          taskToUpdate={taskToUpdate}
          handleCloseEditModal={handleCloseEditModal}
        />
      )}
    </div>
  );
};

export default TaskList;
