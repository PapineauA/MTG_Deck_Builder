import "./App.css";
import Header from "./components/header";
import CardSearch from "./components/cardsearch";
import Decks from "./components/decks";
import Home from "./components/home";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateDeck from "./components/createdeck";
import EditDeck from "./components/editdeck";
import ViewDeck from "./components/viewdeck";
import DeleteDeck from "./components/deletedeck";

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/cardsearch" Component={CardSearch} />
          <Route exact path="/decks" Component={Decks} />
          <Route path="/signin" Component={SignIn} />
          <Route path="signup" Component={SignUp} />
          <Route path="/decks/create" Component={CreateDeck} />
          <Route path="/decks/edit" Component={EditDeck} />
          <Route path="/decks/view" Component={ViewDeck} />
          <Route path="/decks/delete" Component={DeleteDeck} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
