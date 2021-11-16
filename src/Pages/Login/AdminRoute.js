import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from './../../hooks/useAuth'
import {Spinner } from 'react-bootstrap';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();
    if (isLoading) { return <Spinner animation="border" variant="secondary" > </Spinner>} 
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;