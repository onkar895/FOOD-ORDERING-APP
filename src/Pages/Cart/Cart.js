import React from 'react'
import { Box, Typography, styled, Button } from '@mui/material'
import CartItemList from '../Cart/CartItemList'
import { useSelector } from 'react-redux'
import EmptyCart from '../../Assets/EmptyCart.png'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../Components/Header/Navbar'
import Footer from '../../Components/Footer/Footer'


const MainContainer = styled(Box)`
// background-image: linear-gradient(to bottom, rgba(238, 194, 174, 0) 0%, rgba(230, 99, 103, 0.1) 100%);
`

const MainCartBox = styled(Box)`
display : flex;
flex-direction : column;
gap : 2rem;
align-items : center;
justify-content : center;
`

const CartBox = styled(Box)`
display : flex;
flex-direction : column;
gap : 2rem;
align-items : center;
justify-content : center;
margin-top : 3rem;
`

const ItemsBox = styled(Box)`
width : 100%;
`

const EmptyBox = styled(Box)`
display : flex;
flex-direction : column;
align-items : center;
gap : 2rem;

& > img {
  width : 50vw;
}

 & h2  {
  font-family: "Trebuchet MS";
  color : rgb(211,47,47);
 }

 & button {
  font-family: "Trebuchet MS";
  text-transform : capitalize;
 }

`

const Cart = () => {

  const cartItems = useSelector((store) => store.items)

  const navigate = useNavigate()


  return (
  <>
      <Navbar />
      <MainContainer>
        <MainCartBox>
          {
            cartItems.length === 0 ? (
          
              <EmptyBox>
                <img src={EmptyCart} alt="" />
                <h2>Your Cart is Empty.</h2>
                <Button onClick={() => navigate('/restaurants')} variant='contained' size='large' color='error'>Explore the Restaurants</Button>
              </EmptyBox>

            )  :  (  
            
              <CartBox>
                <ItemsBox>
                    <CartItemList items={cartItems} />
                </ItemsBox>
              </CartBox>
            )
          }
        </MainCartBox>
         
      </MainContainer>
      <Footer/>
  </>
  )
}

export default Cart
