## Backend API Documentation

### **`/users/register` Endpoint**

#### **Description**
Registers a new user by creating an account with the provided details, hashes the password, and generates an authentication token for the user.

---

#### **HTTP Method**
`POST`

---

#### **Request Body**
The request body should be in JSON format and include the following fields:

- **`fullName`** (object, required):
  - **`firstName`** (string, required): User's first name. Must be at least 3 characters long.
  - **`lastName`** (string, optional): User's last name. Must be at least 3 characters long.
- **`email`** (string, required): User's email address. Must be unique and at least 5 characters long.
- **`password`** (string, required): User's password. Must be at least 8 characters long.

---

#### **Validation Rules**
- `firstName`: Required, minimum length of 3 characters.
- `lastName`: Optional, minimum length of 3 characters.
- `email`: Required, unique, minimum length of 5 characters.
- `password`: Required, minimum length of 8 characters.

---

#### **Example Request Body**
```json
{
    "fullName": {
        "firstName": "John",
        "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
}
```

---

#### **Response**
The response will be in JSON format and includes the following fields on success:

- **`success`** (boolean): Indicates whether the registration was successful.
- **`message`** (string): A descriptive success message.
- **`token`** (string): The generated JWT token for the user.
- **`user`** (object): The newly created user’s details:
  - **`id`** (string): The user’s unique ID.
  - **`firstName`** (string): The user’s first name.
  - **`lastName`** (string): The user’s last name.
  - **`email`** (string): The user’s email address.

#### **Example Success Response**
```json
{
    "success": true,
    "message": "User registered successfully",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
        "id": "64c9f4e0bcf86cd799439011",
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com"
    }
}
```
---

### **`/users/login` Endpoint**

#### **Description**
Authenticates an existing user by verifying their email and password and returns a JWT token.

---

#### **HTTP Method**
`POST`

---

#### **Request Body**
The request body should be in JSON format and include the following fields:

- **`email`** (string, required): User's email address. Must be unique and at least 5 characters long.
- **`password`** (string, required): User's password. Must be at least 8 characters long.

---

#### **Validation Rules**
- `email`: Required, unique, minimum length of 5 characters.
- `password`: Required, minimum length of 8 characters.

---

#### **Example Request Body**
```json
{
    "email": "john.doe@example.com",
    "password": "password123"
}   
```

#### **Example Success Response**
```json
{
    "success": true,
    "message": "User logged in successfully",
    "user": {
        "id": "64c9f4e0bcf86cd799439011",
        "email": "jane.doe@example.com"
    }
}
```

### **`/users/profile` Endpoint**

#### **Description**
Fetches the authenticated user's profile information.

---

#### **HTTP Method**
`GET`

---

#### **Headers**
Authorization: Bearer `<JWT Token>`

---

#### **Example Success Response**
```json
{
    "success": true,
    "message": "Fetched user successfully",
    "user": {
        "id": "64c9f4e0bcf86cd799439011",
        "firstName": "Jane",
        "lastName": "Doe",
        "email": "jane.doe@example.com"
    }
}

```
---

### **`/users/logout` Endpoint**

#### **Description**
Logs out the user by invalidating their JWT token.

---

#### **HTTP Method**
`GET`

---

#### **Example Success Response**
```json
{
    "success": true,
    "message": "User logged out"
}

```
---

### **`/captain/register` Endpoint**

#### **Description**
Registers a new captain by creating an account with the provided details, hashing the password, and generating an authentication token.

---

#### **HTTP Method**
`POST`

---

#### **Request Body**
The request body should be in JSON format and include the following fields:

- **`fullName`** (object, required):
  - **`firstName`** (string, required): User's first name. Must be at least 3 characters long.
  - **`lastName`** (string, optional): User's last name. Must be at least 3 characters long.
- **`email`** (string, required): User's email address. Must be unique and at least 5 characters long.
- **`password`** (string, required): User's password. Must be at least 8 characters long.
- **`location `** (object, optional):
  - **`ltd `** (number, optional): Latitude of the captain's location.
  - **`lng `** (number, optional): Longitude of the captain's location.
- **`status`** (string, optional): Status of the captain. Can be either `active` or `inactive` (default is inactive).
- **`vehicle`** (object, required):
  - **`color`** (string, required): Color of the vehicle. Must be at least 3 characters long.
  - **`plate`** (string, required): License plate number of the vehicle. Must be at least 3 characters long.
  - **`capacity`** (number, required): Capacity of the vehicle. Must be at least 1.
vehicleType (string, required): Type of the vehicle. Must be one of `car`, `motorcycle`, or `auto`.

---

#### **Validation Rules**
- **`firstName`**: Required, minimum length of 3 characters.
- **`lastName`**: Optional, minimum length of 3 characters.
- **`email`**: Required, unique, minimum length of 5 characters.
- **`password`**: Required, minimum length of 8 characters.
- **`vehicle.color`**: Required, minimum length of 3 characters.
- **`vehicle.plate`**: Required, minimum length of 3 characters.
- **`vehicle.capacity`**: Required, integer, minimum value of 1.
- **`vehicle.vehicleType`**: Required, must be one of `car`, `motorcycle`, or `auto`.

---

#### **Example Request Body**
```json
{
    "fullName": {
        "firstName": "Jane",
        "lastName": "Doe"
    },
    "email": "jane.doe@example.com",
    "password": "securepassword123",
    "location": {
        "ltd": 12.971598,
        "lng": 77.594566
    },
    "status": "active",
    "vehicle": {
        "color": "Red",
        "plate": "KA-01-1234",
        "capacity": 4,
        "vehicleType": "car"
    }
}
```

---

#### **Example Success Response**
```json
{
    "success": true,
    "message": "Captain registered successfully",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "captain": {
        "id": "64c9f4e0bcf86cd799439011",
        "firstName": "Jane",
        "lastName": "Doe",
        "email": "jane.doe@example.com",
        "ltd": 12.971598,
        "lng": 77.594566,
        "status": "active",
        "color": "Red",
        "plate": "KA-01-1234",
        "capacity": 4,
        "vehicleType": "car"
    }
}

```

### **`/captain/login` Endpoint**

#### **Description**
Authenticates a captain using their email and password, and generates a JWT token upon successful login.

---

#### **HTTP Method**
`GET`

---

#### **Request Body**
The request body should be in JSON format and include the following fields:

- **`email`** (string, required): User's email address. Must be unique and at least 5 characters long.
- **`password`** (string, required): User's password. Must be at least 8 characters long.

---

#### **Validation Rules**

- **`email`**: Required, unique, minimum length of 5 characters.
- **`password`**: Required, minimum length of 8 characters.

---

#### **Example Request Body**
```json
{
    "email": "jane.doe@example.com",
    "password": "securepassword123"
}

```

---

#### **Example Success Response**
```json
{
    "success": true,
    "message": "Captain logged in successfully",
    "captain": {
        "id": "64c9f4e0bcf86cd799439011",
        "email": "jane.doe@example.com"
    }
}

```

### **`/captain/profile` Endpoint**

#### **Description**

Fetches the authenticated captain's profile details.

---

#### **HTTP Method**
`GET`

#### **Headers**
- **`Authorization`**: Bearer `<token>` (or via `Cookie` header)

---

#### **Example Request Body**
```json
{
    "email": "jane.doe@example.com",
    "password": "securepassword123"
}

```

---

#### **Example Success Response**
```json
{
  "success": true,
  "message": "Fetched Captain successfully",
  "captain": {
    "id": "64c9f4e0bcf86cd799439011",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "jane.doe@example.com",
    "location": {
      "ltd": 23.456,
      "lng": 45.678
    },
    "status": "active",
    "vehicle": {
      "color": "Blue",
      "plate": "AB123CD",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}


```
### **`/captain/logout` Endpoint**

#### **Description**
Logs out the authenticated captain by blacklisting the token and clearing the cookie.
---

#### **HTTP Method**
`GET`

#### **Headers**
- **`Authorization`**: Bearer `<token>` (or via `Cookie` header)

---

#### **Example Success Response**
```json
{
  "success": true,
  "message": "Captain logged out"
}

```