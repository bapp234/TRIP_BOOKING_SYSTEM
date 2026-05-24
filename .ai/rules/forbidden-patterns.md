# Forbidden Patterns

## Purpose

This document defines architectural anti-patterns and implementation behaviors that are STRICTLY FORBIDDEN within the project.

These rules exist to:

* preserve long-term maintainability
* prevent architecture degradation
* reduce technical debt
* maintain predictable project structure
* protect scalability
* enforce clean dependency boundaries

AI agents and developers must treat these rules as mandatory constraints, not optional suggestions.

Violating these rules introduces architectural instability and reduces codebase quality.

---

# 1. Forbidden Frontend Patterns

## Giant React Components

DO NOT create oversized components containing:

* excessive JSX
* mixed responsibilities
* business logic
* API logic
* state management
* validation logic
* layout orchestration

Avoid:

```text id="k2x1zn"
1000-line page components
```

Preferred:

* small focused components
* separated concerns
* modular UI composition
* reusable subcomponents

Rules:

* components should ideally remain under 200 lines
* extract reusable logic into hooks/lib/model
* separate UI from orchestration logic

---

## Business Logic Inside UI Components

STRICTLY FORBIDDEN:

* heavy conditional logic inside JSX
* booking logic inside components
* payment logic inside components
* validation logic directly inside pages
* business workflows inside UI layers

Correct flow:

```text id="1n39pd"
UI → model/service → API
```

Forbidden:

```text id="u3k8ry"
UI component directly controlling business workflow
```

Purpose:

* maintain separation of concerns
* improve testability
* improve maintainability

---

## Direct API Calls Inside UI

DO NOT:

* call fetch directly inside JSX
* call axios directly inside presentation components
* embed API logic inside pages/widgets

Forbidden:

```js id="2d2k2m"
useEffect(() => {
  axios.get('/api/trips')
}, [])
```

Correct:

```text id="9ooh9z"
api/ → model/ → ui/
```

API communication must remain isolated inside:

* api/
* repositories
* service layers

---

## Deep Relative Imports

STRICTLY FORBIDDEN:

```js id="1u0d9v"
../../../shared/ui/Button
```

Required:

```js id="grv72l"
@/shared/ui
```

Reason:

* maintain readability
* improve refactoring safety
* preserve architectural clarity

---

## Cross-Layer Violations

DO NOT:

* import upward in FSD
* bypass dependency flow
* violate layer boundaries

Forbidden:

```text id="39it6p"
shared → features
entities → widgets
features → pages
```

Allowed:

```text id="i8t8uv"
pages → widgets → features → entities → shared
```

---

## Bypassing Public APIs

STRICTLY FORBIDDEN:

```js id="6d0eyf"
import TripCard from '@/entities/trip/ui/TripCard'
```

Required:

```js id="rtyyxb"
import { TripCard } from '@/entities/trip'
```

Reason:

* preserve encapsulation
* reduce tight coupling
* simplify refactoring

---

## Duplicated UI Patterns

DO NOT:

* recreate identical layouts repeatedly
* duplicate form structures
* duplicate modal implementations
* duplicate loading/error states

Prefer:

* reusable shared/ui primitives
* composition
* reusable widgets/features

---

# 2. Forbidden State Management Patterns

## Giant Global Stores

DO NOT:

* place all application state inside one Zustand store
* create monolithic global state containers

Avoid:

```text id="fg1oqr"
everythingStore.js
```

Preferred:

* feature-scoped stores
* isolated domain state
* local component state when possible

---

## Misusing Global State

DO NOT store:

* temporary modal state globally
* local form input state unnecessarily
* component-only UI state globally

Use:

* local component state
* feature-level stores
* scoped state management

---

# 3. Forbidden Backend Patterns

## Business Logic Inside Controllers

STRICTLY FORBIDDEN:

* pricing calculations inside controllers
* booking orchestration inside controllers
* validation workflows inside controllers

Controllers must:

* receive requests
* call services
* return responses

Correct flow:

```text id="r23z1q"
route → controller → service → repository
```

---

## Direct Database Access Outside Repositories

DO NOT:

* query Prisma inside controllers
* query database inside routes
* bypass repositories

Forbidden:

```js id="s2l5kp"
const trips = await prisma.trip.findMany()
```

Allowed:

```js id="msf66d"
tripRepository.findMany()
```

Reason:

* centralized data access
* maintainable architecture
* reusable database layer

---

## Scattered Validation Logic

DO NOT:

* validate payloads randomly across files
* duplicate validation rules
* mix validation into services

Required:

* centralized validators
* reusable schemas
* validation middleware

---

## Tightly Coupled Services

DO NOT:

* create services dependent on implementation details
* create hidden dependencies between modules

Preferred:

* modular services
* explicit dependencies
* isolated business domains

---

# 4. Forbidden Infrastructure Patterns

## Hardcoded Secrets

STRICTLY FORBIDDEN:

* API keys in source code
* passwords in repositories
* JWT secrets inside configs

Required:

```env id="8u5gdc"
DATABASE_URL=
JWT_SECRET=
```

---

## Hardcoded API URLs

DO NOT:

```js id="p8i0rt"
http://localhost:5000/api
```

Required:

* environment variables
* centralized configuration

---

## Local-Only Assumptions

DO NOT:

* assume local database installation
* assume environment-specific machine setup
* bypass Docker workflows

The project must remain:

* reproducible
* container-compatible
* environment-independent

---

# 5. Forbidden Architectural Behaviors

## Modifying Unrelated Files

STRICTLY FORBIDDEN:

* random refactors
* unrelated formatting changes
* touching files outside task scope

Before modifying any file:

* verify relevance
* minimize impact
* preserve stability

---

## Introducing Unnecessary Libraries

DO NOT:

* add libraries for trivial problems
* introduce overlapping dependencies
* replace established project standards

Before adding a dependency:

* verify necessity
* verify compatibility
* verify architectural value

Prefer:

* native solutions
* existing utilities
* current stack capabilities

---

## Random Folder Structures

DO NOT:

* invent inconsistent folders
* create ad-hoc architectures
* ignore project conventions

All new modules must:

* follow existing structure
* respect naming conventions
* preserve architectural consistency

---

## Circular Dependencies

STRICTLY FORBIDDEN:

* cyclic imports
* mutually dependent modules
* hidden dependency loops

Reason:

* unstable architecture
* unpredictable runtime behavior
* maintenance complexity

---

# 6. Forbidden Code Quality Patterns

## Magic Values

DO NOT:

* hardcode repeated values
* duplicate configuration values
* embed business constants inline

Preferred:

* constants/
* configs/
* environment variables

---

## Hidden Side Effects

DO NOT:

* mutate shared state unexpectedly
* create implicit behavior
* hide important logic inside utilities

Code should remain:

* explicit
* predictable
* traceable

---

## Overengineering

DO NOT:

* create unnecessary abstractions
* add premature optimization
* build systems for non-existent requirements

Preferred:

* simple scalable solutions
* incremental architecture
* practical modularity

---

# 7. AI Agent Behavioral Restrictions

AI agents working on this project must NOT:

* generate random architecture
* ignore dependency boundaries
* bypass project conventions
* introduce inconsistent patterns
* optimize prematurely
* rewrite unrelated modules
* create framework drift

The AI agent must behave like:

* a disciplined enterprise developer
* a long-term maintainer
* an architecture-aware engineer

NOT like:

* a random code generator

---

# 8. Final Principle

Every forbidden pattern in this document exists to protect:

* maintainability
* scalability
* architectural consistency
* developer experience
* long-term project health

When uncertainty exists, prioritize:

* simplicity
* modularity
* consistency
* clear boundaries
* maintainable architecture
