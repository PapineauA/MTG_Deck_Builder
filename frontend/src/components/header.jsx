import React from 'react'

function Header() {
    fetch ("http://127.0.0.1:5000/test").then((res)=>{
        return res.json()
    })
    .then((data)=> {
        console.log(data)
    })
    return (
        <header>
            <nav className="navbar">
                <div className="navbar-left">
                    <nav className="left-nav">
                        <ul>
                            <li><a href="/">Deckforge</a></li>
                            <li><a href="/search">Card Search</a></li>
                            <li><a href="/decks">Decks</a></li>
                        </ul>
                    </nav>
                </div>
                <div className = "navbar-right">
                    <nav className = "right-nav">
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