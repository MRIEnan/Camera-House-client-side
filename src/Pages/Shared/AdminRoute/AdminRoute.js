import React from 'react';
import {CircularProgress} from '@mui/material';
import { Route,useHistory,Redirect} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({children,...rest}) => {
    const history=useHistory();
    const {user,admin,isLoading} = useAuth();

    if(!admin){
        history.replace('/')
        return;
    }

    if(isLoading){
        return<CircularProgress sx={{margin:'auto'}}/>
    }
    return(
        <Route
            {...rest}
            render={({location}) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: {from: location}
                        }}/>
                )}/>
        
    )
}

export default AdminRoute;