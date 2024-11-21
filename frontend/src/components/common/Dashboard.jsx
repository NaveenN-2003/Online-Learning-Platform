import React, { useContext, useState } from 'react';
import NavBar from './NavBar';
import UserHome from "./UserHome";
import { Container } from 'react-bootstrap';
import AddCourse from '../user/teacher/AddCourse';
import StudentHome from '../user/student/StudentHome';
import AdminHome from '../admin/AdminHome';
import { UserContext } from '../../App';
import EnrolledCourses from '../user/student/EnrolledCourses';
import CourseContent from '../user/student/CourseContent';
import AllCourses from '../admin/AllCourses';

const Dashboard = () => {
   const user = useContext(UserContext);
   const [selectedComponent, setSelectedComponent] = useState('home');

   const renderSelectedComponent = () => {
      switch (selectedComponent) {
         case 'home':
            return <UserHome />;
         case 'addcourse':
            return <AddCourse />;
         case 'enrolledCourses':
            return <EnrolledCourses />;
         case 'courseSection':
            return <CourseContent />;
         case 'allCourses':
            return <AllCourses />;
         default:
            return <UserHome />;
      }
   };

   return (
      <>
         <NavBar setSelectedComponent={setSelectedComponent} />
         <Container 
            className="my-3" 
            style={{
               padding: '20px',
               background: '#dddde8db', // Light grey background
               border: '1px solid lightblue', // Light blue border
               borderRadius: '5px',
            }}
         >
            {renderSelectedComponent()}
         </Container>
      </>
   );
};

export default Dashboard;
