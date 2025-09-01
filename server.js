const express = require("express");
const path = require("path");
const fs = require("fs").promises;
const marked = require("marked");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.static("prompt_engineering"));
app.use(express.json());

// Configure marked for markdown parsing
marked.setOptions({
  breaks: true,
  gfm: true,
});

// Routes
app.get("/", (req, res) => {
  res.redirect("/prompt_engineering/index.html");
});

// API endpoint to get markdown content
app.get("/api/content/:filepath(*)", async (req, res) => {
  try {
    const filepath = req.params.filepath;
    const fullPath = path.join(__dirname, "prompt_engineering", filepath);

    // Security check: ensure the path is within the prompt_engineering directory
    const resolvedPath = path.resolve(fullPath);
    const promptEngineeringDir = path.resolve(
      path.join(__dirname, "prompt_engineering")
    );

    if (!resolvedPath.startsWith(promptEngineeringDir)) {
      return res.status(403).json({ error: "Access denied" });
    }

    const content = await fs.readFile(fullPath, "utf8");

    // Convert markdown to HTML using the marked library
    const htmlContent = marked.parse(content);

    res.json({ content: htmlContent, filepath, originalContent: content });
  } catch (error) {
    console.error("Error reading file:", error);
    res.status(404).json({ error: "File not found" });
  }
});

// Serve the main index page
app.get("/prompt-engineering", (req, res) => {
  res.sendFile(path.join(__dirname, "prompt_engineering", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 AI Workshop Server running on http://localhost:${PORT}`);
  console.log(
    `📚 Prompt Engineering docs: http://localhost:${PORT}/prompt-engineering`
  );
  console.log(
    `📖 Direct access: http://localhost:${PORT}/prompt_engineering/index.html`
  );
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});
