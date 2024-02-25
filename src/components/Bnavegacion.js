import React, { useState, useRef, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./paginas/Home";
import Admin from "./paginas/Admin";
import Galpon from "./paginas/Galpon";
import Inventario from "./paginas/Inventario";
import logo from '../grandfarm.png'

const Bnavegacion = () => {
  const [collapsed, setCollapsed] = useState(true);
  const navRef = useRef(null);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const handleOutsideClick = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setCollapsed(true);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  });

  return (
    <div>
      <BrowserRouter>
        <Navbar ref={navRef}>
          <NavbarBrand href="/" className="me-auto text-light">
            <Link className="container d-flex text-light w-100 link" to="/">
            <img
                alt="Kairos Tower"
                src={logo}
                style={{
                  height: 40,
                  width: 40,
                }}
              />
              <h5 className="text-light text-align-center fs-4 ms-1 mt-2">
               Grand Farm
              </h5>
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="me-2 toggler" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="text-light">
                  <Link className="link" to="/profile">
                    Perfil
                  </Link>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="text-light">
                  <Link className="link" to="/galpon">
                    Galpon
                  </Link>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="text-light">
                  <Link className="link" to="/inventario">
                    Inventario
                  </Link>
                </NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/profile" element={<Admin />} />
          <Route path="/galpon" element={<Galpon />} />
          <Route path="/inventario" element={<Inventario />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Bnavegacion;
