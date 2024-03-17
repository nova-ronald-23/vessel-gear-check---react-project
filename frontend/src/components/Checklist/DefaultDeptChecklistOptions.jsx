import React from 'react';
import { useState} from 'react';
import { ChecklistMain } from './Checklist_Main';
import { ReusableButton } from './Checklist_Main';
import { useNavigate } from 'react-router-dom';

import {  useSelector,useDispatch } from 'react-redux';
import { setNextPath } from './actions/navigationActions';
import { setNavigationFromDeck } from './actions/navigationActions';
import { setOriginPath } from './actions/navigationActions';

import { Box, TextField, RadioGroup, FormControlLabel, Radio, IconButton,Card} from '@mui/material';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'; // Import the right arrow icon
import NotesIcon from '@mui/icons-material/Notes';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Sidebar from '../Sidebar';

// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';

/***************************************************InfoBox********************************************/
const imageUrl='ship3.png'

const InfoBox = ({ labelText, path, origin }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    
    dispatch(setNavigationFromDeck(true)); // Indicate navigation from DeckComponent
    dispatch(setOriginPath(origin)); // Set the origin path
    navigate(path);
  
  };

  return (
    <div className='checklist'>
      <Sidebar/>
          <Box
      sx={{
        display: 'flex',
        
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 2,
        border: '1px solid #C7C8CC',
        borderRadius: '4px',
        backgroundColor:'white',
        width: '180%',
        height: 10,
        maxWidth: 600,
        marginBottom: 2,
        cursor: 'pointer',
        '&:hover': {
          bgcolor: '#00bfff',
          color: 'white',
        },
      }}
      onClick={handleClick}
    >
      <Typography variant="h6">{labelText}</Typography>
      <ArrowForwardIosIcon />
    </Box>
    </div>
  );
};

export default InfoBox;
/*************************************************DeckComponent********************************************/
export const DefaultDeckComponent = () => {

  const navigate=useNavigate();
  

  const handleBack1=()=>{
    navigate('/default-checklist');
  }
 

  const deckContent = (<Box>
    <Box  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <InfoBox labelText="Documentation" path="/default-documentation" origin="/default-deck" />
      <InfoBox labelText="External hull & pre boarding" path="/default-external-hull-pre-boarding" origin="/default-deck" />
      <InfoBox labelText="ISM Code" path="/default-ism-code" origin="/default-deck" />
      <InfoBox labelText="Wheel house" path="/default-wheel-house" origin="/default-deck" />
      <InfoBox labelText="Radio" path="/default-radio" origin="/default-deck" />
      <InfoBox labelText="Common check" path="/default-common-check" origin="/default-deck" />
      <InfoBox labelText="Deck hours of rest & fatigue" path="/default-deck-hours-rest-fatigue" origin="/default-deck" />

      
    </Box></Box>
  );

  return <ChecklistMain content={<Box>{deckContent}
  <Box sx={{ display: 'flex', justifyContent:'center' }}>
        <ReusableButton sx={{ backgroundColor: 'black', color: 'white' }} onClick={handleBack1} buttonText={'Back'} />
      </Box>
       </Box>} showCard={false} boxStyle={{ background: '#C7C8CC'}} bottomborder={{borderBottom:'150px solid blue',pt:15,maxHeight:300,m: 2}}/>;
};
/***********************************************EngineComponent*************************************************/
export const DefaultEngineComponent = () => {
  
  const navigate=useNavigate();
  const handleBack1=()=>{
    navigate('/default-checklist');
  }
  const engineContent = (<Box>
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <InfoBox labelText="Engine Room checks" path="/default-engineroomcheck" origin="/default-engine" />
     

      
    </Box></Box>
  );

  return <ChecklistMain content={<Box>{engineContent}
  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <ReusableButton sx={{ backgroundColor: 'black', color: 'white' }} onClick={handleBack1} buttonText={'Back'} />
    </Box>
  </Box>} showCard={false} boxStyle={{ background: '#C7C8CC' }}bottomborder={{borderBottom:'150px solid blue',pt:10,m: 2}}/>;
};
/**********************************************SafetyComponent***********************************************/
export const DefaultSafetyComponent = () => {
  const navigate=useNavigate();
  const handleBack1=()=>{
    navigate('/modify-default-checklist');
  }
    // Define the content specific for the Safety component
    const safetyContent =(
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

      
      <InfoBox labelText="The Ship/Shore Safety Check" path="/default-shore" origin="/default-safety" />
      <InfoBox labelText="Damage control plans check" path="/default-damagecontrol" origin="/default-safety" />
      <InfoBox labelText="Fire protection system check " path="/default-fireprotect" origin="/default-safety" />
      <InfoBox labelText="Survival Craft" path="/default-survival" origin="/default-safety" />
      <InfoBox labelText="inert gas system (IGS)" path="/default-igs" origin="/default-safety" />
      <InfoBox labelText="Crude Oil system" path="/default-crude-oil" origin="/default-safety" />
      <InfoBox labelText="Bulk Liquid Chemicals" path="/default-liquid-chemicals" origin="/default-safety"/>
      <InfoBox labelText="Bulk Liquefied Gases" path="/default-liquefied-gases" origin="/default-safety" />

      
    </Box>

    );
  
    return <ChecklistMain content={<Box>{safetyContent}
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
    <ReusableButton sx={{ backgroundColor: 'black', color: 'white' }} onClick={handleBack1} buttonText={'Back'} />
  </Box></Box>} showCard={false} boxStyle={{ background: '#C7C8CC' }} bottomborder={{borderBottom:'150px solid blue',pt:15,maxHeight:300,m: 2}}/>
    
  };
/**************************************************LogisticsComponent*********************************************/
  export const DefaultLogisticsComponent = () => {
    const navigate=useNavigate();
  const handleBack1=()=>{
    navigate('/default-checklist');
  }
    // Define the content specific for the Logistics component
    const logisticsContent = (<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>    
    <InfoBox labelText="Container check" path="/default-containerlogistics" origin="/default-logistics" />
  </Box>);
  
    return (
      <ChecklistMain
        content={<Box>{logisticsContent}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <ReusableButton sx={{ backgroundColor: 'black', color: 'white' }} onClick={handleBack1} buttonText={'Back'} />
      </Box>
      </Box>} showCard={false} boxStyle={{ background: '#C7C8CC' }} bottomborder={{borderBottom:'150px solid blue', pt:5,m: 2}}
       
      />
    );
  };
/************************************************HospitalityComponent************************************************/
  export const DefaultHospitalityComponent = () => {
    const navigate=useNavigate();
  const handleBack1=()=>{
    navigate('/modify-default-checklist');
  }
    // Define the content specific for the Hospitality component
    const hospitalityContent = (<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>    
    <InfoBox labelText="Accomodation/Catering" path="/default-accomodationhospitality" origin="/default-hospitality" />
  </Box>);
  
    return (
      <ChecklistMain
        content={<Box>{hospitalityContent}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <ReusableButton sx={{ backgroundColor: 'black', color: 'white' }} onClick={handleBack1} buttonText={'Back'} />
      </Box>
      </Box>} showCard={false} boxStyle={{ background: '#C7C8CC' }} bottomborder={{borderBottom:'150px solid blue', pt:5,m: 2}}
    
      />
    );
  };

/**************************************************************************************************************/
/**************************************************************************************************************/
/**************************************************************************************************************/

/**********************************************SubmissionComponent****************************************/

  export const SubmissionComponent = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { originPath } = useSelector(state => state.navigation);

  //const location = useLocation();
  const nextPath = useSelector(state => state.navigation?.nextPath);
  // Use a selector to get the whole navigation state first
  //const navigation = useSelector(state => state.navigation);
   // Safely access nextPath using optional chaining
  // const nextPath = navigation?.nextPath;

  //const { nextPath } = useSelector(state => state.navigation.nextPath);
 
  console.log(nextPath); // Debug: Check if nextPath is correctly received
  // Immediately log the state upon component render
  console.log("State on render: ", nextPath);

 
  console.log("SubmissionComponent Rendered with nextPath:", nextPath);

  const handleSaveAndContinue = () => {
    console.log("Handle Save And Continue Clicked");
    console.log("Attempting to navigate to:", nextPath); // Debug
    if (nextPath) {
      navigate(nextPath);
      dispatch(setNextPath(null)); // Reset next path in the state
      dispatch(setNavigationFromDeck(false)); // Reset navigation source
    }else {
      console.error("Next path not defined");
    }}

    const handleSaveAndFinish=()=>{
      //navigate(-2)
      navigate(originPath || '/'); // Navigate to the origin path or default path if not specified
    dispatch(setNextPath(null)); // Reset next path in the state
    dispatch(setOriginPath('')); // Reset origin path in the state
    }


    const buttons = [
      { text: "Save & Finish"},
      { text: "Save & Continue", specialStyle: true },
    ];
    
    return (
      <ChecklistMain content={
        <Box>
          <Card sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            p: 8, 
            m: 5,
            background: 'linear-gradient(90.37deg, #FFFFFF 1.67%, #A59FFF 36.1%, #6C63FF 62.64%, #2C1FFD 100%)',
            height: '100%' // Ensure the Card stretches to fit its content
          }}>
            <Box sx={{ 
              width: '100%', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between',
              height: '100%' // Make sure this Box takes up all available height
            }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
               
                {buttons.map((button, index) => (
                  button.specialStyle ? 
                  <ReusableButton onClick={handleSaveAndContinue}  sx={{ backgroundColor: 'orange' }} key={index} buttonText={button.text}  />
                  :
                  <ReusableButton onClick={handleSaveAndFinish} key={index} buttonText={button.text}  />
                ))}

         { /*<Button onClick={handleSaveAndContinue}  sx={{ backgroundColor: 'orange' }} >try</Button>*/}
              </Box>
              
            </Box>
          </Card>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <img src={imageUrl} alt="Description" style={{ maxWidth: '35%', maxHeight: '10%' }} />
              </Box>
        </Box>
      } boxStyle={{ background: '#C7C8CC' }} showCard={false} />
    );
};

/**************************************************************************************************************/
/**************************************************************************************************************/
/**************************************************************************************************************/



/*******************************************ChecklistQuestionTemplateComponent******************************/


export const ChecklistQuestionTemplateComponent = ({ questions, onSubmit, text }) => {
  const [questionsState, setQuestionsState] = useState(questions);
  const [notesStates, setNotesStates] = useState(questions.map(() => ({ showNotesInput: false, notes: '' })));
  const navigate = useNavigate();
  const dispatch = useDispatch();

   // Retrieve the state to determine if navigation came from DeckComponent
   const { fromDeck } = useSelector((state) => state.navigation);

  const handleRadioChange = (id, newValue) => {
    const updatedQuestions = questionsState.map(question =>
      question.id === id ? { ...question, selectedValue: newValue } : question
    );
    setQuestionsState(updatedQuestions);
  };

  const handleInputChange = (id, newText) => {
    const updatedQuestions = questionsState.map(question =>
      question.id === id ? { ...question, text: newText } : question
    );
    setQuestionsState(updatedQuestions);
  };

  const handleSaveNotes = (index) => {
    // Save notes functionality, you may dispatch an action to update state or send data to backend
    console.log('Notes saved:', notesStates[index].notes);
    const updatedNotesStates = [...notesStates];
    updatedNotesStates[index].showNotesInput = false;
    setNotesStates(updatedNotesStates);
  };

  const handleBlur = (id) => {
    const updatedQuestions = questionsState.map(question =>
      question.id === id ? { ...question, isEditable: false } : question
    );
    setQuestionsState(updatedQuestions);
  };
  const handleBack = () => {
    const navigateBackSteps = fromDeck ? -1 : -2;
    navigate(navigateBackSteps);
    // Optionally reset the fromDeck state if needed
    if (fromDeck) {
      dispatch(setNavigationFromDeck(false));
    }
  };

  const handleBackNotes = (index) => {
    // Handle back button functionality
    const updatedNotesStates = [...notesStates];
    updatedNotesStates[index].showNotesInput = false;
    setNotesStates(updatedNotesStates);
  };

  const buttons = [
    { text: "Back" },
    { text: "Submit", specialStyle: true },
  ];

  const ChecklistQuestionTemplateContent = <Box>
    {questionsState.map((question, index) => (
      <Card key={question.id} sx={{ p: 2, mb: 2, mt: 2, width: 700, borderLeft: '10px solid blue' }}>
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              fullWidth
              variant={question.isEditable ? "outlined" : "standard"}
              value={question.text}
              InputProps={{
                readOnly: !question.isEditable,
                disableUnderline: !question.isEditable
              }}
              onChange={(e) => handleInputChange(question.id, e.target.value)}
              onBlur={() => handleBlur(question.id)}
            />
            {!notesStates[index].showNotesInput && (
              <IconButton onClick={() => {
                const updatedNotesStates = [...notesStates];
                updatedNotesStates[index].showNotesInput = true;
                setNotesStates(updatedNotesStates);
              }}>
                <NotesIcon />
              </IconButton>
            )}
          </Box>
          {!notesStates[index].showNotesInput ? (
            <RadioGroup
              value={question.selectedValue}
              onChange={(e) => handleRadioChange(question.id, e.target.value)}
            >
              <FormControlLabel value="option1" control={<Radio />} label="Done" />
              <FormControlLabel value="option2" control={<Radio />} label="Not Yet Done" />
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <FormControlLabel value="option3" control={<Radio />} label="Not Applicable" />
              </Box>
            </RadioGroup>
          ) : (
            <Box>
              <TextField
                fullWidth
                multiline
                rows={4}
                value={notesStates[index].notes}
                onChange={(e) => {
                  const updatedNotesStates = [...notesStates];
                  updatedNotesStates[index].notes = e.target.value;
                  setNotesStates(updatedNotesStates);
                }}
                placeholder="Add a note..."
              />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <IconButton onClick={() => handleSaveNotes(index)} color="primary">
                  <SaveIcon />
                </IconButton>
                <IconButton onClick={() => handleBackNotes(index)} color="secondary">
                  <ArrowBackIcon />
                </IconButton>
              </Box>
            </Box>
          )}
        </Box>
      </Card>
    ))}
  </Box>;

  return (
    <ChecklistMain
      content={
        <Box>
          <Box>
            <Card sx={{ p: 2, mb: 2, mt: 2, width: 700, borderTop: '10px solid blue', fontWeight: "bold", fontSize: 20 }}>{text}</Card>
          </Box>
          {ChecklistQuestionTemplateContent}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            {buttons.map((button, index) => (
              button.specialStyle ?
                <ReusableButton onClick={onSubmit} sx={{ backgroundColor: 'orange' }} key={index} buttonText={button.text} />
                :
                <ReusableButton onClick={() => handleBack(index)} sx={{ backgroundColor: 'black', color: 'white' }} key={index} buttonText={button.text} />
            ))}
          </Box>
        </Box>
      }
      showCard={false}
    />
  );
};
/**************************************************************************************************************/
/**************************************************************************************************************/
/**************************************************************************************************************/

/***********************************************DocumentationComponent*****************************************/
 //Documentation Questions Structure
 const Documentationquestions = [
  { id: 1, text: 'What is the purpose of the documentation?', isEditable: false, selectedValue: 'option1' },
  { id: 2, text: 'How do you handle external hull inspections?', isEditable: false, selectedValue: 'option1' },
  { id: 3, text: 'Describe the ISM Code compliance process.', isEditable: false, selectedValue: 'option1' },
  // Add more questions as needed
];  

export const DefaultDocumentationComponent = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
      dispatch(setNextPath('/default-external-hull-pre-boarding'));// Set the next path
      //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
      navigate('/submission'); // Navigate to the submission component
      
    // Navigate to submission component as before
    };

    
  
    return (
      <Box>
        <ChecklistQuestionTemplateComponent questions={Documentationquestions}   onSubmit={handleSubmit} text='Documentation'  />
      </Box>
    );
  };
  
 /***********************************************ExternalHullPreBoardingComponent*****************************************/ 
 
 //externalHullPreBoarding Questions Structure
 const externalHullPreBoardingQuestions = [
  { id: 1, text: 'Question 1 for External Hull Pre-Boarding?', isEditable: false, selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for External Hull Pre-Boarding?', isEditable: false, selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for External Hull Pre-Boarding?', isEditable: false, selectedValue: 'option1' },
  // Add more questions as needed
];

 export const DefaultExternalHullPreBoardingComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
      dispatch(setNextPath('/default-ism-code'));// Set the next path
      //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
      navigate('/submission'); // Navigate to the submission component
      
    // Navigate to submission component as before
    };
    return <ChecklistQuestionTemplateComponent questions={externalHullPreBoardingQuestions} onSubmit={handleSubmit} text='External Hull PreBoarding' />;
  };
/***********************************************ISMCodeComponent*****************************************/

//WheelHouse Questions Structure
const WheelHouseQuestions = [
  { id: 1, text: 'Question 1 for WheelHouse?', isEditable: false, selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for WheelHouse?', isEditable: false, selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for WheelHouse?', isEditable: false, selectedValue: 'option1' },
  // Add more questions as needed
];

//ISMCode Questions Structure
const ISMCodeQuestions = [
  { id: 1, text: 'Question 1 for ISMCode?', isEditable: false, selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for ISMCode?', isEditable: false, selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for ISMCode?', isEditable: false, selectedValue: 'option1' },
  // Add more questions as needed
];

  export const DefaultISMCodeComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
      dispatch(setNextPath('/default-radio'));// Set the next path
      //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
      navigate('/submission'); // Navigate to the submission component
      
    // Navigate to submission component as before
    };
    return <ChecklistQuestionTemplateComponent questions={ISMCodeQuestions} onSubmit={handleSubmit} text='ISM Code'  />;
  };
/***********************************************RadioComponent*****************************************/

 //Radio Questions Structure
 const RadioQuestions = [
  { id: 1, text: 'Question 1 for Radio?', isEditable: false, selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for Radio?', isEditable: false, selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for Radio?', isEditable: false, selectedValue: 'option1' },
  // Add more questions as needed
];

  export const DefaultRadioComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
      dispatch(setNextPath('/default-wheel-house'));// Set the next path
      //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
      navigate('/submission'); // Navigate to the submission component
      
    // Navigate to submission component as before
    };
    return <ChecklistQuestionTemplateComponent questions={RadioQuestions} onSubmit={handleSubmit} text='Radio' />;
  };
/***********************************************WheelHouseComponent*****************************************/
  export const DefaultWheelHouseComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
      dispatch(setNextPath('/default-common-check'));// Set the next path
      //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
      navigate('/submission'); // Navigate to the submission component
      
    // Navigate to submission component as before
    };
    return <ChecklistQuestionTemplateComponent questions={WheelHouseQuestions} onSubmit={handleSubmit} text='Wheel House' />;
  };

 /***********************************************CommonCheckComponent*****************************************/ 
//CommonCheck Questions Structure
const CommonCheckQuestions = [
  { id: 1, text: 'Question 1 for CommonCheck?', isEditable: false, selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for CommonCheck?', isEditable: false, selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for CommonCheck?', isEditable: false, selectedValue: 'option1' },
  // Add more questions as needed
];


  export const DefaultCommonCheckComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
      dispatch(setNextPath('/default-deck-hours-rest-fatigue'));// Set the next path
      //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
      navigate('/submission'); // Navigate to the submission component
      
    // Navigate to submission component as before
    };
    return <ChecklistQuestionTemplateComponent questions={CommonCheckQuestions} onSubmit={handleSubmit} text='Common Check' />;
  };
/***********************************************DeckHoursofRestComponent*****************************************/
 //DeckHoursofRest Questions Structure
 const DeckHoursofRestQuestions = [
  { id: 1, text: 'Question 1 for DeckHoursofRest?', isEditable: false, selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for DeckHoursofRest?', isEditable: false, selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for DeckHoursofRest?', isEditable: false, selectedValue: 'option1' },
  // Add more questions as needed
];  

export const DefaultDeckHoursofRestComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
      dispatch(setNextPath('/default-checklist'));// Set the next path
      //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
      navigate('/submission'); // Navigate to the submission component
      
    // Navigate to submission component as before
    };
    return <ChecklistQuestionTemplateComponent questions={DeckHoursofRestQuestions} onSubmit={handleSubmit} text='Deck Hours of Rest' />;
  };
/**************************************************************************************************************/
/**************************************************************************************************************/
/**************************************************************************************************************/

/***********************************************EngineRoom*****************************************/
  
//Engine Questions Structure
  const EngineQuestions = [
    { id: 1, text: 'Question 1 for Engine', isEditable: false, selectedValue: 'option1' },
    { id: 2, text: 'Question 2 for Engine', isEditable: false, selectedValue: 'option1' },
    { id: 3, text: 'Question 3 for Engine', isEditable: false, selectedValue: 'option1' },
    // Add more questions as needed
  ];

  export const DefaultEngineRoom = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
      dispatch(setNextPath('/default-checklist'));// Set the next path
      //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
      navigate('/submission'); // Navigate to the submission component
      
    // Navigate to submission component as before
    };
    return <ChecklistQuestionTemplateComponent questions={EngineQuestions} onSubmit={handleSubmit} text='Engine'   />;
  };

/**************************************************************************************************************/
/**************************************************************************************************************/
/**************************************************************************************************************/

/***********************************************ShoreSafety*****************************************/

//ShoreSafety Questions Structure
const ShoreSafetyQuestions = [
  { id: 1, text: 'Question 1 for ShoreSafety', isEditable: false, selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for ShoreSafety', isEditable: false, selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for ShoreSafety', isEditable: false, selectedValue: 'option1' },
  // Add more questions as needed
];

  export const DefaultShoreSafety=()=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
      dispatch(setNextPath('/default-damagecontrol'));// Set the next path
      //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
      navigate('/submission'); // Navigate to the submission component
      
    // Navigate to submission component as before
    };

    return <ChecklistQuestionTemplateComponent questions={ShoreSafetyQuestions} onSubmit={handleSubmit} text='Shore Safety'  />;
  }
/***********************************************DamageControlSafety*****************************************/
  //DamageControlSafety Questions Structure
const DamageControlSafetyQuestions = [
  { id: 1, text: 'Question 1 for DamageControlSafety', isEditable: false, selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for DamageControlSafety', isEditable: false, selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for DamageControlSafety', isEditable: false, selectedValue: 'option1' },
  // Add more questions as needed
];

export const DefaultDamageControlSafety=()=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
      dispatch(setNextPath('/default-fireprotect'));// Set the next path
      //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
      navigate('/submission'); // Navigate to the submission component
      
    // Navigate to submission component as before
    };
    return <ChecklistQuestionTemplateComponent questions={DamageControlSafetyQuestions} onSubmit={handleSubmit} text='Damage Control' />;
  }
/***********************************************FireSafety*****************************************/

//FireSafety Questions Structure
const FireSafetyQuestions = [
  { id: 1, text: 'Question 1 for FireSafety?', isEditable: false, selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for FireSafety?', isEditable: false, selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for FireSafety?', isEditable: false, selectedValue: 'option1' },
  // Add more questions as needed
];

  export const DefaultFireSafety=()=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
      dispatch(setNextPath('/default-survival'));// Set the next path
      //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
      navigate('/submission'); // Navigate to the submission component
      
    // Navigate to submission component as before
    };
    return <ChecklistQuestionTemplateComponent questions={FireSafetyQuestions} onSubmit={handleSubmit} text='Fire Safety' />;
  }
/***********************************************SurvivalSafety*****************************************/
//SurvivalSafety Questions Structure
const SurvivalSafetyQuestions = [
  { id: 1, text: 'Question 1 for SurvivalSafety?', isEditable: false, selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for SurvivalSafety?', isEditable: false, selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for SurvivalSafety?', isEditable: false, selectedValue: 'option1' },
  // Add more questions as needed
];

  export const DefaultSurvivalSafety=()=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
      dispatch(setNextPath('/default-igs'));// Set the next path
      //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
      navigate('/submission'); // Navigate to the submission component
      
    // Navigate to submission component as before
    };
    return <ChecklistQuestionTemplateComponent questions={SurvivalSafetyQuestions} onSubmit={handleSubmit} text='Survival Safety'  />;
  }
/***********************************************IGSSafety*****************************************/

//IGSSafety Questions Structure
const IGSSafetyQuestions = [
  { id: 1, text: 'Question 1 for IGSSafety?', isEditable: false, selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for IGSSafety?', isEditable: false, selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for IGSSafety?', isEditable: false, selectedValue: 'option1' },
  // Add more questions as needed
];

  export const DefaultIGSSafety=()=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
      dispatch(setNextPath('/default-crude-oil'));// Set the next path
      //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
      navigate('/submission'); // Navigate to the submission component
      
    // Navigate to submission component as before
    };
    return <ChecklistQuestionTemplateComponent questions={IGSSafetyQuestions} onSubmit={handleSubmit} text='IGS Safety' />;
  }
/***********************************************CrudeOilSafety*****************************************/

//CrudeOilSafety Questions Structure
const CrudeOilSafetyQuestions = [
  { id: 1, text: 'Question 1 for CrudeOilSafety?', isEditable: false, selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for CrudeOilSafety?', isEditable: false, selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for CrudeOilSafety?', isEditable: false, selectedValue: 'option1' },
  // Add more questions as needed
];

  export const DefaultCrudeOilSafety=()=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
      dispatch(setNextPath('/default-liquid-chemicals'));// Set the next path
      //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
      navigate('/submission'); // Navigate to the submission component
      
    // Navigate to submission component as before
    };
    return <ChecklistQuestionTemplateComponent questions={CrudeOilSafetyQuestions} onSubmit={handleSubmit} text='Crude Oil Safety' />;
  }
/***********************************************LiquiedChemicalsSafety*****************************************/

//LiquiedChemicals Questions Structure
const LiquiedChemicalsQuestions = [
  { id: 1, text: 'Question 1 for LiquiedChemicals?', isEditable: false, selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for LiquiedChemicals?', isEditable: false, selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for LiquiedChemicals?', isEditable: false, selectedValue: 'option1' },
  // Add more questions as needed
];

export const DefaultLiquiedChemicalsSafety=()=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
      dispatch(setNextPath('/default-liquefied-gases'));// Set the next path
      //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
      navigate('/submission'); // Navigate to the submission component
      
    // Navigate to submission component as before
    };
    return <ChecklistQuestionTemplateComponent questions={LiquiedChemicalsQuestions} onSubmit={handleSubmit} text='Liquied Chemicals Safety' />;
  }

/***********************************************LiquefiedGasSafety*****************************************/

//LiquefiedGasSafety Questions Structure
const LiquefiedGasSafetyQuestions = [
  { id: 1, text: 'Question 1 for LiquefiedGasSafety?', isEditable: false, selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for LiquefiedGasSafety?', isEditable: false, selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for LiquefiedGasSafety?', isEditable: false, selectedValue: 'option1' },
  // Add more questions as needed
];

  export const DefaultLiquefiedGasSafety=()=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
      dispatch(setNextPath('/default-checklist'));// Set the next path
      //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
      navigate('/submission'); // Navigate to the submission component
      
    // Navigate to submission component as before
    };
    
    return <ChecklistQuestionTemplateComponent questions={LiquefiedGasSafetyQuestions} onSubmit={handleSubmit} text='Liquefied Gas Safety' />;
  }
/**************************************************************************************************************/
/**************************************************************************************************************/
/**************************************************************************************************************/

/***********************************************ContainerLogistics*****************************************/

//ContainerLogistics Questions Structure
const ContainerLogisticsQuestions = [
  { id: 1, text: 'Question 1 for ContainerLogistics?', isEditable: false, selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for ContainerLogistics?', isEditable: false, selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for ContainerLogistics?', isEditable: false, selectedValue: 'option1' },
  // Add more questions as needed
];


  export const DefaultContainerLogistics=()=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
      dispatch(setNextPath('/default-checklist'));// Set the next path
      //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
      navigate('/submission'); // Navigate to the submission component
      
    // Navigate to submission component as before
    };

    return <ChecklistQuestionTemplateComponent questions={ContainerLogisticsQuestions} onSubmit={handleSubmit} text='Container Logistics' />;
  }

/**************************************************************************************************************/
/**************************************************************************************************************/
/**************************************************************************************************************/
   
/***********************************************AccomodationHosipitality*****************************************/
//AccomodationHosipitality Questions Structure
 const AccomodationHosipitalityQuestions = [
  { id: 1, text: 'Question 1 for AccomodationHosipitality?', isEditable: false, selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for AccomodationHosipitality?', isEditable: false, selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for AccomodationHosipitality?', isEditable: false, selectedValue: 'option1' },
  // Add more questions as needed
];

  export const DefaultAccomodationHospitality=()=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
      dispatch(setNextPath('/default-checklist'));// Set the next path
      //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
      navigate('/submission'); // Navigate to the submission component
      
    // Navigate to submission component as before
    };

    return <ChecklistQuestionTemplateComponent questions={AccomodationHosipitalityQuestions} onSubmit={handleSubmit} text='Accomodation Hospitality'  />;
  }
  
/**************************************************************************************************************/
/**************************************************************************************************************/
/**************************************************************************************************************/

  
 
