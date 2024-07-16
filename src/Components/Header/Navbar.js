import React, { useEffect, useState, useContext } from 'react';
import FoodLogo from '../../Assets/FoodLogo.png';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Box, AppBar, Typography, Avatar, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../../utils/userContext';
import { onAuthStateChanged } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { firebaseAuth } from '../../../utils/Firebase/FirebaseConfig';
import MenuIcon from '@mui/icons-material/Menu';
import {
  HeaderBox,
  FoodLogoBox,
  HeadingBox,
  NavItems,
  MobileNavItems,
  MainBox,
  CartBox,
  CartItemBox,
  Item,
  ButtonBox,
  LogOutUserBox,
  LoggedOutBox,
} from './NavbarStyles';

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
          <MenuIcon sx={{color:'black', fontSize: '2rem',}} />
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
