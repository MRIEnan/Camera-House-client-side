import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions} from '@mui/material';
import { NavHashLink } from 'react-router-hash-link';


const ItemCard = (props) => {
    const { _id,cameraImage, cameraName, description, price } = props.product;
return (
  <Card sx={{ maxWidth: {xs:'240px',sm:'300px'},m:1 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={cameraImage}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cameraName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {description}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions sx={{display:'flex',justifyContent:'space-between'}}>
      <Typography sx={{marginLeft:'10px'}} variant="p" component="div">Price: {price}$</Typography>
      <NavHashLink style={{textDecoration:'none'}} to={`/productBooking/${_id}`}><Button size="small" variant="contained" sx={{marginRight:'10px'}}>
        Purchase
      </Button>
      </NavHashLink>
    </CardActions>
  </Card>
);
}

export default ItemCard;