import React, { useState, useEffect } from 'react';
import { Box, Button, Skeleton, Stack, Typography, Container} from '@mui/material';
import ReviewCard from '../../Shared/ReviewCard/ReviewCard';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

const HomeReviews = () => {
    
    const [allReview,setAllReview] = useState([]);

    useEffect(()=>{
        fetch('https://afternoon-mountain-78508.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => {
            setAllReview(data)
        })
    },[]);

    const handleBefore = () =>{
        const reviewsAll = [...allReview]
        const oneReview = allReview[allReview.length-1];
        reviewsAll.pop();
        reviewsAll.unshift(oneReview);
        setAllReview(reviewsAll);
    }
    const handleNext = () =>{
        const oneReview = allReview[0];
        const reviewsAll = [...allReview]
        reviewsAll.shift();
        reviewsAll.push(oneReview);
        setAllReview(reviewsAll);
    }
    return (
        <Box>
            <Typography sx={{textAlign:'center',color:'rgba(0,100,240,1)',fontWeight:'700'}} variant="h4">Our Testimonials</Typography>
            <Container sx={{display:'flex',flexWrap:'wrap', justifyContent:'center'}}>
            {
                allReview.slice(0,3).map(singleReview =><ReviewCard key={singleReview._id} singleReview={singleReview}></ReviewCard>)
            }
            </Container>
            <Box sx={{display:'flex',justifyContent:'center',my:3}}>
                <Button sx={{marginRight:'10px'}} onClick={handleBefore} variant='contained'><ArrowLeftIcon/></Button>
                <Button onClick={handleNext} variant='contained'><ArrowRightIcon/></Button>
            </Box>
            {/* <ReviewCard singleReview={allReview[0]}></ReviewCard>
            <ReviewCard singleReview={allReview[1]}></ReviewCard>
            <ReviewCard singleReview={allReview[2]}></ReviewCard> */}
        </Box>
    );
};

export default HomeReviews;