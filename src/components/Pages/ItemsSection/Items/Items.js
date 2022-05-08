import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import './Items.css';

const Items = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://limitless-anchorage-22968.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    return (
        <div className='container my-5 mx-auto' id='items'>
            <div className="row">
                <h2 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: '600', color: '#606060FF' }} className="text-center"> This is Our Avilable Items</h2>

                <div className='row'>
                    {
                        items.slice(0, 6).map(item => <Item
                            key={item._id}
                            item={item}
                        ></Item>)
                    }
                </div>
            </div>
            <div className='my-5 mx-auto ' style={{ 'width': '280px' }}>
                <Link to='/manageInventory' style={{ 'textDecoration': 'none', 'background': 'radial-gradient(circle at 10% 20%, rgb(87, 108, 117) 0%, rgb(37, 50, 55) 100.2%)' }} className='bookBtn text-dark px-3 text-white '>Go To Manage Inventory</Link>
            </div>
        </div >
    );
};

export default Items;