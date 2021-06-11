import '../../App.css';
import Hero from '../Hero';
import React, { Fragment } from 'react';
import Cards from '../Cards';
import Footer from '../Footer';

function Home() {
    return (
        <Fragment>
            <Hero />
            <Cards />
            <Footer />
        </Fragment>
    );
}

export default Home;