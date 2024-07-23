// src/components/Navbar/NavbarStyles.js
import { Box, styled, Toolbar, Button } from '@mui/material';

export const HeaderBox = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height:'15vh',
  padding:'10px 0',
  border: 'none',
  backgroundColor: '#ffffff',
  backgroundImage: 'linear-gradient(to top, rgba(238,194,174,0) 0%, rgba(230,99,103,0.1) 100%)',

  [theme.breakpoints.down('sm')]: {
    padding: '0 5px',
    height: '10vh',
  },
  
  [theme.breakpoints.between('sm','md')]: {
    padding: '5px 15px',
    height:'12vh',
  },
}));

export const FoodLogoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',
  marginLeft: '38px',
  '& > img': {
    cursor: 'pointer',
    background: 'none',
    width: '5vw',
    [theme.breakpoints.down('sm')]: {
      width: '10vw',
    },
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft: '5px',
    gap: '15px',
  },
}));

export const HeadingBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    flexDirection: 'column',
   
    '& > p:nth-child(1), & > p:nth-child(2)': {
      fontFamily: 'ubuntu',
      fontSize: '26px',
      color: 'rgb(211,47,47)',
      fontWeight: 'bolder',
      letterSpacing: '.1rem',
    },
    '& > p:nth-child(2)': {
      fontSize: '12px',
      marginLeft: '2.5rem',
      marginBottom: '3px',
    },
  },
  [theme.breakpoints.down('sm')]: {
    fontFamily: 'ubuntu',
    fontSize: '26px',
    color: 'rgb(211,47,47)',
    fontWeight: 'bolder',
    display: 'flex',
    flexDirection: 'column',

    '& > p:nth-child(1)': {
      fontFamily: 'ubuntu',
      fontSize: '26px',
      color: 'rgb(211,47,47)',
      fontWeight: 'bolder',
      letterSpacing: '.1rem',
    },
    '& > p:nth-child(2)': {
      fontSize: '12px',
      marginLeft: '3rem',
      marginBottom: '3px',
    },
  },
  [theme.breakpoints.down('md')]: {
    fontFamily: 'ubuntu',
    fontSize: '26px',
    color: 'rgb(211,47,47)',
    fontWeight: 'bolder',
    display: 'flex',
    flexDirection: 'column',
    '& > p:nth-child(1)': {
      fontFamily: 'ubuntu',
      fontSize: '26px',
      color: 'rgb(211,47,47)',
      fontWeight: 'bolder',
    },
    '& > p:nth-child(2)': {
      fontSize: '12px',
      marginLeft: '3rem',
      marginBottom: '3px',
    },
  },
}));

export const NavItems = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '2rem',
  '& > ul': {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '16px',
    listStyleType: 'none',
    '& a': {
      textDecoration: 'none',
      color: 'black',
    },
    '& > li > a:hover': {
      color: 'rgba(211,47,47,0.5)',
      cursor: 'pointer',
    },
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const MobileNavItems = styled(Box)(({ theme, visible }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  letterSpacing: '.1rem',
  gap: '2rem',
  backgroundColor: '#ffffff',
  padding: '2rem 1.4rem',
  fontSize: '16px',
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  zIndex: 1000,
  boxShadow: '0px 5px 6px rgba(0, 0, 0, 0.3)',
  transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out, visibility 0.3s ease-in-out',
  opacity: visible ? 1 : 0,
  transform: visible ? 'translateY(0)' : 'translateY(-10px)',
  visibility: visible ? 'visible' : 'hidden',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
  },
  '& > ul': {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    color: 'black',
    fontWeight: 'bold',
    listStyleType: 'none',
    '& a': {
      textDecoration: 'none',
      color: 'black',
    },
    '& > li > a:hover': {
      color: 'rgba(211,47,47,0.5)',
      cursor: 'pointer',
    },
  },
}));

export const MainBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: 2px;

  :hover {
    color: rgb(211,47,47);
  }
`;

export const CartBox = styled(Box)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 3px;

  & > svg {
    margin-bottom: 3px;
    font-size: 25px;
  }
`;

export const CartItemBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgb(211,47,47)',
  width: '1.5vw',
  height: '1.5vw', 
  borderRadius: '50%',
  top: 0,
  left: '15px',
  [theme.breakpoints.down('sm')]: {
    width: '5vw', 
    height: '5vw',
    borderRadius: '50%',
    fontSize:'15px',
  },
}));

export const Item = styled(Box)`
  color: white;
  font-family: "Trebuchet MS";
`;

export const ButtonBox = styled(Button)(({ theme }) => ({
  padding: '3px 10px',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  fontWeight: 'bolder',
  border: '1.5px solid rgb(211,47,47)',
  textTransform: 'capitalize',

  '&:hover': {
    background: 'rgb(211,47,47)',
    color: 'white',
    boxShadow: '3px 3px 6px rgb(211,47,47)',
  },
  [theme.breakpoints.down('sm')]: {
     padding: '8px 50px',
  },
}));

export const LogOutUserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '25px',
  marginRight: '3rem',
      
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const LoggedOutBox = styled(Box)`
  display: flex;
  align-items: center;
  color: rgb(211,47,47);
  gap: 5px;
  font-weight: bolder;
`;
