import React from "react";
import Link from 'next/link';
import './HomeNavbarStyle.css'

export default function HomeNavbar({logo,button}) {
  return (
    <nav className="bottom">
<div className="container-nav">
    <div className="logo">{logo}</div>
    <ul className="nav-items">
       <li><Link href={'#'}>Home</Link></li>
       <li><Link href={'#'}>Students</Link></li>
       <li><Link href={'#'}>News</Link></li>
       <li><Link href={'teachers'}>Teachers</Link></li>
       <li><Link href={'#'}>About</Link></li>
       <li><Link href={'courses'}>Courses</Link></li>
    </ul>
  <button className="button">{button}</button>
  </div>
  </nav>
  );
}
