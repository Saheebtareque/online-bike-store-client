import React from 'react';
import banner from '../../../images/banner.jpg'

const Banner = () => {
    return (
        <div className="my-5">
            <img style={{ maxWidth: '100%' , height: '700px'}} className="rounded" src={banner} alt="" />
        </div>
    );
};

export default Banner;