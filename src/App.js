import "./App.css";
import Overview from "./components/Overview";

function App() {
  return (
    <div className="App">
      <p>
        <h1>Welcome to my first React app - the Tasks Transpiler!</h1>
      </p>
      <form>
        <label for="New task">Task:</label>
        <input type="text" id="task" name="task" minlength="1" required />
        <button id="submit-task-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
