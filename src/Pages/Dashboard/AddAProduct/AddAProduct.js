import React, { useState, useEffect } from 'react';
import { Container, Box, TextField, Typography, Button, CircularProgress,Alert } from "@mui/material";
import {useHistory} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const AddAProduct = () => {
    const history = useHistory();
    const { user } = useAuth();
    const [productDetail,setProductDetail] = useState({});

    const handleOnBlur = e =>{
        const pdField = e.target.name;
        const pdValue = e.target.value;
        const newProductDetail={...productDetail};
        newProductDetail[pdField]=pdValue;
        setProductDetail(newProductDetail);
    };

    const handleReviewSubmit = e =>{

        fetch('https://afternoon-mountain-78508.herokuapp.com/products',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(productDetail)
        }).then(res => res.json())
        .then(data => {
            if(data.insertedId){
                history.replace('/dashboard/manageProducts')
            }
        })

        e.preventDefault();
    };


    return (
        <Container sx={{p:2}}>
            <Typography sx={{textAlign:'center'}} variant="h6">Please Provide your product information</Typography>
            <Box onSubmit={handleReviewSubmit} component="form" sx={{display:'flex',flexDirection:'column'}}>
                <TextField onBlur={handleOnBlur} id="standard-basic" label="Camera Name" name="cameraName" variant="standard" required/>
                <TextField onBlur={handleOnBlur} id="standard-basic" label="price" name="price" type="number" variant="standard" required/>
                <TextField onBlur={handleOnBlur} id="standard-basic" label="Camera Image Url" name="cameraImage" variant="standard" required/>
                <textarea style={{marginTop:'5px',fontSize:'14px',height:'70px'}} onBlur={handleOnBlur} placeholder="please describe your product" id="standard-basic" label="give your review" name="description" variant="standard" required/>
                <Button sx={{marginTop:'10px'}} variant="contained" type="submit">Add</Button>
            </Box>
        </Container>
    );
};

export default AddAProduct;