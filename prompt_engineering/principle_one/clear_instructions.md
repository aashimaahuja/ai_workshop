# Clear Instructions

## Example: User Registration Form

### ❌ Vague Prompt

"Create a user registration form."

**➡️ Problem:** The AI (or even a developer) doesn't know what fields are required, which ones are optional, or how validation should work. Output will be too generic or incomplete.

### ✅ Explicit Prompt

```
"Create a user registration form with the following fields:

**Full Name** (required)

**Email** (required, must be in valid email format)

**Password** (required, minimum 8 characters, must include at least one number and one special character)

**Confirm Password** (required, must match Password)

**Phone Number** (optional, 10 digits)

The form should include inline validation for errors and display a success message once the user submits valid data."
```
