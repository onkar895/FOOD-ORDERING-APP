import { Box, styled } from '@mui/material'
import React from 'react'

const ShimmerBox = styled(Box)`
display : flex;
flex-wrap : wrap;

& > div {
width : 250px;
height : 290px;
margin : 2rem 0 0 3.8rem;
background-color: #E5E4E2;
border-radius : 10px;
}
`

const HeaderBox = styled(Box)`
width : 40vw;
margin: 2rem 0 0 3.8rem;
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
        {
        // creating a new Array instance using Array() constructor and map through every element of array 
          Array(20)
          .fill("")
          .map((_, index) => (
            <Box key={index}>
              
            </Box>
          ))
        }
      </ShimmerBox>
    </>
  )
}

export default Shimmer
