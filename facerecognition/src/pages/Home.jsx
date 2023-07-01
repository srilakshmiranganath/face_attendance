import React from 'react';
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className='homepage'>
            <Link to="/face_register">
                <button className='btn'>REGISTER</button>
            </Link>
            <Link to="/choose_class">
                <button className='btn'>MARK ATTENDANCE</button>
            </Link>
            <Link to="/add_class">
                <button className='btn'>ADD CLASS</button>
            </Link>
        </div>
    );
};

export default Home;