# Introduction to Context Engineering

**Prompt engineering** is about how you describe the task.

**Context engineering** is about choosing and organizing the information the model needs to complete that task.

A clear instruction is not enough when important facts are missing. For example, a model cannot accurately document an API without its specification.

## Example: Document a Payment API

Use the same task in each version and compare the results.

### Version A: Instructions Only

```
Document our Payment API.

Include authentication, requests, responses, and errors.
```

The task is clear, but the model has no information about the actual API. Which details in its answer are unsupported?

### Version B: Add Relevant Context

```
Document our Payment API.

Include authentication, requests, responses, and errors.
Use the current API specification as the source of truth.
Follow the style of the approved documentation example.
If a detail is not provided, say that it is not provided.

<current_api_spec>
[Current API specification]
</current_api_spec>

<approved_example>
[Approved documentation example]
</approved_example>
```

Now check whether the documentation follows the real API and the team's conventions.

### Version C: Add Conflicting Context

This version teaches how to **resolve conflicting context**. Keep the same task, add an older specification, and define which source takes priority.

```
Source priority:
1. Use the current API specification for factual information.
2. Use the approved documentation example only for style and formatting.
3. Use the outdated API specification only to identify conflicts.

If the specifications disagree, follow the current specification and list the conflict.

<outdated_api_spec date="2024-01-15">
[Outdated API specification]
</outdated_api_spec>
```

The model should not silently choose between conflicting sources. It should use the stated priority and make the conflict visible.

## Three Context Decisions

- **Select:** What information is needed for this task?
- **Organize:** Which content is an instruction, reference, or example?
- **Resolve:** Which source takes priority when information conflicts?

Context is not about adding as much information as possible. It is about giving the model the right information for the task.
