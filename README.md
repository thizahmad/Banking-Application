# Paytm-Like Application

A Paytm-like web application with the following features:
- User registration (Sign Up)
- User login (Sign In)
- Dashboard displaying real-time user balance
- Money transfer functionality
- Search for account balance

## Features

1. **Sign Up and Sign In**
   - Secure user registration and login system using JWT for authentication.
   - Passwords are securely hashed before storing them in the database.

2. **Dashboard**
   - Displays the user's real-time account balance.

3. **Money Transfer**
   - Allows users to transfer money to other accounts securely.

4. **Search for Account Balance**
   - Fetches account balances for specific users using their account details.

## Tech Stack

### Frontend
- **React**: For building the user interface.
- **Tailwind CSS**: For responsive and modern styling.

### Backend
- **Node.js**: Server-side runtime environment.
- **Express.js**: Web framework for handling routes and middleware.
- **MongoDB**: Database for storing user data and transaction history.

### Authentication
- **JWT (JSON Web Token)**: For secure authentication and authorization.

## Installation

### Prerequisites
- Node.js (>=14.x)
- MongoDB (local or hosted)

### Steps to Run the Application

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/paytm-like-app.git
   cd paytm-like-app
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the `backend` directory with the following keys:
   ```env
   PORT=5000
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_jwt_secret
   ```

   Run the backend server:
   ```bash
   npm start
   ```

3. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   ```

   Run the frontend development server:
   ```bash
   npm start
   ```

4. **Access the Application**
   Open your browser and navigate to `http://localhost:3000`.

## API Endpoints

### Authentication
- `POST /api/v1/user/signup` - Register a new user.
- `POST /api/v1/user/signin` - Log in an existing user.

### User Management
- `GET /api/v1/user` - Fetch all users.
- `GET /api/v1/user/:id` - Fetch user details by ID.

### Account Management
- `GET /api/v1/account/balance` - Fetch the account balance of the logged-in user.
- `POST /api/v1/account/transfer` - Perform a transaction between accounts.

## Future Enhancements
- Add transaction history feature.
- Implement two-factor authentication for increased security.
- Add support for multiple currencies.

## License

This project is licensed under the MIT License. See the LICENSE file for details.



