import React from "react";
import { Helmet } from "react-helmet";
import "../index.css";

const Hero = () => {
    return (
      <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>  
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet"/>
      </Helmet>
      <div className="hero mt-24">
        <div className="hero-content text-center text-white">
          <div className="max-w-md mockup-code bg-slate-600 text-white">
            <h1 className="text-6xl poppins">Reeyan Khimani</h1>
            <p className="py-6 text-2xl font-semibold poppins">Hey! Welcome to my Portfolio Website!</p>
            <a className="btn btn-accent text-white" href="/login#sign">Get Started</a>
          </div>
        </div>
      </div>
      </>
    );
  }
  
  export default Hero;