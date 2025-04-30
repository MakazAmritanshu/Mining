# Backend API Documentation

This document provides an overview of all the backend APIs, their endpoints, functionality, and the schemas they interact with.

---

## **User APIs**

### **1. User Registration**
- **Endpoint**: `POST /users/register`
- **Description**: Registers a new user with mobile number, OTP, password, and optional referral code.
- **Request Body**:
  ```json
  {
    "mobileNumber": "1234567890",
    "otp": "123456",
    "password": "password123",
    "confirmPassword": "password123",
    "referral": "REF123"
  }
  ```
  
---

#### **Bank APIs**

### **1. Add Bank Details**
- **Endpoint**: `POST /bank/add`
- **Description**: Adds a new bank account for the user.
- **Request Body**:
  ```json
  {
    "bankName": "HDFC Bank",
    "recipientName": "JOHN DOE",
    "accountNumber": "123456789012",
    "email": "john.doe@example.com",
    "ifscCode": "HDFC0001234"
  }
  ```

---

#### **Transaction APIs**

### **1. Add Deposit**
- **Endpoint**: `POST /transactions/deposit`
- **Description**: Creates a new deposit transaction.
- **Request Body**:
  ```json
  {
    "amount": 1000,
    "method": "bank_transfer",
    "accountDetails": {
      "bankName": "HDFC Bank",
      "accountNumber": "123456789012",
      "ifsc": "HDFC0001234"
    }
  }
  ```

