# Tooling Rules

## Purpose

This document defines how AI agents are allowed to interact with the codebase when creating, editing, refactoring, or deleting files.

These rules are especially important for autonomous coding agents such as:

* Cursor Agent
* Cline
* Roo
* Windsurf
* Copilot Workspace

The purpose is to:

* minimize destructive changes
* preserve architecture stability
* reduce unnecessary diffs
* avoid accidental project corruption
* improve incremental development workflows

These rules are mandatory.

---

# 1. File Modification Rules

## Modify Only What Is Necessary

STRICT RULE:

* modify only the minimal required code sections
* avoid touching unrelated logic
* avoid unnecessary formatting changes
* avoid rewriting entire files for small changes

Preferred:

```text id="1xv8ht"
small incremental edits
```

Avoid:

```text id="3p7v9m"
full file rewrites for tiny updates
```

---

## Preserve Existing Structure

When editing files:

* preserve folder structure
* preserve architectural boundaries
* preserve existing module organization
* preserve public APIs unless explicitly required

The AI must adapt to the project structure instead of replacing it.

---

## Preserve Existing Code Style

The AI must:

* follow existing formatting patterns
* preserve naming conventions
* preserve import ordering style
* preserve component structure style

Avoid:

* random formatting rewrites
* style inconsistency
* unnecessary lint-driven rewrites

---

# 2. Refactoring Rules

## Refactor Only When Necessary

DO NOT:

* perform large refactors without explicit request
* rewrite stable modules unnecessarily
* restructure unrelated architecture

Allowed:

* targeted refactors
* architecture-preserving improvements
* duplication reduction when directly related to the task

---

## Avoid Cascading Changes

The AI must avoid:

* chain refactors across many files
* unnecessary dependency updates
* project-wide rewrites

Preferred:

```text id="jlwmrz"
isolated and predictable modifications
```

---

# 3. File Creation Rules

## Reuse Before Creating

Before creating:

* components
* utilities
* services
* hooks
* stores
* validators

the AI must first check whether reusable implementations already exist.

Avoid:

* duplicate utilities
* parallel implementations
* redundant abstractions

---

## Respect Existing Folder Conventions

New files must:

* follow established architecture
* follow naming conventions
* follow FSD/layer rules
* remain predictable

DO NOT:

* invent random folders
* create inconsistent structures
* bypass layer boundaries

---

# 4. File Deletion Rules

STRICTLY FORBIDDEN:

* deleting files without explicit instruction
* replacing stable modules unnecessarily
* removing architecture layers
* deleting configs or infrastructure files casually

If deletion is necessary:

* explain why
* minimize impact
* preserve architecture consistency

---

# 5. Code Preservation Rules

When modifying existing files:

The AI must preserve:

* unrelated business logic
* unrelated imports
* comments that still remain relevant
* existing module boundaries

DO NOT:

* accidentally remove logic
* simplify away important architecture
* collapse modular structures

---

# 6. Dependency Management Rules

## Avoid Unnecessary Libraries

DO NOT:

* add libraries for trivial problems
* introduce overlapping dependencies
* replace established project standards

Before adding a dependency:

* verify necessity
* verify compatibility
* verify architectural value

Preferred:

* native platform APIs
* existing project utilities
* current stack capabilities

---

# 7. Diff Minimization Rules

The AI should optimize for:

* minimal diffs
* isolated changes
* readable commits
* predictable modifications

Preferred:

```text id="jlwmu4"
small targeted updates
```

Avoid:

```text id="jlwmub"
massive unrelated rewrites
```

---

# 8. Architecture Protection Rules

The AI must NEVER:

* violate FSD dependency rules
* bypass service layers
* introduce circular dependencies
* tightly couple modules
* mix business logic into UI
* place database logic into controllers

Architecture consistency is more important than speed.

---

# 9. Context Awareness Rules

Before editing code, the AI must:

* inspect surrounding modules
* understand local architecture
* identify reusable patterns
* preserve consistency with neighboring files

The AI should not generate isolated code that ignores the surrounding system.

---

# 10. Agent Behavioral Constraints

The AI agent must behave like:

* a careful maintainer
* a senior engineer
* a contributor inside a shared enterprise codebase

NOT like:

* a code generator creating isolated examples
* a prototype-focused assistant
* a destructive auto-refactoring tool

---

# 11. Forbidden Tooling Behaviors

STRICTLY FORBIDDEN:

* rewriting entire files unnecessarily
* deleting unrelated code
* reformatting the entire project
* generating random architecture
* creating giant diffs
* changing unrelated imports
* introducing inconsistent naming
* replacing existing stable implementations casually

---

# 12. Final Principle

The AI must prioritize:

* incremental evolution
* architecture preservation
* maintainability
* predictability
* minimal disruption

Every generated change should feel:

* intentional
* isolated
* production-oriented
* architecture-safe
