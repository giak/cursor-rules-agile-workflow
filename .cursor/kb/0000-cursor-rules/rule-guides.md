# Guide de Création des Règles Cursor

Ce document regroupe les critères de qualité, les principes d'écriture et les bonnes pratiques pour la création et l'évaluation des règles Cursor.

## Principes Fondamentaux

| Principe           | Description                                                                      | Lignes Directrices                                                                                                                                                                                                                                |
| ------------------ | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Clarté**         | Les règles doivent être sans ambiguïté et facilement compréhensibles             | • Utiliser un langage précis avec des significations exactes<br>• Éviter les termes ou expressions ambigus<br>• Définir la terminologie spécialisée lors de sa première utilisation<br>• Utiliser une terminologie cohérente dans toute la règle  |
| **Actionnabilité** | Les règles doivent fournir des conseils clairs et applicables                    | • Se concentrer sur les actions à entreprendre<br>• Fournir des étapes concrètes plutôt que des concepts abstraits<br>• Faire des recommandations directement implémentables<br>• Spécifier les résultats attendus                                |
| **Cohérence**      | Les règles doivent être cohérentes en interne et alignées avec les autres règles | • Maintenir la cohérence de structure et de format<br>• S'assurer que les recommandations ne contredisent pas d'autres règles<br>• Utiliser la notation de compression sémantique établie<br>• Suivre le même modèle pour des concepts similaires |
| **Concision**      | Les règles doivent être aussi brèves que possible tout en restant complètes      | • Éliminer les informations redondantes<br>• Utiliser la compression sémantique pour maximiser la densité d'information<br>• Privilégier la précision à la verbosité<br>• N'inclure que les informations pertinentes                              |
| **Complétude**     | Les règles doivent couvrir tous les aspects pertinents du sujet                  | • Traiter les cas particuliers et les exceptions<br>• Fournir des exemples positifs et négatifs<br>• Inclure les points critiques qui ne doivent pas être violés<br>• Couvrir l'ensemble du périmètre défini par la règle                         |

## Matrice d'Évaluation

### Lisibilité (Priorité: Haute)

_Facilité de lecture et de compréhension_

- Flux logique d'information
- Utilisation appropriée des sections et des en-têtes
- Formatage et style cohérents
- Densité d'information équilibrée

### Applicabilité (Priorité: Haute)

_Utilité et pertinence dans des scénarios réels_

- Définition claire du périmètre
- Modèles glob pertinents
- Catégorisation appropriée
- Contexte explicite d'application

### Maintenabilité (Priorité: Moyenne)

_Facilité de mise à jour et d'adaptation au fil du temps_

- Références aux connaissances externes
- Absence d'informations dupliquées
- Modularité des composants
- Informations de version claires

### Valeur (Priorité: Haute)

_Bénéfice et impact globaux_

- Résout un problème réel
- Fournit des conseils concrets
- Démontre des avantages clairs
- Vaut la surcharge cognitive

## Anti-Patterns Courants

### Sur-spécification

_Règles trop spécifiques et rigides_

**Risques:**

- Difficile à appliquer en dehors de contextes étroits
- Devient rapidement obsolète avec l'évolution des exigences
- Crée des contraintes inutiles

**Remédiation:** Se concentrer sur les principes plutôt que sur des implémentations spécifiques

### Conseils Ambigus

_Règles qui permettent plusieurs interprétations_

**Risques:**

- Application incohérente
- Confusion parmi les utilisateurs
- Efficacité réduite

**Remédiation:** Utiliser un langage précis et des exemples spécifiques

### Duplication de Connaissances

_Copie d'informations au lieu de référencement_

**Risques:**

- Dérive du contenu au fil du temps
- Incohérence entre les sources
- Charge de maintenance

**Remédiation:** Toujours référencer les sources de connaissances externes

### Surcharge Cognitive

_Règles contenant trop d'informations_

**Risques:**

- Compréhension réduite
- Les points importants se perdent
- Décourage l'adoption

**Remédiation:** Prioriser l'information et utiliser la divulgation progressive

## Bonnes Pratiques d'Organisation

1. **Progression Logique:** Le contenu doit suivre une progression logique (Fondation → Contexte → Processus → Détails → Exemples → Points Critiques)

2. **Séparation des Connaissances:** Séparer les connaissances de processus des connaissances de domaine. Référencer les connaissances externes plutôt que de les intégrer.

3. **Divulgation Progressive:** Présenter l'information par ordre d'importance. Les informations les plus importantes doivent venir en premier.

4. **Structure Hiérarchique:** Organiser l'information de manière hiérarchique en utilisant la notation sémantique pour créer des hiérarchies claires.

5. **Référencement Externe:** Utiliser les références aux fichiers KB pour éviter la duplication et faciliter la maintenance.

## Processus de Révision

Pour garantir la qualité d'une règle, utilisez cette liste de contrôle lors de la révision :

- [ ] La règle suit-elle tous les principes fondamentaux ?
- [ ] La structure est-elle claire et logique ?
- [ ] Tous les éléments requis sont-ils présents ?
- [ ] Les références externes sont-elles correctes et à jour ?
- [ ] Les exemples sont-ils pertinents et instructifs ?
- [ ] Les points critiques sont-ils clairement identifiés ?
- [ ] La règle évite-t-elle les anti-patterns communs ?
- [ ] La compression sémantique est-elle appliquée de manière cohérente ?
