import React, {useState} from 'react'
import HeaderBanner from '../Components/Banner/HeaderBanner'
import SubBanner from '../Components/Banner/SubBanner'
import Card from '../Components/Cards/Card'
import SearchIcon from '../Assets/SearchIcon.png'
import { Box, styled } from '@mui/material'
import { RestaurantList } from '../Constants'

const CardContainer = styled(Box)`
display : flex;
flex-wrap : wrap;
`

const SearchContainer = styled(Box)`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right : 2rem;

    & > input {
    font-family: "Trebuchet MS";
    width: 35vw;
    padding: 12px;
    border-radius: 5px;
    color: grey; 
    }

    & img {
    position: absolute;
    width: 2.2vw;
    margin-right: 5px;
    cursor: pointer;
    margin-left : 25rem;
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
      <Box sx={{margin: '40px 0 0 35px', display : 'flex', justifyContent: 'space-between',
    alignItems: 'center'}}>
      <h2>Restaurants with online food delivery in Pune</h2>
        <SearchContainer>
          <input
            type='text'
            placeholder=' Search for Restaurants and Food....' name='search'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <img src={SearchIcon} alt='SearchIcon'
            onClick={() => {
              const data = filteredRestaurants(searchInput, restaurants)
              setRestaurants(data)
            }}
          />
        </SearchContainer>
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
