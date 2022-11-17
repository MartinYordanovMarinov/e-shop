import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export const SecondHeader = () => {
  return (
    <header
      id="header"
      className=" position-sticky d-flex align-items-center headder "
    >
      <div className="container">
        <div className="header-container d-flex align-items-center justify-content-between">
          <div className="logo">
            <h1 className="text-light">
              <LinkContainer to="/">
                <Navbar.Brand>ПЛАМ</Navbar.Brand>
              </LinkContainer>
              <img src="assets/img/logo.png" alt="logo" />
            </h1>
          </div>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Начало
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  За нас
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#services">
                  Услуги
                </a>
              </li>
              <li>
                <a className="nav-link scrollto " href="#portfolio">
                  Магазин
                </a>
              </li>

              <NavDropdown title="Документи">
                {' '}
                <NavDropdown.Item>ОБРАЗЕЦ №7</NavDropdown.Item>
                <NavDropdown.Item>ОБРАЗЕЦ №3</NavDropdown.Item>
                <NavDropdown.Item>ЛИЦЕНЗ ТРАНСПОРТ</NavDropdown.Item>
                <NavDropdown.Item>ПЗЛД</NavDropdown.Item>
              </NavDropdown>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Контакти
                </a>
              </li>
              <li>
                <LinkContainer to="/store">
                  <Nav.Link className="getstarted scrollto">
                   
                      Плам магазин
                    
                  </Nav.Link>
                </LinkContainer>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </div>
    </header>
  );
};
