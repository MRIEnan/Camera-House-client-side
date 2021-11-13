import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { Container, Box, Typography,Button } from '@mui/material';
import featureImage from '../../../images/photography-course-banner.jpg';

const HomeCameraFeatures = () => {
    return(
        <Container sx={{height:'300px',display:'flex',alignItems:'center',justifyContent:'center',background:`url(${featureImage})`,backgroundSize:'cover',backgroudnPosition:'center',backgroundRepeat:'no-repeat'}}>
            <Box>
            <Typography sx={{textAlign:'center',color:'#000000',fontWeight:'700'}} variant="h5">Featured Photography Courses</Typography>
            <Box sx={{display:'grid',padding:'20px auto',placeItems:'center'}}>
                <Typography sx={{textAlign:'center',color:'rgba(0,100,240,1)',fontWeight:'500'}} variant="h4">Learn Photography</Typography>
                <Typography sx={{textAlign:'center',margin:'10px auto'}} variant="p" component="div">Different Types of online courses available on Photography</Typography>
                <a style={{textDecoration:'none'}} href="https://www.udemy.com/topic/photography/" target="_blank"><Button variant="contained">Join Now</Button></a>
            </Box>
            </Box>
        </Container>
    )
}

export default HomeCameraFeatures;

// https://www.udemy.com/topic/photography/