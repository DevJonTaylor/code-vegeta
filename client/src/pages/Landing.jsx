import React from 'react';
import Navbar from '../components/Navbar/Navbar';


const Landing = () => {



    return (
        <main>
            <header>
                <Navbar />
            </header>
            <div className='landing-page'>
                <div className='welcome-text'>
                    <h2>CODE YOUR OWN WEBSITE</h2>
                    <h1>WITHOUT A KEYBOARD</h1>
                    <p>Build your online presence with Vegeta.</p>
                    <button className="btn welcome-btn">
                        Start Building
                    </button>
                </div>
                <div className='site-image-container'>
                    <div className='welcome-image'><div className='welcome-gif'></div></div>
                    
                </div>
            </div>
        </main>
    );
};

export default Landing;