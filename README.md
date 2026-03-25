# Browserless Extension for Gemini CLI

A Gemini CLI extension that gives Gemini direct access to the [Browserless.io](https://docs.browserless.io/rest-apis/intro) REST APIs: scrape webpages, take screenshots, generate PDFs, search the web, map site structures, and run custom browser automation, all from natural language.

## Installation

Clone the repo and link the extension:

```bash
git clone https://github.com/browserless/gemini-plugin.git
cd gemini-plugin
gemini extensions link .
```

## Setup

### 1. Get a Browserless API token

Sign up for free at [browserless.io](https://www.browserless.io) and grab your API token.

### 2. Authenticate

Run the auth command inside Gemini CLI:

```
/browserless:auth
```

This will prompt you for your token and preferred API region (SFO, LON, AMS, or a custom URL), then save the credentials to `~/.browserless/.env`.

Alternatively, the extension settings will prompt for your token automatically, or you can set the environment variable directly:

```bash
export BROWSERLESS_TOKEN=your-token-here
```

### 3. Start using commands

Once authenticated, all commands are available:

```
/browserless:smart-scrape https://example.com
/browserless:screenshot https://example.com
/browserless:pdf https://example.com
/browserless:search what is browserless
/browserless:map https://example.com
/browserless:function run ./scripts/sample-script.js
```

## Commands

| Command | Description | Example Prompt |
|---------|-------------|----------------|
| `/browserless:auth` | Configure API token and region. Subcommands: `status`, `clear`, `region`. | |
| `/browserless:smart-scrape` | Scrape webpages with cascading strategies (HTTP fetch, proxy, headless browser, captcha solving). Returns markdown, HTML, screenshots, PDFs, or links. | `summarize the main content of https://news.ycombinator.com` |
| `/browserless:screenshot` | Capture screenshots of webpages. Supports full-page, element-specific, viewport sizing, image formats (PNG/JPEG/WebP), and proxy/geo-targeting. | `take a screenshot of https://inet-ip.info/ using a French proxy, wait 5 seconds before taking it` |
| `/browserless:pdf` | Generate PDFs from webpages or HTML. Supports paper formats, margins, headers/footers, landscape, background graphics, and tagged/accessible PDFs. | `save https://en.wikipedia.org/wiki/Headless_browser as a landscape A4 PDF` |
| `/browserless:search` | Search the web and optionally scrape result pages. Supports web, news, and image sources with time-based filtering and content categories. | `find recent AI news en español from the last week` |
| `/browserless:map` | Discover and list all URLs on a website. Crawls sitemaps, pages, and subdomains with relevance-based search filtering. | `save a list of all URLs on https://browserless.io in json format` |
| `/browserless:function` | Execute custom Puppeteer JavaScript in a cloud browser. Run arbitrary automation scripts, interact with page elements, fill forms, and return structured data. | `load the ./scripts/sample-script.js file and run it using /function` |

## Auth Management

| Command | Description |
|---------|-------------|
| `/browserless:auth` | Interactive setup — set token and region |
| `/browserless:auth status` | Check if authentication is configured |
| `/browserless:auth clear` | Remove saved credentials |
| `/browserless:auth region` | Change API region without re-entering token |

Credentials are stored in `~/.browserless/.env` with `600` permissions. The token resolution order is:

1. `BROWSERLESS_TOKEN` environment variable (from extension settings or shell)
2. `~/.browserless/.env` file (written by `/browserless:auth`)

## API Regions

| Region | URL |
|--------|-----|
| SFO (US West, default) | `https://production-sfo.browserless.io` |
| LON (Europe) | `https://production-lon.browserless.io` |
| AMS (Amsterdam) | `https://production-ams.browserless.io` |
| Custom | Any self-hosted or custom Browserless URL |

## Extension Structure

```
gemini-plugin/
  gemini-extension.json     # Extension manifest and settings
  GEMINI.md                 # Context instructions loaded at session start
  commands/
    browserless/
      auth.toml             # Authentication setup
      smart-scrape.toml     # Web scraping
      screenshot.toml       # Screenshot capture
      pdf.toml              # PDF generation
      search.toml           # Web search
      map.toml              # URL discovery
      function.toml         # Custom Puppeteer code
  scripts/
    sample-script.js        # Example Puppeteer script
```

## API Reference

Each command maps to a Browserless REST API endpoint. Full API documentation is available at [docs.browserless.io/rest-apis/intro](https://docs.browserless.io/rest-apis/intro).

| Command | Endpoint |
|---------|----------|
| Smart Scrape | `POST /smart-scrape` |
| Screenshot | `POST /screenshot` |
| PDF | `POST /pdf` |
| Search | `POST /search` |
| Map | `POST /map` |
| Function | `POST /function` |

## License

SSPL-1.0
