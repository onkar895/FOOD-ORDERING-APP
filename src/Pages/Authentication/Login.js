import React, { useContext } from 'react'
import { Box, styled, Paper, TextField, Button } from '@mui/material'
import UserContext from '../../../utils/userContext'
import { useNavigate } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';

const PaperBox = styled(Paper)`
width : 25%;
height : 50vh;
margin : 10rem auto;
border : 1px solid red;
`

const InputBox = styled(Box)`
display : flex;
flex-direction : column;
align-items: center;
justify-content: center;
gap : 1.5rem;
width : 80%;
margin : 2rem auto;

& > input {
  font-family: "Trebuchet MS";
  font-size : 10px
}
`

const Login = () => {

  const {userName, setUserName } = useContext(UserContext)
  
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const navigate = useNavigate()
  
  return (
    <PaperBox>
      <InputBox>
        <h2>Login</h2>
        <TextField 
          type='text'
          variant='outlined'
          size='small'
          color='error'
          placeholder='UserName'
          required fullWidth
          value={userName}
          onChange={handleUserNameChange}
        >
        </TextField>
        <TextField
          type='password'
          variant='outlined'
          size='small'
          color='error'
          placeholder='Password'
          required fullWidth>
        </TextField>

        <Button sx={{width : '6vw'}} variant='contained'
        size='medium'
          color='error'
          onClick={() => navigate('/')}
        >
           LogIn
        </Button>
      </InputBox>
      
    </PaperBox>
  )
}

export default Login
