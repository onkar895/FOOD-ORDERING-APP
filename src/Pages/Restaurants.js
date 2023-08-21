import React, { useEffect, useState } from 'react';
import Card from '../Components/Cards/Card';
import { Box, styled, Button, TextField } from '@mui/material';
import { SWIGGY_API_URL } from '../Constants';
import Shimmer from '../Components/Shimmer';

const CardContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
`;

const SearchContainer = styled(Box)`
  position: relative;
  display: flex;
  justify-content: center; /* Changed to 'flex-end' for better alignment */
  align-items: center;
  margin-top: 40px;

  & > input {
    font-family: "Trebuchet MS";
    border-radius: 5px;
    color: grey;
  }
`;

const ButtonContainer = styled(Button)`
display : flex;
align-items : center;
justify-content : center;
margin-top: 38px;
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
margin: 6rem 4.8rem 0 0;
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

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  // empty dependency array :  once after render
  // dep array [searchInput] : once after initial render + everytime after render (my searchInput changes)
  useEffect(() => {
    //API Call
    getRestaurants();
  }, []);

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

  const handleSearchInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);

    // Filter the restraunt cards and update the UI
    const filteredData = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredRestaurants(filteredData);
  };

  // NOT render component (Early return)
  if (!listOfRestaurants) return null;

  // Conditional Rendering
  // if restaurant is empty => shimmer UI
  // if restaurant has data => actual Data shown
  return (
      <>
      <Box>
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
            onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            )
            setFilteredRestaurants(filteredList)
            }}>
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
                   {filteredRestaurants.map((restaurant) => (
                   <Card key={restaurant?.info?.id} {...restaurant?.info} />
                 ))}
              </CardContainer>
            </>
        )}
      </Box>
    </>
  )
}

export default Restaurants
