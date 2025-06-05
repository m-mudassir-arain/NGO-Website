import React from 'react'
import {FaTwitter,FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
import './App.css';


function DisplayIcons() {
  return (
    <div className="flex justify-evenly items-center w-50" id="DisplayIcons">
      <a className="icon-link icon-link-hover" href="www.twitter.com"><FaTwitter className="text-2xl text-slate-400 ms-3"/></a>
      <a className="icon-link icon-link-hover" href="www.facebook.com"><FaFacebook className="text-2xl text-slate-400 ms-3"/></a>
      <a className="icon-link icon-link-hover" href="www.instagram.com"><FaInstagram className="text-2xl text-slate-400 ms-3"/></a>
      <a className="icon-link icon-link-hover" href="www.linkedin.com"><FaLinkedin className="text-2xl text-slate-400 ms-3"/></a>
    </div>
  )
}


export default DisplayIcons