import React, { useState,useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import useAuth from '../../../hooks/useAuth';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CancelIcon from '@mui/icons-material/Cancel';


const ManageAllOrder = () => {
    const [allOrders,setAllOrders] = useState([]);
    const [shipment,setShipment] = useState(false);
    const { user,token } = useAuth();

    useEffect(()=>{
        fetch('https://afternoon-mountain-78508.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setAllOrders(data));
    },[shipment]);

    const handleView= () =>{
        alert("This product is delivered to it's destination")
    }

    const handleOnClick = (id,method) =>{
        if(method==='DELETE'){
            const proceed = window.confirm('Are you sure, you want to delete?');
            if(!proceed){
                return
            }
        }
        fetch('https://afternoon-mountain-78508.herokuapp.com/orders',{
            method:method,
            headers:{
              'authorization':`Bearer ${token}`,
              'content-type':'application/json'
            },
            body:JSON.stringify({id:id})
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount>=1 || data.deletedCount >=1){
                setShipment(!shipment);
            }
        })
    }


    return (
        <TableContainer component={Paper}>
      <Table size="small" sx={{marginTop:'10px',boxShadow:'0 0 10px rgba(0,0,0,.33)'}} aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Product</TableCell>
            <TableCell align="center">Consumer</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Accept/Cancel</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allOrders.map((product) => (
            <TableRow
              key={product._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{product.ordererProductName}</TableCell>
              <TableCell align="center">{product.ordererName}</TableCell>
              <TableCell align="center">{product.ordererDate}</TableCell>
              <TableCell align="center">{product.ordererProductShipment}</TableCell>
              {product.ordererProductShipment==='pending'?<TableCell style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)',placeItems:'center'}} align="center"><LocalShippingIcon onClick={()=>handleOnClick(product._id,'PUT')} sx={{height:{sm:'100%',md:'60px'},width:{sm:'100%',md:'60px'},backgroundColor:'#229933',color:'#22ee33',fontSize:'20px',margin:'10px auto 11px auto'}}/><CancelIcon onClick={()=>handleOnClick(product._id,'DELETE')} sx={{height:{sm:'100%',md:'60px'},width:{sm:'100%',md:'60px'},backgroundColor:'#aa1111',color:'#ee1111'}}/></TableCell>:<TableCell align="center"><Button onClick={handleView} variant="contained">View</Button></TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ManageAllOrder;