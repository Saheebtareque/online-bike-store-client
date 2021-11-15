import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Naviagtion from '../Navigation/Navigation';
import Review from '../Review/Review';
import Services from '../Services/Services';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Naviagtion> </Naviagtion>
            <Banner> </Banner>
            <Services> </Services>
            <Review> </Review>
            <Subscribe> </Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;