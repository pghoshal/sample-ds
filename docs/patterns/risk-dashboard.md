---
id: pattern:risk-dashboard
type: pattern
title: Enterprise risk dashboard
summary: Multi-theme dashboard pattern for dense risk analytics, records, and governed actions.
tags: [pattern, dashboard, analytics, data-viz, enterprise, theme, density]
related:
  - component:theme-provider
  - component:text-field
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
    - component:text-field
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
    - token:theme.light.color.surface.raised
    - token:theme.light.color.surface.muted
    - token:theme.light.color.surface.warning
    - token:theme.light.color.surface.danger
    - token:theme.light.color.text.primary
    - token:theme.light.color.text.secondary
    - token:theme.light.color.text.inverse
    - token:theme.light.color.action.primary
    - token:theme.light.color.action.danger
    - token:theme.light.state.action.primary.focusRing
    - token:theme.light.dataviz.risk.high
    - token:theme.light.dataviz.axis
    - token:theme.dark.color.surface.canvas
    - token:theme.dark.color.surface.raised
    - token:theme.dark.color.surface.muted
    - token:theme.dark.color.surface.warning
    - token:theme.dark.color.surface.danger
    - token:theme.dark.color.text.primary
    - token:theme.dark.color.text.secondary
    - token:theme.dark.color.text.inverse
    - token:theme.dark.color.action.primary
    - token:theme.dark.color.action.danger
    - token:theme.dark.state.action.primary.focusRing
    - token:theme.dark.dataviz.risk.high
    - token:theme.dark.dataviz.axis
    - token:theme.highContrast.color.surface.canvas
    - token:theme.highContrast.color.surface.raised
    - token:theme.highContrast.color.surface.muted
    - token:theme.highContrast.color.surface.warning
    - token:theme.highContrast.color.surface.danger
    - token:theme.highContrast.color.text.primary
    - token:theme.highContrast.color.text.secondary
    - token:theme.highContrast.color.text.inverse
    - token:theme.highContrast.color.action.primary
    - token:theme.highContrast.color.action.danger
    - token:theme.highContrast.state.action.primary.focusRing
    - token:theme.highContrast.dataviz.risk.high
    - token:theme.highContrast.dataviz.axis
    - token:density.compact.control.height
    - token:density.comfortable.card.padding
    - token:dataviz.risk.high
    - token:dataviz.axis
    - token:motion.duration.normal
    - token:elevation.card
    - token:layer.sticky
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
    - platform: react-native
      framework: react-native
      requiredComponents:
        - component:theme-provider
        - component:data-table
      forbiddenComponents:
        - component:legacy-button
      requiredTokens:
        - token:platform.reactNative.font.body
        - token:platform.reactNative.radius.control
        - token:platform.reactNative.motion.normal
    - platform: flutter
      framework: flutter
      requiredComponents:
        - component:theme-provider
        - component:data-table
      forbiddenComponents:
        - component:legacy-button
      requiredTokens:
        - token:platform.flutter.font.body
        - token:platform.flutter.radius.control
        - token:platform.flutter.motion.normal
  slots:
    - name: app-boundary
      required: true
      component: component:theme-provider
      description: Provides theme and density context.
    - name: search-filter
      required: true
      component: component:text-field
      description: Search or filter field for enterprise risk records.
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
