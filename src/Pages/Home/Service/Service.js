import React from 'react';
import { useHistory } from 'react-router';
import './Service.css';

const Service = ({ service }) => {
    // const {service} = props;
    // console.log({service});
    const { name, price, description ,img, _id} = service;
    const history = useHistory();

    const bikeInfo = () => {
        history.push(`/service/${_id}`);
    }
    return (
        <div className="service p-3">
            <img src={img} alt="" />
            <h5>{name}</h5>
            <h2  className="text-warning" > £{price}</h2>
            <p className="px-3 text-success">{description}</p>
                <button className="btn btn-warning" onClick={bikeInfo}>Purchase now</button>
        
        </div>
    );
};

export default Service;