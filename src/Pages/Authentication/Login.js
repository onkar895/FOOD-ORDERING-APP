import React, { useContext, useState } from 'react'
import { Box, styled, Paper, TextField, Button, Typography, Link } from '@mui/material'
import UserContext from '../../../utils/userContext'
import { useNavigate } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';

const PaperBox = styled(Paper)`
width : 25%;
height : 65vh;
margin : 8rem auto;
`

const InputBox = styled(Box)`
display : flex;
flex-direction : column;
align-items: start;
justify-content: center;
gap : 1.5rem;
width : 80%;
margin : 2rem  auto;

& > h2 {
  margin-top : 2rem;
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

: hover {
  color : black;
}
`

const Login = () => {

  const { userName, setUserName } = useContext(UserContext)
  
  const [isSignIn, setIsSignIn] = useState(true)
  
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

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
          type='email'
          variant='outlined'
          size='small'
          color='error'
          label='Email'
          required fullWidth
        >
        </TextField>
        <TextField
          type='password'
          variant='outlined'
          size='small'
          color='error'
          label='Password'
          required fullWidth>
        </TextField>

        <Button sx={{ fontFamily: "Trebuchet MS"}}
          variant='contained'
          size='medium'
          color='error'
          required fullWidth
          onClick={() => navigate('/')}
        >
           {isSignIn ? "Sign In" : "Sign Up" }
        </Button>
        <NewUserBox>
          <SignUpLink onClick={toggleSignInForm}>{isSignIn ? "New User? Sign Up Now" : "Already Registerd? Sign In Now" }</SignUpLink>
        </NewUserBox>
      </InputBox>
      
    </PaperBox>
  )
}

export default Login
