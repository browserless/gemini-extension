# Browserless Extension

You have access to the Browserless.io REST APIs through custom commands. These let you scrape webpages, take screenshots, generate PDFs, search the web, map site structures, and run custom browser automation.

## Authentication

All Browserless API calls require a token. The token is available as `$BROWSERLESS_TOKEN` (configured via extension settings). The API base URL is `$BROWSERLESS_API_URL` (defaults to `https://production-sfo.browserless.io` if not set).

Before making any API call, resolve credentials:

```bash
# Token comes from extension settings (BROWSERLESS_TOKEN env var)
# Fall back to ~/.browserless/.env if settings aren't configured
[ -z "$BROWSERLESS_TOKEN" ] && [ -f ~/.browserless/.env ] && source ~/.browserless/.env
API_URL="${BROWSERLESS_API_URL:-https://production-sfo.browserless.io}"
```

If no token is available, ask the user to configure it via extension settings or run `/browserless:auth`.

## Available Commands

- `/browserless:auth` — Configure API token and region
- `/browserless:smart-scrape <url>` — Scrape a webpage with cascading strategies
- `/browserless:screenshot <url>` — Capture a screenshot of a webpage
- `/browserless:pdf <url>` — Generate a PDF from a webpage
- `/browserless:search <query>` — Search the web
- `/browserless:map <url>` — Discover all URLs on a website
- `/browserless:function <task>` — Execute custom Puppeteer JavaScript

## API Regions

| Region | URL |
|--------|-----|
| SFO (US West, default) | `https://production-sfo.browserless.io` |
| LON (Europe) | `https://production-lon.browserless.io` |
| AMS (Amsterdam) | `https://production-ams.browserless.io` |
