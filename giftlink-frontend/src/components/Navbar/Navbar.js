import React from 'react';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">GiftLink</a>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">     
                    <a className="navbar-brand" href="/home.html">Home</a></li>
                    <li className="nav-item">     
<a className="navbar-brand" href="/app">Gifts</a></li
                </ul>
            </div>
        </nav>
    );
}
