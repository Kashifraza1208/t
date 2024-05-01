const getTaskFromLocalStorage = () => {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
};

export const todoReducer = (
  state = { tasks: getTaskFromLocalStorage() },
  action
) => {
  switch (action.type) {
    case "ADD_TASK":
      const newTasks = [...state.tasks, action.payload];

      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return {
        ...state,
        tasks: newTasks,
      };
    case "REMOVE_TASK":
      const deleteTasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      localStorage.setItem("tasks", JSON.stringify(deleteTasks));
      return {
        ...state,
        tasks: deleteTasks,
      };
    case "UPDATE_TASK":
      const updatedTasks = state.tasks.map((task) =>
        task.id === action.payload.id ? { ...task, ...action.payload } : task
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return {
        ...state,
        tasks: updatedTasks,
      };
    default:
      return state;
  }
};
