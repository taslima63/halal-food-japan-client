import React from 'react';
import './Item.css';

const Item = ({ item }) => {
    const { img, description, name, price } = item;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className='item-container'>
                <img className='w-100' src={img} alt="" />
                <h5 className='my-2' style={{ fontFamily: "'Poppins', sans-serif", color: "#606060" }}>Item : {name}</h5>
                <p style={{ fontFamily: "'Roboto', sans-serif" }}><small>{description.length < 100 ? description : description.slice(0, 100)}</small></p>
                <p>Cost : {price}$</p>
                <button style={{ fontFamily: "'Roboto', sans-serif" }} className='bookBtn'>Book : {name}</button>
            </div>
        </div>
    );
};

export default Item;