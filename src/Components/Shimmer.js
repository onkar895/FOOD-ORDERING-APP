import { Box, styled } from '@mui/material'
import React from 'react'

const ShimmerBox = styled(Box)`
display : flex;
flex-wrap : wrap;

& > div {
width : 250px;
height : 345px;
margin : 10rem 0 0 58px;
background-color: #E5E4E2;
border-radius : 10px;
}
`

const Shimmer = () => {
  return (
    <>
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
