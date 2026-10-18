Nyatike Youth Connect — Agent Instructions
1. Mission

Modernize the existing Nyatike Youth Connect application into a polished, accessible, performant, reliable, and maintainable digital platform.

Repository: https://github.com/devcavin/nyatike-youth-connect

Deployment: https://nyatike-youth-connect.vercel.app/

This is an evolution of an existing product, not a greenfield rebuild. Preserve its recognizable identity, established functionality, working integrations, and appropriate architectural conventions.

The objective is product quality and meaningful user improvements, not the number of files changed or the sophistication of the architecture.

2. Required reading

Before making changes, read:

AGENTS.md
docs/modernization-charter.md
docs/modernization-audit.md, if it exists

Treat the charter as the durable product and engineering specification. Treat the audit as the evolving record of repository findings, approved decisions, and implementation progress.

Do not assume that a previous audit remains accurate after the code changes.

3. Non-negotiable rules
Preserve the product
Inspect the existing application before proposing architectural changes.
Preserve existing routes, user journeys, data flows, forms, integrations, and security boundaries unless a change is explicitly approved.
Do not invent features, opportunities, partnerships, testimonials, statistics, or organizational claims.
Do not substitute mock data for real production integrations.
Do not leave interactive controls that falsely imply functionality.
Verify uncertain behavior before changing it.
Preserve the brand
Establish the effective existing brand colors from source code, assets, and rendered UI.
Record semantic color tokens and identify duplicate declarations, overrides, and theme-specific values.
Preserve the existing brand palette unless the product owner authorizes a change.
Use accessible foreground/background combinations and contrast variants without silently redefining the brand.
If the brand identity cannot be established confidently, document the uncertainty and request clarification before making a permanent brand decision.
Respect the existing stack
Inspect the package manifest, lockfile, build configuration, routing, styling conventions, and component architecture first.
Prefer incremental improvements and existing dependencies.
Do not migrate frameworks, replace major dependencies, introduce new infrastructure, or adopt new state-management or UI libraries without a documented, material justification and approval.
Avoid unnecessary abstractions, speculative features, and broad formatting-only changes.
Protect repository integrity
Inspect git status and the current branch before editing.
Identify and preserve uncommitted user changes.
Never overwrite, discard, or revert work you did not create.
Do not expose secrets or commit credentials.
Do not commit, push, merge, or deploy without explicit authorization.
4. Mandatory execution sequence

Follow the sequence documented in docs/modernization-charter.md:

Audit: inspect the repository and establish the baseline.
Plan: document priorities, risks, dependencies, and acceptance criteria.
Approve: obtain approval for material product, brand, architectural, routing, dependency, or data-flow decisions.
Foundation: make the smallest useful design-system and reliability improvements.
Pilot: modernize the homepage and its shared dependencies.
Extend: apply the proven system to the remaining existing pages.
Verify: run relevant checks and inspect regressions.
Handover: document changes, test results, limitations, and next steps.
Initial stop condition

On the first pass, do not begin a broad implementation.

Inspect the source and configuration, run appropriate baseline checks where safe, and produce the initial audit and prioritized plan. Present these for review before broad refactoring.

Small, isolated corrections are permitted only when necessary to establish or repair the baseline. Explain the reason and scope first.

5. Evidence and prioritization

Distinguish between:

Verified source-code findings.
Behavior reproduced in a running application.
Results observed during testing.
Hypotheses requiring further investigation.
Decisions requiring product-owner input.

Never claim that a route works, a test passes, a deployment is healthy, an accessibility target is met, or performance has improved unless the relevant evidence exists.

Prioritize confirmed defects that block important user journeys before cosmetic refinements. Rank work by user impact, regression risk, implementation effort, and dependencies.

Do not expand scope simply because an improvement is technically interesting.

6. Implementation discipline
Make small, coherent, reviewable changes.
Preserve established naming and directory conventions where practical.
Keep business logic separate from presentation where that improves clarity.
Use semantic design tokens consistently.
Prefer accessible native HTML and predictable component interfaces.
Support responsive layouts, keyboard navigation, visible focus, and reduced-motion preferences.
Add tests where they protect important behavior and fit the existing tooling.
Update documentation when decisions or behavior change.

After each meaningful milestone, review the diff and run relevant checks.

If a required tool is unavailable, record the limitation and identify an alternative verification step.

7. Approval boundaries

Seek approval before:

Changing the established brand palette or identity.
Removing or substantially changing an existing route or capability.
Changing frameworks or major dependencies.
Introducing authentication, persistence, infrastructure, or external services.
Changing data contracts, integrations, or security boundaries.
Adding unverified organizational claims or product functionality.
Performing destructive operations or committing, pushing, merging, or deploying.

Use engineering judgment for reversible, low-risk changes within the approved scope. Do not request approval for every ordinary styling or implementation detail.

8. Required reporting

For every completed milestone, summarize:

What changed and why.
Which files or areas were affected.
Which user-visible behaviors changed.
Which commands and tests were actually executed and their results.
Known regressions, risks, and unresolved questions.
The next recommended step.

Maintain docs/modernization-audit.md as the source of truth for verified findings, decisions, implementation status, and remaining work.

If work spans multiple sessions, leave the repository in a coherent state and document the exact next step.

Do not claim completion while material acceptance criteria remain unverified.
