import "./App.css";

import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="px-5 py-5">
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
