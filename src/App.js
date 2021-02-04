import './App.css';
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <div className="card w-75" id="card_border">
        <SearchEngine />
         <div className="card-footer text-center text-muted">
          <p className="name-footer">
            <a
              href="https://github.com/asan20/weather-react.git"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>{" "}
            by Ana Sanagustín
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
