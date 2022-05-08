import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Dashboard = () => {
    const [items, setItems] = useState([]);
    const supplierList = [];
    const categoryList = [];
    let totalSalesCount = 0;
    let salesAmountCount = 0;
    let availableItemsCount = 0;
    const dashBoard = {
        totalSales: '',
        salesAmount: '',
        availableItem: '',
        suppliers: '',
        category: '',
    }

    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    const calculateDashboard = () => {

        items.map(item => {
            totalSalesCount += parseInt(item.sold);
            salesAmountCount += parseInt(item.sold) * parseInt(item.price);
            availableItemsCount += parseInt(item.quantity);
            supplierList.push(item.supplier);
            categoryList.push(item.name);

            dashBoard.suppliers = getUniqueArray(supplierList);
            dashBoard.category = getUniqueArray(categoryList);
            dashBoard.totalSales = totalSalesCount;
            dashBoard.salesAmount = salesAmountCount;
            dashBoard.availableItem = availableItemsCount;
            return dashBoard;
        })
    }

    function getUniqueArray(_array) {
        let newArray = _array.filter((element, index, array) => array.indexOf(element) === index);
        return newArray.length;
    }
    getUniqueArray(supplierList);

    calculateDashboard();

    return (
        <div>
            <h1 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: '600', color: '#606060FF' }} > DashBoard</h1>
            {Object.keys(dashBoard).map((key) => (
                <Container>
                    <Row className='justify-content-center align-items-center my-5'>
                        <Col sm={12} md={6}>
                            <div className='board border rounded-3 shadow-lg mx-auto'><h5 className='text-center my-3'>{key}</h5>
                                <h1 className='text-center my-4'>{[`${dashBoard[key]}`]}</h1>

                            </div>
                        </Col>
                    </Row>

                </Container>
            ))}
        </div>
    );
};

export default Dashboard;