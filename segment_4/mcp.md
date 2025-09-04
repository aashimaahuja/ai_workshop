# Setting up MCPs in Cursor

This guide covers how to configure Model Context Protocol (MCP) servers in Cursor, specifically focusing on Jira and Playwright MCP servers.

## Prerequisites

### 1. Jira Cloud Account

You must be using Jira Cloud (hosted at `your-domain.atlassian.net`).

> **Note:** Jira MCP servers don't work with self-hosted Jira Server/Data Center unless they explicitly support it.

### 2. Jira API Token

To authenticate with Jira, you'll need to create an API token:

**Option 1: Direct Link**

1. Go to [https://id.atlassian.com/manage-profile/security/api-tokens](https://id.atlassian.com/manage-profile/security/api-tokens)
2. Click "Create API token"
3. Give it a descriptive name
4. Copy the generated token

**Option 2: Through Account Settings**

1. Click on your avatar in Jira
2. Go to Account settings → Security
3. Click "Create and manage API tokens"
4. Follow the same steps as Option 1

> **Important:** Keep your Atlassian email + token safe. This acts like your username/password for the MCP server.

### 3. Node.js & npm Installed

Jira MCP servers are usually distributed as npm packages.

**Check if installed:**

```bash
node -v
npm -v
```

**Install if needed:**

- Download from [nodejs.org](https://nodejs.org/)
- Or use a package manager like Homebrew: `brew install node`

## Installation

### Install uv (if using uv command)

```bash
brew install uv
```

## Configuration

### Jira MCP Server Configuration

Add the following configuration to your Cursor MCP settings:

```json
{
  "mcpServers": {
    "Atlassian": {
      "command": "uvx",
      "args": [
        "mcp-atlassian",
        "--jira-url=<COMPANY_DOMAIN>",
        "--jira-username=<YOUR_EMAIL>",
        "--jira-token=<YOUR_JIRA_TOKEN>"
      ]
    }
  }
}
```

**Replace the following placeholders:**

- `<COMPANY_DOMAIN>`: Your Jira domain (e.g., `mycompany.atlassian.net`)
- `<YOUR_EMAIL>`: Your Atlassian account email
- `<YOUR_JIRA_TOKEN>`: The API token you created in step 2

### Playwright MCP Server

To install and configure the Playwright MCP server:

## Prerequisites

Node should be installed

```bash
node -v
```

Add to your MCP configuration:

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp@latest"]
    }
  }
}
```

## Usage

Once configured, restart Cursor and the MCP servers will be available for use. You can interact with Jira issues, create tickets, and automate browser tasks through the MCP interface.
