import React from "react";
import { FaBars } from "react-icons/fa";
import {
  NavbarContainer,
  Nav,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

//rafce

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          {/* <NavLogo to="/">F. A. C.</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon> */}
          <NavMenu>
          <NavItem>
              <NavLinks to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}>Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}>Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}>Contact</NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinks to="signup">Sign Up</NavLinks>
            </NavItem> */}
          </NavMenu>
          <NavBtn>
            {/* <NavBtnLink to="/signin">Sign In </NavBtnLink> */}
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;