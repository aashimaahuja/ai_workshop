# Few shot prompting

Few-shot prompting is when you show examples of how a task should be done to AI, so it can learn the pattern, style, and expected output format before completing a new task.

## Example: Creating a New API Endpoint

### ❌ Zero-Shot Prompt

"Write an endpoint to create a new booking."

**➡️ Problem:** The AI may generate code with a different coding style, error handling, or response format compared to your team's conventions

### ✅ Few-Shot Prompt

Follow the same pattern as these existing APIs:

**Example 1: Get Users**

```js
app.get("/users", async (req, res) => {
  try {
    const users = await db.users.findAll();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});
```

Now create a new API endpoint: `POST /bookings`

**Input:** `{ userId, productId, date }`

**Output:** JSON with `success: true` and the created booking

Follow the same style, syntax, and error handling pattern.
