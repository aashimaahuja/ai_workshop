# Role-based prompting

## Example: Writing Technical Documentation

### ❌ Without Role

**Prompt**
"Write documentation for the new Payment API."

**Output (generic):**

The Payment API allows you to process payments.  
It has an endpoint `/payments` where you can send POST requests with amount and currency.  
Response will confirm success or failure.

**➡️ Problem:** Very basic, lacks structure, missing best practices.

### ✅ With Role (Senior Software Architect)

**Prompt**
"You are a Senior Software Architect. Write technical documentation for the new Payment API.

- Include authentication, request/response structure, error handling, and best practices.

- Use professional tone and enterprise-level standards."

**Output (professional, structured):**

<details>
<summary><strong>📋 Payment API Documentation (Click to expand)</strong></summary>

# Payment API Documentation

## Overview

The Payment API provides a secure interface for initiating and processing
customer transactions.

## Authentication

All requests must include a valid Bearer token in the Authorization header.
Example: `Authorization: Bearer <token>`

## Endpoint: Create Payment

`POST /payments`

### Request Body

```json
{
  "amount": 100.0,
  "currency": "USD",
  "payment_method": "card"
}
```

### Response

```json
{
  "status": "success",
  "transaction_id": "txn_12345",
  "timestamp": "2025-08-25T14:30:00Z"
}
```

### Error Handling

- **400 Bad Request** – invalid parameters
- **401 Unauthorized** – missing or invalid token
- **500 Internal Server Error** – unexpected failure

### Best Practices

- Always retry on 500 with exponential backoff.
- Log transaction IDs for reconciliation.
- Use HTTPS exclusively for all requests.

</details>

---

## 🎯 TLDR

- The **role** gives context → the AI "thinks" like a Senior Architect.

- Output becomes **structured, detailed, professional**, not generic.
