
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../logo.svg";
import { Container,Navbar,Nav,NavDropdown,Form,FormControl,Button} from "react-bootstrap";

function NavBarComp() {
  return (
    <div>
      <Navbar bg="light" expand="xl">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{" "}
            Vivero Joako
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
             
              <NavDropdown title="Productos" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Planta00</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Planta01</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Macetas</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action2">Nosotros</Nav.Link>
              <Nav.Link href="#">Contacto</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBarComp;
