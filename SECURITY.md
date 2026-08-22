# Security Policy

## Supported version

ROASTMYCODE does not publish versioned releases. Security fixes are maintained on the current `main` branch.

| Version | Supported |
| --- | --- |
| `main` | Yes |
| Historical commits | No |

## Reporting a vulnerability

Do not post vulnerabilities, API keys, private code, or reproduction details containing sensitive information in public GitHub issues. GitHub private vulnerability reporting is not currently enabled for this repository.

For a private report, email the repository maintainer at [itsmebk2007@gmail.com](mailto:itsmebk2007@gmail.com) with the subject line `ROASTMYCODE security report`. Include a clear description, affected URL or file, reproduction steps, and potential impact. Do not attach real credentials or unredacted private source code.

The maintainer will evaluate reports on a best-effort basis. This policy does not promise a response time or a specific disclosure timeline.

## Security practices in this repository

The browser never receives `GROQ_API_KEY`; both Vercel functions read it from the server environment. The validation script checks tracked source and configuration files for common GitHub and Groq token patterns. Contributors must keep real credentials in their deployment environment rather than repository files.
