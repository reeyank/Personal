import React from "react";
import "../index.css";

const PasswordInput = () => {
  return (
    <>
    <label className="label">
        <span className="label-text">What is your password?</span>
    </label>
    <input type="text" placeholder="Password" className="input input-bordered border-red-600 border-2 w-full max-w-xs"/>
    <label className="label">
        <span className="label-text text-red-200">Your Password needs a Special Character! (!/?)</span>
    </label>
    </>
  );
}

export default PasswordInput;