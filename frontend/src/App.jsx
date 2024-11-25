import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

import "./App.css";
import Home from "./components/common/Home";
import Login from "./components/common/Login";
import Register from "./components/common/Register";
import Dashboard from "./components/common/Dashboard";
import CourseContent from "./components/user/student/CourseContent";
import AdminHome from "./components/admin/AdminHome";  // Admin Home Component
import AllCourses from "./components/admin/AllCourses"; // Admin AllCourses Page

// Create context to share user and admin data across components
export const UserContext = createContext();

function App() {
  const date = new Date().getFullYear();
  const [userData, setUserData] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [adminData, setAdminData] = useState(null);
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);

  // Fetch user and admin data from localStorage
  const getData = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const admin = JSON.parse(localStorage.getItem("admin"));
      if (user) {
        setUserData(user);
        setUserLoggedIn(true);
      } else {
        setUserLoggedIn(false);
      }
      if (admin) {
        setAdminData(admin);
        setAdminLoggedIn(true);
      } else {
        setAdminLoggedIn(false);
      }
    } catch (error) {
      console.log("Error loading data from localStorage:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <UserContext.Provider value={{ userData, userLoggedIn, adminData, adminLoggedIn }}>
      <div className="App">
        <Router>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* User-specific routes */}
              {userLoggedIn ? (
                <>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/courseSection/:courseId/:courseTitle" element={<CourseContent />} />
                </>
              ) : (
                <Route path="/login" element={<Login />} />
              )}

              {/* Admin-specific routes */}
              {adminLoggedIn ? (
                <>
                  <Route path="/admin-home" element={<AdminHome />} />
                  <Route path="/admin-courses" element={<AllCourses />} /> {/* Admin route for AllCourses */}
                </>
              ) : (
                <Route path="/login" element={<Login />} />
              )}
            </Routes>
          </div>
          <footer className="footer">
            <div>© {date} Copyright: Udemy</div>
          </footer>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
