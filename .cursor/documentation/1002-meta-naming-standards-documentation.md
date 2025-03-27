# Naming Standards Documentation

This document provides comprehensive guidance on the 1002-meta-naming-standards.mdc cursor rule that enforces consistent naming conventions across all code elements in a project.

## Table of Contents

1. [Overview](#overview)
2. [Rule Structure](#rule-structure)
3. [Core Principles](#core-principles)
4. [Element Taxonomy](#element-taxonomy)
   - [Files & Folders](#files--folders)
   - [Variables & Constants](#variables--constants)
   - [Functions & Methods](#functions--methods)
   - [Classes](#classes)
   - [Types & Interfaces](#types--interfaces)
   - [Enums](#enums)
   - [React & Vue](#react--vue)
   - [CSS & Styling](#css--styling)
   - [Backend Elements](#backend-elements)
   - [Clean Architecture](#clean-architecture)
   - [Testing](#testing)
5. [Visual Reference](#visual-reference)
6. [Implementation Checklist](#implementation-checklist)
7. [Configuration Templates](#configuration-templates)
8. [Examples](#examples)
9. [Semantic Compression Explanation](#semantic-compression-explanation)
10. [Integration with Tools](#integration-with-tools)
11. [FAQ](#faq)

## Overview

The naming standards rule (1002-meta-naming-standards.mdc) establishes a comprehensive set of naming conventions that apply across all project files. By enforcing consistent naming patterns, this rule helps to:

- **Improve code readability** by creating predictable naming patterns
- **Increase maintainability** through clear element identification
- **Enhance searchability** with unique, descriptive names
- **Reduce cognitive load** for developers working across different parts of the codebase
- **Facilitate automated tooling** through consistent patterns

The rule is designed to be a single source of truth for naming conventions in a project, applying to all code elements from files and folders to variables, functions, classes, and beyond.

## Rule Structure

The naming standards rule uses semantic compression for maximum information density while maintaining clarity. The rule is structured as follows:

1. **Frontmatter** - Contains metadata about the rule (title, description, scope, etc.)
2. **Core Principles** - Foundational naming guidelines that apply universally
3. **Element Taxonomy** - Detailed naming conventions organized by element type
4. **Validation Criteria** - How to verify naming compliance
5. **Implementation Workflow** - Strategy for applying these conventions
6. **Examples** - Clear demonstrations of valid and invalid naming

## Core Principles

The rule begins with core principles that guide all naming decisions:

```
↹ Ω•naming•processor [p=1] {
  ⊕ core•principles {
    descriptive: reveal•intent
    searchable: unique•findable
    consistent: follow•patterns
    concise: optimal•not•verbose
    coherent: domain•aligned
  }

  ⊕ global•rules {
    max•length: 50•chars
    abbreviations: avoid•except•common
    redundant•words: eliminate
    format•compliance: required
  }
}
```

These principles can be translated as:

- **Descriptive** - Names should reveal their purpose and intent
- **Searchable** - Names should be unique and easily findable in the codebase
- **Consistent** - Names should follow established patterns
- **Concise** - Names should be optimal length without unnecessary verbosity
- **Coherent** - Names should align with domain terminology

The global rules establish universal constraints:

- Maximum name length of 50 characters
- Avoid abbreviations except for commonly accepted ones
- Eliminate redundant words that don't add meaning
- Compliance with format rules is required

## Element Taxonomy

The core of the rule is a comprehensive taxonomy of naming conventions for different code elements.

### Files & Folders

```
⊕ files {
  source•code: kebab-case.ext
  components: PascalCase.{jsx|tsx|vue}
  tests: [filename].{spec|test}.ext
  types: kebab-case.d.ts
  config: kebab-case.config.{js|ts}
  constants: SCREAMING_SNAKE_CASE.{js|ts}
}

⊕ folders {
  general: kebab-case
  features: kebab-case
  architecture•layers: kebab-case
  component•collections: kebab-case
}
```

File naming follows these patterns:

- Source code files use kebab-case (e.g., `user-service.ts`)
- Component files use PascalCase (e.g., `UserProfile.tsx`)
- Test files use the pattern `[filename].{spec|test}.ext`
- Type declaration files use kebab-case with .d.ts extension
- Configuration files use kebab-case with .config.js/ts suffix
- Constant/data files use SCREAMING_SNAKE_CASE

All folders use kebab-case for consistency, regardless of their purpose.

### Variables & Constants

```
⊕ variables {
  standard: camelCase
  private: _camelCase
  boolean: {is|has}Prefixed
  constants: SCREAMING_SNAKE_CASE
  env•vars: SCREAMING_SNAKE_CASE
}
```

- Regular variables use camelCase (e.g., `userData`)
- Private class variables are prefixed with underscore (e.g., `_userData`)
- Boolean variables use "is" or "has" prefixes (e.g., `isValid`, `hasErrors`)
- Constants use SCREAMING_SNAKE_CASE (e.g., `MAX_RETRIES`)
- Environment variables use SCREAMING_SNAKE_CASE (e.g., `API_KEY`)

### Functions & Methods

```
⊕ functions {
  standard: camelCase()
  private: _camelCase()
  boolean•returning: {is|has}Prefixed()
  factory: createPrefixed()
  event•handlers: handlePrefixed()
}
```

- Standard functions/methods use camelCase (e.g., `calculateTotal()`)
- Private methods use underscore prefix (e.g., `_validateInput()`)
- Boolean-returning functions use "is" or "has" prefixes (e.g., `isValidEmail()`)
- Factory functions use "create" prefix (e.g., `createUserProfile()`)
- Event handlers use "handle" prefix (e.g., `handleSubmit()`)

### Classes

```
⊕ classes {
  standard: PascalCase
  abstract: AbstractPascalCase
  service: PascalCaseService
  repository: PascalCaseRepository
  controller: PascalCaseController
}
```

- Regular classes use PascalCase (e.g., `UserProfile`)
- Abstract classes use "Abstract" prefix (e.g., `AbstractRepository`)
- Service classes use "Service" suffix (e.g., `AuthenticationService`)
- Repository classes use "Repository" suffix (e.g., `UserRepository`)
- Controller classes use "Controller" suffix (e.g., `AuthController`)

### Types & Interfaces

```
⊕ types {
  interfaces: PascalCaseInterface
  types: PascalCaseType
  generics: {T|PascalCaseType}
  props: PascalCaseProps
}
```

- Interfaces use "Interface" suffix (e.g., `UserDataInterface`)
- Type aliases use "Type" suffix (e.g., `ResponseType`)
- Generic type parameters use single capital letter or PascalCase with "Type" suffix
- React props types use "Props" suffix (e.g., `ButtonProps`)

### Enums

```
⊕ enums {
  names: PascalCaseEnum
  members: SCREAMING_SNAKE_CASE
}
```

- Enum names use "Enum" suffix (e.g., `StatusEnum`)
- Enum members use SCREAMING_SNAKE_CASE (e.g., `StatusEnum.ACTIVE`)

### React & Vue

```
⊕ react•vue {
  components: PascalCase
  hooks: useCamelCase
  providers: PascalCaseProvider
  HOCs: withPascalCase
}
```

- Components use PascalCase (e.g., `UserProfile`)
- Custom hooks use "use" prefix (e.g., `useFormValidation`)
- Context providers use "Provider" suffix (e.g., `ThemeProvider`)
- Higher-order components use "with" prefix (e.g., `withAuthentication`)

### CSS & Styling

```
⊕ css {
  classes: kebab-case
  variables: --kebab-case
  modules: camelCase [imported]
  tailwind: kebab-case
}
```

- CSS class names use kebab-case (e.g., `.user-profile`)
- CSS variables use kebab-case with -- prefix (e.g., `--primary-color`)
- CSS modules use camelCase when imported in JS/TS
- Tailwind custom classes use kebab-case

### Backend Elements

```
⊕ backend {
  endpoints: kebab-case
  db•tables: snake_case
  db•fields: snake_case
}
```

- API endpoints use kebab-case (e.g., `/api/user-profiles`)
- Database tables use snake_case (e.g., `user_accounts`)
- Database fields use snake_case (e.g., `first_name`)

### Clean Architecture

```
⊕ clean•arch {
  use•cases: PascalCaseUseCase
  entities: PascalCaseEntity
  value•objects: PascalCase
  DTOs: PascalCaseDTO
  repo•interfaces: PascalCaseRepositoryInterface
  implementations: Context{PascalCase}
}
```

- Use cases use "UseCase" suffix (e.g., `CreateUserUseCase`)
- Entities use "Entity" suffix (e.g., `UserEntity`)
- Value objects use PascalCase (e.g., `Email`, `PhoneNumber`)
- DTOs use "DTO" suffix (e.g., `UserDTO`)
- Repository interfaces use "RepositoryInterface" suffix
- Implementations include context in name (e.g., `SqlUserRepository`)

### Testing

```
⊕ testing {
  suites: describe('PascalCase',...)
  cases: {it|test}('should...',...)
  fixtures: {camelCaseMock|mockPascalCase}
  helpers: camelCaseHelper
}
```

- Test suites use describe with PascalCase (e.g., `describe('UserService', ...)`)
- Test cases use "should" pattern (e.g., `it('should validate email', ...)`)
- Test fixtures use "mock" prefix or "Mock" suffix (e.g., `userMock`, `mockUserData`)
- Test helpers use camelCase (e.g., `createTestUser`)

## Visual Reference

### Naming Patterns At a Glance

| Element Type     | Pattern                         | Example                 |
| ---------------- | ------------------------------- | ----------------------- |
| File (source)    | `kebab-case.ext`                | `user-service.ts`       |
| File (component) | `PascalCase.{jsx\|tsx\|vue}`    | `UserProfile.tsx`       |
| File (test)      | `[filename].{spec\|test}.ext`   | `user-service.spec.ts`  |
| File (config)    | `kebab-case.config.{js\|ts}`    | `webpack.config.js`     |
| File (constants) | `SCREAMING_SNAKE_CASE.{js\|ts}` | `DEFAULT_VALUES.ts`     |
| Folder           | `kebab-case`                    | `user-management/`      |
| Variable         | `camelCase`                     | `userData`              |
| Private Variable | `_camelCase`                    | `_userData`             |
| Boolean Variable | `is/hasPrefixed`                | `isValid`, `hasError`   |
| Constant         | `SCREAMING_SNAKE_CASE`          | `MAX_RETRIES`           |
| Function         | `camelCase()`                   | `calculateTotal()`      |
| Private Function | `_camelCase()`                  | `_validateInput()`      |
| Boolean Function | `is/hasPrefixed()`              | `isValidEmail()`        |
| Factory Function | `createPrefixed()`              | `createUser()`          |
| Event Handler    | `handlePrefixed()`              | `handleSubmit()`        |
| Class            | `PascalCase`                    | `UserProfile`           |
| Abstract Class   | `AbstractPascalCase`            | `AbstractRepository`    |
| Service Class    | `PascalCaseService`             | `AuthenticationService` |
| Repository Class | `PascalCaseRepository`          | `UserRepository`        |
| Controller Class | `PascalCaseController`          | `UserController`        |
| Interface        | `PascalCaseInterface`           | `UserDataInterface`     |
| Type             | `PascalCaseType`                | `ResponseType`          |
| Props Type       | `PascalCaseProps`               | `ButtonProps`           |
| Enum             | `PascalCaseEnum`                | `StatusEnum`            |
| Enum Member      | `SCREAMING_SNAKE_CASE`          | `StatusEnum.ACTIVE`     |
| Component        | `PascalCase`                    | `UserProfile`           |
| Hook             | `useCamelCase`                  | `useFormValidation`     |
| Provider         | `PascalCaseProvider`            | `ThemeProvider`         |
| HOC              | `withPascalCase`                | `withAuthentication`    |
| CSS Class        | `kebab-case`                    | `.user-profile`         |
| CSS Variable     | `--kebab-case`                  | `--primary-color`       |
| API Endpoint     | `kebab-case`                    | `/api/user-profiles`    |
| Database Table   | `snake_case`                    | `user_accounts`         |
| Database Field   | `snake_case`                    | `first_name`            |
| Use Case         | `PascalCaseUseCase`             | `CreateUserUseCase`     |
| Entity           | `PascalCaseEntity`              | `UserEntity`            |
| DTO              | `PascalCaseDTO`                 | `UserDTO`               |

### Decision Tree

```
Files & Folders
    ├── Source Code Files → kebab-case.ext
    ├── Component Files → PascalCase.{jsx|tsx|vue}
    ├── Test Files → [filename].{spec|test}.ext
    ├── Config Files → kebab-case.config.{js|ts}
    ├── Constant Files → SCREAMING_SNAKE_CASE.{js|ts}
    └── All Folders → kebab-case

Variables
    ├── Standard → camelCase
    ├── Private → _camelCase
    ├── Boolean → {is|has}Prefixed
    └── Constants → SCREAMING_SNAKE_CASE

Functions
    ├── Standard → camelCase()
    ├── Private → _camelCase()
    ├── Boolean → {is|has}Prefixed()
    ├── Factory → createPrefixed()
    └── Event Handlers → handlePrefixed()

Classes
    ├── Standard → PascalCase
    ├── Abstract → AbstractPascalCase
    ├── Service → PascalCaseService
    ├── Repository → PascalCaseRepository
    └── Controller → PascalCaseController

Types
    ├── Interfaces → PascalCaseInterface
    ├── Type Aliases → PascalCaseType
    ├── Props → PascalCaseProps
    ├── Enum Names → PascalCaseEnum
    └── Enum Members → SCREAMING_SNAKE_CASE

Framework-Specific
    ├── React/Vue
    │   ├── Components → PascalCase
    │   ├── Hooks → useCamelCase
    │   ├── Providers → PascalCaseProvider
    │   └── HOCs → withPascalCase
    ├── CSS
    │   ├── Classes → kebab-case
    │   ├── Variables → --kebab-case
    │   └── Modules → camelCase
    └── Backend
        ├── Endpoints → kebab-case
        ├── DB Tables → snake_case
        └── DB Fields → snake_case
```

### Quick Reference Card

```
┌────────────────────────────────────────────────────┐
│ NAMING STANDARDS QUICK REFERENCE                    │
├────────────────┬───────────────────────────────────┤
│ FILES          │ source:        kebab-case.ext      │
│                │ components:    PascalCase.ext      │
│                │ tests:         name.test.ext       │
│                │ config:        name.config.ext     │
│                │ constants:     UPPER_SNAKE.ext     │
├────────────────┼───────────────────────────────────┤
│ FOLDERS        │ All folders:   kebab-case          │
├────────────────┼───────────────────────────────────┤
│ VARIABLES      │ standard:      camelCase           │
│                │ private:       _camelCase          │
│                │ boolean:       isValue/hasValue    │
│                │ constant:      UPPER_SNAKE_CASE    │
├────────────────┼───────────────────────────────────┤
│ FUNCTIONS      │ standard:      camelCase()         │
│                │ private:       _camelCase()        │
│                │ boolean:       isValue()           │
│                │ factory:       createValue()       │
│                │ event:         handleEvent()       │
├────────────────┼───────────────────────────────────┤
│ CLASSES        │ standard:      PascalCase          │
│                │ abstract:      AbstractClass       │
│                │ service:       ValueService        │
│                │ repository:    ValueRepository     │
│                │ controller:    ValueController     │
├────────────────┼───────────────────────────────────┤
│ TYPES          │ interface:     ValueInterface      │
│                │ type:          ValueType           │
│                │ enum:          ValueEnum           │
│                │ enum member:   ENUM_MEMBER         │
├────────────────┼───────────────────────────────────┤
│ REACT/VUE      │ component:     PascalCase          │
│                │ hook:          useValue            │
│                │ provider:      ValueProvider       │
│                │ HOC:           withValue           │
├────────────────┼───────────────────────────────────┤
│ CSS            │ class:         kebab-case          │
│                │ variable:      --kebab-case        │
├────────────────┼───────────────────────────────────┤
│ BACKEND        │ endpoint:      /kebab-case         │
│                │ DB table:      snake_case          │
│                │ DB field:      snake_case          │
└────────────────┴───────────────────────────────────┘
```

## Implementation Checklist

Use this checklist to implement and verify compliance with the naming standards.

### Initial Setup

- [ ] **Review Documentation**

  - [ ] Read the complete naming standards documentation
  - [ ] Understand the core principles and element taxonomy
  - [ ] Familiarize yourself with the semantic compression notation

- [ ] **Configure Linting Tools**

  - [ ] Set up ESLint with naming convention rules
  - [ ] Configure Prettier for consistent formatting
  - [ ] Add custom linting rules for project-specific conventions
  - [ ] Integrate linting into your CI/CD pipeline

- [ ] **Team Onboarding**
  - [ ] Share naming standards documentation with all team members
  - [ ] Conduct a training session on the naming conventions
  - [ ] Establish a Q&A channel for naming convention questions
  - [ ] Create a quick reference guide for common elements

### Implementing Naming Standards

- [ ] **Files & Folders**

  - [ ] Use kebab-case for all source code files (e.g., `user-service.ts`)
  - [ ] Use PascalCase for all component files (e.g., `UserProfile.tsx`)
  - [ ] Follow the pattern `[filename].{spec|test}.ext` for test files
  - [ ] Use kebab-case for all folders

- [ ] **Variables & Functions**

  - [ ] Use camelCase for standard variables and functions
  - [ ] Use \_camelCase for private variables and methods
  - [ ] Use isPrefix or hasPrefix for boolean variables and functions
  - [ ] Use SCREAMING_SNAKE_CASE for constants
  - [ ] Use createPrefix for factory functions
  - [ ] Use handlePrefix for event handlers

- [ ] **Classes & Types**

  - [ ] Use PascalCase for standard classes
  - [ ] Use appropriate prefixes/suffixes for specialized classes (Abstract, Service, etc.)
  - [ ] Use Interface suffix for interfaces
  - [ ] Use Type suffix for type aliases
  - [ ] Use Enum suffix for enums and SCREAMING_SNAKE_CASE for enum members

- [ ] **Framework-Specific**
  - [ ] Follow React/Vue conventions (PascalCase components, usePrefix hooks, etc.)
  - [ ] Use kebab-case for CSS classes and variables
  - [ ] Follow backend conventions for endpoints and database elements

### Verification Process

- [ ] **Regular Code Reviews**

  - [ ] Include naming convention check in code review checklist
  - [ ] Verify all new code follows appropriate conventions

- [ ] **Automated Verification**
  - [ ] Run linting tools regularly to catch naming issues
  - [ ] Block merges with naming convention violations

### Implementation Strategy

- [ ] **New Code**

  - [ ] Ensure strict compliance with naming standards for all new code
  - [ ] Include naming standards validation in templates and scaffolding

- [ ] **Legacy Code**
  - [ ] Identify high-priority areas for naming refactoring
  - [ ] Refactor opportunistically when modifying existing code

## Configuration Templates

### ESLint Configuration (.eslintrc.js)

```javascript
module.exports = {
  rules: {
    // Variable naming
    camelcase: ["error", { properties: "never" }],
    "@typescript-eslint/naming-convention": [
      "error",
      // Regular variables
      {
        selector: "variable",
        format: ["camelCase"],
      },
      // Private class properties
      {
        selector: "property",
        modifiers: ["private"],
        format: ["camelCase"],
        leadingUnderscore: "require",
      },
      // Boolean variables
      {
        selector: "variable",
        types: ["boolean"],
        format: ["camelCase"],
        prefix: ["is", "has", "should", "can", "did", "will"],
      },
      // Constants
      {
        selector: "variable",
        modifiers: ["const"],
        format: ["camelCase", "UPPER_CASE"],
      },
      // Classes
      {
        selector: "class",
        format: ["PascalCase"],
      },
      // Interfaces
      {
        selector: "interface",
        format: ["PascalCase"],
        suffix: ["Interface"],
      },
      // Types
      {
        selector: "typeAlias",
        format: ["PascalCase"],
        suffix: ["Type"],
      },
      // Enums
      {
        selector: "enum",
        format: ["PascalCase"],
        suffix: ["Enum"],
      },
      // Enum members
      {
        selector: "enumMember",
        format: ["UPPER_CASE"],
      },
    ],
  },
};
```

### Prettier Configuration (.prettierrc.js)

```javascript
module.exports = {
  // Core formatting options
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,

  // File handling
  filenameCase: "kebab", // Encourages kebab-case filenames
  endOfLine: "lf",

  // Custom overrides for file types
  overrides: [
    {
      files: "*.{jsx,tsx}",
      options: {
        // Component files typically have PascalCase names
        // This is handled in your project's build/lint config
      },
    },
    {
      files: "*.{css,scss}",
      options: {
        singleQuote: false,
      },
    },
  ],
};
```

### Directory Structure Template

```
project-root/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   └── Input.tsx
│   │   └── features/
│   │       └── user-profile/
│   │           ├── UserProfile.tsx
│   │           └── user-profile.styles.css
│   ├── hooks/
│   │   ├── useForm.ts
│   │   └── useAuth.ts
│   ├── services/
│   │   ├── api-service.ts
│   │   └── user-service.ts
│   ├── utils/
│   │   ├── date-utils.ts
│   │   └── string-utils.ts
│   ├── constants/
│   │   └── API_ENDPOINTS.ts
│   └── types/
│       └── user-types.d.ts
└── config/
    └── webpack.config.js
```

## Examples

### Valid Examples

```
// Files & Folders
resume-service.ts
ResumeForm.tsx
resume-builder/
ui-components/

// Variables & Constants
const userData = fetchData();
const isValid = validateInput();
const MAX_RETRIES = 3;

// Functions & Methods
function calculateTotal() {...}
function isEmailValid() {...}
function handleSubmit() {...}

// Classes
class UserProfile {...}
class AbstractRepository {...}
class AuthenticationService {...}

// Types
interface UserDataInterface {...}
type FormFieldType = {...}
type T extends Entity {...}

// React/Vue
const ProfileCard = () => {...}
const useFormValidation = () => {...}
const ThemeProvider = {...}

// CSS
.user-profile {...}
--primary-color: #333;

// Backend
/api/user-profiles
user_accounts
```

### Invalid Examples

```
// Files & Folders
resume_service.ts  // Use kebab-case
resumeForm.vue     // Use PascalCase
UIComponents/      // Use kebab-case

// Variables & Constants
const Data = fetchData();      // Use camelCase
const valid = checkEmail();    // Use isValid
const maxRetries = 3;          // Use SCREAMING_SNAKE_CASE

// Functions & Methods
function Calculate() {...}     // Use camelCase
function valid_email() {...}   // Use camelCase and isPrefix
function onClick() {...}       // Use handlePrefix

// Classes
class userProfile {...}        // Use PascalCase
class repository_abstract {...} // Use AbstractPascalCase
class auth {...}               // Use descriptive PascalCase

// Types
interface userData {...}       // Use PascalCaseInterface
type formField = {...}         // Use PascalCaseType
type entity extends T {...}    // Use PascalCase

// React/Vue
const profileCard = () => {...} // Use PascalCase
const FormValidation = () => {...} // Use usePrefix
const theme_provider = {...}    // Use PascalCase

// CSS
.userProfile {...}             // Use kebab-case
--primaryColor: #333;          // Use kebab-case

// Backend
/api/userProfiles              // Use kebab-case
UserAccounts                   // Use snake_case
```

## Semantic Compression Explanation

The naming standards rule uses semantic compression to convey maximum information in minimal space. Key elements of this compression include:

### Symbols and Operators

- `↹` (Focus/Filter) - Indicates a main task or instruction category
- `Ω` (Omega) - Represents the core processor or engine
- `⊕` (Combine/Merge) - Introduces a component or subcategory
- `Σ` (Sigma/Sum) - Indicates a summary or result
- `→` (Arrow) - Represents flow or transformation
- `[p=n]` - Indicates priority level
- `{a|b}` - Represents alternatives or options
- `•` (Bullet) - Connects related concepts

### Example of Reading Compressed Notation

For example, the compressed segment:

```
⊕ variables {
  standard: camelCase
  private: _camelCase
  boolean: {is|has}Prefixed
  constants: SCREAMING_SNAKE_CASE
  env•vars: SCREAMING_SNAKE_CASE
}
```

Can be expanded to:

"Variables are categorized as follows: standard variables use camelCase; private variables use \_camelCase (with underscore prefix); boolean variables use either 'is' or 'has' as a prefix; constants use SCREAMING_SNAKE_CASE; and environment variables also use SCREAMING_SNAKE_CASE."

## Integration with Tools

### ESLint Integration

ESLint can be configured to enforce naming conventions automatically. Example configuration is provided in the [Configuration Templates](#configuration-templates) section.

### Custom Scripts

You can create custom scripts to validate naming conventions across the codebase:

```javascript
// scripts/validate-naming.js
const fs = require("fs");
const path = require("path");
const glob = require("glob");

// Validate file naming
const validateFiles = () => {
  // Source files should use kebab-case
  const sourceFiles = glob.sync("src/**/*.ts", {
    ignore: ["**/*.d.ts", "**/*.test.ts", "**/*.spec.ts"],
  });
  for (const file of sourceFiles) {
    const filename = path.basename(file);
    if (!/^[a-z][a-z0-9]*(-[a-z0-9]+)*\.ts$/.test(filename)) {
      console.error(
        `Invalid source file name: ${file} (should use kebab-case)`
      );
    }
  }

  // Component files should use PascalCase
  const componentFiles = glob.sync("src/**/*.{jsx,tsx}");
  for (const file of componentFiles) {
    const filename = path.basename(file);
    if (!/^[A-Z][a-zA-Z0-9]*\.(jsx|tsx)$/.test(filename)) {
      console.error(
        `Invalid component file name: ${file} (should use PascalCase)`
      );
    }
  }
};

validateFiles();
```

## FAQ

### Why are these naming conventions important?

Consistent naming conventions improve code readability, maintainability, and searchability. They reduce cognitive load by creating predictable patterns and make it easier for developers to understand code they didn't write.

### How strictly should these conventions be followed?

New code should strictly follow these conventions. Existing code should be updated opportunistically when modified. The goal is to increase consistency over time without requiring a massive refactoring effort.

### What if a library or framework uses different conventions?

When working directly with external libraries or frameworks, it's acceptable to follow their conventions at the integration points. However, your application code should still follow your project's conventions.

### How can I enforce these naming conventions?

Use a combination of:

- Linting tools (ESLint, TSLint) with custom rules
- Code review processes
- Documentation and team training
- Automated checks in CI/CD pipelines

### What about domain-specific naming?

Domain-specific terms should follow the same casing conventions as their element type. The naming standards ensure consistent formatting, while domain modeling ensures consistent terminology.

### Can I customize these standards for my project?

Yes, these standards can be adapted to fit specific project needs. However, any customization should be documented and consistently applied across the entire project.

### How do I handle acronyms in names?

Acronyms should follow the same case pattern as the rest of the name:

- For camelCase: `httpRequest`, `apiClient`
- For PascalCase: `HttpRequest`, `ApiClient`
- For SCREAMING_SNAKE_CASE: `HTTP_REQUEST`, `API_CLIENT`
