import React from 'react'

const Nav2 = (props) => {
  return (
    <div>
      <ul className="navbar-links">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Services</li>
        <li>{props.theme}</li>
      </ul>
    </div>
  )
}

export default Nav2
