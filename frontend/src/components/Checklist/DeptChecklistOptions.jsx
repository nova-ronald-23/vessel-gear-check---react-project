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

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import sidebar from '../Sidebar';

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
  );
};

export default InfoBox;
/*************************************************DeckComponent********************************************/
export const DeckComponent = () => {

  const navigate=useNavigate();
  

  const handleBack1=()=>{
    navigate('/modify-default-checklist');
  }
 

  const deckContent = (<Box>
    <Box  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <InfoBox labelText="Documentation" path="/documentation" origin="/deck" />
      <InfoBox labelText="External hull & pre boarding" path="/external-hull-pre-boarding" origin="/deck" />
      <InfoBox labelText="ISM Code" path="/ism-code" origin="/deck" />
      <InfoBox labelText="Wheel house" path="/wheel-house" origin="/deck" />
      <InfoBox labelText="Radio" path="/radio" origin="/deck" />
      <InfoBox labelText="Common check" path="/common-check" origin="/deck" />
      <InfoBox labelText="Deck hours of rest & fatigue" path="/deck-hours-rest-fatigue" origin="/deck" />

      
    </Box></Box>
  );

  return <ChecklistMain content={<Box>{deckContent}
  <Box sx={{ display: 'flex', justifyContent:'center' }}>
        <ReusableButton sx={{ backgroundColor: 'black', color: 'white' }} onClick={handleBack1} buttonText={'Back'} />
      </Box>
       </Box>} showCard={false} boxStyle={{ background: '#C7C8CC'}} bottomborder={{borderBottom:'150px solid blue',pt:15,maxHeight:300,m: 2}}/>;
};
/***********************************************EngineComponent*************************************************/
export const EngineComponent = () => {
  
  const navigate=useNavigate();
  const handleBack1=()=>{
    navigate('/modify-default-checklist');
  }
  const engineContent = (<Box>
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <InfoBox labelText="Engine Room checks" path="/engineroomcheck" origin="/engine" />
     

      
    </Box></Box>
  );

  return <ChecklistMain content={<Box>{engineContent}
  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <ReusableButton sx={{ backgroundColor: 'black', color: 'white' }} onClick={handleBack1} buttonText={'Back'} />
    </Box>
  </Box>} showCard={false} boxStyle={{ background: '#C7C8CC' }}bottomborder={{borderBottom:'150px solid blue',pt:10,m: 2}}/>;
};
/**********************************************SafetyComponent***********************************************/
export const SafetyComponent = () => {
  const navigate=useNavigate();
  const handleBack1=()=>{
    navigate('/modify-default-checklist');
  }
    // Define the content specific for the Safety component
    const safetyContent =(
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

      
      <InfoBox labelText="The Ship/Shore Safety Check" path="/shore" origin="/safety" />
      <InfoBox labelText="Damage control plans check" path="/damagecontrol" origin="/safety" />
      <InfoBox labelText="Fire protection system check " path="/fireprotect" origin="/safety" />
      <InfoBox labelText="Survival Craft" path="/survival" origin="/safety" />
      <InfoBox labelText="inert gas system (IGS)" path="/igs" origin="/safety" />
      <InfoBox labelText="Crude Oil system" path="/crude-oil" origin="/safety" />
      <InfoBox labelText="Bulk Liquid Chemicals" path="/liquid-chemicals" origin="/safety"/>
      <InfoBox labelText="Bulk Liquefied Gases" path="/liquefied-gases" origin="/safety" />

      
    </Box>

    );
  
    return <ChecklistMain content={<Box>{safetyContent}
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
    <ReusableButton sx={{ backgroundColor: 'black', color: 'white' }} onClick={handleBack1} buttonText={'Back'} />
  </Box></Box>} showCard={false} boxStyle={{ background: '#C7C8CC' }} bottomborder={{borderBottom:'150px solid blue',pt:15,maxHeight:300,m: 2}}/>
    
  };
/**************************************************LogisticsComponent*********************************************/
  export const LogisticsComponent = () => {
    const navigate=useNavigate();
  const handleBack1=()=>{
    navigate('/modify-default-checklist');
  }
    // Define the content specific for the Logistics component
    const logisticsContent = (<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>    
    <InfoBox labelText="Container check" path="/containerlogistics" origin="/logistics" />
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
  export const HospitalityComponent = () => {
    const navigate=useNavigate();
  const handleBack1=()=>{
    navigate('/modify-default-checklist');
  }
    // Define the content specific for the Hospitality component
    const hospitalityContent = (<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>    
    <InfoBox labelText="Accomodation/Catering" path="/accomodationhospitality" origin="/hospitality" />
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

  export const ChecklistQuestionTemplateComponent = ({ questions, onSubmit,text}) => {
   
   
    const [questionsState, setQuestionsState] = useState(questions); // Initial questions state
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
    

    const handleEditClick = (id) => {
      const updatedQuestions = questionsState.map(question =>
        question.id === id ? { ...question, isEditable: !question.isEditable } : question
      );
      setQuestionsState(updatedQuestions);
    };

    const handleInputChange = (id, newText) => {
      const updatedQuestions = questionsState.map(question =>
        question.id === id ? { ...question, text: newText } : question
      );
      setQuestionsState(updatedQuestions);
    };
  
    const handleDeleteClick = (id) => {
      const updatedQuestions = questionsState.filter(question => question.id !== id);
      setQuestionsState(updatedQuestions);
    };

    // Function to toggle isEditable state to false on blur
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

  const buttons = [
    { text: "Back"},
    { text: "Submit", specialStyle: true },
  ];
    
    const ChecklistQuestionTemplateContent = <Box>
     {questionsState.map((question) => (
  <Card key={question.id} sx={{ p: 2, mb: 2,mt:2,width:700, borderLeft: '10px solid blue' }}>
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
          onBlur={() => handleBlur(question.id)} // Add onBlur handler here
        />
        <IconButton onClick={() => handleEditClick(question.id)}>
          <EditIcon />
        </IconButton>
      </Box>
      <RadioGroup
       
        value={question.selectedValue}
        onChange={(e) => handleRadioChange(question.id, e.target.value)}
      >
        <FormControlLabel value="option1" control={<Radio />} label="Done" />
        <FormControlLabel value="option2" control={<Radio />} label="Not Yet Done" />
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <FormControlLabel value="option3" control={<Radio />} label="Not Applicable" />
          <IconButton onClick={() => handleDeleteClick(question.id)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </RadioGroup>
    </Box>
  </Card>
))}

</Box>
    
  
    return <ChecklistMain content={<Box>
      <Box>
      <Card sx={{ p: 2, mb: 2,mt:2,width:700, borderTop: '10px solid blue',fontWeight:"bold",fontSize:20}}>{text}</Card>
      </Box>
    {ChecklistQuestionTemplateContent}
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
    {buttons.map((button, index) => (
                  button.specialStyle ? 
                  <ReusableButton onClick={onSubmit}  sx={{ backgroundColor: 'orange' }} key={index} buttonText={button.text}  />
                  :
                  <ReusableButton onClick={handleBack} sx={{ backgroundColor: 'black',color:'white' }} key={index} buttonText={button.text}  />
                ))}

</Box>
    
</Box>}  showCard={false} />;
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

export const DocumentationComponent = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
      dispatch(setNextPath('/external-hull-pre-boarding'));// Set the next path
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

 export const ExternalHullPreBoardingComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
      dispatch(setNextPath('/ism-code'));// Set the next path
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

  export const ISMCodeComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
      dispatch(setNextPath('/radio'));// Set the next path
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

  export const RadioComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
      dispatch(setNextPath('/wheel-house'));// Set the next path
      //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
      navigate('/submission'); // Navigate to the submission component
      
    // Navigate to submission component as before
    };
    return <ChecklistQuestionTemplateComponent questions={RadioQuestions} onSubmit={handleSubmit} text='Radio' />;
  };
/***********************************************WheelHouseComponent*****************************************/
  export const WheelHouseComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
      dispatch(setNextPath('/common-check'));// Set the next path
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


  export const CommonCheckComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
      dispatch(setNextPath('/deck-hours-rest-fatigue'));// Set the next path
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

export const DeckHoursofRestComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
      dispatch(setNextPath('/modify-default-checklist'));// Set the next path
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

  export const EngineRoom = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
      dispatch(setNextPath('/modify-default-checklist'));// Set the next path
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

  export const ShoreSafety=()=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
      dispatch(setNextPath('/damagecontrol'));// Set the next path
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

export const DamageControlSafety=()=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
      dispatch(setNextPath('/fireprotect'));// Set the next path
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

  export const FireSafety=()=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
      dispatch(setNextPath('/survival'));// Set the next path
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

  export const SurvivalSafety=()=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
      dispatch(setNextPath('/igs'));// Set the next path
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

  export const IGSSafety=()=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
      dispatch(setNextPath('/crude-oil'));// Set the next path
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

  export const CrudeOilSafety=()=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
      dispatch(setNextPath('/liquid-chemicals'));// Set the next path
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

export const LiquiedChemicalsSafety=()=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
      dispatch(setNextPath('/liquefied-gases'));// Set the next path
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

  export const LiquefiedGasSafety=()=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
      dispatch(setNextPath('/modify-default-checklist'));// Set the next path
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


  export const ContainerLogistics=()=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
      dispatch(setNextPath('/modify-default-checklist'));// Set the next path
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

  export const AccomodationHospitality=()=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
      dispatch(setNextPath('/modify-default-checklist'));// Set the next path
      //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
      navigate('/submission'); // Navigate to the submission component
      
    // Navigate to submission component as before
    };

    return <ChecklistQuestionTemplateComponent questions={AccomodationHosipitalityQuestions} onSubmit={handleSubmit} text='Accomodation Hospitality'  />;
  }
  
/**************************************************************************************************************/
/**************************************************************************************************************/
/**************************************************************************************************************/

  
 
