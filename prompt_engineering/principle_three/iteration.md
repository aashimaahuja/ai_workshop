# Iteration

Iteration means: "try something, check if the result is what you want, and then improve it by modifying the prompt with clearer instructions."

Just like in coding or debugging, you rarely get it right on the first attempt — you refine until the output matches your needs.

## Example: Creating a Meeting Agenda

### Step 1: First Attempt (too vague)

```
**Prompt**
"Create a meeting agenda for a project kickoff."

**Output**

```

Project Kickoff Agenda

1. Introductions
2. Project Overview
3. Next Steps

```

**➡️ Problem:** Too generic.
```

### Step 2: Iterate — Add More Details

```
**Prompt**
"Create a 1-hour meeting agenda for a software project kickoff.
Include time allocations, goals for each section, and space for Q&A."

**Output**

Project Kickoff Agenda (1 hour)

- 0–10 min: Introductions and roles
- 10–25 min: Project goals, success metrics
- 25–40 min: Technical overview (architecture, dependencies)
- 40–50 min: Risks and challenges
- 50–60 min: Q&A and next steps

```

**➡️ Better:** Structured, but still plain text.

### Step 3: Iterate Again — Add Formatting + Action Items

```
**Prompt**
"Create a software project kickoff agenda (1 hour) with:

- Clear time blocks (in minutes)
- Focus on backend + frontend engineers
- Highlight action items for each section
- Format output in a Markdown table."

**Output**

| Time      | Topic              | Details                                | Action Items                 |
| --------- | ------------------ | -------------------------------------- | ---------------------------- |
| 0–10 min  | Introductions      | Backend & frontend roles               | Note responsibilities        |
| 10–25 min | Project Goals      | Success metrics, deliverables          | Agree on KPIs                |
| 25–40 min | Technical Overview | Architecture, APIs, frontend framework | Identify dependencies        |
| 40–50 min | Risks & Challenges | Scaling, performance risks             | Document risks               |
| 50–60 min | Q&A & Next Steps   | Open floor, align deliverables         | Assign owners for next tasks |
```
