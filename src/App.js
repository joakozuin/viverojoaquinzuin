import logo from "./logo.svg";
import "./App.css";
import NavBarComp from "./components/NavBarComp";

function App() {
  return (
    <div className="App">
      <NavBarComp />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Coder House React.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Joaquin Zuin Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
