import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Pokedex</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Pokemon</Nav.Link>
        <Nav.Link href="#items">Items</Nav.Link>
        <Nav.Link href="#location">Locations</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search pokemon"
          className="mr-sm-2"
        />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
}

export default NavBar;
