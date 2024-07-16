import React, { useContext } from 'react';
import { Box, styled, Typography, Button } from '@mui/material';
import { SWIGGY_MENU_IMG_API } from '../../../utils/Constants';
import DemoImage from '../../Assets/DemoImage.jpg';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeItem, clearCart } from '../../Store/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HeaderBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'start',
  gap: theme.spacing(6),
  marginLeft: theme.spacing(6),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: theme.spacing(4),
    marginLeft: 0,
    alignItems: 'center',
  },
}));

const MainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
  width: '45vw',
  padding: theme.spacing(3),
  boxShadow: '0 0 4px 0 rgba(208,208,208,0.8)',
  [theme.breakpoints.down('sm')]: {
    width: '95vw',
    flexDirection: 'column',
    gap:'40px'
  },
}));

const CardContent = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

const PriceBox = styled(Box)({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  '& h6': {
    fontWeight: 'bold',
    color: 'red',
    backgroundColor: 'rgba(211,47,47,0.1)',
    padding: '2px 5px',
    '& > span': {
      fontSize: '10px',
    },
  },
});

const MenuImageBox = styled(Box)(({ theme }) => ({
  position: 'relative',

  '& > img': {
    objectFit: 'cover',
    borderRadius: '5px',
    width: '10vw',
    height: '15vh',
    [theme.breakpoints.down('sm')]: {
      width: '80vw',
      height: '25vh',
    },
  },
}));

const RemoveItemBox = styled(Box)({
  cursor: 'pointer',
  marginLeft: '1.5rem',
  color: 'grey',
  color: 'rgb(211,47,47)',
  fontWeight: 500,
});

const ButtonBox = styled(Box)({
  display: 'flex',
  gap: '10px',
  fontWeight: 'bold',

  '& button:nth-child(1)': {
    fontFamily: 'Trebuchet MS',
    textTransform: 'capitalize',
    backgroundColor: 'rgba(55,118,210,0.1)',
    '&:hover': {
      color: 'white',
      backgroundColor: 'rgb(55,118,210)',
      fontWeight: 'bold',
    },
  },
  '& button:nth-child(2)': {
    fontFamily: 'Trebuchet MS',
    textTransform: 'capitalize',
    padding: '10px 38px',
    backgroundColor: 'rgba(211,47,47,0.1)',
    '&:hover': {
      color: 'white',
      fontWeight: 'bold',
      backgroundColor: 'rgb(211,47,47)',
    },
  },
});


const ImgBox = styled(Box)(({ theme }) => ({
  
  [theme.breakpoints.down('sm')]: {
    flexDirection:'column',
    
  },
}));

const InfoBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  margin: '10px 0',
  borderTop: '1px solid lightgray',
  borderBottom: '1px solid lightgray',
  padding: '10px 0 15px 0',
  '& > div': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#71797E',
    '& p': {
      fontFamily: 'Trebuchet MS',
      fontSize: '14px',
      color: 'black',
    },
    '& h4': {
      fontFamily: 'Trebuchet MS',
      color: 'black',
    },
    '& span': {
      fontSize: '13px',
      color: 'rgb(211,47,47)',
    },
  },
});

const TotalBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 0 15px 0',
  borderBottom: '1px solid lightgray',
  '& h3': {
    fontFamily: 'Trebuchet MS',
  },
});

const SummaryContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent:'center',
  gap: '20px',
});

const Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  width: '28vw',
  boxShadow: '0 0 6px 0 rgba(208,208,208,0.8)',
  height: '60vh',
  [theme.breakpoints.down('sm')]: {
    width: '98vw',
  },
}));

const CartItemList = ({ items }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (item) => {
    dispatch(removeItem({ item }))
      ? toast.success('Removed from Cart', {
          position: 'top-center',
          newestOnTop: true,
          autoClose: 1000,
        })
      : toast.error('Not Removed', {
          position: 'top-center',
          newestOnTop: true,
          autoClose: 1000,
        });
  };

  const handleClearCart = () => {
    dispatch(clearCart())
      ? toast.success('All Items Removed', {
          position: 'top-center',
          newestOnTop: true,
          autoClose: 1000,
        })
      : toast.error('Items Not Removed', {
          position: 'top-center',
          newestOnTop: true,
          autoClose: 1000,
        });
  };

  const handleClick = () => {
    toast.success('Order Placed Successfully', {
      position: 'top-center',
      newestOnTop: true,
      autoClose: 2000,
    });
  };

  const TotalAmount =
    items.length > 0
      ? items
          .map((x) => (x.card.info.price > 0 ? x.card.info.price / 100 : x.card.info.defaultPrice / 100))
          .reduce((sum, a) => sum + a, 0)
      : 0;

  const DeliveryCharges = (TotalAmount * 0.5) / 10;
  const Discount = (TotalAmount * 10) / 100;
  const FinalAmount = TotalAmount + DeliveryCharges - Discount;

  return (
    <>
      <Typography variant="h4" style={{ textAlign: 'center', marginBottom: '1rem', color: 'rgb(211,47,47)' }}>
        Cart
      </Typography>
      <HeaderBox>
        <Box>
          {items &&
            items.map((item) => (
              <MainContainer key={item.card.info.id}>
                <ImgBox sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <MenuImageBox>
                    <img
                      src={item.card.info.imageId ? SWIGGY_MENU_IMG_API + item.card.info.imageId : DemoImage}
                      alt=""
                    />
                  </MenuImageBox>
                  <CardContent key={item.card.info.id}>
                    <Box>
                      <Typography>{item.card.info.name}</Typography>
                    </Box>
                    <PriceBox>
                      <Typography><strong>Price :</strong> ₹ {(item.card.info.price / 100 || item.card.info.defaultPrice / 100).toFixed(2)}</Typography>
                      <Typography variant="subtitle2">50% OFF | <span>USE FOODIEIT</span></Typography>
                    </PriceBox>
                  </CardContent>
                </ImgBox>
                <RemoveItemBox onClick={() => handleRemove(item)}>
                  <Typography variant="body2"><strong>Remove</strong></Typography>
                </RemoveItemBox>
              </MainContainer>
            ))}
        </Box>
        <SummaryContainer>
          <Container>
            <Box>
              <Typography variant="h5">Order Summary</Typography>
            </Box>
            <InfoBox>
              <Box>
                <Typography variant="body1">Price: ({items.length} Items)</Typography>
                <Typography variant="h6">{`₹ ${parseFloat(TotalAmount).toFixed(2)}`}</Typography>
              </Box>
              <Box>
                <Typography variant="body1">Discount (10%):</Typography>
                <Typography variant="h6">- ₹ {parseFloat(Discount).toFixed(2)}</Typography>
              </Box>
              <Box>
                <Typography variant="body1">Delivery Charges (5%):</Typography>
                <Typography variant="h6">+ ₹ {parseFloat(DeliveryCharges).toFixed(2)}</Typography>
              </Box>
              <Box>
                <Typography>You have saved <strong>₹ {parseFloat(Discount).toFixed(2)}</strong> on this order 😊</Typography>
              </Box>
            </InfoBox>
            <TotalBox>
              <Typography variant="h5">Total Amount :</Typography>
              <Typography variant="h5">₹ {parseFloat(FinalAmount).toFixed(2)}</Typography>
            </TotalBox>
            <Box sx={{ marginTop: '5px' }}>
              <Button onClick={handleClick} variant="contained" color="error" size="large" fullWidth>
                <Typography sx={{fontWeight:'bold'}}>Place Order</Typography>
              </Button>
            </Box>
          </Container>
          <ButtonBox>
            <Button variant="outlined" size="small" onClick={() => navigate(-1)}>
              <Typography variant="h6">Continue Ordering</Typography>
            </Button>
            <Button variant="outlined" size="small" color="error" onClick={handleClearCart}>
              <Typography variant="h6">Clear Cart</Typography>
            </Button>
          </ButtonBox>
        </SummaryContainer>
        <ToastContainer />
      </HeaderBox>
    </>
  );
};

export default CartItemList;
