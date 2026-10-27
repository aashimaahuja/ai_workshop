# Evaluate and Iterate

The first result is a draft. Compare it with your success criteria, identify what is missing or incorrect, and then improve the instruction or context.

## The Iteration Loop

1. Define what a good result should include.
2. Generate a result.
3. Check the result against the criteria.
4. Identify the specific problem.
5. Update the prompt or context and try again.

## Example: Create a Meeting Agenda

### First Attempt

```
Create a meeting agenda for a project kickoff.
```

Possible result:

```
1. Introductions
2. Project overview
3. Next steps
```

### Evaluate the Result

The agenda looks reasonable, but it is incomplete:

- The meeting length is not defined.
- Important topics such as technical approach, risks, and Q&A are missing.
- The agenda does not show an outcome or owner for each section.

### Improve the Prompt

```
Create a 60-minute agenda for a software project kickoff.

Include:
- Introductions
- Project goals
- Technical approach
- Risks
- Q&A and next steps

The time blocks must total exactly 60 minutes.
For each section, include an expected outcome and an owner.
Return the agenda as a Markdown table.
```

Possible result:

| Time | Topic | Expected outcome | Owner |
| --- | --- | --- | --- |
| 0–10 min | Introductions | Roles are clear | Facilitator |
| 10–20 min | Project goals | Team agrees on goals | Product owner |
| 20–35 min | Technical approach | Main approach and dependencies are understood | Tech lead |
| 35–45 min | Risks | Initial risks are recorded | Project manager |
| 45–55 min | Q&A | Open questions are discussed | Facilitator |
| 55–60 min | Next steps | Actions and owners are confirmed | Project manager |

### Check Again

- **Correctness:** The time blocks total 60 minutes.
- **Completeness:** All required topics are included.
- **Usefulness:** Each section has an outcome and owner.
- **Formatting:** The table is easy to scan.

Iteration is not about making every prompt longer. Change the instruction or context that caused the specific problem, then evaluate again.
