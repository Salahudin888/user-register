# User Registration Form

A simple web application to register, update, and delete users using MongoDB.

## Features
- User Registration
- Update User Information
- Delete Users

## Technologies
- Visual Studio Code
- MongoDB
- MongoDB Compass
- Node.js and npm

## Installation and Setup

**1. Install the requirements**

Install Node.js, MongoDB Community Server, and MongoDB Compass.

**2. Open the project**

Open your project folder in VS Code.

**3. Install dependencies**

Open the VS Code terminal and run:

```bash
npm install
```

**4. Set up MongoDB**

Open MongoDB Compass and connect to:

```text
mongodb://localhost:27017
```

Create a database named `public` and a collection named `users`.

**5. Configure the database**

Make sure your application connects to the `public` database.

## Run the Application

In the VS Code terminal, run:

```bash
npm run dev
```

Open the local URL shown in the terminal.

## Database Structure

```text
public
└── users
```

## Usage

1. Register a new user.
2. Update existing user information.
3. Delete a user when needed.

