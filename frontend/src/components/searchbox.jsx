import React, { useState } from "react";
import "./searchbox.css";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredElements, setFilteredElements] = useState([]);
  const elements = [
    "apple",
    "banana",
    "blueberry",
    "grape",
    "kiwi",
    "lemon",
    "mango",
    "orange",
    "pear",
    "pineapple",
    "raspberry",
    "strawberry",
  ];
  const handleChange = async (e) => {
    setSearchTerm(e.target.value);
    try {
      if (e.target.value) {
        const response = await fetch(`/cardsearch/${e.target.value}`);
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    if (e.target.value) {
      const searchResults = elements.filter((element) =>
        element.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilteredElements(searchResults);
    } else {
      setFilteredElements([]);
    }
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
        <ul className="autocomplete-list">
          {filteredElements.map((element, index) => (
            <li key={index} onClick={() => setSearchTerm(element)}>
              {element}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
