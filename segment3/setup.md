# Using OpenAI API with Python

This guide will walk you through setting up your environment to use the OpenAI API with Python.

## Prerequisites

- Python 3.7 or higher ([Installation Guide](python_installation.md) if Python is not installed on your computer)
- A terminal or command prompt
- Internet connection

## ✅ Step 1: Create OpenAI Account & Get API Key

1. Go to [OpenAI Signup](https://platform.openai.com/signup)
2. Create an account (or log in)
3. Navigate to [API Keys section](https://platform.openai.com/account/api-keys)
4. Click "Create new secret key"
5. **Important**: Copy and store the key safely — you won't be able to see it again!

## ✅ Step 2: Create a Python Project Folder

Open your terminal and run these commands:

```bash
mkdir llm-api-demo
cd llm-api-demo
python -m venv venv

# Activate the virtual environment
# On macOS/Linux:
source venv/bin/activate
# On Windows:
# venv\Scripts\activate
```

<details>
<summary><h3>🔍 Verifying Your Virtual Environment (Click to Expand)</h3></summary>

There are two ways to confirm your virtual environment is properly activated:

### Method 1: Check Terminal Prompt

Look for the `(venv)` prefix in your terminal prompt:
```bash
(venv) your-folder-name %
```

**Note**: Don't worry if you don't see this prefix — some terminal themes may suppress it. In that case, use Method 2.

### Method 2: Check Python Path

Run this command in your terminal:
```bash
which python
```

You should see a path like this:
```plaintext
/path/to/your/project/venv/bin/python
```

⚠️ If you see any of these paths instead, you're using the global Python (not the virtual environment):
- `/usr/bin/python`
- `/opt/homebrew/bin/python`

In this case, make sure to activate your virtual environment using the commands from Step 2.

</details>

## ✅ Step 3: Install Required Packages

With your virtual environment activated, install the necessary packages:

```bash
pip install openai python-dotenv jupyter
```

## ✅ Step 4: Launch Jupyter Notebook

Start the Jupyter notebook server:

```bash
jupyter notebook
```

## ✅ Step 5: Set Up API Key

Create a `.env` file in your project root directory:

```plaintext
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxx
```

**Security Note**: Never commit your `.env` file to version control. Add it to your `.gitignore` file if you're using Git.



