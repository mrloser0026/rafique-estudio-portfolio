const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, ".ai_memory");
const context = path.join(root, "context");

const dirs = [
  path.join(context, "_templates"),
  path.join(context, "01_foundation_knowledge"),
  path.join(context, "02_research_insights"),
  path.join(context, "03_risk_and_concerns"),
  path.join(context, "04_architecture_and_technical"),
  path.join(context, "05_decisions_ledger"),
  path.join(context, "06_learnings_observations"),
  path.join(context, "07_product_requirements_prd"),
];

// 1. Create directories
dirs.forEach((d) => {
  fs.mkdirSync(d, { recursive: true });
});

// 2. Templates
const neuronTemplate = `---
id: {NEURON_ID}
title: {TITLE}
tags: []
links: []
importance: 5
status: draft
version: 1.0.0
updated: ${new Date().toISOString().split("T")[0]}
supersedes: []
source: [internal]
---

**1. Core Statement**


**2. Details**


**3. Why it matters**


**4. Change Log**
`;
fs.writeFileSync(path.join(context, "_templates", "neuron.md"), neuronTemplate);

// 3. Foundation Knowledge
const k001 = `---
id: K-001
title: Core Project Identity
tags: [identity, foundation, rafique-estudio, rafique-estudio-portfolio]
links: [T-001, T-002]
importance: 10
status: confirmed
version: 1.0.0
updated: ${new Date().toISOString().split("T")[0]}
supersedes: []
source: [internal]
---

**1. Core Statement**
Rafique Estudio Portfolio is the official agency website for M. Jahanzaib Rafique, providing web development and AI automation services.

**2. Details**
- **Brand definition**: Rafique Estudio Portfolio
- **Core intent**: Showcase work, capture leads, and outline services (Shopify, SaaS, AI).
- **Core innovation**: High-performance Tanstack Start SSR application with dynamic Supabase content management.
- **Positioning — DO**: Premium, engineering-first web solutions.

**3. Why it matters**
It represents the founder's brand and is the primary lead generation tool.

**4. Change Log**
- Initialized memory layer.
`;
fs.writeFileSync(path.join(context, "01_foundation_knowledge", "K-001_core_identity.md"), k001);

const k002 = `---
id: K-002
title: Portfolio Context
tags: [foundation, domain]
links: []
importance: 8
status: confirmed
version: 1.0.0
updated: ${new Date().toISOString().split("T")[0]}
supersedes: []
source: [internal]
---

**1. Core Statement**
Targeting B2B clients looking for full-stack engineering and Shopify optimization.

**2. Details**
- **Target audience**: E-commerce brands, SaaS startups.
- **Reference data**: Built with Vite, Tanstack Start, React 19, Supabase.

**3. Why it matters**
Sets the baseline for features and integrations.

**4. Change Log**
- Initialized memory layer.
`;
fs.writeFileSync(path.join(context, "01_foundation_knowledge", "K-002_portfolio_context.md"), k002);

// 4. Research Insights
const r001 = `---
id: R-001
title: Client Psychology
tags: [research, users]
links: [K-002]
importance: 7
status: confirmed
version: 1.0.0
updated: ${new Date().toISOString().split("T")[0]}
supersedes: []
source: [internal]
---

**1. Core Statement**
Clients look for reliability, performance, and aesthetic excellence in engineering portfolios.

**2. Details**
- **Behavioral landscape**: Decision makers want to see past work quickly.
- **Design requirements**: High-end animations (motion-primitives), fast load times.

**3. Why it matters**
Guides UX/UI decisions on the portfolio.

**4. Change Log**
- Initialized memory layer.
`;
fs.writeFileSync(path.join(context, "02_research_insights", "R-001_client_psychology.md"), r001);

const r002 = `---
id: R-002
title: Competitive Landscape
tags: [research, competition]
links: [K-001]
importance: 6
status: confirmed
version: 1.0.0
updated: ${new Date().toISOString().split("T")[0]}
supersedes: []
source: [internal]
---

**1. Core Statement**
Stands out against generic agency templates via custom SSR and modern animations.

**2. Details**
- **Whitespace analysis**: Many portfolios lack backend integration; this has a full CMS.

**3. Why it matters**
Informs future features.

**4. Change Log**
- Initialized memory layer.
`;
fs.writeFileSync(
  path.join(context, "02_research_insights", "R-002_competitive_landscape.md"),
  r002,
);

// 5. Risks
const x001 = `---
id: X-001
title: Security and Privacy Risks
tags: [risk, security]
links: []
importance: 9
status: confirmed
version: 1.0.0
updated: ${new Date().toISOString().split("T")[0]}
supersedes: []
source: [internal]
---

**1. Core Statement**
Protecting Supabase credentials and preventing lead spam.

**2. Details**
- **Threat vectors**: 
  1. API key exposure.
  2. Bot spam on contact forms.

**3. Why it matters**
Data integrity and maintaining free tier limits on Supabase.

**4. Change Log**
- Initialized memory layer.
`;
fs.writeFileSync(path.join(context, "03_risk_and_concerns", "X-001_security_risks.md"), x001);

const x002 = `---
id: X-002
title: Compliance Risks
tags: [risk, compliance]
links: []
importance: 7
status: confirmed
version: 1.0.0
updated: ${new Date().toISOString().split("T")[0]}
supersedes: []
source: [internal]
---

**1. Core Statement**
Standard GDPR compliance for lead collection.

**2. Details**
- **Mandates**: Privacy policy required if collecting emails.

**3. Why it matters**
Legal safety.

**4. Change Log**
- Initialized memory layer.
`;
fs.writeFileSync(path.join(context, "03_risk_and_concerns", "X-002_compliance_risks.md"), x002);

// 6. Architecture & Tech
const t001 = `---
id: T-001
title: System Architecture
tags: [tech, architecture]
links: []
importance: 10
status: confirmed
version: 1.0.0
updated: ${new Date().toISOString().split("T")[0]}
supersedes: []
source: [internal]
---

**1. Core Statement**
Server-Side Rendered React application deployed on Vercel with a Supabase PostgreSQL backend.

**2. Details**
- **Frontend**: Vite + Tanstack Start + React 19 + Tailwind
- **Backend/API**: Tanstack Start server functions (Nitro)
- **DB**: Supabase (PostgreSQL)

**3. Why it matters**
Dictates deployment and development workflows.

**4. Change Log**
- Initialized memory layer.
`;
fs.writeFileSync(
  path.join(context, "04_architecture_and_technical", "T-001_system_architecture.md"),
  t001,
);

const t002 = `---
id: T-002
title: Core Features Matrix
tags: [tech, features]
links: [T-001]
importance: 8
status: confirmed
version: 1.0.0
updated: ${new Date().toISOString().split("T")[0]}
supersedes: []
source: [internal]
---

**1. Core Statement**
Matrix of primary portfolio capabilities.

**2. Details**
- Primary mode: Public visitor viewing projects (Day 1).
- Advanced mode: Admin CMS to update projects and sections (Day 1).

**3. Why it matters**
Scope containment.

**4. Change Log**
- Initialized memory layer.
`;
fs.writeFileSync(
  path.join(context, "04_architecture_and_technical", "T-002_core_features_matrix.md"),
  t002,
);

const t003 = `---
id: T-003
title: Critical Operations Protocol
tags: [tech, operations]
links: [X-001]
importance: 9
status: confirmed
version: 1.0.0
updated: ${new Date().toISOString().split("T")[0]}
supersedes: []
source: [internal]
---

**1. Core Statement**
Handling live production incidents.

**2. Details**
- **Tier 1 (Soft Halt)**: Revert Vercel deployment.
- **Tier 2 (DB Rollback)**: Restore Supabase backup.

**3. Why it matters**
Ensures fast recovery from breaking changes.

**4. Change Log**
- Initialized memory layer.
`;
fs.writeFileSync(
  path.join(context, "04_architecture_and_technical", "T-003_critical_protocol.md"),
  t003,
);

// 7. Decisions Ledger
const d001 = `---
id: D-001
title: Active Decisions
tags: [decisions, ledger]
links: []
importance: 10
status: confirmed
version: 1.0.0
updated: ${new Date().toISOString().split("T")[0]}
supersedes: []
source: [internal]
---

**1. Core Statement**
Record of canonical choices.

**2. Details**
| ID | Date | Decision | Rationale | Owner | Status |
|---|---|---|---|---|---|
| D-001-A | 2026-10-03 | Memory path = .ai_memory/context/ | Standardized memory layer | AI | Active |
| D-001-B | 2026-10-03 | Founder Name | Swapped Awan to Rafique globally via SSR intercept | User | Active |
| D-001-C | 2026-10-03 | Deployment Platform | Vercel | Easy integration with Tanstack Start | User | Active |
| D-001-D | 2026-10-03 | Database | Supabase | Native Postgres + REST API | User | Active |
| D-001-E | 2026-10-03 | Styling | Tailwind CSS | Utility-first speed | User | Active |
| D-001-F | 2026-10-03 | Animations | Framer Motion / UI | Smooth micro-interactions | User | Active |
| D-001-G | 2026-10-03 | Lead Capture | Direct to Supabase | No third-party deps | User | Active |
| D-001-H | 2026-10-03 | Env Var Sync | Custom node script (sync-env2.cjs) | Vercel CLI formatting issues in powershell | AI | Active |

**3. Why it matters**
Prevents revisiting closed arguments.

**4. Change Log**
- Initialized memory layer.
`;
fs.writeFileSync(path.join(context, "05_decisions_ledger", "D-001_active_decisions.md"), d001);

const d002 = `---
id: D-002
title: Tradeoffs Archive
tags: [decisions, tradeoffs]
links: [D-001]
importance: 6
status: confirmed
version: 1.0.0
updated: ${new Date().toISOString().split("T")[0]}
supersedes: []
source: [internal]
---

**1. Core Statement**
Record of rejected alternatives.

**2. Details**
- **Rejected**: Direct DB update for Awan -> Rafique. 
- **Rationale**: Lack of Service Role Key made RLS block the update. SSR intercept chosen instead.

**3. Why it matters**
Context for why non-obvious paths were taken.

**4. Change Log**
- Initialized memory layer.
`;
fs.writeFileSync(path.join(context, "05_decisions_ledger", "D-002_tradeoffs_archive.md"), d002);

// 8. Learnings
const l001 = `---
id: L-001
title: Telemetry and Feedback
tags: [learnings, feedback]
links: []
importance: 5
status: confirmed
version: 1.0.0
updated: ${new Date().toISOString().split("T")[0]}
supersedes: []
source: [internal]
---

**1. Core Statement**
Tracking KPIs and feedback.

**2. Details**
- **North-star**: Lead conversions.
- **Feedback log**: To be updated post-launch.

**3. Why it matters**
Continuous improvement.

**4. Change Log**
- Initialized memory layer.
`;
fs.writeFileSync(
  path.join(context, "06_learnings_observations", "L-001_telemetry_and_feedback.md"),
  l001,
);

const l002 = `---
id: L-002
title: Mistakes and Regressions
tags: [learnings, mistakes]
links: []
importance: 10
status: confirmed
version: 1.0.0
updated: ${new Date().toISOString().split("T")[0]}
supersedes: []
source: [internal]
---

**1. Core Statement**
Log of regressions and errors to prevent recurrence.

**2. Details**
- **Error**: Vercel env CLI adds literal quotes in powershell.
- **Resolution**: Use node child_process with stdin instead of echo.

**3. Why it matters**
Avoids repeating frustrating debugging sessions.

**4. Change Log**
- Initialized memory layer.
`;
fs.writeFileSync(
  path.join(context, "06_learnings_observations", "L-002_mistakes_and_regressions.md"),
  l002,
);

// 9. PRD Layer
const p001 = `---
id: P-001
title: Product Requirements Document
tags: [prd, scope]
links: []
importance: 9
status: confirmed
version: 1.0.0
updated: ${new Date().toISOString().split("T")[0]}
supersedes: []
source: [internal]
---

**1. Core Statement**
PRD for Rafique Estudio Portfolio.

**2. Details**
- **Epics**: 
  - Dynamic Homepage.
  - Case Studies (Projects).
  - Services Overview.
  - Admin CMS for content management.
- **User Roles**: Visitor, Admin.

**3. Why it matters**
Defines boundaries.

**4. Change Log**
- Initialized memory layer.
`;
fs.writeFileSync(
  path.join(context, "07_product_requirements_prd", "P-001_product_requirements_document.md"),
  p001,
);

const p002 = `---
id: P-002
title: Functional Specifications
tags: [prd, specs]
links: [P-001]
importance: 8
status: confirmed
version: 1.0.0
updated: ${new Date().toISOString().split("T")[0]}
supersedes: []
source: [internal]
---

**1. Core Statement**
Technical interaction pathways.

**2. Details**
- **Lead Capture**: form -> POST /api/submitLead -> Supabase.
- **SSR Fetching**: Tanstack Server Functions -> Supabase -> Hydrated UI.

**3. Why it matters**
Guarantees correct implementation.

**4. Change Log**
- Initialized memory layer.
`;
fs.writeFileSync(
  path.join(context, "07_product_requirements_prd", "P-002_functional_specifications.md"),
  p002,
);

const p003 = `---
id: P-003
title: Milestone Roadmap
tags: [prd, roadmap]
links: []
importance: 6
status: confirmed
version: 1.0.0
updated: ${new Date().toISOString().split("T")[0]}
supersedes: []
source: [internal]
---

**1. Core Statement**
Project timeline.

**2. Details**
- **Alpha**: Base UI (Done).
- **Beta**: CMS Integration (Done).
- **V1**: Live deployment on Vercel with correct branding (Done).

**3. Why it matters**
Progress tracking.

**4. Change Log**
- Initialized memory layer.
`;
fs.writeFileSync(
  path.join(context, "07_product_requirements_prd", "P-003_milestone_roadmap.md"),
  p003,
);

// 10. Memory Index README
const readme = `# Neural Memory Layer for Rafique Estudio

## Purpose
Master Neural Memory Layer for cross-IDE AI context.

## Neuron Registry

| ID | Title | Importance | Status |
|---|---|---|---|
| K-001 | Core Project Identity | 10 | confirmed |
| K-002 | Portfolio Context | 8 | confirmed |
| R-001 | Client Psychology | 7 | confirmed |
| R-002 | Competitive Landscape | 6 | confirmed |
| X-001 | Security Risks | 9 | confirmed |
| X-002 | Compliance Risks | 7 | confirmed |
| T-001 | System Architecture | 10 | confirmed |
| T-002 | Core Features Matrix | 8 | confirmed |
| T-003 | Critical Operations Protocol | 9 | confirmed |
| D-001 | Active Decisions | 10 | confirmed |
| D-002 | Tradeoffs Archive | 6 | confirmed |
| L-001 | Telemetry & Feedback | 5 | confirmed |
| L-002 | Mistakes & Regressions | 10 | confirmed |
| P-001 | PRD | 9 | confirmed |
| P-002 | Functional Specs | 8 | confirmed |
| P-003 | Milestone Roadmap | 6 | confirmed |

## Tag Index
- **foundation**: K-001, K-002
- **research**: R-001, R-002
- **risk**: X-001, X-002
- **tech**: T-001, T-002, T-003
- **decisions**: D-001, D-002
- **learnings**: L-001, L-002
- **prd**: P-001, P-002, P-003

## Knowledge Graph
\`\`\`mermaid
flowchart LR
README --> K-001
README --> D-001
P-001 --> P-002
T-001 --> T-002
L-002 -.->|links| T-003
\`\`\`

## Agent Startup Sequence
1. Read README.md
2. Consult K-001, D-001
3. Retrieve task-relevant neurons by tag.
`;
fs.writeFileSync(path.join(context, "README.md"), readme);

// 11. Cross-IDE Bridges
const rootDir = __dirname;

const cursorrules = `CRITICAL SYSTEM PROTOCOL: You must consult .ai_memory/context/README.md and read the error logs in .ai_memory/context/06_learnings_observations/L-002_mistakes_and_regressions.md before executing any codebase edits. If a file is modified, document changes and update associated memory neurons. If a bug or compiling error is encountered and resolved, append a new error tracking entry into L-002.

- Project identity: Rafique Estudio Portfolio
- Mandatory memory consult before project work
- Startup: read .ai_memory/context/README.md
- Non-negotiables: 
  - Do not expose Supabase keys.
  - Vercel env CLI must use stdin, not echo in powershell.
- Canonical path: .ai_memory/context/ only
`;
fs.writeFileSync(path.join(rootDir, ".cursorrules"), cursorrules);

fs.mkdirSync(path.join(rootDir, ".cursor", "rules"), { recursive: true });
const cursorMdc = `---
description: Rafique Estudio Neural Memory Layer — always-on context and update protocol
alwaysApply: true
---

- Before you work: startup sequence + Memory consulted: [IDs]
- Locked constraints: do not violate
- After you work: update checklist
- Canonical path: .ai_memory/context/ only
`;
fs.writeFileSync(path.join(rootDir, ".cursor", "rules", "rafique-estudio-memory.mdc"), cursorMdc);

fs.writeFileSync(path.join(rootDir, ".clauderules"), cursorrules);
fs.writeFileSync(path.join(rootDir, ".windsufrules"), cursorrules);

fs.mkdirSync(path.join(rootDir, ".github"), { recursive: true });
fs.writeFileSync(path.join(rootDir, ".github", "copilot-instructions.md"), cursorrules);

console.log("Successfully orchestrated AI Neural Memory Layer ecosystem.");
