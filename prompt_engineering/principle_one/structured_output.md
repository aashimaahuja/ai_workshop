# Ask for Structured Output

Structured output means describing how the response should be organized. This is useful when the result will be read by code or passed to another system.

## Example: Generate Mock User Data

### ❌ Without a Defined Structure

```
Generate mock data for three users.
```

The model might return a paragraph, a list, or JSON. A developer would need to clean up the result before using it.

### ✅ With a Defined Structure

```
Generate three users that match this schema. Return only a JSON array.

interface UserSchema {
  id: string;
  name: string;
  email: string;
  signup_date: string;
  subscription_status: string;
}
```

### Check the Result

Does this output match the schema?

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "signup_date": "2025-08-20",
    "subscription_status": "active"
  }
]
```

Not quite. The schema says `id` must be a string, but the output uses a number. The corrected value is:

```json
"id": "1"
```

Always check that the response matches the schema before using it.

## Keep in Mind

- Name the format you need, such as JSON.
- Define the fields and their types.
