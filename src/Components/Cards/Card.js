import React, { useContext } from 'react';
import { Box, styled, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { SWIGGY_CDN_LINK } from '../../../utils/Constants';
import UserContext from '../../../utils/userContext';

const CardWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    margin: '10px auto',
  },
}));

const PromotedLabel = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 30,
  left: 32,
  backgroundColor: 'black',
  color: 'white',
  padding: '5px 10px',
  borderRadius: '5px',
  zIndex: 1,
  fontSize: '12px',
  fontWeight: 'bold',

  [theme.breakpoints.down('sm')]: {
    top: 23,
    left: 18,
    fontSize: '15px',
    padding: '6px 16px',
  },
}));

const RestCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems:'start',
  width: '300px',
  height: 'auto',
  margin: '30px 18px',
  backgroundColor: '#ffffff',
  borderRadius: '10px',
  ':hover': {
    filter: 'drop-shadow(3px 3px 3px black)',
    cursor: 'pointer',
    transform: 'scale(0.92)',
    transition: '0.3s',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: '56vh',
    margin: '10px auto',
  },
}));

const CardImage = styled('img')(({ theme }) => ({
  display: 'flex',
  width: '90%',
  height: '45%',
  margin: '12px auto',
  borderRadius: '10px',
  objectFit: 'cover',
  filter: 'drop-shadow(3px 3px 3px black)',
  [theme.breakpoints.down('sm')]: {
    width: '92%',
    height: 'auto',
  },
}));

const CardInfo = styled(Box)(({ theme }) => ({
  margin: '10px 12px',
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
  overflow: 'hidden',
  '& h2': {
    color: 'black',
    fontSize: '22px',
  },
  '& h4': {
    color: 'black',
  },
  [theme.breakpoints.down('sm')]: {
    margin: '10px 20px',
    textAlign: 'start',
    '& h2': {
      fontSize: '18px',
    },
    '& h4': {
      fontSize: '16px',
    },
  },
}));

const RatingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '16.6px',
  justifyContent: 'start',
  alignItems: 'center',
  marginTop: '5px',
  [theme.breakpoints.down('sm')]: {
    gap: '20px',
     justifyContent: 'start',
  },
}));

const Rating = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4px',
  background: 'rgba(220,220,220,0.6)',
  borderRadius: '5px',
  padding: '3px 4px',
  '& > svg': {
    color: 'white',
  },
  '& > h5': {
    color: 'white',
    fontSize: '16px',
  },
  [theme.breakpoints.down('sm')]: {
    '& > h5': {
      fontSize: '14px',
    },
  },
}));

const Card = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
}) => {
  const { Area } = useContext(UserContext);

  return (
    <RestCard>
      <CardImage src={SWIGGY_CDN_LINK + cloudinaryImageId} alt='Images' />
      <CardInfo>
        <h2>{name}</h2>
        <Typography sx={{ fontFamily: 'Trebuchet MS', color: 'grey' }}>
          {cuisines?.join(', ')}
        </Typography>
        <Typography sx={{ fontFamily: 'Trebuchet MS', color: 'grey' }}>{areaName}, {Area}</Typography>
        <RatingContainer>
          <Rating sx={{ backgroundColor: avgRatingString >= 4 || avgRatingString == '--' ? '#00AD1D' : '#EC3838' }}>
            <StarIcon sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center', fontSize: '18px' }} />
            <h5>{avgRatingString}</h5>
          </Rating>
          <Box sx={{ display: 'flex', fontFamily: 'Trebuchet MS', color: 'grey', gap: '5px' }}>
            <Typography sx={{ fontFamily: 'Trebuchet MS' }}>{sla?.lastMileTravelString ?? '2.0 km'}</Typography>
          </Box>
          <Box><h4>{costForTwo}</h4></Box>
        </RatingContainer>
      </CardInfo>
    </RestCard>
  );
};

export const withPromotedLabel = (Card) => {
  return (props) => {
    return (
      <CardWrapper>
        <PromotedLabel sx={{backgroundColor:'black', color:'white'}}>Promoted</PromotedLabel>
        <Card {...props} />
      </CardWrapper>
    );
  };
};

export default Card;