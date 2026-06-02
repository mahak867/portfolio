# Personal Portfolio Website

A full-stack personal portfolio for Mahak Fahad, built for the assignment due on 08 Jun 2026. It includes a responsive frontend, a Node.js/Express backend, PostgreSQL project storage, and deployment-ready configuration.

## Features

- Responsive HTML, CSS, and JavaScript portfolio frontend
- Express API endpoints for profile, projects, skills, and contact messages
- PostgreSQL schema and seed data for portfolio projects and skills
- Contact form with server-side validation
- Heroku `Procfile` and Vercel configuration
- Demo fallback data when `DATABASE_URL` is not configured

## Tech Stack

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: PostgreSQL
- Deployment targets: Heroku or Vercel

## Local Setup

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env
```

Update `DATABASE_URL` in `.env`, then create and seed the database:

```bash
npm run db:setup
```

Start the app:

```bash
npm run dev
```

Open `http://localhost:3000`.

If PostgreSQL is not configured yet, the app still runs with bundled demo data. Configure PostgreSQL before submitting if your instructor expects database persistence.

## API Routes

- `GET /api/profile` returns portfolio owner details.
- `GET /api/projects` returns project cards from PostgreSQL or demo data.
- `GET /api/skills` returns grouped technical skills.
- `POST /api/contact` validates and stores contact messages when PostgreSQL is connected.

## Deployment Notes

### Heroku

1. Create a Heroku app.
2. Add a PostgreSQL database add-on.
3. Set `DATABASE_URL` and `PGSSL=true` in config vars.
4. Push the project to Heroku.
5. Run `npm run db:setup` once from the Heroku console.

### Vercel

1. Import this project into Vercel.
2. Add `DATABASE_URL` and `PGSSL=true` in project environment variables.
3. Deploy the project.
4. Run `npm run db:setup` locally against the hosted PostgreSQL connection string.

## Customization Checklist

- Confirm the exact location because the resume only indicates India-focused work.
- Replace generated preview images with real screenshots when the projects are ready.
- Add live demo URLs for Spendzview and APEX AI Dev Engine if public deployments become available.
- Run `npm run db:setup` after changing seed data.
