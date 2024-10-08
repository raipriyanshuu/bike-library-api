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

### API Endpoints

The API supports the following operations, useful for managing bike inventories:

- **GET /bikes**
  - **Description**: Retrieves a list of all bikes in the library.
  - **Response**: A JSON array of bike objects.

- **POST /bikes**
  - **Description**: Adds a new bike to the library.
  - **Body**:
    ```json
    {
      "make": "Royal Enfield",
      "model": "Classic 350",
      "year": 2021,
      "type": "Cruiser"
    }
    ```
  - **Response**: Details of the added bike.

- **PUT /bikes/{id}**
  - **Description**: Updates an existing bike's details.
  - **Parameters**:
    - `id` (string): The ID of the bike to update.
  - **Body**:
    ```json
    {
      "make": "Updated Make",
      "model": "Updated Model"
    }
    ```

- **DELETE /bikes/{id}**
  - **Description**: Removes a bike from the library.
  - **Parameters**:
    - `id` (string): The ID of the bike to delete.


Contributing
Contributions are welcome, and any contributions you make are greatly appreciated.

Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request


## Contact

For any queries or further assistance, please reach out to me:

- **Email**: [priyanshurai328@gmail.com](mailto:priyanshurai328@gmail.com)
- **GitHub Project Link**: [Bike Library API](https://github.com/raipriyanshuu/bike-library-api)

