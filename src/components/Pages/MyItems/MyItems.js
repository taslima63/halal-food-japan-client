import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useItems from '../../../hooks/useItems';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';

const MyItems = () => {
    const [items, setItems] = useItems();
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const email = user.email;

    useEffect(() => {
        console.log('email', email);
        fetch(`http://localhost:5000/myItem?email=${email}`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    const handleDelete = id => {

        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                })
        }
    }

    const addNewItems = () => {
        navigate('/addItems');
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Your Items</h2>

            <button onClick={addNewItems} className='bookBtn text-dark'>Add New Items</button>

            <Table striped bordered hover size="sm" className='my-5'>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Supplier Name</th>
                        <th>Quantity</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map(item => <tr key={item._id}>
                        <td>{item.name}</td>
                        <td>{item.supplier}</td>
                        <td>{item.quantity}</td>
                        <td> <FontAwesomeIcon onClick={() => handleDelete(item._id)} icon={faTrashCan} /></td>
                    </tr>)}
                </tbody>

            </Table >

            <div className='my-5'>
                <Link to='/manageInventory' style={{ 'textDecoration': 'none', 'background': 'radial-gradient(circle at 10% 20%, rgb(87, 108, 117) 0%, rgb(37, 50, 55) 100.2%)' }} className='bookBtn text-dark px-3 text-white'>Go To Manage Inventory</Link>
            </div>

        </div >
    );
};

export default MyItems;