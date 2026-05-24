# Project Context

## 1. Project Overview

This project is a scalable bus ticket booking platform designed for Vietnamese intercity transportation companies.

The platform allows passengers to:

* search available trips
* filter schedules and routes
* select seats
* create bookings
* contact bus operators
* receive booking confirmations
* manage personal booking history

The system is inspired by real-world Vietnamese transportation booking platforms and is intended to support long-term scalability, maintainability, and modular growth.

The project follows an architecture-first development philosophy and prioritizes clean system boundaries over rapid feature generation.

---

# 2. Business Objectives

Primary business goals:

* simplify bus ticket booking workflows
* improve trip discovery experience
* provide mobile-friendly booking flows
* centralize operator trip management
* support future scaling for multiple operators
* reduce operational complexity

The platform should remain flexible enough to support future expansion such as:

* online payments
* dynamic pricing
* promotions
* analytics dashboards
* operator management systems
* multilingual support

---

# 3. Primary Actors

## Guest Users

Can:

* browse trips
* search schedules
* view trip details
* view seat availability

Restrictions:

* cannot manage bookings without authentication

---

## Authenticated Users

Can:

* book tickets
* manage profiles
* view booking history
* cancel eligible bookings
* receive notifications

---

## Bus Operators

Can:

* manage trips
* manage schedules
* manage seat availability
* manage booking requests
* update trip information

---

## Administrators

Responsible for:

* system management
* moderation
* operator management
* analytics and monitoring
* platform configuration

---

# 4. Core Business Domains

## Authentication

Handles:

* login
* registration
* authorization
* session management
* role management

---

## Trips

Handles:

* trip listing
* routes
* departure points
* destinations
* trip information

---

## Schedules

Handles:

* departure times
* trip availability
* route schedules
* trip timing logic

---

## Bookings

Handles:

* seat reservation
* booking creation
* booking cancellation
* booking status tracking

---

## Seats

Handles:

* seat selection
* seat availability
* seat locking
* seat status management

---

## Payments

Handles:

* payment processing
* payment status
* transaction records

NOTE:
Initial development may use mocked payment flows before real gateway integration.

---

## Operators

Handles:

* transportation company information
* operator contact details
* operator trip management

---

## Notifications

Handles:

* booking confirmations
* booking updates
* system notifications

---

# 5. System Characteristics

The system must be:

* modular
* scalable
* maintainable
* reusable
* predictable
* easy to extend

The architecture should support:

* feature isolation
* domain separation
* reusable UI systems
* clean dependency management
* low coupling
* high cohesion

---

# 6. Technical Goals

## Frontend Goals

* responsive mobile-first UI
* reusable component system
* scalable FSD architecture
* SEO-friendly SPA structure
* maintainable routing system

---

## Backend Goals

* layered architecture
* clean API structure
* centralized error handling
* scalable database design
* modular services

---

## Infrastructure Goals

* Docker-first development workflow
* environment-based configuration
* CI/CD-ready project structure
* reproducible development environments

---

# 7. Architectural Philosophy

This project follows:

* architecture-first development
* modular system design
* strict separation of concerns
* domain-driven thinking
* reusable system design
* public API boundaries
* predictable project structure

Key principles:

* business logic must remain isolated
* UI should remain presentation-focused
* modules should remain independently maintainable
* dependencies should flow in one direction only

---

# 8. Development Philosophy

The project prioritizes:

* clean architecture over rapid shortcuts
* maintainability over premature optimization
* reusable modules over duplicated logic
* consistency over personal coding style
* long-term scalability over temporary convenience

All generated code should:

* respect architecture boundaries
* follow existing conventions
* avoid unnecessary complexity
* remain easy to refactor
* remain easy to test

---

# 9. Non-Goals (Current Scope Limitations)

The following are intentionally OUT OF SCOPE for the initial architecture:

* microservices architecture
* websocket realtime systems
* server-side rendering
* event-driven architecture
* distributed systems
* advanced caching layers
* multi-region deployment
* native mobile applications

The current priority is:

* establishing a strong monolithic modular architecture
* maintaining development simplicity
* maximizing development speed while preserving scalability

---

# 10. Scalability Vision

The architecture should support future expansion without major rewrites.

Potential future expansions:

* payment gateway integration
* real-time seat updates
* multilingual support
* analytics dashboards
* recommendation systems
* promotions and discounts
* operator administration portals
* mobile applications
* notification services
* advanced search filtering

The project structure must remain adaptable for future growth.

---

# 11. Development Constraints

STRICT REQUIREMENTS:

* JavaScript only (NO TypeScript)
* Feature-Sliced Design enforced on frontend
* Docker-first workflow
* PostgreSQL as primary database
* Prisma ORM required
* Monorepo architecture preferred
* No direct database access outside repositories
* No business logic inside UI components

---

# 12. Code Quality Expectations

Every generated module should:

* remain modular
* follow naming conventions
* expose clean public APIs
* avoid duplicated logic
* avoid tightly coupled dependencies
* remain production-oriented

The codebase should feel like a scalable enterprise application rather than a collection of isolated pages or components.
