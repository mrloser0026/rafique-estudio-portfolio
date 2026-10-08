---
id: L-002
title: Mistakes and Regressions
tags: [learnings, mistakes]
links: []
importance: 10
status: confirmed
version: 1.0.0
updated: 2026-10-03
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
