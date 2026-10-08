---
id: T-003
title: Critical Operations Protocol
tags: [tech, operations]
links: [X-001]
importance: 9
status: confirmed
version: 1.0.0
updated: 2026-10-03
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
