import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import AboutWarehouse from '../../AboutWarehouse/AboutWarehouse';
import Dashboard from '../../DashBoard/Dashboard';
import Items from '../../ItemsSection/Items/Items';
import Banner from '../Banner/Banner';
import Blogs from '../../BlogsAll/Blogs/Blogs';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <Dashboard></Dashboard>
            <AboutWarehouse></AboutWarehouse>
            <Blogs></Blogs>

        </div>
    );
};

export default Home;