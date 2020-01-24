import React from 'react';
import AccordianHome from './AccordianHome'
import { NavLink } from 'react-router-dom'
import './css/accord.css'

function Home(props) {
    return (
        <div className="ui centered grid">
            <div>
                <h1>Home Page</h1>
                <AccordianHome/>
                <p/>
                <NavLink to="/map"> Dashboard </NavLink>
            </div>
        </div>
    );
}

Home.propTypes = {};

export default Home;
