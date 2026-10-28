# Organize Context with Delimiters

Delimiters mark where a section of content starts and ends. They help the model distinguish your instructions from the material it needs to process.

## Example: Summarize a Jira Ticket

### Without Delimiters

```
Summarize the requirements in this Jira ticket.
Title: Implement checkout modal
Description: Add cart, payment, and order summary sections.
Requirements:
- Validate stock before payment.
- Show the final price.
```

With longer tickets, it can become unclear where the instruction ends and the ticket content begins.

### With Delimiters

```
Summarize the requirements in the Jira ticket below.
Treat the content inside <jira_ticket> as reference material.

<jira_ticket>
Title: Implement checkout modal
Description: Add cart, payment, and order summary sections.
Requirements:
- Validate stock before payment.
- Show the final price.
</jira_ticket>
```

The instruction stays outside the tags, while the Jira ticket is grouped as reference material.

## Delimiters Are Not a Security Boundary

Delimiters can organize untrusted content, but they do not prevent prompt injection. Text inside the delimiters may still contain instructions intended to influence the model.

Do not rely on delimiters alone for security. Limit what the model is allowed to do and validate important actions or outputs.

## Common Delimiters

- XML-style tags such as `<jira_ticket>`
- Triple backticks for code or text blocks
- Markdown headings for named sections

Choose descriptive delimiters and use them consistently.
