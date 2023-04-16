import React, { useState } from "react";
import "./searchbox.css";
import NoImageFound from "./No Image Found.png";

const SearchBoxDecks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredElements, setFilteredElements] = useState([]);
  const [deckList, setDeckList] = useState([]);

  const handleChange = async (e) => {
    setSearchTerm(e.target.value);
    try {
      if (e.target.value) {
        const response = await fetch(`/cardsearch/${e.target.value}`);
        const data = await response.json();
        console.log(data);
        const searchResults = data.filter((element) => {
          console.log(element);
          return element[0]
            .toLowerCase()
            .includes(e.target.value.toLowerCase());
        });
        setFilteredElements(searchResults);
      } else {
        setFilteredElements([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const addToDeckList = (card) => {
    setDeckList([...deckList, card]);
  };

  const removeFromDeckList = (card) => {
    const newDeckList = deckList.filter((c) => c !== card);
    setDeckList(newDeckList);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      {filteredElements.length > 0 && (
        <ul className="autocomplete-list grid-container">
          {filteredElements.map((element, index) => (
            <li
              key={index}
              onClick={() => {
                setSearchTerm(element[0]);
                addToDeckList(element);
              }}
            >
              {element[1] ? (
                <img src={element[1]} />
              ) : (
                <img src={NoImageFound} />
              )}
            </li>
          ))}
        </ul>
      )}

      <div className="deck-list">
        <h2>Deck List</h2>
        <ul>
          {deckList.map((card, index) => (
            <ul key={index} onClick={() => removeFromDeckList(card)}>
              {card[0]} x {card[2]}
            </ul>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBoxDecks;
