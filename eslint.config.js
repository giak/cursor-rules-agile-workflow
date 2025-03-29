// ESLint flat config générée à partir des conventions de nommage
// Date de génération: 2024-03-29
// Version d'ESLint ciblée: 9

import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  // Configuration globale
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      '.eslint/**',
      'test_structured_command/**'
    ]
  },

  // Configuration de base pour tous les fichiers JavaScript
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module'
    },
    rules: {
      // Règle globale pour la longueur maximale
      'id-length': ['error', { max: 50 }]
    }
  },
  
  // Configuration spécifique pour TypeScript
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        project: './tsconfig.json'
      }
    },
    plugins: {
      '@typescript-eslint': typescriptEslint
    },
    rules: {
      // Désactiver les règles de camelcase standard pour éviter les conflits
      'camelcase': 'off',
      
      // Règles de nommage pour les variables et fonctions
      '@typescript-eslint/naming-convention': [
        'error',
        // Variables standard (camelCase)
        {
          selector: 'variable',
          format: ['camelCase'],
          filter: {
            regex: '^(is|has|should|can|will|did)',
            match: false
          }
        },
        // Variables booléennes (isPrefixed)
        {
          selector: 'variable',
          types: ['boolean'],
          format: ['camelCase'],
          prefix: ['is', 'has', 'should', 'can', 'will', 'did']
        },
        // Constantes (SCREAMING_SNAKE_CASE)
        {
          selector: 'variable',
          modifiers: ['const'],
          format: ['UPPER_CASE'],
          filter: {
            regex: '^[a-z]',
            match: false
          }
        },
        // Variables privées (_prefixed)
        {
          selector: 'memberLike',
          modifiers: ['private'],
          format: ['camelCase'],
          leadingUnderscore: 'require'
        },
        // Fonctions standard (camelCase)
        {
          selector: 'function',
          format: ['camelCase'],
          filter: {
            regex: '^(is|has|should|can|will|did|handle|on|create|make)',
            match: false
          }
        },
        // Fonctions booléennes (isPrefixed)
        {
          selector: 'function',
          filter: { 
            regex: '^(is|has|should|can)',
            match: true
          },
          format: ['camelCase']
        },
        // Fonctions factory (createPrefixed)
        {
          selector: 'function',
          filter: {
            regex: '^(create|make)',
            match: true
          },
          format: ['camelCase']
        },
        // Gestionnaires d'événements (handlePrefixed, onPrefixed)
        {
          selector: 'function',
          filter: {
            regex: '^(handle|on)',
            match: true
          },
          format: ['camelCase']
        },
        // Classes standard (PascalCase)
        {
          selector: 'class',
          format: ['PascalCase']
        },
        // Classes abstraites (AbstractPrefixed)
        {
          selector: 'class',
          filter: {
            regex: '^Abstract',
            match: true
          },
          format: ['PascalCase'],
          prefix: ['Abstract']
        },
        // Services (PascalCaseService)
        {
          selector: 'class',
          filter: {
            regex: 'Service$',
            match: true
          },
          format: ['PascalCase'],
          suffix: ['Service']
        },
        // Interfaces (PascalCaseInterface)
        {
          selector: 'interface',
          format: ['PascalCase'],
          suffix: ['Interface']
        },
        // Types alias (PascalCaseType)
        {
          selector: 'typeAlias',
          format: ['PascalCase'],
          suffix: ['Type']
        },
        // Enums (PascalCaseEnum)
        {
          selector: 'enum',
          format: ['PascalCase'],
          suffix: ['Enum']
        },
        // Membres d'enum (SCREAMING_SNAKE_CASE)
        {
          selector: 'enumMember',
          format: ['UPPER_CASE']
        }
      ],
      
      // Règle globale pour la longueur maximale
      'id-length': ['error', { max: 50 }]
    }
  },
  
  // Configuration spécifique pour les fichiers TSX (composants React)
  {
    files: ['**/*.tsx'],
    rules: {
      '@typescript-eslint/naming-convention': [
        'error',
        // Composants React (PascalCase)
        {
          selector: 'variable',
          filter: {
            regex: '^[A-Z]',
            match: true
          },
          format: ['PascalCase']
        },
        {
          selector: 'function',
          filter: {
            regex: '^[A-Z]',
            match: true
          },
          format: ['PascalCase']
        },
        // Hooks React (useCamelCase)
        {
          selector: 'function',
          filter: {
            regex: '^use[A-Z]',
            match: true
          },
          format: ['camelCase']
        }
      ]
    }
  },
  
  // Configuration pour les fichiers de test
  {
    files: ['**/*.{spec,test}.{js,jsx,ts,tsx}'],
    rules: {
      // Les règles peuvent être moins restrictives pour les tests
    }
  }
];
