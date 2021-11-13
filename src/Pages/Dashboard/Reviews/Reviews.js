import React, { useState, useEffect } from 'react';
import { Container, Box, TextField, Typography, Button, CircularProgress,Alert } from "@mui/material";
import { useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU

const Reviews = () => {
    const history =useHistory();
    const { user } = useAuth();
    const [reviewDetail,setReviewDetail] = useState({name:user.displayName,reviewerEmail:user.email});

    const handleOnBlur = e =>{
        const rvField = e.target.name;
        const rvValue = e.target.value;
        const newReviewDetail={...reviewDetail};
        newReviewDetail[rvField]=rvValue;
        setReviewDetail(newReviewDetail);
    };

    const handleReviewSubmit = e =>{
        console.log(reviewDetail);

        fetch('http://localhost:5000/reviews',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(reviewDetail)
        }).then(res => res.json())
        .then(data => {
            if(data.insertedId){
                history.replace('/dashboard')
            }
        })

        e.preventDefault();
    };


    return (
        <Container sx={{p:2}}>
            <Typography sx={{textAlign:'center'}} variant="h6">Please give your feedback</Typography>
            <Box onSubmit={handleReviewSubmit} component="form" sx={{display:'flex',flexDirection:'column'}}>
                <TextField onBlur={handleOnBlur} id="standard-basic" label="Name" name="name" value={user.displayName} variant="standard" readOnly/>
                <TextField onBlur={handleOnBlur} id="standard-basic" label="Email" name="reviewerEmail" value={user.email} variant="standard" readOnly />
                <TextField onBlur={handleOnBlur} id="standard-basic" label="ImageLink" name="reviewerImage" variant="standard" />
                <textarea style={{marginTop:'5px',height:'70px'}} onBlur={handleOnBlur} placeholder="please write your feedback here" id="standard-basic" label="give your review" name="review" variant="standard" />
                <TextField onBlur={handleOnBlur} id="standard-basic" label="rating" name="rating" type="number" InputProps={{ inputProps: { min: 0, max:5}}} variant="standard" placeholder="please give rating between 0-5" />
                <Button sx={{marginTop:'10px'}} variant="contained" type="submit">Submit</Button>
            </Box>
        </Container>
    );
};

export default Reviews;