import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import {Typography,Box,Container} from '@mui/material'
import HomeTopBanner from '../HomeTopBanner/HomeTopBanner';
import HomeAllProducts from '../HomeAllProducts/HomeAllProducts';
import HomeReviews from '../HomeReviews/HomeReviews';
import HomeCameraFeatures from '../HomeCameraFeatures/HomeCameraFeatures';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    
    return (
        <Box >
            <HomeTopBanner className="home-top"></HomeTopBanner>
            <HomeAllProducts></HomeAllProducts>
            <HomeReviews></HomeReviews>
            <HomeCameraFeatures></HomeCameraFeatures>
            <Footer></Footer>
        </Box>
    );
};

export default Home;