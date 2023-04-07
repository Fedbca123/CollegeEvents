import React from 'react'
import LoginScreen from "./screens/loginScreen.js";
import Dashboard from './screens/dashboard.js';
import RegisterScreen from './screens/registerScreen.js';
import StudentOrgs from './screens/studentOrgs.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from "react-dom/client";

export default function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<LoginScreen />}>
    //       <Route index element={<LoginScreen />} />
    //       <Route path="/register" element={<RegisterScreen />} />
    //       <Route path="/dash" element={<Dashboard />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    //<LoginScreen/>
    <Dashboard/>
    //<StudentOrgs/>
  );
}
