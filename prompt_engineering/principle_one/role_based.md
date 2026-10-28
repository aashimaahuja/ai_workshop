# Use a Role to Set Perspective

A role can guide the model's focus, audience, or tone. It does not provide missing facts or replace clear instructions.

## Example: Reviewing a Registration Form

### General Prompt

```
Review this registration form. Identify issues and suggest improvements.
```

The review could focus on design, validation, code quality, or something else.

### Prompt with a Role

```
You are an accessibility reviewer.

Review this registration form. Identify issues and suggest improvements.
```

The role gives the review a clear perspective. It is more likely to focus on labels, keyboard use, error messages, and other accessibility concerns.

## Keep in Mind

Use a role when a specific perspective is useful. Still provide the task, requirements, and source material the model needs.
