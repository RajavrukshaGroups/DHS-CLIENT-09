import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'; // Import your custom CSS file
import sitLogo from '../../images/logo.png'; // Import the main logo
import smallLogo from '../../images/smalllog.svg'; // Import the smaller logo

function CustomNavbar() {
  const [isProjectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [isDownloadDropdownOpen, setDownloadDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 50) { // Adjust this value as needed
        navbar.classList.add('navbar-small');
      } else {
        navbar.classList.remove('navbar-small');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
  <Navbar
  id="navbar"
  variant="tabs"
  className="navbar-custom custom-sticky"
  expand="lg"
>
      <Container>
        <Navbar.Brand href="/">
           <div className="flex-1 flex justify-start transition-all duration-500 ">
            <img
              src={sitLogo}
              alt="DHS Logo"
              className={`object-contain transition-all duration-500 ${
                isScrolled ? "h-14 w-14" : "h-20 w-20"
              }`}
              onError={(e) =>
                (e.currentTarget.src =
                  "https://via.placeholder.com/150/0f3460/ffffff?text=DHS")
              }
            />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav-custom">
            <Nav.Item className="nav-item-custom">
              <Nav.Link href="/" className="nav-link-custom">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item-custom">
              <Nav.Link href="/about-us" className="nav-link-custom">About Us</Nav.Link>
            </Nav.Item>
            <NavDropdown
              title="Projects"
              id="nav-dropdown-projects"
              className="nav-item-custom nav-dropdown-custom"
              onMouseEnter={() => setProjectsDropdownOpen(true)}
              onMouseLeave={() => setProjectsDropdownOpen(false)}
              show={isProjectsDropdownOpen}
            >
              <NavDropdown.Item href="/projects/tapasihalli" className="dropdown-item-custom">Defence Habitat - Tapasihalli</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/projects/marasandra" className="dropdown-item-custom">Defence Habitat - Marasandra</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="/projects/hassan" className="dropdown-item-custom">Defence Habitat - Hassan</NavDropdown.Item> */}
            </NavDropdown>
            <NavDropdown
              title="Download"
              id="nav-dropdown-download"
              className="nav-item-custom nav-dropdown-custom"
              onMouseEnter={() => setDownloadDropdownOpen(true)}
              onMouseLeave={() => setDownloadDropdownOpen(false)}
              show={isDownloadDropdownOpen}
            >
              <NavDropdown.Item href="/download/brochure">Brochure Download</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/download/application">Application Download</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item className="nav-item-custom">
              <Nav.Link href="/latest-news" className="nav-link-custom">
                Latest News
                <span className="notification-badge">New</span> {/* Notification badge with number */}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item-custom">
              <Nav.Link href="/contact-us" className="nav-link-custom">Contact Us</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item-custom">
              <Nav.Link href="/faq" className="nav-link-custom">FAQ</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item-custom">
              <Nav.Link href="/gallery" className="nav-link-custom">Gallery</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
