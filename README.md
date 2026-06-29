# Browserless Extension for Gemini CLI

A Gemini CLI extension that connects Gemini to [Browserless.io](https://browserless.io) through the hosted **Browserless MCP server**. It gives Gemini an interactive web agent plus scraping, web search, crawling, site mapping, custom Puppeteer, Lighthouse audits, and export — all from natural language, with no local browser infrastructure to manage.

## Installation

Clone the repo and link the extension:

```bash
git clone https://github.com/browserless/gemini-extension.git
cd gemini-extension
gemini extensions link .
```

## Setup

### 1. Get a Browserless API token

Sign up for free at [browserless.io](https://www.browserless.io) and grab your API token.

### 2. Configure the token

When you enable the extension, Gemini CLI prompts for the **API Token** setting and stores it as `BROWSERLESS_TOKEN`. Alternatively, set it in your shell before launching:

```bash
export BROWSERLESS_TOKEN=your-token-here
```

The token is sent as a `Bearer` header to `https://mcp.browserless.io/mcp`. That's the whole setup — the browser tools are served over MCP and appear automatically.

### 3. Start using it

Just ask. Gemini picks the right tool:

```
Go to news.ycombinator.com, open the top story, and summarize the linked article.
Take a screenshot of https://example.com.
Find recent AI news from the last week.
Crawl https://browserless.io and list every page.
```

## Tools

These are exposed by the Browserless MCP server (the live set is loaded from the server at runtime):

| Tool | Description |
|------|-------------|
| `browserless_agent` | Interactive web agent — drives a persistent browser session through a multi-step ReAct loop (navigate, click, type, snapshot). Handles multi-tab workflows, captcha solving, residential proxies, and file upload/download. |
| `browserless_skill` | On-demand recipes for tricky page mechanics (cookie banners, modals, shadow DOM, dynamic content). Companion to the agent. |
| `browserless_smartscraper` | Scrape a page with cascading strategies (HTTP fetch → proxy → headless browser → captcha solving). Returns markdown, HTML, or links. |
| `browserless_search` | Structured web, news, and image search. |
| `browserless_crawl` | Follow links from a seed URL to a configurable depth, scraping each page. |
| `browserless_map` | Discover every URL on a site (sitemaps, pages, subdomains). |
| `browserless_function` | Run custom Puppeteer JavaScript in a cloud browser. |
| `browserless_performance` | Lighthouse audit (performance, accessibility, best practices, SEO). |
| `browserless_export` | Export a page in its native format, optionally bundling assets into a ZIP. |

## Extension Structure

```
gemini-extension/
  gemini-extension.json     # Manifest — MCP server pointer + token setting
  GEMINI.md                 # Context loaded at session start
```

## License

SSPL-1.0
