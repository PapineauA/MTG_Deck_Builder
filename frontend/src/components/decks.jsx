import React from "react";
import "./decks.css";
import { useNavigate } from "react-router-dom";

function Decks() {
  const Navigate = useNavigate();

  function handleCreateDeck() {
    Navigate("/decks/create");
  }

  function handleEditDeck() {
    Navigate("/decks/edit");
  }

  function handleViewDecks() {
    Navigate("/decks/view");
  }

  function handleDeleteDeck() {
    Navigate("/decks/delete");
  }

  return (
    <div>
      <h1>Decks</h1>
      <p>
        This is the Decks component. From here, you can create a new deck, edit
        your existing decks, view your existing decks, or delete your existing
        decks.
      </p>
      <div className="deck-nav-containter">
        <button onClick={handleCreateDeck}>Create New Deck</button>
        <button onClick={handleEditDeck}>Edit Deck</button>
        <button onClick={handleViewDecks}>View Existing Decks</button>
        <button onClick={handleDeleteDeck}>Delete Deck</button>
      </div>
    </div>
  );
}

export default Decks;
