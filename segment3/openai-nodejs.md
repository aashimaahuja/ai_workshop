# Step-by-Step: Node.js Project Setup for OpenAI API

## 1️⃣ Create a new project folder

Open your terminal and run:

```bash
mkdir openai-node-demo
cd openai-node-demo
```

## 2️⃣ Initialize a new Node.js project

```bash
npm init -y
```

This creates a package.json file.

## 3️⃣ Enable ES modules

In package.json, add the following line if you want to use import syntax:

```json
"type": "module"
```

## 4️⃣ Install dependencies

```bash
npm install openai dotenv
```

## 5️⃣ Create a .env file to store your API key

```bash
touch .env
```

In .env, add:

```
OPENAI_API_KEY=sk-XXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

## 6️⃣ Create your main script file

```bash
touch index.js
```

## 7️⃣ Add boilerplate code to index.js

```javascript
import 'dotenv/config';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Sample test to verify setup
const test = async () => {
  const response = await openai.responses.create({
    model: 'gpt-4o-mini',
    instructions: 'You are a helpful assistant.',
    input: 'Say hello in one sentence.',
    temperature: 0.5
  });

  console.log(response.output_text);
};

test();
```

## 8️⃣ Run the script

```bash
node index.js
```

You should see a response printed in the terminal like:

```
Hello! How can I help you today?
```

## ✅ Your project folder should now look like:

```
openai-node-demo/
├── .env
├── index.js
├── package.json
└── node_modules/
```

---

# Text Summarization Demo

## 🧠 Goal: Use gpt-4o-mini to summarize a paragraph using Node.js.

Make sure you have already completed the setup:
- openai and dotenv are installed
- .env file contains your OPENAI_API_KEY
- Your index.js is using import syntax

## 📄 Step 1: Add Input Text

Open index.js and paste:

```javascript
import 'dotenv/config';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const inputText = `Large language models (LLMs) are a type of artificial intelligence that can generate human-like text based on the input they receive. These models are trained on massive datasets and can perform a wide range of language tasks, such as translation, summarization, and question answering. However, they also come with challenges like hallucination, bias, and the need for large amounts of computational power.`;
```

## 🧪 Step 2: Create the summarization request

```javascript
const summarize = async () => {
  const response = await openai.responses.create({
    model: 'gpt-4o-mini',
    instructions: 'You are a helpful assistant that summarizes text.',
    input: `Summarize the following text:\n\n${inputText}`,
    temperature: 0.5
  });

  console.log('📝 Summary:\n', response.output_text.trim());
};

summarize();
```

## 🖥️ Step 3: Run the script

```bash
node index.js
```

## ✅ Next steps:

Try the following prompts using
- structured output (bullet points or JSON)?
- role-based summaries?
- batching multiple texts?
