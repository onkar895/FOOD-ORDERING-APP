import React from 'react';
import { Box, styled, keyframes } from '@mui/material';

// Define the shimmer animation
const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

const HeaderBox = styled(Box)(({ theme }) => ({
  width: '75%',
  height: '160px',
  margin: '8rem 0 0 10rem',
  backgroundColor: '#E5E4E2',
  borderRadius: '10.2px',
  backgroundImage: 'linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '800px 104px',
  animation: `${shimmer} 3s infinite linear`,
  [theme.breakpoints.down('md')]: {
    width: '80%',
    margin: '8rem auto 0 auto',
    height: '140px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '90%',
    margin: '6rem auto 0 auto',
    height: '200px',
  },
  [theme.breakpoints.down('xs')]: {
    width: '95%',
    margin: '3rem auto 0 auto',
    height: '100px',
  },
}));

const ShimmerBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '12px',
  flexDirection: 'column',
  margin: '2.5rem 0 0 10rem',
  [theme.breakpoints.down('md')]: {
    margin: '2rem auto 0 auto',
    width: '80%',
  },
  [theme.breakpoints.down('sm')]: {
    margin: '1.5rem auto 0 auto',
    width: '90%',
  },
  [theme.breakpoints.down('xs')]: {
    margin: '1rem auto 0 auto',
    width: '95%',
  },
  '& > div': {
    width: '86%',
    height: '80px',
    backgroundColor: '#E5E4E2',
    borderRadius: '10px',
    backgroundImage: 'linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '800px 104px',
    animation: `${shimmer} 3s infinite linear`,
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: '70px',
    },
    [theme.breakpoints.down('sm')]: {
      height: '60px',
    },
    [theme.breakpoints.down('xs')]: {
      height: '50px',
    },
  },
}));

const MenuShimmer = () => {
  return (
    <>
      <HeaderBox />
      <ShimmerBox>
        {Array(10)
          .fill("")
          .map((_, index) => (
            <Box key={index} />
          ))}
      </ShimmerBox>
    </>
  );
};

export default MenuShimmer;
