import React from 'react';
import { Form,Button} from 'react-bootstrap';


const Subscribe = () => {
    return (
        <div className="my-5">
          <h1 className="text-success">Get updated with our new arriving astnonishing bikes:</h1>
           <Form className="my-5 mx-5">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter your email here" />
    <Form.Text >
   <h4 className="text-warning my-3"> Be the lucky winner to get discount upto 50%. We will also offer you with the latest motorbike in our store! </h4>
    </Form.Text>
  </Form.Group>

  <Button variant="success" type="submit">
    Subscribe
  </Button>
</Form>
        </div>
    );
};

export default Subscribe;