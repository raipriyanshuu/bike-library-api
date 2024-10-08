# Bike Library API

This project implements a RESTful API for managing a bike library using Nest.js with TypeORM and SQLite as the database. It allows users to perform CRUD operations on bike records, including adding, retrieving, updating, and deleting bike entries.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- Node.js (v14.x or later)
- npm (v6.x or later)
- Git

## Installation

Follow these steps to get your development environment running:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/raipriyanshuu/bike-library-api.git
   cd bike-library-api

Install dependencies:
npm install


To run the application locally, use the following command:
npm run start:dev

API Endpoints

The API supports the following operations:

GET /bikes: Retrieve a list of all bikes in the library.
POST /bikes: Add a new bike to the library.
GET /bikes/{id}: Retrieve a bike by its ID.
PUT /bikes/{id}: Update an existing bike's details.
DELETE /bikes/{id}: Remove a bike from the library.


Examples
Here are some example requests you can make to the API:
Add a Bike:
curl -X POST http://localhost:3000/bikes -H 'Content-Type: application/json' -d '{"make": "Royal Enfield", "model": "Classic 350", "year": 2021, "type": "Cruiser"}'
Get All Bikes:
curl http://localhost:3000/bikes

Contributing
Contributions are welcome, and any contributions you make are greatly appreciated.

Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request


Contact
Priyanshu Rai   priyanshurai328@gmail.com
Project Link: https://github.com/raipriyanshuu/bike-library-api
