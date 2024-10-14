import React from 'react';

import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5' />
                <h1 className='mt-5'>Invest in Everything</h1>
                <p>Online Platform to invest in stocks, derivatives, mutual funds, and more</p>
                <Link className='p-2 btn btn-success fs-5 mb-5' to={"/home"} style={{ width: "20%", margin: "0 auto" }}>Signup</Link>
            </div>
        </div>
    );
}

export default Hero;