// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './components/Checklist/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateChecklistPage from './components/Checklist/CreateChecklistPage';
import ChecklistMainContent from './components/Checklist/Checklist_Main';
import ModifyDefaultChecklist from './components/Checklist/ModifyDefaultChecklist';
import { SubmissionComponent } from './components/Checklist/DeptChecklistOptions';
import { DocumentationComponent, ExternalHullPreBoardingComponent, ISMCodeComponent, RadioComponent, WheelHouseComponent, CommonCheckComponent, DeckHoursofRestComponent } from './components/Checklist/DeptChecklistOptions';
import { DeckComponent, EngineComponent, SafetyComponent, LogisticsComponent, HospitalityComponent } from './components/Checklist/DeptChecklistOptions';
import { ShoreSafety, DamageControlSafety, FireSafety, SurvivalSafety, IGSSafety, CrudeOilSafety, LiquiedChemicalsSafety, LiquefiedGasSafety } from './components/Checklist/DeptChecklistOptions';
import { EngineRoom } from './components/Checklist/DeptChecklistOptions';
import { ContainerLogistics } from './components/Checklist/DeptChecklistOptions';
import { AccomodationHospitality } from './components/Checklist/DeptChecklistOptions';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/checklistmaincontent" element={<ChecklistMainContent />} />
          <Route path="/create-checklist" element={<CreateChecklistPage />} />
          <Route path="/modify-default-checklist" element={<ModifyDefaultChecklist />} />
          <Route path="/deck" element={<DeckComponent />} />
          <Route path="/engine" element={<EngineComponent />} />
          <Route path="/safety" element={<SafetyComponent />} />
          <Route path="/logistics" element={<LogisticsComponent />} />
          <Route path="/hospitality" element={<HospitalityComponent />} />
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
          <Route path='/accomodationhospitality' element={<AccomodationHospitality />} />
          <Route path='/submission' element={<SubmissionComponent />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
