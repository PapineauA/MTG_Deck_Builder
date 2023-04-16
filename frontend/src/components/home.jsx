import React from 'react';

function Home() {
  return (
    <div>
        <h1>My Deck Builder App for Magic: The Gathering!</h1>
        <p>I wanted to build this application because with other deck building apps it was difficult to keep track of some core concept features that I wanted in my decks, 
        as well as an easy way to keep track of the decks that I had already. I only really care about the Commander format, so that's what the deck builder is really for.</p>
        <h2>Some features of the application!</h2>
        <li style={{color: "lightgray"}}>Highlighting Commander in your list!</li>
        <li style={{color: "lightgray"}}>All cards that are LEGAL in the Commander format availible for the user to create decklists with.</li>
        <li style={{color: "lightgray"}}>Allowing the user to save their lists, edit them... and be able to close the page and come back later and make changes or view as needed.</li>
    </div>
  );
}

export default Home;