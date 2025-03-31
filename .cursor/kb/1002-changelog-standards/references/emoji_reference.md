# Emoji Reference Guide for Changelogs

This reference provides a standardized set of emojis to use in CHANGELOG.md files to enhance readability and visual categorization.

## Standard Change Categories

| Change Type | Emoji | Unicode | Description                                        |
| ----------- | ----- | ------- | -------------------------------------------------- |
| Added       | 🎉    | U+1F389 | New features or capabilities                       |
| Changed     | 🔄    | U+1F504 | Changes to existing functionality                  |
| Deprecated  | ⚠️    | U+26A0  | Features that will be removed in upcoming releases |
| Removed     | 🗑️    | U+1F5D1 | Features that were removed                         |
| Fixed       | 🐛    | U+1F41B | Bug fixes                                          |
| Security    | 🔒    | U+1F512 | Security-related changes                           |
| Technical   | 🔧    | U+1F527 | Implementation details, refactoring, performance   |

## Additional Status Indicators

| Status               | Emoji | Unicode | Usage                                        |
| -------------------- | ----- | ------- | -------------------------------------------- |
| Breaking Change      | 💥    | U+1F4A5 | Major version changes with incompatibilities |
| Planned              | 🔮    | U+1F52E | Upcoming features in planning                |
| In Progress          | 🚧    | U+1F6A7 | Features currently being developed           |
| Known Issue          | ⚡    | U+26A1  | Known limitations or issues                  |
| Performance          | ⚡    | U+26A1  | Performance improvements                     |
| Documentation        | 📚    | U+1F4DA | Documentation updates                        |
| Dependencies         | 📦    | U+1F4E6 | Dependency updates                           |
| Tests                | ✅    | U+2705  | Test-related changes                         |
| Accessibility        | ♿    | U+267F  | Accessibility improvements                   |
| Internationalization | 🌐    | U+1F310 | Translations or localization changes         |

## Notes/Highlights

| Purpose        | Emoji | Unicode | Usage                            |
| -------------- | ----- | ------- | -------------------------------- |
| Note           | ℹ️    | U+2139  | General information              |
| Important Note | ❗    | U+2757  | Important information            |
| Warning        | ⚠️    | U+26A0  | Warnings or cautions             |
| Implementation | 💡    | U+1F4A1 | Implementation notes or examples |
| Example        | 🔍    | U+1F50D | Examples of usage                |

## Platform/Environment Specific

| Platform  | Emoji | Unicode | Usage                           |
| --------- | ----- | ------- | ------------------------------- |
| iOS/Apple | 🍎    | U+1F34E | iOS-specific changes            |
| Android   | 🤖    | U+1F916 | Android-specific changes        |
| Web       | 🌐    | U+1F310 | Web-specific changes            |
| Desktop   | 🖥️    | U+1F5A5 | Desktop app changes             |
| Mobile    | 📱    | U+1F4F1 | Mobile-specific changes         |
| Database  | 💾    | U+1F4BE | Database-related changes        |
| Cloud     | ☁️    | U+2601  | Cloud or server-related changes |
| API       | 🔌    | U+1F50C | API-related changes             |

## Feature Areas

| Feature Area  | Emoji | Unicode | Usage                                         |
| ------------- | ----- | ------- | --------------------------------------------- |
| UI/UX         | 🎨    | U+1F3A8 | User interface or experience changes          |
| Auth          | 🔐    | U+1F510 | Authentication or authorization changes       |
| Data          | 📊    | U+1F4CA | Data handling, storage, or analysis           |
| Config        | ⚙️    | U+2699  | Configuration-related changes                 |
| Search        | 🔍    | U+1F50D | Search functionality                          |
| Media         | 🎬    | U+1F3AC | Media-related features (audio, video, images) |
| Export/Import | 📤    | U+1F4E4 | Data import/export features                   |
| Calendar      | 📅    | U+1F4C5 | Date or calendar-related features             |
| Communication | 💬    | U+1F4AC | Communication features (chat, comments, etc.) |

## Usage Guidelines

1. **Consistency**: Use emojis consistently throughout your changelog
2. **Placement**: Place emojis at the end of headlines or at the beginning of the relevant section
3. **Spacing**: Always include a space after an emoji in a heading
4. **Moderation**: Avoid using too many emojis in a single entry to maintain readability
5. **Accessibility**: Remember that emojis may not be accessible to all users; they should enhance text, not replace it

## Example Usage

```markdown
## [1.2.0] - 2024-05-15

### Added 🎉

- Add PDF export functionality
- Add support for dark mode

### Fixed 🐛

- Fix memory leak in image processing

### Technical Details 🔧

> 💡 **Implementation Notes**
> The dark mode implementation uses a system-wide preference detection.
```

## Alternative Emoji Usage Styles

### Style 1: Emoji at section start

```markdown
### 🎉 Added

- New feature X
```

### Style 2: Emoji at entry level

```markdown
### Added

- 🎉 New feature X
- 🔧 Internal refactoring of module Y
```

### Style 3: Minimal emoji use (section level only)

```markdown
### Added 🎉

### Changed ��

### Fixed 🐛
```
