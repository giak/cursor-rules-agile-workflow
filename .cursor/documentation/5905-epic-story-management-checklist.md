# Checklist de Validation des Epics et Stories

Cette checklist permet de vérifier rapidement si les Epics et Stories créés répondent aux exigences de qualité établies par la règle `@5905-epic-story-management.mdc`.

## Instructions d'utilisation

1. Utilisez cette checklist pour chaque Epic et Story avant de les valider
2. Pour chaque élément, marquez ✓ (Conforme), ⚠️ (Partiellement conforme) ou ✗ (Non conforme)
3. Pour les éléments partiellement conformes ou non conformes, ajoutez un commentaire expliquant ce qui doit être amélioré
4. Assurez-vous que tous les éléments critiques sont marqués comme "Conformes" avant de considérer l'Epic ou la Story comme prêt(e)

## 1. Structure et Organisation

| #   | Critère                                                                  | Statut | Commentaires |
| --- | ------------------------------------------------------------------------ | ------ | ------------ |
| 1.1 | Les Epics sont stockés dans la structure de répertoire `.ai/epic-{n}/`   |        |              |
| 1.2 | Le fichier Epic est nommé `_epic.md` à la racine du répertoire de l'Epic |        |              |
| 1.3 | Les Stories sont nommées selon le format `{m}-{code}.story.md`           |        |              |
| 1.4 | La numérotation séquentielle des Epics et Stories est respectée          |        |              |
| 1.5 | Les codes des Stories utilisent la convention kebab-case                 |        |              |
| 1.6 | Le statut de l'Epic/Story est clairement indiqué et à jour               |        |              |
| 1.7 | La structure hiérarchique entre Epics et Stories est clairement établie  |        |              |

## 2. Intégration avec la Documentation Projet

| #   | Critère                                                                           | Statut | Commentaires |
| --- | --------------------------------------------------------------------------------- | ------ | ------------ |
| 2.1 | L'Epic référence clairement une ou plusieurs sections du PRD                      |        |              |
| 2.2 | Les objectifs de l'Epic sont alignés avec les exigences du PRD                    |        |              |
| 2.3 | La Story référence la section du PRD qu'elle implémente                           |        |              |
| 2.4 | La Story référence les composants de l'Architecture concernés                     |        |              |
| 2.5 | Les contraintes techniques de l'Architecture sont respectées par la Story         |        |              |
| 2.6 | La traçabilité bidirectionnelle est maintenue (PRD → Epic → Story et inversement) |        |              |
| 2.7 | Toutes les fonctionnalités du PRD sont couvertes par au moins un Epic             |        |              |

## 3. Contenu des Epics

| #   | Critère                                                                               | Statut | Commentaires |
| --- | ------------------------------------------------------------------------------------- | ------ | ------------ |
| 3.1 | **Titre**: Format "Epic-{N}: {Epic Title}" en H1                                      |        |              |
| 3.2 | **Traçabilité**: Référence explicite aux sections du PRD pertinentes                  |        |              |
| 3.3 | **Description**: Vue d'ensemble complète avec limites clairement définies             |        |              |
| 3.4 | **Objectifs**: Liste à puces axée sur la valeur métier                                |        |              |
| 3.5 | **Stories**: Liste à cocher avec nommage approprié et suivi de progression            |        |              |
| 3.6 | **Critères de succès**: Spécifiques, mesurables et réalisables                        |        |              |
| 3.7 | **Risques**: Tableau complet avec impacts, probabilités et stratégies d'atténuation   |        |              |
| 3.8 | **Dépendances**: Références aux autres Epics, dépendances externes et architecturales |        |              |
| 3.9 | **Statut**: Valeur actuelle (non-démarré/en-cours/terminé) clairement visible         |        |              |

## 4. Contenu des Stories

| #    | Critère                                                                                        | Statut | Commentaires |
| ---- | ---------------------------------------------------------------------------------------------- | ------ | ------------ |
| 4.1  | **Titre**: Format approprié avec référence à l'Epic parent                                     |        |              |
| 4.2  | **Traçabilité**: Références explicites au PRD et aux composants d'Architecture                 |        |              |
| 4.3  | **Description**: Format "En tant que {rôle}, je veux {action} afin de {bénéfice}"              |        |              |
| 4.4  | **Statut**: Valeur actuelle (brouillon/en-cours/terminé/annulé) clairement visible             |        |              |
| 4.5  | **Contexte**: Relation avec l'Epic, dépendances, contraintes et considérations architecturales |        |              |
| 4.6  | **Estimation**: Points de Story avec échelle de complexité relative                            |        |              |
| 4.7  | **Critères d'acceptation**: Format "Étant donné {contexte}, quand {action}, alors {attendu}"   |        |              |
| 4.8  | **Critères d'acceptation**: Alignement avec les exigences du PRD                               |        |              |
| 4.9  | **Tâches**: Liste hiérarchique avec suivi d'état et niveau de détail approprié                 |        |              |
| 4.10 | **Principes de développement**: Spécifiques à la Story, respect des contraintes d'architecture |        |              |
| 4.11 | **Notes**: Détails techniques, choix architecturaux et limitations techniques                  |        |              |
| 4.12 | **Communication**: Historique des décisions/questions/clarifications                           |        |              |

## 5. Qualité des Stories (INVEST)

| #   | Critère                                                                                   | Statut | Commentaires |
| --- | ----------------------------------------------------------------------------------------- | ------ | ------------ |
| 5.1 | **Indépendante**: Dépendances minimales avec les autres Stories                           |        |              |
| 5.2 | **Négociable**: Flexible dans l'implémentation, concentrée sur le "quoi" pas le "comment" |        |              |
| 5.3 | **Valuable (Valeur)**: Bénéfice clair pour l'utilisateur identifié                        |        |              |
| 5.4 | **Estimable**: Effort prévisible et compréhensible par l'équipe                           |        |              |
| 5.5 | **Small (Petite)**: Réalisable dans un sprint                                             |        |              |
| 5.6 | **Testable**: Critères d'acceptation vérifiables                                          |        |              |

## 6. Détection des Stories Trop Grandes

| #   | Critère de détection                            | Présent? | Action Proposée |
| --- | ----------------------------------------------- | -------- | --------------- |
| 6.1 | Plus de 8 points d'estimation                   |          |                 |
| 6.2 | Plus de 7 critères d'acceptation                |          |                 |
| 6.3 | Multiples bénéfices utilisateur distincts       |          |                 |
| 6.4 | Traverse plusieurs couches techniques           |          |                 |
| 6.5 | Difficulté d'estimation par l'équipe            |          |                 |
| 6.6 | Indicateurs linguistiques ("et", "ou", "aussi") |          |                 |

## 7. Techniques de Découpage (si nécessaire)

| #    | Technique                                                 | Applicable | Commentaires |
| ---- | --------------------------------------------------------- | ---------- | ------------ |
| 7.1  | **SPIDR - Spike**: Investigation/recherche préalable      |            |              |
| 7.2  | **SPIDR - Path**: Variations de workflow                  |            |              |
| 7.3  | **SPIDR - Interface**: Méthodes d'interaction             |            |              |
| 7.4  | **SPIDR - Data**: Sous-ensembles d'information            |            |              |
| 7.5  | **SPIDR - Rules**: Variations de règles métier            |            |              |
| 7.6  | **Étapes de workflow**: Phases du processus               |            |              |
| 7.7  | **Opérations CRUD**: Create/Read/Update/Delete séparément |            |              |
| 7.8  | **Variations fonctionnelles**: Base puis avancé           |            |              |
| 7.9  | **Performance différée**: Fonction puis optimisation      |            |              |
| 7.10 | **Réduction d'effort**: Parties simples en premier        |            |              |

## 8. Pratiques à Éviter (Anti-Patterns)

| #    | Anti-Pattern                                                        | Présent? | Correction Proposée |
| ---- | ------------------------------------------------------------------- | -------- | ------------------- |
| 8.1  | Stories techniques sans valeur utilisateur claire                   |          |                     |
| 8.2  | Découpage horizontal basé sur les couches techniques                |          |                     |
| 8.3  | Incréments sans bénéfice autonome                                   |          |                     |
| 8.4  | Critères d'acceptation ambigus/non vérifiables                      |          |                     |
| 8.5  | Chaînes de dépendances séquentielles                                |          |                     |
| 8.6  | Estimation arbitraire non basée sur le consensus                    |          |                     |
| 8.7  | Statut non mis à jour                                               |          |                     |
| 8.8  | Stories orphelines sans lien avec un Epic                           |          |                     |
| 8.9  | Lacunes dans la documentation/contexte manquant                     |          |                     |
| 8.10 | Niveau de détail incohérent entre les Stories                       |          |                     |
| 8.11 | Documentation déconnectée (absence de traçabilité PRD/Architecture) |          |                     |
| 8.12 | Ajout de fonctionnalités non spécifiées dans le PRD (scope creep)   |          |                     |

## 9. Bonnes Pratiques

| #    | Critère                                                                      | Statut | Commentaires |
| ---- | ---------------------------------------------------------------------------- | ------ | ------------ |
| 9.1  | Création collaborative avec implication de l'équipe                          |        |              |
| 9.2  | Priorisation basée sur l'impact business                                     |        |              |
| 9.3  | Suivi des décisions/communications importantes                               |        |              |
| 9.4  | Révision périodique des Epics et Stories                                     |        |              |
| 9.5  | Exemples concrets pour les scénarios                                         |        |              |
| 9.6  | Décomposition technique post-validation                                      |        |              |
| 9.7  | Cohérence verticale entre les artefacts (PFD→PRD→Architecture→Epics→Stories) |        |              |
| 9.8  | Mises à jour de statut en temps réel                                         |        |              |
| 9.9  | Cartographie visuelle des relations entre Stories                            |        |              |
| 9.10 | Validation pré-développement (qualité)                                       |        |              |
| 9.11 | Traçabilité bidirectionnelle maintenue                                       |        |              |
| 9.12 | Analyse d'impact sur les autres documents lors des modifications             |        |              |

## Résumé de l'Évaluation

**Score Epic**: [Nombre d'éléments conformes dans les sections 1, 2, 3, 9] / [Nombre total d'éléments applicables] = [Pourcentage] %

**Score Story**: [Nombre d'éléments conformes dans les sections 1, 2, 4, 5, 9] / [Nombre total d'éléments applicables] = [Pourcentage] %

**Évaluation Qualitative**:

- ≥ 90%: Excellent - Prêt pour le développement
- 75-89%: Bon - Nécessite des améliorations mineures
- 60-74%: Moyen - Nécessite des améliorations significatives
- < 60%: Insuffisant - Nécessite une refonte majeure

**Principales Forces**:

1.
2.
3.

**Domaines à Améliorer**:

1.
2.
3.

**Recommandation Finale**:

- [ ] Approuver sans modifications
- [ ] Approuver avec modifications mineures
- [ ] Réviser et soumettre à nouveau
- [ ] Redécouper la Story (voir section 7)

---

**Évaluateur**: **\*\***\_\_\_\_**\*\***  
**Date d'Évaluation**: **\*\***\_\_\_\_**\*\***  
**Signature**: **\*\***\_\_\_\_**\*\***
