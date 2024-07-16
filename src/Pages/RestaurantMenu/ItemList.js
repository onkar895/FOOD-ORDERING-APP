import React from 'react';
import { Box, styled, Typography, Button } from '@mui/material';
import { SWIGGY_MENU_IMG_API } from '../../../utils/Constants';
import DemoImage from '../../Assets/DemoImage.jpg';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Store/cartSlice';
import { ToastContainer, toast } from 'react-toastify';

const MainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '1rem',
  padding: '20px',
  gap: '20px',
  boxShadow: '0 0 4px 0 rgba(208,208,208,0.8)',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: '15px'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '10px'
  }
}));

const CardContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  '& > div > h4': {
    color: 'dimgray'
  },
  '& > div > p': {
    fontSize: '14px',
    color: 'rgba(128,128,128,0.7)',
    fontFamily: 'Trebuchet MS'
  },
  [theme.breakpoints.down('sm')]: {
    '& > div > p': {
      fontSize: '12px'
    }
  }
}));

const HeadingBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center'
  }
}));

const PriceBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  '& h6': {
    fontWeight: 'bolder',
    color: 'red',
    backgroundColor: 'rgba(211,47,47,0.1)',
    padding: '2px 5px',
    '& > span': {
      fontSize: '10px'
    }
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '5px',
    '& h6': {
      fontSize: '12px',
      padding: '1px 3px'
    }
  }
}));

const MenuImageBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  '& > img': {
    objectFit: 'cover',
    borderRadius: '5px',
    width: '10vw',
    height: '15vh',
    [theme.breakpoints.down('sm')]: {
      width: '70vw',
      height: '22vh'
    }
  },
  '& button': {
    position: 'absolute',
    top: '4.3rem',
    left: '1.56rem',
    fontFamily: 'Trebuchet MS',
    padding: '4px 20px',
    color: 'rgb(211,47,47)',
    background: 'white',
    [theme.breakpoints.down('sm')]: {
      top: '8rem',
      left: '5.8rem',
      padding: '3px 25px'
    },
    ':hover': {
      color: 'white',
      background: 'rgb(211,47,47)'
    }
  }
}));

const ItemList = ({ items, dummy }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item))
      ? toast.success('Added to Cart', {
          position: 'top-center',
          newestOnTop: true,
          autoClose: 2000
        })
      : toast.error('Not Added', {
          position: 'top-center'
        });
  };

  return (
    <Box>
      {items && items.map((item) => (
        <MainContainer key={item.card.info.id}>
          <CardContent>
            <HeadingBox>
              <h3>{item.card.info.name}</h3>
            </HeadingBox>
            <PriceBox>
              <h4>Price: ₹{(item.card.info.price / 100 || item.card.info.defaultPrice / 100).toFixed(0)}</h4>
              <h6>50% OFF | <span>USE FOODIEIT</span></h6>
            </PriceBox>
            <Box sx={{ textAlign: 'justify' }}>
              <Typography>{item.card.info.description}</Typography>
            </Box>
          </CardContent>
          <MenuImageBox>
            <img src={item.card.info.imageId ? SWIGGY_MENU_IMG_API + item.card.info.imageId : DemoImage} alt="" />
            <Button
              variant="outlined"
              size="small"
              color="error"
              onClick={() => handleAddToCart(item)}
            >
              Add +
            </Button>
          </MenuImageBox>
        </MainContainer>
      ))}
      <ToastContainer />
    </Box>
  );
};

export default ItemList;
