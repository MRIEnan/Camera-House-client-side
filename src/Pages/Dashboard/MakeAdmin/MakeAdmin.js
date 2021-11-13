import React, {useState,useEffect} from 'react';
import useAuth from '../../../hooks/useAuth';
import { Container,Alert, Box, Button, TextField} from '@mui/material';
import { useLocation,useHistory } from 'react-router-dom';

const MakeAdmin = (props) => {
    const { token} = useAuth();
    
    const [email,setEmail] = useState('');
    const [success,setSuccess] = useState(false);
    
    const handleAdminSubmit = e =>{
        const user = {email};
        fetch('https://afternoon-mountain-78508.herokuapp.com/users/admin',{
            method:'PUT',
            headers:{
                'authorization':`Bearer ${token}`,
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                setSuccess(true);
            }
        })
        
        
        e.preventDefault();
    }


    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    return (
        <Container>
            <Box sx={{marginTop:'10px', justifyContent:'center',display:'flex',flexDirection:'column'}} onSubmit={handleAdminSubmit} component="form">
                <TextField label="email" type="email" onBlur={handleOnBlur} variant="standard" />
                <Button sx={{marginTop:'10px'}} type="submit" variant="contained">Make Admin</Button>
            </Box>
            {success && <Alert severity="success">Admin added successfully!</Alert>}
        </Container>
    );
};

export default MakeAdmin;