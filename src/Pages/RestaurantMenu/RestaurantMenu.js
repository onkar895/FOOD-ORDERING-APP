import { useState, useEffect } from 'react';
import { Box, Typography, styled, Button } from '@mui/material';
import MenuShimmer from '../../Components/Shimmer/MenuShimmer';
import { SWIGGY_CDN_LINK} from '../../../utils/Constants';
import { useParams } from 'react-router-dom';  // import useParams for read `resId`
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Header/Navbar';
import StarIcon from '@mui/icons-material/Star';
import { useLocation } from 'react-router-dom';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import useRestaurantMenu from '../../../utils/useRestaurantMenu';
import RestaurantCategory from '../../Pages/RestaurantMenu/RestaurantCategory';
import Footer from '../../Components/Footer/Footer';


const MainContainer = styled(Box)(({ theme }) => ({
  padding: '0 20px',
  [theme.breakpoints.down('sm')]: {
    padding: '50px 10px 0  10px',
  },
}));

const MenuContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '80%',
  margin: '8rem auto',
  padding: '1rem 0',
  border: '1px solid rgba(208,208,208,0.8)',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    margin: '10rem auto',
    padding: '0.5rem 0',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    margin: '1rem auto',
    padding: '0.5rem 0',
  },
}));

const IconBox = styled(Box)(({ theme }) => ({
  margin: '0 57.5rem 1.5rem 0',
  cursor: 'pointer',
  color: 'grey',
  '&:hover': {
    color: 'black',
    transform: 'scale(0.9)',
    transition: '0.4s',
  },
  '& > svg': {
    fontSize: '40px',
  },
  [theme.breakpoints.down('md')]: {
    margin: '0 41.5rem 1rem 0',
  },
  [theme.breakpoints.down('sm')]: {
    margin: '0 18rem 1rem 0',
  },
}));

const HeaderBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'start',
  gap: '8rem',
  width: '100%',
  padding: '0 20px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: '2rem',
  },
}));

const InfoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '15px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '10px',
  },
}));

const ImageBox = styled(Box)(({ theme }) => ({
  filter: 'drop-shadow(3px 3px 3px black)',
  '& > img': {
    width: '18vw',
    borderRadius: '8px',
  },
   [theme.breakpoints.down('md')]: {
    '& > img': {
      width: '28vw',
    },
  },
  [theme.breakpoints.down('sm')]: {
    '& > img': {
      width: '100%',
    },
  },
}));

const Info = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',

  gap: '5px',
  '& > h2': {
    fontSize: '22px',
  },
  '& > p': {
    color: 'grey',
    fontSize: '14px',
    fontFamily: 'Trebuchet MS',
  },
  [theme.breakpoints.down('sm')]: {
    '& > h2': {
      fontSize: '18px',
    },
    '& > p': {
      fontSize: '12px',
    },
  },
}));

const RatingBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '12px',
  alignItems: 'center',
  justifyContent: 'start',
  [theme.breakpoints.down('sm')]: {
    gap: '15px',
  },
}));

const Rating = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '4px',
  background: 'rgba(220,220,220,0.6)',
  borderRadius: '5px',
  padding: '3px 4px',
  '& p': {
    fontWeight: '900',
    fontFamily: 'Trebuchet MS',
  },
   [theme.breakpoints.down('sm')]: {
    justifyContent: 'start',
  },
}));

const TotalRating = styled(Box)(({ theme }) => ({
  '& > h4': {
    fontFamily: 'Trebuchet MS',
  },
}));

const TimeBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '20px',
  marginTop: '22px',
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
  },
}));

const ServiceBox = styled(Box)(({ theme }) => ({
  color: '#228B22',
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
}));

const MenuInfo = styled(Box)(({ theme }) => ({
  marginTop: '2rem',
  padding: '0 20px',
  width: '100%',
}));

const RestaurantMenu = () => {

  const [showIndex, setShowIndex] = useState(null)

  const navigate = useNavigate()

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const { resId } = useParams()  // call useParams and get value of restaurant id using object destructuring

  // Using custom Hook here, so your code will be more readable, modular and reusable. So now RestaurantMenu component doesn't have to worry abt how to fetch the data. Because we are going to fecth the data inside useRestaurant Hook in another file. 
  // It just have to worry about that I have this resInfo, I have got my restaurant Data inside it and I just want to display it. So,now it does'nt have to manage its own state. It's somehow magically acces to this resInfo.
  const resInfo = useRestaurantMenu(resId)  // Custom Hook which is defined in utils folder.

  console.log(resInfo)

  if (resInfo === null) {
    return <MenuShimmer />;
  }

  // Ensure the necessary nested properties are available
  const cardInfo = resInfo?.cards?.[2]?.card?.card?.info ||  resInfo?.cards?.[1]?.card?.card?.info || resInfo?.cards?.[3]?.card?.card?.info || resInfo?.cards?.[4]?.card?.card?.info || resInfo?.cards?.[0]?.card?.card?.info;
  console.log(cardInfo)
  if (!cardInfo) {
    return <Box>Menu information not available.</Box>;
  }

  const
    {
      name,
      cuisines,
      avgRatingString,
      totalRatingsString,
      costForTwo,
      areaName,
      locality,
      sla,
      cloudinaryImageId,
    } = cardInfo;
  
  const isMobile = () => {
    return window.innerWidth <= 768;
  }

  // const { itemCards }  = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(itemCards);
const regularCards = isMobile()
  ? resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards || resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  : resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards || resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards || resInfo?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||resInfo?.cards[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

const categories = regularCards?.filter(
  (c) =>
    c.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
) || [];
  console.log(categories)

   // Props Drilling
  const dummy = "Dummy Data";

  return (
    <>
      <Navbar />
      <MainContainer>
        <MenuContainer>
        
          <IconBox onClick={() => navigate('/restaurants')}>
            <ArrowBackIcon/>
          </IconBox>

          <HeaderBox>
            <InfoBox>
              <ImageBox>
                <img src={SWIGGY_CDN_LINK + cloudinaryImageId} alt={name} />
              </ImageBox>

              <Info> 
                <h2>{name}</h2>
                <Typography>{cuisines && cuisines.join(', ')}</Typography>
                <Typography>{locality}, {areaName}, {sla?.lastMileTravelString} </Typography>
            
                <RatingBox>

                  <Rating style={{ color: avgRatingString >= 4 ? "#228B22" : "#EC3838" }}>
                    <StarIcon />
                    <Typography>{avgRatingString}</Typography>
                  </Rating>

                  <TotalRating>
                    <h4>({totalRatingsString})</h4>
                  </TotalRating>

                </RatingBox>
              </Info>
            </InfoBox>

            <TimeBox>

              <Box sx={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}> 
                <Box sx={{display : 'flex', gap :'4px',  alignItems: 'center'}}>
                   <AccessTimeFilledIcon />
                   <h4>{sla?.slaString}</h4>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <CurrencyRupeeIcon sx={{fontSize: '20px'}}/>
                  <h4>{costForTwo / 100} for two</h4>
                </Box>
              </Box>

              <ServiceBox>
                <RadioButtonCheckedIcon/>
                <h4>{sla?.serviceability}</h4>
              </ServiceBox>
            </TimeBox>  
          </HeaderBox>
        
          <MenuInfo>
            {
             categories && categories.map((category, index) => (
                // Controlled Component : A component is controlled when it's managed by its parent using props.
                <RestaurantCategory
                  key={category?.card?.card.title}
                  data={category?.card?.card}
                  showItems={index === showIndex ? true : false}
                  setShowIndex={() => setShowIndex(index)}
                  dummy = {dummy}
                />
              ))
            }
          </MenuInfo>
        </MenuContainer>
      </MainContainer>
      <Footer/>
  </>
  );
};

export default RestaurantMenu;
