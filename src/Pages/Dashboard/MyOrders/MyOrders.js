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



const MyOrders = () => {
    const [myOrders,setMyOrders] = useState([]);
    const { user } = useAuth();
    const [shipment,setShipment] = useState(false);

    useEffect(()=>{
        fetch(`http://localhost:5000/orders?email=${user.email}`)
        .then(res => res.json())
        .then(data => setMyOrders(data));
    },[shipment]);

    const handleCancelProduct = id =>{
      const proceed = window.confirm('Are you sure, you want to delete?');
      if(!proceed){
          return
      }
      fetch('http://localhost:5000/orders',{
        method:'DELETE',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({id:id})
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        if(data.deletedCount >=1){
            setShipment(!shipment);
        }
    })
    }

    const handleViewProduct = () =>{
      alert('You will get your product within delivery schedule.')
    }


    return (
        <TableContainer component={Paper}>
      <Table size="small" sx={{marginTop:'10px',boxShadow:'0 0 10px rgba(0,0,0,.33)'}} aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Product</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {myOrders.map((product) => (
            <TableRow
              key={product._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{product.ordererProductName}</TableCell>
              <TableCell align="center">{product.ordererDate}</TableCell>
              <TableCell align="center">{product.ordererProductShipment}</TableCell>
              <TableCell align="center">{product.ordererProductShipment=== 'pending' && <Button onClick={()=>handleCancelProduct(product._id)} variant="contained" sx={{backgroundColor:'#aa1111'}} >cancel</Button>}{product.ordererProductShipment=== 'shipped' && <Button onClick={handleViewProduct} variant="contained" >view</Button>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyOrders;