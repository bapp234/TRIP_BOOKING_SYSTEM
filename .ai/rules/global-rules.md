# Global AI Rules

## Purpose

This document defines the global behavioral rules, architectural constraints, and engineering standards that ALL AI agents and developers must follow when working on this project.

These rules are mandatory and exist to:

* preserve architectural consistency
* prevent technical debt
* maintain scalability
* improve maintainability
* ensure predictable code generation
* protect long-term project quality

All generated code must comply with these rules unless explicitly overridden by project maintainers.

---

# 1. Core Engineering Philosophy

The project prioritizes:

* architecture-first development
* maintainability over shortcuts
* scalability over temporary convenience
* modularity over monolithic implementations
* reusable systems over duplicated logic
* consistency over personal coding style

The AI agent must behave like:

* a senior software engineer
* a long-term maintainer
* an architecture-aware developer

NOT like:

* a random code generator
* an autocomplete tool
* a rapid prototype generator

---

# 2. Mandatory Pre-Implementation Rules

Before generating ANY code:

## Analyze Existing Structure

* inspect the current project structure
* identify architectural patterns already in use
* preserve consistency with existing modules
* avoid introducing conflicting structures

---

## Reuse Existing Logic First

Before creating new:

* components
* hooks
* services
* utilities
* stores
* validators

the AI must check whether reusable implementations already exist.

Avoid:

* duplicated abstractions
* parallel implementations
* redundant utilities

---

## Preserve Architectural Boundaries

The AI must:

* respect dependency flow
* preserve layer separation
* avoid architectural violations
* follow project conventions strictly

---

## Minimize Unrelated Changes

STRICT RULE:

* modify ONLY files related to the task
* avoid random refactors
* avoid unnecessary formatting changes
* avoid touching unrelated modules

---

# 3. General Code Quality Rules

## Keep Files Small and Modular

Rules:

* keep modules focused
* separate responsibilities clearly
* avoid oversized files
* extract reusable logic

Preferred:

```text id="m51u5m"
small composable modules
```

Avoid:

```text id="y0lzwo"
giant multipurpose files
```

---

## Avoid Duplicated Code

STRICTLY FORBIDDEN:

* duplicated business logic
* duplicated API calls
* duplicated validation
* duplicated UI patterns

Preferred:

* reusable abstractions
* shared utilities
* reusable hooks/components

---

## Prefer Reusable Systems

The AI should prioritize:

* reusable UI primitives
* reusable business modules
* reusable utilities
* scalable abstractions

Avoid:

* one-off implementations
* hardcoded behavior
* tightly coupled solutions

---

## Avoid Hardcoded Values

DO NOT hardcode:

* API URLs
* business constants
* configuration values
* environment-specific values
* secrets

Required:

* constants/
* config files
* environment variables

---

## Use Environment Variables

All environment-specific configuration must use:

```env id="e9qfch"
.env
```

Examples:

```env id="jlwm9w"
VITE_API_URL=
DATABASE_URL=
JWT_SECRET=
```

STRICTLY FORBIDDEN:

* secrets inside source code
* hardcoded credentials
* inline API endpoints

---

## Use Barrel Exports

Every reusable module/slice should expose:

```text id="9jz4mc"
index.js
```

Purpose:

* preserve encapsulation
* simplify imports
* reduce coupling

Correct:

```js id="k8i5gd"
import { Button } from '@/shared/ui'
```

Forbidden:

```js id="rqqcvv"
import Button from '@/shared/ui/button/Button'
```

---

# 4. Frontend Rules

## Strict FSD Compliance

Frontend architecture MUST follow Feature-Sliced Design.

Layer flow:

```text id="jlwmat"
app
↓
pages
↓
widgets
↓
features
↓
entities
↓
shared
```

STRICT RULES:

* no upward imports
* no layer violations
* no bypassing public APIs
* no cross-layer architecture leaks

---

## Use Functional React Components Only

Required:

* functional components
* hooks-based architecture

Forbidden:

* class components

Preferred:

```js id="i5qh8d"
const TripCard = () => {}
```

---

## Keep Business Logic Outside UI

STRICTLY FORBIDDEN:

* API logic inside JSX
* booking workflows inside components
* validation inside pages
* business orchestration inside UI

Correct flow:

```text id="jlwmcj"
ui → model/store/service → api
```

---

## Zustand Rules

Use Zustand ONLY for:

* shared client state
* persistent UI state
* cross-feature state

Avoid:

* giant global stores
* unnecessary global state

Prefer:

* feature-scoped stores
* local component state when possible

---

## UI Composition Rules

Preferred:

* reusable composition
* isolated components
* modular UI systems

Avoid:

* giant pages
* duplicated layouts
* tightly coupled UI

---

## Import Rules

Required:

```js id="jlwmdo"
@/shared/ui
```

Forbidden:

```js id="jlwmep"
../../../shared/ui
```

Use:

* absolute imports
* public APIs only

---

# 5. Backend Rules

## Layered Architecture Required

Backend must follow:

```text id="jlwmfq"
routes
↓
controllers
↓
services
↓
repositories
↓
database
```

STRICTLY FORBIDDEN:

* skipping layers
* direct database access from controllers
* business logic inside routes

---

## Controllers Must Remain Thin

Controllers should ONLY:

* receive requests
* extract data
* call services
* return responses

Controllers must NOT:

* contain business workflows
* query databases directly
* contain heavy conditional logic

---

## Services Contain Business Logic

Services are responsible for:

* business rules
* orchestration
* transactional logic
* domain workflows

Services should remain:

* reusable
* modular
* framework-independent when possible

---

## Repository Pattern Required

Repositories handle:

* database access
* Prisma queries
* persistence logic

Repositories must NOT:

* contain business rules
* contain HTTP logic

---

## Validate All Request Input

STRICT REQUIREMENT:

* validate every request
* sanitize payloads
* reject invalid data early

Validation should cover:

* body
* params
* query
* headers when needed

---

## Async Error Handling

Required:

* centralized error middleware
* async wrappers
* consistent error responses

Avoid:

* duplicated try/catch logic
* scattered error handling

---

# 6. Infrastructure Rules

## Docker-First Workflow

The project must remain:

* container-compatible
* reproducible
* environment-independent

All services must work using:

```text id="jlwmg9"
docker-compose
```

Avoid:

* machine-specific assumptions
* local-only workflows

---

## Environment-Based Configuration

All environments must use:

* centralized configuration
* environment variables
* isolated runtime settings

STRICTLY FORBIDDEN:

* hardcoded ports
* hardcoded database credentials
* inline infrastructure configuration

---

# 7. AI Behavioral Constraints

The AI agent must:

* think before generating code
* preserve architecture consistency
* generate production-oriented solutions
* avoid overengineering
* prefer maintainable solutions
* explain architectural decisions when necessary

The AI agent must NOT:

* introduce random abstractions
* rewrite unrelated code
* create inconsistent folder structures
* violate dependency rules
* generate prototype-level architecture

---

# 8. Scalability Rules

All generated implementations should support:

* future extensibility
* modular growth
* feature isolation
* reusable systems

The AI should avoid decisions that:

* block future scaling
* tightly couple domains
* create architectural rigidity

---

# 9. Security Rules

STRICT REQUIREMENTS:

* validate all user input
* sanitize request data
* protect sensitive routes
* avoid exposing internal errors
* never expose secrets publicly

Forbidden:

* hardcoded secrets
* trusting client payloads blindly
* leaking database/internal errors

---

# 10. Final Principle

Every generated file should:

* feel intentional
* follow project architecture
* remain modular
* remain scalable
* remain maintainable

# Agent Tooling & Code Generation Behaviors

STRICT RULES FOR MODIFYING EXISTING FILES:
1. NO DESTRUCTIVE OVERWRITES: If modifying an existing file, DO NOT output the entire file just to change a few lines.
2. USE PLACEHOLDERS: Use comments like `// ... existing code ...` to represent parts of the file that remain unchanged. Only output the exact functions or blocks you are modifying.
3. PRESERVE IMPORTS: Never remove existing imports unless they are explicitly no longer used due to your specific change.
4. TARGETED EDITS: Identify the exact line or block to change, explain what you will do briefly, then output ONLY that updated block.

The codebase should evolve like an enterprise-grade system, not a collection of disconnected implementations.
