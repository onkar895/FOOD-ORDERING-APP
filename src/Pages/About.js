import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import HeaderBanner from '../Components/Banner/HeaderBanner'

const HeaderBox = styled(Box)`
display : flex;
flex-direction : column;
gap : 10px;
justify-content : center;
padding : 40px 0;
align-items : center;
border : 2px solid #ff6b08;
margin: 30px 40px;
border-radius : 15px;

& > h1 {
  color : #ff6b08;
  font-family: "Trebuchet MS";
}

& p {
  font-size :20px;
  font-family: "Trebuchet MS";
}
`

const About = () => {
  return (
    <>
      {/* <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center',marginTop : '10px', color: '#ff6b08',fontFamily: "Trebuchet MS" }}>
       <h1>WELCOME TO FOODIE ZONE</h1>
      </Box> */}
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
