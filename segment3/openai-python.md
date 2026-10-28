## OpenAI API with Python

This document demonstrates how to use the OpenAI Responses API with Python to perform text summarization. We'll walk through importing the necessary libraries, loading your API key, initializing the client, and making a request.

### Step 1: Import Libraries and Load API Key

First, import the required libraries and load your OpenAI API key from an environment variable.

```python
from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()
```

### Step 2: Initialize the OpenAI Client

Next, initialize the OpenAI client using your API key.

```python
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
```

### Step 3: Call the Responses API for Text Summarization

The `instructions` describe how the model should behave. The `input` contains the task and the text to summarize.

```python
input_text = """
Large language models (LLMs) are a type of artificial intelligence that can generate human-like text based on the input they receive. These models are trained on massive datasets and can perform a wide range of language tasks, such as translation, summarization, and question answering. However, they also come with challenges like hallucination, bias, and the need for large amounts of computational power.
"""

response = client.responses.create(
    model="gpt-4o-mini",
    instructions="You are a helpful assistant that summarizes text.",
    input=f"Summarize this:\n\n{input_text}",
    temperature=0.5
)

print(response.output_text)
```

---

### Understanding the Request

The Responses API separates the instruction from the user's input:

- `instructions`: How the model should respond.
- `input`: What the model should work on.
- `output_text`: The generated text returned by the model.

```python
response = client.responses.create(
    model="gpt-4o-mini",
    instructions="Explain programming concepts simply.",
    input="What is a closure in JavaScript?"
)

print(response.output_text)
```

---

## Control the Response Format

You can ask the model to present ordinary text in a particular format, such as bullet points.

### Bullet Point Summary

To get a bullet-point summary, change the instructions and input:

```python
response_bullets = client.responses.create(
    model="gpt-4o-mini",
    instructions="You summarize text into concise bullet points.",
    input=f"Summarize the following text into 3-5 bullet points:\n\n{input_text}",
    temperature=0.4
)

print(response_bullets.output_text)
```

## Structured Output

When your application expects specific fields, define the structure in code instead of describing JSON in the prompt.

```python
from pydantic import BaseModel


class Summary(BaseModel):
    summary: str
    key_points: list[str]


response = client.responses.parse(
    model="gpt-4o-mini",
    instructions="Summarize the provided text.",
    input=input_text,
    text_format=Summary
)

result = response.output_parsed
print(result.summary)
print(result.key_points)
```

The SDK parses the response using the schema. The schema checks the structure, but you should still check whether the information itself is correct.
