import React, { useContext, useRef, useState } from 'react'
import { Box, styled, Paper, TextField, Button, Typography, Link } from '@mui/material'
import UserContext from '../../../utils/userContext'
import { checkValidData } from '../../../utils/Validate'
import { firebaseAuth } from '../../../utils/Firebase/FirebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

const PaperBox = styled(Paper)`
width : 25%;
height : 58vh;
margin : 8rem auto;
`

const InputBox = styled(Box)`
display : flex;
flex-direction : column;
align-items: start;
justify-content: center;
gap : 1rem;
width : 80%;
margin : 2rem  auto;

& > h2 {
  margin-top : 1.5rem;
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
color : grey;
text-decoration : none;
margin-top: 0.5rem;

: hover {
  color : black;
}
`

const Login = () => {

  const { userName, setUserName } = useContext(UserContext)
  
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
    <PaperBox>
      <InputBox>
        <h2>{isSignIn ? "Sign In" : "Sign Up"}</h2>
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
            onChange={handleUserNameChange}
          >
          </TextField>
        }
        <TextField
          inputRef={email}   // inputRef: This is a specific prop used with certain material UI components. So, this email is reference to this textfield
          type='email'
          variant='outlined'
          size='small'
          color='error'
          label='Email'
          required fullWidth
        >
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
          onClick={handleClick} 
        >
          {isSignIn ? "Sign In" : "Sign Up"}

        </Button>
        <NewUserBox>
          <SignUpLink onClick={toggleSignInForm}>{isSignIn ? "New User? Sign Up Now" : "Already Registerd? Sign In Now" }</SignUpLink>
        </NewUserBox>
      </InputBox>
      <ToastContainer/>
    </PaperBox>
    
  )
}

export default Login
