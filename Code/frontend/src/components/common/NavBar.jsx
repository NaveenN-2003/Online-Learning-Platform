import React, { useContext } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { UserContext } from '../../App';
import { NavLink } from 'react-router-dom';

const NavBar = ({ setSelectedComponent }) => {
   const user = useContext(UserContext);

   if (!user) {
      return null;
   }

   const handleLogout = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/';
   };
   
   const handleOptionClick = (component) => {
      setSelectedComponent(component);
   };

   return (
      <Navbar expand="lg" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
         <Container fluid>
            <Navbar.Brand>
               <h3 style={{ color: '#2a73cc', fontWeight: 'bold' }}>Udemy</h3>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
               <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                  <NavLink
                     onClick={() => handleOptionClick('home')}
                     className="nav-link"
                     style={{ color: '#2a73cc', fontWeight: '500' }}
                  >
                     Home
                  </NavLink>
                  {user.userData.type === 'Teacher' && (
                     <NavLink
                        onClick={() => handleOptionClick('addcourse')}
                        className="nav-link"
                        style={{ color: '#2a73cc', fontWeight: '500' }}
                     >
                        Add Course
                     </NavLink>
                  )}
                  {user.userData.type === 'Admin' && (
                     <NavLink
                        onClick={() => handleOptionClick('courses')}
                        className="nav-link"
                        style={{ color: '#2a73cc', fontWeight: '500' }}
                     >
                        Courses
                     </NavLink>
                  )}
                  {user.userData.type === 'Student' && (
                     <NavLink
                        onClick={() => handleOptionClick('enrolledcourses')}
                        className="nav-link"
                        style={{ color: '#2a73cc', fontWeight: '500' }}
                     >
                        Enrolled Courses
                     </NavLink>
                  )}
               </Nav>
               <Nav>
                  <h5 className="mx-3" style={{ position: 'relative', display: 'inline-block' }}>
                     <span
                        style={{
                           position: 'relative',
                           display: 'inline-block',
                           fontSize: '20px',
                        }}
                     >
                        {`Welcome ${user.userData.name}!`}
                        <span
                           style={{
                              position: 'absolute',
                              top: '-10px',
                              left: '30px',
                              animation: 'sparkleMove 2s infinite alternate',
                           }}
                        />
                        <span
                           style={{
                              position: 'absolute',
                              top: '10px',
                              left: '-20px',
                              animation: 'sparkleMove 2s infinite alternate',
                              animationDelay: '1s',
                           }}
                        >
                           🎉
                        </span>
                     </span>
                  </h5>
                  <Button onClick={handleLogout} size="sm" variant="outline-danger">
                     Log Out
                  </Button>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
};

export default NavBar;

// Add this CSS to your stylesheet to enable the sparkle effect
const styles = {
   '@keyframes sparkleMove': {
      '0%': {
         transform: 'translate(0, 0)',
         opacity: 1,
      },
      '50%': {
         transform: 'translate(15px, -10px)',
         opacity: 0.6,
      },
      '100%': {
         transform: 'translate(-10px, 10px)',
         opacity: 1,
      },
   },
};
