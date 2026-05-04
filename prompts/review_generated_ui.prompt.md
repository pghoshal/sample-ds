---
name: review_generated_ui
description: Review generated UI for design-system consistency before final handoff.
arguments:
  - name: code_language
    required: true
    description: Code language such as tsx, jsx, css, or html.
---

Review the generated `{{code_language}}` with Atlas design-system evidence.

Required checks:

- Validate component choices against the recommended pattern.
- Verify each component prop against `get_usage`.
- Verify every visual value came from `resolve_token`.
- Run `validate_ui`.
- Explain unresolved warnings and block final handoff on errors.

