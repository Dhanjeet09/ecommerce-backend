# E-Commerce Backend

## Project Overview
A robust backend service for e-commerce operations built with Node.js, Express, and MongoDB. This service provides authentication, product management, and category management with complete CRUD operations.

## Features
- User Authentication (Register/Login)
- Role-based Authorization (Admin/User)
- CRUD operations for Categories
- CRUD operations for Products
- Advanced Filtering and Pagination
- Data Validation and Constraints
- Error Handling
- Security Features

## Prerequisites
- Node.js (v14+)
- MongoDB

## Setup Instructions

1. Clone the repository
2. Install dependencies using npm install
3. Create a .env file with required environment variables
4. Run the application using npm commands

## API Documentation

### Authentication Endpoints
- Register a new user (POST /api/auth/register)
- Login user (POST /api/auth/login)

### Categories Endpoints
- Get all categories (GET /api/categories)
- Get category by ID (GET /api/categories/:id)
- Create a category (POST /api/categories) - Admin only
- Update a category (PUT /api/categories/:id) - Admin only
- Delete a category (DELETE /api/categories/:id) - Admin only

Query Parameters for GET requests:
- page
- limit
- search
- sortBy
- sortOrder

### Products Endpoints
- Get all products (GET /api/products)
- Get product by ID (GET /api/products/:id)
- Create a product (POST /api/products) - Admin only
- Update a product (PUT /api/products/:id) - Admin only
- Delete a product (DELETE /api/products/:id) - Admin only

Query Parameters for GET requests:
- page
- limit
- search
- category
- minPrice
- maxPrice
- sortBy
- sortOrder

## Authentication
Protected routes require a JWT token in the Authorization header

## Error Handling
The API returns appropriate HTTP status codes and error messages:
- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

## Data Models

### User
- username (required, unique)
- email (required, unique)
- password (required)
- role (user/admin)
- isActive status

### Category
- name (required, unique)
- description
- isActive status

### Product
- name (required)
- description
- price (required)
- stock (required)
- categoryId (required, reference to Category)
- images array
- isActive status

## Security Features
- Password Hashing
- JWT Authentication
- Role-based Authorization
- Input Validation
- Error Handling
- CORS Protection

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details