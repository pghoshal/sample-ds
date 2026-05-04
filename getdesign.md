---
id: convention:community-handoff
type: convention
title: Community handoff compatibility
summary: A getdesign-style Markdown handoff with token frontmatter and prose guidance.
tags: [community, markdown, handoff, tokens]
colors:
  accent: "#185ADB"
  success: "#059669"
spacing:
  page: 48px
  panel: 24px
rounded:
  control: 8px
typography:
  dashboard-title:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: 28px
components:
  metric-card:
    backgroundColor: "{colors.accent}"
    textColor: "#ffffff"
related:
  - token:color.action.primary
  - component:card
---

# Community Handoff Compatibility

This root Markdown file simulates teams that publish their design system as a single `getdesign.md` file. The MCP server should load this file as a searchable convention entity and normalize the frontmatter tokens into deterministic token entities.

## Do

- Use semantic tokens such as `token:color.surface.raised` and `token:color.action.primary` in generated UI.
- Pair dense dashboards with clear headings and short supporting copy.
- Validate final UI with `validate_ui` before handing code back.

## Do not

- Do not use raw hex colors in application code.
- Do not invent button variants outside the component API.
- Do not use vague labels like Submit for critical financial actions.

