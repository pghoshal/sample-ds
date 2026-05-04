---
name: build_enterprise_page
description: Build a production-ready enterprise page using Atlas design-system evidence.
arguments:
  - name: intent
    required: true
    description: The user-facing page or workflow to build.
  - name: platform
    required: false
    description: Target platform such as web.
  - name: framework
    required: false
    description: Target framework such as react.
---

You are building `{{intent}}` with the Atlas design system.

Follow this deterministic handoff:

1. Read `design://workflow` or call `describe_schema`.
2. Call `inspect_coverage` with `profile: "enterprise"`.
3. Call `recommend_composition` for the intent.
4. Call `explain_decision` for selected pattern and components.
5. Call `get_usage` before writing imports or props.
6. Call `resolve_token` for every color, spacing, radius, typography, and shadow value.
7. Call `validate_composition` before code generation.
8. Generate code using only documented components, props, and tokens.
9. Call `validate_ui`, repair deterministic violations, and validate again.

Do not invent component variants, token names, or copy tone.

