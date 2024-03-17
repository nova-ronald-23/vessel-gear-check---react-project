import React from 'react';

import Box from '@mui/material/Box';
import { Paper } from '@mui/material';

import { ChecklistMain } from './Checklist_Main';
import { imageUrl } from './Checklist_Main';
import modifydefult from'./modifydefult';


  
// CreateChecklistPage.js

const createChecklistButtons = [
    { text: "New Checklist", path: "/new-checklist" },
    { text: "Modify Default", path: "/modifydefult" },
    { text: "Back", path: "/checklistmain",sx: { backgroundColor: 'blue', color: 'white' }  },
  ];
  
  
  export const CreateChecklistPage = () => {
    return (
      

    <Box>
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
        buttons={createChecklistButtons}
      /></Box>
    );
  };
  
  export default CreateChecklistPage;