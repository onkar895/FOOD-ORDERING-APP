import React from 'react'
import { Box, styled, Typography, Button } from '@mui/material'
import { SWIGGY_MENU_IMG_API } from '../../../utils/Constants'
import DemoImage from '../../Assets/DemoImage.jpg'

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

  & > span {
    font-size: 10px;
  }
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


const ItemList = ({items}) => {
  return (
    <Box>
      {
          items && items.map((item) => (
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
    </Box>
  )
}

export default ItemList
