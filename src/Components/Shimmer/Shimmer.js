import { Box, styled, Typography } from '@mui/material'
import React from 'react'


const ShimmerBox = styled(Box)`
display : flex;
flex-wrap : wrap;

& > div {
width : 243px;
height : 310px;
margin : 1.8rem 0 0 3.8rem;
border-radius : 10px;
background-color: rgb(255,255,255);
box-shadow : 0 0 4px 0  rgba(208,208,208,0.8);
padding : 5px;
}
`
const ImageBox = styled(Box)`
display : flex;
width : 95%;
height : 52%;
margin : 5px;
border-radius : 10px;
background-color: #E5E4E2;
`


const HeaderBox = styled(Box)`
width : 40vw;
margin: 2rem 0 0 3.8rem;
height : 3vw;
background-color: #E5E4E2;
border-radius : 5px;
`

const CardInfo = styled(Box)`
margin: 10px 0 0 8px;
display : flex;
flex-direction : column;
gap : 15px;
flex-wrap : wrap;
overflow:  hidden;

& h2 {
  background-color: #E5E4E2;
  width : 12vw;
  padding : 8px;
  border-radius: 5px;
}

& h4 {
  background-color: #E5E4E2;
  width : 16.8vw;
  padding : 6px;
  border-radius: 5px;
}

& span {
  background-color: #E5E4E2;
  width : 8vw;
  padding : 6px;
  border-radius: 5px;
}
`

const Rating = styled(Box)`
 background-color: #E5E4E2;
 width : 16.8vw;
 padding : 6px;
 border-radius: 5px;
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
                <ImageBox></ImageBox>
                <CardInfo>
                  <h2></h2>
                  <h4></h4>
                  <span></span>
                  <Rating></Rating>
                </CardInfo>
              
            </Box>
          ))
        }
      </ShimmerBox>
    </>
  )
}

export default Shimmer
