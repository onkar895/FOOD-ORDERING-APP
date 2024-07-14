import React, { useEffect, useState } from 'react';
import Card, { withPromotedLabel } from '../Components/Cards/Card';
import { Box, styled, Button, TextField, useTheme, useMediaQuery } from '@mui/material';
import { SWIGGY_API_URL } from '../../utils/Constants';
import Shimmer from '../Components/Shimmer/Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../../utils/useOnlineStatus';

const CardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  '& > a': {
    textDecoration: 'none',
  },
}));

const SearchContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '& > input': {
    fontFamily: 'Trebuchet MS',
    borderRadius: '5px',
    color: 'grey',
  },

  [theme.breakpoints.between('sm','md')]: {
    margin: '2rem auto',
  },
}));

const ButtonContainer = styled(Button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '7.5px 25px',
  textTransform: 'capitalize',
  borderRadius: '5px',
  background: 'rgb(211,47,47)',
  fontFamily: 'Trebuchet MS',
  ':hover': {
    background: 'rgb(211,47,47)',
  },
}));

const ButtonBox = styled(Button)(({ theme }) => ({
  textTransform: 'capitalize',
  margin: '4rem 4.4rem 0 0',
  width: '16vw',
  height: '6.5vh',
  border: '1.5px solid rgb(211,47,47)',
  fontWeight: 'bold',
  ':hover': {
    background: 'rgb(211,47,47)',
    color: 'white',
  },
  [theme.breakpoints.down('md')]: {
    margin: '5.6rem 5rem 0 0',
    width: '25vw',
    height: '4.2vh',
  },
  [theme.breakpoints.down('sm')]: {
    margin: '1.5rem 0.8rem',
    width: '94vw',
    height: '5vh',
  },
}));

const Restaurants = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm','md'))

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const RestaurantCardPromoted = withPromotedLabel(Card);

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  // empty dependency array :  once after render
  // dep array [searchInput] : once after initial render + everytime after render (my searchInput changes)
  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    try {
      const data = await fetch(SWIGGY_API_URL);
      const json = await data.json();

      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      
      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.log(error, 'error while getting the restaurants');
    }
  };

  // Using Custom hook here
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1 style={{ marginTop: '6rem', textAlign: 'center', color: 'red' }}>
        Looks like you're offline!! Please check your internet connection
      </h1>
    );

  const handleSearchInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);

     // Filter the restaurant cards and update the UI
    const filteredData = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredRestaurants(filteredData);
  };

  const handleTopRatedClick = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4.1
    );
    setFilteredRestaurants(filteredList);
  };

  if (!listOfRestaurants)
    return (
      <h1 style={{ marginTop: '8rem', textAlign: 'center', color: 'red' }}>
        SORRY 🙄, RESTAURANTS NOT AVAILABLE AT THE MOMENT,
        <br /> PLZ TRY AFTER SOME TIME
      </h1>
    );

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', justifyContent: 'space-between', }}>
        <Box sx={{ display: 'flex', gap: '5px', justifyContent: 'center', alignItems: 'center', margin: isSmallScreen ? '4rem 0.8rem 0 0.8rem' : '60px 0 0 64px',}}
        >
          <SearchContainer>
            <TextField
              sx={{ width: isSmallScreen ? '70vw' : '32vw'}}
              variant='outlined'
              color='error'
              size='small'
              fullWidth
              required
              type='text'
              placeholder='Search for Restaurants and Food....'
              name='search'
              value={searchInput}
              onChange={handleSearchInputChange}
            />
          </SearchContainer>
          <ButtonContainer variant='contained'>Search</ButtonContainer>
        </Box>  
        <ButtonBox variant='outlined' color='error' size='small' onClick={handleTopRatedClick}>
          Top Rated Restaurants
        </ButtonBox>
      </Box>

      {listOfRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <>
          <Box sx={{ margin: isSmallScreen ? "1rem" : "30px 0 0 64px", textAlign : isSmallScreen ? "center" : "start", letterSpacing: '.1rem', fontSize: isSmallScreen ? "1rem" : "", }}>
            <h2>Restaurants with online food delivery in Pune</h2>
          </Box>
          <CardContainer>
            {filteredRestaurants.map((restaurant) => (
              <Link key={restaurant.info.id} to={'/restaurantmenu/' + restaurant.info.id}>
                {restaurant.info.promoted ? (
                  <RestaurantCardPromoted {...restaurant?.info} />
                ) : (
                  <Card key={restaurant?.info?.id} {...restaurant?.info} />
                )}
              </Link>
            ))}
          </CardContainer>
        </>
      )}
    </>
  );
};

export default Restaurants;
