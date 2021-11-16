
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleReview from '../Review/SingleReview/SingleReview';

const ReviewResult = () => {

    const [reviews,setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            }
            );
    }, [])

    return (
        <div>
            <h1 className="text-warning my-5"> Top Reviews: </h1>
            <Row xs={1} md={3} className="g-4">
            {
              reviews.map(rev => <SingleReview rev={rev}></SingleReview >)
            }
          </Row>
            </div>
            );
};

            export default ReviewResult;