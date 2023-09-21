import React, {useContext} from 'react'
import { Box, styled, Typography} from '@mui/material'
import RatingImage from '../../Assets/Rating.png'
import StarIcon from '@mui/icons-material/Star';
import { SWIGGY_CDN_LINK } from '../../../utils/Constants';
import UserContext from '../../../utils/userContext';

const RestCard = styled(Box)`
display : flex;
flex-direction : column;
width : 260px;
height : 330px;
margin : 20px 0 0 48px;
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
height : 45%;
margin : 12px;
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
flex-wrap : wrap;
overflow:  hidden;

& h2 {
  color : black;
  font-size : 22px;
}

& h4 {
  color : black;
}
`

const RatingContainer = styled(Box)`
display : flex;
gap : 16.6px;
justify-content: start;
align-items : center;
margin-top : 5px;
`

const Rating = styled(Box)`
display : flex;
align-items : center;
justify-content : center;
gap : 4px;
background : rgba(220,220,220,0.6);
border-radius : 5px;
padding : 3px 4px;

& > svg {
  color : white;
}

& > h5 {
  color : white;
  font-size : 16px;
}
`

const Card = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString, }) => {
  
  const {Area} = useContext(UserContext)
  
  return (
    <RestCard >
      <img src={ SWIGGY_CDN_LINK + cloudinaryImageId} alt='Images'/>
      <CardInfo>
        <h2>{name}</h2>

         <Typography sx={{ fontFamily: "Trebuchet MS", color: 'grey',   
          textAlign: 'inherit'}}>
          {cuisines.join(", ")}
        </Typography>

        <Typography sx={{ fontFamily: "Trebuchet MS", color: 'grey' }}>{areaName}, {Area}</Typography>

        <RatingContainer>
          <Rating sx={{backgroundColor: avgRatingString >= 4 || avgRatingString == "--" ? "#00AD1D" : "#EC3838", }}>
            <StarIcon sx={{alignItems: 'center', display: 'flex', justifyContent: 'center', fontSize:'18px'}} src={RatingImage} alt='Rating' />
            <h5>{avgRatingString}</h5> 
          </Rating>
          <Box sx={{display : 'flex', fontFamily: "Trebuchet MS", color: 'grey', gap : '5px' }}>
          <Typography sx={{fontFamily: "Trebuchet MS", }}>{sla?.lastMileTravelString ?? '2.0 km'}</Typography>
          </Box>
          <Box><h4>{costForTwo}</h4></Box>
        </RatingContainer>
      
        
      </CardInfo>
    </RestCard>
    
  )
}

// Higher Order Component

// input - Card =>> CardPromoted

export const withPromotedLabel = (Card) => {
  return (props) => {
    return (
      <Box>
        <label>Promoted</label>
        <Card {...props} />
      </Box>
    )
  }
}

export default Card
