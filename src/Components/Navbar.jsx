import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import {NavLink, useNavigate } from "react-router-dom";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useSelector } from "react-redux";

const Navbar = () => {
  const Navigate = useNavigate();
  const value = useSelector((prod) => prod.cart) 
  return (
    <Box component='nav'>
      <AppBar  position="static" sx={{bgcolor:'white'}}>
        <Toolbar>
            <Box flexGrow={1}>
              <NavLink to='/home' style={{textDecoration:'none', color:'black'}}>Home</NavLink>
              <NavLink to='/store' style={{textDecoration:'none', color:'black',marginLeft:'20px' ,marginRight:'20px'}}>Store</NavLink>
              <NavLink to='/about' style={{textDecoration:'none', color:'black'}}>About</NavLink>
            </Box>

            <IconButton sx={{width:60, height: 60, position: 'relative'}} onClick={() => Navigate('/cart')}>
              <AddShoppingCartIcon />
              <Typography sx={{position:'absolute', backgroundColor:'#1976d2', fontSize:'16px', width:'20px', height:'20px', borderRadius:'100%', right:'0', bottom:'10px', color:"#fff"}} variant="h4">{value.cart.length}</Typography>
            </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar