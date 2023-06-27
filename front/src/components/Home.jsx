import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

// import '../styles/Home.css';

const user = JSON.parse(localStorage.getItem('data'));
console.log(user)

// function Home() {
//   console.log('Home');
//   return (
//     <div>
//       <nav className="navbar">
//         <div className="navbar__links">
//           <Link to="/waybill-history">History</Link>
//           <Link to="/create-waybill">Create</Link>
//         </div>
//         <div className="navbar__profile">
//           <div className="dropdown">
//             <button className="dropdown__toggle">
//               <img src="user-icon.png" alt="User" className="dropdown__icon" />
//             </button>
//             <div className="dropdown__content">
//               <Link to="/profile">Profile</Link>
//               <Link to="/logout">Logout</Link>
//             </div>
//           </div>
//         </div>
//       </nav>
//       <div>
//         <h2>Welcome, {user.firstName}!! This is your Home page!</h2>
//         {/* Add your content here */}
//       </div>
//     </div>
//   );
// }

function Home() {
  return (
    <Navbar bg="dark" expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">WayBill</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              {user.role > 2 && <Nav.Link href="#">Admin</Nav.Link>}
              <Nav.Link href="#pricing">Create</Nav.Link>
              <NavDropdown.Divider />
              <NavDropdown title="Waybill" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">View All</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/waybill-form">
                Create New
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
            </Nav>
            <Navbar.Text className="ml-auto">
            Signed in as: <a href="#profile">{user.firstName} {user.lastName}</a>
          </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

// export default OffcanvasExample;

export default Home;
