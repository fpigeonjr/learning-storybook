import "./App.css"
import Task from "./components/Task"

const INITIAL_TASK = {
  id: "1",
  title: "Call mom",
  state: "TASK_INBOX"
}

function App() {
  return (
    <div className="App">
      <Task task={INITIAL_TASK} />
    </div>
  )
}

export default App
