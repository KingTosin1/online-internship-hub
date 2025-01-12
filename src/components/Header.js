import Link from 'next/link';
import React from 'react';
import { global } from 'styled-jsx/css'

function Header() {
  return (
    <div>
      <div className="header">
      <Link href="./landingpage"><h3>The Interns Hub</h3></Link>
        
          <ul>
            <li><Link href="./home">Home</Link></li>
            <li><Link href="./students">Students</Link></li>
            <li><Link href="./schools">Schools</Link></li>
            <li><Link href="./company">Company</Link></li>
            <li><Link href="./ourstory">Our Story</Link></li>
          </ul>
        
        <button>Courses</button>
      </div>
    </div>
  );
}

export default Header;
