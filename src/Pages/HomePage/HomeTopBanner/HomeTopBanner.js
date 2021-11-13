import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { NavHashLink } from 'react-router-hash-link';
import homeTopBannerImage from '../../../images/homeTopBanner.png';

const HomeTopBanner = () => {
    return (
        <Container className="home-top" sx={{height:'400px',width:'100%', display:'grid', placeItems:'center',background:`url(${homeTopBannerImage})`, backgroundSize:'cover'}}>
            <Box sx={{textAlign:'center', height: "180px"}}>
                <Typography sx={{backgroundColor:'#070f1c',color:'#fff',width:'240px',borderRadius:'10px',boxShadow:'0 0 10px rgba(255,255,255,.63),0 0 20px rgba(255,255,255,.33),0 0 30px rgba(255,255,255,.13),inset 0px 10px 0px 10px rgba(0,140,200,1)',zIndex:'3',mixBlendMode:'opacity'}} variant="h4">Camera</Typography>
                <Typography sx={{backgroundColor: '#070f1c',color:'#ffffff',width:'92%',fontSize:'14px',marginLeft:'10px',pt:1,pb:2,mb:1}} variant="h6" >Freeze The Moment and Carry.</Typography>
                <NavHashLink style={{textDecoration:'none'}} to='/products'><Button  variant="contained">Explore</Button></NavHashLink>
            </Box>
        </Container>
    );
};

export default HomeTopBanner;