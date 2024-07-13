import React, { useEffect, useState, useContext } from 'react';
import FoodLogo from '../../Assets/FoodLogo.png';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Box, styled, AppBar, Toolbar, Typography, Button, Avatar, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../../utils/userContext';
import { onAuthStateChanged } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { firebaseAuth } from '../../../utils/Firebase/FirebaseConfig';
import MenuIcon from '@mui/icons-material/Menu';

const HeaderBox = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '14vh',
  border: 'none',
  backgroundColor: '#ffffff',
  backgroundImage: 'linear-gradient(to top, rgba(238,194,174,0) 0%, rgba(230,99,103,0.3) 100%)',
  [theme.breakpoints.down('sm')]: {
    height: '10vh',
  },
  [theme.breakpoints.down('md')]: {
    height: '12vh',
  },
}));

const FoodLogoBox = styled(Box)(({ theme }) => ({
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

const HeadingBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    flexDirection: 'column',
    
    '& > p:nth-child(1), & > p:nth-child(2)': {
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


const NavItems = styled(Box)(({ theme }) => ({
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

const MobileNavItems = styled(Box)(({ theme, visible }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems:'start',
  gap: '2rem',
  backgroundColor: '#ffffff',
  padding: '2rem 1.4rem',
  fontSize: '20px',
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  zIndex: 1000,
  boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.3)',
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

const MainBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: 2px;

  :hover {
    color: rgb(211,47,47);
  }
`;

const CartBox = styled(Box)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 3px;

  & > svg {
    margin-bottom: 3px;
    font-size: 25px;
  }
`;

const CartItemBox = styled(Box)(({ theme }) => ({
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

const Item = styled(Box)`
  color: white;
  font-family: "Trebuchet MS";
`;

const ButtonBox = styled(Button)(({ theme }) => ({
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
     padding: '3px 8px',
  },
}));

const LogOutUserBox = styled(Box)(({ theme }) => ({
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

const LoggedOutBox = styled(Box)`
  display: flex;
  align-items: center;
  color: rgb(211,47,47);
  gap: 5px;
  font-weight: bolder;
`;

const Navbar = () => {
  // Using Context
  const { loggedInUser, userName, user } = useContext(UserContext);
  const [profilePic, setProfilePic] = useState('');
  const [showMenu, setShowMenu] = useState(false); // State to manage mobile menu visibility

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) {
        setProfilePic(currentUser.photoURL || ''); // Update the profile picture URL
      }
    });
  }, []);

  const navigate = useNavigate();

  const handleSignOut = async (e) => {
    e.preventDefault();

    try {
      await signOut(firebaseAuth);
      navigate('/');
    } catch (error) {
      navigate('/error');
    }
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? 'rgb(211,47,47)' : '',
      fontWeight: isActive ? 'bolder' : '',
    };
  };

  // Subscribing to the store using Selector
  const cartItems = useSelector((store) => store.items);

  return (
    <AppBar sx={{ boxShadow: 'none' }}>
      <HeaderBox>
        <FoodLogoBox>
          <img src={FoodLogo} alt='FoodLogo' onClick={() => navigate('/home')} />
          <HeadingBox>
            <Typography>
              The Foodie Zone
            </Typography>
            <Typography>Taste of Everything</Typography>
          </HeadingBox>
        </FoodLogoBox>

        <NavItems>
          <ul>
            <li>
              <NavLink style={navLinkStyle} to='/home'>Home</NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyle} to='/restaurants'>Menu</NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyle} to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyle} to='/help'>Help</NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyle} to='/cart'>
                <MainBox>
                  <Box>Cart</Box>
                  <CartBox>
                    <ShoppingBasketIcon />
                    <CartItemBox>
                      <Item>
                        {cartItems?.length}
                      </Item>
                    </CartItemBox>
                  </CartBox>
                </MainBox>
              </NavLink>
            </li>
          </ul>
        </NavItems>

        <LogOutUserBox>
          <LoggedOutBox>
            {profilePic && <Avatar src={profilePic} alt="Profile Picture" />}
            {userName ? loggedInUser : user?.displayName}
          </LoggedOutBox>

          <ButtonBox onClick={handleSignOut} variant='outlined' color='error'>
            LogOut
            <PowerSettingsNewIcon
              sx={{
                ml: "4px",
                fontSize: '18px',
              }}
            />
          </ButtonBox>
        </LogOutUserBox>

        {/* Render menu button for small screens */}
        <IconButton
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: 'block', md: 'none' } }} // Show only on extra small screens
          onClick={toggleMenu}
        >
          <MenuIcon sx={{color:'black', fontSize: '2rem'}} />
        </IconButton>

        {/* Mobile menu with user info and logout */}
        <MobileNavItems visible={showMenu}>
          <LoggedOutBox>
            {profilePic && <Avatar src={profilePic} alt="Profile Picture" />}
            {userName ? loggedInUser : user?.displayName}
          </LoggedOutBox>
          <ul>
            <li>
              <NavLink style={navLinkStyle} to='/home'>Home</NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyle} to='/restaurants'>Menu</NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyle} to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyle} to='/help'>Help</NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyle} to='/cart'>
                <MainBox>
                  <Box>Cart</Box>
                  <CartBox>
                    <ShoppingBasketIcon />
                    <CartItemBox>
                      <Item>
                        {cartItems?.length}
                      </Item>
                    </CartItemBox>
                  </CartBox>
                </MainBox>
              </NavLink>
            </li>
          </ul>
          <ButtonBox onClick={handleSignOut} variant='outlined' color='error' className="logout-button">
            LogOut
            <PowerSettingsNewIcon
              sx={{
                ml: "4px",
                fontSize: '18px',
              }}
            />
          </ButtonBox>
        </MobileNavItems>
      </HeaderBox>
    </AppBar>
  );
};

export default Navbar;
