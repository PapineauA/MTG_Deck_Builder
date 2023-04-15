import "./App.css";
import Header from "./components/header";
import CardSearch from "./components/cardsearch";
import Decks from "./components/decks";
import Home from "./components/home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/cardsearch" Component={CardSearch} />
          <Route path="/decks" Component={Decks} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
