import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
   
    <Navbar expand="lg" className="bg-body-tertiary w-100">
    <Container fluid>
           <Navbar.Brand href="#">
          <img src="https://cdn.vectorstock.com/i/500p/28/22/stock-market-business-logo-design-template-vector-4962822.jpg" width="150px" height={"100px"} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', width:'37%' }}
           
          >
            <Nav.Link href="#action1" className='ps-4'>Home</Nav.Link>
            <Nav.Link href="#action2" className='ps-4'>About</Nav.Link>
            
            <NavDropdown title="Updates" className='ps-4' id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Nav-1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              Nav-2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
              Nav-3
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" className='ps-4'>
              News
            </Nav.Link>
            <Nav.Link href="#action2" className='ps-4'>More Info</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-3"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    
  );
}

export default NavScrollExample;