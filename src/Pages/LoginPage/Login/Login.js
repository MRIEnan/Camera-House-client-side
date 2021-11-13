import React,{useState,useEffect} from "react";
import { Container, Box, TextField, Typography, Button, CircularProgress, Alert } from "@mui/material";
import { NavHashLink } from 'react-router-hash-link';
import Navigation from '../../Shared/Navigation/Navigation';
import {  useHistory, useLocation } from 'react-router-dom';

import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {user,admin,signInWithGoogle,loginUser,isLoading,authError,setAdmin} = useAuth();
    const [ mail,setMail] = useState('');

    const location = useLocation();
    const history = useHistory();

    const [userInfo,setUserInfo] = React.useState({});

    // set admin from backend
    useEffect(()=>{
        fetch(`https://afternoon-mountain-78508.herokuapp.com/users/${mail}`)
        .then(res => res.json())
        .then(data => {
            setAdmin(data.admin)
        })
    },[mail]);


    const handleOnChange= e =>{
        const userField = e.target.name;
        const userValue = e.target.value;
        if(userField==='email'){
            setMail(userValue);
        }
        const newUserInfo = {...userInfo};
        newUserInfo[userField]=userValue;
        setUserInfo(newUserInfo)
    }


    const handleLogin = e => {
        loginUser(userInfo.email,userInfo.password,location,history)
        e.preventDefault();
    }
  return (
    <Container sx={{textAlign:'center'}}>
        <Typography id="login-top" variant="h3" component="div" sx={{textAlign:'center', marginTop:2}}>Login</Typography>
        <Box onSubmit={handleLogin} component="form" sx={{p:2,margin:'auto', display:'grid',width:{xs:1,sm:'400px'}}}>
            <TextField sx={{mt:1}} id="standard-basic" onBlur={handleOnChange} label="email" name="email" type="email" variant="standard" />
            <TextField onBlur={handleOnChange} sx={{mt:1}} id="standard-basic" label="password" name="password" type="password" variant="standard" />
            <Button variant="contained" type="submit" sx={{mt:3}}>Login</Button>
        </Box>
        {isLoading && <CircularProgress/>}
        {user?.email && 
        <Alert severity="success">User Created Successfully!</Alert>}
        {authError && 
        <Alert severity="error">{authError}</Alert>}
        <Typography sx={{mb:3}} variant="p" component="div">Don't Have an account? Please <NavHashLink style={{textDecoration:'none'}} to='/register'><Button  variant="contained">Register</Button></NavHashLink></Typography>
    </Container>
  );
};

export default Login;