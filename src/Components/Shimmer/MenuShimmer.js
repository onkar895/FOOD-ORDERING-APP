import React from 'react';
import { Box, styled } from '@mui/material';

const HeaderBox = styled(Box)(({ theme }) => ({
  width: '68%',
  height: '160px',
  margin: '6rem 0 0 12rem',
  backgroundColor: '#E5E4E2',
  borderRadius: '10.2px',
  [theme.breakpoints.down('md')]: {
    width: '80%',
    margin: '8rem auto 0 auto',
    height: '140px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '90%',
    margin: '10rem auto 0 auto',
    height: '120px',
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
  margin: '2.5rem 0 0 12rem',
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
    width: '80%',
    height: '80px',
    backgroundColor: '#E5E4E2',
    borderRadius: '10px',
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
