# Ollama - Local AI Models

## Install Ollama

### macOS

```bash
curl -fsSL https://ollama.ai/install.sh | sh
```

### Linux

```bash
curl -fsSL https://ollama.ai/install.sh | sh
```

### Windows

Download the installer from [https://ollama.ai/download](https://ollama.ai/download)

## Verify Installation

After installation, verify that Ollama is working correctly:

```bash
ollama --version
```

You should see the version number displayed, confirming successful installation.

## Run First Model

### Start Ollama Service

First, start the Ollama service:

```bash
ollama serve
```

This will start the Ollama server on `http://localhost:11434`

### Pull and Run a Model

Pull your first model (e.g., Llama 2):

```bash
ollama pull llama2
```

Run the model interactively:

```bash
ollama run llama2
```

You can now chat with the model directly in your terminal.

## Python Client Example

Here's how to interact with Ollama using Python:

```python
import requests

response = requests.post(
    "http://localhost:11434/api/generate",
    json={"model": "llama2", "prompt": "Explain recursion in simple terms"}
)

print(response.json()["response"])
```

### Alternative Python Client

You can also use the official Ollama Python client:

```bash
pip install ollama
```

```python
import ollama

response = ollama.generate('llama2', 'Explain recursion in simple terms')
print(response['response'])
```

## Node.js Client Example

Here's how to interact with Ollama using Node.js:

### Install Ollama Node.js Client

```bash
npm install ollama
```

### Basic Usage

```javascript
import ollama from "ollama";

const response = await ollama.chat({
  model: model,
  messages: [{ role: "user", content: prompt }],
  temperature: 0.5,
});

const summary = response.message.content;
return summary;
```

## Model Management

### List Models

```bash
ollama list
```

### Remove Model

```bash
ollama rm llama3:8b
```

### Pull Specific Model Versions

```bash
ollama pull llama2:7b
ollama pull llama2:13b
```

## API Endpoints

Ollama provides a REST API at `http://localhost:11434`:

- **Generate**: `POST /api/generate` - Generate text completions
- **Chat**: `POST /api/chat` - Chat with models
- **List**: `GET /api/tags` - List available models
- **Pull**: `POST /api/pull` - Download a model
- **Delete**: `DELETE /api/delete` - Remove a model

## Tips and Best Practices

1. **Model Selection**: Start with smaller models (7B parameters) for faster inference
2. **Hardware Requirements**: Ensure you have sufficient RAM and storage for models
3. **GPU Acceleration**: Ollama automatically uses GPU if available
4. **Model Caching**: Models are cached locally after first download
5. **API Rate Limiting**: Be mindful of request frequency in production applications
