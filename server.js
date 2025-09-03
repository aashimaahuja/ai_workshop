const express = require("express");
const path = require("path");
const fs = require("fs").promises;
const marked = require("marked");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.static("prompt_engineering"));
app.use(express.static("segment3"));
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
    
    // Try segment3 first, then prompt_engineering
    let fullPath = path.join(__dirname, "segment3", filepath);
    let resolvedPath = path.resolve(fullPath);
    let segment3Dir = path.resolve(path.join(__dirname, "segment3"));
    
    // Check if file exists in segment3
    let content;
    try {
      if (resolvedPath.startsWith(segment3Dir)) {
        content = await fs.readFile(fullPath, "utf8");
      } else {
        throw new Error("Path not in segment3");
      }
    } catch (error) {
      // Fallback to prompt_engineering
      fullPath = path.join(__dirname, "prompt_engineering", filepath);
      resolvedPath = path.resolve(fullPath);
      const promptEngineeringDir = path.resolve(
        path.join(__dirname, "prompt_engineering")
      );

      if (!resolvedPath.startsWith(promptEngineeringDir)) {
        return res.status(403).json({ error: "Access denied" });
      }
      
      content = await fs.readFile(fullPath, "utf8");
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



// Start server
app.listen(PORT, () => {
  console.log(`🚀 AI Workshop Server running on http://localhost:${PORT}`);
  console.log(
    `📚 Prompt Engineering docs: http://localhost:${PORT}/prompt-engineering`
  );
  console.log(
    `🤖 Segment 3 docs: http://localhost:${PORT}/segment3`
  );
  console.log(
    `📖 Direct access: http://localhost:${PORT}/prompt_engineering/index.html`
  );
  console.log(
    `📖 Direct access: http://localhost:${PORT}/segment3/index.html`
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
