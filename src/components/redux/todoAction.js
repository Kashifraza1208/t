// In summary, the action first reaches the dispatcher, and then it's handled by the reducer. The reducer's responsibility is to update the state based on the action it receives.

export const addTask = (title, description, completed) => {
  return {
    type: "ADD_TASK",
    payload: {
      id: new Date().getTime(),
      title: title,
      description: description,
      completed: completed,
    },
  };
};

export const delteTask = (id) => {
  return {
    type: "REMOVE_TASK",
    payload: id,
  };
};

export const updateTask = (id) => {
  return {
    type: "UPDATE_TASK",
    payload: id,
  };
};
