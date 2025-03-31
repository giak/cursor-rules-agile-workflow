# Couches Architecturales pour les Composables Vue 3

Les composables Vue 3 doivent être organisés selon les principes de Clean Architecture pour assurer une séparation claire des préoccupations. Cette organisation facilite la maintenance, les tests et l'évolution de l'application.

## 1. Couche Domaine

**Emplacement**: `/composables/domain/`

**Responsabilité**: Encapsuler la logique métier pure, indépendante de l'infrastructure et de l'UI.

**Caractéristiques**:

- Ne dépend d'aucune autre couche
- Contient les règles métier et les entités du domaine
- Implémente les validations et transformations liées au domaine
- Peut être réutilisée dans différents contextes d'application

**Exemples**:

- `useUserValidation` - Validation des données utilisateur selon les règles métier
- `useProductPricing` - Calcul des prix selon les règles de tarification
- `useResumeSchema` - Validation et transformation selon le schéma JSON Resume

**Dépendances autorisées**:

- Autres composables de la couche domaine
- Bibliothèques utilitaires pures (lodash, date-fns, etc.)

## 2. Couche Application

**Emplacement**: `/composables/application/`

**Responsabilité**: Orchestrer les cas d'utilisation de l'application en coordonnant la couche domaine et infrastructure.

**Caractéristiques**:

- Implémente les workflows de l'application
- Coordonne les différentes opérations métier
- Gère l'état applicatif global
- Convertit les données du domaine vers la présentation et vice versa

**Exemples**:

- `useAuthentication` - Gestion complète du workflow d'authentification
- `useResumeBuild` - Orchestration de la construction du CV
- `useCheckoutProcess` - Gestion du processus de commande

**Dépendances autorisées**:

- Composables de la couche domaine
- Composables de la couche infrastructure (via injection)
- Vue Router pour la navigation (si nécessaire)
- Pinia/Vuex pour la gestion d'état global (si nécessaire)

## 3. Couche Infrastructure

**Emplacement**: `/composables/infrastructure/`

**Responsabilité**: Gérer les interactions avec les systèmes externes et les mécanismes de stockage.

**Caractéristiques**:

- Implémente les adaptateurs pour les API externes
- Gère les interactions avec localStorage, sessionStorage, IndexedDB
- S'occupe des exports (PDF, Excel, etc.)
- Implémente les mécanismes de cache et de persistence

**Exemples**:

- `useLocalStorage` - Gestion du stockage local
- `useAPIClient` - Communication avec les API externes
- `usePDFExport` - Export de documents PDF
- `useFirebaseAuth` - Interaction avec Firebase Authentication

**Dépendances autorisées**:

- Bibliothèques d'infrastructure (axios, firebase, etc.)
- Adaptateurs d'API
- Services de stockage

## 4. Couche UI

**Emplacement**: `/composables/ui/`

**Responsabilité**: Gérer les interactions utilisateur et les préoccupations spécifiques à l'interface.

**Caractéristiques**:

- Gère les formulaires, la validation côté UI
- Implémente les comportements d'interface (navigation, modales, etc.)
- Gère les animations et transitions
- S'occupe de la réactivité de l'interface

**Exemples**:

- `useFormValidation` - Validation de formulaires côté UI
- `useNavigation` - Gestion de la navigation
- `useModal` - Contrôle des modales
- `useBreakpoints` - Détection des points de rupture responsive

**Dépendances autorisées**:

- Composables de toutes les autres couches
- Bibliothèques UI (Vue, vue-router, etc.)
- Gestionnaires d'état UI

## Principes d'Organisation

1. **Dépendances unidirectionnelles**: Les couches ne peuvent dépendre que des couches de niveau inférieur.
2. **Injection de dépendances**: Utiliser l'injection de dépendances pour les dépendances externes.
3. **Interfaces claires**: Chaque composable doit avoir une interface clairement définie.
4. **Testabilité**: Tous les composables doivent être conçus pour être testables isolément.

## Organisation par Fonctionnalité

En plus de l'organisation par couche, les composables peuvent être regroupés par fonctionnalité à l'intérieur de chaque couche:

```
/composables
  /domain
    /user
    /product
    /resume
  /application
    /auth
    /checkout
    /profile
  /infrastructure
    /api
    /storage
    /export
  /ui
    /forms
    /navigation
    /modals
```

Cette organisation double facilite la localisation des composables par fonction métier ou par couche technique.
