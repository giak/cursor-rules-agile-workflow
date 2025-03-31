# CHANGELOG Content Writing Guide

This guide outlines best practices for writing clear, informative, and consistent entries in your CHANGELOG.md file.

## Writing Principles

### 1. Write for Humans

Your changelog is primarily for humans to read—developers, users, and stakeholders—not for machines or automated tools. Focus on clarity and usefulness.

#### Do's:

- Use clear, concise language
- Explain the "why" behind significant changes
- Consider your audience's technical background

#### Don'ts:

- Don't use excessive technical jargon (unless appropriate for your audience)
- Avoid vague descriptions that don't communicate value
- Don't paste git commit messages without editing for clarity

### 2. Be Specific and Descriptive

Each entry should clearly describe what changed and why the change matters.

#### Good Examples:

```markdown
- Add PDF export functionality to report screen
- Fix memory leak in image processing pipeline
- Update authentication flow to support multi-factor authentication
```

#### Poor Examples:

```markdown
- Fixed stuff
- Updated code
- Made improvements
- Changed things around
```

### 3. Use Active Voice and Present Tense

Write entries in active voice and present tense to maintain consistency and directness.

#### Good Examples:

```markdown
- Add export functionality
- Fix calculation error
- Update dependency to v2.3.4
```

#### Poor Examples:

```markdown
- Export functionality was added
- The calculation error has been fixed
- Updated the dependency to v2.3.4
```

### 4. Categorize Changes Appropriately

Place each change in the most appropriate category to help readers quickly find relevant information.

| Category   | Use For                                                     |
| ---------- | ----------------------------------------------------------- |
| Added      | New features or capabilities                                |
| Changed    | Modifications to existing functionality                     |
| Deprecated | Features that will be removed in upcoming releases          |
| Removed    | Features that were actually removed                         |
| Fixed      | Bug fixes                                                   |
| Security   | Security vulnerability fixes                                |
| Technical  | Implementation details, refactoring, or performance changes |

If a change could fit multiple categories, choose the one most relevant to your users. If truly necessary, you can cross-reference:

```markdown
### Changed 🔄

- Redesign authentication flow for better security (see Security section)

### Security 🔒

- Implement token-based authentication (part of authentication flow redesign)
```

### 5. Reference Issues and Pull Requests

Include references to related issues, pull requests, or tickets to provide context and traceability.

```markdown
- Add dark mode support (#123)
- Fix login failure on Safari browsers (closes #456)
- Update documentation for API v2 (PRs #789, #790)
```

### 6. Credit Contributors

When appropriate, acknowledge the people who contributed to changes, especially external contributors.

```markdown
- Add French localization (thanks to @username)
- Fix performance issues in data processing module (contributed by @contributor)
```

### 7. Include Technical Details When Helpful

For complex changes, provide technical details that help users understand the implementation or implications.

````markdown
### Technical Details 🔧

> 💡 **Implementation Notes**
>
> The new caching mechanism uses a two-level approach:
>
> ```typescript
> // Level 1: Memory cache (fast, but volatile)
> const memoryCache = new LRUCache({ maxSize: 100 });
>
> // Level 2: Persistent cache (slower, but durable)
> const diskCache = new PersistentCache({ path: "./cache" });
> ```
>
> This provides both performance benefits and persistence across sessions.
````

## Content Length Guidelines

### Entry Length

- **Short entries (recommended)**: 1-15 words
- **Medium entries**: 16-30 words
- **Long entries (use sparingly)**: 31+ words

Most entries should be short and to the point. Use longer entries only for complex changes that require explanation.

### Section Size

Aim for balance in your changelog sections:

- Very small releases: 1-3 entries per category
- Typical releases: 3-7 entries per category
- Large releases: Consider grouping related items or using sub-categories

## Language Style Guide

### Capitalization

- Start each entry with a capital letter
- Use proper nouns as appropriate (e.g., "React", "TypeScript")
- Don't use ALL CAPS (except for acronyms)

### Punctuation

- Don't end bullet points with periods
- Use commas and semicolons as needed for clarity
- Use parentheses for references and additional context

### Terminology

- Be consistent with technical terms
- Define acronyms on first use if your audience may not be familiar
- Use the same terms that appear in your UI and documentation

## Examples by Change Type

### Added Changes

```markdown
### Added 🎉

- Add export to PDF functionality
- Add dark mode support
- Add keyboard shortcuts for common actions
- Add Spanish language support
```

### Changed Changes

```markdown
### Changed 🔄

- Improve performance of search algorithm by 50%
- Update UI design for better mobile experience
- Change authentication flow to use JWT tokens
- Reorganize settings menu for better usability
```

### Deprecated Changes

```markdown
### Deprecated ⚠️

- Deprecate `legacy_api_call()` method, use `newApiCall()` instead
- Deprecate XML output format, will be removed in v3.0
- Deprecate manual configuration, use the new configuration wizard
```

### Removed Changes

```markdown
### Removed 🗑️

- Remove deprecated v1 API endpoints
- Remove support for Internet Explorer
- Remove unused legacy code from core module
```

### Fixed Changes

```markdown
### Fixed 🐛

- Fix crash when uploading large images
- Fix incorrect calculation in monthly reports
- Fix typos in user interface text
- Fix memory leak in background processing
```

### Security Changes

```markdown
### Security 🔒

- Update dependencies to address CVE-2023-12345
- Fix authentication bypass vulnerability
- Implement Content Security Policy
- Strengthen password hashing algorithm
```

## Special Case: Breaking Changes

For breaking changes (those requiring a MAJOR version increment), consider adding a dedicated section:

```markdown
## [2.0.0] - 2024-05-15

### Breaking Changes 💥

- Change authentication API to use token-based auth
- Remove support for legacy browsers
- Rename primary configuration methods

### Added 🎉

...
```

## Checklist Before Publishing

Before finalizing your changelog entries, check that they:

- [ ] Are categorized correctly
- [ ] Use active voice and present tense
- [ ] Are specific and clear
- [ ] Include relevant references (PRs, issues)
- [ ] Acknowledge external contributors
- [ ] Highlight breaking changes appropriately
- [ ] Are free of spelling and grammatical errors
- [ ] Provide useful information to the reader
