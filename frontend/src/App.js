import "./App.css";
import Header from "./components/header";
import CardSearch from "./components/cardsearch";
import Decks from "./components/decks";
import Home from "./components/home";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/cardsearch" Component={CardSearch} />
          <Route path="/decks" Component={Decks} />
          <Route path="/signin" Component={SignIn} />
          <Route path="signup" Component={SignUp} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
