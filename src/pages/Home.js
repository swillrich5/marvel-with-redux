import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1 className="text-center">Welcome to Marvel Mania</h1>
            <Link to='/characters'>
                <p className="lead text-center">Click here to display Marvel Characters</p>
            </Link>
        </div>
    )
}

export default Home;
