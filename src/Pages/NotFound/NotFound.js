import React from 'react';
import {Container,Box,Button,Typography} from '@mui/material';
import{NavHashLink} from 'react-router-hash-link';

const NotFound = () =>{
    return(
        <Container >
            <Box sx={{paddingTop:'30px',display:'grid',placeItems:'center'}}>
                <Typography variant="h5">Opps! Page Not Found</Typography>
                <Typography variant="p">Please return to <NavHashLink style={{textDecoration:'none'}} to="/"><Button variant="contained">Home</Button></NavHashLink></Typography>
            </Box>
        </Container>
    )
}

export default NotFound;