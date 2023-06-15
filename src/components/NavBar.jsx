import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <NavLink to="/" style={logoStyle}>
          72 Dragon Service
        </NavLink>
        <div style={linksContainerStyle}>
          <div style={mobileMenuToggleStyle} onClick={toggleMobileMenu}>
            ☰
          </div>
          {isMobileMenuOpen && (
            <div style={mobileMenuStyle}>
              <NavLink
                to="/"
                style={linkStyle}
                activeStyle={activeLinkStyle}
                onClick={toggleMobileMenu}
              >
                Home
              </NavLink>
              <NavLink
                to="/works"
                style={linkStyle}
                activeStyle={activeLinkStyle}
                onClick={toggleMobileMenu}
              >
                Works
              </NavLink>
              <NavLink
                to="/about"
                style={linkStyle}
                activeStyle={activeLinkStyle}
                onClick={toggleMobileMenu}
              >
                About
              </NavLink>
            </div>
          )}
          <NavLink
            to="/works"
            style={linkStyle}
            activeStyle={activeLinkStyle}
          >
            WORKS
          </NavLink>
          <NavLink
            to="/about"
            style={linkStyle}
            activeStyle={activeLinkStyle}
          >
            ABOUT
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

// CSS styles
const navStyle = {
  backgroundColor: "green",
  color: "white",
  padding: "10px",
};

const containerStyle = {
  display: "flex",
  justifyContent: "space-between",
};

const logoStyle = {
  color: "black",
  textDecoration: "none",
  fontSize: "20px",
  fontWeight: "bold",
};

const linksContainerStyle = {
  display: "flex",
  gap: "10px",
};

const linkStyle = {
  color: "black",
  textDecoration: "none",
  fontWeight: "bold",
};

const activeLinkStyle = {
  color: "white",
};

const mobileMenuToggleStyle = {
  display: "none",
  cursor: "pointer",
  fontSize: "20px",
  fontWeight: "bold",
};

const mobileMenuStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

// Media query for mobile menu
const mediaQuery = window.matchMedia("(max-width: 600px)");

function handleMediaQueryChange(e) {
  if (e.matches) {
    mobileMenuToggleStyle.display = "block";
    linksContainerStyle.display = "none";
  } else {
    mobileMenuToggleStyle.display = "none";
    linksContainerStyle.display = "flex";
  }
}

mediaQuery.addListener(handleMediaQueryChange);
handleMediaQueryChange(mediaQuery);

export default NavBar;
