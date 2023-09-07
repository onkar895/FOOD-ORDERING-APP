import React from 'react'
import { Box, Typography, styled, Button } from '@mui/material'
import CartItemList from '../Cart/CartItemList'
import { clearCart} from '../../Store/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import {ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import EmptyCart from '../../Assets/EmptyCart.png'
import { useNavigate } from 'react-router-dom'

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
margin-top : 6rem;
`

const ItemsBox = styled(Box)`
width : 100%;
`

const ButtonBox = styled(Box)`
display : flex;
gap : 20px;

& button {
  font-family: "Trebuchet MS";
  text-transform : capitalize;
}

& button:nth-child(2) {
  padding : 10px 40px;
}
`

const EmptyBox = styled(Box)`
display : flex;
flex-direction : column;
align-items : center;
gap : 2rem;

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

  const cartItems = useSelector((store) => store.cart.items)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleClearCart = () => {
    dispatch(clearCart()) ?
      toast.success("All Items Removed", {
        position: "top-center",
      }) :
      toast.error("Items Not Removed", {
        position: "top-center",
      }) 
  }


  return (
    <MainCartBox>
      {
        cartItems.length === 0 ? (
          <>
            <EmptyBox>
              <img src={EmptyCart} alt="" />
              <h2>Your Cart is Empty.</h2>
              <Button onClick={() => navigate('/restaurants')} variant='contained' size='large' color='error'>Explore the Restaurants</Button>
            </EmptyBox>
              
          </>

        ) : (  
            
        <CartBox>
          <ItemsBox>
            <CartItemList items={ cartItems } />
          </ItemsBox>
          <ButtonBox>
            <Button variant="contained" size="medium" onClick={() => navigate(-1)}>Continue Ordering</Button>
            <Button variant="contained" size="medium" color="error" onClick={handleClearCart}>Clear Cart</Button>
          </ButtonBox>
        </CartBox>
        )
      }
      {/* This component will render the toast notifications. */}
      <ToastContainer />
    </MainCartBox>
        
    
  )
}

export default Cart
