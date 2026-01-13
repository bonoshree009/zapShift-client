import React from 'react';
import Logo from '../../Component/Logo/Logo';
import { NavLink } from 'react-router';

const Navbar = () => {
       const Links = <>
       <li><NavLink>Services</NavLink></li>
       <li><NavLink to='/covarage'>Coverage</NavLink></li>
       <li><NavLink to='/about'>About Us</NavLink></li>
       <li><NavLink>Pricing</NavLink></li>
       <li><NavLink>Blog</NavLink></li>
       <li><NavLink>Contact</NavLink></li>
       </>
    return (
      <div className='p-3'>
        <div className="navbar bg-base-100 shadow-sm rounded">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {Links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><Logo></Logo></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {Links}
    </ul>
  </div>
  <div className="navbar-end text-[10px] md:text-xl ">
     <Navbar className="btn text-[10px] p-1 md:p-3 md:text-[15px]" to="/login">Sign In</Navbar>
       <NavLink className="btn bg-primary ml-3 font-bold text-[10px] p-1 md:p-3 md:text-[15px]" to="/register">Sign Up</NavLink>
  </div>
</div>
</div>
    );
};

export default Navbar;