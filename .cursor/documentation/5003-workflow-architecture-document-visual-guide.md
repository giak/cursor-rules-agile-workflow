# Guide Visuel - Document d'Architecture (Architecture Document)

Ce guide visuel est un complément à la documentation principale de la règle `@5003-workflow-architecture-document.mdc`. Il vise à fournir une représentation visuelle des structures, relations et approches pour créer des Documents d'Architecture efficaces.

## Structure Globale d'un Document d'Architecture

```mermaid
graph TD
    A[Document d'Architecture] --> B[Frontmatter\nMétadonnées]
    A --> C[Table des Matières]
    A --> D[Sections Principales]
    A --> E[Annexes]

    D --> D1[Introduction]
    D --> D2[Niveaux d'Abstraction]
    D --> D3[Niveau 1: Contexte]
    D --> D4[Niveau 2: Conteneur]
    D --> D5[Niveau 3: Composant]
    D --> D6[Préoccupations Transversales]
    D --> D7[Flux de Données]
    D --> D8[Décisions Techniques]
    D --> D9[Évolution]
    D --> D10[Spécificités Techniques]

    E --> E1[Stack Technologique]
    E --> E2[Glossaire]
    E --> E3[Références]
    E --> E4[Historique du Document]
```

## Triade Documentaire et Relations

```mermaid
graph TD
    PFD[Document Fondation de Projet\nPFD] --> PRD[Document d'Exigences Produit\nPRD]
    PFD --> ARCH[Document d'Architecture\nARCH]
    PRD --> ARCH

    ARCH --> IMPL[Implémentation]
    IMPL --> CODE[Code Source]
    IMPL --> COMP[Composants]
    IMPL --> TESTS[Tests]
    IMPL --> CI[CI/CD]

    PFD -.-> |Vision & Contraintes| ARCH
    PRD -.-> |Exigences| ARCH
    ARCH -.-> |Décisions Techniques| IMPL
    IMPL -.-> |Feedback| ARCH

    style PFD fill:#ff9900,stroke:#333,stroke-width:2px
    style PRD fill:#66cc99,stroke:#333,stroke-width:2px
    style ARCH fill:#6699ff,stroke:#333,stroke-width:2px
    style IMPL fill:#eeeeee,stroke:#333,stroke-width:1px
    style CODE,COMP,TESTS,CI fill:#f5f5f5,stroke:#333,stroke-width:1px
```

## Approche C4 pour la Documentation d'Architecture

```mermaid
graph TD
    L1[Niveau 1:\nContexte] --> L2[Niveau 2:\nConteneur]
    L2 --> L3[Niveau 3:\nComposant]
    L3 --> L4[Niveau 4:\nCode]

    L1 -.-> CTX[Système en relation avec\nutilisateurs et systèmes externes]
    L2 -.-> CONT[Applications, services,\nbases de données, etc.]
    L3 -.-> COMP[Composants à l'intérieur\ndes conteneurs]
    L4 -.-> CODE[Classes, modules,\nfonctions, etc.]

    style L1 fill:#f5a742,stroke:#333,stroke-width:2px
    style L2 fill:#66cc99,stroke:#333,stroke-width:2px
    style L3 fill:#6699ff,stroke:#333,stroke-width:2px
    style L4 fill:#ff6666,stroke:#333,stroke-width:2px
    style CTX,CONT,COMP,CODE fill:#f5f5f5,stroke:#333,stroke-width:1px
```

## Exemple de Diagramme de Contexte (Niveau 1)

```mermaid
flowchart TD
    User([Utilisateur Final])
    Admin([Administrateur])
    MobileApp([Application Mobile])
    ThirdParty([Système Tiers])

    subgraph "Système MonApp"
        System[Système Principal\nApplication Web]
    end

    User -->|Utilise| System
    Admin -->|Administre| System
    MobileApp -->|API Calls| System
    System -->|Intègre avec| ThirdParty

    %% Styling
    classDef external fill:#8CDFFF,stroke:#009,stroke-width:2px,color:#000
    classDef system fill:#FFFAC8,stroke:#CC9900,stroke-width:2px,color:#000,font-weight:bold

    class User,Admin,MobileApp,ThirdParty external
    class System system
```

## Exemple de Diagramme de Conteneur (Niveau 2)

```mermaid
flowchart TD
    subgraph "Système MonApp"
        direction TB
        Web[Interface Web\nReact + TypeScript]
        API[API Backend\nNode.js + Express]
        DB[(Base de Données\nPostgreSQL)]
        Cache[(Cache\nRedis)]
        Queue[File d'Attente\nRabbitMQ]
    end

    User([Utilisateur Final])
    MobileApp([Application Mobile])
    ThirdParty([Système Tiers])

    User -->|HTTPS| Web
    MobileApp -->|REST API| API
    ThirdParty -->|REST API| API

    Web -->|REST API| API
    API -->|CRUD| DB
    API -->|Cache Data| Cache
    API -->|Publish Events| Queue
    Queue -->|Consume Events| API

    %% Styling
    classDef external fill:#8CDFFF,stroke:#009,stroke-width:2px,color:#000
    classDef web fill:#C9E1F9,stroke:#4D7CC7,stroke-width:2px,color:#000,font-weight:bold
    classDef api fill:#FADBC8,stroke:#E66C37,stroke-width:2px,color:#000,font-weight:bold
    classDef data fill:#C6E5CC,stroke:#339933,stroke-width:2px,color:#000,font-weight:bold
    classDef queue fill:#E1D1F6,stroke:#9673A6,stroke-width:2px,color:#000,font-weight:bold

    class User,MobileApp,ThirdParty external
    class Web web
    class API api
    class DB,Cache data
    class Queue queue
```

## Exemple de Diagramme de Composant (Niveau 3)

```mermaid
flowchart TD
    subgraph "API Backend"
        direction TB
        Controllers[Controllers\nGestion des Requêtes]
        Services[Services\nLogique Métier]
        Repositories[Repositories\nAccès aux Données]
        Middleware[Middleware\nAuth, Logging, etc.]
        Models[Models\nEntités de Données]
        DTOs[DTOs\nTransfert de Données]
        Queue[Queue Service\nGestion des Messages]
    end

    Controllers -->|Utilise| Services
    Controllers -->|Retourne| DTOs
    Services -->|Utilise| Repositories
    Services -->|Manipule| Models
    Services -->|Publie vers| Queue
    Middleware -->|Intercepte| Controllers
    Repositories -->|Persiste| Models

    %% Styling
    classDef controller fill:#FFD700,stroke:#333,stroke-width:1px
    classDef service fill:#98FB98,stroke:#333,stroke-width:1px
    classDef repo fill:#87CEFA,stroke:#333,stroke-width:1px
    classDef model fill:#FFA07A,stroke:#333,stroke-width:1px
    classDef middleware fill:#D8BFD8,stroke:#333,stroke-width:1px

    class Controllers controller
    class Services service
    class Repositories repo
    class Models,DTOs model
    class Middleware,Queue middleware
```

## Exemple de Diagramme de Séquence pour un Flux de Données

```mermaid
sequenceDiagram
    actor User as Utilisateur
    participant UI as Interface Utilisateur
    participant API as API Backend
    participant DB as Base de Données
    participant Cache as Cache
    participant Queue as File d'Attente
    participant Worker as Worker Service

    User->>UI: Soumet Formulaire
    UI->>API: POST /api/resource

    API->>API: Valide Données

    alt Validation Échouée
        API-->>UI: 400 Bad Request
        UI-->>User: Message d'Erreur
    else Validation Réussie
        API->>DB: Insère Données
        DB-->>API: Confirmation
        API->>Cache: Invalide Cache
        API->>Queue: Publie Événement
        API-->>UI: 201 Created
        UI-->>User: Confirmation

        Queue->>Worker: Consomme Événement
        Worker->>DB: Traitement Asynchrone
    end
```

## Architecture à 3 Niveaux (3-Tier)

```mermaid
flowchart TD
    subgraph "Couche Présentation"
        UI[Composants UI]
        State[Gestion d'État]
        Routes[Routage]
        Visual[Visualisation]
    end

    subgraph "Couche Application"
        Services[Services]
        Controllers[Contrôleurs]
        UseCases[Cas d'Utilisation]
        Validation[Validation]
    end

    subgraph "Couche Données"
        Repos[Repositories]
        Models[Modèles]
        Storage[Stockage]
        Integration[Intégrations]
    end

    subgraph "Préoccupations Transversales"
        Auth[Authentification]
        Logging[Journalisation]
        ErrorHandling[Gestion d'Erreurs]
        Config[Configuration]
    end

    UI --> Services
    State --> Services
    Routes --> Controllers
    Visual --> Services

    Services --> Repos
    Controllers --> UseCases
    UseCases --> Repos
    Validation --> Models

    Repos --> Models
    Models --> Storage
    Repos --> Integration

    Auth -.-> UI
    Auth -.-> Controllers
    Logging -.-> Services
    Logging -.-> Repos
    ErrorHandling -.-> UI
    ErrorHandling -.-> Services
    Config -.-> Services
    Config -.-> Storage

    style UI,State,Routes,Visual fill:#C9E1F9,stroke:#4D7CC7,stroke-width:2px
    style Services,Controllers,UseCases,Validation fill:#FADBC8,stroke:#E66C37,stroke-width:2px
    style Repos,Models,Storage,Integration fill:#C6E5CC,stroke:#339933,stroke-width:2px
    style Auth,Logging,ErrorHandling,Config fill:#E1D1F6,stroke:#9673A6,stroke-width:2px
```

## Architecture Clean

```mermaid
flowchart TD
    subgraph "Entités"
        DomainObjects[Objets Métier]
        BusinessRules[Règles Métier]
        ValueObjects[Objets Valeur]
        DomainEvents[Événements Domaine]
    end

    subgraph "Cas d'Utilisation"
        Interactors[Interacteurs]
        InputPorts[Ports d'Entrée]
        OutputPorts[Ports de Sortie]
        DomainServices[Services Domaine]
    end

    subgraph "Adaptateurs d'Interface"
        Controllers[Contrôleurs]
        Presenters[Présentateurs]
        Gateways[Passerelles]
        Repositories[Dépôts]
    end

    subgraph "Frameworks & Pilotes"
        UI[Framework UI]
        Web[Framework Web]
        DB[Base de Données]
        External[Librairies Externes]
    end

    UI --> Controllers
    Controllers --> InputPorts
    InputPorts --> Interactors
    Interactors --> DomainObjects
    Interactors --> BusinessRules
    Interactors --> OutputPorts
    OutputPorts --> Presenters
    Presenters --> UI
    DomainObjects --> ValueObjects
    DomainObjects --> DomainEvents
    Interactors --> DomainServices
    OutputPorts --> Gateways
    Gateways --> External
    OutputPorts --> Repositories
    Repositories --> DB

    %% Règle de dépendance: les flèches pointent vers l'intérieur
    DomainObjects -.-> BusinessRules
    BusinessRules -.-> DomainObjects
    Interactors -.-> DomainObjects
    InputPorts -.-> Interactors
    OutputPorts -.-> Interactors

    style DomainObjects,BusinessRules,ValueObjects,DomainEvents fill:#FADBC8,stroke:#E66C37,stroke-width:2px
    style Interactors,InputPorts,OutputPorts,DomainServices fill:#C6E5CC,stroke:#339933,stroke-width:2px
    style Controllers,Presenters,Gateways,Repositories fill:#C9E1F9,stroke:#4D7CC7,stroke-width:2px
    style UI,Web,DB,External fill:#E1D1F6,stroke:#9673A6,stroke-width:2px
```

## Architecture Microservices

```mermaid
flowchart TD
    subgraph "Frontière des Services"
        ServiceA[Service A\nGestion Utilisateurs]
        ServiceB[Service B\nGestion Produits]
        ServiceC[Service C\nGestion Commandes]
        ServiceD[Service D\nPaiements]
    end

    subgraph "Communication"
        Gateway[API Gateway]
        MessageBus[Bus de Messages]
        ServiceDiscovery[Découverte de Services]
    end

    subgraph "Données"
        DBA[(DB Utilisateurs)]
        DBB[(DB Produits)]
        DBC[(DB Commandes)]
        DBD[(DB Paiements)]
    end

    Client([Client])

    Client -->|REST| Gateway
    Gateway -->|Route| ServiceA
    Gateway -->|Route| ServiceB
    Gateway -->|Route| ServiceC
    Gateway -->|Route| ServiceD

    ServiceA -->|Persiste| DBA
    ServiceB -->|Persiste| DBB
    ServiceC -->|Persiste| DBC
    ServiceD -->|Persiste| DBD

    ServiceA -->|Publie| MessageBus
    ServiceB -->|Publie| MessageBus
    ServiceC -->|Publie| MessageBus
    ServiceD -->|Publie| MessageBus

    MessageBus -->|Souscrit| ServiceA
    MessageBus -->|Souscrit| ServiceB
    MessageBus -->|Souscrit| ServiceC
    MessageBus -->|Souscrit| ServiceD

    ServiceA -->|Enregistre| ServiceDiscovery
    ServiceB -->|Enregistre| ServiceDiscovery
    ServiceC -->|Enregistre| ServiceDiscovery
    ServiceD -->|Enregistre| ServiceDiscovery

    Gateway -->|Consulte| ServiceDiscovery

    style Client fill:#8CDFFF,stroke:#009,stroke-width:2px,color:#000
    style ServiceA,ServiceB,ServiceC,ServiceD fill:#FADBC8,stroke:#E66C37,stroke-width:2px
    style Gateway,MessageBus,ServiceDiscovery fill:#C9E1F9,stroke:#4D7CC7,stroke-width:2px
    style DBA,DBB,DBC,DBD fill:#C6E5CC,stroke:#339933,stroke-width:2px
```

## Préoccupations Transversales

```mermaid
flowchart LR
    subgraph "Système"
        Core[Fonctionnalités\nPrincipales]
    end

    subgraph "Préoccupations Transversales"
        Error[Gestion\ndes Erreurs]
        Logging[Journalisation]
        Security[Sécurité]
        I18n[Internationalisation]
        A11y[Accessibilité]
        Config[Configuration]
    end

    Error -.->|Intercepte| Core
    Logging -.->|Enregistre| Core
    Security -.->|Protège| Core
    I18n -.->|Localise| Core
    A11y -.->|Rend Accessible| Core
    Config -.->|Configure| Core

    style Core fill:#FADBC8,stroke:#E66C37,stroke-width:2px
    style Error,Logging,Security,I18n,A11y,Config fill:#E1D1F6,stroke:#9673A6,stroke-width:2px
```

## Dette Technique et Évolution

```mermaid
graph TD
    Current[État Actuel]
    Target[État Cible]

    Current -->|Évolution| Target

    Current -.->|Dette Technique| TechDebt1[Complexité\nAccidentelle]
    Current -.->|Dette Technique| TechDebt2[Tests\nInsuffisants]
    Current -.->|Dette Technique| TechDebt3[Problèmes\nde Performance]

    TechDebt1 -->|Remédiation| Refactor[Refactoring]
    TechDebt2 -->|Remédiation| Testing[Amélioration\nde la Couverture]
    TechDebt3 -->|Remédiation| Perf[Optimisation\nde Performance]

    Refactor -->|Contribue à| Target
    Testing -->|Contribue à| Target
    Perf -->|Contribue à| Target

    Target --> Future[Futures\nAméliorations]

    style Current fill:#FADBC8,stroke:#E66C37,stroke-width:2px
    style Target fill:#C6E5CC,stroke:#339933,stroke-width:2px
    style TechDebt1,TechDebt2,TechDebt3 fill:#FFB6C1,stroke:#FF0000,stroke-width:1px
    style Refactor,Testing,Perf fill:#C9E1F9,stroke:#4D7CC7,stroke-width:1px
    style Future fill:#E1D1F6,stroke:#9673A6,stroke-width:1px
```

## Considérations de Performance

```mermaid
graph TD
    Perf[Performance\nGlobale]

    Perf --> Client[Performance\nClient]
    Perf --> Server[Performance\nServeur]
    Perf --> DB[Performance\nBase de Données]

    Client --> Bundle[Optimisation\nde Bundle]
    Client --> Render[Performance\nde Rendu]
    Client --> Memory[Gestion\nde Mémoire]

    Server --> CPU[Utilisation\nCPU]
    Server --> Async[Opérations\nAsynchrones]
    Server --> Cache[Stratégies\nde Cache]

    DB --> Query[Optimisation\ndes Requêtes]
    DB --> Index[Indexation]
    DB --> Scaling[Mise à\nl'Échelle]

    style Perf fill:#f5a742,stroke:#333,stroke-width:2px
    style Client,Server,DB fill:#C6E5CC,stroke:#339933,stroke-width:2px
    style Bundle,Render,Memory,CPU,Async,Cache,Query,Index,Scaling fill:#E1D1F6,stroke:#9673A6,stroke-width:1px
```

## Architecture de Sécurité

```mermaid
graph TD
    Security[Architecture\nde Sécurité]

    Security --> Auth[Authentification]
    Security --> Authz[Autorisation]
    Security --> DataProt[Protection\ndes Données]
    Security --> SecMon[Surveillance\nde Sécurité]

    Auth --> AuthN1[Gestion\ndes Identités]
    Auth --> AuthN2[Multi-facteur]
    Auth --> AuthN3[OAuth/OIDC]

    Authz --> Authz1[RBAC]
    Authz --> Authz2[ABAC]
    Authz --> Authz3[Contrôle\nd'Accès API]

    DataProt --> DP1[Chiffrement\nau Repos]
    DataProt --> DP2[Chiffrement\nen Transit]
    DataProt --> DP3[Masquage\ndes Données]

    SecMon --> SM1[Journalisation\nde Sécurité]
    SecMon --> SM2[Détection\nd'Intrusion]
    SecMon --> SM3[Réponse aux\nIncidents]

    style Security fill:#f5a742,stroke:#333,stroke-width:2px
    style Auth,Authz,DataProt,SecMon fill:#C6E5CC,stroke:#339933,stroke-width:2px
    style AuthN1,AuthN2,AuthN3,Authz1,Authz2,Authz3,DP1,DP2,DP3,SM1,SM2,SM3 fill:#E1D1F6,stroke:#9673A6,stroke-width:1px
```

## Processus de Création du Document d'Architecture

```mermaid
sequenceDiagram
    participant PFD as Document Fondation Projet
    participant PRD as Document Exigences Produit
    participant ARC as Document d'Architecture
    participant DEV as Équipe Développement

    PFD->>ARC: Fournir Vision & Contraintes
    PRD->>ARC: Fournir Exigences Fonctionnelles & Non-Fonctionnelles
    ARC->>ARC: Identifier Styles & Patterns Architecturaux
    ARC->>ARC: Créer Diagrammes de Contexte
    ARC->>ARC: Définir Conteneurs & Composants
    ARC->>ARC: Documenter Décisions Techniques
    ARC->>DEV: Présenter pour Validation Technique
    DEV->>ARC: Fournir Feedback & Ajustements
    ARC->>ARC: Finaliser Documentation
    ARC->>DEV: Guider Implémentation
    DEV->>ARC: Feedback d'Implémentation
    ARC->>ARC: Mises à Jour Évolutives
```

## Conseils pour un Document d'Architecture Efficace

1. **Commencez par comprendre le contexte** - Familiarisez-vous avec le PFD et le PRD avant de concevoir l'architecture
2. **Adoptez l'approche multi-niveaux** - Utilisez l'approche C4 pour une présentation progressive des détails
3. **Privilégiez la visualisation** - Un bon diagramme vaut mieux que de longues explications textuelles
4. **Documentez les décisions** - Expliquez le "pourquoi" derrière chaque choix architectural important
5. **Équilibrez largeur et profondeur** - Couvrez l'ensemble du système tout en détaillant les composants critiques
6. **Restez aligné avec les exigences** - Chaque choix architectural doit répondre à une ou plusieurs exigences
7. **Identifiez les compromis** - Reconnaissez les forces et faiblesses de vos choix architecturaux
8. **Pensez à l'évolution** - Documentez comment l'architecture évoluera pour répondre aux besoins futurs
9. **Adressez les préoccupations transversales** - N'oubliez pas la sécurité, la performance, l'accessibilité, etc.
10. **Utilisez une terminologie cohérente** - Maintenez un glossaire pour assurer une compréhension commune
11. **Documentez les API et interfaces** - Les points d'intégration sont critiques pour comprendre le système
12. **Intégrez des exemples concrets** - Illustrez les patterns abstraits avec des exemples spécifiques
13. **Validez avec l'équipe** - Impliquez les développeurs pour assurer la faisabilité et l'acceptation
14. **Maintenez le document** - L'architecture évolue, assurez-vous que la documentation reste à jour
15. **Représentez les flux de données** - Montrez comment l'information circule à travers le système
16. **Documentez les dépendances externes** - Clarifiez les interactions avec les systèmes tiers

---

## Guide de Référence Rapide - Sections d'Architecture

### 1. Introduction

- **Purpose**: Objectifs et audience du document
- **Scope**: Limites et composants inclus
- **Alignment**: Relation avec le PFD et le PRD

### 2. Niveaux d'Abstraction

- **Approche**: Modèle C4 ou similaire
- **Rationale**: Divulgation progressive des détails
- **Structure**: Vue d'ensemble des sections

### 3. Niveau 1: Contexte

- **System Context**: Système en relation avec les utilisateurs et systèmes externes
- **Actors**: Utilisateurs primaires et secondaires
- **External Systems**: Intégrations et dépendances
- **Data Flows**: Échanges de haut niveau

### 4. Niveau 2: Conteneur

- **Containers**: Applications, services, bases de données
- **Technologies**: Choix technologiques par conteneur
- **Interfaces**: Points d'interaction entre conteneurs
- **Dependencies**: Relations et direction des dépendances

### 5. Niveau 3: Composant

- **Components**: Classes, modules, fonctions clés
- **Interfaces**: API publiques et contrats
- **Data Structures**: Entités et objets principaux
- **Design Patterns**: Patterns architecturaux utilisés

### 6. Préoccupations Transversales

- **Error Handling**: Stratégie et patterns
- **Logging**: Approche et niveaux
- **Security**: Authentification, autorisation, protection des données
- **Internationalization**: Support multilingue
- **Accessibility**: Standards d'accessibilité

### 7. Flux de Données

- **Key Scenarios**: Cas d'utilisation principaux
- **Sequence Diagrams**: Interactions étape par étape
- **State Transitions**: Changements d'état clés
- **Error Paths**: Gestion des exceptions

### 8-10. [Suite des sections...]

### 11. Annexes

- **Technology Stack**: Versions détaillées
- **Glossary**: Terminologie et définitions
- **References**: Standards et inspiration
- **History**: Log des modifications

---

Ce guide visuel peut être utilisé avec la documentation principale pour faciliter la compréhension et l'application de la règle `@5003-workflow-architecture-document.mdc`.
