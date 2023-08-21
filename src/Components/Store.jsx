import React from 'react'
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material'
import Cards from './Card/Cards'
import { Container } from '@mui/material';
import items from './Card/items.json';


const Store = () => {
  return (
    <>
      <Container>
      <Typography variant="h1" sx={{ fontWeight:'bold', m:'20px 0'}}>Store</Typography>
      <Grid container spacing={3}>
      {items.map((data) => {
        console.log(data);
        return (
            <Grid item lg={3} md={4} sm={6} xs={12}  key={data.id}>
              <Cards data={data}/>
            </Grid>
        )
      })}
      </Grid>
      </Container>
    </>
  )
}

export default Store



