import React, { useContext, useRef, useState } from 'react';
import { Box, styled, Paper, TextField, Button, Typography, Link, AppBar, Toolbar, Modal } from '@mui/material';
import UserContext from '../../../utils/userContext';
import { checkValidData } from '../../../utils/Validate';
import FoodLogo from '../../Assets/FoodLogo.png';
import { firebaseAuth, provider } from '../../../utils/Firebase/FirebaseConfig';
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import FoodImage from '../../Assets/FoodImage2.png';
import Google from '../../Assets/google.png';
import Image from '../../Assets/Image.png';
import PersonIcon from '@mui/icons-material/Person';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import LoginIcon from '@mui/icons-material/Login';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import MobileScreenShareOutlinedIcon from '@mui/icons-material/MobileScreenShareOutlined';

const HeaderBox = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '14vh',
  backgroundColor: '#ffffff',
  backgroundImage: 'linear-gradient(to top, rgba(238,194,174,0) 0%, rgba(230,99,103,0.3) 100%)',
  [theme.breakpoints.down('sm')]: {
    height: '10vh',
  },
  [theme.breakpoints.between('sm','md')]: {
    height: '12vh',
  },
}));

const FoodLogoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  marginLeft: '38px',
  '& > img': {
    cursor: 'pointer',
    background: 'none',
    width: '5vw',
    [theme.breakpoints.down('sm')]: {
     width:'12vw',
    },
     [theme.breakpoints.between('sm','md')]: {
    width:'8vw',
  },
  },
  [theme.breakpoints.down('sm')]: {
    margin: '10px auto',
  },
}));

const HeadingBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',

  '& > p': {
    fontFamily: 'Trebuchet MS',
    fontSize: '26px',
    color: 'rgb(211,47,47)',
    fontWeight: 'bolder',

    [theme.breakpoints.down('sm')]: {
     fontFamily: 'Trebuchet MS',
    fontSize: '18px',
    color: 'rgb(211,47,47)',
    fontWeight: 'bolder',
    },

    [theme.breakpoints.between('sm','md')]: {
    fontFamily: 'Trebuchet MS',
    fontSize: '32px',
    color: 'rgb(211,47,47)',
    fontWeight: 'bolder',
  },
    
  },
  '& > p:nth-child(2)': {
    fontFamily: 'Trebuchet MS',
    fontSize: '12px',
    marginLeft: '3rem',
    marginBottom: '6px',
    color: 'rgb(211,47,47)',
    fontWeight: 'bolder',

    [theme.breakpoints.down('sm')]: {
     marginLeft: '1rem',
    },
     [theme.breakpoints.between('sm', 'md')]: {
     marginLeft: '4rem',
  },
  },
   
[theme.breakpoints.down('sm')]: {
    width: '40vw'
  },

  [theme.breakpoints.between('sm','md')]: {
    width: '60vw'
  },
  
}));

const NavItems = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '2rem',
  marginRight: '2.4rem',
  '& > ul': {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '16px',
    listStyleType: 'none',
  },
  [theme.breakpoints.down('sm')]: {
    margin: '10px auto',
  },
}));

const ButtonBox = styled(Button)(({ theme }) => ({
  padding: '3px 15px',
  alignItems: 'center',
  cursor: 'pointer',
  border: '1.5px solid rgb(211,47,47)',
  textTransform: 'capitalize',
  fontWeight: 'bold',
  '&:hover': {
    background: 'rgb(211,47,47)',
    color: 'white',
    boxShadow: '3px 3px 6px rgb(211,47,47)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '3px 12px',
    marginLeft:'4rem',
  },
}));

const GoogleButtonBox = styled(Button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  fontFamily: 'Trebuchet MS',
  background: 'white',
  color: 'black',
  padding: '8px',
  textTransform: 'capitalize',
  '& p': {
    fontSize: '15px',
    fontWeight: 'bolder',
  },
  '&:hover': {
    background: 'white',
    color: 'black',
  },
  '& > img': {
    width: '2vw',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '10px',
    '& p': {
      fontSize: '12px',
    },
  },
}));

const LoggedOutBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: 'rgb(211,47,47)',
  gap: '2px',
  fontWeight: 'bolder',
  '& > svg': {
    fontSize: '25px',
    color: 'rgb(211,47,47)',
    cursor: 'pointer',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    display: 'none',
  },
}));

const GetAppBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  gap: '2px',
  '& > a': {
    textDecoration: 'none',
    color: 'rgb(211,47,47)',
  },
  '& > svg': {
    fontSize: '25px',
    color: 'rgb(211,47,47)',
    cursor: 'pointer',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    display: 'none',
  },
}));

const CartBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  '& > svg': {
    marginBottom: '3px',
    fontSize: '28px',
    color: 'rgb(211,47,47)',
    cursor: 'pointer',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    display: 'none',
  },
}));

const MainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '3.5%',
  [theme.breakpoints.down('sm')]: {
    marginTop: '50%',
  },
  [theme.breakpoints.between('sm','md')]: {
    marginTop: '30%',
  },
}));

const ImageBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '5rem',
  backgroundImage: 'linear-gradient(to bottom, rgba(238, 194, 174, 0) 0%, rgba(230, 99, 103, 0.1) 100%)',
  '& > img': {
    width: '100%', 
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column', // Stack images vertically on smaller screens
    marginTop: '8rem',
    '& > img': {
      marginBottom: '1.7rem',
    },
  },
  [theme.breakpoints.between('sm', 'md')]: {
    flexDirection: 'column', // Stack images vertically on smaller screens
    marginTop: '8rem',
    '& > img': {
      marginBottom: '1.7rem',
      width: '90%', 
    },
  },
}));

const PaperBox = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '3rem',
  justifyContent: 'center',
  width: '28%',
  backgroundColor: 'rgba(0,0,0,0.4)',
  height: '85vh',
  filter: 'drop-shadow(2px 2px 6px black)',
  borderRadius: '10px',
  [theme.breakpoints.down('sm')]: {
    width: '90%',
    height: 'auto',
    padding: '2rem',
  },
   [theme.breakpoints.between('sm','md')]: {
    width: '50%',
    height: 'auto',
    padding: '2rem',
  },
}));

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
  fontFamily: 'Trebuchet MS',
  marginRight: '35px',
  '& > p': {
    color: 'darkgray',
    fontFamily: 'Trebuchet MS',
    fontSize: '12px',
  },
  [theme.breakpoints.down('sm')]: {
    margin: '10px auto',
  },
}));

const InputBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  gap: '1rem',
  width: '80%',
  '& input': {
    fontSize: '12.5px',
    color: 'white',
    border: '1px solid white',
    borderRadius: '5px',
    '&:hover': {
      borderBottom: '2px solid white',
    },
  },
  '& > h3': {
    color: 'white',
  },
  '& label': {
    color: 'darkgray',
    fontSize: '14px',
    fontFamily: 'Trebuchet MS',
  },
  '& p': {
    fontFamily: 'Trebuchet MS',
    fontSize: '12px',
    cursor: 'pointer',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

const NewUserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
}));

const SignUpLink = styled(Link)(({ theme }) => ({
  fontFamily: 'Trebuchet MS',
  cursor: 'pointer',
  fontWeight: 'bolder',
  fontSize: '12px',
  color: 'darkgray',
  textDecoration: 'none',
  marginTop: '0.5rem',
  '&:hover': {
    color: 'white',
  },
}));

const Login = () => {
  const { setUserName, loggedInUser } = useContext(UserContext);
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
            <div style={{ fontSize: '14px', textAlign: 'center', color: 'gray' }}>
              Congratulations! Your account has been successfully created.
            </div>
            <div style={{ fontSize: '12px', textAlign: 'center', color: 'black' }}>
              Click on the "Sign In Now" text below to Sign In.
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
        <img src={FoodImage} alt="" />
        <img src={Image} alt="" />
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
    </>
  );
};

export default Login;
