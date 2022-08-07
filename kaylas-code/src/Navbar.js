import React, {useState} from "react";

function Navbar() {
    return (
      <>
      <nav className="navbar">
        <a href="/" className="site-title">RTS</a>
        <ul>
            <li>
                <a href="/search">Search</a>
                </li>
                <li>
                <a href="/history">History</a>
            </li>
        </ul>
      </nav>
      </> 
    )
}

export default Navbar