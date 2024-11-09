// Home.js
import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <section className="home">
            <div className="home__content">
                <h1 className="home__title">Explore the World with TravelNest</h1>
                <p className="home__subtitle">Your adventure awaits. Discover amazing places at great deals.</p>
                <button className="btn explore-btn">Explore Now</button>
            </div>
        </section>
    );
};

export default Home;
