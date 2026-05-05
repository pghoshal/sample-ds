# Atlas Enterprise Design System Sample

This repository is a complete sample source repo for `design-system-mcp`.

![Atlas visual preview](docs/visual-preview.png)

It intentionally exercises every major ingestion path:

- `manifest.json` with explicit content types and relations
- DTCG token JSON under `tokens/*.tokens.json`
- community Markdown / `getdesign.md` token frontmatter
- principles, patterns, conventions, and voice guidance
- component metadata under `components/*/component.json`
- TypeScript prop extraction from `*.tsx`
- Storybook CSF example extraction from `*.stories.tsx`
- MCP prompt templates under `prompts/*.prompt.md`
- regex and AST-backed validation rules under `rules/*.json`

The sample is fictional. It models a B2B analytics console with dense data, cautious actions, and high accessibility expectations.

## Expected MCP Flow

1. Call `start_workflow` and keep the returned `workflowSessionId`.
2. Read `design://workflow` or call `describe_schema`, passing `workflowSessionId` to every MCP tool.
3. Run `inspect_coverage` with the `enterprise` profile.
4. Use `search_design_system`, `list_entities`, `get_entity`, and `get_related` to load relevant patterns, principles, conventions, voice, and relations.
5. Use `recommend_composition` for a UI intent such as `Create a billing risk review page`.
6. Use `explain_decision` for selected patterns, components, and token families.
7. Use `get_usage` for selected components.
8. Use `get_component_source` for every component class before generating imports or markup.
9. Resolve every required token with `resolve_token`.
10. Validate the planned components with `validate_composition`.
11. Generate UI by importing existing components when a platform mapping exists. For plain HTML, use explicit `html-adapter` evidence and mirror canonical source/usage structure.
12. Run `validate_ui`, repair deterministic issues, and validate again.
13. Run `validate_design_contract` with workflow, component-source, token-resolution, and decision evidence.

Final handoff evidence must include `workflowEvidence.workflowSessionId` and `workflowEvidence.toolResults[]` entries with the current bundle version and tool-returned `sha256:` hashes. The MCP validator checks the server-side audit trail for source, usage, token, and decision tools, so final review cannot pass from claimed tool usage alone.

## Good Test Intent

```text
Build a responsive billing risk review page for finance operators.
It should show account health, invoice risk, a search field, a warning alert,
and a destructive suspend-account confirmation path.
```

This intent should involve:

- `pattern:billing-risk-review`
- `pattern:risk-dashboard`
- `pattern:destructive-confirmation`
- `component:theme-provider`
- `component:card`
- `component:button`
- `component:text-field`
- `component:alert`
- `component:modal`
- `component:data-table`
- `component:chart`
- `component:badge`
- semantic color, spacing, typography, radius, and shadow tokens
- multi-theme, density, state, data-viz, motion, elevation, layer, breakpoint, and platform tokens
- platform mappings for web, iOS, Android, React Native, and Flutter

## Negative Validation Ideas

Use these snippets to confirm that MCP validation catches drift:

```tsx
<Button variant="ghost">Submit</Button>
```

Expected:

- invalid AST prop value from `rules/no-button-ghost-variant.json`
- copy warning from built-in vague action label checks

```tsx
<section style={{ color: "#185ADB", padding: "24px" }}>
  <img src="/risk.png" />
</section>
```

Expected:

- raw color violation
- raw length violation
- missing image alt violation

For destructive modal semantics, use `validate_composition` with `pattern:destructive-confirmation`; the pattern contract requires `role: "alertdialog"` only in that context.
