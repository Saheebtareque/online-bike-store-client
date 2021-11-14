import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <div className="mx-5 my-5" >
            <h1 className="my-5" > Please register if you are new user:</h1>
            <Form onSubmit={handleLoginSubmit} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name"
                        onBlur={handleOnBlur} type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email"
                        onBlur={handleOnBlur} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password"
                        onBlur={handleOnBlur} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password2"
                        onBlur={handleOnBlur} type="password" placeholder=" Re-write Password" />
                </Form.Group>
                <Button variant="warning" type="submit">
                    Register
                </Button>
                <NavLink

                    to="/login">
                    <Button variant="text"> Please login if already registered</Button>
                </NavLink>
                {isLoading && <Spinner animation="border" variant="secondary" > </Spinner>}
                {user?.email && <Alert variant="success">
                    login successful
                </Alert>}
                {authError && <Alert variant="success">{authError}</Alert>}
            </Form>
        </div>
    );
};

export default Register;