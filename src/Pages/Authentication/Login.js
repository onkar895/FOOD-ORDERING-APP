import React, { useContext, useRef, useState } from 'react';
import { Box, TextField, Button, Typography, AppBar, Modal } from '@mui/material';
import UserContext from '../../../utils/userContext';
import { checkValidData } from '../../../utils/Validate';
import FoodLogo from '../../Assets/FoodLogo.png';
import { firebaseAuth, provider } from '../../../utils/Firebase/FirebaseConfig';
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import FoodImage from '../../Assets/FoodImage2.png';
import Google from '../../Assets/google.png';
import Image from '../../Assets/FoodImage1.png';
import PersonIcon from '@mui/icons-material/Person';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import LoginIcon from '@mui/icons-material/Login';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import MobileScreenShareOutlinedIcon from '@mui/icons-material/MobileScreenShareOutlined';
import {HomeContainer,HeaderBox, FoodLogoBox, HeadingBox, NavItems, ButtonBox, GoogleButtonBox, LoggedOutBox, GetAppBox, CartBox, MainContainer, ImageBox, PaperBox, Header, InputBox, NewUserBox, SignUpLink} from './LoginStyles'

const Login = () => {
  const { setUserName, loggedInUser, userName} = useContext(UserContext);
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMessage, setErrMessage] = useState('');
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = async (e) => {
    e.preventDefault();
    const message = checkValidData(email.current.value, password.current.value);
    setErrMessage(message);
    if (message) return;
    if (!isSignIn) {
      try {
        await createUserWithEmailAndPassword(firebaseAuth, email.current.value, password.current.value);
        navigate('/');
        toast.success(
          <div>
            <div style={{ fontSize: '14px', textAlign: 'center', color: 'black' }}>
              <strong>Congratulations! Your account has been successfully created.</strong>
            </div>
            <div style={{ fontSize: '12px', textAlign: 'center', color: 'rgb(211,47,47)', fontWeight:'bold', marginTop:'10px' }}>
              <strong>Click on the "Sign In Now" below to Sign In.</strong>
            </div>
          </div>,
          {
            position: 'top-center',
            newestOnTop: true,
            autoClose: 5000,
            closeButton: true,
            closeOnClick: true,
            pauseOnHover: true,
          }
        );
      } catch (err) {
        setErrMessage(err.message);
      }
    } else {
      try {
        await signInWithEmailAndPassword(firebaseAuth, email.current.value, password.current.value);
        navigate('/home');
      } catch (err) {
        setErrMessage(err.message);
      }
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(firebaseAuth, provider);
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  };

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <>
      <HomeContainer>
        <AppBar sx={{ boxShadow: 'none' }}>
        <HeaderBox>
          <FoodLogoBox>
            <img src={FoodLogo} alt="FoodLogo" onClick={() => navigate('/')} />
            <HeadingBox>
              <Typography>The Foodie Zone</Typography>
              <Typography>Taste of Everything</Typography>
            </HeadingBox>
          </FoodLogoBox>
          <NavItems>
            <ul>
              <li>
                <ButtonBox onClick={handleOpen} variant="outlined" color="error">
                  LogIn
                  <LoginIcon sx={{ ml: '4px', fontSize: '18px' }} />
                </ButtonBox>
              </li>
              <li>
                <GetAppBox>
                  <MobileScreenShareOutlinedIcon />
                  <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader">
                    Get The App
                  </a>
                </GetAppBox>
              </li>
              <li>
                <LoggedOutBox>
                  <PersonIcon />
                  {!isSignIn ? loggedInUser : 'User'}
                </LoggedOutBox>
              </li>
              <li>
                <CartBox>
                  <LocalMallOutlinedIcon />
                </CartBox>
              </li>
            </ul>
          </NavItems>
        </HeaderBox>
      </AppBar>

      <ImageBox>
        <img src={FoodImage} alt="FoodImage" />
        <img src={Image} alt="Image" />
      </ImageBox>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <MainContainer>
          <PaperBox>
            <Header>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white' }}>
                <h2>Welcome Back</h2>
                <SentimentSatisfiedAltIcon />
              </Box>
              <Typography>{isSignIn ? 'Sign In with your email address and password' : 'Sign Up with your email address and password'}</Typography>
            </Header>
            <InputBox>
              <h3>{isSignIn ? 'Sign In' : 'Sign Up'}</h3>
              {!isSignIn && (
                <TextField
                  type="text"
                  variant="filled"
                  color="warning"
                  label="UserName"
                  required
                  fullWidth
                  value={userName}
                  onChange={handleUserNameChange}
                />
              )}
              <TextField
                inputRef={email}
                type="email"
                variant="filled"
                color="warning"
                label="Email"
                required
                fullWidth
              />
              <TextField
                inputRef={password}
                type="password"
                color="warning"
                variant="filled"
                label="Password"
                required
                fullWidth
              />

              <Typography sx={{ color: 'red', fontSize: '14px', fontFamily: 'Trebuchet MS', fontWeight: 'bold' }}>
                {errMessage}
              </Typography>

              <Button
                sx={{ fontFamily: 'Trebuchet MS', padding: '8px 0' }}
                variant="contained"
                size="medium"
                color="error"
                required
                fullWidth
                onClick={handleClick}
              >
                {isSignIn ? 'Sign In' : 'Sign Up'}
              </Button>

              {isSignIn && <Box sx={{ color: 'white' }}><h5>OR Sign In Using</h5></Box>}
              {isSignIn && (
                <GoogleButtonBox onClick={handleGoogleSignIn} fullWidth>
                  <img src={Google} alt="" />
                  <Typography>Sign In With Google</Typography>
                </GoogleButtonBox>
              )}

              <NewUserBox>
                <SignUpLink onClick={toggleSignInForm}>{isSignIn ? 'New User? Sign Up Now' : 'Already Registered? Sign In Now'}</SignUpLink>
              </NewUserBox>
            </InputBox>
          </PaperBox>
          <ToastContainer />
        </MainContainer>
      </Modal>
      </HomeContainer>
    </>
  );
};

export default Login;
