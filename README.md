Udemy Clone - Online Learning Platform
This online learning platform is built using the MERN stack (MongoDB, Express, React, Node.js). It enables administrators to manage courses efficiently and allows students to explore, learn, and track their progress seamlessly.

Features
Admin
Register and log in securely.
Manage courses: Create, update, and delete courses.
Students
Register and log in to the platform.
Browse available courses.
Track learning progress effectively.
General
Secure user authentication powered by JWT.
RESTful APIs for user and course management.
Technologies Used
Frontend
React: Dynamic user interface.
Axios: HTTP requests for seamless API integration.
Backend
Node.js and Express.js: Server-side logic and API endpoints.
MongoDB: Robust database management.
Authentication
JWT (JSON Web Tokens): Ensures secure authentication and role-based access.
Middleware
Express.js: Request handling and routing.
Mongoose: Elegant MongoDB object modeling.
Setup Instructions
Prerequisites
Ensure the following are installed:

Node.js
MongoDB
Git

1. Clone the Repository
   bash
   Copy code
   git clone https://github.com/your-username/online-learning-platform.git
   cd online-learning-platform
2. Backend Setup
   Navigate to the server directory:

bash
Copy code
cd server
Install dependencies:

bash
Copy code
npm install
Create a .env file in the server directory with the following variables:

plaintext
Copy code
MONGO_URI=mongodb://localhost:27017/YourDatabaseName
JWT_SECRET=your_jwt_secret
Start the backend server:

bash
Copy code
npm start
The backend will run on http://localhost:5000.

3. Frontend Setup
   Navigate to the client directory:

bash
Copy code
cd client
Install dependencies:

bash
Copy code
npm install
Start the React development server:

bash
Copy code
npm start
The frontend will run on http://localhost:3000.

API Endpoints
Users
POST /api/users/register: Register a user.
POST /api/users/login: Log in a user.
Courses
GET /api/courses: Retrieve all courses.
POST /api/courses/create: Create a new course (Admin only).
Features Breakdown
Frontend
Intuitive React-based UI.
Secure JWT-based authentication.
Role-based access control (Admin/Student).
Dynamic course listing and user dashboards.
Backend
Efficient and scalable RESTful API.
Robust database management with MongoDB.
Middleware for secure routing and role validation.
