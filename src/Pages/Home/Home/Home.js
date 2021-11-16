import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Naviagtion from '../Navigation/Navigation';
import ReviewResult from '../ReviewResult/ReviewResult';
import Services from '../Services/Services';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Naviagtion> </Naviagtion>
            <Banner> </Banner>
            <Services> </Services>
            <ReviewResult> </ReviewResult>
            <Subscribe> </Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;