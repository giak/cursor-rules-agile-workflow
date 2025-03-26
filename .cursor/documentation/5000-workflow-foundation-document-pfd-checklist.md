# Checklist de Validation du Document Fondation de Projet (PFD)

Cette checklist permet de vérifier rapidement si un Document Fondation de Projet (PFD) répond aux exigences de qualité établies par la règle `@5000-workflow-foundation-document-pfd.mdc`.

## Instructions d'utilisation

1. Utilisez cette checklist à chaque étape clé du processus de création du PFD
2. Pour chaque élément, marquez ✓ (Conforme), ⚠️ (Partiellement conforme) ou ✗ (Non conforme)
3. Pour les éléments partiellement conformes ou non conformes, ajoutez un commentaire expliquant ce qui doit être amélioré
4. Assurez-vous que tous les éléments sont marqués comme "Conformes" avant de finaliser le document

## 1. Structure et Format

| #   | Critère                                                                                                                       | Statut | Commentaires |
| --- | ----------------------------------------------------------------------------------------------------------------------------- | ------ | ------------ |
| 1.1 | Le document utilise le format markdown professionnel                                                                          |        |              |
| 1.2 | Le frontmatter contient toutes les métadonnées requises (titre, version, date, statut, auteurs, approbateurs, classification) |        |              |
| 1.3 | Les sections sont organisées hiérarchiquement avec des titres numérotés                                                       |        |              |
| 1.4 | Une table des matières complète est incluse                                                                                   |        |              |
| 1.5 | Le document est accessible aux publics techniques et non techniques                                                           |        |              |

## 2. Contenu Essentiel

| #    | Critère                                                                             | Statut | Commentaires |
| ---- | ----------------------------------------------------------------------------------- | ------ | ------------ |
| 2.1  | **Introduction**: Objectif, portée et glossaire clairement définis                  |        |              |
| 2.2  | **Vision**: Énoncé de vision, alignement stratégique et critères de succès          |        |              |
| 2.3  | **Vision Technique**: Principes architecturaux, attributs de qualité et contraintes |        |              |
| 2.4  | **Aperçu**: Contexte, objectifs SMART et public cible                               |        |              |
| 2.5  | **Exigences**: Fonctionnelles, non fonctionnelles et cas d'utilisation              |        |              |
| 2.6  | **Architecture**: Système, modèle de données et interfaces utilisateur              |        |              |
| 2.7  | **Approche Technique**: Stack, intégrations et sécurité                             |        |              |
| 2.8  | **Planification**: Chronologie, ressources et évaluation des risques                |        |              |
| 2.9  | **KPIs**: Définitions et méthodologie de mesure                                     |        |              |
| 2.10 | **Stratégie de Test**: Types, environnements et critères d'acceptation              |        |              |
| 2.11 | **Opérations**: Déploiement, support et reprise après sinistre                      |        |              |
| 2.12 | **Développement**: Standards, collaboration et documentation                        |        |              |

## 3. Qualité du Contenu

| #   | Critère                                                                                         | Statut | Commentaires |
| --- | ----------------------------------------------------------------------------------------------- | ------ | ------------ |
| 3.1 | La terminologie est cohérente dans tout le document                                             |        |              |
| 3.2 | Le niveau de détail technique est approprié pour le public cible                                |        |              |
| 3.3 | Des éléments visuels (diagrammes, tableaux) sont utilisés pour clarifier les concepts complexes |        |              |
| 3.4 | La hiérarchie d'information est logique et facilite la navigation                               |        |              |
| 3.5 | Aucun jargon n'est utilisé sans définition dans le glossaire                                    |        |              |

## 4. Alignement Business

| #   | Critère                                                                            | Statut | Commentaires |
| --- | ---------------------------------------------------------------------------------- | ------ | ------------ |
| 4.1 | Les objectifs du projet sont clairement liés aux objectifs commerciaux             |        |              |
| 4.2 | Les exigences sont traçables jusqu'aux objectifs commerciaux                       |        |              |
| 4.3 | Les stratégies d'atténuation des risques sont alignées avec les priorités business |        |              |
| 4.4 | Le calendrier et les ressources sont réalistes et alignés avec le scope            |        |              |
| 4.5 | Les KPIs reflètent la valeur commerciale attendue                                  |        |              |

## 5. Mesurabilité et Objectivité

| #   | Critère                                                            | Statut | Commentaires |
| --- | ------------------------------------------------------------------ | ------ | ------------ |
| 5.1 | Les critères de succès sont quantifiables et mesurables            |        |              |
| 5.2 | Les exigences non fonctionnelles ont des métriques spécifiques     |        |              |
| 5.3 | Les KPIs ont des cibles claires et des méthodes de mesure définies |        |              |
| 5.4 | Les critères d'acceptation sont objectifs et vérifiables           |        |              |
| 5.5 | Les contraintes de performance et de sécurité sont quantifiées     |        |              |

## 6. Exhaustivité et Clarté

| #   | Critère                                                        | Statut | Commentaires |
| --- | -------------------------------------------------------------- | ------ | ------------ |
| 6.1 | Aucune section critique n'est incomplète ou marquée "TBD"      |        |              |
| 6.2 | La profondeur du contenu est adaptée à la complexité du projet |        |              |
| 6.3 | Tous les risques identifiés ont des stratégies d'atténuation   |        |              |
| 6.4 | Toutes les exigences ont des critères d'acceptation            |        |              |
| 6.5 | Les dépendances externes sont documentées                      |        |              |

## 7. Spécificité Technique

| #   | Critère                                                                         | Statut | Commentaires |
| --- | ------------------------------------------------------------------------------- | ------ | ------------ |
| 7.1 | Les versions spécifiques des technologies sont indiquées                        |        |              |
| 7.2 | Les alternatives considérées sont documentées avec justification                |        |              |
| 7.3 | Les patterns architecturaux sont documentés                                     |        |              |
| 7.4 | Les limites architecturales sont clairement définies                            |        |              |
| 7.5 | Les aspects opérationnels (déploiement, monitoring, maintenance) sont spécifiés |        |              |

## 8. Approbations et Formalités

| #   | Critère                                                 | Statut | Commentaires |
| --- | ------------------------------------------------------- | ------ | ------------ |
| 8.1 | Le document inclut une version et une date              |        |              |
| 8.2 | Les auteurs sont clairement identifiés avec leurs rôles |        |              |
| 8.3 | Les approbateurs nécessaires sont identifiés            |        |              |
| 8.4 | Un historique des modifications est maintenu            |        |              |
| 8.5 | Le statut du document est clairement indiqué            |        |              |

## 9. Relations entre Documents

| #   | Critère                                                                                   | Statut | Commentaires |
| --- | ----------------------------------------------------------------------------------------- | ------ | ------------ |
| 9.1 | Le document définit clairement sa relation avec le PRD (Product Requirements Document)    |        |              |
| 9.2 | Le document définit clairement sa relation avec le document d'Architecture                |        |              |
| 9.3 | Il existe une référence au stockage et à la structure des documents connexes              |        |              |
| 9.4 | Le document identifie comment il se positionne par rapport aux artifacts agiles (stories) |        |              |
| 9.5 | Les frontières de responsabilité entre PFD, PRD et Architecture sont clairement établies  |        |              |

## 10. Support du Développement Agile

| #    | Critère                                                                                 | Statut | Commentaires |
| ---- | --------------------------------------------------------------------------------------- | ------ | ------------ |
| 10.1 | Le document est structuré pour supporter un processus de développement itératif         |        |              |
| 10.2 | Les sections principales peuvent être facilement liées aux stories ou epics             |        |              |
| 10.3 | Il existe une stratégie claire pour maintenir le PFD à jour pendant les cycles agiles   |        |              |
| 10.4 | Les hypothèses critiques sont clairement identifiées pour validation précoce            |        |              |
| 10.5 | Le document définit comment les métriques seront suivies et évaluées à chaque itération |        |              |

## Résumé de l'Évaluation

**Score Global**: [Nombre d'éléments conformes] / 50 = [Pourcentage] %

**Évaluation Qualitative**:

- ≥ 90%: Excellent - Prêt pour approbation
- 75-89%: Bon - Nécessite des améliorations mineures
- 60-74%: Moyen - Nécessite des améliorations significatives
- < 60%: Insuffisant - Nécessite une révision majeure

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
- [ ] Réévaluer après refonte majeure

---

**Évaluateur**: \***\*\*\*\*\***\_\_\_\_\***\*\*\*\*\***  
**Date d'Évaluation**: **\*\***\_\_\_\_**\*\***  
**Signature**: \***\*\*\*\*\***\_\_\_\_\***\*\*\*\*\***
