import React, { useState,useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../hooks/useAuth';
import CancelIcon from '@mui/icons-material/Cancel';

const ManageProducts = () => {
    const [allProducts,setAllProducts] = useState([]);
    const [managed,setManaged] = useState(false);
    const { token } = useAuth();

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setAllProducts(data));
    },[managed]);

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
        fetch('http://localhost:5000/products',{
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
                setManaged(!managed);
            }
        })
    }


    return (
        <TableContainer component={Paper}>
      <Table size="small" sx={{marginTop:'10px',boxShadow:'0 0 10px rgba(0,0,0,.33)'}} aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Product</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allProducts.map((product) => (
            <TableRow
              key={product._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center"><img style={{height:'40px',width:'60px'}} src={product.cameraImage} alt="camera"/></TableCell>
              <TableCell align="center">{product.cameraName}</TableCell>
              <TableCell align="center">{product.price}$</TableCell>
              <TableCell align="center"><CancelIcon onClick={()=>handleOnClick(product._id,'DELETE')} sx={{backgroundColor:'#aa1111',color:'#ee1111'}}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ManageProducts;