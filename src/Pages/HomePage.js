import React, {useState} from 'react'
import HeaderBanner from '../Components/Banner/HeaderBanner'
import SubBanner from '../Components/Banner/SubBanner'
import Card from '../Components/Cards/Card'
import { Box, styled } from '@mui/material'
import { RestaurantList } from '../Constants'
import SearchIcon from '@mui/icons-material/Search';

const CardContainer = styled(Box)`
display : flex;
flex-wrap : wrap;
`

const SearchContainer = styled(Box)`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top :40px;
   
    & > input {
    font-family: "Trebuchet MS";
    width: 45vw;
    padding: 12px;
    border-radius: 5px;
    color: grey; 
    }
`

const SearchIconBox = styled(Box)`
 position: absolute; 
 margin : 0 0.3rem 0 33rem;
 cursor: pointer;
 padding-top : 4.5px;

 :hover {
   color : #ff6b08;
 }
`

const filteredRestaurants = (searchInput, restaurants) => {
    const filterData = restaurants.filter((restaurant) =>
       restaurant?.data?.name.toLowerCase().includes(searchInput.toLowerCase())  // The includes method checks if the string it's called on contains the specified substring.
    )
    return filterData
  }

const HomePage = () => {

  const [searchInput, setSearchInput] = useState("")

  const [restaurants, setRestaurants] = useState(RestaurantList)

  return (
    <Box>
      <HeaderBanner />
      <SubBanner />

      <SearchContainer>
          <input
            type='text'
            placeholder=' Search for Restaurants and Food....'
            name='search'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
        />
        <SearchIconBox>
        <SearchIcon  sx={{fontSize:'30px'}}
            onClick={() => {
              const data = filteredRestaurants(searchInput, restaurants)
              setRestaurants(data)
            }}
          />
        </SearchIconBox>
      </SearchContainer>
      
      
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
