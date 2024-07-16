import React from 'react'
import { Accordion, Box, Typography, AccordionSummary, AccordionDetails, styled } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ItemList from '../../Pages/RestaurantMenu/ItemList'

const Header = styled(Box)(({ theme }) => ({
  marginTop: '20px',
  '& span': {
    fontSize: '18px',
    fontWeight: 900
  },
  [theme.breakpoints.down('md')]: {
    marginTop: '15px',
    '& span': {
      fontSize: '16px'
    }
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '10px',
    '& span': {
      fontSize: '14px'
    }
  },
  [theme.breakpoints.down('xs')]: {
    marginTop: '5px',
    '& span': {
      fontSize: '12px'
    }
  }
}))

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  padding: '10px 0',
  boxShadow: '1px 1px 3px darkgray',
  [theme.breakpoints.down('md')]: {
    padding: '8px 0'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '6px 0'
  },
  [theme.breakpoints.down('xs')]: {
    padding: '4px 0'
  }
}))

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  '& .MuiAccordionSummary-expandIcon': {
    fontSize: '30px'
  },
  [theme.breakpoints.down('md')]: {
    '& .MuiAccordionSummary-expandIcon': {
      fontSize: '28px'
    }
  },
  [theme.breakpoints.down('sm')]: {
    '& .MuiAccordionSummary-expandIcon': {
      fontSize: '26px'
    }
  },
  [theme.breakpoints.down('xs')]: {
    '& .MuiAccordionSummary-expandIcon': {
      fontSize: '24px'
    }
  }
}))

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: 900,
  [theme.breakpoints.down('md')]: {
    fontSize: '16px'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px'
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '12px'
  }
}))

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  const handleClick = () => {
    setShowIndex()
  }

  return (
    <Header>
      <StyledAccordion onClick={handleClick}>
        <StyledAccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
          <StyledTypography variant='span'>
            {data.title} (
            {data.itemCards.length})
          </StyledTypography>
        </StyledAccordionSummary>
        <AccordionDetails>
          {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
        </AccordionDetails>
      </StyledAccordion>
    </Header>
  )
}

export default RestaurantCategory
