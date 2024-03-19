import React from 'react';
import { ChecklistMain } from './Checklist_Main';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper'; // Import Paper for the header box
import Typography from '@mui/material/Typography'; // For text in the header
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


import { useNavigate } from 'react-router-dom';
const ModifyDefaultChecklist = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  const imageUrl = "/Cargo.svg";
  const navigate = useNavigate();

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    const paths = ['/predep', '/engine', '/safety', '/logistics', '/hospitality'];
    navigate(paths[index]);
  };

  const listHeaderBox = (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 220,
      marginBottom: 2,
    }}>
      <Paper sx={{ 
        width: '100%',
        textAlign: 'center',
        padding: '8px',
        bgcolor: '#C13B1B',
        color: 'white',
      }}>
        <Typography variant="h6">Department</Typography>
      </Paper>
    </Box>
  );

  const listBoxItems = (
    <List component="nav" sx={{ 
      background: 'white', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      width: 220,
      padding: 0,
    }}>
      {['Deck', 'Engine', 'Safety', 'Logistics', 'Hospitality'].map((text, index) => (
        <ListItemButton
          key={text}
          onClick={(event) => handleListItemClick(event, index)}
          sx={{
            bgcolor: selectedIndex === index ? '#00bfff' : 'inherit',
            color: selectedIndex === index ? 'white' : 'inherit',
            '&:hover': {
              bgcolor: '#00bfff',
              color: 'white',
            },
            justifyContent: 'center',
            width: '100%',
            textAlign: 'center',
          }}
        >
          <ListItemText primary={text} sx={{ textAlign: 'center' }} />
        </ListItemButton>
      ))}
    </List>
  );
  
  const listBoxContent = (
   

    <Box sx={{ background: '#C7C8CC', width: 220, borderRadius: '4px' }}>
      {listHeaderBox}
      {listBoxItems}
      
    </Box>
  );
 
  return (
    <ChecklistMain
      content={<Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 300,
            height: 300,
          }}
        >
          <img src={imageUrl} alt="Description" style={{ maxWidth: '100%', maxHeight: '100%', paddingTop: 100 }} />
        
        </Box>
        <Box
      sx={{
        position: 'relative',
        bottom: -30,
        right:-250,
        //left: -390,
        //display: 'flex',
        alignItems: 'center',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <IconButton
        onClick={() => navigate('/createchecklist')} 
        sx={{
          color: 'white',
          bgcolor: 'black',
          borderRadius: '4px', // Rounded corners
          border: '1px solid #ccc', // Keyboard key-like border
          '&:hover': {
            bgcolor: 'blue',
          },
        }}
      >
        {/*<CustomLeftArrowIcon sx={{ fontSize:40 }}/>*/}
        <ArrowBackIcon/>
        {isHovered && (
        <Typography variant="button" sx={{ color: 'white' }}>
          Back
        </Typography>
      )}
      </IconButton>     
    </Box>
        </Box>
      }
      additionalContent={listBoxContent}
      boxStyle={{ background: '#C7C8CC' }}
    />
  );
};

export default ModifyDefaultChecklist;
