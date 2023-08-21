import { Box, styled } from '@mui/material'
import React from 'react'

const ShimmerBox = styled(Box)`
display : flex;
flex-wrap : wrap;

& > div {
width : 240px;
height : 345px;
margin : 2rem 0 0 3.8rem;
background-color: #E5E4E2;
border-radius : 10px;
}
`

const HeaderBox = styled(Box)`
width : 40vw;
margin: 2rem 0 0 4rem;
height : 3vw;
background-color: #E5E4E2;
border-radius : 5px;
`

const Shimmer = () => {
  return (
    <>
      <HeaderBox>

      </HeaderBox>
      <ShimmerBox>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        
      </ShimmerBox>
    </>
  )
}

export default Shimmer
