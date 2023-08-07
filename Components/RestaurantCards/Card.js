import React from 'react'
import { Box, styled, Typography, Image } from '@mui/material'
import RatingImage from '../../Assets/Rating.png'

const RestCard = styled(Box)`
width : 224px;
height : 260px;
margin : 30px 0 130px 50px;
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


const Card = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  totalRatingsString,
  lastMileTravelString,
  costForTwoString,
  avgRating, }) => {
  
  return (
       <RestCard >
      <img src={ "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId} alt=''/>
      <CardInfo>
        <h2>{name}</h2>
        <Rating  sx={{ fontFamily: "Trebuchet MS", color: 'grey' }}>
          <img src={RatingImage} alt='Rating' />
          <h4>{avgRating} Stars</h4> &nbsp;
          <h5>{ totalRatingsString }</h5>
        </Rating>
    
        <Typography sx={{ fontFamily: "Trebuchet MS", color: 'grey' }}>
          {cuisines.join(",")}
        </Typography>
        <Box sx={{display : 'flex', fontFamily: "Trebuchet MS", color: 'grey', gap : '5px' }}>
          <Typography >{area},</Typography>
          <Typography>{lastMileTravelString}</Typography>
        </Box>
       
        <h4>{costForTwoString}</h4>
      </CardInfo>
    </RestCard>
    
  )
}

export default Card
