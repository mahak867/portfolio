const { isDatabaseConfigured, query } = require("./db");
const sampleData = require("./sample-data");

function logDatabaseFallback(error) {
  console.warn(`Using bundled demo data because PostgreSQL is unavailable: ${error.message}`);
}

async function getProfile() {
  if (!isDatabaseConfigured()) {
    return sampleData.profile;
  }

  try {
    const result = await query(`
      SELECT
        name,
        title,
        location,
        email,
        summary,
        resume_url AS "resumeUrl",
        github_url AS "githubUrl",
        linkedin_url AS "linkedinUrl",
        website_url AS "websiteUrl"
      FROM profile
      ORDER BY id
      LIMIT 1
    `);

    return result.rows[0] || sampleData.profile;
  } catch (error) {
    logDatabaseFallback(error);
    return sampleData.profile;
  }
}

async function listProjects() {
  if (!isDatabaseConfigured()) {
    return sampleData.projects;
  }

  try {
    const result = await query(`
      SELECT
        title,
        slug,
        summary,
        description,
        stack,
        image_url AS "imageUrl",
        demo_url AS "demoUrl",
        repo_url AS "repoUrl",
        featured
      FROM projects
      ORDER BY sort_order, title
    `);

    return result.rows;
  } catch (error) {
    logDatabaseFallback(error);
    return sampleData.projects;
  }
}

async function listSkills() {
  if (!isDatabaseConfigured()) {
    return sampleData.skills;
  }

  try {
    const result = await query(`
      SELECT
        category,
        json_agg(name ORDER BY sort_order, name) AS items
      FROM skills
      GROUP BY category
      ORDER BY MIN(sort_order), category
    `);

    return result.rows;
  } catch (error) {
    logDatabaseFallback(error);
    return sampleData.skills;
  }
}

async function createContactMessage({ name, email, message }) {
  if (!isDatabaseConfigured()) {
    return { persisted: false };
  }

  try {
    const result = await query(
      `
        INSERT INTO contact_messages (name, email, message)
        VALUES ($1, $2, $3)
        RETURNING id
      `,
      [name.trim(), email.trim().toLowerCase(), message.trim()]
    );

    return { persisted: true, id: result.rows[0].id };
  } catch (error) {
    logDatabaseFallback(error);
    return { persisted: false };
  }
}

module.exports = {
  createContactMessage,
  getProfile,
  listProjects,
  listSkills
};
