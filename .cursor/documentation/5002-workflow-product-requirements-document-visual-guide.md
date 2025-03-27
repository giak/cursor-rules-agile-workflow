# Guide Visuel - Document d'Exigences Produit (PRD)

Ce guide visuel propose des représentations graphiques pour comprendre la structure, l'utilisation et l'intégration du PRD dans le flux de travail agile.

## 1. Position du PRD dans l'Écosystème Documentaire

```mermaid
flowchart TD
    PFD["Document Fondation Projet<br/>(PFD)"] --> PRD["Document Exigences Produit<br/>(PRD)"]
    PFD --> ARCH["Document Architecture<br/>(ARCH)"]
    PRD --> EPICS[Epics]
    PRD --> TECH[Spécifications Techniques]
    ARCH --> TECH
    EPICS --> STORIES[User Stories]
    TECH --> IMPL[Implémentation]
    STORIES --> IMPL

    classDef current fill:#f96,stroke:#333,stroke-width:2px;
    class PRD current;
```

## 2. Structure du Document PRD

```mermaid
mindmap
  root((PRD))
    Introduction et Contexte
      Description du Projet
      Contexte Business
      Positionnement
      Public Cible
      Énoncé du Problème
    Objectifs et Critères
      Objectifs Primaires
      Critères de Succès
      KPIs
      Méthodes de Mesure
    Parcours Utilisateur
      Parcours Primaires
      Parcours Secondaires
      Diagrammes de Flux
      Points de Décision
    Exigences
      Classification MoSCoW
      Exigences Fonctionnelles
      Exigences Non-Fonctionnelles
      Exigences UX/UI
      Exclusions
    Spécifications Techniques
      Vision Technique
      Stack Technologique
      Architecture
      Contraintes Techniques
      Principes
    Plan d'Implémentation
      Phases et Jalons
      Dépendances
      Ressources
    Évaluation des Risques
      Risques Business
      Risques Techniques
      Stratégies d'Atténuation
    Annexes
      Glossaire
      Références
```

## 3. Cycle de Vie du PRD

```mermaid
graph LR
    A[Initialisation: \nDérivé du PFD] --> B[Ébauche: \nDescription de Haut Niveau]
    B --> C[Développement: \nDétails des Exigences]
    C --> D[Revue: \nValidation Parties Prenantes]
    D --> E[Approbation: \nBaseline Initiale]
    E --> F[Évolution: \nRaffinement Itératif]
    F --> G[Réalignement: \nÀ Chaque Changement Majeur]
    G -->|Nouveau Cycle| C
```

## 4. Relation PFD-PRD

```mermaid
graph TB
    subgraph PFD["PFD (Stratégique)"]
        Vision["Vision"]
        Business["Objectifs Business"]
        Contraintes["Contraintes Globales"]
        Timeline["Timeline Stratégique"]
    end

    subgraph PRD["PRD (Tactique)"]
        Req["Exigences Détaillées"]
        Features["Fonctionnalités"]
        UX["Parcours Utilisateur"]
        Plan["Plan d'Implémentation"]
    end

    Vision --> Req
    Business --> Features
    Contraintes --> UX
    Timeline --> Plan

    classDef pfd fill:#D4F1F9,stroke:#05445E,stroke-width:1px;
    classDef prd fill:#FFEED9,stroke:#D27D2D,stroke-width:1px;

    class Vision,Business,Contraintes,Timeline pfd;
    class Req,Features,UX,Plan prd;
```

## 5. Du PRD au Backlog Agile

```mermaid
flowchart TD
    subgraph PRD[Document d'Exigences Produit]
        F1[F1: Domaine Fonctionnel 1]
        F2[F2: Domaine Fonctionnel 2]
        F3[F3: Domaine Fonctionnel 3]
    end

    subgraph EPICS[Epics]
        E1[Epic 1]
        E2[Epic 2]
        E3[Epic 3]
    end

    subgraph STORIES[User Stories]
        S1[Story 1.1]
        S2[Story 1.2]
        S3[Story 2.1]
        S4[Story 3.1]
        S5[Story 3.2]
    end

    F1 --> E1
    F2 --> E2
    F3 --> E3

    E1 --> S1
    E1 --> S2
    E2 --> S3
    E3 --> S4
    E3 --> S5

    classDef prd fill:#FFEED9,stroke:#D27D2D,stroke-width:1px;
    classDef epic fill:#E6F7FF,stroke:#1890FF,stroke-width:1px;
    classDef story fill:#F6FFED,stroke:#52C41A,stroke-width:1px;

    class F1,F2,F3 prd;
    class E1,E2,E3 epic;
    class S1,S2,S3,S4,S5 story;
```

## 6. Classification MoSCoW des Exigences

```mermaid
quadrantChart
    title Prioritisation des Exigences - Méthode MoSCoW
    x-axis Effort Implementation
    y-axis Impact Business
    quadrant-1 Should Have
    quadrant-2 Must Have
    quadrant-3 Won't Have
    quadrant-4 Could Have
    "Auth Multi-facteurs": [0.8, 0.9]
    "Recherche Avancée": [0.7, 0.6]
    "Export PDF": [0.3, 0.5]
    "Mode Hors-ligne": [0.9, 0.4]
    "Personnalisation UI": [0.4, 0.3]
    "Partage sur Réseaux": [0.2, 0.2]
```

## 7. Parcours Utilisateur Type

```mermaid
flowchart TD
    A[Utilisateur se connecte] --> B[Accède au Dashboard]
    B --> C[Recherche une Ressource]
    C --> D{Ressource existe?}
    D -->|Oui| E[Ouvre la Ressource]
    D -->|Non| F[Crée Nouvelle Ressource]
    E --> G[Modifie la Ressource]
    F --> G
    G --> H[Sauvegarde Changements]
    H --> I[Partage Ressource]
    I --> J{Notification \nSuccès?}
    J -->|Oui| K[Ferme Session]
    J -->|Non| L[Affiche Erreur]
    L --> I
```

## 8. Relation avec les Sprints Agiles

```mermaid
gantt
    title Évolution du PRD en Relation avec les Sprints
    dateFormat  YYYY-MM-DD
    section Documents
    PFD            :done,    pfd1, 2023-01-01, 30d
    PRD Initial    :done,    prd1, 2023-01-20, 20d
    Raffinement PRD:         prd2, 2023-03-10, 15d
    Mise à jour PRD:         prd3, 2023-05-15, 10d
    section Développement
    Sprint 1       :active,  sp1, 2023-02-10, 14d
    Sprint 2       :         sp2, after sp1, 14d
    Sprint 3       :         sp3, after sp2, 14d
    Sprint 4       :         sp4, after sp3, 14d
    Sprint 5       :         sp5, after sp4, 14d
```

## 9. Modèle de Matrice de Traçabilité

```mermaid
graph LR
    subgraph Objectifs[Objectifs Business]
        O1[O1: Augmenter Rétention]
        O2[O2: Réduire Temps d'Onboarding]
        O3[O3: Améliorer Sécurité]
    end

    subgraph Exigences[Exigences Fonctionnelles]
        F1[F1.1: Assistant Interactif]
        F2[F1.2: Tutoriels Intégrés]
        F3[F2.1: Auth Multifacteur]
        F4[F2.2: Chiffrement E2E]
    end

    O1 --> F1
    O1 --> F2
    O2 --> F1
    O2 --> F2
    O3 --> F3
    O3 --> F4

    classDef obj fill:#F0F5FF,stroke:#1890FF,stroke-width:1px;
    classDef func fill:#FFEED9,stroke:#D27D2D,stroke-width:1px;

    class O1,O2,O3 obj;
    class F1,F2,F3,F4 func;
```

## 10. Architecture Simplifiée du Produit

```mermaid
flowchart LR
    subgraph Frontend
        UI[Interface Utilisateur]
        State[Gestion d'État]
        Cache[Cache Local]
    end

    subgraph Services
        Auth[Service Auth]
        API[API Gateway]
        Logic[Logique Métier]
    end

    subgraph Persistence
        DB[(Base de données)]
        Queue[(File de Messages)]
        Storage[(Stockage Fichiers)]
    end

    UI <--> State
    State <--> Cache
    UI <--> API
    API <--> Auth
    API <--> Logic
    Logic <--> DB
    Logic <--> Queue
    Logic <--> Storage

    classDef frontend fill:#F6FFED,stroke:#52C41A,stroke-width:1px;
    classDef services fill:#E6F7FF,stroke:#1890FF,stroke-width:1px;
    classDef data fill:#FFF1F0,stroke:#F5222D,stroke-width:1px;

    class UI,State,Cache frontend;
    class Auth,API,Logic services;
    class DB,Queue,Storage data;
```

## 11. Processus de Validation des Exigences

```mermaid
flowchart LR
    A[Rédaction Exigence] --> B{Testable?}
    B -->|Non| A
    B -->|Oui| C{Alignée\nObjectifs?}
    C -->|Non| A
    C -->|Oui| D{Cohérente?}
    D -->|Non| A
    D -->|Oui| E{Réaliste?}
    E -->|Non| A
    E -->|Oui| F[Exigence Validée]
    F --> G[Inclusion dans PRD]
```

## 12. Processus de Priorisation MoSCoW

```mermaid
flowchart TD
    A[Identifier Exigence] --> B{Critique pour\nfonctionnement?}
    B -->|Oui| C[Must Have]
    B -->|Non| D{Valeur Business\nSignificative?}
    D -->|Oui| E[Should Have]
    D -->|Non| F{Améliore\nExpérience?}
    F -->|Oui| G[Could Have]
    F -->|Non| H[Won't Have]
```

## 13. Diagramme d'État du Document PRD

```mermaid
stateDiagram-v2
    [*] --> Ébauche
    Ébauche --> EnRevue : Soumission
    EnRevue --> Révision : Commentaires
    Révision --> EnRevue : Resoumission
    EnRevue --> Approuvé : Validation
    Approuvé --> [*]
    Approuvé --> MiseÀJour : Changement
    MiseÀJour --> EnRevue : Nouvelle Version
```

## 14. Checklist Visuelle PRD

```mermaid
pie title Éléments du PRD à Valider
    "Introduction et Contexte" : 10
    "Objectifs et Critères" : 15
    "Parcours Utilisateur" : 20
    "Exigences" : 25
    "Spécifications Techniques" : 10
    "Plan d'Implémentation" : 10
    "Évaluation des Risques" : 5
    "Annexes" : 5
```

## 15. Évolution et Raffinement du PRD

```mermaid
gitGraph
    commit id: "Initial PFD" tag: "v1.0"
    branch "PRD"
    checkout "PRD"
    commit id: "Ébauche PRD"
    commit id: "Détails Exigences"
    commit id: "Revue Parties Prenantes"
    commit id: "PRD Baseline" tag: "v1.0"
    branch "Sprint 1"
    checkout "Sprint 1"
    commit id: "Stories Sprint 1"
    checkout "PRD"
    merge "Sprint 1"
    commit id: "Mises à jour Post-Sprint 1"
    branch "Sprint 2"
    checkout "Sprint 2"
    commit id: "Stories Sprint 2"
    checkout "PRD"
    merge "Sprint 2"
    commit id: "Raffinement PRD" tag: "v1.1"
```

## Conclusion

Ces visualisations illustrent les concepts clés du Document d'Exigences Produit (PRD) et son intégration dans le flux de travail de développement produit. Un bon PRD sert de pont entre la vision stratégique du PFD et l'implémentation concrète, en fournissant une spécification détaillée et actionnable des exigences.
