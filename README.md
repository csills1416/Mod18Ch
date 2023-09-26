# Blog Directory

A simple blog directory project that allows users to create, read, update, and delete blog posts.

## Table of Contents

- [Project Description](#project-description)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Project Description

The Blog Directory is a web application that enables users to manage their blog posts. Users can create new blog posts, view a list of existing posts, edit or delete posts, and read the full content of each post. This project is built using Node.js, Express.js, and MongoDB.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- HTML/CSS (for the frontend)
- EJS (for templating)
- Insomnia (for API testing)

## Features

- User registration and authentication.
- Create, read, update, and delete blog posts.
- View a list of all blog posts.
- Read the full content of each blog post.
- User-friendly interface with responsive design.

## Installation

To run the Blog Directory project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/blog-directory.git
   cd blog-directory
2. npm install
3. Configure enivornment variables
4. Start the application: npm start

# Usage
Usage
1, Open a Insomnia and navigate to http://localhost:your-port-number.

2. Register a new user account or log in if you already have an account.

3. Once logged in, you can create new blog posts, view your existing posts, edit or delete posts, and read the full content of each post. *Note: All posts are refered to as Thoughts.
4. You can delete Users, Update Users, and add Users
5. *Quick Note: The Reaction portion of the code is not working.

# API Endpoints

The Blog Directory Provides the following Endpoints:

- POST /api/users: Create a new user.
- POST /api/thoughts: Log in as an thoughts.
- POST /api/reactions: Create a reactions.
- GET /api/reactions: Retrieve a list of all reactions.
- GET /api/thoughts/:id: Retrieve a specific thoughts by ID.
- PUT /api/reactions/:id: Update a reaction by ID.
- DELETE /api/thoughts/:id: Delete a thought by ID.

# Contributing
We welcome contributions! To contribute to this project, please follow our contributing guidelines.

# Lisxcense

This project is licensed under the MIT License.
