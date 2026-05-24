# Backend Architecture

## 1. Overview

This backend system is designed for a scalable bus ticket booking platform serving Vietnamese intercity transportation companies.

The backend follows a layered modular architecture focused on:

* scalability
* maintainability
* predictable code organization
* strict separation of concerns
* reusable business logic
* clean dependency flow

The system is designed as a modular monolith with clear domain boundaries and production-oriented development practices.

---

# 2. Tech Stack

## Core Stack

* Node.js
* ExpressJS
* PostgreSQL
* Prisma ORM

## Development Principles

* modular architecture
* layered separation
* Docker-first workflow
* environment-based configuration
* scalable API structure
* centralized error handling

---

# 3. Architecture Style

The backend follows a strict layered architecture.

```text id="8n8r55"
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

Each layer has a single responsibility and strict dependency boundaries.

---

# 4. Core Architectural Principles

The backend prioritizes:

* separation of concerns
* predictable request flow
* reusable business services
* centralized validation
* modular domains
* low coupling
* high cohesion

STRICT RULES:

* business logic must never exist inside controllers
* database access must only exist inside repositories
* request validation must happen before business logic
* services must remain framework-independent when possible

---

# 5. Folder Structure

```text id="48g28k"
/src
├── app/
├── routes/
├── controllers/
├── services/
├── repositories/
├── middlewares/
├── validators/
├── configs/
├── utils/
├── constants/
├── prisma/
├── modules/
├── errors/
└── shared/
```

---

# 6. Layer Responsibilities

## routes

Responsible for:

* API endpoint registration
* middleware composition
* request flow orchestration

Rules:

* routes should remain lightweight
* routes should not contain business logic
* routes only connect requests to controllers

Example:

```js id="vksrbo"
router.post('/login', validate(loginSchema), authController.login)
```

---

## controllers

Responsible for:

* handling HTTP requests
* extracting request data
* calling services
* returning responses

STRICT RULES:

* controllers must remain thin
* NO business logic inside controllers
* NO direct database access
* controllers should not contain complex conditions

Controllers should only:

* validate request flow
* call services
* map responses

Correct:

```text id="1q2jol"
request → controller → service → response
```

Forbidden:

```text id="8u7j3y"
controller directly querying database
```

---

## services

Responsible for:

* business logic
* domain rules
* orchestration
* transactional workflows

Examples:

* booking creation
* seat reservation
* authentication logic
* payment processing flow

Rules:

* services contain core business behavior
* services may call multiple repositories
* services should remain reusable and modular
* services should avoid HTTP-specific logic

Services are the heart of the application.

---

## repositories

Responsible for:

* database interaction
* Prisma queries
* data persistence
* query abstraction

STRICT RULES:

* repositories handle database access ONLY
* repositories must not contain business rules
* repositories should remain database-focused

Correct:

```text id="bjlwmr"
repository.findTripById()
```

Forbidden:

```text id="myjfq8"
repository deciding booking business rules
```

---

## middlewares

Responsible for:

* authentication
* authorization
* validation handling
* error handling
* request preprocessing

Examples:

* auth middleware
* role middleware
* validation middleware
* async error middleware

Rules:

* middlewares should remain reusable
* middlewares should not contain business logic

---

## validators

Responsible for:

* request validation
* input sanitization
* schema validation

Rules:

* validate all incoming data
* never trust client input
* validation must happen before controllers

Examples:

* login validation
* booking validation
* trip search validation

---

## configs

Responsible for:

* environment configuration
* database configuration
* app settings
* external service configuration

Rules:

* use environment variables only
* never hardcode secrets
* configuration must remain centralized

---

# 7. Modular Domain Structure

Large business domains should be organized into modules.

Example:

```text id="jlwm2h"
/src/modules
├── auth/
├── booking/
├── trips/
├── operators/
└── payments/
```

Each module may internally contain:

```text id="3ln9my"
- routes
- controllers
- services
- repositories
- validators
```

Purpose:

* isolate business domains
* improve maintainability
* reduce coupling

---

# 8. API Structure

## Versioning

All APIs must use versioning.

Example:

```text id="c4x7y6"
/api/v1/auth
/api/v1/trips
/api/v1/bookings
```

Purpose:

* future compatibility
* safer API evolution

---

## REST Principles

The API should follow RESTful conventions.

Examples:

```text id="r0p6g9"
GET    /api/v1/trips
POST   /api/v1/bookings
PATCH  /api/v1/bookings/:id
DELETE /api/v1/bookings/:id
```

---

# 9. Response Format Standards

## Success Response

```json id="2o0qg0"
{
  "success": true,
  "message": "Booking created successfully",
  "data": {}
}
```

---

## Error Response

```json id="ffj2q9"
{
  "success": false,
  "message": "Validation failed",
  "error": {}
}
```

Rules:

* responses must remain consistent
* avoid random response shapes
* always provide meaningful messages

---

# 10. Error Handling Rules

The application must use centralized error handling.

Rules:

* use global error middleware
* avoid duplicated try/catch blocks
* use async wrappers
* standardize error responses

Forbidden:

```text id="g3o1tr"
scattered error handling logic
```

---

# 11. Validation Rules

STRICT REQUIREMENTS:

* validate every request
* sanitize user input
* reject invalid payloads early
* never trust frontend validation alone

Validation should cover:

* body
* params
* query
* headers when needed

---

# 12. Authentication & Authorization

Authentication system responsibilities:

* JWT authentication
* role-based authorization
* protected routes
* token validation

Rules:

* auth logic belongs to services/middlewares
* never expose sensitive data
* passwords must be hashed

---

# 13. Database Rules

## Prisma ORM

Prisma is the single source of database access.

Rules:

* all database access must go through repositories
* avoid raw SQL unless necessary
* maintain schema consistency

---

## PostgreSQL

PostgreSQL is the primary database system.

The schema should support:

* scalability
* relational integrity
* transactional consistency

---

# 14. Environment Configuration Rules

Rules:

* use `.env` files
* never commit secrets
* configuration must remain centralized
* support development and production environments

Examples:

```env id="jlwm3z"
DATABASE_URL=
JWT_SECRET=
PORT=
NODE_ENV=
```

---

# 15. Logging & Monitoring Principles

The system should support:

* request logging
* error logging
* debugging support
* production monitoring

Avoid:

* excessive console logging
* exposing sensitive information in logs

---

# 16. Async & Concurrency Rules

Rules:

* all async operations must use async/await
* handle rejected promises properly
* avoid blocking operations
* transactional operations should remain consistent

Critical flows:

* booking creation
* seat reservation
* payment processing

must remain concurrency-safe.

---

# 17. Security Principles

STRICT SECURITY REQUIREMENTS:

* validate all inputs
* sanitize request data
* protect sensitive routes
* hash passwords securely
* avoid exposing internal errors
* use environment variables for secrets

Forbidden:

* hardcoded credentials
* direct trust of client payloads
* exposing database errors publicly

---

# 18. Docker & Infrastructure Principles

The backend must support:

* Docker-based development
* docker-compose workflows
* environment isolation
* reproducible environments

Rules:

* services must work inside containers
* local machine dependencies should be minimized

---

# 19. Code Quality Rules

Every module should:

* remain modular
* follow naming conventions
* avoid duplicated logic
* expose clean interfaces
* remain independently maintainable

Avoid:

* giant service files
* tightly coupled modules
* hidden side effects
* business logic duplication

---

# 20. Forbidden Patterns

DO NOT:

* place business logic inside controllers
* query database directly from routes/controllers
* hardcode secrets
* duplicate validation logic
* bypass service layer
* create circular dependencies
* tightly couple modules
* mix infrastructure logic with business logic

---

# 21. Architectural Philosophy

The backend should behave like a scalable enterprise system, not a collection of random Express routes.

The architecture prioritizes:

* long-term maintainability
* clear responsibility boundaries
* predictable request flow
* reusable business services
* scalable domain organization

Every generated backend module must respect these architectural constraints.
