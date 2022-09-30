import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavBarComponent() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Parent App</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
           
        
          </Nav>
          <div className="d-flex">
            <Button variant="outline-success">
              <Link to="create" className="nav-link">
                Register
              </Link>
            </Button>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarComponent;