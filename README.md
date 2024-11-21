# E-Commerce Backend

## Project Overview
A backend service for managing Products and Categories using Node.js, Express, and MongoDB.

## Features
- CRUD operations for Categories
- CRUD operations for Products
- Referential integrity between Categories and Products
- Data validation and constraints

## Prerequisites
- Node.js (v14+)
- MongoDB

## Setup Instructions
1. Clone the repository
```bash
git clone https://your-repo-url.git
cd ecommerce-backend
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file with:
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

4. Run the application
```bash
npm start  # Production
npm run dev  # Development with nodemon
```

## API Endpoints

### Categories
- `POST /api/categories`: Create a category
- `GET /api/categories`: Get all categories
- `GET /api/categories/:id`: Get category by ID
- `PUT /api/categories/:id`: Update a category
- `DELETE /api/categories/:id`: Delete a category

### Products
- `POST /api/products`: Create a product
- `GET /api/products`: Get all products
- `GET /api/products/:id`: Get product by ID
- `PUT /api/products/:id`: Update a product
- `DELETE /api/products/:id`: Delete a product