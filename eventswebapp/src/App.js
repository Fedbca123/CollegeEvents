import React from 'react'
import LoginScreen from "./screens/loginScreen.js";
import Dashboard from './screens/dashboard.js';
import RegisterScreen from './screens/registerScreen.js';
import StudentOrgs from './screens/studentOrgs.js';
import NewEvent from './screens/newEvent.js';
import NewRSO from './screens/newRSO.js';
import University from './screens/universityProfile.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from "react-dom/client";

export default function App() {
  return (
    <BrowserRouter>
     <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/uProfile" element={<University />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/orgs" element={<StudentOrgs />} />
          <Route path="/event" element={<NewEvent />} />
          <Route path="/rso" element={<NewRSO />} />
      </Routes>
    </BrowserRouter>
  );
}
