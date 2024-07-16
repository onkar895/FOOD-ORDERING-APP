import { Box, styled, keyframes } from '@mui/material';
import React from 'react';

// Define the shimmer animation
const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

const ShimmerBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',

  '& > div': {
    width: '243px',
    height: '310px',
    margin: '0.4rem 0 3rem 3.8rem',
    borderRadius: '10px',
    boxShadow: '0 0 4px 0 rgba(208,208,208,0.8)',
    padding: '5px',
    backgroundImage: 'linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '0px 104px',
    animation: `${shimmer} 3s infinite linear`,

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      justifyContent: 'center',
      height: '45vh',
      margin: '1rem',
    },

    [theme.breakpoints.between('sm', 'md')]: {
      width: '35%',
      justifyContent: 'center',
      height: '30vh',
      margin: '1.8rem 3.5rem',
    },
  },
}));

const ImageBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '95%',
  height: '52%',
  margin: '5px',
  borderRadius: '10px',
  backgroundColor: '#E5E4E2',
  backgroundImage: 'linear-gradient(to right, #f6f7f8 0%, #d5d6d8 20%, #f6f7f8 40%, #f6f7f8 100%)',
  backgroundSize: '800px 104px',
  animation: `${shimmer} 3s infinite linear`,
}));

const HeaderBox = styled(Box)(({ theme }) => ({
  width: '40vw',
  margin: '2rem 4rem',
  height: '8vh',
  borderRadius: '5px',
  backgroundColor: 'rgb(229, 228, 226)',
  backgroundImage: 'linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%)',
  backgroundSize: '800px 104px',
  animation: `${shimmer} 3s infinite linear`,

  [theme.breakpoints.down('sm')]: {
    width: '90vw',
    height: '12vw',
    margin: '1rem auto',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    width: '80vw',
    height: '4vw',
    margin: '1rem auto',
  },
}));

const CardInfo = styled(Box)(({ theme }) => ({
  margin: '10px 0 0 8px',
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  flexWrap: 'wrap',
  overflow: 'hidden',

  '& h2, & h4, & span, & div': {
    backgroundColor: 'rgb(229, 228, 226)',
    backgroundImage: 'linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%)',
    borderRadius: '5px',
    backgroundSize: '800px 104px',
    animation: `${shimmer} 3s infinite linear`,
  },

  '& h2': {
    width: '12vw',
    padding: '8px',

    [theme.breakpoints.down('sm')]: {
      width: '50vw',
      padding: '8px',
    },
  },
  '& h4': {
    width: '16.8vw',
    padding: '6px',
    [theme.breakpoints.down('sm')]: {
      width: '86vw',
      padding: '6px',
    },
  },
  '& span': {
    width: '8vw',
    padding: '6px',

    [theme.breakpoints.down('sm')]: {
      width: '50vw',
      padding: '6px',
    },
  },
}));

const Rating = styled(Box)(({ theme }) => ({
  width: '16.8vw',
  padding: '6px',
  borderRadius: '5px',
  backgroundColor: 'rgb(229, 228, 226)',
  backgroundImage: 'linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%)',
  backgroundSize: '800px 104px',
  animation: `${shimmer} 3s infinite linear`,
  [theme.breakpoints.down('sm')]: {
    width: '86vw',
    padding: '6px',
  },
}));

const Shimmer = () => {
  return (
    <>
      <HeaderBox />
      <ShimmerBox>
        {
          // Creating a new Array instance using Array() constructor and map through every element of array
          Array(20)
            .fill("")
            .map((_, index) => (
              <Box key={index}>
                <ImageBox />
                <CardInfo>
                  <h2></h2>
                  <h4></h4>
                  <span></span>
                  <Rating />
                </CardInfo>
              </Box>
            ))
        }
      </ShimmerBox>
    </>
  );
}

export default Shimmer;
