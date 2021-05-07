import logo from './logo.png';
import './App.css';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function App() {
  return (
    <div className="App font-serif">

      <Navbar collapseOnSelect className="text-md bg-gray-100 font-semibold tracking-wide" expand="lg" >
      <LinkContainer to="/home">
               <Navbar.Brand  className="App-logo  pr-5"><Image src={logo}></Image></Navbar.Brand>
       </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto ">
            <LinkContainer to="/home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/event">
              <Nav.Link>Event</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/api">
              <Nav.Link>Api</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/apiWithAxios">
              <Nav.Link>Api With Axios</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/ClassComponent">
              <Nav.Link>Class Component</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </div>
  );
}

export default App;
