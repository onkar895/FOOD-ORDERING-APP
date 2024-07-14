import React from 'react';
import { Grid, Typography, styled, Box, Link, useTheme, useMediaQuery } from '@mui/material';
import AppStore from '../../Assets/app_store.png';
import PlayStore from '../../Assets/play_store.jpg';
import SubFooter from './SubFooter';

const AppBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'rgb(240,240,245)',
  width: '100%',
  padding: '2rem 1rem',
  marginTop: '5rem',
  textAlign: 'center',
  '& > div': {
    '& p': {
      fontFamily: 'Trebuchet MS',
      fontSize: '20px',
      fontWeight: 900,
    },
    '& img': {
      cursor: 'pointer',
      width: '40vw',
      maxWidth: '160px',
      height: 'auto',
      margin: '1rem',
    },
  },
}));

const FooterContainer = styled(Box)(({ theme }) => ({
  background: 'rgb(2,6,12)',
  color: '#838787',
  padding: '20px',
  width: '100%',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    paddingBottom: '2rem',
  },
}));

const GridContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  margin: '2rem 0',
  '& > p': {
    fontWeight: 'bold',
  },
  '& ul': {
    listStyle: 'none',
    padding: 0,
  },
}));

const Panel = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  '& > div': {
    '& p': {
      fontFamily: 'Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif',
      color: 'white',
      marginBottom: '8px',
      fontSize: '14px',
    },
    '& a': {
      color: '#838787',
      '&:hover': {
        color: 'white',
      },
    },
    '& li': {
      marginBottom: '8px',
      fontSize: '14px',
    },
  },
}));

const Footer = () => {
  return (
    <>
      <AppBox>
        <Box>
          <Typography>For better experience, download the app now</Typography>
        </Box>
        <Box>
          <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&hl=en&gl=US">
            <img src={PlayStore} alt="Play Store" />
          </a>
          <a href="https://apps.apple.com/in/app/swiggy-food-grocery-delivery/id989540920">
            <img src={AppStore} alt="App Store" />
          </a>
        </Box>
      </AppBox>

      <FooterContainer>
        <GridContainer container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Panel>
              <Box>
                <Typography>COMPANY</Typography>
                <ul>
                  <li><Link href="#">About Us</Link></li>
                  <li><Link href="#">Team</Link></li>
                  <li><Link href="#">Careers</Link></li>
                  <li><Link href="#">Blog</Link></li>
                  <li><Link href="#">Instamart</Link></li>
                  <li><Link href="#">Corporate</Link></li>
                  <li><Link href="#">Bounty</Link></li>
                </ul>
              </Box>
              <Box>
                <Typography>CONTACT US</Typography>
                <ul>
                  <li><Link href="#">Help & Support</Link></li>
                  <li><Link href="#">Partner With Us</Link></li>
                  <li><Link href="#">Ride With Us</Link></li>
                </ul>
              </Box>
            </Panel>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Panel>
              <Box>
                <Typography>LEGAL</Typography>
                <ul>
                  <li>Terms & Conditions</li>
                  <li>Refund & Cancellation</li>
                  <li>Privacy Policy</li>
                  <li>Cookie Policy</li>
                  <li>Offer Terms</li>
                  <li>Phishing & Fraud</li>
                  <li>FV Instamart</li>
                  <li>FV Money Codes</li>
                  <li>FV Discount Voucher</li>
                </ul>
              </Box>
              <Box>
                <Typography>WE DELIVER TO:</Typography>
                <ul>
                  <li>Banglore</li>
                  <li>Gurgaon</li>
                  <li>Hyderabad</li>
                  <li>Kolkata</li>
                  <li>Delhi</li>
                  <li>Mumbai</li>
                  <li>Pune</li>
                  <li>& other 588 Cities in India</li>
                </ul>
              </Box>
            </Panel>
          </Grid>
        </GridContainer>
      </FooterContainer>
      <SubFooter />
    </>
  );
};

export default Footer;
