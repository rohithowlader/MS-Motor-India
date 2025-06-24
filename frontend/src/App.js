import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CarList from "./components/CarList";
import CarForm from "./components/CarForm";
import { Container, Navbar, Nav, Offcanvas, Button } from "react-bootstrap";
import { List } from "react-bootstrap-icons"; // Optional: For hamburger icon

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);
  const closeSidebar = () => setShowSidebar(false);

  return (
    <Router>
      {/* Top Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-3 shadow-sm">
        <Container fluid>
          {/* Sidebar Toggle Button (Only shows on small screens) */}
          <Button
            variant="outline-light"
            className="d-lg-none me-2"
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
          >
            <List size={24} />
          </Button>

          <Navbar.Brand as={Link} to="/">
            Car App
          </Navbar.Brand>

          {/* Desktop Nav */}
          <Nav className="ms-auto d-none d-lg-flex">
            <Nav.Link as={Link} to="/">
              Cars
            </Nav.Link>
            <Nav.Link as={Link} to="/add">
              Add Car
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Collapsible Sidebar (Offcanvas) */}
      <Offcanvas
        show={showSidebar}
        onHide={closeSidebar}
        placement="start"
        backdrop={true}
        scroll={true}
        className="bg-dark text-white"
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>Navigation</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link
              as={Link}
              to="/"
              onClick={closeSidebar}
              className="text-white"
            >
              Cars
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/add"
              onClick={closeSidebar}
              className="text-white"
            >
              Add Car
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Main Content */}
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<CarList />} />
          <Route path="/add" element={<CarForm />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
