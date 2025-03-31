# Anti-patterns pour les Composables Vue 3

Voici des exemples de composables Vue 3 mal conçus qui ne respectent pas les principes et bonnes pratiques.

## 1. Composable Fourre-tout: `useUtils`

```typescript
// ❌ PROBLÈME: Violation du principe de responsabilité unique
// Un composable ne devrait pas mélanger plusieurs préoccupations non liées
// components/useUtils.ts

import { ref, computed, onMounted } from "vue";

export function useUtils() {
  // État local pour diverses choses non liées
  const counter = ref(0);
  const isLoading = ref(false);
  const theme = ref("light");
  const currentUser = ref(null);

  // Fonctions pour manipuler le compteur
  function increment() {
    counter.value++;
  }

  function decrement() {
    counter.value--;
  }

  // Fonctions pour manipuler le thème
  function toggleTheme() {
    theme.value = theme.value === "light" ? "dark" : "light";
  }

  // Fonction pour charger l'utilisateur
  async function loadUser() {
    isLoading.value = true;
    try {
      // Appel API inline au lieu d'utiliser un composable d'infrastructure
      const response = await fetch("/api/user");
      currentUser.value = await response.json();
    } catch (error) {
      console.error("Failed to load user:", error);
    } finally {
      isLoading.value = false;
    }
  }

  // Fonction pour formater une date
  function formatDate(date) {
    return new Date(date).toLocaleDateString();
  }

  // Calcul de prix avec remise
  function calculateDiscount(price, discount) {
    return price * (1 - discount / 100);
  }

  // Mélange de logique UI et métier
  onMounted(() => {
    loadUser();

    // Logique UI qui devrait être dans un composable UI dédié
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        // Logique pour fermer un modal
      }
    });
  });

  return {
    counter,
    isLoading,
    theme,
    currentUser,
    increment,
    decrement,
    toggleTheme,
    loadUser,
    formatDate,
    calculateDiscount,
  };
}
```

### Problèmes:

1. **Trop de responsabilités**: Ce composable mélange compteur, thème, utilisateur, et autres.
2. **Absence de cohésion**: Les fonctions retournées ne sont pas liées logiquement.
3. **Manque d'organisation**: Ne respecte pas la séparation par couches architecturales.
4. **Mélange d'effets de bord**: Charge des données et ajoute des écouteurs d'événements sans les nettoyer.
5. **API trop large**: Retourne trop de fonctions et d'états non liés.

## 2. Non-respect du cycle de vie: `useEventListener`

```typescript
// ❌ PROBLÈME: Ne nettoie pas les ressources lors du démontage
// composables/ui/useEventListener.ts

import { ref } from "vue";

export function useEventListener(element, eventType, callback) {
  const isListening = ref(false);

  // Pas de vérification si element est valide
  function startListening() {
    // Ne vérifie pas si on écoute déjà
    element.addEventListener(eventType, callback);
    isListening.value = true;
  }

  function stopListening() {
    element.removeEventListener(eventType, callback);
    isListening.value = false;
  }

  // Commence à écouter automatiquement sans attendre onMounted
  startListening();

  // ❌ OUBLI: Pas d'appel à onUnmounted pour nettoyer les écouteurs

  return {
    isListening,
    stopListening,
    startListening,
  };
}
```

### Problèmes:

1. **Absence de nettoyage**: N'utilise pas `onUnmounted` pour nettoyer les écouteurs.
2. **Timing incorrect**: Ajoute des écouteurs immédiatement sans attendre `onMounted`.
3. **Manque de robustesse**: Pas de vérification si l'élément existe ou si on écoute déjà.
4. **Pas de support de réactivité**: Ne gère pas le cas où `element` est une ref.

## 3. Interface trop complexe: `useFormValidation`

```typescript
// ❌ PROBLÈME: Interface trop complexe et difficile à utiliser
// composables/ui/forms/useFormValidation.ts

import { reactive, computed } from "vue";

export function useFormValidation(initialForm) {
  // Forme trop complexe avec trop de niveaux imbriqués
  const state = reactive({
    form: { ...initialForm },
    validations: {
      rules: {},
      errors: {},
      valid: false,
      touched: {},
      dirty: {},
      validated: false,
    },
    ui: {
      submitted: false,
      submitting: false,
      touched: false,
    },
  });

  // Fonction qui expose trop de détails d'implémentation
  function registerValidation(field, rule, message) {
    if (!state.validations.rules[field]) {
      state.validations.rules[field] = [];
    }

    state.validations.rules[field].push({
      rule,
      message,
      validate: () => rule(state.form[field]),
    });
  }

  // Fonction trop complexe qui fait trop de choses
  function validateField(field) {
    const fieldRules = state.validations.rules[field] || [];
    state.validations.touched[field] = true;

    // Réinitialise les erreurs pour ce champ
    if (!state.validations.errors[field]) {
      state.validations.errors[field] = [];
    } else {
      state.validations.errors[field] = [];
    }

    // Valide toutes les règles
    for (const { rule, message, validate } of fieldRules) {
      if (!validate()) {
        state.validations.errors[field].push(message);
      }
    }

    // Mettre à jour l'état dirty
    state.validations.dirty[field] = state.form[field] !== initialForm[field];

    // Retourne un booléen indiquant si le champ est valide
    return state.validations.errors[field].length === 0;
  }

  // Des tas d'autres méthodes complexes...
  function validateAllFields() {
    /* ... */
  }
  function resetValidation() {
    /* ... */
  }
  function resetForm() {
    /* ... */
  }
  function markAsSubmitted() {
    /* ... */
  }
  function markAsSubmitting() {
    /* ... */
  }
  function clearSubmittingState() {
    /* ... */
  }
  function touchField(field) {
    /* ... */
  }
  function touchAllFields() {
    /* ... */
  }

  // Computed properties exposant trop de détails internes
  const isValid = computed(() => {
    for (const field in state.validations.errors) {
      if (state.validations.errors[field].length > 0) {
        return false;
      }
    }
    return true;
  });

  return {
    // Retourne trop d'objets internes et de méthodes
    form: state.form,
    errors: state.validations.errors,
    touched: state.validations.touched,
    dirty: state.validations.dirty,
    submitted: state.ui.submitted,
    submitting: state.ui.submitting,
    isValid,
    validateField,
    validateAllFields,
    registerValidation,
    resetValidation,
    resetForm,
    markAsSubmitted,
    markAsSubmitting,
    clearSubmittingState,
    touchField,
    touchAllFields,
  };
}
```

### Problèmes:

1. **Interface trop large**: Expose beaucoup trop de méthodes et d'états.
2. **Structure trop complexe**: État imbriqué difficile à comprendre et utiliser.
3. **Violation du principe d'interface minimale**: Ne retourne pas uniquement ce qui est nécessaire.
4. **Manque d'abstraction**: Expose trop de détails d'implémentation.
5. **Difficulté d'utilisation**: API complexe qui nécessite beaucoup de code côté consommateur.

## 4. Dépendances externes directes: `useUserProfile`

```typescript
// ❌ PROBLÈME: Référencement direct à des dépendances externes (Pinia store)
// composables/user/useUserProfile.ts

import { computed } from "vue";
import { useUserStore } from "@/stores/user";

export function useUserProfile() {
  // Référence directe au store au lieu d'injection
  const userStore = useUserStore();

  // Dépendances directes au store
  const user = computed(() => userStore.currentUser);

  async function updateProfile(profileData) {
    await userStore.updateProfile(profileData);
  }

  async function loadProfile() {
    await userStore.fetchProfile();
  }

  // Expose directement les getters du store
  const isAdmin = computed(() => userStore.isAdmin);
  const fullName = computed(() => userStore.fullName);

  return {
    user,
    isAdmin,
    fullName,
    updateProfile,
    loadProfile,
  };
}
```

### Problèmes:

1. **Dépendance directe**: Référence directe au store au lieu d'utiliser l'injection de dépendances.
2. **Difficile à tester**: Impossible de mocker facilement la source de données.
3. **Violation d'architecture**: Ne respecte pas la séparation des couches.
4. **Abstraction insuffisante**: Réexpose simplement les fonctions du store sans valeur ajoutée.

## 5. Mauvaise gestion des paramètres réactifs: `useSearch`

```typescript
// ❌ PROBLÈME: Ne supporte pas les paramètres réactifs
// composables/useSearch.ts

import { ref, watch } from "vue";

export function useSearch(query) {
  const results = ref([]);
  const isSearching = ref(false);
  const error = ref(null);

  // Problème: Ne supporte pas si query est un ref ou un computed
  async function search() {
    isSearching.value = true;
    error.value = null;

    try {
      // Utilise query directement au lieu de toValue(query)
      const response = await fetch(`/api/search?q=${query}`);
      results.value = await response.json();
    } catch (err) {
      error.value = "Failed to search";
      results.value = [];
    } finally {
      isSearching.value = false;
    }
  }

  // Ne réagit pas aux changements de query si c'est un ref

  return {
    results,
    isSearching,
    error,
    search,
  };
}
```

### Problèmes:

1. **Manque de support réactif**: N'utilise pas `toValue` pour les paramètres réactifs.
2. **Absence de réactivité**: Ne surveille pas les changements si `query` est un ref.
3. **Mauvaise gestion des erreurs**: Message d'erreur générique sans détails.
4. **Manque de fonctionnalités**: Pas d'options pour configurer la recherche.

## Recommandations générales pour éviter ces anti-patterns:

1. **Responsabilité unique**: Chaque composable ne doit avoir qu'une seule raison d'exister.
2. **Gestion du cycle de vie**: Toujours nettoyer les ressources et écouteurs avec `onUnmounted`.
3. **Interface minimaliste**: Ne retourner que ce qui est nécessaire à l'utilisateur du composable.
4. **Support de réactivité**: Utiliser `toValue` pour les paramètres qui pourraient être réactifs.
5. **Injection de dépendances**: Injecter les dépendances plutôt que les référencer directement.
6. **Organisation par couches**: Respecter la séparation des couches architecturales.
7. **Tests**: Concevoir les composables pour qu'ils soient facilement testables.
8. **Documentation**: Documenter clairement l'interface du composable avec JSDoc.
