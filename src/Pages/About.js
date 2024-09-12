import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import VerifiedIcon from '@mui/icons-material/Verified';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Navbar from '../Components/Header/Navbar';
import AboutImage from '../Assets/AboutImage.jpg'
import Footer from '../Components/Footer/Footer';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const MainContainer = styled(Box)(({ theme }) => ({
  // background-image: linear-gradient(to bottom, rgba(238, 194, 174, 0) 0%, rgba(230, 99, 103, 0.1) 100%);
}));

const WelcomeBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '6rem',
  background: 'linear-gradient(to right, #f32170, #ff6b08, #f32170, #cf23cf,#ff6b08, #f32170, #ff6b08)',
  WebkitTextFillColor: 'transparent',
  WebkitBackgroundClip: 'text',
  [theme.breakpoints.down('sm')]: {
    marginTop: '6rem',
    textAlign:'center'
  },
  [theme.breakpoints.between('sm','md')]: {
    marginTop: '10rem',
    textAlign:'center'
  },
}));

const HeaderBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '1rem 4rem',
  padding: '20px 0',
  boxShadow: '1px 1px 5px grey',
  borderRadius: '15px',
  '& > h2': {
    borderRadius: '5px',
    padding: '5px 20px',
    color: 'rgb(211,47,47)',
    fontFamily: 'Trebuchet MS',
  },
  '& p': {
    fontSize: '20px',
    fontFamily: 'Trebuchet MS',
  },
  [theme.breakpoints.down('sm')]: {
    margin: '1rem 0.5rem',
    padding: '10px 5px',
    '& p': {
      fontSize: '16px',
      textAlign:'center'
    },
  },
  [theme.breakpoints.between('sm','md')]: {
    margin: '1rem 3rem',
    padding: '10px 20px',
    '& p': {
      fontSize: '16px',
      textAlign:'center'
    },
  },
}));

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'center',
  marginTop: '15px',
}));

const ImageBox = styled(Box)(({ theme }) => ({
  '& img': {
    borderRadius: '10px',
    width: '75vw',
    height: '80vh',
    marginBottom: '10px',
    [theme.breakpoints.down('sm')]: {
      width: '90vw',
      height: '50vh',
    },
  },
}));

const StoryBox = styled(Box)(({ theme }) => ({
  '& p': {
    fontSize:'18px',
  }
}))

const SubContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',

  '& > div': {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  '& svg': {
    color: '#228B22',
  },
  '& p': {
    fontFamily: 'Trebuchet MS',
    fontSize:'18px',
  },
}));

const IconContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '2rem',
  '& > a:hover': {
    transform: 'scale(1.2)',
    transition: '0.3s',
  },
  [theme.breakpoints.down('sm')]: {
    gap: '10px',
  },
}));

const About = () => {
  return (
    <>
      <Navbar />
      <MainContainer>
        <WelcomeBox>
          <h1>WELCOME TO FOODIE ZONE!!!</h1>
        </WelcomeBox>
      
        <HeaderBox>
          <ImageBox>
            <LazyLoadImage
              src={AboutImage}
              alt="AboutImage"
              effect="blur"
            />
          </ImageBox>
       
          <h2>OUR STORY</h2>
          <StoryBox>
            <Typography>
              Everything we do is a celebration of fresh food - from how we source our restaurants and quality food
            </Typography>
            <Typography sx={{ textAlign: 'center' }}>
              <strong>to serving up new ways for you to enjoy it. Since, 2018 we've been  committed to</strong> 
            </Typography>
            <Typography>
              bringing you the best restaurants and food experience on our website you won't find anywhere else.
            </Typography>
          </StoryBox>

          <Container>
            <SubContainer>
              <Box>
                <VerifiedIcon /> 
                <Typography>
                  The Foodie Zone offers delivery of <strong>delicious and healthy food.</strong> 
                </Typography>
              </Box>
              <Box>
                <VerifiedIcon />
                <Typography>
                  Our focus is on satisfying hunger with tasty meals and quick, <strong>free delivery.</strong>
                </Typography>
              </Box>
              <Box>
                <VerifiedIcon /> 
                <Typography>Customers can order online and receive a <strong> 40% discount </strong> on their orders.</Typography>
              </Box>
              <Box>
                <VerifiedIcon /> 
                <Typography>The service combines <strong>taste and health</strong> in its food offerings.</Typography>
              </Box>
              <Box>
                <VerifiedIcon /> 
                <Typography>The emphasis is on <strong>convenience, taste, and affordability</strong> for customers.</Typography>
              </Box>
            </SubContainer>

            <IconContainer>
              <a href="https://www.instagram.com/o_n_k_a_r_0895/"><InstagramIcon sx={{ cursor: 'pointer', color: 'rgb(211,47,47)' }} /></a>
              <a href="https://github.com/onkar895/FOOD-ORDERING-APP"><GitHubIcon sx={{ cursor: 'pointer', color: 'black' }} /></a>
              <a href="https://www.linkedin.com/in/omkarkarale541/"><LinkedInIcon sx={{ cursor: 'pointer', color: '#0A66C2' }} /></a>
              <a href="mailto:onkarkarale4@gmail.com"><MailOutlineIcon sx={{ cursor: 'pointer', color: 'red' }} /></a>
            </IconContainer>
          </Container>
        </HeaderBox>
      </MainContainer>
      <Footer />
    </>
  )
}

export default About
