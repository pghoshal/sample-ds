---
id: pattern:destructive-confirmation
type: pattern
title: Destructive confirmation
summary: Confirmation pattern for irreversible or high-risk account actions.
tags: [pattern, modal, destructive, confirmation]
related:
  - component:modal
  - component:alert
  - component:button
  - principle:clarity
contract:
  requiredComponents:
    - component:modal
    - component:alert
    - component:button
  forbiddenComponents:
    - component:legacy-button
  requiredTokens:
    - token:color.action.danger
    - token:color.surface.danger
    - token:color.text.danger
  requiredPrinciples:
    - principle:clarity
    - principle:accessibility-first
  componentOrder:
    - component:modal
    - component:alert
    - component:button
  propRequirements:
    - component: component:button
      prop: variant
      equals: danger
      severity: error
      message: The destructive confirm action must use the danger button variant.
    - component: component:modal
      prop: role
      equals: alertdialog
      severity: error
      message: Destructive confirmation modals must use alertdialog semantics.
  parentChildRules:
    - parent: component:modal
      child: component:alert
      relationship: required
      severity: error
      message: A destructive modal must include an alert explaining consequence.
  slots:
    - name: confirm-action
      required: true
      component: component:button
      description: Final irreversible action.
  constraints:
    - id: name-object-and-consequence
      severity: error
      message: Confirmation copy must name the object and consequence.
---

# Destructive confirmation

Use this pattern before an irreversible operation such as suspending an account or deleting a billing rule.

## Do

- Name the account, invoice, rule, or object being changed.
- Explain the consequence in one sentence.
- Use `component:button` with `variant="danger"` for the final action.

## Do not

- Do not say only "Are you sure?"
- Do not use vague final action labels.
- Do not make the cancel action look stronger than the destructive action.

