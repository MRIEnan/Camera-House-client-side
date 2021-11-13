import React from 'react';
import {Box,Container,Button,Typography} from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PaymentIcon from '@mui/icons-material/Payment';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import TollIcon from '@mui/icons-material/Toll';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ContactlessIcon from '@mui/icons-material/Contactless';
import { NavHashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <Box sx={{backgroundColor:'rgba(0,100,240,1)',paddingTop:'50px',paddingBottom:'50px'}}>
            <Container sx={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
                <Box sx={{m:1,p:1,width:'260px'}}>
                    <CameraAltIcon sx={{display:'inline'}}/>
                    <Typography sx={{display:'inline', color:'#ffffff'}} variant='h4'>Camera HousE</Typography>
                    <Typography sx={{display:'block'}} variant='p'>Freeze the moment.</Typography>
                </Box>
                <Box sx={{m:1,p:1,width:'260px',display:'grid'}}>
                    <Typography variant="h5">Quick Links</Typography>
                    <NavHashLink style={{textDecoration:'none', color:'#ffffff'}} to="/">Home</NavHashLink>
                    <NavHashLink style={{textDecoration:'none',color:'#ffffff'}} to="/">Products</NavHashLink>
                    <NavHashLink style={{textDecoration:'none',color:'#ffffff'}} to="/">Dashboard</NavHashLink>
                    <NavHashLink style={{textDecoration:'none',color:'#ffffff'}} to="/login">Login</NavHashLink>
                </Box>
                <Box sx={{m:1,p:1,width:'260px'}}>
                    <Typography variant="h5">Contacts</Typography>
                    <Typography sx={{display:'flex',justifyContent:'flex-start',alignItems:'center',color:'#ffffff'}} variant="h6"><PhoneIcon sx={{marginRight:'5px'}}/>01777777777</Typography>
                    <Typography sx={{display:'flex',justifyContent:'flex-start',alignItems:'center',color:'#ffffff'}} variant="h6"><EmailIcon sx={{marginRight:'5px'}}/> mail.some@mail.com</Typography>
                    <Typography sx={{display:'flex',justifyContent:'flex-start',alignItems:'center',color:'#ffffff'}} variant="h6"><LocationOnIcon sx={{marginRight:'5px'}}/>Feni, Bangladesh</Typography>
                </Box>
                <Box sx={{m:1,p:1,width:'260px'}}>
                    <Typography variant="h5">We Accepts:</Typography>
                    <Box>
                        <PaymentIcon/>
                        <AccountBalanceIcon/>
                        <TollIcon/>
                        <CreditCardIcon/>
                        <ContactlessIcon/>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;