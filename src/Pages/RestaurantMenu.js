import { Box, Typography, styled, Button } from '@mui/material';
import MenuShimmer from '../Components/Shimmer/MenuShimmer';
import { SWIGGY_CDN_LINK, SWIGGY_MENU_IMG_API } from '../../utils/Constants';
import { useParams } from 'react-router-dom';  // import useParams for read `resId`
import StarIcon from '@mui/icons-material/Star';
import DemoImage from '../Assets/DemoImage.jpg'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import useRestaurantMenu from '../../utils/useRestaurantMenu';

const MenuContainer = styled(Box)`
display : flex;
// box-shadow : 1px 1px 5px grey;
border : 1px solid rgba(208,208,208,0.8);
width : 72%;
margin: 6rem 11.5rem;
padding : 2rem 0;
flex-direction : column;
align-items : center;
justify-content : center;

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
margin-top : 25px;
`

const MenuInfo = styled(Box)`
margin-top : 2rem;
padding : 0 20px;
width: 100%;
`

const MainContainer = styled(Box)`
display  :flex;
justify-content:  space-between;
align-items : center;
margin-top : 1rem;
padding : 20px;
box-shadow : 0 0 4px 0  rgba(208,208,208,0.8);
`

const CardContent = styled(Box)`
display  :flex;
flex-direction : column;
gap : 10px;

& > div > h4 {
  color : dimgray ;
}

& > div > p {
  font-size : 14px;
  color :  rgba(128,128,128,0.7);
  font-family: "Trebuchet MS";
}
`

const PriceBox = styled(Box)`
display : flex ;
gap : 10px;
align-items: center;

& h6 {
  font-weight : bolder;
  color : red;
  background-color : rgba(211,47,47,0.1);
  padding : 2px 5px;
}
`

const MenuImageBox = styled(Box)`
position : relative;

& > img {
  object-fit : cover;
  border-radius: 5px;
  width : 10vw;
  height : 15vh;
}

& button {
  position : absolute;
  top : 4.3rem;
  left : 1.2rem;
  font-family: "Trebuchet MS";
  padding : 4px 30px;
  color : rgb(211,47,47);
  background: white;

  :hover {
    color : white;
    background: rgb(211,47,47);
  }
}
`

const ServiceBox = styled(Box)`
color: #228B22;
display : flex; 
align-items: center;
gap : 5px;
`

const RestaurantMenu = () => {

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
  

  const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(itemCards);

  return (
  <>
    <MenuContainer>

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
          itemCards && itemCards.map((item) => (
            <>
            <MainContainer>
              <CardContent key={item?.card.info.id}>
                <Box>
                  <h3>{item.card.info.name}</h3>
                </Box>
                <PriceBox>
                    <h4>{"₹"} {(item.card.info.price / 100 || item.card.info.defaultPrice/100).toFixed(0)}</h4>
                    <h6>50% OFF | <span>USE FOODIEIT</span></h6>
                </PriceBox>
                <Box>
                  <Typography>{item.card.info.description}</Typography>
                </Box>
              </CardContent>
               
              <MenuImageBox>
                <img src={item.card.info.imageId ? SWIGGY_MENU_IMG_API + item.card.info.imageId : DemoImage} alt={""} />
                <Button variant='outlined' size='small' color='error'>Add</Button>
              </MenuImageBox>
            </MainContainer>
          </>
          )
          )
        }
      </MenuInfo>
    </MenuContainer>
  </>
  );
};

export default RestaurantMenu;