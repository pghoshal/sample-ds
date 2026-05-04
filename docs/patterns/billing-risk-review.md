---
id: pattern:billing-risk-review
type: pattern
title: Billing risk review
summary: Dashboard pattern for reviewing account health, invoice risk, and next actions.
tags: [pattern, dashboard, billing, risk, finance]
related:
  - component:card
  - component:text-field
  - component:alert
  - component:button
  - principle:clarity
contract:
  requiredComponents:
    - component:card
    - component:text-field
    - component:alert
    - component:button
  optionalComponents:
    - component:stack
    - component:modal
  forbiddenComponents:
    - component:legacy-button
  requiredTokens:
    - token:color.surface.canvas
    - token:color.surface.raised
    - token:color.text.primary
    - token:color.action.primary
  requiredPrinciples:
    - principle:clarity
    - principle:accessibility-first
  componentOrder:
    - component:text-field
    - component:card
    - component:alert
    - component:button
  propRequirements:
    - component: component:alert
      prop: tone
      oneOf: [warning, danger]
      severity: error
      message: Billing risk pages must surface risk with warning or danger alert tone.
    - component: component:button
      prop: variant
      oneOf: [primary, secondary, danger]
      severity: error
      message: Billing actions must use documented button variants only.
  platformRequirements:
    - platform: web
      framework: react
      requiredComponents:
        - component:card
      forbiddenComponents:
        - component:legacy-button
      requiredTokens:
        - token:component.card.padding
  slots:
    - name: search
      required: true
      component: component:text-field
      description: Account or invoice search field.
    - name: primary-action
      required: true
      component: component:button
      description: Main review action.
  constraints:
    - id: expose-account-state
      severity: error
      message: Billing risk review must expose account state before actions.
---

# Billing risk review

Use this pattern when finance or support operators need to review risk signals and act on an account.

## Do

- Start with a labeled search or filter field.
- Show account, invoice, and collection risk in separate `component:card` sections.
- Use `component:alert` when overdue invoices or suspension risk are present.
- Use `component:button` with action-specific labels such as `Review invoices` or `Suspend account`.

## Do not

- Do not use `component:legacy-button`.
- Do not bury risk state below the primary action.
- Do not invent tokens or variants.

