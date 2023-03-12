import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png"
import DropdownComponent from "./dropDown";
  
export default function Header() {
 
  return (
   
      
    <nav className="w-full bg-purple-500 shado">
     
      <div className="flex py-3 md:py-5 md:block">
      
      <ul className="items-center justify-start space-y-8 md:flex md:space-x-6 md:space-y-0">
      <img className="w-20 h-20" src={logo} alt="logo" />
      <h1 className="text-2xl font-bold text-white">Healing</h1>
      
      <li className="text-white hover:text-indigo-200 pl-96">
        <Link to="/">Home</Link></li>
        <li className="text-white hover:text-indigo-200">
        <DropdownComponent/>
        </li>
        <li className="text-white hover:text-indigo-200">
        <Link to="/contact">Contact Us</Link></li>
        <li className="text-white hover:text-indigo-200">
        <Link to="/blogs">Blogs</Link></li>
        <li className="px-4 py-2 text-white hover:text-black bg-purple-900 rounded-md shadow hover:bg-gray-100">
        <Link to="/login">Sign In</Link></li>
        <li className="px-4 py-2 text-black hover:text-purple-700 bg-purple-100 rounded-md shadow hover:bg-gray-100">
        <Link to="/register">Sign Up</Link></li>
        
        </ul>
       
        </div>
      </nav>
    
  );
}
