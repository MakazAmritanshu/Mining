# Backend User API Documentation

This document provides an overview of all backend APIs available for regular users, including endpoints, descriptions, request/response schemas, and authentication requirements.

---

## **Authentication**

Most user APIs require a valid JWT token with the `role: "user"` in the Authorization header or cookies.

---

## **User APIs**

### **1. User Registration**
- **Endpoint**: `POST /users/register`
- **Description**: Registers a new user account.
- **Request Body**:
  ```json
  {
    "mobileNumber": "1234567890",
    "password": "userpassword"
  }
  ```
- **Response**:
  ```json
  {
    "message": "User registered successfully",
    "userId": "user_id"
  }
  ```

---

### **2. User Login**
- **Endpoint**: `POST /users/login`
- **Description**: Authenticates a user and returns access and refresh tokens.
- **Request Body**:
  ```json
  {
    "mobileNumber": "1234567890",
    "password": "userpassword"
  }
  ```
- **Response**:
  ```json
  {
    "accessToken": "jwt_token",
    "refreshToken": "refresh_jwt_token"
  }
  ```

---

### **3. Get Profile**
- **Endpoint**: `GET /users/profile`
- **Description**: Retrieves the authenticated user's profile details.
- **Headers**: `Authorization: Bearer <accessToken>`
- **Response**:
  ```json
  {
    "id": "user_id",
    "mobileNumber": "1234567890",
    "role": "user",
    "bankAccounts": [
      {
        "bankName": "HDFC Bank",
        "accountNumber": "123456789012",
        "ifscCode": "HDFC0001234"
      }
    ],
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
  ```

---

### **4. Update Profile**
- **Endpoint**: `PATCH /users/profile`
- **Description**: Updates the authenticated user's profile details.
- **Headers**: `Authorization: Bearer <accessToken>`
- **Request Body** (example):
  ```json
  {
    "bankAccounts": [
      {
        "bankName": "HDFC Bank",
        "accountNumber": "123456789012",
        "ifscCode": "HDFC0001234"
      }
    ]
  }
  ```
- **Response**:
  ```json
  {
    "message": "Profile updated"
  }
  ```

---

### **5. Deposit Request**
- **Endpoint**: `POST /transactions/deposit`
- **Description**: Initiates a deposit transaction.
- **Headers**: `Authorization: Bearer <accessToken>`
- **Request Body**:
  ```json
  {
    "amount": 1000,
    "paymentProof": "url_or_base64_image"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Deposit request submitted",
    "transactionId": "txn_id"
  }
  ```

---

### **6. Withdraw Request**
- **Endpoint**: `POST /transactions/withdraw`
- **Description**: Initiates a withdrawal transaction.
- **Headers**: `Authorization: Bearer <accessToken>`
- **Request Body**:
  ```json
  {
    "amount": 500,
    "bankAccountId": "bank_account_id"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Withdrawal request submitted",
    "transactionId": "txn_id"
  }
  ```

---

### **7. View My Transactions**
- **Endpoint**: `GET /transactions`
- **Description**: Retrieves all transactions for the authenticated user.
- **Headers**: `Authorization: Bearer <accessToken>`
- **Response**:
  ```json
  [
    {
      "id": "txn_id",
      "type": "deposit",
      "amount": 1000,
      "status": "pending",
      "createdAt": "2024-01-01T00:00:00.000Z"
    }
    // ...more transactions
  ]
  ```

---

### **8. Change Password**
- **Endpoint**: `POST /users/change-password`
- **Description**: Changes the user's password.
- **Headers**: `Authorization: Bearer <accessToken>`
- **Request Body**:
  ```json
  {
    "oldPassword": "oldpassword",
    "newPassword": "newpassword"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Password changed successfully"
  }
  ```

---

### **9. Delete Account**
- **Endpoint**: `DELETE /users/profile`
- **Description**: Deletes the authenticated user's account.
- **Headers**: `Authorization: Bearer <accessToken>`
- **Response**:
  ```json
  {
    "message": "User account deleted"
  }
  ```

---

## **Notes**
- All endpoints require user authentication unless otherwise specified.
- Error responses will include a `message` field describing the error.

---
