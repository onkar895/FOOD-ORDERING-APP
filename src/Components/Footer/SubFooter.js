import React from 'react'
import { Typography, styled, Box } from '@mui/material'
import FoodLogo from '../../Assets/FoodLogo.png'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import MailOutlineIcon from '@mui/icons-material/MailOutline'

const MainContainer = styled(Box)`
display : flex;
flex-direction : column;
`

const Container = styled(Box)`
display : flex;
align-items : center;
justify-content: space-between;
background :  rgb(2,6,12);
width :100% ;
height : 15vh;
padding : 1rem 6rem;
color : white;
margin-top: 0.1rem;

& > img {
  width : 6vw;
}

& p {
  font-family: "Trebuchet MS";
  font-size : 18px;
  font-weight: 900;
}
`

const SubContainer = styled(Box)`
display : flex;
align-items : center;
justify-content : center;
gap : 6px;
padding : 12px;
background-image: linear-gradient(to bottom, rgba(238,194,174,0) 0%, rgba(230,99,103,0.3) 100%);

 @keyframes example {
  0%   {color: #f32170;}
  25%  {color: #ff6b08;}
  50%  {color: #cf23cf;}
  100% {color: #F88379;}
}

& p {
  font-weight : bold;
  font-family: "Trebuchet MS";
  font-size : 18px;
}

& h3 {
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}
`

const IconContainer = styled(Box)`
display : flex;
gap : 20px;
align-items : center;
justify-content : center;

& > a:hover {
    transform : scale(1.2);
    transition : 0.3s;
}

`

const SubFooter = () => {
  return (
    <MainContainer>
      <Container>
        <img src={FoodLogo} alt='' />
        <Typography>
          © 2023 The Foodie Zone
        </Typography>
        <IconContainer>
          <a href='https://www.instagram.com/o_n_k_a_r_0895/'>
            <InstagramIcon sx={{cursor: 'pointer', color: '	white'  }} />
          </a>
          <a href='https://github.com/onkar895/FOOD-ORDERING-APP'>
            <GitHubIcon sx={{cursor: 'pointer', color: '	white'}} />
          </a>
          <a href='https://www.linkedin.com/in/omkarkarale541/'>
            <LinkedInIcon sx={{ cursor: 'pointer', color: '	white' }} />
          </a>
          <a href='mailto:onkarkarale4@gmail.com'>
            <MailOutlineIcon sx={{ cursor: 'pointer', color: 'white' }} />
          </a>
        </IconContainer>
      </Container>
      <SubContainer>
        <Typography>Made with ❤️ by</Typography>
        <h3>Onkar Karale 😊</h3>
      </SubContainer>
    </MainContainer>
  )
}

export default SubFooter
