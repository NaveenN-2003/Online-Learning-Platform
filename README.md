# Udemy Clone - Online Learning Platform

An online learning platform built using the MERN stack (MongoDB, Express, React, Node.js). This platform enables administrators to manage courses efficiently and allows students to explore, learn, and track their progress seamlessly.

## Features

### Admin
- Register and log in securely.
- Manage courses: Create, update, and delete courses.

### Students
- Register and log in to the platform.
- Browse available courses.
- Track learning progress effectively.

### General
- Secure user authentication powered by **JWT**.
- RESTful APIs for user and course management.

## Technologies Used

### Frontend
- **React**: Dynamic user interface.
- **Axios**: HTTP requests for seamless API integration.

### Backend
- **Node.js** and **Express.js**: Server-side logic and API endpoints.
- **MongoDB**: Robust database management.

### Authentication
- **JWT (JSON Web Tokens)**: Ensures secure authentication and role-based access.

### Middleware
- **Express.js**: Request handling and routing.
- **Mongoose**: Elegant MongoDB object modeling.

## Setup Instructions

Follow these steps to run the project locally:

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.
- [MongoDB](https://www.mongodb.com/) server set up.
- Package manager **npm** or **yarn** installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/udemy-clone.git
   cd udemy-clone
### Installation
Install dependencies:

bash
Copy code
# Backend
cd backend
npm install

# Frontend
cd frontend
npm install
Set up environment variables:

Create a .env file in the backend directory and add the following:
env
Copy code
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
Run the application:

bash
Copy code
# Backend
cd backend
npm start

# Frontend
cd frontend
npm start
Open your browser and navigate to:

arduino
Copy code
http://localhost:3000

API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Log in a user
GET	/api/courses	Get all courses
POST	/api/courses	Create a new course (teacher only)
PUT	/api/courses/:id	Update a course (taecher only)
DELETE	/api/courses/:id	Delete a course (Admin only)
csharp
Copy code
