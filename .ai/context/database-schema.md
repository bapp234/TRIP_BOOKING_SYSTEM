# Database Schema (Prisma)

This document defines the core data models and relationships for the Bus Ticket Booking Platform. AI Agents must use this as the authoritative source for database interactions via Prisma ORM.

## 1. Core Entities

### User
Represents all registered individuals in the system.
- `id`: String (UUID) - Primary Key
- `email`: String (Unique)
- `password`: String (Hashed)
- `fullName`: String
- `phone`: String
- `role`: Enum (CUSTOMER, OPERATOR, ADMIN)
- `createdAt`: DateTime
- `updatedAt`: DateTime

### Operator (Nhà xe)
Represents the transportation companies providing services.
- `id`: String (UUID) - Primary Key
- `name`: String
- `description`: Text
- `logoUrl`: String (Optional)
- `contactPhone`: String
- `status`: Enum (ACTIVE, INACTIVE)
- `createdAt`: DateTime

### Route (Tuyến đường)
Defines the path between two locations.
- `id`: String (UUID) - Primary Key
- `origin`: String (e.g., "Sài Gòn")
- `destination`: String (e.g., "Đà Lạt")
- `distance`: Float (km)
- `estimatedDuration`: Int (minutes)

### Trip (Chuyến xe định danh)
A specific service offering by an operator on a route.
- `id`: String (UUID) - Primary Key
- `operatorId`: String (FK to Operator)
- `routeId`: String (FK to Route)
- `busType`: Enum (SLEEPER, LIMOUSINE, CHAIR)
- `basePrice`: Decimal
- `description`: Text (Optional)

### Schedule (Lịch trình cụ thể)
An instance of a Trip at a specific date and time.
- `id`: String (UUID) - Primary Key
- `tripId`: String (FK to Trip)
- `departureTime`: DateTime
- `arrivalTime`: DateTime
- `status`: Enum (AVAILABLE, CANCELLED, COMPLETED)

### Seat (Sơ đồ ghế)
Individual seats for a specific schedule.
- `id`: String (UUID) - Primary Key
- `scheduleId`: String (FK to Schedule)
- `seatNumber`: String (e.g., "A1", "B12")
- `floor`: Int (1 or 2)
- `status`: Enum (AVAILABLE, LOCKED, BOOKED)
- `price`: Decimal (Overrides Trip basePrice if needed)
- `lockedUntil`: DateTime (Optional - for temporary hold during checkout)

### Booking (Giao dịch đặt vé)
- `id`: String (UUID) - Primary Key
- `userId`: String (FK to User)
- `scheduleId`: String (FK to Schedule)
- `totalAmount`: Decimal
- `status`: Enum (PENDING, PAID, CANCELLED)
- `paymentMethod`: Enum (CASH, MOMO, VNPAY, BANK_TRANSFER)
- `bookingCode`: String (Unique, human-readable)
- `createdAt`: DateTime

### Ticket (Vé lẻ)
Link between a booking and specific seats.
- `id`: String (UUID) - Primary Key
- `bookingId`: String (FK to Booking)
- `seatId`: String (FK to Seat)
- `passengerName`: String (Optional)
- `passengerPhone`: String (Optional)

## 2. Relationships Mapping

- **Operator** 1:N **Trip**
- **Route** 1:N **Trip**
- **Trip** 1:N **Schedule**
- **Schedule** 1:N **Seat**
- **User** 1:N **Booking**
- **Schedule** 1:N **Booking**
- **Booking** 1:N **Ticket**
- **Seat** 1:1 **Ticket**

## 3. Implementation Rules for AI
- Use UUID for all IDs.
- Use `Decimal` for all currency/price fields.
- Always include `createdAt` and `updatedAt` for auditing.
- Indexes should be created on `origin`, `destination`, `departureTime`, and `userId`.
- Implement soft deletes where appropriate (using a `deletedAt` field).
