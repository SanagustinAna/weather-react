import './App.css';
import Footer from "./Footer";
import SearchEngine from "./SearchEngine";

function App() {
  return (
      <div className="card w-75" id="card_border">
        <SearchEngine />
        <Footer />
      </div>
  );
}

export default App;
