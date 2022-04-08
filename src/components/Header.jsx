import React from 'react'

function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap">
        <ul className="py-10">
          <li className="mr-3"><h3 className="inline">Home</h3></li>
          <li className="mr-3"><h3 className="inline">Portfolio</h3></li>
          <li className="mr-3"><h3 className="inline">About</h3></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header