# User Management Assignment

## Overview

This project provides a simple User Management system where you can:

- Log in to the application.
- View a list of users.
- Edit user details.
- Delete users.

The goal of this assignment is to provide a user-friendly interface for managing users and to implement basic CRUD operations (Create, Read, Update, Delete).

## Features

- **Login Page**: Users can log in to access the user management system.
- **View Users**: Once logged in, users can see a list of all users.
- **Edit User**: Users can update the details (e.g., first name, last name, and email) of a user.
- **Delete User**: Users can delete a user from the system.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **Axios**: Used for making HTTP requests to fetch and modify user data.
- **Tailwind CSS**: For styling the components with utility-first CSS classes.
- **Context API**: Used for managing the authentication state globally across the application.

## Installation

To set up this project on your local machine, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/user-management.git
   cd user-management
   ```

2. **Install dependencies:**

   Make sure you have [Node.js](https://nodejs.org/) installed, then run the following command to install the necessary dependencies:

   ```bash
   npm install
   ```

3. **Run the application:**

   Start the development server with:

   ```bash
   npm start
   ```

   This will open the app in your browser at `http://localhost:3000`.

## How to Use

1. **Login**: On the login screen, enter your credentials. For this demo, the login is handled via `sessionStorage` with a simple check for a token.
2. **View Users**: After logging in, you will be able to view a list of users retrieved from an API (`https://reqres.in/api/users`).

3. **Edit User**: To edit a user's details, click the "Edit" button next to a user. A form will appear allowing you to update the user's information.

4. **Delete User**: Click the "Delete" button next to any user to remove that user from the list.

## Demo Video

![Video]("https://1drv.ms/v/c/087c53e29c4abf4c/EZVElR_DQatIquZMuNWybHsBYo2zWA7zt7j25MAepgURcw?e=8U0eTT")

## API Used

The project makes use of the following API to fetch and manipulate user data:

- **GET**: `https://reqres.in/api/users?page={page_number}` - Fetches a list of users.
- **PUT**: `https://reqres.in/api/users/{id}` - Updates user details by their ID.
- **DELETE**: `https://reqres.in/api/users/{id}` - Deletes a user by their ID.

## Links
