# Contributing to ROASTMYCODE

Thank you for improving ROASTMYCODE. This repository is a browser-first HTML application with Vercel serverless functions, so contributions should keep the client experience, API proxy behavior, and deployment configuration aligned.

## Local setup

Clone the repository and start with the built-in validator:

```bash
git clone https://github.com/vincenzo-afk/roastmycode.git
cd roastmycode
node scripts/validate.mjs
```

For a static visual preview, serve the repository root with a local web server and open `/roastmycode.html`. The AI endpoints require a Vercel-compatible serverless environment and a server-side `GROQ_API_KEY`; do not add this credential to browser code or commits.

## Contribution process

Open an issue before substantial changes so the intended behavior can be discussed. Create a focused branch with a descriptive name such as `fix/refactor-error-state` or `feat/roast-history`. Keep commits concise and imperative, following the existing repository convention—for example, `Fix editor counter` or `Add structured error response`.

Before opening a pull request, run `node scripts/validate.mjs`, test the affected browser or API path manually, and update documentation for visible or configuration changes. Pull requests should describe the user problem, outline the validation performed, and include screenshots when the interface changes.

## Code and security expectations

Preserve the current deployment model: browser code calls `/api/roast` and `/api/refactor`, while the Vercel functions read `GROQ_API_KEY` from the server environment. Never commit environment files containing real credentials, user code samples that are not safe to publish, or generated output that the project does not need to track.

The repository does not currently publish a separate code of conduct. Use respectful, specific language in issues and pull requests, especially when discussing code-review behavior.
