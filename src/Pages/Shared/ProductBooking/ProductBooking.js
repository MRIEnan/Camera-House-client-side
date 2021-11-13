import React, { useState, useEffect } from 'react';
import { Container, Box, TextField, Typography, Button, CircularProgress, Alert } from "@mui/material";
import { useParams } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const ProductBooking = () => {
    const { Pid } = useParams();
    const { user } = useAuth();

    const [ orderPlaced,setOrderPlaced ] = useState(false);

    const [product,setProduct] = useState({});
    const [orderDetails,setOrderDetails]= useState({ordererName: user.displayName, ordererEmail:user.email});
    
    
    useEffect(()=>{
        fetch(`https://afternoon-mountain-78508.herokuapp.com/products?id=${Pid}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data)
        })
    },[]);


    const handleOnBlur= e =>{
        // alert('changed')
        const orderField = e.target.name;
        const orderValue = e.target.value;
        const newOrderDetails={...orderDetails};
        newOrderDetails[orderField]=orderValue;
        setOrderDetails(newOrderDetails);
    }

    const handlePlaceOrder = e =>{
        const ordererDetails ={...orderDetails};
        ordererDetails.ordererProductId=product._id;
        ordererDetails.ordererProductName=product.cameraName;
        ordererDetails.ordererProductShipment='pending';
        const date = (new Date()).toLocaleDateString();
        ordererDetails.ordererDate=date;

        fetch('https://afternoon-mountain-78508.herokuapp.com/orders',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(ordererDetails)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                setOrderPlaced(true);
            }
        });


        e.preventDefault()
    }

    if(orderPlaced){
        return(
            <Container>
                <Typography sx={{ mt:2,textAlign:'center'}} variant="p" component="div">Order placed Successfully.</Typography>
                <Typography sx={{textAlign:'center'}} variant="h6">Please return to <NavHashLink style={{textDecoration:'none',backgroundColor:'rgba(0,100,240,1)',color:'#ffffff',padding:'4px 7px',borderRadius:'3px'}} to="/">Home</NavHashLink> or <NavHashLink style={{textDecoration:'none',backgroundColor:'rgba(0,100,240,1)',color:'#ffffff',padding:'4px 7px',borderRadius:'3px'}} to="/dashboard/myOrders">Manage</NavHashLink></Typography>
            </Container>
        )
    }



    return (
        <Container sx={{py:2}}>
            <Typography variant="h6" sx={{textAlign:'center'}}>Please fill the order form</Typography>
            <Box component="form" onSubmit={handlePlaceOrder} sx={{display:'flex',margin:'auto', marginTop:'10px',flexDirection:'column',width:{xs:'100%',sm:'280px'}}}>
                <Box sx={{width:'100%'}}>
                    <img style={{width:'100%'}} src={product.cameraImage} alt="image"/>
                </Box>
                <Typography sx={{textAlign:'center'}} variant="h6">{product.cameraName}</Typography>
                <Typography sx={{textAlign:'center'}} variant="p">price: {product.price}$</Typography>
                {/* name */}
                <TextField sx={{mt:1}} id="standard-basic" onBlur={handleOnBlur} label="Name" name="ordererName" defaultValue={user.displayName} type="text" variant="standard" />
                {/* email */}
                <TextField sx={{mt:1}} id="standard-basic" onBlur={handleOnBlur} label="Email" name="ordererEmail" type="email" defaultValue={user.email} variant="standard" disabled/>
                {/* address */}
                <TextField sx={{mt:1}} id="standard-basic" onBlur={handleOnBlur} label="Address" name="ordererAddress" type="text" variant="standard" />
                {/* phone */}
                <TextField sx={{mt:1}} id="standard-basic" onBlur={handleOnBlur} label="Phone" name="ordererPhone" type="number" variant="standard" />
                <Button type="submit" sx={{marginTop:'10px'}} variant="contained">Place Order</Button>
            </Box>
        </Container>
    );
};

export default ProductBooking;