import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import HeaderBanner from '../Components/Banner/HeaderBanner'

const HeaderBox = styled(Box)`
display : flex;
flex-direction : column;
gap : 10px;
justify-content : center;
padding : 10px 0;
align-items : center;
border : 2px solid #ff6b08;
margin: 90px 40px;
border-radius : 15px;

& > h1 {
  border-radius : 5px;
  padding : 5px 20px;
  color : rgb(211,47,47);
  font-family: "Trebuchet MS";
}

& p {
    background: linear-gradient(to right, #f32170, #ff6b08, #f32170, #cf23cf, #f32170, #ff6b08);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-weight: bolder;
  font-size :20px;
  font-family: "Trebuchet MS";
}
`

const About = () => {
  return (
    <>
      <HeaderBox>
        <h1>OUR STORY</h1>
        <Box>
          <Typography>
            Everything we do is a celebration of fresh food - from how we source our restaurants and quality food
          </Typography>
          <Typography sx={{textAlign : 'center'}}>
             to serving up new ways for you to enjoy it. Since, 2018 we've been  committed to
          </Typography>
          <Typography>
            bringing you the best restaurants and food experience on our website you won't find anywhere else.
          </Typography>
        </Box>
        <Box>
          <HeaderBanner/>
        </Box>
      </HeaderBox>
    </>
  )
}

export default About
