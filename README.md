# Udemy - Online Learning Platform

An online learning platform built using the MERN stack (MongoDB, Express, React, Node.js). This platform enables administrators to manage courses efficiently and allows students to explore, learn, and track their progress seamlessly.

## Project demo video
[https://drive.google.com/file/d/1KRU5xXmJ9a--lMHIf9RLyxEeBj6rb08D/view?usp=sharing](https://drive.google.com/file/d/1KRU5xXmJ9a--lMHIf9RLyxEeBj6rb08D/view?usp=sharing)

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

### Set Up Environment Variables

Create a `.env` file in the `backend` directory and add the following:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000

### Run the application:

```bash
# Backend
cd backend
npm install

# Frontend
cd frontend
npm start


Open your browser and navigate to:
[http://localhost:5000](http://localhost:5000)


