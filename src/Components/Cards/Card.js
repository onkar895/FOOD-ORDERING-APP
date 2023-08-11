import React from 'react'
import { Box, styled, Typography} from '@mui/material'
import RatingImage from '../../Assets/Rating.png'
import { SWIGGY_CDN_LINK } from '../../Constants'

const RestCard = styled(Box)`
display : flex;
flex-direction : column;
width : 220px;
height : 340px;
margin : 30px 0 0 29px;
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
height : 45%;
border-radius : 10px;
object-fit : cover;
filter: drop-shadow(3px 3px 3px black);
}
`

const CardInfo = styled(Box)`
margin: 10px 0 0 12px;
display : flex;
flex-direction : column;
gap : 5px;
overflow : hidden;

& h2 {
  font-size : 18px;
}
`

const RatingContainer = styled(Box)`
display : flex;
justify-content: space-between;
align-items : center;
`

const Rating = styled(Box)`
display : flex;
align-items : center;
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
      <img src={ SWIGGY_CDN_LINK +
          cloudinaryImageId} alt=''/>
      <CardInfo>
        <h2>{name}</h2>
        <RatingContainer>
          <Rating  sx={{ fontFamily: "Trebuchet MS", color: 'grey' }}>
          <img src={RatingImage} alt='Rating' />
          <h5>{avgRating} Stars</h5> 
          </Rating>
          <Box sx={{color : 'grey'}}><h5>{ totalRatingsString }</h5></Box>
        </RatingContainer>
      
      
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
