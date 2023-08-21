import * as React from "react";
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, decrementQuantity, removeFromCart } from "../fetchers/cartSlice";

const Carts = () => {
  const value = useSelector((prod) => prod.cart);
  const dispatch = useDispatch();
  console.log('cart have :',value.cart);

  const TotalPrice = value.cart.reduce((acc, product) => {
    acc += product.price * product.qwt
    return acc
  },0)

  return (
    <>
    <Box
      sx={{
        display: "flex",
        flexDirection:'column',
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      {value.cart.map((ele) => {
        return (
        <div key={ele.id}>
          <Card sx={{ minWidth: 1500 }}>
            <CardContent sx={{display:'flex', justifyContent:"space-between", alignItems:"center"}}>
                <img src={ele.imgUrl} alt="img" width='100px' />
              <Typography variant="h5" component="div">
                {ele.name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                price is: {ele.price}
              </Typography>
              <Typography sx={{ mb: 1.5, fontSize:'20px', color:'red' }}>
              <button onClick={() => dispatch(addToCart(ele))}>+</button>
                {ele.qwt}
                <button onClick={() => dispatch(decrementQuantity(ele))}>-</button>
              </Typography>
              <CardActions>
              <Button variant='contained' onClick={() => dispatch(removeFromCart(ele))}>delete from cart</Button>
              </CardActions>
            </CardContent>
          </Card>
        </div>
        )
      })}
    </Box>
    <h1>Total Price is: {TotalPrice.toFixed(2)}<span>$</span></h1>
    {value.cart && value.cart.length > 0 && (<Button variant='contained' sx={{marginLeft:'100px', marginBottom:'20px'}} onClick={() => dispatch(clearCart())}>Clear Cart</Button>)}
    {value.cart && !value.cart.length && (<h1 style={{textAlign:'center', color:'red'}}>No Data In Cart Now</h1>)}
    </>
  );
};

export default Carts;
