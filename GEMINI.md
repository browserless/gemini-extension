# Browserless Extension

This extension connects Gemini to [Browserless.io](https://browserless.io) through the hosted **Browserless MCP server** (`https://mcp.browserless.io/mcp`). The browser tools are exposed by the server and appear automatically — there is nothing to curl and no scripts to run.

## Authentication

The MCP server is reached with your Browserless API token, configured once via the extension setting **API Token** (`BROWSERLESS_TOKEN`). It is sent as a `Bearer` header on every request. If tools fail to load or return `401`, the token is missing or invalid — get one at [browserless.io](https://www.browserless.io).

## Available tools

The server exposes these tools (the exact set is loaded live from the MCP server):

- **`browserless_agent`** — the interactive web agent. Drives a persistent browser session through a multi-step ReAct loop: snapshot the page, plan, click/type/scroll, and re-snapshot. Handles multi-tab workflows, captcha solving, residential proxies, and file upload/download. Reach for this when a task needs *steps* on the web, not a single fetch.
- **`browserless_skill`** — load an on-demand recipe for a tricky page mechanic (cookie banners, modals, shadow DOM, dynamic content). Companion to the agent; skills also auto-inject when their triggers fire.
- **`browserless_smartscraper`** — scrape a page with cascading strategies (HTTP fetch → proxy → headless browser → captcha solving). Returns markdown, HTML, or links.
- **`browserless_search`** — structured web, news, and image search.
- **`browserless_crawl`** — follow links from a seed URL to a configurable depth, scraping each page.
- **`browserless_map`** — discover every URL on a site (sitemaps, pages, subdomains).
- **`browserless_function`** — run custom Puppeteer JavaScript in a cloud browser.
- **`browserless_performance`** — Lighthouse audit (performance, accessibility, best practices, SEO).
- **`browserless_export`** — export a page in its native format, optionally bundling assets into a ZIP.

## Guidance

- For anything multi-step or interactive (logging in, filling forms, navigating through pages, completing a task), use **`browserless_agent`** — not one-shot scraping.
- For "just read/summarize this page," **`browserless_smartscraper`** is cheaper and faster.
- Pass a residential `proxy` on the agent when a target IP-blocks datacenter traffic.
