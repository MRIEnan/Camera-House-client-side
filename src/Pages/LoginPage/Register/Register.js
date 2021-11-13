import * as React from "react";
import { Container, Box, TextField, Typography, Button, CircularProgress,Alert } from "@mui/material";
import { NavHashLink } from "react-router-hash-link";
import useAuth from '../../../hooks/useAuth';
import { useHistory } from "react-router";

const Register = () => {
    const {user,registerUser,isLoading,authError} = useAuth();
    const history = useHistory();
    const [userInfo,setUserInfo] = React.useState({});

    const handleOnBlur= e =>{
        const userField = e.target.name;
        const userValue = e.target.value;
        const newUserInfo = {...userInfo};
        newUserInfo[userField]=userValue;
        setUserInfo(newUserInfo)
    }


    const handleRegistration = e => {
        if(userInfo.password !== userInfo.password2){
            alert("Your password didn't match");
            return;
        }
        registerUser(userInfo.email,userInfo.password,userInfo.name,history);

        e.preventDefault();
    }
  return (
    <Container sx={{textAlign:'center'}}>
        <Typography variant="h3" component="div" sx={{textAlign:'center',marginTop:2}}>Register</Typography>
        <Box onSubmit={handleRegistration} component="form" sx={{p:2, margin:'auto', display:'grid',width:{xs:1,sm:'400px'}}}>
            <TextField onBlur={handleOnBlur} id="standard-basic" label="Name" name="name" variant="standard" />
            <TextField onBlur={handleOnBlur} sx={{mt:1}} id="standard-basic" label="email" name="email" type="email" variant="standard" />
            <TextField onBlur={handleOnBlur} sx={{mt:1}} id="standard-basic" label="password" name="password" type="password" variant="standard" />
            <TextField onBlur={handleOnBlur} sx={{mt:1}} id="standard-basic" label="password" name="password2" type="password" variant="standard" />
            <Button variant="contained" type="submit" sx={{mt:3}}>Register</Button>
        </Box>
        {isLoading && <CircularProgress/>}
        {user?.email && 
        <Alert severity="success">User Created Successfully!</Alert>}
        {authError && 
        <Alert severity="error">{authError}</Alert>}
        <Typography sx={{mb:3}} variant="p" component="div">Already Have an account? Please <NavHashLink style={{textDecoration:'none'}} to='/login'><Button  variant="contained">Login</Button></NavHashLink></Typography>
    </Container>
  );
};

export default Register;
