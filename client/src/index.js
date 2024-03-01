import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Components/Checklist/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateChecklistPage from "./Components/Checklist/CreateChecklistPage";
import ChecklistMainContent from "./Components/Checklist/Checklist_Main";
import ModifyDefaultChecklist from "./Components/Checklist/ModifyDefaultChecklist";

/** ***************************Following Imports for Default Checklist Component by Bagio************************** */
import {
  DefaultDeckComponent,
  DefaultEngineComponent,
  DefaultSafetyComponent,
  DefaultHospitalityComponent,
  DefaultLogisticsComponent,
} from "./Components/Checklist/DefaultDeptChecklistOptions";

import {
  DefaultDocumentationComponent,
  DefaultExternalHullPreBoardingComponent,
  DefaultISMCodeComponent,
  DefaultRadioComponent,
  DefaultWheelHouseComponent,
  DefaultCommonCheckComponent,
  DefaultDeckHoursofRestComponent,
} from "./Components/Checklist/DefaultDeptChecklistOptions";
import { DefaultEngineRoom } from "./Components/Checklist/DefaultDeptChecklistOptions";
import { DefaultContainerLogistics } from "./Components/Checklist/DefaultDeptChecklistOptions";
import { DefaultAccomodationHospitality } from "./Components/Checklist/DefaultDeptChecklistOptions";
import { SubmissionComponent } from "./Components/Checklist/DeptChecklistOptions";

/*******************************************Above components for Default checklist********************************************************************** */

import {
  DocumentationComponent,
  ExternalHullPreBoardingComponent,
  ISMCodeComponent,
  RadioComponent,
  WheelHouseComponent,
  CommonCheckComponent,
  DeckHoursofRestComponent,
} from "./Components/Checklist/DeptChecklistOptions";

import {
  DefaultShoreSafety,
  DefaultDamageControlSafety,
  DefaultFireSafety,
  DefaultSurvivalSafety,
  DefaultIGSSafety,
  DefaultCrudeOilSafety,
  DefaultLiquiedChemicalsSafety,
  DefaultLiquefiedGasSafety,
} from "./Components/Checklist/DefaultDeptChecklistOptions";

import {
  DeckComponent,
  EngineComponent,
  SafetyComponent,
  LogisticsComponent,
  HospitalityComponent,
} from "./Components/Checklist/DeptChecklistOptions";

import {
  ShoreSafety,
  DamageControlSafety,
  FireSafety,
  SurvivalSafety,
  IGSSafety,
  CrudeOilSafety,
  LiquiedChemicalsSafety,
  LiquefiedGasSafety,
} from "./Components/Checklist/DeptChecklistOptions";
import { EngineRoom } from "./Components/Checklist/DeptChecklistOptions";
import { ContainerLogistics } from "./Components/Checklist/DeptChecklistOptions";
import DefaultChecklistPage from "./Components/Checklist/DefaultChecklistPage";
import { AccomodationHospitality } from "./Components/Checklist/DeptChecklistOptions";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import PreDeparture from "./Components/Checklist/preDeparture";
import PreArrival from "./Components/Checklist/preArrival";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ChecklistMainContent />} />
          <Route path="/create-checklist" element={<CreateChecklistPage />} />
          <Route
            path="/modify-default-checklist"
            element={<ModifyDefaultChecklist />}
          />
          {
            <Route
              path="/default-checklist"
              element={<DefaultChecklistPage />} /**added DefaultChecklist */
            />
            /*<Route path="/properties" element={<PropertiesPage />} /> */
          }
          <Route path="/preDeparture" element={<PreDeparture />} />{" "}
          {/*added PreDeparture */}
          <Route path="/preArrival" element={<PreArrival />} />{" "}
          {/*added PreArrival */}
          <Route path="/deck" element={<DeckComponent />} />
          <Route path="/engine" element={<EngineComponent />} />
          <Route path="/safety" element={<SafetyComponent />} />
          <Route path="/logistics" element={<LogisticsComponent />} />
          <Route path="/hospitality" element={<HospitalityComponent />} />
          <Route path="/documentation" element={<DocumentationComponent />} />
          <Route
            path="/external-hull-pre-boarding"
            element={<ExternalHullPreBoardingComponent />}
          />
          <Route path="/ism-code" element={<ISMCodeComponent />} />
          <Route path="/radio" element={<RadioComponent />} />
          <Route path="/wheel-house" element={<WheelHouseComponent />} />
          <Route path="/common-check" element={<CommonCheckComponent />} />
          <Route
            path="/deck-hours-rest-fatigue"
            element={<DeckHoursofRestComponent />}
          />
          <Route path="/engineroomcheck" element={<EngineRoom />} />
          <Route path="/shore" element={<ShoreSafety />} />
          <Route path="/damagecontrol" element={<DamageControlSafety />} />
          <Route path="/fireprotect" element={<FireSafety />} />
          <Route path="/survival" element={<SurvivalSafety />} />
          <Route path="/igs" element={<IGSSafety />} />
          <Route path="/crude-oil" element={<CrudeOilSafety />} />
          <Route
            path="/liquid-chemicals"
            element={<LiquiedChemicalsSafety />}
          />
          <Route path="/liquefied-gases" element={<LiquefiedGasSafety />} />
          <Route path="/containerlogistics" element={<ContainerLogistics />} />
          <Route
            path="/accomodationhospitality"
            element={<AccomodationHospitality />}
          />
          <Route path="/submission" element={<SubmissionComponent />} />
          {/** ****************************** Bagio DefaultChecklist Components **********************************/}
          <Route path="/default-deck" element={<DefaultDeckComponent />} />
          <Route path="/default-engine" element={<DefaultEngineComponent />} />
          <Route path="/default-safety" element={<DefaultSafetyComponent />} />
          <Route
            path="/default-logistics"
            element={<DefaultLogisticsComponent />}
          />
          <Route
            path="/default-hospitality"
            element={<DefaultHospitalityComponent />}
          />
          <Route
            path="/default-documentation"
            element={<DefaultDocumentationComponent />}
          />
          <Route
            path="/default-external-hull-pre-boarding"
            element={<DefaultExternalHullPreBoardingComponent />}
          />
          <Route
            path="/default-ism-code"
            element={<DefaultISMCodeComponent />}
          />
          <Route path="/default-radio" element={<DefaultRadioComponent />} />
          <Route
            path="/default-wheel-house"
            element={<DefaultWheelHouseComponent />}
          />
          <Route
            path="/default-common-check"
            element={<DefaultCommonCheckComponent />}
          />
          <Route
            path="/default-deck-hours-rest-fatigue"
            element={<DefaultDeckHoursofRestComponent />}
          />
          <Route
            path="/default-engineroomcheck"
            element={<DefaultEngineRoom />}
          />
          <Route path="/default-shore" element={<DefaultShoreSafety />} />
          <Route
            path="/default-damagecontrol"
            element={<DefaultDamageControlSafety />}
          />
          <Route path="/default-fireprotect" element={<DefaultFireSafety />} />
          <Route path="/default-survival" element={<DefaultSurvivalSafety />} />
          <Route path="/default-igs" element={<DefaultIGSSafety />} />
          <Route
            path="/default-crude-oil"
            element={<DefaultCrudeOilSafety />}
          />
          <Route
            path="/default-liquid-chemicals"
            element={<DefaultLiquiedChemicalsSafety />}
          />
          <Route
            path="/default-liquefied-gases"
            element={<DefaultLiquefiedGasSafety />}
          />
          <Route
            path="/default-containerlogistics"
            element={<DefaultContainerLogistics />}
          />
          <Route
            path="/default-accomodationhospitality"
            element={<DefaultAccomodationHospitality />}
          />
          <Route path="/submission" element={<SubmissionComponent />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
