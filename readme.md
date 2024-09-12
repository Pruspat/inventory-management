# Simple Inventory Management System

## Objective
Create a RESTful API for managing an inventory of products, supporting basic CRUD operations and including business logic for managing stock levels and creating orders.

## Requirements

### Setup
- **Node.js** and **Express.js** for building the API.
- Use **MongoDB** for data persistence.
- Implement **CQRS** (Command Query Responsibility Segregation) pattern.
- Use environment configuration with `.env` files for sensitive data.

### API
#### Products
- **GET /products**
  - Retrieve a list of all products.
  
- **POST /products**
  - Create a new product.
  - Required fields: 
    - `name` (max length 50)
    - `description` (max length 50)
    - `price` (must be positive)
    - `stock` (must be non-negative)

#### Stock Management
- **POST /products/:id/restock**
  - Increase the stock level of a product.

- **POST /products/:id/sell**
  - Decrease the stock level of a product.
  - Ensure stock cannot go below zero.

#### Price Validation
- Ensure that the price of a product is always positive during creation.

#### Order Management
- **POST /orders**
  - Create a new order.
  - Required fields:
    - `customerId`
    - `products` (array of product IDs)
  - Implement logic to update stock levels when an order is placed.
  - Prevent order placement if stock is insufficient.

### Validation
- Implement input validation for all endpoints using a library like `Joi` or `express-validator`.

### Error Handling
- Implement proper error handling for:
  - Invalid input
  - Resource not found
  - Server errors
- Return appropriate HTTP status codes and error messages.

## Getting Started

### Prerequisites
- Node.js installed.
- Postman or a similar tool for testing the API.

### Installation
1. Clone the repository:
    ```bash
    git clone <your-repository-link>
    cd <your-project-directory>
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your database connection string:
    ```
    SERVER_PORT=3000
    DB_HOST='mongodb://admin:admin@localhost:27017/admin'
    DB_NAME='inventory-management'
    ```

4. To run the application, use:
    ```bash
    docker compose up -d
    ```
    ```bash
    npm start
    ```

### API Testing
Use Postman or any API testing tool to test the following endpoints:

- **GET /products** to retrieve products.
- **POST /products** to create a new product.
- **POST /products/:id/restock** to increase stock.
- **POST /products/:id/sell** to decrease stock.
- **POST /orders** to create a new order.
