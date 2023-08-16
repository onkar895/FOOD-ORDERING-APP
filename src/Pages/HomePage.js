import React, {useEffect, useState} from 'react'
import HeaderBanner from '../Components/Banner/HeaderBanner'
import SubBanner from '../Components/Banner/SubBanner'
import Card from '../Components/Cards/Card'
import { Box, styled } from '@mui/material'
import { RestaurantList, SWIGGY_CDN_LINK } from '../Constants'
import SearchIcon from '@mui/icons-material/Search';
import { SWIGGY_API_URL } from '../Constants'

const CardContainer = styled(Box)`
display : flex;
flex-wrap : wrap;
`

const SearchContainer = styled(Box)`
    position: relative;
    display: flex;
    justify-content: end;
    align-items: center;
    margin-top :40px;
   
    & > input {
    font-family: "Trebuchet MS";
    width: 45vw;
    padding: 18px;
    background : #E5E4E2;
    border : none;
    border-radius: 8px;
    color: grey; 
    }
`

const SearchIconBox = styled(Box)`
 position: absolute; 
 cursor: pointer;
 padding: 4.5px 10px 0 0;
 

 :hover {
   color : #ff6b08;
 }
`

const filteredRestaurants = (searchInput, restaurants) => {
    const filterData = restaurants.filter((restaurant) =>
      restaurant?.data?.name.toLowerCase().includes(searchInput.toLowerCase())
       // The includes method checks if the string it's called on contains the specified substring.
    )
    return filterData
  }

const HomePage = () => {

  const [searchInput, setSearchInput] = useState("")

  const [restaurants, setRestaurants] = useState(RestaurantList)

  // empty dependency array :  once after render
  // dep array [searchInput] : once after initial render + everytime after render (my searchInput changes)
  useEffect(() => {
    // API Call
    getRestaurants()
  }, []);

  const getRestaurants = async () => {
    try {
      const data = await fetch(SWIGGY_API_URL)
      const json = await data.json();
      // Optional Chaining ?
      setRestaurants(json?.data?.cards[i])
    } catch (error) {
      console.log(error,"error while getting the restaurants")
    }
    
  }

  console.log("render")
  
  return (
    <Box>
      <HeaderBanner />
      <SubBanner />

    <Box sx={{display : 'flex', justifyContent: 'center', alignItems:'center'}}>
      <SearchContainer>
          <input
            type='text'
            placeholder=' Search for Restaurants and Food....'
            name='search'
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value)
              const data = filteredRestaurants(e.target.value, RestaurantList);
              setRestaurants(data);
            }}
        />
        <SearchIconBox>
          <SearchIcon  sx={{fontSize:'30px'}}/>
        </SearchIconBox>
          
      </SearchContainer>
    </Box>
    
      
      <Box sx={{margin: '20px 0 0 35px'}}>
      <h2>Restaurants with online food delivery in Pune</h2>
      </Box>
     
      <CardContainer>
        {
          restaurants.map((restaurant) => {
            return <Card key={restaurant.data.id} {...restaurant.data} />
          })
        }
      </CardContainer>
    </Box>
  )
}

export default HomePage
