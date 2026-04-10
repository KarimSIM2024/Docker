# Kimo Secure Vault - Cloud Computing Project

Kimo Secure Vault is a small two-tier containerized app built with Node.js and Redis.
It serves a simple CTF-themed interface and stores the secret value in Redis.

## Architecture

This project uses a **two-tier architecture**:

1. **App layer**: Node.js service that serves the frontend and talks to Redis.
2. **Data layer**: Redis in-memory database used to store the secret.

## Tech Stack

- Node.js + Express
- Redis
- Docker + Docker Compose

## Prerequisites

Make sure these are installed:

- Docker
- Docker Compose (or `docker compose`)

## Quick Start

From the project root, run:

```bash
docker-compose up -d --build
```

Then open the app in your browser:

- [http://localhost:3000](http://localhost:3000)

## Useful Commands

### View Logs

```bash
docker-compose logs -f kimo-app
```

### Stop the Project

```bash
docker-compose down
```

### Rebuild from Scratch

```bash
docker-compose down
docker-compose up -d --build
```

## Verify Data in Redis (Terminal)

To inspect stored values directly in Redis:

1. Open Redis CLI inside the container:

   ```bash
   docker exec -it kimo-redis-container redis-cli
   ```

2. List keys:

   ```bash
   keys *
   ```

3. Read the stored secret/flag:

   ```bash
   get flag
   ```

## Export Docker Image (Submission)

If you need to submit the built image:

```bash
docker save -o kimo-project-image.tar docker-kimo-app:latest
```

## Project Structure

```text
.
├── Dockerfile
├── docker-compose.yml
├── package.json
└── src
    ├── app.js
    ├── database.js
    └── public
        ├── index.html
        └── style.css
```