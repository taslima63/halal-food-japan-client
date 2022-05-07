import React, { useEffect, useRef, useState } from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './ItemDetails.css';

const ItemDetails = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});
    const [quantity, setQuantity] = useState(0);
    const quantityRef = useRef();


    useEffect(() => {
        const url = `http://localhost:5000/item/${itemId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItem(data);
                setQuantity(data.quantity);
            });

    }, [quantity])



    const handleDelivered = () => {

        const updatedQuantity = parseInt(item.quantity) - 1;
        setQuantity(updatedQuantity);
        const url = `http://localhost:5000/item/${itemId}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ updatedQuantity }),
        })
            .then(res => res.json())
            .then(item => {
                alert('quantity updated successfully!!!' + item.quantity);
            });
    }

    const handleRestock = () => {
        const restockQuantity = quantityRef.current.value;
        if (!restockQuantity || restockQuantity < 0) {
            alert('Please enter a valid Quantity')
            return
        } else {
            const updatedQuantity = parseInt(item.quantity) + parseInt(restockQuantity);
            setQuantity(updatedQuantity);
            const url = `http://localhost:5000/item/${itemId}`;

            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ updatedQuantity }),
            })
                .then(res => res.json())
                .then(item => {
                    alert('quantity updated successfully!!!' + item.quantity);
                });
        }
    }

    return (
        <div>
            <h2 className='my-5'>More on:{item.name}</h2>
            <h4 className='text-success mt-2'>Available Quantity:{quantity}</h4>

            <div>
                <Container className='my-5'>
                    <div className='mx-auto'>
                        <Row className='px-5 align-items-center justify-content-center my-5'>
                            <Col xs={12} md={6}>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className='mb-2'>Enter Quantity to Re-stock items</Form.Label>
                                        <Form.Control ref={quantityRef} type="number" placeholder="Enter quantity" />
                                    </Form.Group>
                                    <button className='bookBtn text-dark' onClick={handleRestock}>Restock Item</button>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                    <Row className=' align-items-center justify-content-center '>
                        <Col sm={12} md={6}>
                            <div style={{ width: '100%' }} className='mx-auto'><img className='w-75' src={item.img} alt="" /></div>
                        </Col>
                        <Col sm={12} md={6}>
                            <div className='details m-3 mx-auto'>
                                <Card style={{ width: '20rem' }} className="border-0 mx-auto">
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Subtitle className="mt-2 text-muted">Supplier: {item.supplier}</Card.Subtitle>
                                        <Card.Text>
                                            <small className='pe-2 text-start'>Price :
                                                <span
                                                    style={{ color: '#9952e0' }}
                                                >{item.price}</span>
                                                <span
                                                    style={{ color: '#52e0e0', fontSize: "20px", fontWeight: "500", margin: '0px 2px' }}
                                                >|</span>
                                                {item.origin}
                                            </small>
                                        </Card.Text>
                                        <Card.Text style={{ fontSize: "16px", margin: '0px 2px' }}>
                                            {item.description}
                                        </Card.Text>
                                        <button className='bookBtn text-dark' onClick={handleDelivered}>Shipped</button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    </Row>

                </Container>
                <div className='my-5'>
                    <Link to='/manageInventory' style={{ 'textDecoration': 'none', 'background': 'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)' }} className='bookBtn text-dark px-3 text-white'>Go To Manage Inventory</Link>
                </div>
            </div>

        </div >
    );
};

export default ItemDetails;