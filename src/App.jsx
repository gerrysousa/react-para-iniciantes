import "./styles.css";
import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList className="tasklist" title="To Do" />
        <TaskList title="In Progress" />
        <TaskList title="Done" />
      </div>
    </div>
  );
}
