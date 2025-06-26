# MS-Motor-India
This is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application designed to deliver a modern, responsive, and scalable user experience. It includes features like authorization, submit cars and display cars.

## 🌐 Tech Stack

- **MongoDB** – NoSQL database
- **Express.js** – Web framework for Node.js
- **React.js** – Frontend library for building UI
- **Node.js** – JavaScript runtime for backend
- **Mongoose** – MongoDB ODM
- **Bootstrap** – For frontend styling

---

## 🚀 Features

- display cars
- submit form
- Responsive design with sidebar and navbar
- Blur effect in cards

---

## 📚 API Reference

| Method | Endpoint       | Purpose                                     | Body Parameters | Response (200) |
|--------|----------------|---------------------------------------------|-----------------|----------------|
| `GET`  | `/api/cars`    | Fetch **all cars**.                         | —               | Array of car objects |
| `POST` | `/api/cars`    | **Add a new car** to the database.          | `{ brand, model, year, fuel_type, price, status }` | Newly‑created car object |

### Example: GET all cars
```http
GET /api/cars HTTP/1.1
Host: localhost:5000
OUTPUT:
[
    {
        "_id": "68597e8ed9fb76bb4e45ffe1",
        "brand": "Honda",
        "model": "Civic",
        "year": 2022,
        "fuel_type": "Petrol",
        "price": 22000,
        "status": "available"
    },
    {
        "_id": "68598026d9fb76bb4e45ffe4",
        "brand": "Honda",
        "model": "Civic",
        "year": 2022,
        "fuel_type": "Petrol",
        "price": 22000,
        "status": "available"
    },
    {
        "_id": "6859806ed9fb76bb4e45ffe6",
        "brand": "Honda",
        "model": "Civic",
        "year": 2022,
        "fuel_type": "Petrol",
        "price": 22000,
        "status": "available"
    },
    {
        "_id": "68598118d9fb76bb4e45ffe9",
        "brand": "Honda",
        "model": "Civic",
        "year": 2022,
        "fuel_type": "Petrol",
        "price": 22000,
        "status": "available"
    },
    {
        "_id": "6859b185f29468bcb83b25c8",
        "brand": "Kia",
        "model": "Carens",
        "year": 2024,
        "fuel_type": "Petrol",
        "price": 1450000,
        "status": "sold"
    },
    {
        "_id": "6859b2c607236bf7c489713e",
        "brand": "bngv",
        "model": "hgvvh",
        "year": 6798,
        "fuel_type": "hgvjhj",
        "price": 67878,
        "status": "available"
    },
    {
        "_id": "685ac068fca380b1ce06fe24",
        "brand": "TATA",
        "model": "indica",
        "year": 2029,
        "fuel_type": "diesel",
        "price": 123456,
        "status": "available"
    },
    {
        "_id": "685c533bcf8a34f6aec4897e",
        "brand": "Bmw",
        "model": "E5",
        "year": 2029,
        "fuel_type": "Petrol",
        "price": 2018919,
        "status": "available"
    },
    {
        "_id": "685d5d1668a26f176b90b8bc",
        "brand": "Audi",
        "model": "Z5",
        "year": 1999,
        "fuel_type": "Petrol",
        "price": 1000,
        "status": "available"
    },
    {
        "_id": "685d6b7dd886db573d02ab1e",
        "brand": "Toyota",
        "model": "Corolla",
        "year": 2022,
        "fuel_type": "Petrol",
        "price": 15000,
        "status": "Available"
    }
]



Example: POST a new car
POST /api/cars HTTP/1.1
Host: localhost:5000
Content-Type: application/json
Protected POST with token:
Authorization: Bearer 123admintoken
{
  "brand": "Toyota",
  "model": "Corolla",
  "year": 2022,
  "fuel_type": "Petrol",
  "price": 15000,
  "status": "Available"
}
OUTPUT:
{
    "message": "Car added successfully",
    "car": {
        "brand": "Toyota",
        "model": "Corolla",
        "year": 2022,
        "fuel_type": "Petrol",
        "price": 15000,
        "status": "Available",
        "_id": "685d6b7dd886db573d02ab1e",
        "__v": 0
    }
}



## 🛠️ Getting Started

Follow these instructions to clone and run the project locally.

### 📁 Step 1: Clone the Repository

```bash
git clone https://github.com/rohithowlader/MS-Motor-India.git
cd MS-Motor-India

Step 2: Install Dependencies
There are two parts: the backend and the frontend.
  
Backend Setup (Node.js + Express)
npm install

Create a .env file in the root directory with the following variables:

PORT=5000
MONGO_URI=mongodb+srv://rohithowlader2017:ZXaTBYM2qG8bsXTZ@cluster0.ghsq3pk.mongodb.net/car_db?retryWrites=true&w=majority&appName=Cluster0
ADMIN_TOKEN=123admintoken

Run the Project
Start Backend Server
npm run dev (for development mode with nodemon)
npm start (for production)

Backend Runs on http://localhost:5000 


Frontend Setup (React)
cd frontend
npm install

Start Frontend Server
npm start

Frontend Runs on http://localhost:3000


project-root/
│

├── server.js
├── controllers/
├── config/
├── routes/
├── models/
└── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json



The project is Hosted
Front-end: http://stalwart-arithmetic-dab61e.netlify.app/
Back-end: https://ms-motor-india.onrender.com/

