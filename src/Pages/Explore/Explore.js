import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Home/Service/Service';
import './Explore.css';

const Explore = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://infinite-tundra-94771.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h1>Explore all exciting bikes:</h1>
            <Link to="/"><button type="button" className="btn btn-warning mx-3 my-5">Go back</button>
            </Link>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Explore;