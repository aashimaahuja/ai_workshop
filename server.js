const express = require("express");
const path = require("path");
const fs = require("fs").promises;
const marked = require("marked");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Configure marked for markdown parsing
marked.setOptions({
  breaks: true,
  gfm: true,
});

// Routes - Define routes BEFORE static file serving
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Static file serving - AFTER routes to avoid conflicts
app.use(express.static("prompt_engineering"));
app.use(express.static("segment3"));
app.use(express.static("segment_4"));

// API endpoint to get markdown content
app.get("/api/content/:filepath(*)", async (req, res) => {
  try {
    const filepath = req.params.filepath;

    // Try prompt_engineering first, then segment_4, then segment3
    let content;
    let fullPath;
    let resolvedPath;

    // Check prompt_engineering first
    try {
      fullPath = path.join(__dirname, "prompt_engineering", filepath);
      resolvedPath = path.resolve(fullPath);
      const promptEngineeringDir = path.resolve(
        path.join(__dirname, "prompt_engineering")
      );

      if (resolvedPath.startsWith(promptEngineeringDir)) {
        content = await fs.readFile(fullPath, "utf8");
      } else {
        throw new Error("Path not in prompt_engineering");
      }
    } catch (error) {
      // Try segment_4
      try {
        fullPath = path.join(__dirname, "segment_4", filepath);
        resolvedPath = path.resolve(fullPath);
        const segment4Dir = path.resolve(path.join(__dirname, "segment_4"));

        if (resolvedPath.startsWith(segment4Dir)) {
          content = await fs.readFile(fullPath, "utf8");
        } else {
          throw new Error("Path not in segment_4");
        }
      } catch (error) {
        // Fallback to segment3
        fullPath = path.join(__dirname, "segment3", filepath);
        resolvedPath = path.resolve(fullPath);
        const segment3Dir = path.resolve(path.join(__dirname, "segment3"));

        if (!resolvedPath.startsWith(segment3Dir)) {
          return res.status(403).json({ error: "Access denied" });
        }

        content = await fs.readFile(fullPath, "utf8");
      }
    }

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

// Serve segment3 index page
app.get("/segment3", (req, res) => {
  res.sendFile(path.join(__dirname, "segment3", "index.html"));
});

// Serve segment4 index page
app.get("/segment4", (req, res) => {
  res.sendFile(path.join(__dirname, "segment_4", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 AI Workshop Server running on http://localhost:${PORT}`);
  console.log(
    `📚 Prompt Engineering docs: http://localhost:${PORT}/prompt-engineering`
  );
  console.log(`🤖 Segment 3 docs: http://localhost:${PORT}/segment3`);
  console.log(
    `📖 Direct access: http://localhost:${PORT}/prompt_engineering/index.html`
  );
  console.log(`📖 Direct access: http://localhost:${PORT}/segment3/index.html`);
  console.log(`🚀 Segment 4 docs: http://localhost:${PORT}/segment4`);
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
