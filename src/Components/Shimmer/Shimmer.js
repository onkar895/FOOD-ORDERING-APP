import { Box, styled } from '@mui/material';
import React from 'react';

const ShimmerBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',

  '& > div': {
    width: '243px',
    height: '310px',
    margin: '0.4rem 0 0 3.8rem',
    borderRadius: '10px',
    boxShadow: '0 0 4px 0 rgba(208,208,208,0.8)',
    padding: '5px',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      justifyContent: 'center',
      height: '45vh',
      margin: '1rem',
    },

    [theme.breakpoints.between('sm','md')]: {
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
  backgroundColor: 'rgb(229, 228, 226)',
}));

const HeaderBox = styled(Box)(({ theme }) => ({
  width: '40vw',
  margin: '2rem 4rem',
  height: '5vh',
  backgroundColor: 'rgb(229, 228, 226)',
  borderRadius: '5px',

  [theme.breakpoints.down('sm')]: {
    width: '90vw',
    height: '6vw',
    margin: '1rem auto',
  },
  [theme.breakpoints.between('sm','md')]: {
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

  '& h2': {
    backgroundColor: 'rgb(229, 228, 226)',
    width: '12vw',
    padding: '8px',
    borderRadius: '5px',

    [theme.breakpoints.down('sm')]: {
      width: '50vw',
      padding: '8px',
    },
  },
  '& h4': {
    backgroundColor: 'rgb(229, 228, 226)',
    width: '16.8vw',
    padding: '6px',
    borderRadius: '5px',
    [theme.breakpoints.down('sm')]: {
      width: '86vw',
      padding: '6px',
    },
  },
  '& span': {
    backgroundColor: 'rgb(229, 228, 226)',
    width: '8vw',
    padding: '6px',
    borderRadius: '5px',

    [theme.breakpoints.down('sm')]: {
      width: '50vw',
      padding: '6px',
    },
  },
}));

const Rating = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgb(229, 228, 226)',
  width: '16.8vw',
  padding: '6px',
  borderRadius: '5px',
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
          // creating a new Array instance using Array() constructor and map through every element of array
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
