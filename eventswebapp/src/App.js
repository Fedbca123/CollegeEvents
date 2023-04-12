import React from 'react'
import LoginScreen from "./screens/loginScreen.js";
import Events from './screens/events.js';
import RegisterScreen from './screens/registerScreen.js';
import StudentOrgs from './screens/studentOrgs.js';
import NewEvent from './screens/newEvent.js';
import NewRSO from './screens/newRSO.js';
import University from './screens/universityProfile.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
     <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/uProfile" element={<University />} />
          <Route path="/events" element={<Events />} />
          <Route path="/orgs" element={<StudentOrgs />} />
          <Route path="/newEvent" element={<NewEvent />} />
          <Route path="/newRSO" element={<NewRSO />} />
      </Routes>
    </BrowserRouter>
  );
}
