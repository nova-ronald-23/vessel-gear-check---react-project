import React from 'react';
import { ChecklistMain } from './Checklist_Main';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';


const DefaultChecklistPage = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  const imageUrl = "/Cargo.svg";
  const navigate = useNavigate();

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    const paths = ['/Departuremain', '/Arrivalmain'];
    navigate(paths[index]);
  };

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
          <img src={imageUrl} alt="Description" style={{ maxWidth: '100%', maxHeight: '100%', paddingTop: 20 }} />
        </Box>
        <Box
          sx={{
            position: 'relative',
            bottom: -30,
            right: -250,
            alignItems: 'center',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <IconButton
            onClick={() => navigate('/checklistmain')}
            sx={{
              color: 'white',
              bgcolor: 'black',
              borderRadius: '4px',
              border: '1px solid #ccc',
              '&:hover': {
                bgcolor: 'blue',
              },
            }}
          >
            <ArrowBackIcon />
            {isHovered && (
              <Typography variant="button" sx={{ color: 'white' }}>
                Back
              </Typography>
            )}
          </IconButton>
        </Box>
      </Box>}
      additionalContent={
        <Box sx={{ background: '#C7C8CC', width: 220, borderRadius: '4px' }}>
          <div className='checkbody'>
        
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
                <Typography variant="h6">Order</Typography>
              </Paper>
            </Box>
          </div>
          <Paper
            elevation={3}
            sx={{
              width: '88%',
              textAlign: 'center',
              padding: '8px',
              bgcolor: '#6C63FF',
              color: 'white',
              marginLeft: "5px",
              marginBottom: '10px',
              borderRadius: "5px",
            }}
            onClick={() => console.log("Blue Button Clicked")}
          >
            <Typography variant="subtitle1">Type</Typography>
          </Paper>
          <List component="nav" sx={{
            background: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: 220,
            padding: 0,
          }}>
            {['Pre - Departure', 'Pre - Arrival'].map((text, index) => (
              <ListItemButton
                key={text}
                onClick={(event) => handleListItemClick(event, index)}
                sx={{
                  bgcolor: selectedIndex === index ? '#C7C8CC' : 'inherit',
                  color: selectedIndex === index ? 'black' : 'inherit',
                  '&:hover': {
                    bgcolor: '#C7C8CC',
                    color: 'black',
                  },
                  justifyContent: 'center',
                  width: '80%',
                  textAlign: 'center',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  marginBottom: '8px',
                  marginTop: '8px',
                }}
              >
                <ListItemText primary={text} sx={{ textAlign: 'center' }} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      }
      boxStyle={{ background: '#C7C8CC' }}
    />
  );
};

export default DefaultChecklistPage;
