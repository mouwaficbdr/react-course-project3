import React from "react"
import airbnbLogo from "/assets/Airbnb-logo.png"

export default function Navbar() {
  return (
    <nav>
      <img src={airbnbLogo} className="nav--logo" />
    </nav>
  );
}