import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './AboutWarehouse.css';

const AboutWarehouse = () => {
    return (
        <div>
            <h1 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: '600', color: '#606060FF' }} className='my-5 text-center'>Know more about our Warehouse </h1>
            <div>
                <div className="px-4">
                    <Container className="my-5 px-5 mx-auto container-fluid">

                        <Row className="align-items-center justify-content-center">
                            <Col sm={12} md={6}>
                                <Card className="border-0">
                                    <Card.Text style={{ fontFamily: "'Roboto', sans-serif", fontWeight: '600', color: '#606060FF' }} className='text-center'>
                                        A Warehouse management system is a software solution that controls all the activities in a warehouse efficiently thus improving productivity. A WMS provides visibility and controls critical operations like Inventory management, Location management receiving and Put-away, picking, sorting, packing, Loading, Invoicing and dispatch, Movement and storage of material in the warehouse.  One advantage is it eliminates dependencies on warehouse persona in terms if Inventory status and operational decisions. The system takes care of important functions like location suggestions, allocation policies guided operations.
                                    </Card.Text>
                                </Card>
                            </Col>
                            <Col sm={12} md={6}>
                                <div className="py-2 rounded-3 w-100">
                                    <iframe className='w-100' src="https://www.youtube.com/embed/_grpOkkd8p8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default AboutWarehouse;