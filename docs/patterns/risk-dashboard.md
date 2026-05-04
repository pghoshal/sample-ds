---
id: pattern:risk-dashboard
type: pattern
title: Enterprise risk dashboard
summary: Multi-theme dashboard pattern for dense risk analytics, records, and governed actions.
tags: [pattern, dashboard, analytics, data-viz, enterprise, theme, density]
related:
  - component:theme-provider
  - component:data-table
  - component:chart
  - component:badge
  - component:card
  - component:button
  - principle:clarity
  - principle:accessibility-first
contract:
  requiredComponents:
    - component:theme-provider
    - component:data-table
    - component:chart
    - component:badge
    - component:card
    - component:button
  optionalComponents:
    - component:alert
    - component:stack
  forbiddenComponents:
    - component:legacy-button
  requiredTokens:
    - token:theme.light.color.surface.canvas
    - token:theme.dark.color.surface.canvas
    - token:theme.highContrast.color.surface.canvas
    - token:density.compact.control.height
    - token:density.comfortable.card.padding
    - token:dataviz.risk.high
    - token:dataviz.axis
    - token:motion.duration.normal
    - token:elevation.card
    - token:layer.sticky
    - token:platform.web.layout.pageMaxWidth
  requiredPrinciples:
    - principle:clarity
    - principle:accessibility-first
  componentOrder:
    - component:theme-provider
    - component:text-field
    - component:card
    - component:chart
    - component:data-table
    - component:button
  propRequirements:
    - component: component:theme-provider
      prop: theme
      oneOf: [light, dark, highContrast]
      severity: error
      message: Risk dashboards must declare an explicit supported theme.
    - component: component:theme-provider
      prop: density
      oneOf: [compact, comfortable]
      severity: error
      message: Risk dashboards must declare density so spacing is deterministic.
    - component: component:data-table
      prop: density
      equals: compact
      severity: error
      message: Risk record tables must use compact density.
    - component: component:chart
      prop: kind
      oneOf: [bar, line, donut]
      severity: error
      message: Charts must use documented visualization kinds.
    - component: component:badge
      prop: tone
      oneOf: [success, warning, danger]
      severity: error
      message: Risk badges must use semantic risk tones.
  platformRequirements:
    - platform: web
      framework: react
      requiredComponents:
        - component:theme-provider
        - component:data-table
      forbiddenComponents:
        - component:legacy-button
      requiredTokens:
        - token:platform.web.font.body
        - token:platform.web.layout.pageMaxWidth
        - token:breakpoint.md
  slots:
    - name: app-boundary
      required: true
      component: component:theme-provider
      description: Provides theme and density context.
    - name: trend-visualization
      required: true
      component: component:chart
      description: Shows risk trend with data-viz tokens.
    - name: records
      required: true
      component: component:data-table
      description: Shows sortable invoice or account records.
  constraints:
    - id: mode-explicit
      severity: error
      message: Theme and density must be explicit in the composition plan.
    - id: no-color-only-risk
      severity: error
      message: Risk state must use text plus semantic tone, not color alone.
---

# Enterprise risk dashboard

Use this pattern for a governed analytics page that combines status summaries, charts, dense records, and actions.

## Do

- Start with `component:theme-provider` so theme and density are explicit.
- Use `component:chart` only with `token:dataviz.*` colors.
- Use `component:data-table` with `density="compact"` for risk records.
- Use `component:badge` with visible risk text.
- Resolve `theme.*`, `density.*`, `dataviz.*`, `motion.*`, `elevation.*`, `layer.*`, and `platform.*` tokens before generating CSS.

## Do not

- Do not hard-code chart colors.
- Do not use primitive `color.blue.*` tokens directly in product UI.
- Do not omit chart summary text or table accessible labels.

