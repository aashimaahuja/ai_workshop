# 🐍 Python Installation Guide

## 🧰 Step 1: Install Python

### 🪟 Windows:

1. Visit [Python Downloads for Windows](https://www.python.org/downloads/windows/)
2. Download the latest stable Python 3.x
3. Run the installer
4. **Important**: Check "Add Python to PATH" ✅
5. Click "Install Now"

### 🍎 macOS:

**Option 1: Using Homebrew (Recommended)**
```bash
# Install Python using Homebrew
brew install python
```

**Option 2: Direct Download**
1. Visit [Python Downloads for macOS](https://www.python.org/downloads/macos/)
2. Download the latest stable Python 3.x
3. Run the installer package

### 🐧 Linux:
Most Linux distributions come with Python pre-installed. If not:

**Ubuntu/Debian:**
```bash
sudo apt update
sudo apt install python3
```

**Fedora:**
```bash
sudo dnf install python3
```

## ✅ Step 2: Verify Installation

Open your terminal (Command Prompt on Windows) and run:

```bash
python --version
```

If that doesn't work, try:
```bash
python3 --version
```

You should see something like `Python 3.12.x`

## 🔍 Troubleshooting

- If Python isn't found, make sure it's added to your PATH
- For Windows users: Try running the installer again with "Add Python to PATH" checked
- For macOS/Linux users: Both `python` and `python3` commands should work

## ➡️ Next Steps

Once Python is installed successfully, return to the [Setup Guide](setup.md) to continue with the OpenAI API setup.