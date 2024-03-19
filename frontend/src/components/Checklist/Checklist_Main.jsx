import * as React from 'react';

import { useNavigate } from 'react-router-dom';


import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

//import './checklist.css';


// ChecklistMain.js
export function ChecklistMain({ content, buttons = [], additionalContent, boxStyle,bottomborder, showCard = true }) {
  return (
    
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {  m: 2,
          width: 800,
          height: 'auto',
          ...boxStyle,
          ...bottomborder,
        },
      }}
    >
      <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'row',justifyContent: 'center', // Center children vertically
        alignItems: 'center', 
        width: '100%', 
        height: '100%',}}>
        {showCard ? (
          <Card sx={{ 
            width: 220, 
            height: 300, 
            m: 10, 
            background: '#C7C8CC', 
            borderRadius: 9,
            border: 'none',
            boxShadow: 'none',
          }}>
            {additionalContent ? (
              additionalContent
            ) : (
              buttons && Array.isArray(buttons) && (
                <CardActions sx={{ display: 'flex', flexDirection: 'column', m: 5 }}>
                  {buttons.map((button, index) => (
                    <ReusableButton key={index} buttonText={button.text} to={button.path} sx={button.sx}  />
                  ))}
                </CardActions>
              )
            )}
          </Card>
        ) : null}
        {content}
      </Paper>
    </Box>
    
  );
}


  

export const imageUrl = '/i1.png'
// Define the reusable button component with props for the button text
export function ReusableButton({ buttonText, to, sx,onClick }) {
  const navigate = useNavigate();

  // Adjusted handleClick to use navigate for `to` prop navigation
  const handleClick = (event) => {
    event.preventDefault(); // Prevent default to stop any link navigation
    if (onClick) {
      onClick(); // Execute custom logic if onClick is provided
    } else if (to) {
      navigate(to); // Programmatically navigate if `to` prop is provided
    }
  };
    return (
      <Button
      component={Link} //Use the Link component
      to={to} // Navigate to the route specified in the "to" prop
      variant='contained'
      sx={{
        bgcolor: 'white',
        color: 'black',
        borderRadius: 5,
        '&:hover': {
          bgcolor: 'black',//'#42a5f5',
          color: 'white',
          borderRadius: 5,
          
        },
        ...sx,
        m: 1,
          width: 200,
      }}
      onClick={handleClick}
    >
      {buttonText}
    </Button>
    );
  }

// ChecklistMainContent.js

const buttons = [
  { text: "Create Checklist", path: "/new-checklist" },
  { text: "Default Checklist", path: "/default-checklist" },
  { text: "Properties", path: "/properties" },
];

const ChecklistMainContent = () => {
  return (<Box>
    <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      width: 800,
      height:50,
      mt: 2,
      ml: 2,
    }}
  >
    <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'row',justifyContent: 'center', // Center children vertically
      alignItems: 'center', // Center children horizontally
      width: '100%', // Take up 100% of the parent's width
      height: '100%',fontWeight:'bold'}}>
      Checklist
    </Paper>
  </Box>
    <ChecklistMain
      content={
       
   
        <Box
          sx={{
            width: 350,
            height: 300,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 12,
          }}
        >
          <img src={imageUrl} alt="Description" style={{ maxWidth: '100%', maxHeight: '100%' }} />
          
        </Box>
        
      }
      buttons={buttons}
    /></Box>
  );
};

export default ChecklistMainContent;