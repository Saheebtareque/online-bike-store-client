import React, { useState,useEffect } from 'react';
import { Button,Card, Col, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth'
// test going on
const MyOrders = () => {
    const { user} = useAuth();
    const [personalOrder, setPersonalOrder] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/orderedbikes/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setPersonalOrder(data)
            }
                )
    }, []);

   // DELETE AN USER
const handleDelete = id => {
    const proceed = window.confirm('Are you sure, you want to delete?');
    if (proceed) {
        const url = `http://localhost:5000/orderedbikes/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('deleted successfully');
                    const remainingorders= personalOrder.filter(order => order._id !== id);
                    setPersonalOrder(remainingorders);
                }
            });
    }
}


    return (
        <div>
            <h1> My Orders:{personalOrder.length}</h1>
            <Row xs={1}className="g-4 mx-5">
                {
                    personalOrder.map(orders=> 
                    <Col>
                        <Card>
                          <Card.Body>
                            <Card.Title>OrderId:{orders._id}</Card.Title>
                            <Card.Text>
                             <h6> Name: <span className="text-success"> {orders.uName} </span></h6>
                             <h6> Bike: <span className="text-success">  {orders.name} </span></h6>
                             <h6> Orderstatus: <span className="text-success"> {orders.orderStatus} </span></h6>
                             <h6> Price:  <span className="text-success"> £{orders.price}</span></h6>
                             <h6> Email:  <span className="text-success"> {orders.email}</span></h6>
                             <h6> Address: <span className="text-success"> {orders.address} </span></h6>
                             <h6> phone: <span className="text-success"> {orders.phone} </span></h6>
                             <Button onClick={() => handleDelete(orders._id)} variant="danger">Delete</Button>
                  
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>)
                }
             </Row>
        </div>
    );
};

export default MyOrders;