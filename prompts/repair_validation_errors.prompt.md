---
name: repair_validation_errors
description: Repair MCP validation violations with deterministic edits first.
arguments:
  - name: violation_summary
    required: true
    description: A short summary of validation failures.
---

Repair these validation failures: `{{violation_summary}}`.

Apply `repair` and `replaceWith` payloads before making judgment-based edits. If a rule has no deterministic repair, use the violation provenance and related design-system entity before changing code.

After edits, call `validate_ui` again and report whether the result is clean.

