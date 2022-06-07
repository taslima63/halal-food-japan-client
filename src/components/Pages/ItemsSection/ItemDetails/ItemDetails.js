import React, { useEffect, useRef, useState } from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './ItemDetails.css';

const ItemDetails = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});
    const [quantity, setQuantity] = useState(0);
    const quantityRef = useRef();


    useEffect(() => {
        const url = `https://limitless-anchorage-22968.herokuapp.com/item/${itemId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItem(data);
                setQuantity(data.quantity);
            });

    }, [itemId, quantity])



    const handleDelivered = () => {

        const updatedQuantity = parseInt(item.quantity) - 1;
        setQuantity(updatedQuantity);
        const url = `https://limitless-anchorage-22968.herokuapp.com/item/${itemId}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ updatedQuantity }),
        })
            .then(res => res.json())
            .then(item => {
                toast('product has been shipped!!!', item.quantity);
            });
    }

    const handleRestock = (event) => {
        event.preventDefault();
        const restockQuantity = quantityRef.current.value;
        console.log(restockQuantity, "restockQuantity");
        if (!restockQuantity || restockQuantity < 0) {
            alert('Please enter a valid Quantity')
            return
        } else {
            console.log(restockQuantity, "restockQuantity inside");
            const updatedQuantity = parseInt(item.quantity) + parseInt(restockQuantity);
            console.log("updatedQuantity", updatedQuantity);
            setQuantity(updatedQuantity);
            const url = `https://limitless-anchorage-22968.herokuapp.com/item/${itemId}`;

            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({ updatedQuantity }),
            })
                .then(res => res.json())
                .then(item => {
                    quantityRef.current.value = "";
                    toast('quantity updated successfully!!!');
                });
        }
    }

    return (
        <div className=''>
            <h2 className='my-5 text-center'>More on:{item.name}</h2>
            <h4 className='text-success mt-2 text-center'>Available Quantity:{quantity}</h4>

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
                    <div className='mx-auto'>
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
                                                <small className='pe-2 text-start'> Total Sold Item : {item.sold}</small>
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
                    </div>

                </Container>

            </div>
            <div className='my-5 mx-auto ' style={{ 'width': '280px' }}>
                <Link to='/manageInventory' style={{ 'textDecoration': 'none', 'background': 'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)' }} className='bookBtn text-dark px-3 text-white'>Go To Manage Inventory</Link>
            </div>
        </div >
    );
};

export default ItemDetails;