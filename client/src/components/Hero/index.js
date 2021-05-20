import React from "react";
import Container from "../Container";

function Hero() {
    return (
        <Container>
        <div>
            <i className="fas fa-book fa-7x"></i>
            <h1 className="display-5 fw-bold mt-3 mb-4">Google Books Search</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Search for and Save Books of Interest </p>
            </div>
        </div>
        </Container>
    );
}

export default Hero;