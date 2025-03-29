# Configuration ESLint pour les Conventions de Nommage

Cette configuration ESLint a été générée automatiquement à partir des conventions de nommage définies dans les fichiers KB (Knowledge Base) le 2024-03-29.

## À propos de cette configuration

Cette configuration utilise le format **flat config** d'ESLint v9, qui remplace l'ancien format `.eslintrc.*`. Elle est spécifiquement adaptée pour fonctionner avec :

- ESLint version 9.x
- TypeScript version 5.x
- @typescript-eslint/eslint-plugin version 8.x

## Installation

Pour utiliser cette configuration, suivez ces étapes :

1. Assurez-vous que le fichier `eslint.config.js` est dans la racine de votre projet
2. Ajoutez `"type": "module"` à votre package.json car cette configuration utilise la syntaxe ES modules
3. Créez un fichier `tsconfig.json` à la racine de votre projet ou référencez votre fichier tsconfig existant dans la configuration
4. Installez les dépendances nécessaires :

```bash
npm install --save-dev eslint@^9.0.0 @typescript-eslint/eslint-plugin@^8.0.0 @typescript-eslint/parser@^8.0.0
```

## Structure de la configuration

La configuration est organisée en plusieurs sections :

1. **Configuration globale** : Définit les fichiers à ignorer (node_modules, dist, etc.)
2. **Configuration JavaScript** : Règles de base pour les fichiers .js et .jsx
3. **Configuration TypeScript** : Règles de nommage pour les fichiers .ts et .tsx
4. **Configuration React** : Règles spécifiques pour les composants et hooks React
5. **Configuration des tests** : Règles plus souples pour les fichiers de test

## Conventions implémentées

Cette configuration applique les conventions de nommage suivantes :

### Variables

- Variables standard : `camelCase` (ex: `userData`)
- Variables booléennes : préfixées par `is`, `has`, `should`, etc. (ex: `isValid`)
- Constantes : `SCREAMING_SNAKE_CASE` (ex: `MAX_RETRIES`)
- Variables privées : `_camelCase` (ex: `_internalValue`)

### Fonctions

- Fonctions standard : `camelCase()` (ex: `calculateTotal()`)
- Fonctions booléennes : `isPrefixed()` (ex: `isEmailValid()`)
- Fonctions factory : `createPrefixed()` (ex: `createUser()`)
- Gestionnaires d'événements : `handlePrefixed()` (ex: `handleClick()`)

### Classes

- Classes standard : `PascalCase` (ex: `UserProfile`)
- Classes abstraites : `AbstractPascalCase` (ex: `AbstractRepository`)
- Services : `PascalCaseService` (ex: `AuthenticationService`)

### Types

- Interfaces : `PascalCaseInterface` (ex: `UserDataInterface`)
- Types alias : `PascalCaseType` (ex: `ResponseType`)
- Enums : `PascalCaseEnum` (ex: `StatusEnum`)
- Membres d'énumération : `SCREAMING_SNAKE_CASE` (ex: `ACTIVE`)

### React/Vue

- Composants : `PascalCase` (ex: `UserProfile`)
- Hooks : `useCamelCase` (ex: `useFormValidation`)

## Règles globales

- Longueur maximale des identifiants : 50 caractères

## Utilisation

Pour lancer ESLint avec cette configuration :

```bash
npx eslint src/**/*.{js,jsx,ts,tsx}
```

Pour corriger automatiquement les problèmes (quand c'est possible) :

```bash
npx eslint src/**/*.{js,jsx,ts,tsx} --fix
```

## Personnalisation

Vous pouvez personnaliser cette configuration en modifiant directement le fichier `eslint.config.js`. Pour ajouter des configurations supplémentaires, il vous suffit d'ajouter de nouveaux objets au tableau exporté.

## Résolution des problèmes

Si vous rencontrez des erreurs liées au type d'information, assurez-vous que :

1. Votre fichier `tsconfig.json` est correctement configuré
2. Le chemin vers le fichier tsconfig dans `parserOptions.project` est correct
3. Tous les fichiers TypeScript que vous souhaitez vérifier sont inclus dans votre tsconfig

Problèmes courants :

- **Erreur "Missing type information"** : Vérifiez que `parserOptions.project` pointe vers le bon fichier tsconfig.json
- **Erreur "Module type not specified"** : Ajoutez `"type": "module"` à votre package.json
- **Erreur avec les fichiers ignorés** : Vérifiez la propriété `ignores` dans votre configuration

## Source des conventions

Les conventions implémentées dans cette configuration proviennent des fichiers KB suivants :

- `.cursor/kb/naming-principles.yaml` : Principes généraux de nommage
- `.cursor/kb/global-rules.yaml` : Règles globales
- `.cursor/kb/element-conventions.yaml` : Conventions spécifiques par type d'élément
- `.cursor/kb/naming-examples.yaml` : Exemples de noms valides et invalides
- `.cursor/kb/eslint-v9-config.yaml` : Configuration spécifique à ESLint v9
