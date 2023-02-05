import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { Navbar, Button } from "@nextui-org/react";

import "./navbar.scss";
import Images from "../../../constants/Images";

const NavBar = () => {
  const navigate = useNavigate();
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Parents",
      path: "/parents",
    },
    {
      name: "FAQs",
      path: "/faq",
    },
  ];
  return (
    <>
      <nav className="nav app__flex-2">
        <div className="img-size nav__logo">
          <img src={Images} alt="logo" />
        </div>
        <ul className="app__flex-2 nav__links">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className="nav__search">
          <input type="search" placeholder="Search" />
          <CiSearch />
        </div>
        <div className="nav__btn">
          <button onClick={() => navigate('/UserSelect')} className="btn-primary">Get Started</button>
        </div>
      </nav>

      <nav className="nav-mobile">
        <Navbar isBordered variant="sticky">
          <Navbar.Brand>
            <Navbar.Toggle aria-label="toggle navigation" />
            <div className="img-size nav__logo">
              <img src={Images} alt="logo" />
            </div>
          </Navbar.Brand>
          <Navbar.Content>
            <Navbar.Item>
              <Button className="btn-primary" auto flat as={Link} >
                Get Started
              </Button>
            </Navbar.Item>
          </Navbar.Content>
          <Navbar.Collapse>
            {navLinks.map((item, index) => (
              <Navbar.CollapseItem key={index}>
                <Link
                  color="inherit"
                  css={{
                    minWidth: "100%",
                  }}
                  to={item.path}
                >
                  {item.name}
                </Link>
              </Navbar.CollapseItem>
            ))}
          </Navbar.Collapse>
        </Navbar>
      </nav>
    </>
  );
};

export default NavBar;
