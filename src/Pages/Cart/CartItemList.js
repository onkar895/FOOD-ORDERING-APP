import React from 'react'
import { Box, styled, Typography} from '@mui/material'
import { SWIGGY_MENU_IMG_API } from '../../../utils/Constants'
import DemoImage from '../../Assets/DemoImage.jpg'
import { useDispatch } from 'react-redux'
import { addItem, removeItem } from '../../Store/cartSlice'
import { useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import {ToastContainer, toast } from 'react-toastify'


const MainContainer = styled(Box)`
display  :flex;
justify-content:  space-between;
align-items : center;
margin-top : 1rem;
padding : 20px;
gap : 20px;
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
`

const AddRemoveBox = styled(Box)`
display : flex;
align-items : center;
box-shadow : 0 0 5px 0  rgba(208,208,208,0.8);
margin-left : 2rem;
color :grey;

& > button {
padding : 10px 18px;
background : none;
border : none;

:hover {
  cursor : pointer;
  color : rgb(211,47,47);
}
}
`

const RemoveItemBox = styled(Box)`
cursor : pointer;
margin-left : 1.5rem;

:hover {
  color : rgb(211,47,47);
}
`

const CartItemList = ({ items, dummy }) => { 
  // console.log(dummy)

  const dispatch = useDispatch()

   const cartItems = useSelector((store) => store.cart.items)

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item)) ?
      toast.success("Added to Cart", {
          position: "top-center",
        }) :
      toast.error("Not Added", {
           position: "top-center",
        })
    // So here, whatever you pass inside the addItem , it will go as a 2nd argument in addItems function inside the action.payload 
    //  console.log(item)
  }

  const handleRemoveItem = (item) => {
    // Dispatch an action
    dispatch(removeItem(item)) ?
      toast.success("Removed from Cart", {
        position: "top-center",
      }) :
      toast.error("Not Removed", {
        position: "top-center",
      })
  }

  return (
    <Box>
      {
          items && items.map((item) => (
            <>
              <MainContainer>
                <MenuImageBox>
                  <img src={item.card.info.imageId ? SWIGGY_MENU_IMG_API + item.card.info.imageId : DemoImage} alt={""} />
                </MenuImageBox>
                <CardContent key={item?.card.info.id}>
                  
                <Box>
                  <Typography>{item.card.info.name}</Typography>
                </Box>
                
                <PriceBox>
                    <h4>{"₹"} {(item.card.info.price / 100 || item.card.info.defaultPrice/100).toFixed(0)}</h4>
                    <h6>50% OFF | <span>USE FOODIEIT</span></h6>
                </PriceBox>
                  
                </CardContent>

                <AddRemoveBox>
                  <button onClick={() => handleRemoveItem(item)}><h4>-</h4></button>
                  <span> {cartItems.length }</span>
                  <button onClick={() => handleAddItem(item)}><h4>+</h4></button>
                </AddRemoveBox>
                <RemoveItemBox onClick={() => handleRemoveItem(item)}>
                  <CloseIcon />
                </RemoveItemBox>

            </MainContainer>
            <ToastContainer/>
          </>
          )
          )
        }
    </Box>
  )
}


export default CartItemList
