import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FoodImagePage from '../Assets/FoodImagePage.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Navbar from '../Components/Header/Navbar';
import styled from 'styled-components';

const MainBox = styled(Box)`
  background-image: linear-gradient(to bottom, rgba(238, 194, 174, 0) 0%, rgba(230, 99, 103, 0.1) 100%);
  width: 100%;
  min-height: 90vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;

   @media (max-width: 960px) {
      position: relative;
        margin-top: 0;
        padding: 0;
  }
`;

const MainContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const InfoContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;

   & > h1 {
    font-size: 3rem;
    letter-spacing: .2rem;

    & > span {
      color: rgb(211, 47, 47);
    } 
  }

    & > div > p {
    color: grey;
    font-weight: bolder;
    font-size: 16px;
  }
`;

const Order = styled(Box)`
  text-align: center;
  font-size: 1.2rem;

  & > h3 > span {
    color: rgb(211, 47, 47);
  }
`;

const ButtonContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  & > button {
    border: 2px solid rgb(211, 47, 47);
    font-family: "Trebuchet MS";
    padding: 6px 20px;
    border-radius: 8px;
  }

  & > button:hover {
    box-shadow: 5px 5px 10px rgb(211, 47, 47);
    background: rgb(211, 47, 47);
    color: white;
    border-radius: 5px;
  }
`;

const IconContainer = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;

  & > a:hover {
    transform: scale(1.2);
    transition: transform 0.3s ease;
  }
`;

const ImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;

  & > img {
    width: 100%;
    max-width: 75vw;
    height: auto;
  }
`;

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <MainBox>
        <MainContainer>
          <InfoContainer>
              <h1>We Deliver Delicious <span>& Healthy Food</span></h1>
              <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography>Our job is to fill your hunger with delicious food</Typography>
                <Typography>and with fast and free delivery.</Typography>
              </Box>
              <Order>
                <h3>Order Online to get <span>40% OFF...</span></h3>
              </Order>
              <ButtonContainer>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => navigate('/restaurants')}
                >
                  Explore Restaurants
                </Button>
              </ButtonContainer>
            </InfoContainer>
          <ImageContainer>
            <img src={FoodImagePage} alt="FoodImage" />
          </ImageContainer>
        </MainContainer>
        <IconContainer>
          <a href="https://www.instagram.com/o_n_k_a_r_0895/"><InstagramIcon sx={{ cursor: 'pointer', color: 'black' }} /></a>
          <a href="https://github.com/onkar895/FOOD-ORDERING-APP"><GitHubIcon sx={{ cursor: 'pointer', color: 'black' }} /></a>
          <a href="https://www.linkedin.com/in/omkarkarale541/"><LinkedInIcon sx={{ cursor: 'pointer', color: 'black' }} /></a>
          <a href="mailto:onkarkarale4@gmail.com"><MailOutlineIcon sx={{ cursor: 'pointer', color: 'black' }} /></a>
        </IconContainer>
      </MainBox>
    </>
  );
};

export default HomePage;
