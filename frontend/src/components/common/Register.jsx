import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav } from 'react-bootstrap';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axiosInstance from './AxiosInstance';
import Dropdown from 'react-bootstrap/Dropdown';

const Register = () => {
   const navigate = useNavigate();
   const [selectedOption, setSelectedOption] = useState('Select User Type');
   const [data, setData] = useState({
      name: '',
      email: '',
      password: '',
      type: '',
   });

   const handleSelect = (eventKey) => {
      setSelectedOption(eventKey);
      setData({ ...data, type: eventKey });
   };

   const handleChange = (e) => {
      const { name, value } = e.target;
      setData({ ...data, [name]: value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (!data.name || !data.email || !data.password || !data.type) {
         return alert('Please fill all fields');
      } else {
         axiosInstance
            .post('/api/user/register', data)
            .then((response) => {
               if (response.data.success) {
                  alert(response.data.message);
                  if (data.type === 'Admin') {
                     navigate('/adminhome');
                  } else if (data.type === 'Teacher') {
                     navigate('/allcourses');
                  } else {
                     navigate('/dashboard');
                  }
               } else {
                  console.log(response.data.message);
               }
            })
            .catch((error) => {
               console.log('Error', error);
            });
      }
   };

   return (
      <>
         <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
               <Navbar.Brand>
                  <h2 style={{ color: '#ff5722', fontWeight: 'bold' }}>Udemy</h2>
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="navbarScroll" />
               <Navbar.Collapse id="navbarScroll">
                  <Nav className="me-auto my-2 my-lg-0" navbarScroll></Nav>
                  <Nav>
                     <Link style={{ margin: '0 10px', color: '#ff5722', fontWeight: 'bold' }} to={'/'}>
                        Home
                     </Link>
                     <Link style={{ margin: '0 10px', color: '#ff5722', fontWeight: 'bold' }} to={'/login'}>
                        Login
                     </Link>
                     <Link style={{ margin: '0 10px', color: '#ff5722', fontWeight: 'bold' }} to={'/register'}>
                        Register
                     </Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
         <div className="first-container">
            <Container
               component="main"
               style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minHeight: '100vh',
                  background: '#f7f7f7',
               }}
            >
               <Box
                  sx={{
                     marginTop: 8,
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center',
                     padding: '20px',
                     background: '#ffffff',
                     boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                     borderRadius: '12px',
                     width: '400px',
                  }}
               >
                  <Typography
                     component="h1"
                     variant="h5"
                     sx={{
                        color: '#ff5722',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        fontSize: '1.8rem',
                     }}
                  >
                     Sign Up to Udemy!
                  </Typography>
                  <Box component="form" onSubmit={handleSubmit} noValidate>
                     <TextField
                        margin="normal"
                        fullWidth
                        id="name"
                        label="Full Name"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        autoComplete="name"
                        autoFocus
                        InputProps={{
                           style: { background: '#fff', borderRadius: '5px' },
                        }}
                     />
                     <TextField
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        autoComplete="email"
                        InputProps={{
                           style: { background: '#fff', borderRadius: '5px' },
                        }}
                     />
                     <TextField
                        margin="normal"
                        fullWidth
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        InputProps={{
                           style: { background: '#fff', borderRadius: '5px' },
                        }}
                     />
                     <Dropdown className="my-3">
                        <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                           {selectedOption}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                           <Dropdown.Item onClick={() => handleSelect('Student')}>Student</Dropdown.Item>
                           <Dropdown.Item onClick={() => handleSelect('Teacher')}>Teacher</Dropdown.Item>
                           <Dropdown.Item onClick={() => handleSelect('Admin')}>Admin</Dropdown.Item>
                        </Dropdown.Menu>
                     </Dropdown>
                     <Box mt={1} mb={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                           type="submit"
                           variant="contained"
                           sx={{
                              width: '180px',
                              background: '#ff5722',
                              '&:hover': {
                                 background: '#e64a19',
                              },
                           }}
                        >
                           Register
                        </Button>
                     </Box>
                     <Box sx={{ textAlign: 'center', marginTop: 1 }}>
                        Already have an account?{' '}
                        <Link style={{ color: '#ff5722', fontWeight: 'bold' }} to={'/login'}>
                           Sign In
                        </Link>
                     </Box>
                  </Box>
               </Box>
            </Container>
         </div>
      </>
   );
};

export default Register;
