import React from 'react';
import './app.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Popular from './Components/Popular/Popular';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Offers from './Components/Offers/Offers';
import Footer from './Components/Footer/Footer';
import SignUp from './Components/SignUp/SignUp'; // Import the SignUp component

const App = () => {
    return (
        <>
            <Navbar />
            {/* SignUp form displayed */}
            <SignUp />

            {/* Sections with just the headings */}
            <Home />
            <Popular />
            <About />
            <Blog />
            <Offers />
            <Footer />
        </>
    );
}

export default App;
