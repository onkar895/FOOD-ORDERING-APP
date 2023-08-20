import React from 'react'
import { Box, styled, Typography} from '@mui/material'
import RatingImage from '../../Assets/Rating.png'
import StarIcon from '@mui/icons-material/Star';
import { SWIGGY_CDN_LINK } from '../../Constants'

const RestCard = styled(Box)`
display : flex;
flex-direction : column;
width : 250px;
height : 345px;
margin : 30px 0 0 55px;
background-color: white;
border-radius : 10px;

// filter: drop-shadow(5px 5px 5px black);

:hover {
  filter: drop-shadow(3px 3px 3px black);
  cursor : pointer;
  transform : scale(0.92);
  transition : 0.3s;
}

& > img {
display : flex;
width : 90%;
height : 42%;
margin : 10px;
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
gap : 5px;
`

const Card = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  totalRatingsString,
  sla,
  costForTwo,
  avgRatingString, }) => {
  
  return (
       <RestCard >
      <img src={ SWIGGY_CDN_LINK + cloudinaryImageId} alt=''/>
      <CardInfo>
        <h2>{name}</h2>
        <RatingContainer>
          <Rating  sx={{ fontFamily: "Trebuchet MS", color: 'grey' }}>
            <StarIcon sx={{ color: 'white', background: '#00A36C', borderRadius: '50%', alignItems: 'center', display: 'flex', justifyContent: 'center', fontSize:'18px' }} src={RatingImage} alt='Rating' />
          <h5>{avgRatingString} Stars</h5> 
          </Rating>
          <Box sx={{color : 'grey'}}><h5>{ totalRatingsString }</h5></Box>
        </RatingContainer>
      
      
        <Typography sx={{ fontFamily: "Trebuchet MS", color: 'grey'}}>
          {cuisines.join(",")}
        </Typography>
        <Box sx={{display : 'flex', fontFamily: "Trebuchet MS", color: 'grey', gap : '5px' }}>
          <Typography >{areaName},</Typography>
          <Typography>{sla?.lastMileTravelString ?? '2.0 km'}</Typography>
        </Box>
       
        <h4>{costForTwo}</h4>
      </CardInfo>
    </RestCard>
    
  )
}

export default Card
