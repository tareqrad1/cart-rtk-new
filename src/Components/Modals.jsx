import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../fetchers/cartSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({data}) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((prod) => prod.cart)
  const handleOpen  = () => {
    setOpen(true);
  }
  const handleClose = () => setOpen(false);
  const Navigate = useNavigate();

  return (
    <div>
      <Button variant='contained' onClick={handleOpen} sx={{marginLeft:'10px'}}>View Details</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{width:'100%'}}
      >
            <Box sx={style}>
              <img src={data.imgUrl} alt="img" style={{width:'300px', margin: "0 auto"}} />
              <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign:'center', fontWeight:'bold', fontSize:'40px'}}>
                {data.name}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2, color:'red' }}>
                price: {data.price}$
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2, color:'#ccc' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est molestias pariatur, unde ex ducimus eum delectus quos dolores, deleniti natus quia. Quam architecto maxime illo consequatur quibusdam repudiandae, voluptate suscipit?
              </Typography>
              {cart.cart.some((ele) => ele.id === data.id) ? ( 
                  <>
                    <Button  size="small" variant='contained' sx={{ bgcolor:'black' , margin:'20px 130px'}} onClick={() => dispatch(removeFromCart(data))}>remove cart</Button>
                    <Button  size="small" variant='contained' sx={{ bgcolor:'yellow', color:'black' , margin:'20px 120px'}} onClick={() => Navigate('/cart')}>view from cart</Button>
                  </>
              ) : (
                  <Button variant='contained' sx={{margin:'20px 130px'}} onClick={() => dispatch(addToCart(data))}>Add to Cart</Button>
              )}
          </Box>
      </Modal>
    </div>
  );
}
