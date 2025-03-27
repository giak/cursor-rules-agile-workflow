# Checklist de Validation du Document d'Exigences Produit (PRD)

Cette checklist permet de vérifier rapidement si un Document d'Exigences Produit (PRD) répond aux exigences de qualité établies par la règle `@5002-workflow-product-requirements-document.mdc`.

## Instructions d'utilisation

1. Utilisez cette checklist à chaque étape clé du processus de création du PRD
2. Pour chaque élément, marquez ✓ (Conforme), ⚠️ (Partiellement conforme) ou ✗ (Non conforme)
3. Pour les éléments partiellement conformes ou non conformes, ajoutez un commentaire expliquant ce qui doit être amélioré
4. Assurez-vous que tous les éléments sont marqués comme "Conformes" avant de finaliser le document

## 1. Structure et Format

| #   | Critère                                                                                                           | Statut | Commentaires |
| --- | ----------------------------------------------------------------------------------------------------------------- | ------ | ------------ |
| 1.1 | Le document utilise le format markdown professionnel                                                              |        |              |
| 1.2 | Le frontmatter contient toutes les métadonnées requises (titre, description, version, date, auteur, statut, tags) |        |              |
| 1.3 | Les sections sont organisées hiérarchiquement avec une structure claire                                           |        |              |
| 1.4 | Une table des matières complète est incluse                                                                       |        |              |
| 1.5 | Le document est accessible aux parties prenantes techniques et non techniques                                     |        |              |
| 1.6 | Le document fait référence au PFD correspondant                                                                   |        |              |
| 1.7 | Un historique des modifications est maintenu                                                                      |        |              |

## 2. Contenu Essentiel

| #    | Critère                                                                               | Statut | Commentaires |
| ---- | ------------------------------------------------------------------------------------- | ------ | ------------ |
| 2.1  | **Introduction**: Description du projet, contexte, public cible et énoncé du problème |        |              |
| 2.2  | **Objectifs**: Buts primaires, critères de succès, KPIs et méthodes de mesure         |        |              |
| 2.3  | **Parcours Utilisateur**: Flux principaux, secondaires et diagrammes                  |        |              |
| 2.4  | **Exigences**: Classification MoSCoW, fonctionnelles, non-fonctionnelles, UX/UI       |        |              |
| 2.5  | **Spécifications Techniques**: Vision, stack, architecture, contraintes               |        |              |
| 2.6  | **Plan d'Implémentation**: Statut actuel, phases, jalons, dépendances                 |        |              |
| 2.7  | **Évaluation des Risques**: Risques business, techniques et stratégies d'atténuation  |        |              |
| 2.8  | **Annexes**: Documents connexes, glossaire, matériels de référence                    |        |              |
| 2.9  | **Énoncé du Problème**: Défis, opportunités, besoins non satisfaits                   |        |              |
| 2.10 | **Alternatives Considérées**: Options évaluées et justification des choix             |        |              |
| 2.11 | **Fonctionnalités Exclues**: Éléments explicitement hors périmètre                    |        |              |

## 3. Qualité des Exigences

| #   | Critère                                                                       | Statut | Commentaires |
| --- | ----------------------------------------------------------------------------- | ------ | ------------ |
| 3.1 | Chaque exigence est claire, non ambiguë et précise                            |        |              |
| 3.2 | Les exigences sont testables et vérifiables                                   |        |              |
| 3.3 | La priorité de chaque exigence est clairement indiquée (MoSCoW)               |        |              |
| 3.4 | Les exigences sont réalisables dans les contraintes techniques et temporelles |        |              |
| 3.5 | Les exigences non-fonctionnelles ont des métriques spécifiques                |        |              |
| 3.6 | Les exigences UX/UI incluent des principes clairs et des lignes directrices   |        |              |
| 3.7 | Les critères d'acceptation sont définis pour les exigences clés               |        |              |
| 3.8 | Les dépendances entre exigences sont identifiées                              |        |              |

## 4. Parcours Utilisateur

| #   | Critère                                                                 | Statut | Commentaires |
| --- | ----------------------------------------------------------------------- | ------ | ------------ |
| 4.1 | Les parcours utilisateur principaux sont documentés étape par étape     |        |              |
| 4.2 | Les parcours secondaires et cas alternatifs sont inclus                 |        |              |
| 4.3 | Des diagrammes de flux utilisateur sont inclus                          |        |              |
| 4.4 | Les points de décision et leurs conséquences sont clairement identifiés |        |              |
| 4.5 | Les personas ou types d'utilisateurs sont clairement définis            |        |              |
| 4.6 | Les scénarios couvrent l'ensemble des fonctionnalités clés              |        |              |
| 4.7 | Les interactions système-utilisateur sont clairement identifiées        |        |              |

## 5. Alignement Business et Technique

| #   | Critère                                                                        | Statut | Commentaires |
| --- | ------------------------------------------------------------------------------ | ------ | ------------ |
| 5.1 | Les exigences sont alignées avec les objectifs commerciaux définis dans le PFD |        |              |
| 5.2 | Les contraintes techniques sont prises en compte dans les exigences            |        |              |
| 5.3 | La vision technique est cohérente avec l'architecture globale                  |        |              |
| 5.4 | Les KPIs sont alignés avec les objectifs business                              |        |              |
| 5.5 | Les risques identifiés sont liés aux impacts business                          |        |              |
| 5.6 | Le positionnement et la différenciation du produit sont clairement articulés   |        |              |
| 5.7 | Les alternatives considérées incluent une analyse coûts-bénéfices              |        |              |

## 6. Mesurabilité et Objectivité

| #   | Critère                                                          | Statut | Commentaires |
| --- | ---------------------------------------------------------------- | ------ | ------------ |
| 6.1 | Les objectifs du produit sont spécifiques et mesurables          |        |              |
| 6.2 | Des KPIs quantifiables sont définis avec des cibles précises     |        |              |
| 6.3 | Les critères de succès sont concrets et vérifiables              |        |              |
| 6.4 | Les méthodes de mesure sont clairement définies                  |        |              |
| 6.5 | Les exigences de performance ont des métriques spécifiques       |        |              |
| 6.6 | Des méthodes de validation sont définies pour les exigences clés |        |              |

## 7. Spécifications Techniques

| #   | Critère                                                                | Statut | Commentaires |
| --- | ---------------------------------------------------------------------- | ------ | ------------ |
| 7.1 | La vision technique est clairement articulée                           |        |              |
| 7.2 | La stack technologique est spécifiée avec versions                     |        |              |
| 7.3 | L'architecture proposée est décrite avec composants et flux de données |        |              |
| 7.4 | Les contraintes techniques sont clairement identifiées                 |        |              |
| 7.5 | Les principes de développement sont définis                            |        |              |
| 7.6 | Les points d'intégration externe sont documentés                       |        |              |
| 7.7 | Les considérations de sécurité sont adressées                          |        |              |
| 7.8 | Les standards de code et pratiques de développement sont spécifiés     |        |              |

## 8. Plan d'Implémentation

| #   | Critère                                                                  | Statut | Commentaires |
| --- | ------------------------------------------------------------------------ | ------ | ------------ |
| 8.1 | Le statut actuel du projet est clairement documenté                      |        |              |
| 8.2 | Les phases et jalons sont définis avec un calendrier approximatif        |        |              |
| 8.3 | Les phases techniques sont détaillées                                    |        |              |
| 8.4 | Les dépendances externes et internes sont identifiées                    |        |              |
| 8.5 | Les ressources requises sont spécifiées (personnes, compétences, outils) |        |              |
| 8.6 | Une approche de mise en œuvre progressive est définie si applicable      |        |              |
| 8.7 | Des points de contrôle et critères de passage de phase sont définis      |        |              |

## 9. Évaluation des Risques

| #   | Critère                                                                    | Statut | Commentaires |
| --- | -------------------------------------------------------------------------- | ------ | ------------ |
| 9.1 | Les risques business sont identifiés et évalués (impact, probabilité)      |        |              |
| 9.2 | Les risques techniques sont identifiés et évalués                          |        |              |
| 9.3 | Des stratégies d'atténuation sont définies pour chaque risque significatif |        |              |
| 9.4 | Les alternatives considérées sont documentées avec justification           |        |              |
| 9.5 | Les risques liés aux dépendances externes sont identifiés                  |        |              |
| 9.6 | Les risques d'adoption par les utilisateurs sont considérés                |        |              |
| 9.7 | Des plans de contingence sont définis pour les risques critiques           |        |              |

## 10. Clarté et Accessibilité

| #    | Critère                                                               | Statut | Commentaires |
| ---- | --------------------------------------------------------------------- | ------ | ------------ |
| 10.1 | Le langage est clair, concis et sans ambiguïté                        |        |              |
| 10.2 | Les termes techniques sont définis dans un glossaire                  |        |              |
| 10.3 | Les visualisations sont utilisées efficacement (diagrammes, tableaux) |        |              |
| 10.4 | Le document est bien organisé avec une navigation claire              |        |              |
| 10.5 | Le niveau de détail est approprié pour l'audience cible               |        |              |
| 10.6 | Les sections complexes incluent des exemples                          |        |              |
| 10.7 | Le document évite le jargon inutile                                   |        |              |

## 11. Traçabilité et Références

| #    | Critère                                                              | Statut | Commentaires |
| ---- | -------------------------------------------------------------------- | ------ | ------------ |
| 11.1 | Les exigences sont traçables jusqu'aux objectifs business            |        |              |
| 11.2 | Les références au PFD sont explicites et spécifiques                 |        |              |
| 11.3 | Les documents connexes sont référencés avec liens                    |        |              |
| 11.4 | Un glossaire complet est inclus                                      |        |              |
| 11.5 | Les sources externes et standards utilisés sont cités                |        |              |
| 11.6 | Les exigences peuvent être facilement liées aux epics/stories agiles |        |              |
| 11.7 | Les contraintes d'architecture sont liées aux décisions techniques   |        |              |

## 12. Validation par les Parties Prenantes

| #    | Critère                                                                 | Statut | Commentaires |
| ---- | ----------------------------------------------------------------------- | ------ | ------------ |
| 12.1 | Les parties prenantes business ont validé les objectifs et la portée    |        |              |
| 12.2 | Les parties prenantes techniques ont validé la faisabilité              |        |              |
| 12.3 | Les représentants des utilisateurs ont validé les parcours et exigences |        |              |
| 12.4 | L'équipe de développement a validé le plan d'implémentation             |        |              |
| 12.5 | Les retours des parties prenantes ont été incorporés                    |        |              |
| 12.6 | Le document a été formellement approuvé par les décideurs clés          |        |              |

## Résumé de l'Évaluation

**Score Global**: [Nombre d'éléments conformes] / 80 = [Pourcentage] %

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

**Évaluateur**: **\*\*\*\***\_**\*\*\*\***  
**Date d'Évaluation**: **\*\*\*\***\_**\*\*\*\***  
**Signature**: **\*\*\*\***\_**\*\*\*\***
