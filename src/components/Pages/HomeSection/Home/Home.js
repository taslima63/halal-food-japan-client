import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Items from '../../ItemsSection/Items/Items';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <Footer></Footer>
        </div>
    );
};

export default Home;