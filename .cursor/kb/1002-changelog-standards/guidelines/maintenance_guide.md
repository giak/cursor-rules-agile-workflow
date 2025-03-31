# CHANGELOG Maintenance Guide

This guide outlines best practices for maintaining your CHANGELOG.md file throughout the development lifecycle.

## Ongoing Maintenance

### The Unreleased Section

Always maintain an "Unreleased" section at the top of your changelog. This section serves several important purposes:

1. **Documentation as you go**: Record changes as they're made, not just at release time
2. **Transparency**: Show stakeholders what's coming in the next version
3. **Release preparation**: Make releases easier by having changes already documented
4. **Planning**: Help organize and track the scope of upcoming releases

```markdown
## [Unreleased]

### Added 🎉

- Add French localization
- Add export to CSV functionality

### Fixed 🐛

- Fix memory leak in image processing
```

### When to Update

Update your changelog in these situations:

1. **As you develop**: Add entries to the Unreleased section as you implement changes
2. **During code review**: Ensure PR/MRs include appropriate changelog entries
3. **Before releases**: Convert the Unreleased section to a versioned release
4. **After releases**: Create a new empty Unreleased section
5. **When planning**: Add planned features to track upcoming work

## Release Workflow

### Pre-Release Checklist

Before finalizing a release, verify that your changelog:

- [ ] Includes all significant changes since the last release
- [ ] Categorizes changes appropriately
- [ ] Has clear, specific descriptions
- [ ] Follows consistent formatting
- [ ] Includes relevant issue/PR references
- [ ] Credits contributors when appropriate
- [ ] Has been proofread for errors

### Release Process

1. **Determine version number**:

   - Apply semantic versioning rules
   - Consider the impact of changes on version number

2. **Convert Unreleased to version**:

   - Rename the "Unreleased" heading to your version number with date
   - Example: `## [1.2.0] - 2024-05-15`

3. **Update version links**:

   - Add a comparison link for the new version
   - Update the Unreleased link to compare with the new version

   ```markdown
   [Unreleased]: https://github.com/username/project/compare/v1.2.0...HEAD
   [1.2.0]: https://github.com/username/project/compare/v1.1.0...v1.2.0
   ```

4. **Add new Unreleased section**:
   - Create a fresh Unreleased section at the top

### Post-Release

After releasing, immediately:

1. Create a new empty Unreleased section
2. Update the Unreleased comparison link
3. Commit these changes to the repository

## Integration with Development Workflow

### With Pull Requests / Merge Requests

Integrate changelog updates into your PR/MR workflow:

1. **Require changelog updates**:

   - Include changelog requirements in PR templates
   - Review changelog entries during code review

2. **Example PR template section**:

   ```markdown
   ## Changelog

   <!-- Please add an entry to the "Unreleased" section of the CHANGELOG.md file -->

   - [ ] I have added an appropriate entry to the Unreleased section of the changelog
   ```

### With Automated Tools

Consider using tools to help maintain your changelog:

1. **Changelog linters**: Validate formatting and structure
2. **Changelog generators**: Help generate entries from commit messages or PRs
3. **Release automation**: Automate version number updates and date stamping

Note: Automated tools should assist the process, not replace human curation.

## Multi-Contributor Projects

For projects with multiple contributors:

1. **Clear guidelines**: Document your changelog standards
2. **Templates**: Provide templates for changelog entries
3. **Reviews**: Include changelog updates in code reviews
4. **Attribution**: Credit contributors consistently

### Handling Conflicting Updates

When multiple contributors modify the changelog simultaneously:

1. **Separate sections**: Organize the Unreleased section by category
2. **Line separation**: Put each entry on its own line
3. **Merge resolution**: Merge entries logically during conflict resolution
4. **Final review**: Review for duplicates or contradictions before release

## Long-Term Maintenance

### Handling Long Changelogs

For mature projects with extensive change history:

1. **Retain recent versions**: Keep the most recent 10-20 versions in the main changelog
2. **Archive older versions**: Move older versions to a separate file
   - Example: `CHANGELOG.archive.md` or `changelogs/archive.md`
3. **Link to archive**: Reference the archive file from the main changelog

```markdown
# Changelog

All notable changes to this project will be documented in this file.
Older releases (v1.0.0 and earlier) are documented in [CHANGELOG.archive.md](CHANGELOG.archive.md).

## [Unreleased]

...
```

### Annual/Major Version Archives

For very active projects, consider creating annual or major version archives:

- `changelogs/v1.md` - All v1.x.x releases
- `changelogs/v2.md` - All v2.x.x releases
- `changelogs/2023.md` - All releases from 2023

## Special Scenarios

### Handling Hotfixes

For emergency bug fixes that need immediate release:

1. **Create the fix**: Implement and test the fix
2. **Update changelog directly**: Add a new version section
3. **Use appropriate version**: Typically a patch increment
4. **Note the hotfix**: Consider marking it as a hotfix

```markdown
## [1.2.1] - 2024-05-16 🚨 Hotfix

### Fixed 🐛

- Fix critical security vulnerability in authentication module
```

### Managing Multiple Release Channels

For projects with multiple release channels (stable, beta, etc.):

1. **Clear versioning**: Use pre-release identifiers consistently
   - Example: `1.2.0-beta.1`, `1.2.0-rc.1`
2. **Channel indicators**: Consider noting the channel
   - Example: `## [1.2.0-beta.1] - 2024-05-01 (Beta Channel)`
3. **Consistent promotion**: When promoting from beta to stable, copy relevant entries

### Backported Changes

For changes backported to earlier versions:

1. **Note the backport**: Clearly indicate it's a backport
2. **Reference original version**: Mention where it was first introduced

```markdown
## [1.1.5] - 2024-05-15

### Security 🔒

- Backport: Fix authentication vulnerability (from v2.0.0)
```

## Regular Audits

Periodically audit your changelog to ensure it remains useful:

1. **Quarterly review**: Verify accuracy and completeness
2. **Format consistency**: Check for consistent formatting
3. **Link validation**: Verify that version comparison links work
4. **Entry quality**: Ensure entries are clear and specific
5. **User focus**: Confirm the changelog serves user needs

## Checklist for Perfect Maintenance

- [ ] Maintain an Unreleased section at all times
- [ ] Update entries as changes are developed
- [ ] Follow semantic versioning principles for releases
- [ ] Include the date with each released version
- [ ] Add version comparison links for all versions
- [ ] Create a new Unreleased section immediately after each release
- [ ] Review the entire changelog before major releases
- [ ] Archive older versions when the changelog becomes too long
- [ ] Integrate changelog updates into your development workflow
- [ ] Periodically audit for quality and consistency
