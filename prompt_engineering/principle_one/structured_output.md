# Principle 1.3: Ask for Structured Output

This is where engineers immediately see the value — instead of vague or free-form text, we can force structure (JSON, HTML, tables, bullet points). Super useful for things like mock data generation, API responses, or UI snippets.

## 🔹 Example: Generating Mock Data from Schemas

### ❌ Without Structured Output

**Prompt:**
"Generate mock user data with 3 users."

**Possible Model Output (unstructured):**

```
John Doe, johndoe@email.com, signed up yesterday

Mary Smith, mary.smith@email.com, signed up last week

Alex Chen, alexc@email.com, signed up 2 months ago
```

**➡️ Problem:** Looks nice, but it's unstructured text → hard to parse or feed into an app.

### ✅ With Structured Output (JSON)

**Prompt:**
Given a UserSchema, generate mock data for that schema. Return the output in valid JSON format with realistic values that match the schema structure.

```
interface UserSchema {
  id: string;
  name: string;
  email: string;
  signup_date: string;
  subscription_status: string;
}
```

**Model Output (structured JSON):**

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@email.com",
    "signup_date": "2025-08-20",
    "subscription_status": "active"
  },
  {
    "id": 2,
    "name": "Mary Smith",
    "email": "mary.smith@email.com",
    "signup_date": "2025-08-15",
    "subscription_status": "trial"
  },
  {
    "id": 3,
    "name": "Alex Chen",
    "email": "alexc@email.com",
    "signup_date": "2025-07-10",
    "subscription_status": "inactive"
  }
]
```

**➡️ Why this is better:**

- **Machine-readable:** The data is structured and can be parsed programmatically
- **Direct integration:** Can be used directly in an app, API, or tests
- **Consistency:** Ensures consistent fields, formats, and values
- **Validation:** Easy to validate against schemas or expected formats
- **Automation:** Can be fed directly into automated workflows

## 🎯 When to Use Structured Output

- **Mock data generation** for testing and development
- **API response formatting** to match expected schemas
- **Database seeding** with consistent data structures
- **Configuration files** that need specific formats
- **Data transformation** between different formats
- **Report generation** with consistent layouts

## 📋 Common Output Formats

### JSON

```json
{
  "field": "value",
  "array": [1, 2, 3],
  "nested": { "key": "value" }
}
```

### HTML

```html
<table>
  <tr>
    <th>Name</th>
    <th>Email</th>
  </tr>
  <tr>
    <td>John</td>
    <td>john@example.com</td>
  </tr>
</table>
```

### CSV

```csv
name,email,status
John,john@example.com,active
Mary,mary@example.com,inactive
```

### YAML

```yaml
users:
  - name: John
    email: john@example.com
    status: active
  - name: Mary
    email: mary@example.com
    status: inactive
```

## 💡 Best Practices

1. **Be specific about the format** - Don't just say "structured", specify JSON, HTML, etc.
2. **Define the schema** - List the exact fields and their expected types
3. **Provide examples** - Show the desired output structure
4. **Set constraints** - Specify data types, formats, and validation rules
5. **Test the output** - Verify the generated structure is valid and usable
