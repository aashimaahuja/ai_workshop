## 🧠 Batching with OpenAI API in Python
Batching allows you to summarize or process multiple texts efficiently. It’s useful for scaling, cost optimization, and cleaner code structure.

### ✅ Why Use Batching?
- Efficient: Reduce the number of HTTP calls
- Cost-aware: You can batch smaller texts together
- Scalable: Automate summarizing many docs in a loop or in one request

There is a token limit for input. So use batching if the tokens are within the input limit

### Example - Summarising multiple documents

- **Option A**: One API call per document (looped — basic batching)
- **Option B**: One API call for multiple documents in a single request (concatenated prompts or messages)


Option A is better if you want individual metadata or streaming, while Option B is cheaper and faster if docs are small.

### Loop-Based Batching (1 request per doc)
```python

documents = [
    """OpenAI released GPT-4o in May 2024, a model that combines text, vision, and audio capabilities. It supports faster response time and is cheaper to run than GPT-4-turbo.""",

    """During the recent strategy call, the team agreed to sunset the legacy dashboard product by the end of Q3. Focus will shift toward AI-powered analytics modules instead.""",

    """Anthropic’s Claude 3 Opus is gaining traction in enterprise due to its strong context window and safety features. It’s often compared with GPT-4 and Gemini 1.5 Pro."""
]

summaries = []

for i, doc in enumerate(documents):
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "You are a concise summarizer."},
            {"role": "user", "content": f"Summarize the following document:\n\n{doc}"}
        ],
        temperature=0.3
    )
    summary = response.choices[0].message.content.strip()
    summaries.append(summary)

for i, s in enumerate(summaries):
    print(f"📄 Document {i+1} Summary:\n{s}\n")


```

### Single Request with Multiple Docs

```python
prompt = "Summarize each of the following documents in 1–2 lines:\n\n"
for idx, doc in enumerate(documents):
    prompt += f"Document {idx+1}:\n{doc.strip()}\n\n"

response_batch = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": "You are a concise summarizer that returns output as numbered bullet points."},
        {"role": "user", "content": prompt}
    ],
    temperature=0.3
)

print(response_batch.choices[0].message.content.strip())
```

### Track Token Usage & Cost

```python
rate_in = 0.00025 / 1000
rate_out = 0.00050 / 1000
total_cost = 0.0

for i, doc in enumerate(documents):
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "You are a summarizer."},
            {"role": "user", "content": f"Summarize this:\n\n{doc}"}
        ]
    )
    usage = response.usage
    cost = usage.prompt_tokens * rate_in + usage.completion_tokens * rate_out
    total_cost += cost
    print(f"Doc {i+1} cost: ${cost:.6f}")

print(f"🧾 Total cost: ${total_cost:.6f}")
```

⚖️ Comparison

| Approach          | Pros                            | Cons                          |
| ----------------- | ------------------------------- | ----------------------------- |
| Loop/Per Doc      | Easier to debug, flexible       | More API calls                |
| Single Batch Call | Cheaper, faster for short texts | Context size limited (\~128k) |


