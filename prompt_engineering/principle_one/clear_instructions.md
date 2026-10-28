# Define the Task and Success Criteria

A useful prompt explains both **what to create** and **how to judge whether the result is complete**. Testable success criteria reduce ambiguity and make the output easier to review.

## Example: User Registration Form

### ❌ Vague Prompt

"Create a user registration form."

**➡️ Problem:** The deliverable, required fields, validation behavior, accessibility requirements, and completion criteria are unclear. The result may look plausible while still being incomplete.

### ✅ Task with Success Criteria

```
Task: Create a self-contained user registration form using HTML, CSS, and vanilla JavaScript.

Fields:
- Full Name: required
- Email: required; must use a valid email format
- Password: required; minimum 8 characters, including at least one number and one special character
- Confirm Password: required; must match Password
- Phone Number: optional; if provided, it must contain 10 digits

Success criteria:
- Each field has a clear label.
- Show a helpful error when a required field is empty or invalid.
- The form works with a mouse or keyboard.
- Show a success message when the form is submitted correctly.
```

**➡️ Why this is better:** The model has a clear task, constraints, expected output, and observable criteria for checking the result.
