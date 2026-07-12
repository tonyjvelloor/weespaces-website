# Search Console Automation Loop

This playbook outlines the monthly process for extracting Search Console data, identifying "striking distance" keywords, and updating the WeeSpaces knowledge base and city pages to improve rankings.

## The Strategy: "Striking Distance" Optimization
Keywords ranking between positions 8 and 20 are on page 2 or the bottom of page 1. These pages already have some authority for the term. A slight optimization in content depth, semantic relevance, or internal linking can push them into the top 3 spots, yielding a massive increase in CTR and traffic.

## Step 1: Export Search Console Data
1. Open Google Search Console -> Performance -> Search Results.
2. Set Date Range: Last 28 Days.
3. Export to Google Sheets or CSV.

## Step 2: Filter the Data
Filter the exported data using the following criteria:
- **Position**: `>= 8` and `<= 20` (Striking Distance).
- **Impressions**: `> 100` (Ensure there is actual search volume).
- **Query**: Look for commercial intent modifiers (e.g., "cost", "vs", "gst", "kochi", "coimbatore").

## Step 3: Generate Optimization Tasks
For each URL/Query pair identified in Step 2, generate an optimization task:

1. **Semantic Enrichment**: Does the target page explicitly mention the exact query? If not, weave it naturally into an H2/H3 or body paragraph.
2. **FAQ Expansion**: Is the query phrased as a question (e.g., "how much is coworking in kochi")? Add it to the page's `<SEOFAQ>` component.
3. **Internal Linking**: Find 2-3 other highly authoritative pages on the site (e.g., the homepage or the `/virtual-office` pillar page) and add an exact-match anchor text link pointing to the target URL.

## Step 4: Execution (Content Updates)
- Update the relevant `.ts` data files (e.g., `src/data/locations.ts`, `src/data/faqs.ts`, `src/data/virtualOfficeArticles.ts`).
- Update the markdown files in `content/blog/`.

## Step 5: Re-Index
- Push code to production.
- Go back to Google Search Console -> URL Inspection Tool.
- Paste the optimized URL and click "Request Indexing".

---
*Future Automation: This process can be fully automated using the Google Search Console API and a Node.js script to automatically generate GitHub Issues or update a Google Sheet with recommended tasks.*
