import React, { useEffect, useState } from 'react';
import { Box, Typography, styled } from '@mui/material';
import Shimmer from '../Components/Shimmer';
import { SWIGGY_CDN_LINK, SWIGGY_MENU_API } from '../Constants';
import { useParams } from 'react-router-dom';  // import useParams for read `resId`
import StarIcon from '@mui/icons-material/Star';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const MenuContainer = styled(Box)`
display : flex;
// box-shadow : 1px 1px 5px grey;
border : 1px solid rgba(208,208,208,0.8);
width : 70%;
margin: 8rem 11.5rem;
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
gap : 10px;
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
  font-weight : bold;
  font-family: "Trebuchet MS";
}
`
const TotalRating = styled(Box)`

& > p {
  color: black;
  font-size: 16px;
  font-family: "Trebuchet MS" ;
}
`

const TimeBox = styled(Box)`
display : flex;
flex-direction : column;
gap : 18px;
`

const TravelTime = styled(Box)`
display : flex;
justify-content:space-between; 
align-items: center;
color : rgba(128,128,128,0.8);
`

const MenuInfo = styled(Box)`
margin-top : 2rem;
padding : 0 20px;
`

const CardContent = styled(Box)`
display  :flex;
flex-direction : column;
gap : 10px;
margin-top : 1rem;
padding : 10px 20px;
box-shadow : 0 0 4px 0  rgba(208,208,208,0.8);

& > div > h4 {
  color : dimgray ;
}

& > div > p {
  font-size : 14px;
  color :  rgba(128,128,128,0.7);
  font-family: "Trebuchet MS";
}
`

const RestaurantMenu = () => {

  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams()  // call useParams and get value of restaurant id using object destructuring

  useEffect(() => {
    fetchMenu();   // call fetchMenu function so it fetch api data and set data in restaurant state variable
  }, [resId]);  // Add resId as a dependency to re-fetch when it changes

  const fetchMenu = async () => {
    try {
      const data = await fetch(SWIGGY_MENU_API + resId);
      const json = await data.json();
      // console.log(json);
      setResInfo(json.data);
    } catch (error) {
      console.error('Error fetching menu:', error);
    }
  };

  if (resInfo === null) {
    return <Shimmer />;
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
      availability,
      description,
      cloudinaryImageId,
    } = cardInfo;

  const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(itemCards);

  return (
    <MenuContainer>

      <HeaderBox>

        <InfoBox>

          <ImageBox>
             <img src={SWIGGY_CDN_LINK + cloudinaryImageId} alt={name} />
          </ImageBox>

          <Info>

            <h2>{name}</h2>
            <Typography>{cuisines && cuisines.join(', ')}</Typography>
            <Typography>{locality}, {areaName}</Typography>
            
            <RatingBox>

              <Rating style={{ color: avgRatingString > 4 ? "green" : "red" }}>
                <StarIcon />
                <Typography>{avgRatingString}</Typography>
              </Rating>

              <TotalRating>
                <Typography>({totalRatingsString})</Typography>
              </TotalRating>

            </RatingBox>

          </Info>

        </InfoBox>

        <TimeBox>

          <Box  sx={{display : 'flex', alignItems: 'center'}}> 
            <CurrencyRupeeIcon />
            <h2>{costForTwo / 100} for two</h2>
          </Box>

          <TravelTime>

            <Box sx={{display : 'flex', gap :'4px', alignItems: 'center'}}>
              <AccessTimeFilledIcon />
              <h4>{sla?.slaString}</h4>
            </Box>

            <Box sx={{display : 'flex', justifyContent:'space-between'}}>
              <h4>{sla?.lastMileTravelString}</h4>
            </Box>

          </TravelTime>
          
          <Box sx={{color : 'rgba(128,128,128,0.8)'}}>
            <h4>{availability?.nextCloseTime }</h4>
          </Box>

        </TimeBox>

      </HeaderBox>
     
      <MenuInfo>
        {
          itemCards && itemCards.map((item) => (
            <CardContent key={item?.card.info.id}>
              <Box>
                <h3>{item.card.info.name}</h3>
              </Box>
              <Box>
                <h4>{"₹"} {item.card.info.price / 100 || item.card.info.defaultprice / 100}</h4>
              </Box>
               <Box>
                <Typography>{item.card.info.description}</Typography>
              </Box>
            </CardContent>
          )
          )
        }
      </MenuInfo>
    </MenuContainer>
  );
};

export default RestaurantMenu;
