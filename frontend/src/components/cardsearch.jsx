import React from "react";
import SearchBoxCards from "./searchboxcards";

function CardSearch() {
  return (
    <div>
      <h1>Card Search</h1>
      <p>
        Just about every Magic: The Gathering (commander card) is available to
        search in the database to make your perfect deck.
      </p>
      <SearchBoxCards />
    </div>
  );
}

export default CardSearch;
