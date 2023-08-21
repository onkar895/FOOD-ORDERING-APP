import React from 'react'
import { Button, Box, styled, Typography} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import FoodImage from '../Assets/FoodImage.png'

const MainContainer = styled(Box)`
display : flex;
gap : 40px;
align-items : center;
justify-content : center;
margin : 5rem 5rem 0 8rem;
`

const InfoContainer = styled(Box)`
display : flex;
flex-direction : column;
align-items : start;
justify-content : center;
gap : 1rem;

& > h1 {
  font-size : 40px;

  & span {
    color : rgb(250,97,65);
  }
}

& > div > p {
    color : grey;
    font-size : 14px;
    font-family: "Trebuchet MS";
}
`

const ButtonContainer = styled(Box)`
display : flex;
align-items : center;
justify-content : center;

& > button {
  border : 2px solid rgb(250,97,65);
  font-family: "Trebuchet MS";
}

& > button:hover {
  box-shadow : 5px 5px 10px red;
  background : rgb(250,97,65);
  color : white;
  border-radius : 5px;
}
`

const ImageContainer = styled(Box)`

& > img {
  width :56vw;
}
`

const HomePage = () => {

  const navigate = useNavigate()
  return (
    <>
      <MainContainer>
        <InfoContainer>
          <h1>We Deliver <br/> Delicious & <br/> Healthy  <span>Food</span></h1>
          <Box>
            <Typography>Our job is to filling your hunger with delicious food</Typography>
            <Typography>and with fast and free delivery.</Typography>
          </Box>
          <Box sx={{
            color : 'rgb(250,97,65)'
          }}>
             <h3>Order Online to get 40% OFF...</h3>
          </Box>
          
          <ButtonContainer>
            <Button
              variant="outlined" color="error"
              onClick={() => navigate('/restaurants')}>
              Explore Restaurants
            </Button>
          </ButtonContainer>
        </InfoContainer>
        <ImageContainer>
          <img src={FoodImage} alt="FoodImage"/>
        </ImageContainer>
      </MainContainer>
   
    </>
  )
}

export default HomePage
