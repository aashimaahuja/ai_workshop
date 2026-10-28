# Ollama

Ollama provides tools and an API for running models. This lesson uses a local model, so prompts and responses are processed on your computer. Ollama also supports cloud models, which run on Ollama's servers.

## Install Ollama

Use the instructions on the [Ollama download page](https://ollama.com/download), or run the command for your operating system.

### macOS and Linux

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

### Windows PowerShell

```powershell
irm https://ollama.com/install.ps1 | iex
```

Verify the installation:

```bash
ollama --version
```

## Run a Local Model

This example uses `gemma3:1b`, a small model suitable for learning:

```bash
ollama pull gemma3:1b
ollama run gemma3:1b
```

The Ollama application normally starts the local server. On Linux, run `ollama serve` if the server is not already running. The local API is available at `http://localhost:11434`.

## Call the Local API with Python

You can call Ollama's HTTP API with `requests`:

```python
import requests

response = requests.post(
    "http://localhost:11434/api/chat",
    json={
        "model": "gemma3:1b",
        "messages": [
            {"role": "user", "content": "Explain recursion in simple terms."}
        ],
        "stream": False,
    },
    timeout=120,
)
response.raise_for_status()

print(response.json()["message"]["content"])
```

## Use the Official Python Library

Install the library:

```bash
pip install ollama
```

Then call the model:

```python
from ollama import chat

response = chat(
    model="gemma3:1b",
    messages=[
        {"role": "user", "content": "Explain recursion in simple terms."}
    ],
)

print(response.message.content)
```

## Use the JavaScript Library

Install the library:

```bash
npm install ollama
```

Then call the model:

```javascript
import ollama from "ollama";

const response = await ollama.chat({
  model: "gemma3:1b",
  messages: [
    { role: "user", content: "Explain recursion in simple terms." },
  ],
});

console.log(response.message.content);
```

## Manage Downloaded Models

```bash
ollama list
ollama rm gemma3:1b
```

Choose a model that fits your machine. Larger models generally need more memory and storage and may respond more slowly on limited hardware.
