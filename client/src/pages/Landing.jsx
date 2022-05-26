import React from 'react';
import Navbar from '../components/Navbar/Navbar';


const Landing = () => {



    return (
        <main>
            <header>
                <Navbar />
            </header>
            <div className='background-image'>
                <div className='moon-border'>
                    <div className='scrolling-image'></div>
                </div>
            </div>


            <div className='landing-page'>
                <div className='welcome-text-left'>
                    <h2 className='landing-subheader'>CODE YOUR OWN WEBSITE</h2>
                    <h1 className='landing-header'>WITHOUT A KEYBOARD</h1>
                    <p>Build your online presence with Vegeta.</p>
                </div>
                <div className='spacer-border'></div>
                <div className='welcome-text-right'>
                    
                    <button className="btn welcome-btn">
                        Start Building
                    </button>
                </div>

            </div>
        </main>
    );
};

export default Landing;