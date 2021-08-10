import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  return (
    <Nav>
      <Logo>로고</Logo>
      <MenuBars />
      <NavMenu>
        {menuData.map((item, index) => {
          return (
            <NavMenuLinks to={item.link} key={index}>
              {item.title}
            </NavMenuLinks>
          );
        })}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary="true">
          연락하기
        </Button>
      </NavBtn>
    </Nav>
  );
};

const Nav = styled.nav`
  height: 60px;
  background: #000;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  box-sizing: border-box;
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  font-style: normal;
`;

const Logo = styled(Link)`
  ${NavLink}
`;

const MenuBars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    color: #fff;
    height: 1.6rem;
    width: 1.6rem;
  }
`;

const NavMenu = styled.i`
  display: flex;
  align-items: center;
  margin-left: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export default Navbar;
