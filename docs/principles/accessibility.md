---
id: principle:accessibility-first
type: principle
title: Accessibility first
summary: Every generated interface must be keyboard navigable, labeled, and readable.
tags: [principle, accessibility, validation]
---

# Accessibility first

Accessibility is part of design-system consistency. Generated UI must include visible labels, accessible names, valid roles, and readable contrast.

## Accessibility

- Buttons must have visible text or an accessible name.
- Inputs must have labels or `aria-label`.
- Images must have meaningful `alt` text unless decorative.
- Do not use positive `tabIndex` values.

