# Chain of Thought (COT)

Chain of Thought (COT) is when you ask AI to solve a problem step by step instead of jumping straight to the final answer.

It's like when we write down the steps of our thinking before giving the solution — this helps the AI produce clearer, more accurate results.

## Example: Posting Meeting Summary in Dutch to Slack

### Without COT (vague prompt)

"Post the following meeting notes in Dutch in the #eng-team Slack channel."

**➡️ Output might be messy:** too long, wrong formatting, English left mixed in.

### With COT (explicit steps)

```
You are an assistant helping with internal communication.

**Task:** Post the following meeting notes into the #eng-team Slack channel in Dutch.

**Follow these steps:**

1. Generate a short summary of the meeting in English (3–5 points).
2. Translate the summary into Dutch.
3. Format it for Slack:
   - Title in bold: "📌 Vergadersamenvatting"
   - Bullet points for each item
4. Check the message is fully in Dutch and Slack-friendly.
5. Return only the final formatted Slack message.
```

**Without COT** → AI might skip steps and make mistakes.

**With COT** → AI delivers exactly what you want: concise, translated, formatted, Slack-ready.

Reasoning models already “think in steps,” but making the steps explicit helps control quality and style of the output.
