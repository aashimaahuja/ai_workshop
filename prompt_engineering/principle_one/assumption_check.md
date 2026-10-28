# Check Required Information

Before starting a task, check whether any required information is missing. Ask about details that block the task, but do not stop for optional information.

## Example: Train Departure Schedule

### ❌ Prompt with Missing Information

```
Show me a train departure schedule for tomorrow in a table.
```

**➡️ Problem:** The departure station is required, but it has not been provided.

### ✅ Prompt with an Assumption Check

```
Task: Show tomorrow's train departures in a table.

Required information:
- Departure station

Optional information:
- Destination. If omitted, show all destinations.
- Time range. If omitted, use 06:00–22:00 local time.

Before starting:
- If the departure station is missing, ask: "Which station would you like departures from?"
- If you cannot access live schedule data, say so and ask the user to provide a source. Do not invent a timetable.

When the required information and schedule data are available, return a table with:
| Time | Train No. | Destination | Platform | Status |
```

## Two Different Checks

- **Missing task information:** Ask for the departure station because the task cannot continue without it.
- **Missing data access:** Explain that live schedule data is unavailable and ask for a source.

Optional details such as destination should not block the task.
