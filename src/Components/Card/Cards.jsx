import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import BasicModal from '../Modals';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../fetchers/cartSlice';
const Cards = ({data}) => {
  const values = useSelector((prod) => prod.cart);
  const dispatch = useDispatch();
  console.log(values.cart);
  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardMedia component="img" alt="green iguana" height="140" image={data.imgUrl}/>
      <CardContent>
        <Box sx={{display:'flex', justifyContent:"space-between", alignItems:"center"}}>
          <Typography gutterBottom variant="h6" component="div">{data.name}</Typography>
          <Typography gutterBottom variant="p" component="div" style={{color:'red'}}>{data.price}$</Typography>
        </Box>
      </CardContent>
      <CardActions>
        {values.cart.some((ele) => ele.id === data.id) ? (
            <Button size="small" variant='contained' sx={{ bgcolor:'black' ,":hover":{bgcolor:'black'}}} onClick={() => dispatch(removeFromCart(data))}>remove cart</Button>
        ) : ( 
          <Button  size="small" variant='contained' sx={{ ":hover":{bgcolor:'green'}}} onClick={() => dispatch(addToCart(data))}>Add To Cart</Button>
        )}
        <BasicModal data={data} />
      </CardActions>
    </Card>
  );
}
export default Cards