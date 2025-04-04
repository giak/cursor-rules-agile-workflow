# Brainstorming : Optimisation de la Règle 0000-cursor-rules.mdc

## Objectif

Ce document trace le processus de brainstorming pour améliorer et rationaliser la méta-règle `0000-cursor-rules.mdc` et son écosystème KB associé. L'objectif est de trouver un équilibre entre la rigueur/puissance du système actuel et sa facilité d'utilisation/maintenance.

## Contexte Initial

Discussion initiée suite à l'implémentation du workflow adaptatif (S/M/C) dans la règle `0000`. Reconnaissance de la complexité du système et volonté de challenger certains aspects pour optimiser.

## Décisions Clés Actuelles (Synthèse du 2024-06-22)

**Actions Retenues :**

1.  **Consolidation de la Base de Connaissances (KB) :** Examiner `/core` et `/modules` pour identifier fusions et suppressions.
2.  **Définition d'un Manifeste de Dépendances :** Réfléchir au format et à l'intégration d'un fichier manifeste par règle.
3.  **Documentation Améliorée :** Planifier la création d'une documentation enrichie (scénarios, cookbook) après les autres actions.

**Points Mis en Attente ou Rejetés :**

- **Lisibilité/Maintenabilité :** Statu Quo (priorité cognitive/tokens).
- **Overhead Workflow Adaptatif :** Statu Quo.
- **Interprétation LLM :** Statu Quo.
- **Risque Sur-Ingénierie :** Action différée.
- **Option Lightweight :** Rejetée.
- **Simplification Notation :** Rejetée.

**Prochaines Étapes Convenues :**

1.  Analyse KB pour consolidation.
2.  Définition format manifeste.
3.  Amélioration documentation.

---

## Session du 2024-06-22 - Analyse Consolidation KB

**Analyse :**

- Lecture des fichiers YAML dans `.cursor/kb/core/` et `.cursor/kb/0000-cursor-rules/core/modules/`.
- Identification de potentiels de fusion pour les concepts liés à la sémantique/notation et à la structure des règles.

**Décisions & Actions :**

1.  **Fusion 1 :** `core/semantic-principles.yaml` + `core/semantic-notation.yaml` -> **`core/semantic-language.yaml`** (Créé).
2.  **Fusion 2 :** `core/rule-structure.yaml` + `modules/rule-structure-details.yaml` -> **`core/rule-structure-standard.yaml`** (Créé).
3.  **Mise à Jour :** Références mises à jour dans `0000-cursor-rules.mdc`.
4.  **Suppression :** Anciens fichiers (`semantic-principles.yaml`, `semantic-notation.yaml`, `rule-structure.yaml`, `rule-structure-details.yaml`) supprimés.

**Statut :** Consolidation KB terminée.

---

## Session du [Date] - Définition Manifeste de Dépendances

_(Contenu à ajouter ici)_
