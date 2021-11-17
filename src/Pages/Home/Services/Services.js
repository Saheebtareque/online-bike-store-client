import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://infinite-tundra-94771.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    const specificServices = services.slice(0, 7);

    return (
        <div id="services">
            <h2 className="text-success mt-5">Our Bikes:</h2>
            <div className="service-container">
                {
                    specificServices.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;