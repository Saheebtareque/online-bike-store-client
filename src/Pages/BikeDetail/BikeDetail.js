import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Card } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import './bikeDetail.css';
import useAuth from '../../hooks/useAuth'

const BikeDetail = () => {
    const { user, } = useAuth();
    const { bikeId } = useParams();
    const history = useHistory();
    const [bikedetail, setBikedetail] = useState({});
    const { register, handleSubmit, reset } = useForm();
    useEffect(() => {
        fetch(`http://localhost:5000/products/${bikeId}`)
            .then(res => res.json())
            .then(data => {
                setBikedetail(data)
                reset(data)
            }
            );
    }, [reset,bikeId])

    const onSubmit = data => {
        console.log(data);

        fetch('http://localhost:5000/products/orderedbikes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    alert('meal order placed');
                    reset();
                }
            })
    }

    const handleClick = () => {
        history.push('/home');
    }
    return (
        <div>
             <h1>Meals's Id: {bikeId} </h1>
            <div className="bike-info">
                <Card style={{ width: '50rem' }}>
                    <Card.Img variant="top" src={bikedetail.img} />
                    <Card.Body>
                        <Card.Title className="text-warning">{bikedetail.name}</Card.Title>
                        <Card.Title className="text-success">{bikedetail.price} taka</Card.Title>
                        <Card.Text>
                            {bikedetail.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>


            <div className="bike-form my-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                    <label> Order ID:</label>
                    <input {...register("orderId", {})}defaultValue={bikeId} />

                    <label> Order status:</label>
                    <input {...register("orderStatus", {})}  defaultValue="pending" />

                    <label> Amount to be paid:</label>
                    <input {...register("price", { })} defaultValue= {bikedetail.price}/>



                    <label> Meal: </label>
                    <input {...register("meal", {})} placeholder="Name of the meal" defaultValue={bikedetail.name} />
                    
                   

                    <label> Name: </label>
                    <input {...register("uName", {})}  defaultValue={user.displayName} />


                    <label> Email address: </label>
                    <input {...register("email", { })}  defaultValue={user.email} />

                    <label> Address: </label>
                    <input {...register("address", { required: true })} />
                    <label> contact number: </label>
                    <input type="number"  {...register("phone", { required: true})}  />

                    
                    <input type="submit" />
                </form>
            </div>


            <button className="btn-success px-3 py-2" onClick={handleClick}>Go back</button>
        </div>
    );
};

export default BikeDetail;