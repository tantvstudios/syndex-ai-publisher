# SyndexAI Publisher

SyndexAI Publisher is the publisher-facing platform within the Syndex B2B Operations ecosystem. It provides a dedicated interface where publishers can collaborate, manage content, and use AI-driven tools to enhance their editorial and publishing workflows.

This application enables publishers to:

- Collaborate with other publishers across the Syndex network
- Use AI tools to write, refine, and predict effective article headlines
- Share and publish content across partner publisher pages
- Improve editorial workflow efficiency with intelligent recommendations
- Operate within a modern, streamlined publishing environment

---

## Developer Guide

This section is for developers contributing to the project or setting it up locally.

### Prerequisites

- Node.js (LTS version recommended)
- Yarn (required — this project uses Yarn as the package manager)

### Installation

**Important Notes:**

- This project uses `yarn.lock`
- **DO NOT** delete or edit the `yarn.lock` file
- **DO NOT** use npm to install dependencies

After cloning the repository, run:

```bash
yarn install
```

### Running the Development Server

To start the local development environment:

```bash
yarn dev
```

The application will typically be available at:

```
http://localhost:3000
```

---

## Contribution Guidelines

### 1. Branching Strategy

- Always create a new branch before starting work
- Never push directly to the `main` branch
- Branch names should follow standard naming conventions

### 2. Commit Best Practices

- Commit early and often
- Use descriptive and meaningful commit messages
- Avoid vague commits like "fix" or "update"

### 3. Pull Request Requirements

When opening a pull request:

- Provide a clear and detailed description of what your PR changes
- Include project context and reasoning where applicable
- Ensure commits are well-organized
- Include screenshots, screen recordings, and other relevant visuals to assist the reviewer

⚠️ **IMPORTANT:** ALL PRs MUST include detailed descriptions and visuals so reviewers can quickly and clearly understand your changes.
