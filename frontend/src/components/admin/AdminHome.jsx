import React, { useState, useEffect } from 'react';
import { Button, styled, TableRow, TableHead, TableContainer, Paper, Table, TableBody, TableCell, tableCellClasses } from '@mui/material';
import axiosInstance from '../common/AxiosInstance';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
   [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.main, // Header background color
      color: theme.palette.common.white, // White text color
      fontWeight: 'bold',
      fontSize: 16,
      borderBottom: '2px solid #f1f1f1', // Light border for header
   },
   [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      padding: '16px 12px', // Larger padding for better spacing
      borderBottom: '1px solid #ddd', // Light gray border
   },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
   '&:hover': {
      backgroundColor: theme.palette.grey[200], // Light gray hover effect
   },
   '&:last-child td, &:last-child th': {
      border: 0,
   },
}));

const AllCourses = () => {
   const [allCourses, setAllCourses] = useState([]);

   const allCoursesList = async () => {
      try {
         const res = await axiosInstance.get('api/admin/getallcourses', {
            headers: {
               Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
         });
         if (res.data.success) {
            setAllCourses(res.data.data);
         } else {
            alert(res.data.message);
         }
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      allCoursesList();
   }, []);

   const deleteCourse = async (courseId) => {
      const confirmation = window.confirm('Are you sure you want to delete this course?');
      if (!confirmation) {
         return;
      }
      try {
         const res = await axiosInstance.delete(`api/user/deletecourse/${courseId}`, {
            headers: {
               Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
         });
         if (res.data.success) {
            alert(res.data.message);
            allCoursesList();
         } else {
            alert('Failed to delete the course');
         }
      } catch (error) {
         console.log('An error occurred:', error);
      }
   };

   return (
      <TableContainer component={Paper} sx={{ boxShadow: 6 }}>
         <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
               <TableRow>
                  <StyledTableCell>Course ID</StyledTableCell>
                  <StyledTableCell align="center">Course Name</StyledTableCell>
                  <StyledTableCell align="left">Course Educator</StyledTableCell>
                  <StyledTableCell align="center">Course Category</StyledTableCell>
                  <StyledTableCell align="left">Course Price</StyledTableCell>
                  <StyledTableCell align="left">Course Sections</StyledTableCell>
                  <StyledTableCell align="left">Enrolled Students</StyledTableCell>
                  <StyledTableCell align="center">Action</StyledTableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {allCourses.length > 0 ? (
                  allCourses.map((course) => (
                     <StyledTableRow key={course._id}>
                        <StyledTableCell>{course._id}</StyledTableCell>
                        <StyledTableCell align="center">{course.C_title}</StyledTableCell>
                        <StyledTableCell align="left">{course.C_educator}</StyledTableCell>
                        <StyledTableCell align="center">{course.C_categories}</StyledTableCell>
                        <StyledTableCell align="left">${course.C_price}</StyledTableCell>
                        <StyledTableCell align="left">{course.sections.length}</StyledTableCell>
                        <StyledTableCell align="left">{course.enrolled}</StyledTableCell>
                        <StyledTableCell align="center">
                           <Button
                              onClick={() => deleteCourse(course._id)}
                              size="small"
                              sx={{
                                 color: '#f44336', // Red color for delete button
                                 fontSize: '0.875rem',
                                 padding: '4px 8px',
                                 '&:hover': {
                                    backgroundColor: '#fdecea', // Light red hover effect
                                 },
                              }}
                           >
                              Delete
                           </Button>
                        </StyledTableCell>
                     </StyledTableRow>
                  ))
               ) : (
                  <StyledTableRow>
                     <StyledTableCell colSpan={8} align="center">
                        No courses found
                     </StyledTableCell>
                  </StyledTableRow>
               )}
            </TableBody>
         </Table>
      </TableContainer>
   );
};

export default AllCourses;
