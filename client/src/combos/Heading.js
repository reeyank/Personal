import React from "react";
import { Helmet } from "react-helmet"
import "../index.css";

const Heading = () => {
  return (
    <>
    <Helmet>
      <script src="https://kit.fontawesome.com/66da2a232b.js" crossorigin="anonymous"></script>
    </Helmet>

    <div className="navbar text-accent font-poppins">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>About Me</a></li>
            <li tabIndex={0}>
              <a className="justify-between">
                Projects
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
              </a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a href="https://linkedin.com/in/reeyank">Linkedin</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl" href="/">
          <i class="fa-solid fa-code"></i>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li ><a>About</a></li>
          <li  tabIndex={0}>
            <a>
              Projects
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
            </a>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li ><a href="https://linkedin.com/in/reeyank/" target="_blank">Linkedin</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-accent text-white" href="/login#signUp">Get started</a>
      </div>
    </div>
    </>
  );
}

export default Heading;