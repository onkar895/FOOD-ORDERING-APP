import React from 'react'
import { Accordion, Box, Typography, AccordionSummary, AccordionDetails, styled } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ItemList from '../../Pages/RestaurantMenu/ItemList'


const Header = styled(Box)`
margin-top : 20px;

& span {
  font-size: 18px;
  font-weight : 900;
}
`

const RestaurantCategory = ({data}) => {
  // console.log(data)
  return (
    <Header>

      <Accordion sx={{padding:'10px 0'}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
          <Typography variant='span'>
            {data.title} ({data.itemCards.length})
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ItemList items={data.itemCards} />
        </AccordionDetails>
      </Accordion>

    </Header>
  )
}

export default RestaurantCategory
