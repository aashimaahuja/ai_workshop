# Check Assumptions Required to Complete the Task

## 🔹 Example: Train Departure Schedule

### ❌ Fragile Prompt (No Assumption Check)

```
"Show me a train departure schedule for tomorrow in a table."
```

#### ➡️ Problems:

- **Which station/route?** - Departure and destination unclear
- **What time window?** - All day? Morning only? Specific hours?

### ✅ Robust Prompt (Assumption Check + Fallback)

#### Prompt Structure:

```
Task: Provide tomorrow's train departure schedule in a table.

Before proceeding, perform an ASSUMPTION CHECK:

- Departure station (required)
- Destination station (optional, but affects filtering)
- Time range (default: 06:00–22:00 local time)

If any assumption is missing:
Return ONLY this fallback JSON:
{
  "status": "needs_clarification",
  "missing": [...],
  "questions": [...],
  "proposed_defaults": {
    "time_range": "06:00–22:00",
    "timezone": "Europe/Amsterdam",
    "data_source": "mock_allowed"
  }
}

If assumptions are satisfied:
Return ONLY a Markdown table with columns:
| Time | Train No. | Destination | Platform | Status |
```

🔹 Fallback Output (if info missing)

```
{
  "status": "needs_clarification",
  "missing": [
    "No departure station specified.",
    "No destination specified (optional but recommended)."
  ],
  "questions": [
    "From which station do you want departures?",
    "Do you want arrivals filtered by destination?",
    "Should I use real API data or mock realistic times?"
  ],
  "proposed_defaults": {
    "time_range": "06:00–22:00",
    "timezone": "Europe/Amsterdam",
    "data_source": "mock_allowed"
  }
}
```

Adding assumption checks + fallbacks avoid hallucination and force the model to either:

- Ask for missing info
- Or return a clean, structured table when all is clarified.
