# Project Memory

## 1. Purpose

This file stores persistent architectural decisions, technical constraints, development conventions, and important project-level agreements.

AI agents and developers must treat these decisions as authoritative unless explicitly changed later.

The purpose of this memory file is to:

* maintain architectural consistency
* avoid repetitive decision-making
* preserve long-term project direction
* reduce accidental architecture drift
* help AI agents understand historical decisions

This file acts as the long-term technical memory of the project.

---

# 2. Core Architecture Decisions

## Frontend Language Decision

Decision:

* frontend uses JavaScript ONLY
* TypeScript is intentionally excluded

Reason:

* faster iteration speed
* reduced setup complexity
* lower onboarding friction
* focus on architecture and scalability first

STRICT RULE:

* do not introduce TypeScript
* do not generate `.ts` or `.tsx` files

---

## Frontend Architecture Decision

Decision:

* frontend strictly follows Feature-Sliced Design (FSD)

Reason:

* scalable frontend architecture
* predictable dependency flow
* modular domain separation
* easier long-term maintenance

STRICT RULES:

* no cross-layer violations
* no upward imports
* no bypassing slice public APIs

Layer structure:

```text id="1pv3vj"
app
pages
widgets
features
entities
shared
```

---

## State Management Decision

Decision:

* Zustand is used instead of Redux

Reason:

* simpler mental model
* lower boilerplate
* better developer experience
* faster feature iteration

Rules:

* avoid giant global stores
* prefer feature-scoped stores
* local UI state should remain local when possible

---

## Styling Decision

Decision:

* TailwindCSS is the primary styling system

Reason:

* faster UI development
* consistent spacing system
* utility-first workflow
* easier responsive design

Rules:

* avoid inline styles when possible
* prefer reusable UI primitives
* maintain consistent spacing patterns

---

## Routing Decision

Decision:

* React Router is the routing solution

Reason:

* SPA architecture
* stable ecosystem
* scalable route management

Rules:

* routing belongs to app/router
* pages define route entry points

---

# 3. Backend Decisions

## Backend Framework Decision

Decision:

* ExpressJS is the backend framework

Reason:

* simplicity
* flexibility
* mature ecosystem
* modular architecture compatibility

---

## Backend Architecture Decision

Decision:

* backend follows layered architecture

Structure:

```text id="14v2c0"
routes
controllers
services
repositories
database
```

STRICT RULES:

* controllers remain thin
* services contain business logic
* repositories handle database access only

---

## Database Decision

Decision:

* PostgreSQL is the primary database

Reason:

* relational consistency
* transactional support
* scalability
* strong ecosystem

STRICT RULE:

* MongoDB is intentionally NOT used

---

## ORM Decision

Decision:

* Prisma ORM is required

Reason:

* schema consistency
* developer productivity
* type-safe query generation
* maintainable migrations

Rules:

* database access only through repositories
* avoid raw SQL unless absolutely necessary

---

# 4. Infrastructure Decisions

## Docker-First Workflow

Decision:

* Docker is mandatory

Reason:

* reproducible environments
* simplified onboarding
* environment consistency
* easier deployment workflow

STRICT RULES:

* services must work through docker-compose
* local machine dependencies should be minimized

---

## Monorepo Decision

Decision:

* project uses monorepo architecture

Structure:

```text id="t5cgrz"
frontend/
backend/
docs/
infrastructure/
.ai/
```

Reason:

* centralized management
* shared documentation
* easier dependency coordination
* unified development workflow

---

# 5. Development Philosophy

The project prioritizes:

* architecture-first development
* maintainability over shortcuts
* modular systems over quick hacks
* reusable components over duplicated logic
* consistency over personal coding style

All generated code should:

* follow established architecture
* respect dependency boundaries
* remain modular and reusable
* avoid tightly coupled implementations

---

# 6. Frontend Rules Memory

Persistent frontend rules:

* no business logic inside UI components
* shared layer must remain generic
* widgets compose features
* features contain business logic
* entities represent business domains
* pages orchestrate widgets

STRICTLY FORBIDDEN:

* relative imports like ../../../
* giant React components
* duplicated API logic
* bypassing public APIs

---

# 7. Backend Rules Memory

Persistent backend rules:

* no database access inside controllers
* no business logic inside routes
* validation required for all requests
* centralized error handling required
* services orchestrate business workflows

STRICTLY FORBIDDEN:

* scattered database logic
* duplicated validation
* tightly coupled services
* hardcoded secrets

---

# 8. API Conventions Memory

Persistent API decisions:

* RESTful API structure
* API versioning required

Example:

```text id="84gwqc"
/api/v1/auth
/api/v1/trips
/api/v1/bookings
```

Response format:

```json id="yhdvgo"
{
  "success": true,
  "message": "",
  "data": {}
}
```

Error format:

```json id="dkx16m"
{
  "success": false,
  "message": "",
  "error": {}
}
```

---

# 9. Import & Naming Conventions Memory

## Import Rules

* use absolute imports
* avoid deep relative imports
* import only through public APIs

Correct:

```js id="byts2o"
import { TripCard } from '@/entities/trip'
```

Forbidden:

```js id="nh0qv9"
import TripCard from '../../../entities/trip/ui/TripCard'
```

---

## Naming Rules

Components:

```text id="h4ujtc"
PascalCase
```

Hooks:

```text id="mf5dq8"
useSomething
```

Folders:

```text id="4v7yv0"
kebab-case
```

Utilities:

```text id="j52r6l"
camelCase
```

Constants:

```text id="9w5cwa"
UPPER_SNAKE_CASE
```

---

# 10. Scalability Decisions

The architecture must support future expansion for:

* payment gateways
* real-time systems
* analytics dashboards
* multilingual support
* mobile applications
* operator management systems

Current architecture should avoid decisions that block future scaling.

---

# 11. Current Non-Goals

The following are intentionally excluded for now:

* microservices
* websocket systems
* SSR
* distributed systems
* advanced caching infrastructure

Priority:

* stable modular monolith
* clean architecture
* fast development workflow

---

# 12. AI Agent Behavioral Rules

AI agents working on this project must:

* analyze existing structure first
* preserve architectural consistency
* avoid unrelated file modifications
* reuse existing modules before creating new ones
* explain architectural reasoning when appropriate

AI agents must NOT:

* introduce unnecessary libraries
* refactor unrelated modules
* violate FSD boundaries
* bypass service layers
* generate random folder structures

---

# 13. Long-Term Vision

This project is intended to evolve into a production-grade scalable transportation booking platform.

The codebase should progressively move toward:

* enterprise-level maintainability
* modular scalability
* reusable systems
* predictable architecture
* strong development conventions

Every architectural decision should support long-term project stability rather than short-term convenience.
