import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <div className="logo"> <h1> Logo </h1>
            </div>
            <div className="link-container">
                <Link className= "page" href='/'>
                    Home
                    </Link>
                <Link className = "page" href='/about'>
                    About
                    </Link>
                <Link className="page" href='/portfolio'>
                    Portfolio
                    </Link>
 .           </div>

        </ul>
    </nav>
  )
}

export default Navbar;