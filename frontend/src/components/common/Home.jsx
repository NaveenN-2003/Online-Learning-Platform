import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Button, Navbar } from "react-bootstrap";
import AllCourses from "./AllCourses";
import './Home.css'; // Import the CSS file for styles

const Home = () => {
  const [studentsCount, setStudentsCount] = useState(0);
  const [jobOffersCount, setJobOffersCount] = useState(0);

  useEffect(() => {
    const incrementCounter = (setCount, targetValue) => {
      let count = 0;
      const increment = () => {
        if (count < targetValue) {
          count += Math.ceil(targetValue / 100); // Increment slowly
          setCount(count);
          setTimeout(increment, 20); // Recurse with timeout for smooth animation
        }
      };
      increment(); // Start the counter increment
    };

    incrementCounter(setStudentsCount, 1000000); // 1 Million Students
    incrementCounter(setJobOffersCount, 10000); // 10,000 Job Offers
  }, []);

  return (
    <>
      {/* Navbar Section */}
      <Navbar expand="lg" className="bg-dark shadow-sm">
        <Container fluid>
          <Navbar.Brand>
            <h2 style={{ color: "#FF9900", fontWeight: "bold" }}>Udemy</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto" navbarScroll>
              <Link to={"/"} className="nav-link mx-3" style={{ color: "#FF9900" }}>
                Home
              </Link>
              <Link to={"/login"} className="nav-link mx-3" style={{ color: "#FF9900" }}>
                Login
              </Link>
              <Link to={"/register"} className="nav-link mx-3" style={{ color: "#FF9900" }}>
                Register
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <div id="home-container" className="first-container d-flex align-items-center justify-content-start position-relative">
        {/* Background with animated numbers */}
        <div className="background-container position-absolute w-100">
          <h3 className="counter-text" style={{ color: "#FF9900" }}>
            {studentsCount}+ Students
          </h3>
          <h3 className="counter-text" style={{ color: "#FF9900" }}>
            {jobOffersCount}+ Job Offers
          </h3>
          <h3 className="counter-text" style={{ color: "#FF9900" }}>
            Industry Experts on Board
          </h3>
        </div>

        {/* Text Content */}
        <div className="content-home animate__animated animate__fadeInLeft z-index-1">
          <p>
            Transform Your Career with Udemy.<br />
            <span style={{ color: "#FF9900", fontWeight: "bold" }}>
              Upskill at Your Own Pace.
            </span>
          </p>
          <Link to={"/register"}>
            <Button variant="warning" className="m-2" size="md">
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>

      {/* Trending Courses Section */}
      <Container className="second-container my-5">
        <h2 className="text-center my-4" style={{ color: "#FF9900", fontWeight: "bold" }}>
          Trending Courses
        </h2>
        <AllCourses />
      </Container>

      {/* New Section: Testimonials */}
      <Container className="my-5">
        <h2 className="text-center my-4" style={{ color: "#FF9900", fontWeight: "bold" }}>
          What Our Learners Say
        </h2>
        <div className="testimonials d-flex justify-content-center">
          <div className="testimonial-item text-center mx-4">
            <p>"Udemy has been a game-changer for my career. The courses are engaging and the instructors are top-notch!"</p>
            <p><strong>- Alex J.</strong></p>
          </div>
          <div className="testimonial-item text-center mx-4">
            <p>"Thanks to Udemy, I was able to switch careers and land my dream job in tech!"</p>
            <p><strong>- Sarah L.</strong></p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
