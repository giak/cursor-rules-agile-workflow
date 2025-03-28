# Templates de Gestion des Epics et Stories

Ce document fournit des templates standardisés pour la création et la gestion des Epics et Stories conformément à la règle `@5905-epic-story-management.mdc`.

## Organisation des Fichiers

Structure recommandée pour le stockage des Epics et Stories :

```
.ai/
├── epic-1/                # Premier Epic
│   ├── _epic.md           # Fichier de description de l'Epic
│   ├── 1-feature-a.story.md  # Première Story de l'Epic
│   └── 2-feature-b.story.md  # Deuxième Story de l'Epic
├── epic-2/                # Deuxième Epic
│   ├── _epic.md
│   └── 1-feature-c.story.md
└── ...
```

## Hiérarchie et Relations de Documentation

La gestion des Epics et Stories s'inscrit dans une hiérarchie de documentation complète :

```
1. Document Fondation de Projet (PFD) - Vision et objectifs business
2. Document d'Exigences Produit (PRD) - Fonctionnalités et exigences
3. Document d'Architecture - Conception technique et contraintes
4. Epics - Ensembles cohérents de fonctionnalités
5. Stories - Incréments de développement implémentables
6. Tâches d'implémentation - Activités techniques spécifiques
```

Cette hiérarchie garantit la traçabilité complète des exigences, de la vision jusqu'à l'implémentation.

## Template d'Epic

```markdown
# Epic-{N}: {Titre de l'Epic}

## Traçabilité

**Référence PRD**: Section {Section}.{Subsection}
**Exigences associées**: [Liste des IDs d'exigences du PRD]

## Description

[Une description complète de l'Epic, expliquant son objectif global, sa portée et ses limites]

## Objectifs

- [Objectif business 1, axé sur la valeur]
- [Objectif business 2, axé sur la valeur]
- [Objectif business 3, axé sur la valeur]

## Stories

- [ ] Story-{N}.1: [Titre de la Story]
- [ ] Story-{N}.2: [Titre de la Story]
- [ ] Story-{N}.3: [Titre de la Story]

## Critères de Succès

- [Critère 1 - spécifique et mesurable]
- [Critère 2 - spécifique et mesurable]
- [Critère 3 - spécifique et mesurable]

## Risques

| Risque     | Impact (H/M/L) | Probabilité (H/M/L) | Stratégie d'Atténuation         |
| ---------- | -------------- | ------------------- | ------------------------------- |
| [Risque 1] | [H/M/L]        | [H/M/L]             | [Action pour réduire le risque] |
| [Risque 2] | [H/M/L]        | [H/M/L]             | [Action pour réduire le risque] |

## Dépendances

### Internes

- [Référence à d'autres Epics ou Stories dont dépend cet Epic]

### Externes

- [Dépendances externes, comme des services tiers ou des contraintes organisationnelles]

### Architecturales

- [Références aux composants d'architecture concernés]
- [Contraintes techniques liées à l'architecture]

## Statut

**Statut actuel**: [non-démarré / en-cours / terminé]

Dernière mise à jour: [YYYY-MM-DD]
```

## Template de Story

```markdown
# Story: {Titre de la Story}

**Epic-{N}**: {Titre de l'Epic}  
**Story-{N}.{M}**: {Titre de la Story}

## Traçabilité

**Référence PRD**: [ID d'exigence ou section du PRD]
**Composant d'Architecture**: [Référence au composant d'architecture concerné]

## Description

**En tant que** [rôle]  
**Je veux** [action]  
**afin de** [bénéfice]

## Statut

**Statut actuel**: [brouillon / en-cours / terminé / annulé]

Dernière mise à jour: [YYYY-MM-DD]

## Contexte

### Relation avec l'Epic

[Description de comment cette Story contribue à l'Epic parent]

### Dépendances

- [Liste des Stories dont celle-ci dépend]

### Contraintes

- [Limitations ou hypothèses importantes]

### Considérations Architecturales

- [Patterns d'architecture à utiliser]
- [Contraintes techniques à respecter]
- [Services ou composants à intégrer]

## Estimation

**Story Points**: [nombre]

Justification: [Brève explication du niveau de complexité]

## Critères d'Acceptation

1. **Étant donné** [contexte], **quand** [action], **alors** [résultat attendu]
2. **Étant donné** [contexte], **quand** [action], **alors** [résultat attendu]
3. **Étant donné** [contexte], **quand** [action], **alors** [résultat attendu]

**Validation PRD**: [Comment ces critères répondent aux exigences du PRD]

## Tâches

- [ ] [Tâche 1]
  - [ ] [Sous-tâche 1.1]
  - [ ] [Sous-tâche 1.2]
- [ ] [Tâche 2]
- [ ] [Tâche 3]

## Principes de Développement

### À Suivre

- [Principe ou pattern spécifique à cette Story]
- [Recommandation technique]
- [Alignement avec les standards d'architecture]

### À Éviter

- [Anti-pattern ou approche à éviter]
- [Pièges potentiels]
- [Non-conformités architecturales à éviter]

## Notes Techniques

[Détails d'implémentation importants]
[Choix architecturaux]
[Points techniques à considérer]
[Limitations techniques dérivées de l'architecture]

## Journal de Communication

### [YYYY-MM-DD]

[Question/décision/clarification]

### [YYYY-MM-DD]

[Question/décision/clarification]
```

## Template de Story Découpée

Pour illustrer comment une Story trop grande peut être découpée, voici un exemple utilisant la technique CRUD :

### Story Originale (Trop Grande)

```markdown
# Story: Gestion des Produits

**Epic-2**: Catalogue de Produits
**Story-2.1**: Gestion des Produits

## Traçabilité

**Référence PRD**: REQ-2.3 - Gestion Complète du Catalogue
**Composant d'Architecture**: Components/Catalog/ProductManagement

## Description

**En tant que** administrateur du catalogue
**Je veux** pouvoir gérer les produits (ajouter, consulter, modifier, supprimer)
**afin de** maintenir un catalogue à jour et précis

# ... [reste du contenu] ...
```

### Stories Découpées

#### Story 2.1.1: Consultation du Catalogue de Produits

```markdown
# Story: Consultation du Catalogue de Produits

**Epic-2**: Catalogue de Produits
**Story-2.1.1**: Consultation du Catalogue de Produits

## Traçabilité

**Référence PRD**: REQ-2.3.1 - Visualisation du Catalogue
**Composant d'Architecture**: Components/Catalog/ProductViewer

## Description

**En tant que** administrateur du catalogue
**Je veux** pouvoir consulter la liste des produits avec filtres et recherche
**afin de** trouver rapidement les informations sur un produit spécifique

# ... [reste du contenu] ...
```

#### Story 2.1.2: Ajout de Nouveaux Produits

```markdown
# Story: Ajout de Nouveaux Produits

**Epic-2**: Catalogue de Produits
**Story-2.1.2**: Ajout de Nouveaux Produits

## Traçabilité

**Référence PRD**: REQ-2.3.2 - Création de Produits
**Composant d'Architecture**: Components/Catalog/ProductCreator

## Description

**En tant que** administrateur du catalogue
**Je veux** pouvoir ajouter de nouveaux produits avec leurs caractéristiques
**afin d'** enrichir le catalogue avec de nouvelles offres

# ... [reste du contenu] ...
```

#### Story 2.1.3: Modification des Informations Produit

```markdown
# Story: Modification des Informations Produit

**Epic-2**: Catalogue de Produits
**Story-2.1.3**: Modification des Informations Produit

## Traçabilité

**Référence PRD**: REQ-2.3.3 - Mise à Jour de Produits
**Composant d'Architecture**: Components/Catalog/ProductEditor

## Description

**En tant que** administrateur du catalogue
**Je veux** pouvoir modifier les informations des produits existants
**afin de** maintenir des données précises et à jour

# ... [reste du contenu] ...
```

#### Story 2.1.4: Suppression de Produits

```markdown
# Story: Suppression de Produits

**Epic-2**: Catalogue de Produits
**Story-2.1.4**: Suppression de Produits

## Traçabilité

**Référence PRD**: REQ-2.3.4 - Suppression de Produits
**Composant d'Architecture**: Components/Catalog/ProductManager

## Description

**En tant que** administrateur du catalogue
**Je veux** pouvoir supprimer des produits obsolètes ou discontinués
**afin de** garder le catalogue propre et pertinent

# ... [reste du contenu] ...
```

## Conseils d'Utilisation

1. **Maintenir la traçabilité**: Assurez-vous que chaque Epic est lié au PRD et que chaque Story référence à la fois l'Epic parent, le PRD et les composants d'Architecture pertinents.

2. **Respecter le format standard**: Utilisez systématiquement les templates fournis pour assurer la cohérence.

3. **Mettre à jour les statuts**: Maintenez le statut des Epics et Stories à jour pour refléter leur progression réelle.

4. **Suivre les principes INVEST**: Vérifiez que chaque Story est Indépendante, Négociable, Valuable, Estimable, Small et Testable.

5. **Découper les Stories trop grandes**: Utilisez les techniques de découpage (SPIDR, CRUD, etc.) pour obtenir des Stories de taille appropriée.

6. **Documenter les communications**: Conservez une trace des décisions importantes et des clarifications dans la section Journal.

7. **Prioriser de façon explicite**: Ordonnez les Stories au sein d'un Epic par ordre de priorité/dépendance pour clarifier l'ordre d'implémentation.

8. **Valider collectivement**: Passez en revue les Epics et Stories avec l'équipe pour assurer une compréhension commune.

9. **Maintenir la cohérence documentaire**: Établissez et vérifiez les liens entre le PFD, le PRD, l'Architecture, les Epics et les Stories pour garantir une traçabilité bidirectionnelle.

10. **Analyser l'impact des modifications**: Lors de modifications d'une Story ou d'un Epic, évaluez l'impact sur les autres documents (PRD, Architecture) et mettez-les à jour si nécessaire.

11. **Vérifier la conformité architecturale**: Assurez-vous que les Stories respectent les contraintes et principes définis dans le document d'Architecture.

12. **Réviser régulièrement**: Passez en revue et affinez les Epics et Stories à mesure que le projet progresse et que de nouvelles informations émergent.
