import React from "react";
import send from "./send.svg";
import { Link } from "react-router-dom";
import DropdownComponent from "../Header/dropDown";
import twitter from "./twitter.svg";
import google from "./google.svg";
import facebook from "./facebook.svg";

function Footer() {
  return (
    
      <footer className="bg-gray-100 w-full">
        <div className="flex flex-row ">
          <div className="flex flex-col px-20 py-16">
      <h1 className="text-2xl font-bold text-left ">Subscribe</h1>
      <h6 className="text-slate-400 text-2xs py-4">you will never be spam or enter your email</h6>
      <div className="flex flex-row">
      <input
        type="email"
        className="form-control block w-full px-4 py-2 text-s font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
         transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        id="exampleFormControlInput2"
        placeholder="Enter your email"
      />
      <button type="button" className="text-white bg-cyan-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      <img src={send} alt="send" />
  </button>
  </div>
      </div>
      <div className="flex py-3 md:py-20 md:block">
      <ul className="items-center justify-start space-y-8 md:flex md:space-x-6 md:space-y-0">
      <li className="text-black hover:text-indigo-200 pl-96">
        <Link to="/">Home</Link></li>
        <li className="text-black hover:text-indigo-200">
        <DropdownComponent/></li>
        <li className="text-black hover:text-indigo-200">
        <Link to="/contact">Contact Us</Link></li>
        <li className="text-black hover:text-indigo-200">
        <Link to="/blogs">Blogs</Link></li>
        </ul>
        <div className="flex justify-end px-20">
        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
      <li className="py-8">
        <button>
      <img src={twitter} alt="twitter" /></button></li>
        <li>
          <button>
        <img src={google} alt="google" /></button></li>
        <li>
          <button>
        <img src={facebook} alt="facebook" /></button></li>
        
        </ul>
        </div>
      </div>
      </div>
      </footer>
  
  );
}

export default Footer;