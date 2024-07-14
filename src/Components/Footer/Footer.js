import React from 'react';
import { Grid, Typography, styled, Box, Link, useTheme, useMediaQuery } from '@mui/material';
import AppStore from '../../Assets/app_store.png';
import PlayStore from '../../Assets/play_store.jpg';
import SubFooter from './SubFooter';

const AppBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'rgb(240,240,245)',
  width: '100%',
  gap:'4rem',
  height: '18vh',
  padding: '0 5rem',
  marginTop: '5rem',

  '& > div': {
    '& p': {
      fontFamily: 'Trebuchet MS',
      fontSize: '28px',
      fontWeight: '900',

      [theme.breakpoints.down('sm')]: {
        fontSize: '22px',
        fontWeight: '900',
        textAlign: 'center',
      },
    },

    '& img': {
      cursor: 'pointer',
      width: '16vw',
      height: '12vh',

      [theme.breakpoints.down('sm')]: {
        width: '25vw',
        height: '5vh',
      },
    },
  },

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    height: 'auto',
    gap: '1rem',
    width:'100%',
    padding: '0 1rem', 
  },
}));

const FooterContainer = styled(Box)(({ theme }) => ({
  background: 'rgb(2,6,12)',
  color: '#838787',
  width: '100%',
  minHeight: '60vh', 
  textAlign: 'center',
  padding: '2rem 0', 

  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    padding: '1rem',
    width: '100%',
  },

  [theme.breakpoints.down('md')]: {
    height: 'auto',
    padding: '1rem',
  },
}));

const GridContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  margin: '2rem 0 0 2rem',

  '& > p': {
    fontWeight: 'bold',
  },

  '& ul': {
    listStyle: 'none',
  },

  [theme.breakpoints.down('sm','md')]: {
    flexDirection: 'column',
    margin: '0',
  },
}));

const Panel = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '6rem',
  flexWrap: 'wrap',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: '2rem',
  },
}));

const LeftPanel = styled(Panel)(({ theme }) => ({
  display: 'flex',
  gap: '6rem',

  '& > div': {
    '& p': {
      fontFamily: '"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif',
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


const RightPanel = styled(Panel)(({ theme }) => ({
  borderLeft: '1px solid grey',
  paddingLeft: '25px',
  [theme.breakpoints.down('md')]: {
    borderLeft: 'none',
    paddingLeft: '0',
  },
}));

const Footer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <AppBox>
        <Box sx={{ alignItems: 'center' }}>
          <Typography>For better experience, download the app now</Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: '20px' }}>
          <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&hl=en&gl=US">
            <img src={PlayStore} alt="" />
          </a>
          <a href="https://apps.apple.com/in/app/swiggy-food-grocery-delivery/id989540920">
            <img src={AppStore} alt="" />
          </a>
        </Box>
      </AppBox>

      <FooterContainer>
        <GridContainer container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={7}>
            <LeftPanel>
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

              <Box>
                <Typography>HELP</Typography>
                <ul>
                  <li><Link href="#">Payments</Link></li>
                  <li><Link href="#">Shipping</Link></li>
                  <li><Link href="#">Cancellation & Returns</Link></li>
                  <li><Link href="#">FAQ</Link></li>
                  <li><Link href="#">Report</Link></li>
                </ul>
              </Box>

              <Box>
                <Typography>SOCIAL</Typography>
                <ul>
                  <li><Link href="#">Facebook</Link></li>
                  <li><Link href="#">Twitter</Link></li>
                  <li><Link href="#">Instagram</Link></li>
                  <li><Link href="#">YouTube</Link></li>
                </ul>
              </Box>
            </LeftPanel>
          </Grid>

          <Grid item xs={12} sm={12} md={5} lg={5}>
            <RightPanel>
              <Box>
                <Typography>LEGAL</Typography>
                <Box sx={{ fontSize: '14px' }}>
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
              </Box>

              <Box>
                <Typography>WE DELIVER TO:</Typography>
                <Box sx={{ fontSize: '14px' }}>
                  <ul>
                    <li>Bangalore</li>
                    <li>Gurgaon</li>
                    <li>Hyderabad</li>
                    <li>Kolkata</li>
                    <li>Delhi</li>
                    <li>Mumbai</li>
                    <li>Pune</li>
                    <li>& other 588 Cities in India</li>
                  </ul>
                </Box>
              </Box>
            </RightPanel>
          </Grid>
        </GridContainer>
      </FooterContainer>

      <SubFooter />
    </>
  );
};

export default Footer;
