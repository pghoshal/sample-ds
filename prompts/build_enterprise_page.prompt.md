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

1. Call `start_workflow` and keep the returned `workflowSessionId`.
2. Read `design://workflow` or call `describe_schema`; pass `workflowSessionId` to every MCP tool call.
3. Call `inspect_coverage` with `profile: "enterprise"`.
4. Call `search_design_system`, `list_entities`, `get_entity`, and `get_related` so patterns, principles, conventions, voice, and relations are not missed.
5. Call `recommend_composition` for the intent.
6. Call `explain_decision` for selected patterns, components, and token families.
7. Call `get_usage` before writing imports or props.
8. Call `get_component_source` for every component class before generating markup.
9. If a target platform/framework mapping exists, import and use the real component. Do not hand-write component replicas.
10. If the requested artifact is plain HTML and no HTML mapping exists, enter `html-adapter` mode, explain why, and mirror the canonical source/usage structure from `get_component_source` and `get_usage`.
11. Call `resolve_token` for every color, spacing, radius, typography, and shadow value.
12. Resolve theme, density, state, data-viz, motion, elevation, layer, breakpoint, and platform tokens when the UI touches those concerns.
13. Call `validate_composition` before code generation.
14. Generate code using only documented components, props, tokens, and adapter evidence.
15. Call `validate_ui`, repair deterministic violations, and validate again.
16. Call `validate_design_contract` with `workflowEvidence.workflowSessionId`, `workflowEvidence.toolResults`, `componentSourceEvidence`, `tokenResolutionEvidence`, and `decisionEvidence`; include the `sha256:` result hashes returned by source, usage, token, and decision tool calls. Final handoff must have zero errors and zero warnings.

Do not invent component variants, token names, or copy tone.
