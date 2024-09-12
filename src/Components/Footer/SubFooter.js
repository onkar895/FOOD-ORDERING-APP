import React from 'react';
import { Typography, styled, Box} from '@mui/material';
import FoodLogo from '../../Assets/FoodLogo.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const MainContainer = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: 'rgb(2, 6, 12)',
  width: '100%',
  height: '15vh',
  padding: '1rem 3rem',
  color: 'white',
  marginTop: '0.1rem',


  [theme.breakpoints.down('sm')]: {
    padding: '1rem 2rem',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'auto',
    gap:'15px'
  },
  [theme.breakpoints.down('md')]: {
    padding: '1rem 2rem',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'auto',
    gap:'20px'
  },
}));

const LogoImage = styled('img')(({ theme }) => ({
  width: '6vw',
  [theme.breakpoints.down('md')]: {
    width: '15vw',
    marginBottom: '1rem',
  },
}));

const FooterText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Trebuchet MS',
  fontSize: '18px',
  fontWeight: 900,
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}));

const IconContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
  justifyContent: 'center',
  '& > a:hover': {
    transform: 'scale(1.2)',
    transition: '0.3s',
  },
}));

const SubContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '6px',
  height: '14vh',
  backgroundImage: 'linear-gradient(to bottom, rgba(238,194,174,0) 0%, rgba(230,99,103,0.3) 100%)',

  '& > p > span': {
    fontWeight: 'bold',
  }, 
    
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: '5px',
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: '8px',
  },
}));

const SubFooter = () => {

  return (
    <MainContainer>
      <Container>
        <LogoImage src={FoodLogo} alt='' />
        <FooterText>
          © 2023 The Foodie Zone
        </FooterText>
        <IconContainer>
          <a href='https://www.instagram.com/o_n_k_a_r_0895/' target='_blank' rel='noopener noreferrer'>
            <InstagramIcon sx={{ cursor: 'pointer', color: 'white' }} />
          </a>
          <a href='https://github.com/onkar895/FOOD-ORDERING-APP' target='_blank' rel='noopener noreferrer'>
            <GitHubIcon sx={{ cursor: 'pointer', color: 'white' }} />
          </a>
          <a href='https://www.linkedin.com/in/omkarkarale541/' target='_blank' rel='noopener noreferrer'>
            <LinkedInIcon sx={{ cursor: 'pointer', color: 'white' }} />
          </a>
          <a href='mailto:onkarkarale4@gmail.com'>
            <MailOutlineIcon sx={{ cursor: 'pointer', color: 'white' }} />
          </a>
        </IconContainer>
      </Container>
      <SubContainer>
        <Typography>Made with ❤️ by <span> Onkar Karale 😊</span></Typography>
      </SubContainer>
    </MainContainer>
  );
};

export default SubFooter;
