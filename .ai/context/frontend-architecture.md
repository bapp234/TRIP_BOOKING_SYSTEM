# Frontend Architecture

## 1. Overview

This frontend application is built for a scalable bus ticket booking platform using a strict Feature-Sliced Design (FSD) architecture.

Primary goals:

* scalable architecture
* maintainable codebase
* reusable UI system
* predictable project structure
* strict separation of concerns
* mobile-first responsive experience

The frontend must remain modular, domain-oriented, and easy to extend as the project grows.

---

# 2. Tech Stack

## Core Stack

* React
* Vite
* JavaScript (STRICTLY NO TypeScript)
* TailwindCSS
* Zustand
* React Router

## Development Principles

* SPA architecture
* mobile-first UI
* reusable component system
* feature isolation
* scalable folder structure
* low coupling and high cohesion

---

# 3. Architecture: Feature-Sliced Design (FSD)

## Layer Hierarchy (Top → Bottom)

```text
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

Each layer has a clear responsibility and strict dependency boundaries.

---

# 4. Layer Responsibilities

## app

Responsible for:

* application initialization
* providers setup
* routing configuration
* global styles
* app-wide configuration
* layouts

Examples:

* router
* theme provider
* auth provider
* app entrypoint

---

## pages

Responsible for:

* route-level composition
* assembling widgets
* page layouts

Rules:

* pages should NOT contain heavy business logic
* pages orchestrate widgets and features

Examples:

* HomePage
* TripSearchPage
* BookingPage

---

## widgets

Responsible for:

* large reusable UI compositions
* combining features and entities
* reusable business sections

Examples:

* Header
* BookingSidebar
* SearchSection
* TripResults

Rules:

* widgets may compose multiple features
* widgets should remain reusable

---

## features

Responsible for:

* business logic
* user interactions
* mutations
* feature-specific state

Examples:

* SearchTripForm
* BookSeatButton
* LoginForm
* PaymentAction

Rules:

* features represent user actions
* features may use entities and shared
* business logic belongs here

---

## entities

Responsible for:

* business entities
* domain models
* entity-specific UI
* entity state and API

Examples:

* Trip
* Seat
* Operator
* Booking

Rules:

* entities should remain independent
* entities must not depend on features/widgets/pages

---

## shared

Responsible for:

* generic reusable logic
* UI primitives
* utility functions
* API client configuration
* constants
* reusable hooks

Examples:

* Button
* Modal
* axios instance
* date utilities

STRICT RULE:

* shared MUST NEVER contain business logic
* shared MUST remain domain-agnostic

---

# 5. Dependency Rules

## Allowed Import Direction

Imports are allowed ONLY from lower layers.

```text
app → pages → widgets → features → entities → shared
```

Examples:

* features can import from entities/shared
* widgets can import from features/entities/shared

---

## Forbidden Imports

Strictly forbidden:

* upward imports
* circular dependencies
* bypassing slice public APIs
* importing internal modules directly from another slice

---

## Lateral Imports

Avoid imports between slices in the same layer unless explicitly exposed through public APIs.

Bad:

```js
features/auth importing directly from features/payment/internalFile
```

Good:

```js
import { PaymentForm } from '@/features/payment'
```

---

# 6. Public API Rules

Every slice MUST expose a public API through `index.js`.

External modules may ONLY import from the slice root.

Correct:

```js
import { TripCard } from '@/entities/trip'
```

Forbidden:

```js
import TripCard from '@/entities/trip/ui/TripCard'
```

Purpose:

* maintain encapsulation
* reduce tight coupling
* simplify refactoring

---

# 7. Internal Slice Structure

Every `feature` and `entity` should follow this structure:

```text
/src/features/[feature-name]/
├── ui/                 # UI components
├── model/              # state, hooks, selectors, business logic
├── api/                # API requests
├── lib/                # internal helpers
├── config/             # local configs/constants
├── assets/             # local assets
└── index.js            # public API
```

Example:

```text
/src/features/search-trip/
├── ui/
├── model/
├── api/
├── lib/
└── index.js
```

---

# 8. State Management Rules

Use Zustand ONLY for:

* shared client state
* cross-page state
* persistent UI state

Avoid:

* giant global stores
* storing temporary UI state globally

Prefer:

* local component state when possible
* feature-scoped stores

---

# 9. API & Data Fetching Rules

Rules:

* API requests belong inside `api/`
* NEVER place API calls directly inside UI components
* API response transformation belongs in `model/` or `lib/`
* UI components should remain presentation-focused

Correct:

```text
feature/api → feature/model → feature/ui
```

Forbidden:

```text
ui component directly calling fetch/axios
```

---

# 10. Routing Rules

Rules:

* routing belongs to `app/router`
* pages define route entry points
* pages compose widgets
* avoid business logic inside route components

---

# 11. UI System Rules

## shared/ui

Contains:

* reusable UI primitives
* generic UI system

Examples:

* Button
* Input
* Modal
* Dialog
* Skeleton

STRICTLY FORBIDDEN:

* booking-specific UI
* payment-specific UI
* domain-specific components

---

# 12. Component Design Rules

Rules:

* one responsibility per component
* components should remain small and modular
* prefer components under 200 lines
* extract reusable logic into hooks or lib
* separate UI from business logic

Avoid:

* giant components
* deeply nested JSX
* duplicated UI patterns

---

# 13. Naming Conventions

## Components

PascalCase

Example:

```text
TripCard.jsx
BookingSidebar.jsx
```

---

## Hooks

Prefix with `use`

Example:

```text
useBookingStore.js
useTripSearch.js
```

---

## Utilities

camelCase

Example:

```text
formatPrice.js
calculateDuration.js
```

---

## Folders

kebab-case

Example:

```text
search-trip
seat-selection
```

---

# 14. Import Style Rules

Use absolute imports with aliases.

Correct:

```js
import { Button } from '@/shared/ui'
```

Forbidden:

```js
import Button from '../../../shared/ui/Button'
```

---

# 15. Async UI Rules

Every async UI must handle:

* loading state
* error state
* empty state

Examples:

* trip search results
* booking history
* payment requests

---

# 16. Form Rules

Rules:

* forms belong to features
* validation logic separated from UI
* reusable form fields belong to shared/ui

Avoid:

* inline validation logic inside pages
* duplicated form handling

---

# 17. Responsive Design Rules

STRICT REQUIREMENTS:

* mobile-first design
* responsive layouts
* avoid fixed widths
* support small screens first

The application must work well on:

* mobile devices
* tablets
* desktop screens

---

# 18. Forbidden Patterns

DO NOT:

* create giant React components
* place API calls directly inside UI
* duplicate business logic
* create circular dependencies
* use relative imports like ../../../
* hardcode API URLs
* introduce unnecessary libraries
* mix UI and business logic
* bypass public APIs

---

# 19. Architectural Philosophy

This project prioritizes:

* scalability
* maintainability
* predictable architecture
* reusable systems
* strict boundaries
* clean dependency flow

The frontend should behave like a modular enterprise application, not a collection of random React components.
