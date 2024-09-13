import React, { useEffect } from 'react';
import { Box, Typography, styled, Button } from '@mui/material';
import CartItemList from '../Cart/CartItemList';
import { useSelector } from 'react-redux';
import EmptyCart from '../../Assets/EmptyCart.png';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const MainContainer = styled(Box)(({ theme }) => ({
  paddingBottom: theme.spacing(0),
}));

const MainCartBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(2),
    marginTop: '8rem',
  },
  [theme.breakpoints.between('sm','md')]: {
    gap: theme.spacing(2),
    marginTop: '8rem',
  },
}));

const CartBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: theme.spacing(6),
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(4),
  },
}));

const ItemsBox = styled(Box)(({ theme }) => ({
  width: '100%',
}));

const EmptyBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(3),
  '& img': {
    width: '40vw',
    marginTop:'3rem',
  },
  '& p': {
    fontFamily: 'Trebuchet MS',
    color: 'rgb(211,47,47)',
    fontWeight: '900',
    fontSize:'2rem',
    textAlign: 'center',
  },
  '& button': {
    fontFamily: 'Trebuchet MS',
    textTransform: 'capitalize',
  },
  [theme.breakpoints.down('sm')]: {
    '& img': {
      width: '80vw',
    },
  },
}));

const Cart = () => {
  const cartItems = useSelector((store) => store.items);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Navbar />
      <MainContainer>
        <MainCartBox>
          {cartItems.length === 0 ? (
            <EmptyBox>
              <LazyLoadImage
              src={EmptyCart}
              alt="EmptyCart"
              effect="blur"
            />
            <Typography>Your Cart is Empty.</Typography>
            <Button onClick={() => navigate('/restaurants')} variant="contained" size="large" color="error">
              Explore the Restaurants
            </Button>
            </EmptyBox>
          ) : (
            <CartBox>
              <ItemsBox>
                <CartItemList items={cartItems} />
              </ItemsBox>
            </CartBox>
          )}
        </MainCartBox>
      </MainContainer>
      <Footer />
    </>
  );
};

export default Cart;
