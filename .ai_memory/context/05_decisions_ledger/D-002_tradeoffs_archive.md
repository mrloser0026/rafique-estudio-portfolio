---
id: D-002
title: Tradeoffs Archive
tags: [decisions, tradeoffs]
links: [D-001]
importance: 6
status: confirmed
version: 1.0.0
updated: 2026-10-03
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
