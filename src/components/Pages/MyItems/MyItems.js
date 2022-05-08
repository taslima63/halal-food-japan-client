import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
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
        fetch(`https://limitless-anchorage-22968.herokuapp.com/myItem?email=${email}`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    const handleDelete = id => {

        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://limitless-anchorage-22968.herokuapp.com/item/${id}`;
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
        <Container className='w-75 mx-auto'>
            <h2 className='my-5 text-center'>Your Items</h2>

            <button onClick={addNewItems} className='bookBtn text-dark'>Add New Items</button>

            <Table striped bordered hover size="sm" className='my-5' responsive>
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

            <div className='my-5  mx-auto' style={{ 'width': '280px' }}>
                <Link to='/manageInventory' style={{ 'textDecoration': 'none', 'background': 'radial-gradient(circle at 10% 20%, rgb(87, 108, 117) 0%, rgb(37, 50, 55) 100.2%)' }} className='bookBtn text-dark px-3 text-white'>Go To Manage Inventory</Link>
            </div>

        </Container >
    );
};

export default MyItems;