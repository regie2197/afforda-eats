

#  BACKEND DOCUMENTATION 

This is the documentation for the afforda-eats backend **APIs** and **Routes**. 

## 📚 Table of Contents

- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Backend APIs](#routes)

---

## 🛠️ Installation

### 1. Create a Project Folder
- Open Command Prompt on you windows

### 2. Clone the Repository
Clone the repository

```bash
git clone https://github.com/regie2197/afforda-eats.git
```
### 3. Open the project on the VS Code
Open the project on the VS Code using the cmd

```bash

cd afforda-eats
code .
```

---
### 3. Install Dependencies
Wait for the VS Code to open with the project and open terminal on the VS Code (Ctrl+`)
```bash

npm install
cd backend 
npm i
cd ..
```
---

## 🏃‍♂️ Running the Project

```bash
npm run dev
```

---

## ✨ Backend APIs


 ### Authentication Routes 

   - **Account Types**
        ADMIN
        USER
        STORE_OWNER
   - **POST api/login**
        data: {
          email / username
          password
        },
        responses;{
            200: "token": "JWT_TOKEN"
            400: "error": "Invalid credentials"
            404: "error": "User not found"
            500: "error": "An error occurred during login"
        }
   - **POST api/register**
        data: {
          email,
          username,
          password,
          firstName,
          lastName,
          accountType,
        },
        responses;{
            200: {
                    "id": 1,
                    "email": "user@example.com",
                    "username": "newuser",
                    "firstName": "John",
                    "lastName": "Doe",
                    "accountType": "vendor"
                },
            400: "error": "All fields are required."
            404: "error": "Email is already taken."
            500: "error": "Internal Server Error"
        }
### Food Routes 

   - **JWT Token**
        vertere@2025
        
   - **POST /api/food**
        data: {
            "name": "Food Name",
            "price": 10.99,
            "description": "Food description",
            "storeId": 1
        },
        responses: {
            200: 
                "id": 1,
                "name": "Food Name",
                "price": 10.99,
                "description": "Food description",
                "storeId": 1,
            400: "error": "All fields (name, price, description, storeId) are required",
            404: "error": "Store not found",
            500: "error": "Failed to create food"
        }

   - **GET /api/food**
        data: {
        },
        responses: {
        200: 
            [{
                    "id": 1,
                    "name": "Food Name",
                    "price": 10.99,
                    "description": "Food description",
                    "storeId": 1
            }],
            400:"error": "Invalid store ID",
            404:"error": "No food items found for this store",
            500:"error": "Failed to fetch foods"
        }
    - **GET /api/food/:id**
        data: {
        },
        responses: {
        200: 
            [{
                    "id": 1,
                    "name": "Food Name",
                    "price": 10.99,
                    "description": "Food description",
                    "storeId": 1
            }],
            400:"error":  "error": "Invalid food ID",
            404:"error":  "error": "Food not found",
            500:"error":  "error": "Failed to fetch food"
        }
    - **PATCH /api/food/:id**
        data: {
            "name": "Updated Food Name",
            "price": 12.99,
            "description": "Updated food description"
        },
        responses: {
            200: 
                "description": "Partially Updated food description",
                "storeId": 1,
            400: "error": "Invalid food ID",
            404: "error": "Food not found",
            500: "error": "Failed to update food"
        }
   - **PUT /api/food/:id**
        data: {
            "name": "Updated Food Name",
            "price": 12.99,
            "description": "Updated food description"
        },
        responses: {
            200: 
                "id": 1,
                "name": "Updated Food Name",
                "price": 12.99,
                "description": "Updated food description",
                "storeId": 1,
            400: "error": "Invalid food ID",
            404: "error": "Food not found",
            500: "error": "Failed to update food"
        }
   - **DELETE /api/food/:id**
        data: {
        },
        responses: {
            200:"message": "Food deleted successfully",
            400:"error": "Invalid food ID",
            404:"error": "Food not found",
            500:"error": "Failed to delete food"
        }
---
### Version 1.0

