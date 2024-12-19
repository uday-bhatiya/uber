# RIDE-SHARING APPLICATION (UBER CLONE)

A full-stack ride-sharing application built using the MERN stack with real-time features, animations, and robust validation mechanisms.  

## Features  
- **Real-time Ride Booking**: Users can book rides with ease.  
- **Map Integration**: Utilized OpenStreetMap for real-time location tracking and route visualization.  
- **Authentication**: Secure user authentication using `jsonwebtoken`.  
- **Form Validation**: Ensured input validation using `express-validator`.  
- **State Management**: Efficient state handling with Context API.  
- **Smooth Animations**: Integrated GSAP for minor animations to enhance user experience.  

## Tech Stack  
### Frontend:  
- **React**: For building the user interface.  
- **React Router DOM**: For handling application routing.  
- **Axios**: For making API requests.  
- **GSAP**: For animations.  

### Backend:  
- **Node.js**: Server-side runtime environment.  
- **Express.js**: Backend framework.  
- **jsonwebtoken**: For secure authentication.  
- **express-validator**: For input validation.  

### Database:  
- **MongoDB**: For storing user and ride data.  

## Installation  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/uday-bhatiya/uber
   ```
2. Navigate to the project directory:
   ```bash
   cd uber
   ```
3. Install dependencies for both frontend and backend:
   ```bash
    cd frontend  
   npm install  
   cd ../backend  
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in both the backend and frontend directories.
   - Add your **MongoDB connection string**, **JWT secret**, and other required keys in the backend `.env` file.
   - Add the **base URL** string in the frontend `.env` file
   
5. Run the development servers:
   #### Backend
   ```bash
   cd backend
   ```
   ```bash
   npm run dev
   ```
   #### Frontend  
   ```bash
   cd frontend
   ```
   ```bash
   npm run dev
   ```
## Usage
- Open your browser and navigate to `http://localhost:3000`
- Sign up or log in to book a ride
## Contributing
Contributions are welcome! Feel free to fork the repository and submit pull requests.
