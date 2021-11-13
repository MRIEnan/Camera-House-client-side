import React,{useState, useEffect} from 'react';
import { Box, Container, Button, CircularProgress,Typography} from '@mui/material';
import { NavHashLink } from 'react-router-hash-link';
import {BrowserRouter,useRouteMatch, useHistory, Switch, Route} from 'react-router-dom';
import DashboardHome from '../DashboardHome/DashboardHome';
import AddAProduct from '../AddAProduct/AddAProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import Reviews from '../Reviews/Reviews';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Shared/AdminRoute/AdminRoute';


const Dashboard = () => {
    let{path,url} = useRouteMatch();
    const { admin } = useAuth();

    
    return (
        <Box className="dashboard-top" sx={{paddingTop: '10px' ,marginBottom:'10px',display:'grid',gridTemplateColumns:{xs:'100%',sm:'30% 65%'}}}>
            <Box sx={{width: {xs:'100%',sm:'160px'}, display:'flex',paddingTop:'5px', flexWrap:'wrap',flexDirection:{xs:'row',sm:'column'}, textAlign:'center',
            marginRight:'5px'}}>
                {/* add a product */}
                {admin && <NavHashLink style={{textDecoration:'none', margin:'5px',padding:'10px',color:'rgba(0,100,240,1)',boxShadow:'0 0 10px rgba(0,0,0,.33)',marginBottom:'5px'}} to={`${url}/addAProduct`}>Add A Product</NavHashLink>}
                {/* make admin */}
                {admin && <NavHashLink style={{textDecoration:'none', margin:'5px',padding:'10px',color:'rgba(0,100,240,1)',boxShadow:'0 0 10px rgba(0,0,0,.33)',marginBottom:'5px'}} to={`${url}/makeAdmin`}>Make Admin</NavHashLink>}
                {/* manage all order */}
                {admin && <NavHashLink style={{textDecoration:'none', margin:'5px',padding:'10px',color:'rgba(0,100,240,1)',boxShadow:'0 0 10px rgba(0,0,0,.33)',marginBottom:'5px'}} to={`${url}/manageAllOrder`}>Manage All Order</NavHashLink>}
                {/* manage products */}
                {admin && <NavHashLink style={{textDecoration:'none', margin:'5px',padding:'10px',color:'rgba(0,100,240,1)',boxShadow:'0 0 10px rgba(0,0,0,.33)',marginBottom:'5px'}} to={`${url}/manageProducts`}>Manage Products</NavHashLink>}
                {/* my orders */}
                {!admin && <NavHashLink style={{textDecoration:'none', margin:'5px',padding:'10px',color:'rgba(0,100,240,1)',boxShadow:'0 0 10px rgba(0,0,0,.33)',marginBottom:'5px'}} to={`${url}/myOrders`}>My Orders</NavHashLink>}
                {/* pay */}
                {!admin && <NavHashLink style={{textDecoration:'none', margin:'5px',padding:'10px',color:'rgba(0,100,240,1)',boxShadow:'0 0 10px rgba(0,0,0,.33)',marginBottom:'5px'}} to={`${url}/pay`}>Pay</NavHashLink>}
                {/* make a review */}
                {!admin && <NavHashLink style={{textDecoration:'none', margin:'5px',padding:'10px',color:'rgba(0,100,240,1)',boxShadow:'0 0 10px rgba(0,0,0,.33)',marginBottom:'5px'}} to={`${url}/reviews`}>Make a Review</NavHashLink>}
            </Box>
            <Box>
                <Switch>
                    {admin?<Route exact path={path}>
                        <ManageAllOrder></ManageAllOrder>
                    </Route>:
                    <Route exact path={path}>
                        <MyOrders ></MyOrders>
                    </Route>}
                    <AdminRoute path={`${path}/addAProduct`}>
                        <AddAProduct ></AddAProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin ></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageAllOrder`}>
                        <ManageAllOrder></ManageAllOrder>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/reviews`}>
                        <Reviews></Reviews>
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
};

export default Dashboard;