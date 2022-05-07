import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css';

const Item = ({ item }) => {
    const { _id, img, description, name, price } = item;
    const navigate = useNavigate();
    const navigateToItemDetail = (id) => {
        navigate(`/item/${id}`);
    }
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className='item-container'>
                <img className='w-100' src={img} alt="" />
                <h5 className='my-2' style={{ fontFamily: "'Poppins', sans-serif", color: "#606060" }}>Item : {name}</h5>
                <p style={{ fontFamily: "'Roboto', sans-serif" }}><small>{description.length < 100 ? description : description.slice(0, 100)}</small></p>
                <p>Cost : {price}$</p>
                <button style={{ fontFamily: "'Roboto', sans-serif" }} onClick={() => navigateToItemDetail(_id)} className='bookBtn'>Update : {name}</button>
            </div>
        </div>
    );
};

export default Item;