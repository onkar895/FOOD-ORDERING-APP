import React from 'react'
import {Box, styled} from '@mui/material'


const HeaderBox = styled(Box)`
width : 55.6%;
height : 50px;
margin: 7rem 0 0 18rem;
background-color: #E5E4E2;
border-radius : 10px;
`

const ShimmerBox = styled(Box)`
display : flex;
gap : 12px;
flex-direction : column;
margin: 1.8rem 0 0 18rem;

& > div {
width : 72%;
height : 80px;
background-color: #E5E4E2;
border-radius : 10px;
}
`

const MenuShimmer = () => {
  return (
  <>
      <HeaderBox>

      </HeaderBox>

      <ShimmerBox>
        {
        // creating a new Array instance using Array() constructor and map through every element of array 
          Array(10)
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

export default MenuShimmer
