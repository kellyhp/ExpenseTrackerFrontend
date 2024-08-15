# **Expense Tracker Frontend Guide**

## Overview
This project is a full-stack Expense Tracker application that enables users to manage their expenses effectively. The application includes features such as user authentication, expense tracking, data visualization, and more. Firebase handles user authentication, MongoDB stores the data, and Next.js along with React and Chart.js powers the front end.

# Link to backend
[Backend](https://github.com/kellyhp/ExpenseTracker)

## Architecture
The architecture of the project is structured as follows:

- **Frontend:** Built using Next.js and React, the frontend provides an interactive user interface. Chart.js is used to visualize expense data.
- **Backend:** The backend is powered by Node.js and Express, with MongoDB handling the database operations (CRUD).
- **Authentication:** Firebase Authentication handles user sign-in, sign-out, account creation, and password recovery.
- **Database:** MongoDB is used to store all user data related to expenses and other relevant information.

## Technologies Used

- **Next.js**
- **React.js**
- **Sass**
- **Chart.js**
- **MongoDB**
- **NodeJS**
- **Firebase**
- **Render/Vercel**
- **Express**

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (>= 14.x)
- npm or yarn
- MongoDB (Local or MongoDB Atlas)
- Firebase account (for Authentication)
- Vercel/Heroku/Render account (for deployment)

## Installation Steps

Follow these steps to get the project running on your local machine:

Clone the repository:
```
git clone https://github.com/yourusername/expense-tracker.git
cd expense-tracker
```
Install dependencies
```
cd frontend
npm install
```


## Configuration Parameters
- Frontend Configuration (frontend/.env.local):
```
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id

NEXT_PUBLIC_API_BASE_URL = your_render_api
```
- Backend Configuration (backend/.env):
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
## Environment Setup

# Firebase Setup
1. Create a Firebase project at Firebase Console.
2. Enable Email/Password Authentication in Firebase Authentication.
3. Obtain the Firebase config credentials and update the frontend/.env.local file.
# MongoDB Setup
1. Install MongoDB locally or create a free cluster using MongoDB Atlas.
2. Update the MONGODB_URI in the backend/.env file with your MongoDB connection string.
# Running the Application Locally
1. Start the backend server:
2. Start the frontend server:
3. Open your browser and navigate to http://localhost:3000.

## Deployment Process

# Deploying the Frontend
1. Commit and push your code to GitHub.
2. Connect your GitHub repository to Vercel.
3. Vercel will automatically deploy your Next.js application.
# Deploying the Backend
1. Commit and push your backend code to GitHub.
2. Connect your GitHub repository to Heroku or Render.
3. Add environment variables in the dashboard.
4. Deploy the backend server.