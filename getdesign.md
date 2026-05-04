---
id: convention:community-handoff
type: convention
title: Community handoff compatibility
summary: A getdesign-style Markdown handoff with token frontmatter and prose guidance.
tags: [community, markdown, handoff, tokens]
colors:
  community-primary-compat:
    value: "#185ADB"
    type: color
    description: Compatibility-only community alias. Prefer token:color.action.primary.
    deprecated: Use token:color.action.primary in enterprise UI.
    replacement: token:color.action.primary
  community-success-compat:
    value: "#059669"
    type: color
    description: Compatibility-only community alias. Prefer token:color.status.success.
    deprecated: Use token:color.status.success in enterprise UI.
    replacement: token:color.status.success
spacing:
  community-page-compat:
    value: 48px
    type: dimension
    description: Compatibility-only community spacing alias. Prefer token:space.12.
    deprecated: Use token:space.12 in enterprise UI.
    replacement: token:space.12
rounded:
  community-control-compat:
    value: 8px
    type: dimension
    description: Compatibility-only community radius alias. Prefer token:component.button.radius.
    deprecated: Use token:component.button.radius in enterprise UI.
    replacement: token:component.button.radius
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
