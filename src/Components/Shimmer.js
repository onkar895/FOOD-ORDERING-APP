import { Box, styled } from '@mui/material'
import React from 'react'

const ShimmerBox = styled(Box)`
display : flex;
flex-wrap : wrap;

& > div {
width : 220px;
height : 345px;
margin : 80px 0 0 29px;
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
