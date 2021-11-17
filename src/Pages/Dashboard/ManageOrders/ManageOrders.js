import React, { useState,useEffect } from 'react';
import { Button,Card, Col, Row } from 'react-bootstrap';
const MyOrders = () => {
    const [order, setOrder] = useState([]);
    const [update,setUpdate]=useState({});
    useEffect(() => {
        fetch('http://localhost:5000/orderedbikes/')
            .then(res => res.json())
            .then(data => {
                setOrder(data)
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
                    const remainingorders= order.filter(order => order._id !== id);
                    setOrder(remainingorders);
                }
            });
    }
}
// Update order status
const handleUpdate = id =>{
    const updated ={
        orderStatus:'Approved'
    }
    setUpdate(updated);
    const url = `http://localhost:5000/orderedbikes/${id}`;
    
fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
  })
  .then(response => response.json())
  .then(data => {
    if(data.modifiedCount > 0)
    {
        alert('orderstatus updated');
        window.location.reload();
    }
  })


}


    return (
        <div>
            <h1> My Orders:{order.length}</h1>
            <Row xs={1}className="g-4 mx-5">
                {
                    order.map(orders=> 
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
                             <Button onClick={() => handleUpdate(orders._id)} variant="warning">Update</Button>
                  
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