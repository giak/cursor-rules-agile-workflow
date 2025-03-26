# Guide Visuel - Document Fondation de Projet (PFD)

Ce guide visuel est un complément à la documentation principale de la règle `@5000-workflow-foundation-document-pfd.mdc`. Il vise à fournir une représentation visuelle des structures, relations et flux de travail pour créer des Documents Fondation de Projet efficaces.

## Structure Globale d'un PFD

```mermaid
graph TD
    A[Document Fondation de Projet] --> B[Frontmatter\nMétadonnées]
    A --> C[Table des Matières]
    A --> D[Sections Principales]
    A --> E[Annexes]

    D --> D1[Introduction]
    D --> D2[Vision]
    D --> D3[Vision Technique]
    D --> D4[Aperçu]
    D --> D5[Exigences]
    D --> D6[Architecture]
    D --> D7[Approche Technique]
    D --> D8[Planification]
    D --> D9[KPIs]
    D --> D10[Stratégie de Test]
    D --> D11[Opérations]
    D --> D12[Développement]

    E --> E1[Références]
    E --> E2[Spécifications Détaillées]
    E --> E3[Artefacts]
```

## Triade Documentaire et Flux Agile

```mermaid
graph TD
    PFD[Document Fondation de Projet\nPFD] --> PRD[Document d'Exigences Produit\nPRD]
    PFD --> ARCH[Document d'Architecture\nARCH]

    PRD --> EPIC[Epics]
    ARCH --> EPIC

    EPIC --> STORY[Stories]
    STORY --> IMPL[Implémentation]

    IMPL -- Feedback --> STORY
    STORY -- Feedback --> PRD
    PRD -- Changements majeurs --> PFD
    IMPL -- Découvertes techniques --> ARCH
    ARCH -- Contraintes techniques --> PRD

    style PFD fill:#ff9900,stroke:#333,stroke-width:2px
    style PRD fill:#66cc99,stroke:#333,stroke-width:2px
    style ARCH fill:#6699ff,stroke:#333,stroke-width:2px
    style EPIC fill:#cc99ff,stroke:#333,stroke-width:2px
    style STORY fill:#ff99cc,stroke:#333,stroke-width:2px
    style IMPL fill:#ffcc66,stroke:#333,stroke-width:2px
```

## Organisation des Documents Agiles

```mermaid
graph TD
    ROOT[Racine du Projet] --> AI[.ai/]
    ROOT --> DOCS[docs/]

    DOCS --> DF[foundation/]
    DF --> PFD[pfd.md]

    AI --> PRD[prd.md]
    AI --> ARCH[arch.md]
    AI --> E1[epic-1/]
    AI --> E2[epic-2/]

    E1 --> S11[1-feature-one.story.md]
    E1 --> S12[2-feature-two.story.md]
    E2 --> S21[1-feature-three.story.md]

    style AI fill:#f9f9f9,stroke:#333,stroke-width:2px
    style PFD fill:#ff9900,stroke:#333,stroke-width:2px
    style PRD fill:#66cc99,stroke:#333,stroke-width:2px
    style ARCH fill:#6699ff,stroke:#333,stroke-width:2px
```

## Relation Entre les Sections Clés

```mermaid
graph LR
    A[Vision & Objectifs] --> B[Exigences]
    B --> C[Architecture]
    C --> D[Approche Technique]
    D --> E[Planification]

    A -.-> C
    A -.-> E
    B -.-> E
    B -.-> F[KPIs]
    C -.-> G[Stratégie de Test]
    D -.-> G
    D -.-> H[Opérations]
    E -.-> H
```

## Processus de Création du PFD

```mermaid
sequenceDiagram
    participant S as Parties Prenantes
    participant A as Auteurs PFD
    participant R as Réviseurs
    participant D as Document PFD

    S->>A: Fournir Contexte & Objectifs
    A->>D: Préparer Structure
    A->>D: Rédiger Sections Critiques
    A->>R: Demander Révision Initiale
    R->>A: Fournir Feedback
    A->>D: Incorporer Feedback
    A->>D: Compléter Toutes les Sections
    A->>R: Demander Révision Finale
    R->>A: Approuver/Suggérer Modifications
    A->>D: Finaliser Document
    A->>S: Présenter pour Approbation
    S->>D: Approuver Document
    Note over D: Document Publié
```

## Cycle de Vie Agile du PFD

```mermaid
graph TD
    START[Création Initiale PFD] --> PLAN[Planification Sprint]
    PLAN --> DEV[Développement]
    DEV --> REVIEW[Revue de Sprint]
    REVIEW --> RETRO[Rétrospective]
    RETRO -- Petits ajustements --> PRD[Mise à jour PRD]
    RETRO -- Problèmes techniques --> ARCH[Mise à jour Architecture]
    RETRO -- Changements majeurs --> UPDATE[Mise à jour PFD]
    UPDATE --> PLAN
    PRD --> PLAN
    ARCH --> PLAN

    style START fill:#ff9900,stroke:#333,stroke-width:2px
    style UPDATE fill:#ff9900,stroke:#333,stroke-width:2px
    style PRD fill:#66cc99,stroke:#333,stroke-width:2px
    style ARCH fill:#6699ff,stroke:#333,stroke-width:2px
```

## Vue d'Ensemble des Symboles

| Symbole | Nom                     | Signification dans le PFD                  |
| ------- | ----------------------- | ------------------------------------------ |
| `Σ`     | Sigma                   | Contexte, Agrégation, Validation           |
| `Ω`     | Omega                   | Architecture du Document, Cadre de Contenu |
| `Λ`     | Lambda                  | Enrichissement de Contenu                  |
| `Δ`     | Delta                   | Validation de Qualité                      |
| `↹`     | Tab                     | Structure ou Concept Principal             |
| `⊕`     | Plus Cerclé             | Composant ou Section à Inclure             |
| `→`     | Flèche                  | Flux, Direction, Transformation            |
| `⇌`     | Flèche Bidirectionnelle | Relation Bidirectionnelle                  |
| `ϴ`     | Theta                   | Processus de Création                      |
| `Φ`     | Phi                     | Adaptation du Modèle                       |
| `Ψ`     | Psi                     | Cycle de Vie du Document                   |
| `•`     | Point Médian            | Connexion de Concepts Liés                 |
| `+`     | Plus                    | Combinaison d'Éléments Similaires          |
| `Γ`     | Gamma                   | Relations entre Documents                  |

## Checklist de Qualité PFD

```mermaid
graph TD
    A[Validation du PFD] --> B{Structure\nComplète?}
    B -->|Non| C[Ajouter Sections\nManquantes]
    B -->|Oui| D{Alignement\nBusiness?}
    D -->|Non| E[Réviser pour\nAligner]
    D -->|Oui| F{Métriques\nMesurables?}
    F -->|Non| G[Définir KPIs\nMesurables]
    F -->|Oui| H{Détail\nTechnique\nApproprié?}
    H -->|Non| I[Ajuster Niveau\nde Détail]
    H -->|Oui| J{Diagrammes\nClairs?}
    J -->|Non| K[Améliorer\nVisualisations]
    J -->|Oui| L{Approbations\nObtenues?}
    L -->|Non| M[Obtenir\nApprobations]
    L -->|Oui| N{Support\nAgile?}
    N -->|Non| O[Améliorer\nTraçabilité]
    N -->|Oui| P[PFD\nValidé!]
```

## Structure d'une Story Issue du PFD

```mermaid
graph TD
    STORY["Story<br/>.ai/epic-{n}/{m}-{code}.story.md"] --> TITLE[Titre et ID]
    STORY --> DESC[Description]
    STORY --> AC[Critères d'Acceptation]
    STORY --> TASKS[Tâches d'Implémentation]
    STORY --> RISKS[Risques et Mitigations]
    STORY --> HYPO[Hypothèses à Valider]
    STORY --> TEST[Plan de Test]
    STORY --> STATUS[Statut]

    DESC -->|Dérivé de| PFD[PFD: Exigences, Vision]
    AC -->|Aligné avec| PFD
    RISKS -->|Identifiés dans| PFD
    TEST -->|Standards définis dans| PFD

    style STORY fill:#ff99cc,stroke:#333,stroke-width:2px
    style PFD fill:#ff9900,stroke:#333,stroke-width:2px
```

## Types de Projets et Emphases PFD

```mermaid
graph TD
    A[Types de Projets] --> B[Produit Logiciel]
    A --> C[Système d'Entreprise]
    A --> D[Plateforme de Données]
    A --> E[Application Mobile]
    A --> F[Service API]
    A --> G[Infrastructure]

    B --> B1[Accent: Besoins Utilisateurs,\nFonctionnalités, Expérience]
    C --> C1[Accent: Intégration,\nSécurité, Évolutivité]
    D --> D1[Accent: Stockage,\nAnalytique, Gouvernance]
    E --> E1[Accent: Plateformes,\nFonctionnement Hors-ligne,\nExpérience Utilisateur]
    F --> F1[Accent: Contrats,\nVersionnement, Documentation]
    G --> G1[Accent: Fiabilité,\nÉvolutivité, Sécurité]
```

## Adaptation aux Méthodologies

```mermaid
graph TD
    A[Méthodologies] --> B[Agile]
    A --> C[Cascade]
    A --> D[Hybride]

    B --> B1[Approche: Itérative,\nIncrémentale, Adaptative]
    B --> B2[Sections: Prioritisées,\nModulaires, Évolutives]
    B --> B3[Mises à jour: Régulières,\nVersionnées, Collaboratives]
    B --> B4[Intégration: Stories, Validation\nd'Hypothèses, Feedback Continu]

    C --> C1[Approche: Complète,\nSéquentielle, Détaillée]
    C --> C2[Sections: Complètes,\nExhaustives, En amont]
    C --> C3[Mises à jour: Gestion\nFormelle des Changements]

    D --> D1[Approche: Sur mesure,\nFlexible, Pragmatique]
    D --> D2[Sections: Core en amont,\nDétails progressifs]
    D --> D3[Mises à jour: Basées sur\nles jalons, Adaptatives]
```

## Cérémonies Agiles et Impact sur le PFD

```mermaid
graph LR
    A[Cérémonies Agiles] --> B[Refinement]
    A --> C[Planning]
    A --> D[Stand-up]
    A --> E[Review]
    A --> F[Retrospective]

    B --> B1[Élaboration des\nexigences du PFD]
    C --> C1[Sélection de stories\nbasées sur le PFD]
    D --> D1[Validation des\nhypothèses du PFD]
    E --> E1[Démonstration de\nl'alignement avec le PFD]
    F --> F1[Mise à jour du PFD\nsi nécessaire]

    style B1 fill:#ffffcc,stroke:#333,stroke-width:1px
    style C1 fill:#ffffcc,stroke:#333,stroke-width:1px
    style D1 fill:#ffffcc,stroke:#333,stroke-width:1px
    style E1 fill:#ffffcc,stroke:#333,stroke-width:1px
    style F1 fill:#ffffcc,stroke:#333,stroke-width:1px
```

## Exemple d'Organisation de Fichiers PFD

```
docs/
└── foundation/
    ├── project-a/
    │   ├── pfd.md                   # Document principal
    │   ├── diagrams/                # Diagrammes et visuels
    │   │   ├── architecture.png
    │   │   ├── data-model.png
    │   │   └── user-flow.png
    │   └── supplements/             # Documents supplémentaires
    │       ├── risk-assessment.md
    │       ├── api-spec.md
    │       └── ui-mockups.md
    └── project-b/
        ├── pfd.md
        ├── diagrams/
        └── supplements/

.ai/                                # Dossier agile
├── prd.md                          # Document d'exigences produit
├── arch.md                         # Document d'architecture
├── epic-1/                         # Premier epic
│   ├── 1-user-auth.story.md        # Story 1
│   └── 2-profile-mgmt.story.md     # Story 2
└── epic-2/                         # Deuxième epic
    └── 1-data-export.story.md      # Story 1
```

## Conseils pour un PFD Efficace

1. **Commencez par la vision** - Assurez-vous que les objectifs commerciaux sont clairs avant de définir les aspects techniques
2. **Impliquez toutes les parties prenantes clés** dès le début pour garantir l'alignement
3. **Utilisez des exemples concrets** pour illustrer les concepts abstraits
4. **Équilibrez détail et clarté** - Trop de détails peut obscurcir les points importants
5. **Mettez à jour régulièrement** - Un PFD doit évoluer avec le projet
6. **Priorisez visuellement** - Utilisez des diagrammes pour communiquer des concepts complexes
7. **Liez explicitement** les exigences aux objectifs commerciaux
8. **Assurez l'accessibilité** - Le document doit être compréhensible par les équipes techniques et non techniques
9. **Incluez des métriques quantifiables** pour mesurer le succès
10. **Documentez les décisions clés** et les alternatives considérées, pas seulement le résultat final
11. **Établissez clairement la traçabilité** entre le PFD, le PRD, l'Architecture et les Stories
12. **Validez les hypothèses critiques** aussi tôt que possible dans le cycle de développement
13. **Prévoyez des points de synchronisation** avec les cycles agiles pour maintenir l'alignement
14. **Dérivez les stories** directement des sections pertinentes du PFD pour assurer la cohérence

---

## Guide de Référence Rapide - Sections PFD

### 1. Introduction

- **Purpose**: Objectifs et usage du document
- **Scope**: Inclusions, exclusions, limites
- **Glossary**: Terminologie, acronymes, définitions

### 2. Vision

- **Statement**: Proposition de valeur concise
- **Strategic Alignment**: Lien avec les objectifs commerciaux
- **Success Criteria**: Résultats mesurables attendus

### 3. Vision Technique

- **Principles**: Valeurs architecturales et directives
- **Quality Attributes**: Performance, sécurité, évolutivité, maintenabilité
- **Constraints**: Contraintes techniques, commerciales, réglementaires

### 4. Aperçu

- **Context**: Contexte, justification, objectif
- **Objectives**: Objectifs SMART
- **Audience**: Types d'utilisateurs, parties prenantes, besoins

### 5. Exigences

- **Functional**: Capacités, fonctionnalités, user stories
- **Non-functional**: Qualités, contraintes, critères de performance
- **Use Cases**: Acteur, flux, résultats

### 6-12. [Suite des sections...]

---

Ce guide visuel peut être utilisé avec la documentation principale pour faciliter la compréhension et l'application de la règle `@5000-workflow-foundation-document-pfd.mdc`.
