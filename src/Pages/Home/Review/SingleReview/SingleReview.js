import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleReview = ({rev}) => {
    const {Name,review,rating} = rev;
    return (
        <Col>
            <Card>
                <Card.Body>
                    <Card.Title className="text-success"> <h3> {Name} </h3></Card.Title>
                    <Card.Text>
                       Details: <h6> {review} </h6>
                    </Card.Text>
                    <Card.Text>
                      Rating:   <span className="text-warning" > {rating}</span>  
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleReview;