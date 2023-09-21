import React from 'react'
import { Button, Box, styled, Typography} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import FoodImage from '../Assets/FoodImage.png'
import FoodImagePage from '../Assets/FoodImagePage.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Navbar from '../Components/Header/Navbar'


const MainBox = styled(Box)`
background-image: linear-gradient(to bottom, rgba(238, 194, 174, 0) 0%, rgba(230, 99, 103, 0.1) 100%);
`

const HeaderBox = styled(Box)`
`

const MainContainer = styled(Box)`
display : flex;
gap : 3rem;
align-items : center;
justify-content : center;
margin : 5rem 5rem 0 6.5rem;
`

const InfoContainer = styled(Box)`
display : flex;
flex-direction : column;
align-items : start;
justify-content : center;
gap : 1rem;

& > h1 {
  font-size : 40px;

  & span {
    color : rgb(211,47,47);
  }
}

& > div > p {
    color : grey;
    font-size : 14px;
    font-family: "Trebuchet MS";
}
`

const Order = styled(Box)`

& > h3 > span {
color : rgb(211,47,47);
}
`

const ButtonContainer = styled(Box)`
display : flex;
align-items : center;
justify-content : center;
margin-top : 10px;

& > button {
  border : 2px solid rgb(211,47,47);
  font-family: "Trebuchet MS";
}

& > button:hover {
  box-shadow : 5px 5px 10px rgb(211,47,47);
  background : rgb(211,47,47);
  color : white;
  border-radius : 5px;
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

const ImageContainer = styled(Box)`

& > img {
  width :52vw;
}
`


const HomePage = () => {

  const navigate = useNavigate()
  return (
    <>
      <Navbar />
      <MainBox>
        <HeaderBox>
          <MainContainer>
            <InfoContainer>
              <h1>We Deliver <br/> Delicious & <br/> Healthy  <span>Food</span></h1>
              <Box>
                <Typography>Our job is to filling your hunger with delicious food</Typography>
                <Typography>and with fast and free delivery.</Typography>
              </Box>
              <Order>
                <h3>Order Online to get <span>40% OFF...</span></h3>
              </Order>
          
              <ButtonContainer>
                <Button
                  variant="outlined" color="error"
                  onClick={() => navigate('/restaurants')}>
                  Explore Restaurants
                </Button>
              </ButtonContainer>
            </InfoContainer>

            <ImageContainer>
              <img src={FoodImagePage} alt="FoodImage"/>
            </ImageContainer>
          </MainContainer>
          
          <IconContainer>
            <a href="https://www.instagram.com/o_n_k_a_r_0895/"> <InstagramIcon sx={{cursor:'pointer', color: '	black',  }} /></a>
            <a href="https://github.com/onkar895/FOOD-ORDERING-APP"><GitHubIcon sx={{cursor:'pointer', color:'	black'}} /></a>
            <a href="https://www.linkedin.com/in/omkarkarale541/"><LinkedInIcon sx={{ cursor: 'pointer', color: '	black' }} /></a>
            <a href="mailto:onkarkarale4@gmail.com"><MailOutlineIcon sx={{ cursor: 'pointer', color: 'black' }}/></a>
          </IconContainer>
        </HeaderBox>
      </MainBox>
    </>
  )
}

export default HomePage
