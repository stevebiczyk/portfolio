import { GitHub } from "@mui/icons-material";
import React from "react";
import { Nav, NavLink } from "react-router-dom";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  background: #000;
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
  }

const NavBar = () => {
  return (
    <Nav>
      <NavContainer>
        <NavLogo>Logo</NavLogo>
        <MobileIcon></MobileIcon>
        <NavItems>
          <NavItem>Home</NavItem>
        </NavItems>
        <ButtonContainer>
          <GitHubButton>GitHub Profile</GitHubButton>
        </ButtonContainer>
      </NavContainer>
    </Nav>
  );
};

export default NavBar;
