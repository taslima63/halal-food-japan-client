import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './ItemDetails.css';

const ItemDetails = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});
    const [quantity, setQuantity] = useState(0);

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


    return (
        <div>
            <h2 className='my-5'>More on:{item.name}</h2>
            <h4 className='text-success mt-2'>Available Quantity:{quantity}</h4>

            <div>
                <Container className='my-5'>

                    <Row>
                        <Col xs={12} md={5}>
                            <div style={{ width: '100%' }} className='mx-auto'><img src={item.img} alt="" /></div>
                        </Col>
                        <Col xs={12} md={7}>
                            <div className='details my-3'>
                                <Card style={{ width: '20rem' }} className="border-0">
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
                    <Row>
                        <Col xs={12} md={5}>
                            <div style={{ width: '100%' }} className='mx-auto'><img src={item.img} alt="" /></div>
                        </Col>
                        <Col xs={12} md={7}>
                            <div className='details my-3'>
                                <Card style={{ width: '20rem' }} className="border-0">
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