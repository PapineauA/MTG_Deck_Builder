import React from 'react'

function Header() {
    return (
        <header>
            <nav class="navbar">
                <div class="navbar-left">
                    <nav class="left-nav">
                        <ul>
                            <li><a href="/">Deckforge</a></li>
                            <li><a href="/search">Search</a></li>
                            <li><a href="/builder">Deck Builder</a></li>
                            <li><a href="/info">Deck Information</a></li>
                        </ul>
                    </nav>
                </div>
                <div class = "navbar-right">
                    <nav class = "right-nav">
                        <ul>
                            <li><a href="/login">Login</a></li>
                            <li><a href="/signup">Sign Up</a></li>
                        </ul>
                    </nav>
                </div>
            </nav>
        </header>
    )
}

export default Header;