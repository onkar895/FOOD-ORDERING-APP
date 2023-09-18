import React, { useContext, useRef, useState } from 'react'
import { Box, styled, Paper, TextField, Button, Typography, Link, AppBar, Toolbar } from '@mui/material'
import UserContext from '../../../utils/userContext'
import { checkValidData } from '../../../utils/Validate'
import FoodLogo from '../../Assets/FoodLogo.png'
import { firebaseAuth } from '../../../utils/Firebase/FirebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import LoginPageImg from '../../Assets/LoginPageImg.png'
import UserContext from '../../../utils/userContext';
import PersonIcon from '@mui/icons-material/Person';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import MobileScreenShareOutlinedIcon from '@mui/icons-material/MobileScreenShareOutlined';


const HeaderBox = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height : 14vh;
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

  & > p {
  font-family: "Trebuchet MS";
  font-size: 28px;
  color : rgb(211,47,47);
  font-weight: bolder;
  }

  & h5 {
  font-family: "Trebuchet MS";
  margin-left: 2.8rem;
  color: rgb(211,47,47);
  margin-bottom : 8px;
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
color : rgb(211,47,47);
cursor : pointer;
gap : 2px;

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
margin: auto;
`

const ImageBox = styled(Box)`
& > img {
  width : 60vw;
}
`

const PaperBox = styled(Paper)`
width : 25%;
height : 62vh;
box-shadow : 0 0 6px 0 darkgray;
`

const Header = styled(Box)`
display : flex;
flex-direction : column;
margin : 2rem;
gap : 5px;
font-family: "Trebuchet MS";

& > p {
  color : grey;
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
margin : 2.5rem  auto;

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
color : grey;
text-decoration : none;
margin-top: 0.5rem;

: hover {
  color : black;
}
`

const Login = () => {
  
  const { userName, setUserName,loggedInUser } = useContext(UserContext)
  
  const [isSignIn, setIsSignIn] = useState(true)

  const [errMessage, setErrMessage] = useState()

  const navigate = useNavigate()


  // useRef is a React Hook that lets you reference a value that’s not needed for rendering.
  // const ref = useRef(initialValue)
  const email = useRef(null)
  const password = useRef(null)
  // I want to refer this email and password to my textfields
  
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

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
        autoClose : 2000,
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
              <h5> - Taste of Everything</h5>
            </HeadingBox>
          </FoodLogoBox>
          <NavItems>
            <ul>
              <li>
                <GetAppBox>
                  <MobileScreenShareOutlinedIcon />
                  Get The App
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

    <MainContainer>
        <ImageBox>
          <img src={LoginPageImg} alt=""/>
        </ImageBox>
        <PaperBox>
          {
            isSignIn && 
            <Header>
              <h3>Welcome Back !</h3>
              <Typography>Sign In with your email address and password</Typography>
            </Header>
          }
          <InputBox>
            <h3>{isSignIn ? "Sign In" : "Sign Up"}</h3>
            { 
              !isSignIn && 
              <TextField
                type='text'
                variant='outlined'
                size='small'
                color='error'
                label='UserName'
                required fullWidth
                value={userName}
                onChange={handleUserNameChange}>
              </TextField>
            }
            <TextField
              inputRef={email}   // inputRef: This is a specific prop used with certain material UI components. So, this email is reference to this textfield
              type='email'
              variant='outlined'
              size='small'
              color='error'
              label='Email'
              required fullWidth>
            </TextField>
        
            <TextField
              inputRef={password}   // this password is reference to this textfield
              type= 'password'
              variant='outlined'
              size='small'
              color='error'
              label='Password'
              required fullWidth>
            </TextField>

            <Typography sx={{color:'red', fontSize:'14px', fontFamily:"Trebuchet MS", fontWeight:'bold'}}>{errMessage}</Typography>

            <Button sx={{ fontFamily: "Trebuchet MS"}}
              variant='contained'
              size='medium'
              color='error'
              required fullWidth
              onClick={handleClick} >
              {isSignIn ? "Sign In" : "Sign Up"}
            </Button>
             
            <NewUserBox>
              <SignUpLink onClick={toggleSignInForm}>{isSignIn ? "New User? Sign Up Now" : "Already Registerd? Sign In Now" }</SignUpLink>
            </NewUserBox>
          </InputBox>
        </PaperBox>
        <ToastContainer/>
      </MainContainer>
    </>
  )
}

export default Login
