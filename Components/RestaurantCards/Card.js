import React from 'react'
import { Box, styled, Typography } from '@mui/material'
import RatingImage from '../../Assets/Rating.png'

const RestCard = styled(Box)`
width : 260px;
height : 300px;
margin : 0 0 30px 50px;
background-color: white;
border-radius : 10px;
// filter: drop-shadow(5px 5px 5px black);

:hover {
  cursor : pointer;
  transform : scale(0.9);
  transition : 0.2s;
}

& > img {
width : 100%;
height : 60%;
border-radius : 10px;
object-fit : cover;
filter: drop-shadow(2px 2px 2px black);
}
`

const CardInfo = styled(Box)`
margin: 10px 0 0 12px;
display : flex;
flex-direction : column;
gap : 5px;

`

const Rating = styled(Box)`
display : flex;
align-items : center;
gap : 5px;

& h2 {
  font-size : 18px;
}
`

const Card = () => {
  return (
    <>
      <Box sx={{margin : '40px 0 30px 46px'}}>
        <h2>Restaurants with online food delivery in Pune</h2>
      </Box>
      <RestCard>
        <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee4f041cd8611dccc19f4267783ab5ea' alt='EatFit' />
        <CardInfo>
          <h2>EatFit</h2>
          <Rating>
            <img src={RatingImage} alt='Rating' />
            <h2>4.1 Stars</h2>
          </Rating>
          <Typography sx={{ fontFamily: "Trebuchet MS", color : 'grey'}}>
            Chinese, Healthy Food..... <br/> Shivajinagar, 2.2km
          </Typography>
        </CardInfo>
      </RestCard>
    </>
  )
}

export default Card
