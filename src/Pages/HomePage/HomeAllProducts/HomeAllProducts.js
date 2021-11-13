import React,{ useState, useEffect } from 'react';
import ItemCard from '../../Shared/ItemCard/ItemCard';
import { Container, Typography,Box } from '@mui/material';

const HomeAllProducts = () => {
    const[allProducts,setAllProducts] = useState([]);
    useEffect(()=>{
        fetch('https://afternoon-mountain-78508.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setAllProducts(data));
    },[]);
    return (
        <Box sx={{py:4}}>
            <Typography sx={{textAlign:'center', fontWeight:'700',color:'rgba(0,100,240,1)',mb:2}} variant="h4">Our Products</Typography>
            <Container sx={{display:'flex',flexWrap:'wrap', justifyContent:'center'}}>
            {
                allProducts.slice(0,6).map(product => <ItemCard key={product._id} product={product}></ItemCard>)
            }
            </Container>
        </Box>
    );
};

export default HomeAllProducts;