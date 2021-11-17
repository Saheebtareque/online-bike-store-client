import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const ManageProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('https://infinite-tundra-94771.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setAllProducts(data)
            }
            )
    }, []);

    // DELETE AN USER
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://infinite-tundra-94771.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingorders = allProducts.filter(order => order._id !== id);
                        setAllProducts(remainingorders);
                    }
                });
        }
    }


    return (
        <div className="mx-5">
            <h1> Total Products:{allProducts.length}</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    allProducts.map(per => <Col>
                        <Card>
                            <Card.Img variant="top" src={per.img} />
                            <Card.Body>
                                <Card.Title>{per.name}</Card.Title>
                                <Card.Text>
                                    {per.description}
                                </Card.Text>
                                <Button onClick={() => handleDelete(per._id)} variant="danger">Remove</Button>
                            </Card.Body>
                        </Card>
                    </Col>)
                }
            </Row>
        </div>
    );
};

export default ManageProducts;