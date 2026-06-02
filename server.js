require("dotenv").config();

const path = require("path");
const express = require("express");
const {
  createContactMessage,
  getProfile,
  listProjects,
  listSkills
} = require("./src/repository");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json({ limit: "32kb" }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/health", (request, response) => {
  response.json({ status: "ok", service: "personal-portfolio" });
});

app.get("/api/profile", async (request, response, next) => {
  try {
    response.json(await getProfile());
  } catch (error) {
    next(error);
  }
});

app.get("/api/projects", async (request, response, next) => {
  try {
    response.json(await listProjects());
  } catch (error) {
    next(error);
  }
});

app.get("/api/skills", async (request, response, next) => {
  try {
    response.json(await listSkills());
  } catch (error) {
    next(error);
  }
});

app.post("/api/contact", async (request, response, next) => {
  try {
    const { name, email, message } = request.body;

    if (!name || !email || !message) {
      response.status(400).json({ error: "Name, email, and message are required." });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      response.status(400).json({ error: "Please provide a valid email address." });
      return;
    }

    const result = await createContactMessage({ name, email, message });
    response.status(result.persisted ? 201 : 202).json({
      message: result.persisted
        ? "Message saved. I will reply soon."
        : "Message received in demo mode. Connect PostgreSQL to persist it.",
      persisted: result.persisted
    });
  } catch (error) {
    next(error);
  }
});

app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use((error, request, response, next) => {
  console.error(error);
  response.status(500).json({ error: "Something went wrong on the server." });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Portfolio server running at http://localhost:${port}`);
  });
}

module.exports = app;
