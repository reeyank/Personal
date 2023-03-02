import React from "react";
import "./index.css";
import { Helmet } from "react-helmet";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Heading from "./components/Heading";
import Hero from "./components/Hero";
import Login from "./components/Login";
import HeadandHero from "./combos/HeadandHero";
import Dashboard from "./components/Dashboard";
 
const App = () => {
 return (
  <div>
    <Helmet>
      <title>Reeyan Khimani's Portfolio Website</title>
    </Helmet>

    <Routes>
      <Route path="/" element={<><HeadandHero />
        <Dashboard /></>}/>
      <Route path="/login" element={
        <>
          <HeadandHero />
          <Login />
        </>
      }/>
    </Routes>
   </div>
 );
};
 
export default App;