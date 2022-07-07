import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
export default function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/Profile">Profile</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Name">Name</Nav.Link>
            <Nav.Link href="/Age">Age</Nav.Link>
            <Nav.Link href="/Description">Description</Nav.Link>
            <Nav.Link href="/Major">Major</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
