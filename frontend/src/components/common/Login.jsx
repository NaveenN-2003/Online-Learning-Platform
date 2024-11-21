import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav } from 'react-bootstrap';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axiosInstance from './AxiosInstance';

const Login = () => {
   const navigate = useNavigate();
   const [data, setData] = useState({
      email: "",
      password: "",
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setData({ ...data, [name]: value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      if (!data?.email || !data?.password) {
         return alert("Please fill all fields");
      } else {
         axiosInstance.post('/api/user/login', data)
            .then((res) => {
               if (res.data.success) {
                  alert(res.data.message);

                  localStorage.setItem("token", res.data.token);
                  localStorage.setItem("user", JSON.stringify(res.data.userData));
                  
                  // Check if the user is an admin
                  const userType = res.data.userData.type; // Assuming 'type' is the field that determines the user role
                  
                  if (userType === 'admin') {
                     navigate('/admin-home'); // Redirect to Admin Home
                  } else {
                     navigate('/dashboard'); // Redirect to user dashboard
                  }

                  setTimeout(() => {
                     window.location.reload();
                  }, 1000);
               } else {
                  alert(res.data.message);
               }
            })
            .catch((err) => {
               if (err.response && err.response.status === 401) {
                  alert("User doesn't exist");
               }
               navigate("/login");
            });
      }
   };

   return (
      <>
         <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
               <Navbar.Brand>
                  <h2 style={{ color: "#ff5722", fontWeight: "bold" }}>Udemy</h2>
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="navbarScroll" />
               <Navbar.Collapse id="navbarScroll">
                  <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                  </Nav>
                  <Nav>
                     <Link style={{ margin: "0 10px", color: "#ff5722", fontWeight: "bold" }} to={'/'}>
                        Home
                     </Link>
                     <Link style={{ margin: "0 10px", color: "#ff5722", fontWeight: "bold" }} to={'/login'}>
                        Login
                     </Link>
                     <Link style={{ margin: "0 10px", color: "#ff5722", fontWeight: "bold" }} to={'/register'}>
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
                  <Avatar sx={{ bgcolor: '#ff5722' }} />
                  <Typography
                     component="h1"
                     variant="h5"
                     sx={{ color: '#ff5722', fontWeight: 'bold', mt: 2 }}
                  >
                     Welcome Back!
                  </Typography>
                  <Box component="form" onSubmit={handleSubmit} noValidate>
                     <TextField
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        autoComplete="email"
                        autoFocus
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
                     <Box mt={3} mb={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                           type="submit"
                           variant="contained"
                           sx={{
                              width: '200px',
                              background: '#ff5722',
                              '&:hover': {
                                 background: '#e64a19',
                              },
                           }}
                        >
                           Sign In
                        </Button>
                     </Box>
                     <Grid container justifyContent="center">
                        <Grid item>
                           Don't have an account?{' '}
                           <Link
                              style={{ color: "#ff5722", fontWeight: "bold" }}
                              to={'/register'}
                           >
                              Sign Up
                           </Link>
                        </Grid>
                     </Grid>
                  </Box>
               </Box>
            </Container>
         </div>
      </>
   );
};

export default Login;
