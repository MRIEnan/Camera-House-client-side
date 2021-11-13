import React,{ useState, useEffect } from 'react';
import ItemCard from '../../Shared/ItemCard/ItemCard';
import { Container, Typography,Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';



const Products = () => {
    const[isFetching,setIsFetching] = useState(true)
    
    const[allProducts,setAllProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setAllProducts(data))
        .finally(()=>{setIsFetching(false)})
    },[isFetching]);

    if(isFetching){
        return(
            <Container sx={{display:'flex',justifyContent:'center',marginTop:1}}>
                <CircularProgress />
            </Container>
        )
    }

    return (
        <Box sx={{py:4}}>
            <Typography sx={{textAlign:'center', fontWeight:'700',color:'rgba(0,100,240,1)',mb:2}} variant="h4">Our Products</Typography>
            <Container sx={{display:'flex',flexWrap:'wrap', justifyContent:'center'}}>
            {
                allProducts.map(product => <ItemCard key={product._id} product={product}></ItemCard>)
            }
            </Container>
        </Box>
    );
};

export default Products;