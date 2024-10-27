# Nest.js Application

This repository contains a Nest.js application that follows a Domain-Driven Design (DDD) architecture. It is built with MongoDB as the primary database and uses JSON Web Tokens (JWT) for authentication and authorization through Passport. Swagger documentation is available to facilitate API exploration and testing.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
  - [Development](#development)
  - [Production](#production)
- [Project Structure](#project-structure)
  - [Domain Driven Design (DDD)](#domain-driven-design-ddd)
  - [AOP Modules](#aop-modules)
  - [Persistence Layer](#persistence-layer)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Nest.js framework** with **Domain-Driven Design** architecture.
- **MongoDB** integration for data persistence.
- **JWT Authorization** via **Passport** module.
- **AOP Modules** for encryption, authorization, HTTP middlewares, and logging.
- **Swagger Documentation** for API exploration and testing.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (v16 or later)
- **npm** (v6 or later) or **yarn**
- **MongoDB** (local or remote instance)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:

   Create a `.env` file at the root of the project and add the following environment variables:

   ```dotenv
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/your-database-name
   JWT_SECRET=your_jwt_secret_key
   ```

## Running the Application

### Development

To start the application in development mode, use the following command:

```bash
npm run start:dev
```

The server will start on the port defined in your `.env` file (default is `3000`). The Swagger documentation will be available at `http://localhost:<port>/swagger`.

### Production

For production deployment, run:

```bash
npm run start:prod
```

## Project Structure

The project follows a Domain-Driven Design (DDD) structure, where the codebase is organized by domains and services. Each domain contains its own models, services, and repositories.

```plaintext
src
├── aop                                     # Aspect-Oriented Programming modules
│   ├── authorization                       # Authorization middlewares and guards
│   ├── db                                  # Database-related utilities
│   ├── encryption                          # Encryption module (e.g., argon2 for hashing)
│   ├── http                                # HTTP middlewares (logging, request validation)
│   ├── keys                                # Key management
│   ├── logger                              # Custom logging services
│   ├── swagger                             # Swagger configuration
│   └── aop.module.ts                       # Main AOP module
├── api                                     # API layer
│   ├── cashflows                           # Cashflow API-related components
│   └── users                               # User API-related components
│       ├── controllers                     # User controllers
│       ├── dto                             # Data Transfer Objects for user requests
│       ├── mediators                       # Mediators for handling request-response logic
│       └── users-api.module.ts             # Main module for User API
│   └── api.module.ts                       # Main API module
├── domain                                  # Domain layer
│   ├── cashflows                           # Cashflow domain logic
│   └── shared                              # Shared resources or utilities across domains
│   └── users                               # User domain logic
│       ├── entities                        # User entities
│       │   └── user.ts                     # User entity definition
│       ├── factories                       # User factories for object creation
│       │   └── user.factory.ts             # Factory for user creation
│       ├── inputs                          # Input types for User operations
│       │   ├── create-user.input.ts        # DTO for creating a user
│       │   └── signin-user.input.ts        # DTO for signing in a user
│       ├── interfaces                      # User interfaces
│       │   └── user.repository.interface.ts# Interface for User repository
│       └── service                         # User services
│           ├── __tests__                   # Unit tests for user service
│           └── users.service.ts            # Main user service
│       └── users.module.ts                 # User module definition
├── persistence                             # Persistence layer for data access
│   ├── cashflows                           # Cashflow repository and persistence logic
│   └── users                               # User repository and persistence logic
│       ├── users.entity.ts                 # User entity for persistence
│       ├── users.repository.module.ts      # User repository module
│       ├── users.repository.provider.ts    # User repository provider
│       └── users.repository.ts             # User repository implementation
│   └── persistence.module.ts               # Main persistence module
└── root                                    # Root directory (project root)

```

### Domain Driven Design (DDD)

- **User Domain**: Handles all user-related operations, such as creation, deletion etc.
- **Cashflow Domain**: Manages cashflow-related operations, including CRUD operations for income and expense tracking.

### AOP Modules

The application includes an `aop` (Aspect-Oriented Programming) directory that provides cross-cutting concerns, such as:

- **Encryption**: Argon2 for password hashing.
- **Authorization**: Guards for JWT authentication and role-based access control.
- **HTTP Middlewares**: Custom middlewares for logging requests, validating input, and error handling.
- **Logger**: Provides custom logging functionality across the application.

### Persistence Layer

The `persistence` layer is where all domain-specific repositories are stored, encapsulating MongoDB interactions. This layer manages data access for the respective domains, allowing clean separation of concerns.

## API Documentation

The Swagger documentation provides a comprehensive overview of all available endpoints, input requirements, and response formats.

- Access Swagger by navigating to: [http://localhost:<port>/swagger](http://localhost:3000/swagger)

This documentation is automatically generated based on decorators used in the application controllers and models.

## Contributing

We welcome contributions from the community! To contribute:

1. Fork this repository.
2. Create a new branch: `git checkout -b feature/YourFeatureName`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/YourFeatureName`
5. Submit a pull request.

## License

Distributed under the MIT License. See `LICENSE` for more information.
