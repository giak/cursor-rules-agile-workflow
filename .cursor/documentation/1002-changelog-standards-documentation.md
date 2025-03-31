# Documentation de la Règle Standards pour les CHANGELOG

> **Version**: 1.0.0  
> **Status**: Active  
> **Certification**: Certifiée  
> **Dernière mise à jour**: 2024-03-31

## 📋 Résumé

La règle `1002-changelog-standards.mdc` définit des standards pour la création et la maintenance des fichiers CHANGELOG, assurant une documentation claire et cohérente de l'évolution des projets. Elle établit une méthodologie complète pour maintenir un historique des changements organisé et informatif. Cette règle met l'accent sur la clarté, la chronologie, l'exhaustivité et la cohérence des informations présentées.

| Aspect               | Description                                                                         |
| -------------------- | ----------------------------------------------------------------------------------- |
| **Objectif**         | Standardiser le format et les pratiques de maintenance des CHANGELOG                |
| **Applicabilité**    | S'applique à tous les fichiers `CHANGELOG.md`                                       |
| **Principe central** | Versionnement sémantique + catégorisation des changements + organisation temporelle |
| **Format**           | Markdown avec sections structurées et visuellement améliorées                       |
| **Prérequis**        | Comprendre les principes du versionnement sémantique                                |

## 🧠 Concepts Fondamentaux

### Qu'est-ce qu'un CHANGELOG?

Un CHANGELOG est un fichier qui répertorie chronologiquement les modifications notables apportées à un projet. Contrairement aux journaux de commits Git, un CHANGELOG est spécifiquement conçu pour les utilisateurs et contributeurs du projet, mettant en évidence les changements significatifs de manière accessible et structurée.

### Pourquoi les standards de CHANGELOG sont importants

Un CHANGELOG bien structuré et maintenu est essentiel pour:

- Faciliter la compréhension des évolutions du projet pour les utilisateurs
- Documenter les changements majeurs, mineurs et correctifs de manière cohérente
- Permettre aux développeurs de comprendre les implications des mises à jour
- Servir d'historique fiable de l'évolution du projet
- Fournir un contexte pour les migrations et mises à niveau

### Principes fondamentaux

- **Versionnement sémantique (SemVer)**: Structure de version MAJOR.MINOR.PATCH qui communique la nature des changements
- **Organisation chronologique inversée**: Les versions les plus récentes apparaissent en premier
- **Catégorisation des changements**: Organisation des modifications par types (ajouts, modifications, suppressions, etc.)
- **Orientation utilisateur**: Contenu écrit pour être compréhensible par les humains, pas seulement par les machines

## 🔍 Principes de Base

La règle définit plusieurs principes fondamentaux pour les CHANGELOG:

### Objectifs Primaires

| Objectif     | Description                                   | Priorité |
| ------------ | --------------------------------------------- | -------- |
| Clarté       | Communiquer clairement les changements        | Maximale |
| Chronologie  | Maintenir un ordre chronologique inverse      | Haute    |
| Exhaustivité | Documenter tous les changements significatifs | Haute    |
| Cohérence    | Suivre un format établi                       | Moyenne  |

### Principes de Conception

| Principe               | Description                                    | Bénéfice                                     |
| ---------------------- | ---------------------------------------------- | -------------------------------------------- |
| Lisibilité humaine     | Écrire pour les humains, pas les machines      | Meilleure compréhension par les utilisateurs |
| Contenu structuré      | Regrouper par type de changement               | Organisation catégorielle plus claire        |
| Focus sur les versions | Mettre l'accent sur les changements de version | Adoption du versionnement sémantique         |
| Reconnaissance         | Créditer les contributeurs                     | Favoriser la communauté                      |
| Historique traçable    | Établir des liens entre les versions           | Faciliter la comparaison                     |

## 📊 Processus Cognitifs

La règle implémente les processus cognitifs suivants:

### Processus d'Analyse des Changements

```
↹ Ω•analyze•project•changes [p=1] -> (
  categorize•changes(
    scan_commits: identify_changes_since_last_version | for: completeness,
    classify_types: sort_into_added_changed_fixed_etc | ref: kb•changelog•standards.content_guide,
    evaluate_impact: determine_semver_change_type | ref: kb•changelog•standards.semver_guide
  )
  → identify•affected•components(
    map_changes_to_modules: link_changes_to_specific_parts | for: context,
    detect_breaking_changes: flag_api_or_behavior_changes | for: semver_major,
    track_deprecations: note_deprecated_features | for: future_planning
  )
  → determine•version•increment(
    apply_semver_rules: decide_version_number_change | ref: kb•changelog•standards.versioning_guide,
    check_prereleases: handle_alpha_beta_rc_versions | if: applicable,
    validate_sequence: ensure_logical_version_progression | for: consistency
  )
)
```

Ce processus analyse les changements du projet en:

1. Catégorisant les modifications selon leur type (ajout, modification, correction, etc.)
2. Identifiant les composants affectés et les changements majeurs (breaking changes)
3. Déterminant l'incrément de version approprié selon les règles du versionnement sémantique

### Processus de Création de CHANGELOG

```
↹ Ω•create•changelog [p=1] -> [
  ⊕ setup•structure {
    create_frontmatter: add_metadata_header | ref: kb•changelog•standards.structure_guide,
    add_introduction: explain_changelog_purpose | with: standard_references,
    setup_unreleased: create_unreleased_section | for: ongoing_development,
    prepare_version_sections: create_version_headings | with: dates
  }

  ⊕ document•changes {
    organize_by_category: group_changes_by_type | ref: kb•changelog•standards.content_guide,
    write_entries: describe_each_change_clearly | principle: specific_and_concise,
    reference_issues: link_to_tickets_and_prs | for: traceability,
    credit_contributors: mention_authors_of_changes | for: recognition
  }

  ⊕ enhance•readability {
    add_visual_elements: include_emojis_and_formatting | ref: kb•changelog•standards.visual_guide,
    include_technical_details: add_code_examples_for_context | when: beneficial,
    create_diagrams: visualize_complex_changes | for: clarity,
    format_consistently: ensure_uniform_styling | throughout: document
  }

  ⊕ finalize•documentation {
    add_version_links: link_to_comparison_views | ref: kb•changelog•standards.structure_guide,
    validate_content: ensure_all_changes_documented | for: completeness,
    proofread: check_grammar_and_clarity | for: quality,
    update_dates: ensure_accurate_release_dates | format: ISO8601
  }
]
```

Ce processus guide la création d'un CHANGELOG en:

1. Établissant la structure de base avec frontmatter, introduction et sections
2. Documentant les changements par catégorie avec descriptions claires
3. Améliorant la lisibilité avec des éléments visuels et formatage
4. Finalisant le document avec liens de comparaison et validation de contenu

### Processus de Mise à Jour de CHANGELOG

```
↹ Ω•update•changelog [p=1] -> (
  prepare•for•update(
    identify_new_changes: collect_changes_since_last_entry | from: commits_and_prs,
    move_from_unreleased: transfer_completed_features | to: new_version_section,
    determine_version_number: apply_semver_rules | ref: Ω•analyze•project•changes
  )
  → create•new•version(
    add_version_header: insert_new_version_with_date | at: top_of_versions,
    setup_categories: create_change_type_sections | ref: kb•changelog•standards.structure_guide,
    populate_entries: add_all_identified_changes | with: clear_descriptions
  )
  → enhance•and•validate(
    review_formatting: ensure_consistent_style | across: entire_document,
    update_comparison_links: refresh_version_comparison_urls | at: document_bottom,
    verify_completeness: check_all_significant_changes_included | for: accuracy
  )
)
```

Ce processus gère la mise à jour d'un CHANGELOG existant en:

1. Préparant la mise à jour en identifiant les nouveaux changements
2. Créant une nouvelle section de version avec les modifications catégorisées
3. Améliorant et validant le document pour maintenir cohérence et précision

### Processus de Validation

```
↹ Ω.validate [p=1] -> (
  check•structure(
    has_frontmatter: verify_metadata_present | ref: kb•changelog•standards.structure_guide,
    has_introduction: check_for_standard_references | for: context,
    has_categories: ensure_change_types_organized | for: readability,
    has_version_links: verify_comparison_links_present | for: traceability
  )
  → validate•content(
    clarity: ensure_descriptions_are_clear | principle: human_readable,
    specificity: each_entry_describes_what_and_why | not: vague_statements,
    consistency: use_of_present_tense_and_active_voice | throughout: document,
    completeness: all_significant_changes_documented | for: transparency
  )
  → verify•versioning(
    semver_compliance: version_numbers_follow_semver | ref: kb•changelog•standards.versioning_guide,
    date_format: dates_use_iso8601 | format: YYYY-MM-DD,
    chronological_order: newest_versions_first | for: usability
  )
  → check•enhancements(
    visual_elements: appropriate_use_of_emojis_and_formatting | for: readability,
    technical_details: implementation_examples_when_relevant | for: context,
    contributor_recognition: contributors_credited_appropriately | for: community
  )
)
```

Ce processus valide la structure et le contenu d'un CHANGELOG en:

1. Vérifiant la présence des éléments structurels requis
2. Validant la qualité et la clarté du contenu
3. Vérifiant la conformité du versionnement et du format des dates
4. Contrôlant l'utilisation appropriée des éléments d'amélioration visuelle

## 🏗️ Architecture

La base de connaissances de la règle est structurée comme suit:

```
.cursor/kb/1002-changelog-standards/
├── guidelines/
│   ├── structure_guide.md           # Guide de structure et d'organisation
│   ├── versioning_guide.md          # Guide de versionnement sémantique
│   ├── content_guide.md             # Guide de rédaction du contenu
│   ├── visual_guide.md              # Guide d'enrichissement visuel
│   └── maintenance_guide.md         # Guide de maintenance du CHANGELOG
├── examples/
│   ├── good_examples.md             # Exemples de bonnes pratiques
│   └── bad_examples.md              # Exemples de mauvaises pratiques
├── templates/
│   ├── basic_changelog.md           # Template basique
│   ├── detailed_changelog.md        # Template détaillé
│   ├── library_changelog.md         # Template pour bibliothèques
│   └── application_changelog.md     # Template pour applications
└── references/
    ├── semantic_versioning.md       # Référence sur le versionnement sémantique
    └── emoji_reference.md           # Référence pour les émojis
```

### Fichiers Clés et Leur Objectif

| Fichier                | Objectif                                                 |
| ---------------------- | -------------------------------------------------------- |
| `structure_guide.md`   | Fournit les recommandations structurelles pour CHANGELOG |
| `versioning_guide.md`  | Explique les principes du versionnement sémantique       |
| `content_guide.md`     | Guide la rédaction des entrées de CHANGELOG              |
| `visual_guide.md`      | Détaille l'amélioration visuelle des CHANGELOG           |
| `maintenance_guide.md` | Guide les pratiques de mise à jour et maintenance        |
| `good_examples.md`     | Montre des exemples de bonnes pratiques                  |
| `bad_examples.md`      | Illustre les erreurs communes à éviter                   |
| `basic_changelog.md`   | Fournit un template simple pour commencer                |
| `emoji_reference.md`   | Standardise l'utilisation des émojis dans les CHANGELOG  |

## 🤖 Délégations LLM

La règle délègue certaines responsabilités au LLM à travers des rôles définis:

### Analyseur de CHANGELOG

```
↹ LLM•changelog•analyzer [p=1] {
  ⊕ roles {
    change_classifier: categorize_changes_by_type | focus: accurate_classification,
    semver_advisor: determine_appropriate_version_bump | focus: semantic_versioning_rules,
    structure_evaluator: assess_changelog_organization | focus: standard_compliance
  }

  ⊕ inputs {
    current_changelog: existing_changelog_if_any | for: structure_analysis,
    recent_commits: changes_since_last_version | for: change_identification,
    project_context: type_and_scope_of_project | for: relevance_assessment
  }

  ⊕ outputs {
    change_categorization: changes_grouped_by_type | with: descriptions,
    version_recommendation: suggested_version_number | with: justification,
    structure_assessment: evaluation_of_current_format | with: improvement_suggestions
  }
}
```

Le LLM assume les rôles suivants:

1. **Classificateur de changements**: Catégorise les modifications par type (ajout, modification, correction, etc.)
2. **Conseiller SemVer**: Détermine l'incrémentation de version appropriée selon les règles du versionnement sémantique
3. **Évaluateur de structure**: Évalue l'organisation du CHANGELOG par rapport aux standards

### Générateur de CHANGELOG

```
↹ LLM•changelog•generator [p=1] {
  ⊕ roles {
    content_creator: generate_changelog_entries | focus: clarity_and_specificity,
    formatter: apply_standard_formatting | focus: consistency_and_readability,
    technical_writer: explain_complex_changes | focus: accessibility_to_users
  }

  ⊕ inputs {
    change_details: information_about_changes | from: commits_issues_prs,
    project_type: nature_of_the_project | for: appropriate_detail_level,
    audience: primary_readers_of_changelog | for: terminology_adjustment
  }

  ⊕ outputs {
    changelog_entries: well_formatted_change_descriptions | with: categorization,
    version_section: complete_version_entry | with: date_and_links,
    visual_enhancements: suggested_diagrams_or_examples | for: complex_changes
  }

  ⊕ constraints {
    maintain_human_focus: prioritize_clarity_over_technical_detail | for: general_audience,
    be_specific: avoid_vague_descriptions | priority: high,
    preserve_history: never_alter_previous_versions | only: add_or_update_current
  }
}
```

Le LLM assume les rôles suivants:

1. **Créateur de contenu**: Génère des entrées de CHANGELOG claires et spécifiques
2. **Formateur**: Applique un formatage standard pour la cohérence et la lisibilité
3. **Rédacteur technique**: Explique les changements complexes de manière accessible

## 📝 Exemples

### Exemple de structure de base d'un CHANGELOG conforme

```markdown
---
title: Nom du Projet - Changelog
author: Organisation/Équipe
date: YYYY-MM-DD
status: maintenu
version: X.Y.Z
---

# Changelog

> ℹ️ **Note:** Ce fichier suit les recommandations de [Keep a Changelog](https://keepachangelog.com/) et adhère au [Versionnement Sémantique](https://semver.org/).

## [Non Publié]

### Fonctionnalités Prévues 🔮

- Fonctionnalité A à venir
- Fonctionnalité B en développement

### En Cours 🚧

- Implémentation de la fonctionnalité C

## [1.2.0] - 2024-05-20

### Ajouté 🎉

- Ajout de la fonctionnalité X qui permet aux utilisateurs de faire Y
- Ajout du support pour la plateforme Z

### Changé 🔄

- Amélioration des performances de traitement de données de 30%
- Mise à jour de l'interface utilisateur pour une meilleure expérience mobile

### Déprécié ⚠️

- Dépréciation de la méthode `oldMethod()`, utiliser `newMethod()` à la place

### Sécurité 🔒

- Mise à jour des dépendances pour résoudre des vulnérabilités

## [1.1.0] - 2024-04-15

### Ajouté 🎉

- Fonctionnalité A
- Fonctionnalité B

### Corrigé 🐛

- Correction du problème X
- Correction du problème Y

[Non Publié]: https://github.com/utilisateur/projet/compare/v1.2.0...HEAD
[1.2.0]: https://github.com/utilisateur/projet/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/utilisateur/projet/compare/v1.0.0...v1.1.0
```

### Exemple d'utilisation du versionnement sémantique

| Type de changement                           | Incrémentation        | Exemple       |
| -------------------------------------------- | --------------------- | ------------- |
| Changements incompatibles (breaking changes) | MAJEUR (X.0.0)        | 1.0.0 → 2.0.0 |
| Ajout de fonctionnalités rétro-compatibles   | MINEUR (X.Y.0)        | 1.0.0 → 1.1.0 |
| Corrections de bugs rétro-compatibles        | CORRECTIF (X.Y.Z)     | 1.1.0 → 1.1.1 |
| Versions de pré-publication                  | Suffixe d'identifiant | 2.0.0-alpha.1 |

## ✅ Liste de Contrôle

Utilisez cette liste pour valider votre CHANGELOG:

- [ ] Structure de base

  - [ ] Frontmatter avec métadonnées
  - [ ] Introduction avec références aux standards
  - [ ] Section "Non Publié" pour les changements à venir
  - [ ] Sections de version organisées chronologiquement (plus récente en premier)
  - [ ] Liens de comparaison entre versions

- [ ] Formatage du contenu

  - [ ] Changements regroupés par catégorie (Ajouté, Changé, Déprécié, etc.)
  - [ ] Description claire de chaque changement (quoi et pourquoi)
  - [ ] Utilisation du temps présent et voix active
  - [ ] Format cohérent pour les entrées

- [ ] Versionnement

  - [ ] Numéros de version suivant le format MAJEUR.MINEUR.CORRECTIF
  - [ ] Dates au format ISO 8601 (YYYY-MM-DD)
  - [ ] Incrémentation de version appropriée selon le type de changement

- [ ] Enrichissements
  - [ ] Utilisation appropriée des émojis pour les catégories
  - [ ] Reconnaissance des contributeurs le cas échéant
  - [ ] Détails techniques pour les changements complexes si nécessaire
  - [ ] Références aux tickets/PR quand applicable

Cette règle vous aide à maintenir un CHANGELOG clair, structuré et utile qui communique efficacement l'évolution de votre projet à vos utilisateurs et contributeurs.
