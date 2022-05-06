import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css';

const Items = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    return (
        <div className='container mt-5' id='items'>
            <div className="row">
                <h2 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: '600', color: '#606060FF' }} > This is Our Avilable Items</h2>

                <div className='row'>
                    {
                        items.map(item => <Item
                            key={item.id}
                            item={item}
                        ></Item>)
                    }
                </div>
            </div>
        </div >
    );
};

export default Items;