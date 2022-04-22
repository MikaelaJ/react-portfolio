import React from 'react'

function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap">
        <ul className="py-10">
          <li className="mr-3"><a href="#"><h3 className="inline">Home</h3></a></li>
          <li className="mr-3"><a href="#"><h3 className="inline">Portfolio</h3></a></li>
          <li className="mr-3"><a href="/about"><h3 className="inline">About</h3></a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header