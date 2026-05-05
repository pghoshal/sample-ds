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

- Confirm `design://workflow` or `describe_schema` was read for the current bundle version.
- Confirm `start_workflow` was called and the same `workflowSessionId` was passed to each MCP tool call.
- Confirm `inspect_coverage`, `search_design_system`, `list_entities`, `get_entity`, `get_related`, `recommend_composition`, `get_usage`, `get_component_source`, `resolve_token`, and `explain_decision` evidence exists.
- Validate component choices against the recommended pattern.
- Verify each component prop against `get_usage`.
- Verify each rendered/imported component against `get_component_source`.
- If output is static HTML, verify `html-adapter` mode has a rationale and mirrors canonical component structure.
- Verify every visual value came from `resolve_token`.
- Run `validate_ui`.
- Run `validate_design_contract` with workflow session, tool-result, component-source, token-resolution, and decision evidence, including the tool-returned `sha256:` hashes for source, usage, token, and decision evidence.
- Block final handoff on errors or warnings.
