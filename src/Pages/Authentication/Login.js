import React, { useContext, useEffect, useRef, useState } from 'react'
import { Box, styled, Paper, TextField, Button, Typography, Link, AppBar, Toolbar, Modal} from '@mui/material'
import UserContext from '../../../utils/userContext'
import { checkValidData } from '../../../utils/Validate'
import FoodLogo from '../../Assets/FoodLogo.png'
import { firebaseAuth, provider } from '../../../utils/Firebase/FirebaseConfig'
import { signInWithPopup, onAuthStateChanged, signInWithRedirect } from 'firebase/auth'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import FoodImage from '../../Assets/FoodImage2.png'
import Google from '../../Assets/google.png'
import Image from '../../Assets/Image.png'
import UserContext from '../../../utils/userContext';
import PersonIcon from '@mui/icons-material/Person';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import LoginIcon from '@mui/icons-material/Login';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import MobileScreenShareOutlinedIcon from '@mui/icons-material/MobileScreenShareOutlined';


const HeaderBox = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height : 14vh;
  border : none;
  background-color: #ffffff;
  background-image: linear-gradient(to top, rgba(238,194,174,0) 0%, rgba(230,99,103,0.3) 100%);
`

const FoodLogoBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content : center;
  gap : 20px;
  margin-left : 38px;

  & > img {
  cursor : pointer;  
  background : none;
  width : 5vw;
  }
`

const HeadingBox = styled(Box)`
  display: flex;
  flex-direction: column;

  @keyframes example {
    0%   {color: #f32170;}
    25%  {color: #ff6b08;}
    50%  {color: #cf23cf;}
    100% {color: #F88379;}
  }

   & > p:nth-child(1) {
    font-family: "Trebuchet MS";
    font-size: 26px;
    color : rgb(211,47,47);
    font-weight: bolder;
    animation-name: example;
    animation-duration: 6s;
    animation-iteration-count: infinite;
    }

    & > p:nth-child(2) {
    font-family: "Trebuchet MS";
    font-size: 12px;
    margin-left: 3rem;
    margin-bottom : 6px;
    color : rgb(211,47,47);
    font-weight: bolder;
    animation-name: example;
    animation-duration: 6s;
    animation-iteration-count: infinite;
    }
  `

const NavItems = styled(Box)`
display : flex;
gap: 2rem;
margin-right : 2.4rem;


& > ul {
  display: flex;
  align-items: center;
  gap: 2rem;
  color: black;
  font-weight: bold;
  font-size: 16px;
  list-style-type: none;
}
`

const ButtonBox = styled(Button)`
padding: 3px;
width: 7vw ;
align-items: center;
cursor: pointer;
border : 1.5px solid rgb(211,47,47);
text-transform : capitalize;
font-weight : bold;

:hover {
  background : rgb(211,47,47);
  color : white;
  box-shadow : 3px 3px 6px rgb(211,47,47);
}
`

const GoogleButtonBox = styled(Button)`
display : flex;
align-items : center;
gap : 10px;
font-family: "Trebuchet MS";
background : white;
color : black;
padding : 8px;
text-transform : capitalize;

& p {
  font-size : 15px;
  font-weight : bolder;
}

:hover {
  background : white;
  color : black;
}

& > img {
  width : 2vw;
}
`

const LoggedOutBox = styled(Box)`
display : flex;
align-items : center;
color : rgb(211,47,47);
gap : 2px;
font-weight : bolder;

& > svg {
  font-size: 25px ;
  color : rgb(211,47,47);
  cursor : pointer;
}
`

const GetAppBox = styled(Box)`
display : flex;
align-items:  center;
cursor : pointer;
gap : 2px;

& a {
  text-decoration : none;
  color : rgb(211,47,47);
}

& > svg {
  font-size: 25px ;
  color : rgb(211,47,47);
  cursor : pointer;
}
`

const CartBox = styled(Box)`
display : flex;
align-items:  center;

& > svg {
  margin-bottom : 3px;
  font-size: 28px ;
  color : rgb(211,47,47);
  cursor : pointer;
}
`

const MainContainer = styled(Box)`
display : flex;
align-items : center;
justify-content : center;
margin-top : 3.5%;
`

const ImageBox = styled(Box)`
display : flex;
align-items : center;
justify-content : center;
margin-top : 5rem;
background-image: linear-gradient(to bottom, rgba(238, 194, 174, 0) 0%, rgba(230, 99, 103, 0.1) 100%);


& > img:nth-child(1) {
  width : 56vw;
}
& > img:nth-child(2) {
  width : 44vw;
}
`

const PaperBox = styled(Paper)`
display : flex;
flex-direction : column;
align-items : center;
gap : 3rem;
justify-content : center;
width : 28%;
background-color:  rgba(0,0,0,0.4);
height : 85vh;
filter: drop-shadow(2px 2px 6px black);
border-radius: 10px;
`

const Header = styled(Box)`
display : flex;
flex-direction : column;
gap : 5px;
font-family: "Trebuchet MS";
margin-right : 35px;

& > p {
  color : darkgray;
  font-family: "Trebuchet MS";
  font-size :12px;
}
`

const InputBox = styled(Box)`
display : flex;
flex-direction : column;
align-items: start;
justify-content: center;
gap : 1rem;
width : 80%;

& input {
  font-size : 12.5px;
  color : white;
  border : 1px solid white;
  border-radius: 5px;

  :hover {
    border-bottom : 2px solid white;
  }
}

& > h3 {
  color : white;
}

& label {
  color : darkgray;
  font-size : 14px;
  font-family: "Trebuchet MS";
}

& p {
  font-family: "Trebuchet MS";
  font-size : 12px;
  cursor : pointer;
}
`

const NewUserBox = styled(Box)`
display : flex;
align-items : center;
gap : 10px;

`

const SignUpLink = styled(Link)`
font-family: "Trebuchet MS";
cursor: pointer;
font-weight : bolder;
font-size : 12px;
cursor : pointer;
color : darkgray;
text-decoration : none;
margin-top: 0.5rem;

:hover {
  color : white;
}
`

const Login = () => {
  
  const { userName, setUserName,loggedInUser } = useContext(UserContext)
  
  const [isSignIn, setIsSignIn] = useState(true)

  const [errMessage, setErrMessage] = useState()

  const [open, setOpen] = useState(false);

  const [user, setUser] = useState({})

  const navigate = useNavigate()


  // useRef is a React Hook that lets you reference a value that’s not needed for rendering.
  // const ref = useRef(initialValue)
  const email = useRef(null)
  const password = useRef(null)
  // I want to refer this email and password to my textfields
  
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = async (e) => {
    e.preventDefault();
    // Validate the form data
    const message = checkValidData(email.current.value, password.current.value)
    setErrMessage(message)
    if (message) return
    // SignUp Logic
    if (!isSignIn) {
      try {
        await createUserWithEmailAndPassword(firebaseAuth, email.current.value, password.current.value)
        navigate('/')
      } catch (err) {
        setErrMessage(err.message)
      }
      toast.success("Signed Up Successfully", {
        position: "top-center",
        newestOnTop: true,
        autoClose : 1000,
      }) 
      
    } else {
      try {
        await signInWithEmailAndPassword(firebaseAuth, email.current.value, password.current.value)
        navigate('/home')
      } catch (err) {
        setErrMessage(err.message)
      }
    }
  }

  const handleGoogleSignIn = async (e) => {
    e.preventDefault()
    try {
      await signInWithPopup(firebaseAuth, provider)
      // await signInWithRedirect(firebaseAuth, provider)
      navigate('/home')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      setUser(currentUser)
    })
    return () => {
      unSubscribe();
    }
  })


  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn)
  } 

  return (
    <>
      <AppBar sx={{boxShadow : 'none'}}>
        <HeaderBox>
          <FoodLogoBox>
            <img src={FoodLogo} alt='FoodLogo' onClick={()=> navigate('/')} />
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
                <ButtonBox onClick={handleOpen} variant='outlined' color='error'>
                   LogIn
                  <LoginIcon sx={{ ml: "4px", fontSize: '18px'}}/>
                </ButtonBox>
              </li>
              <li>
                <GetAppBox>
                  <MobileScreenShareOutlinedIcon />
                 <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader">Get The App</a>
                </GetAppBox>
              </li>
              <li>
                <LoggedOutBox>
                  <PersonIcon/>
                  {
                    !isSignIn ? (loggedInUser) : "User" 
                  }
                </LoggedOutBox>
              </li>
              <li>
                <CartBox>
                  <LocalMallOutlinedIcon/>
                </CartBox>
              </li>
              
            </ul>
          </NavItems>
        </HeaderBox>
      </AppBar>
      
      <ImageBox>
        <img src={FoodImage} alt="" />
        <img src={Image} alt=""/>
      </ImageBox>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <MainContainer>
        <PaperBox>
          {
            isSignIn
            ? <Header>
                <Box sx={{display: 'flex', alignItems:'center', gap:'10px', color:'white'}}>
                  <h2>Welcome Back</h2>
                  <SentimentSatisfiedAltIcon/>
                </Box>
                <Typography>Sign In with your email address and password</Typography>
              </Header>
            : <Header>
                <Box sx={{display: 'flex', alignItems:'center', gap:'10px', color:'white'}}>
                  <h2>Welcome Back</h2>
                  <SentimentSatisfiedAltIcon/>
                </Box>
                <Typography>Sign Up with your email address and password</Typography>
              </Header>
            }
          <InputBox>
            <h3>{isSignIn ? "Sign In" : "Sign Up"}</h3>
            { 
              !isSignIn && 
              <TextField
                type='text'
                variant='filled'
                color = 'warning'
                label='UserName'
                required fullWidth
                value={userName}
                onChange={handleUserNameChange}>
              </TextField>
            }
            <TextField
              inputRef={email}   // inputRef: This is a specific prop used with certain material UI components. So, this email is reference to this textfield
              type='email'
              variant='filled'
              color = 'warning'
              label='Email'
              required fullWidth>
            </TextField>
        
            <TextField
              inputRef={password}   // this password is reference to this textfield
              type='password'
              color = 'warning'
              variant='filled'
              label='Password'
              required fullWidth>
              </TextField>
              

            <Typography sx={{color:'red', fontSize:'14px', fontFamily:"Trebuchet MS", fontWeight:'bold'}}>{errMessage}</Typography>

            <Button sx={{ fontFamily: "Trebuchet MS", padding:'8px 0'}}
              variant='contained'
              size='medium'
              color='error'
              required fullWidth
              onClick={handleClick} >
              {isSignIn ? "Sign In" : "Sign Up"}
              </Button>

              {
                isSignIn && 
                <Box sx={{color:'white'}}><h5>OR Sign In Using</h5></Box>
              }

              {
                isSignIn && 
                <GoogleButtonBox onClick={handleGoogleSignIn} fullWidth><img src={Google} alt=""/><Typography>Sign In With Google</Typography></GoogleButtonBox>
              }
              
            <NewUserBox>
              <SignUpLink onClick={toggleSignInForm}><Typography>{isSignIn ? "New User? Sign Up Now" : "Already Registerd? Sign In Now" }</Typography></SignUpLink>
            </NewUserBox>
          </InputBox>
        </PaperBox>
        <ToastContainer/>
      </MainContainer>
      </Modal>
    
    </>
  )
}

export default Login
