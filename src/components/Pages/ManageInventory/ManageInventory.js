import React from 'react';
import { Table } from 'react-bootstrap';
import useItems from '../../../hooks/useItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';



const ManageInventory = () => {
    const [items, setItems] = useItems();
    const navigate = useNavigate();

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
            <h2>Manage your services</h2>

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


        </div >
    );
};

export default ManageInventory;

