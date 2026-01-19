# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the documentation site for Umami Analytics, built with Next.js 16 and Fumadocs. It uses MDX for content authoring and Tailwind CSS v4 for styling.

## Commands

```bash
# Development (clears .source cache and uses Turbopack)
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Linting and formatting (uses Biome)
npm run lint      # Check for lint errors
npm run format    # Format code
npm run check     # Run all Biome checks
```

## Architecture

### Content Flow

```
content/docs/*.mdx → fumadocs-mdx (postinstall) → .source/ → src/lib/source.ts → Routes
```

MDX files in `/content/docs` are processed by `fumadocs-mdx` during `postinstall`, generating the `.source/` directory (git-ignored). The `src/lib/source.ts` file creates loader instances that routes use to access content.

### Documentation Sections

Four separate loader instances exist in `src/lib/source.ts`:
- `source` - Main docs at `/docs`
- `api` - API reference at `/docs/api`
- `guides` - Deployment/migration guides at `/docs/guides`
- `cloud` - Cloud-specific docs at `/docs/cloud`

### Key Files

- `source.config.ts` - Fumadocs configuration (frontmatter schema, MDX settings)
- `next.config.mjs` - Next.js config with `/docs` asset prefix, rewrites, and Umami tracker script injection
- `src/lib/source.ts` - Content loaders and helper functions (`getPageImage`, `getLLMText`)
- `src/lib/layout.shared.tsx` - Shared layout options (nav, links)
- `src/mdx-components.tsx` - Custom MDX component overrides

### Route Structure

- `src/app/docs/[[...slug]]/page.tsx` - Dynamic docs pages (catch-all)
- `src/app/api/search/route.ts` - Full-text search endpoint (Orama-powered)
- `src/app/llms-full.txt/route.ts` - LLM-friendly text dump of all docs
- `src/app/og/docs/[...slug]/route.tsx` - Open Graph image generation

### Content Organization

Documentation in `/content/docs` uses:
- MDX files with `title` and `description` frontmatter
- `meta.json` files to define page ordering within folders
- Folder names in parentheses (e.g., `(quickstart)`) create collapsible groups

### Path Aliases

- `@/.source` → `./.source/index.ts` (generated content)
- `@/*` → `./src/*`
