# Guide de Structure des Règles Cursor

Ce document définit la structure attendue pour les règles Cursor, avec une emphase sur la séparation des préoccupations entre logique cognitive, références KB et délégation LLM.

## Structure de base d'une règle

Chaque règle doit comporter les sections suivantes:

```
---
name: Nom de la Règle
description: "VERB quand CONTEXT pour GOAL"
categories: [catégorie1, catégorie2]
glob: "pattern/pour/fichiers/**/*.{extension}"
always_apply: true|false
[options additionnelles]
---

# Titre de la Règle

↹ kb•domaine [p=priorité] { ... }
Σ knowledge•references

↹ principles•core [p=priorité] { ... }
Σ nom•du•groupe•de•principes

↹ Ω•operation [p=priorité] -> [ ... ]
Σ nom•du•processus•cognitif

↹ LLM•role [p=priorité] { ... }
Σ nom•du•modèle•de•délégation

[sections optionnelles additionnelles]

Σ mot•clé•1 ⊕ mot•clé•2 ⊕ mot•clé•3
```

## Sections Obligatoires

### 1. Références KB (`kb•`)

Cette section doit pointer vers des fichiers de connaissances externes plutôt que de dupliquer l'information:

```
↹ kb•domain [p=1] {
  ⊕ resource1: "chemin/vers/resource1.yaml",
  ⊕ resource2: "chemin/vers/resource2.md",
  ⊕ resource_group: {
    subresource1: "chemin/vers/subresource1.json",
    subresource2: "chemin/vers/subresource2.yaml"
  }
}
Σ knowledge•references
```

### 2. Opérateurs Cognitifs (`Ω•`)

Cette section définit les processus de raisonnement, pas simplement des informations:

```
↹ Ω•operation [p=1] -> [
  ⊕ étape1 {
    sous_étape1 | considération1,
    sous_étape2 | considération2,
    sous_étape3 | considération3
  }

  ⊕ étape2 {
    sous_étape1 → sous_étape2 → sous_étape3
  }
]
Σ nom•du•processus
```

Ou pour les processus plus linéaires:

```
↹ Ω•operation [p=1] -> (
  étape1(paramètres) | considérations
  → étape2(paramètres) | considérations
  → étape3(paramètres) | considérations
)
Σ nom•du•processus
```

### 3. Délégation LLM (`LLM•`)

Cette section définit comment le LLM devrait contribuer:

```
↹ LLM•role [p=1] {
  ⊕ tasks {
    task1: description | ref: reference,
    task2: description | ref: reference
  }

  ⊕ inputs {
    input1: description | for: purpose,
    input2: description | for: purpose
  }

  ⊕ outputs {
    output1: description_or_structure,
    output2: description_or_structure
  }

  ⊕ constraints {
    constraint1: description | ref: reference,
    constraint2: description | ref: reference
  }

  ⊕ validation_criteria {
    criterion1: description | based_on: reference,
    criterion2: description | based_on: reference
  }
}
Σ llm•delegation•type
```

## Sections Recommandées

### 1. Principes (`principles•`)

Définit les principes fondamentaux et les valeurs:

```
↹ principles•category [p=1] {
  ⊕ principle_group1 {
    principle1: description | context_or_constraint,
    principle2: description | context_or_constraint
  }

  ⊕ principle_group2 [
    item1: description | context_or_constraint,
    item2: description | context_or_constraint
  ]
}
Σ principles•category
```

### 2. Contraintes (`constraints•`)

Établit les limites et les cas à éviter:

```
↹ constraints•category [p=1] {
  ⊕ constraint_group [
    constraint1: description | consequence,
    constraint2: description | consequence
  ]
}
Σ constraint•category
```

## Erreurs Courantes

1. **Mélange de connaissance et logique cognitive**

   - ❌ Incorporer des données, exemples ou référentiels directement dans la règle
   - ✅ Pointer vers des fichiers KB externes et se concentrer sur le processus de raisonnement

2. **Absence de processus cognitif explicite**

   - ❌ Simplement lister les faits ou les directives sans expliquer le raisonnement
   - ✅ Définir des opérateurs cognitifs qui montrent comment penser au problème

3. **Délégation LLM vague**
   - ❌ Instructions générales sans structure claire ou critères de validation
   - ✅ Définir précisément les tâches, entrées, sorties et contraintes pour le LLM

## Compression Sémantique

Utilisez la notation de compression pour rendre les règles plus concises:

- `|` pour les considérations contextuelles
- `→` pour les séquences d'étapes
- `⊕` pour les éléments d'un groupe
- `Σ` pour les conclusions ou résumés
- `ref:` pour les références à d'autres éléments

## Exemple Complet

Voir les exemples de règles dans le répertoire d'exemples pour des implémentations complètes.
