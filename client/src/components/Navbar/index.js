import React from "react";
import { Link } from "react-router-dom";

// Navbar component holding the navbar and links to pages
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow" id="mainNav">
                <div className="container">
                <i className="fas fa-book fa-2x me-3"></i>
                    <Link className="navbar-brand" to="/">Google Books</Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                        aria-label="Toggle navigation">
                        Menu
                <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link
                                    to="/search"
                                    className={
                                        window.location.pathname === "/" || window.location.pathname === "/search"
                                            ? "nav-link active"
                                            : "nav-link"
                                    }>Search</Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/saved"
                                    className={
                                        window.location.pathname === "/saved"
                                            ? "nav-link active"
                                            : "nav-link"
                                    }>Saved</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div >
    );
}

export default Navbar;