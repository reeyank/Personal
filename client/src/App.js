import React from "react";
import "./index.css";
import { Helmet } from "react-helmet";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Heading from "./combos/Heading";
import Hero from "./combos/Hero";
import Login from "./combos/Login";
import HeadandHero from "./combos/HeadandHero";
import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import Tech from "components/Tech";
 
const App = () => {
 return (
  <div>
    <Helmet>
      <title>Reeyan's Portfolio Website</title>
    </Helmet>

    <Routes>
      <Route path="/" element={<><HeadandHero /></>}/>
      <Route path="/login" element={
        <>
          <HeadandHero />
          <Login />
          <Tech />
        </>
      }/>

      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="rtl/*" element={<RtlLayout />} />
    </Routes>
   </div>
 );
};
 
export default App;