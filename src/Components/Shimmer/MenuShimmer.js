import React from 'react'
import {Box, styled} from '@mui/material'

const ShimmerBox = styled(Box)`
display : flex;
gap : 12px;
flex-direction : column;
margin: 20rem 0 0 12rem;

& > div {
width : 80%;
height : 130px;
background-color: #E5E4E2;
border-radius : 10px;

}
`

const MenuShimmer = () => {
  return (
    <>
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
