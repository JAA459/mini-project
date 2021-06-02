import { Container } from '@material-ui/core';
import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Container maxWidth="sm">
            <div className="container">
                <Link to="/new"><button>New Game</button></Link>
                <Link to="/recent"><button>Recent Game</button></Link>
            </div>
        </Container>
    )
}

export default Home;
