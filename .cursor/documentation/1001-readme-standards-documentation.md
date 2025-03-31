# README Standards Documentation

## Summary

The README Standards rule provides a comprehensive framework for creating and maintaining high-quality README.md files that effectively document projects. It ensures READMEs are complete, clear, and user-focused, with standardized structure and formatting.

## Fundamental Concepts

### README Purpose

A README serves as the primary entry point to a project, allowing users to understand what the project does, how to use it, and how to contribute. It should provide comprehensive information while maintaining readability and usability.

### User-Centric Documentation

The rule emphasizes focusing on the needs of users rather than developers, presenting information in a logical progression from basic to advanced, and providing visual cues to enhance comprehension.

### Progressive Disclosure

Information is structured from most critical to least critical, ensuring users can quickly find what they need without being overwhelmed by details.

## Principles

### Primary Goals

- **Completeness**: Ensure all necessary information is included
- **Clarity**: Present information in an understandable manner
- **Usability**: Make the document easy to navigate and use

### Design Principles

- **User-Centric**: Focus on user needs over developer convenience
- **Progressive Disclosure**: Present critical information first
- **Structure Consistency**: Maintain logical organization
- **Visual Hierarchy**: Use formatting to emphasize important elements
- **Completeness**: Cover all required aspects of the project

## Processes

### Project Analysis Process

1. Determine project type (web app, library, CLI tool, API)
2. Identify key features and functionalities
3. Review existing documentation
4. Recommend appropriate structure based on project type

### README Creation Process

1. Structure core sections (title, badges, introduction, etc.)
2. Add detailed sections based on project type
3. Enhance readability with proper formatting
4. Finalize with completeness check and metadata

### README Update Process

1. Analyze code changes to identify affected documentation
2. Identify sections requiring updates
3. Implement updates while maintaining overall structure
4. Validate updates for accuracy and formatting

### Validation Process

1. Check structure against requirements
2. Validate content accuracy and completeness
3. Verify proper markdown formatting
4. Ensure all links are functional

## Architecture

### Knowledge Base Structure

- Guidelines for README structure and formatting
- Example templates for different project types
- Reference information for badges and formatting
- Good and bad examples for learning

### Cognitive Framework

- Analysis operators for project assessment
- Creation and update operators for README management
- Validation operators for quality assurance

### LLM Integration

- README Analyzer for project assessment and gap detection
- README Generator for content creation and formatting

## Delegates

### LLM README Analyzer

- Analyzes project characteristics to determine documentation needs
- Recommends appropriate README structure
- Identifies documentation gaps

### LLM README Generator

- Generates README content based on project analysis
- Applies proper markdown formatting
- Creates appropriate code examples and usage instructions

## Examples

### Good README Example

````markdown
# Project Name

[![Build Status](https://shields-url)](https://build-url)
[![License](https://shields-url)](https://license-url)

A clear description of what the project does and the problem it solves.

## Features

- Feature 1: Description
- Feature 2: Description

## Installation

```bash
npm install project-name
```
````

## Usage

```javascript
const project = require("project-name");
project.doSomething();
```

## License

MIT

````

### Bad README Example
```markdown
# my-project

download and run npm i

use it like this:
doStuff()
````

## Guidelines

The rule provides detailed guidelines for:

- Structure based on project type
- Proper markdown formatting
- Badge usage and recommendations
- Code block formatting
- Table formatting
- Image inclusion and optimization

## Checklist

When creating or updating a README, ensure:

- [ ] Clear title and concise description
- [ ] Appropriate status badges
- [ ] Feature list with brief descriptions
- [ ] Installation instructions with prerequisites
- [ ] Basic usage examples with code samples
- [ ] License information
- [ ] Proper heading hierarchy
- [ ] Syntax highlighting in code blocks
- [ ] Working links (internal and external)
- [ ] No sensitive information included
- [ ] Images have alt text and reasonable sizes
- [ ] Table of contents for longer READMEs
