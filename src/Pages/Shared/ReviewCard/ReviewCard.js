import React from 'react';
import { Card,Box,Stack,Rating, CardContent, Typography, CardActionArea, CardActions} from '@mui/material';


const ReviewCard = (props) => {
    const {name, reviewerImage,review,rating} = props.singleReview;
    return (
        <Card sx={{textAlign:'center', maxWidth: {xs:'240px',sm:'300px'},m:1 }}>
    <CardActionArea>
        <Box sx={{width:'100%',display:'flex',justifyContent:'center'}}>
            <img style={{width:'80px',height:'80px',borderRadius:'50%'}} src={reviewerImage} alt="" />
        </Box>
      <CardContent sx={{px:2,py:1}}>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {review}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions sx={{display:'flex',justifyContent:'center'}}>
    <Stack spacing={1}>
      <Rating name="half-rating-read" defaultValue={parseInt(rating)} precision={.5} readOnly />
    </Stack>
    </CardActions>
  </Card>
    );
};

export default ReviewCard;