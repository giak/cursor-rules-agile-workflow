# Documentation Templates for Cursor Rules
# Version 1.0.0
# This file provides templates for generating documentation for Cursor rules.

## Rule Documentation Template

```markdown
# {{rule_id}} - Documentation

## Overview

{{rule_description}}

## Usage

{{usage_instructions}}

### Input
{{input_schema}}

### Output
{{output_schema}}

## Dependencies

{{#each dependencies}}
- {{this}}
{{/each}}

## Knowledge Base Ecosystem

{{#each kb_artifacts}}
- **{{this.file_path}}**: {{this.kb_purpose}}
{{/each}}

## Implementation Details

{{implementation_details}}

## Examples

{{examples}}
```

## Quick Reference Template

```markdown
# {{rule_id}} - Quick Reference

## Purpose
{{rule_description}}

## Key Operations
{{#each operations}}
- **{{this.name}}**: {{this.description}}
{{/each}}

## Usage Example
```code
{{usage_example}}
```
``` 