import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { document } from "postcss";

const Navbar = () => {
    const {user,logOut} = useContext(AuthContext)
    

    const navLink = <>
    <li><NavLink to='/'>Home</NavLink></li>
    
    {
        user ? <>
        <li><NavLink to='/addtocart'>Add Item</NavLink></li>
        <li><NavLink to='/mycart'>My Cart</NavLink></li>
        </>
         :

         <>
         <li><NavLink to='/singup'>Singup</NavLink></li>
         <li><NavLink to='/login'>Login</NavLink></li>
         </>
    }
    <li><NavLink to='/contactus'>Contact Us</NavLink></li>
    
      
    
    </>

    const handleSingOut = () =>{
       logOut()
       .then(result=>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'User Logout',
          showConfirmButton: false,
          timer: 1500
        })
       })
       .catch()
    }
    
    return (
        <div className=" container mx-auto">
          <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLink}
      </ul>
    </div>
    <p className="normal-case text-2xl font-serif"><span className="text-red-400 text-3xl">F</span>ilm <span className="text-red-400 text-3xl">F</span>lex</p>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navLink}
    </ul>
  </div>
  <div className="navbar-end">
    {
        user && <span>

<div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user.photoURL} />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            {user.displayName}
            
          </a>
        </li>
        
        <li><a onClick={handleSingOut}>Logout</a></li>
      </ul>
    </div>
        </span>
    }
    
  </div>
</div> 
        </div>
    );
};

export default Navbar;