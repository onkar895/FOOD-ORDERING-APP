import React, { useEffect, useState } from 'react';
import Card, {withPromotedLabel} from '../Components/Cards/Card'
import { Box, styled, Button, TextField } from '@mui/material';
import { SWIGGY_API_URL } from '../../utils/Constants';
import Shimmer from '../Components/Shimmer/Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../../utils/useOnlineStatus';

const MainBox = styled(Box)`
// background-image: linear-gradient(to bottom, rgba(238, 194, 174, 0) 0%, rgba(230, 99, 103, 0.1) 100%);
`

const CardContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  padding-bottom : 2rem;

  & > a {
     text-decoration: none;
  }
`

const SearchContainer = styled(Box)`
  position: relative;
  display: flex;
  justify-content: center; /* Changed to 'flex-end' for better alignment */
  align-items: center;

  & > input {
    font-family: "Trebuchet MS";
    border-radius: 5px;
    color: grey;
  }
`

const ButtonContainer = styled(Button)`
display : flex;
align-items : center;
justify-content : center;
padding : 7.5px 25px;
text-transform : capitalize;
border-radius : 5px;
background : rgb(211,47,47);
font-family: "Trebuchet MS";

:hover {
background : rgb(211,47,47);
}
`

const ButtonBox = styled(Button)`
text-transform : capitalize;
margin: 3.6rem 4rem 0 0;
width : 16vw;
height : 6.5vh;
border : 1.5px solid rgb(211,47,47);
font-weight : bold;

:hover {
background : rgb(211,47,47);
color : white;
}
`

const Restaurants = () => {

   // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const RestaurantCardPromoted = withPromotedLabel(Card)

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  // empty dependency array :  once after render
  // dep array [searchInput] : once after initial render + everytime after render (my searchInput changes)
  useEffect(() => {
    //API Call
    getRestaurants();
  }, []);

  console.log(listOfRestaurants)

  const getRestaurants = async () => {
    try {
      const data = await fetch(SWIGGY_API_URL);
      const json = await data.json();

      // Optional Chaining
      const restaurants = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      
      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.log(error, "error while getting the restaurants");
    }
  };

  // Using Custom hook here
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1 style={{ marginTop: '6rem', textAlign:'center', color:'red' }}>
        Looks like you're offline!! Please check your internet connection
      </h1>
  )

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
      (res) => res.info.avgRating > 4
    );
    setFilteredRestaurants(filteredList);
  };

  

  // NOT render component (Early return)
  if (!listOfRestaurants) return <h1 style={{marginTop:'8rem', textAlign:'center', color:'red'}}>SORRY, RESTAURANTS  NOT AVAILABLE AT THE MOMENT, <br/> PLZ TRY AGAIN LATER</h1>


  // Conditional Rendering
  // if restaurant is empty => shimmer UI
  // if restaurant has data => actual Data shown
  return (
      <>
      <MainBox>
        <Box sx={{display : 'flex', justifyContent:'space-between'}}>
          <Box sx={{ display: 'flex', gap: '10px', justifyContent: 'start', alignItems: 'center', margin: '60px 0 0 64px' }}>
            <SearchContainer>
              <TextField sx={{ width: '32vw'}}
                variant='outlined'
                color='error' 
                size='small'
                fullWidth required
                type='text'
                placeholder='Search for Restaurants and Food....'
                name='search'
                value={searchInput}
                onChange={handleSearchInputChange}
              />
            </SearchContainer>
        
            <ButtonContainer
              variant='contained'>
               Search
            </ButtonContainer>
          </Box>

          <ButtonBox
            variant='outlined'
            color='error'
            size ='small'
            onClick={handleTopRatedClick}>
              Top Rated Restaurants
          </ButtonBox>
        </Box>

        {
          listOfRestaurants.length === 0 ? (
           <Shimmer />
          ) : (
            <>
              <Box sx={{ margin: '30px 0 0 64px' }}>
                  <h2>Restaurants with online food delivery in Pune</h2>
              </Box>
              <CardContainer>
                 {/* mapping restaurants array and passing JSON array data to Card component as props with unique key as restaurant.info.id */}
                  {
                    filteredRestaurants.map((restaurant) => (
                     <Link
                       key={restaurant.info.id}
                       to={"/restaurantmenu/" + restaurant.info.id}>
                       {
                          restaurant.info.promoted
                            ? (<RestaurantCardPromoted {...restaurant?.info} />)
                            : (<Card key={restaurant?.info?.id} {...restaurant?.info} />)
                       }
                        
                     </Link>
                    ))
                  }
              </CardContainer>
            </>
        )}
      </MainBox>
    </>
  )
}

export default Restaurants
