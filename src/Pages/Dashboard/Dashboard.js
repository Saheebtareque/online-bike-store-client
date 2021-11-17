import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
// import './Navigation.css';
import useAuth from '../../hooks/useAuth'
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import MakeAdmin from './Dashboard/MakeAdmin/MakeAdmin';
import Welcome from './Dashboard/Welcome/Welcome';
import MyOrders from './MyOrders/MyOrders';
import Payment from './Dashboard/Payment/Payment';
import Review from '../Home/Review/Review';
import AdminRoute from '../Login/AdminRoute';
import ManageOrders from './ManageOrders/ManageOrders';
import AddProduct from './AddProduct/AddProduct';
import ManageProducts from './ManageProducts/ManageProducts';

const Dashboard = () => {
    const { user, logout, admin } = useAuth();
    let { path, url } = useRouteMatch();
    return (
        <>
            <Navbar bg="dark" variant="warning" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home" className="text-success">Online Motorbike Store</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                       { admin ?  <Nav.Link as={Link} to={`${url}/manageorders`}className="red-color">Manage orders</Nav.Link> : <Nav.Link as={Link} to={`${url}/myorders`}className="red-color">My orders</Nav.Link> }

                       { admin ?  <Nav.Link as={Link} to={`${url}/addproducts`}className="red-color">Add products</Nav.Link> : <Nav.Link as={Link} to={`${url}/payment`} className="red-color">Payment</Nav.Link> }

                       { admin ?  <Nav.Link as={Link} to={`${url}/manageproducts`}className="red-color">Manage products</Nav.Link> :  <Nav.Link as={Link} to={`${url}/review`} className="red-color">Review</Nav.Link> }


                       
                        <Nav.Link as={Link} to="/home" className="red-color">Home</Nav.Link>

                        {admin && <Nav.Link as={Link} to={`${url}/makeAdmin`} className="red-color">Make admin</Nav.Link>}

                        <span className="red-color">{user.displayName} </span>
                        {user?.email ? <button type="button" class="btn btn-success" onClick={logout}>Log out</button> : <Nav.Link as={Link} to="/login" className="red-color">Login</Nav.Link>}

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Switch>
                <Route exact path={path}>
                    <Welcome> </Welcome>
                </Route>
                <Route path={`${path}/myorders`}>
                    <MyOrders> </MyOrders>
                </Route> 
                <Route path={`${path}/payment`}>
                    <Payment> </Payment>
                </Route> 
                <Route path={`${path}/review`}>
                    <Review> </Review>
                </Route>
                <AdminRoute path={`${path}/makeAdmin`}>
                    <MakeAdmin></MakeAdmin>
                </AdminRoute>
                <AdminRoute path={`${path}/manageorders`}>
                    <ManageOrders> </ManageOrders>
                </AdminRoute>
                <AdminRoute path={`${path}/addproducts`}>
                    <AddProduct> </AddProduct>
                </AdminRoute>
                <AdminRoute path={`${path}/manageproducts`}>
                    <ManageProducts></ManageProducts>
                </AdminRoute>
            </Switch>


        </>
    );
};

export default Dashboard;