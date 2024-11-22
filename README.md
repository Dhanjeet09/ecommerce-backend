Here’s a polished version of the documentation with an improved flow, clearer headings, and a concise style while retaining all critical information.

---

# E-Commerce Backend

## Overview
This project provides a robust backend service for e-commerce platforms using Node.js, Express, and MongoDB. It includes authentication, product, and category management features with full CRUD support.

---

## Features
- **User Management**: Registration, login, and role-based access control (Admin/User).  
- **Category Management**: CRUD operations for product categories.  
- **Product Management**: CRUD operations for products with advanced filtering and pagination.  
- **Security**: JWT-based authentication, input validation, and CORS protection.  
- **Error Handling**: Standardized error messages and HTTP status codes.  

---

## Requirements
- Node.js v14 or higher  
- MongoDB  

---

## Setup Instructions

1. **Clone the Repository**:  
   Navigate to the project directory.  

2. **Install Dependencies**:  
   Use your package manager to install all required packages.

3. **Environment Configuration**:  
   Create a `.env` file with the following keys:
   - `MONGODB_URI`: Your MongoDB connection string.  
   - `PORT`: Server port (e.g., 5000).  
   - `JWT_SECRET`: Secret key for JWT generation.  
   - `NODE_ENV`: `development` or `production`.

4. **Start the Server**:  
   - Use `npm start` for production.  
   - Use `npm run dev` for development with live reloading.  

---

## API Endpoints

### **Authentication**
- **Register**: `POST /api/auth/register`  
  Fields: `username`, `email`, `password`  
- **Login**: `POST /api/auth/login`  
  Fields: `email`, `password`

### **Categories**
- **Get All**: `GET /api/categories`  
  Supports filtering with `page`, `limit`, `search`, `sortBy`, and `sortOrder`.  
- **Get by ID**: `GET /api/categories/:id`  
  Includes associated products.  
- **Create** (Admin only): `POST /api/categories`  
  Fields: `name`, `description`  
- **Update** (Admin only): `PUT /api/categories/:id`  
  Fields: `name`, `description`  
- **Delete** (Admin only): `DELETE /api/categories/:id`

### **Products**
- **Get All**: `GET /api/products`  
  Supports filtering with `page`, `limit`, `search`, `category`, `minPrice`, `maxPrice`, `sortBy`, and `sortOrder`.  
- **Get by ID**: `GET /api/products/:id`  
- **Create** (Admin only): `POST /api/products`  
  Fields: `name`, `description`, `price`, `stock`, `categoryId`, `images`  
- **Update** (Admin only): `PUT /api/products/:id`  
  Fields: `name`, `description`, `price`, `stock`, `categoryId`, `images`  
- **Delete** (Admin only): `DELETE /api/products/:id`

---

## Authentication & Authorization
Protected routes require a JWT token in the header:  
`Authorization: Bearer <your_jwt_token>`  

---

## Data Models

### **User**
- `username`: Required, unique.  
- `email`: Required, unique.  
- `password`: Required.  
- `role`: Enum (`user`, `admin`).  
- `isActive`: Boolean.  

### **Category**
- `name`: Required, unique.  
- `description`: Optional.  
- `isActive`: Boolean.  

### **Product**
- `name`: Required.  
- `description`: Optional.  
- `price`: Required.  
- `stock`: Required.  
- `categoryId`: References a category.  
- `images`: Optional array of URLs.  
- `isActive`: Boolean.  

---

## Error Handling
The API uses standard HTTP status codes for error responses:  
- **200**: Success  
- **201**: Created  
- **400**: Bad Request  
- **401**: Unauthorized  
- **403**: Forbidden  
- **404**: Not Found  
- **500**: Internal Server Error  

---

## Security Features
- **Password Hashing**: Secure storage of user credentials.  
- **JWT Authentication**: Token-based authentication for protected routes.  
- **Role-Based Access Control**: Restrict admin-only routes.  
- **Input Validation**: Enforced data constraints.  
- **CORS Protection**: Secures cross-origin requests.  

---

## Contribution Guide

1. Fork the repository.  
2. Create a feature branch (`feature/<your-feature>`).  
3. Commit and push your changes.  
4. Submit a pull request.  

---

## License
Licensed under the MIT License. See the LICENSE file for details.

