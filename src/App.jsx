import "./styles.css";
import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <TaskList title="To Do" />
        <TaskList title="In Progress" />
        <TaskList title="Done" />
      </div>
    </div>
  );
}
