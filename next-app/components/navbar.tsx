'use client';
import Link from 'next/link'
import React from 'react'
import { usePathname} from 'next/navigation';

const Navbar = () => {
  const pathName = usePathname();
  
  return (
    <div>
      {pathName == '/loginnnn/loginadmin' ?(<li>
        <Link href="/loginnnn/loginadmin">Admin Login</Link>
      </li>) : (
    <ul className="login-menu">
      <li>
        <Link href="/loginnnn/loginuser">Regular user</Link>
      </li>
    </ul>
    )}
    </div>
  );
}


export default Navbar