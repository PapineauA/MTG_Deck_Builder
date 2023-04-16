import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-left">
          <nav className="left-nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cardsearch">Card Search</Link>
              </li>
              <li>
                <Link to="/decks">Decks</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="navbar-right">
          <nav className="right-nav">
            <ul>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </header>
  );
}

export default Header;
