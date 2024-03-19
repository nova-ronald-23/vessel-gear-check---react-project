import React from 'react';
import ReactDom from 'react-dom/client';
import { Provider} from 'react-redux';
import store from './components/Checklist/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login'; 
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import Verification from './components/Verification';
import NewPassword from './components/NewPassword';
import WeatherApp from './components/WeatherApp/WeatherApp';
import DashboardPage from './components/dashboard';
import VesselProfile from './components/VesselProfile';
import VesselProfileNext from './components/VesselProfileNext';
import Roles from'./components/Roles';
import Personal from './components/Personal';
import Set from './components/Set';
import Checklistmain from './components/Checklist/checklistmain';
import CreateChecklistPage from './components/Checklist/CreateChecklistPage';
import Createchecklist from './components/Checklist/createchecklist';
import ChecklistMainContent from './components/Checklist/Checklist_Main';
import ModifyDefaultChecklist from './components/Checklist/ModifyDefaultChecklist';
import Modifydefult from './components/Checklist/modifydefult';
import Deptchecklistoptions from './components/Checklist/DeptChecklistOptions';
import Predep from './components/Checklist/predep';
import Newchecklist from './components/Checklist/newchecklist';
import Selectiontwo from './components/Checklist/selectiontwo';
import Selecthree from './components/Checklist/selectionthree';
import { SubmissionComponent } from './components/Checklist/DeptChecklistOptions';
import { DocumentationComponent,ExternalHullPreBoardingComponent,ISMCodeComponent,RadioComponent,WheelHouseComponent,CommonCheckComponent,DeckHoursofRestComponent } from './components/Checklist/DeptChecklistOptions';
import {DeckComponent,EngineComponent,SafetyComponent,LogisticsComponent,HospitalityComponent }from './components/Checklist/DeptChecklistOptions';
import { ShoreSafety,DamageControlSafety,FireSafety,SurvivalSafety,IGSSafety,CrudeOilSafety,LiquiedChemicalsSafety,LiquefiedGasSafety } from './components/Checklist/DeptChecklistOptions';
import { EngineRoom } from './components/Checklist/DeptChecklistOptions';
import { ContainerLogistics } from './components/Checklist/DeptChecklistOptions';
import { AccomodationHospitality } from './components/Checklist/DeptChecklistOptions';
import reportWebVitals from './reportWebVitals';

const App = () => {
  return (

    <Router>
           <React.StrictMode><Provider store={store}>
      <Routes>
        <Route path="/" element={<WeatherApp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/vesselprofile" element={<VesselProfile />} />
        <Route path="/VesselProfileNext" element={<VesselProfileNext />} />
        <Route path="/roles" element={<Roles />}/>
        <Route path="/personal" element={<Personal/>}/>
        <Route path="/set" element={<Set/>}/> 
        <Route path="/Checklistmain" element={<Checklistmain/>}/>
        <Route path="/checklistmaincontent" element={<ChecklistMainContent />} />
        <Route path="/createchecklistpage" element={<CreateChecklistPage />} />
        <Route path="/createchecklist" element={<Createchecklist/>}/>
        <Route path="/modify-default-checklist" element={<ModifyDefaultChecklist />}/>
        <Route path="/modifydefult" element={<Modifydefult/>}/>
        <Route path="/selectiontwo" element={<Selectiontwo/>}/>
        <Route path="/deptchecklistoptions" element={<Deptchecklistoptions/>}/>
        <Route path="/predep" element={<Predep/>}/>
        <Route path="/new-checklist" element={<Newchecklist/>}/>
        <Route path="/selectionthree" element={<Selecthree/>}/>
        <Route path="/deck" element={<DeckComponent />}/>
        <Route path="/engine" element={<EngineComponent />}/>
        <Route path="/safety" element={<SafetyComponent />}/>
        <Route path="/logistics" element={<LogisticsComponent />}/>
        <Route path="/hospitality" element={<HospitalityComponent />}/>
        <Route path="/documentation" element={<DocumentationComponent />} />
        <Route path="/external-hull-pre-boarding" element={<ExternalHullPreBoardingComponent />} />
        <Route path="/ism-code" element={<ISMCodeComponent />} />
        <Route path="/radio" element={<RadioComponent />} />
        <Route path="/wheel-house" element={<WheelHouseComponent />} />
        <Route path="/common-check" element={<CommonCheckComponent />} />
        <Route path="/deck-hours-rest-fatigue" element={<DeckHoursofRestComponent />} />
        <Route path="/engineroomcheck" element={<EngineRoom />} />
        <Route path="/shore" element={<ShoreSafety />} />
        <Route path="/damagecontrol" element={<DamageControlSafety />} />
        <Route path="/fireprotect" element={<FireSafety />} />
        <Route path="/survival" element={<SurvivalSafety />} />
        <Route path="/igs" element={<IGSSafety />} />
        <Route path="/crude-oil" element={<CrudeOilSafety />} />
        <Route path="/liquid-chemicals" element={<LiquiedChemicalsSafety />} />
        <Route path="/liquefied-gases" element={<LiquefiedGasSafety />} />
        <Route path="/containerlogistics" element={<ContainerLogistics />} />
        <Route path='/accomodationhospitality' element={<AccomodationHospitality />}/>
        <Route path='/submission' element={<SubmissionComponent />}/>

        {/* Other routes */}
      </Routes>
      </Provider>
      </React.StrictMode>
    </Router>
  );
}
reportWebVitals();
export default App;
