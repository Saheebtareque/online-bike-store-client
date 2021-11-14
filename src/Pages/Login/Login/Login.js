
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <div className="mx-5 my-5">
            <h1 className="my-5"> Please log in below:</h1>
            <Form onSubmit={handleLoginSubmit} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email"
                        onChange={handleOnChange} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password"
                        onChange={handleOnChange} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="warning" type="submit">
                    Login
                </Button>
                <NavLink

                    to="/register">
                    <Button variant="text">New User? click here to register</Button>
                </NavLink>
                {isLoading && <Spinner animation="border" variant="secondary" > </Spinner>}
                {user?.email && <Alert variant="success">
                    login successful
                </Alert>}
                {authError && <Alert variant="success">{authError}</Alert>}
            </Form>

            <h1> ----------------------------</h1>
            <Button onClick={handleGoogleSignIn} variant="warning">Google Sign In</Button>
        </div>
    );
};

export default Login;