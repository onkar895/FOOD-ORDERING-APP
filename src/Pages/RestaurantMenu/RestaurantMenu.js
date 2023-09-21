import { useState } from 'react';
import { Box, Typography, styled, Button } from '@mui/material';
import MenuShimmer from '../../Components/Shimmer/MenuShimmer';
import { SWIGGY_CDN_LINK} from '../../../utils/Constants';
import { useParams } from 'react-router-dom';  // import useParams for read `resId`
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Header/Navbar';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import useRestaurantMenu from '../../../utils/useRestaurantMenu';
import RestaurantCategory from '../../Pages/RestaurantMenu/RestaurantCategory';
import Footer from '../../Components/Footer/Footer';


const MainContainer = styled(Box)`
// background-image: linear-gradient(to bottom, rgba(238, 194, 174, 0) 0%, rgba(230, 99, 103, 0.1) 100%);
`

const MenuContainer = styled(Box)`
display : flex;
// box-shadow : 1px 1px 5px grey;
border : 1px solid rgba(208,208,208,0.8);
width : 72%;
margin: 6rem auto;
padding : 1rem 0;
flex-direction : column;
align-items : center;
justify-content : center;
`

const IconBox = styled(Box)`
margin:0 53.5rem 1rem 0;
cursor : pointer;
color : grey;

: hover {
  color : black;
  transform : scale(0.9);
  transition : 0.4s;
}

& > svg {
  font-size : 40px;
}
`

const HeaderBox = styled(Box)`
display : flex;
justify-content : space-between;
align-items : start;
gap : 8rem;
width: 100%;
padding : 0 20px;

`

const InfoBox = styled(Box)`
display : flex;
gap : 15px;
`

const ImageBox = styled(Box)`
filter: drop-shadow(3px 3px 3px black);
& > img {
  width : 15vw;
  border-radius : 8px;
}
`

const Info = styled(Box)`
display : flex;
flex-direction : column;
gap : 5px;

& > h2 {
  font-size : 22px;
}

& > p {
  color: grey; 
  font-size :14px;
  font-family: "Trebuchet MS";
}
`


const RatingBox = styled(Box)`
display : flex;
gap : 12px;
align-items : center;
justify-content : start;
`

const Rating = styled(Box)`
display : flex;
gap : 4px;
background : rgba(220,220,220,0.6);
border-radius : 5px;
padding : 3px 4px;

& p {
  font-weight : 900;
  font-family: "Trebuchet MS";
}
`
const TotalRating = styled(Box)`

& > h4 {
  font-family: "Trebuchet MS" ;
}
`

const TimeBox = styled(Box)`
display : flex;
flex-direction : column;
justify-content : center;
gap : 20px;
margin-top : 22px;
`

const ServiceBox = styled(Box)`
color: #228B22;
display : flex; 
align-items: center;
gap : 5px;
`

const MenuInfo = styled(Box)`
margin-top : 2rem;
padding : 0 20px;
width: 100%;
`

const RestaurantMenu = () => {

  const [showIndex, setShowIndex] = useState(null)

  const navigate = useNavigate()

  const { resId } = useParams()  // call useParams and get value of restaurant id using object destructuring

  // Using custom Hook here, so your code will be more readable, modular and reusable. So now RestaurantMenu component doesn't have to worry abt how to fetch the data. Because we are going to fecth the data inside useRestaurant Hook in another file. 
  // It just have to worry about that I have this resInfo, I have got my restaurant Data inside it and I just want to display it. So,now it does'nt have to manage its own state. It's somehow magically acces to this resInfo.
  const resInfo = useRestaurantMenu(resId)  // Custom Hook which is defined in utils folder.

  if (resInfo === null) {
    return <MenuShimmer />;
  }

  // Ensure the necessary nested properties are available
  const cardInfo = resInfo?.cards?.[0]?.card?.card?.info;

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
  

// console.log('resInfo:', resInfo);
  const { itemCards }  = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(itemCards);

  const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) =>
      c.card?.card?.['@type'] === 
      'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
  );
  // console.log(categories)

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

              <Box sx={{ display: 'flex', gap: '0.8rem', alignItems: 'center', width:'16.5vw' }}> 
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
              categories.map((category, index) => (
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
