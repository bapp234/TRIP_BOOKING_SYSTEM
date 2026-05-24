# AI Task Execution Template

## Context Loading

Before starting ANY implementation, carefully read and understand the following project context files:

```text id="yd8cb8"
.ai/context/project-context.md
.ai/context/frontend-architecture.md
.ai/context/backend-architecture.md
.ai/memory/project-memory.md
.ai/rules/global-rules.md
.ai/rules/anti-patterns.md
.ai/rules/naming-conventions.md
.ai/rules/folder-conventions.md
.ai/rules/definition-of-done.md
```

These files are considered the authoritative source of:

* architecture decisions
* coding standards
* dependency rules
* folder structure conventions
* system boundaries
* development philosophy

All generated code MUST comply with these documents.

---

# Task

```text id="rqg6pk"
{{TASK}}
```

---

# Requirements

```text id="qbb5bg"
{{REQUIREMENTS}}
```

---

# Mandatory Architectural Constraints

## General Constraints

* preserve existing architecture consistency
* avoid unrelated modifications
* reuse existing modules before creating new ones
* maintain predictable folder structure
* avoid duplicated logic
* keep modules focused and modular

---

## Frontend Constraints

* strictly follow Feature-Sliced Design (FSD)
* preserve layer boundaries
* no upward imports
* no cross-layer violations
* no bypassing slice public APIs
* no business logic inside UI components
* use absolute imports only
* use barrel exports (`index.js`)
* keep shared layer fully generic

---

## Backend Constraints

* follow layered architecture strictly
* controllers must remain thin
* business logic belongs only inside services
* repositories handle database access only
* validate all request inputs
* use centralized error handling
* no direct database access outside repositories

---

## Infrastructure Constraints

* Docker-first workflow required
* environment variables required
* no hardcoded secrets
* services must remain container-compatible

---

# Forbidden Patterns

STRICTLY FORBIDDEN:

* giant React components
* deeply nested business logic inside UI
* API calls directly inside presentation components
* duplicated business logic
* circular dependencies
* deep relative imports like `../../../`
* hardcoded API URLs
* hardcoded secrets
* introducing unnecessary libraries
* modifying unrelated files
* bypassing public APIs
* bypassing service layer
* tightly coupled modules
* random folder creation
* mixing responsibilities between layers

---

# Implementation Requirements

Before generating code:

1. Analyze the current project structure.
2. Identify reusable existing modules.
3. Preserve naming conventions.
4. Preserve architectural boundaries.
5. Avoid unnecessary abstractions.
6. Keep generated code production-oriented.

---

# Expected Output Format

The response should follow this structure:

## 1. Architecture Analysis

Explain:

* affected layers
* architectural decisions
* dependency flow
* why the implementation fits project rules

---

## 2. Planned File Structure

Show:

* created files
* modified files
* folder placement

Example:

```text id="jlwm6w"
src/features/search-trip/
├── ui/
├── model/
├── api/
└── index.js
```

---

## 3. Implementation

Generate:

* clean modular code
* reusable logic
* production-oriented structure

---

## 4. Validation Checklist

Confirm:

* FSD preserved
* no cross-layer imports
* no duplicated logic
* reusable structure maintained
* architecture rules respected

---

# Definition of Done

The task is considered complete ONLY IF:

* architecture rules are respected
* imports follow dependency boundaries
* no duplicated logic exists
* modules expose proper public APIs
* loading/error states are handled
* code remains modular and maintainable
* unrelated files remain untouched
* implementation is scalable and reusable

---

# AI Agent Behavioral Expectations

The AI agent must behave like a senior software engineer working inside an enterprise team.

The agent should:

* prioritize maintainability over shortcuts
* prioritize architecture consistency over speed
* think modularly
* avoid overengineering
* avoid generating random code structures
* generate code that scales long-term

The generated implementation should feel intentional, predictable, and production-ready.
