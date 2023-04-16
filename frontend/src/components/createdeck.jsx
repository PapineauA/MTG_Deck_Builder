import React, { useState } from "react";
import SearchBoxDecks from "./searchboxdecks";
import DeckLog from "./decklog";

function CreateDeck() {
  const [deck, setDeck] = useState([]);
  const [deckLog, setDeckLog] = useState([]);

  function addCard(card) {
    setDeck([...deck, card]);
    setDeckLog([...deckLog, `Added ${card.name} to deck`]);
  }

  function removeCard(index) {
    const removedCard = deck[index];
    const newDeck = [...deck];
    newDeck.splice(index, 1);
    setDeck(newDeck);
    setDeckLog([...deckLog, `Removed ${removedCard.name} from deck`]);
  }

  return (
    <div>
      <h1>Create Deck</h1>
      <ul>
        {deck.map((card, index) => (
          <li key={index}>
            {card.name}{" "}
            <button onClick={() => removeCard(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <SearchBoxDecks onCardSelect={addCard} />
      <DeckLog log={deckLog} />
    </div>
  );
}

export default CreateDeck;
