# Exemples de Bons Composables Vue 3

Voici des exemples de composables Vue 3 bien conçus qui respectent les principes architecturaux et les bonnes pratiques.

## 1. Composable de Domaine: `useUserValidation`

```typescript
// composables/domain/user/useUserValidation.ts
import { ref, computed } from "vue";
import { toValue, type MaybeRefOrGetter } from "vue";
import type { User } from "@/types/User";
import { emailRegex, passwordRegex } from "@/utils/validation";

/**
 * Valide les données utilisateur selon les règles métier
 *
 * @param user - L'utilisateur à valider (peut être un ref, un getter ou une valeur brute)
 * @returns Objet contenant les résultats de validation et les messages d'erreur
 */
export function useUserValidation(user: MaybeRefOrGetter<User>) {
  // État local
  const validationErrors = ref<Record<string, string>>({});

  // Validation du nom
  const isNameValid = computed(() => {
    const u = toValue(user);

    if (!u.name || u.name.trim().length < 2) {
      validationErrors.value.name =
        "Le nom doit contenir au moins 2 caractères";
      return false;
    }

    if (u.name.length > 50) {
      validationErrors.value.name = "Le nom ne doit pas dépasser 50 caractères";
      return false;
    }

    delete validationErrors.value.name;
    return true;
  });

  // Validation de l'email
  const isEmailValid = computed(() => {
    const u = toValue(user);

    if (!u.email || !emailRegex.test(u.email)) {
      validationErrors.value.email = "Adresse email invalide";
      return false;
    }

    delete validationErrors.value.email;
    return true;
  });

  // Validation du mot de passe
  const isPasswordValid = computed(() => {
    const u = toValue(user);

    if (!u.password || !passwordRegex.test(u.password)) {
      validationErrors.value.password =
        "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre";
      return false;
    }

    delete validationErrors.value.password;
    return true;
  });

  // Validation globale
  const isValid = computed(
    () => isNameValid.value && isEmailValid.value && isPasswordValid.value
  );

  // Fonction pour valider manuellement
  function validate() {
    // Force le recalcul des propriétés computed
    const nameValid = isNameValid.value;
    const emailValid = isEmailValid.value;
    const passwordValid = isPasswordValid.value;

    return nameValid && emailValid && passwordValid;
  }

  return {
    // États de validation
    isNameValid,
    isEmailValid,
    isPasswordValid,
    isValid,

    // Erreurs
    validationErrors,

    // Actions
    validate,
  };
}
```

## 2. Composable d'Infrastructure: `useLocalStorage`

```typescript
// composables/infrastructure/storage/useLocalStorage.ts
import { ref, watch } from "vue";
import { toValue, type MaybeRefOrGetter } from "vue";

/**
 * Gère le stockage et la récupération de données dans localStorage
 * avec support de la sérialisation JSON
 *
 * @param key - Clé de stockage dans localStorage
 * @param initialValue - Valeur initiale (optionnelle)
 * @param options - Options de configuration
 * @returns Objet contenant la valeur réactive et les méthodes de manipulation
 */
export function useLocalStorage<T>(
  key: MaybeRefOrGetter<string>,
  initialValue?: T,
  options: {
    serializer?: (value: T) => string;
    deserializer?: (value: string) => T;
    onError?: (error: Error) => void;
  } = {}
) {
  // Utiliser des valeurs par défaut pour les options
  const {
    serializer = JSON.stringify,
    deserializer = JSON.parse,
    onError = console.error,
  } = options;

  // État réactif pour stocker la valeur
  const storedValue = ref<T>(() => {
    try {
      const storageKey = toValue(key);
      const item = window.localStorage.getItem(storageKey);

      // Retourner la valeur stockée si elle existe
      if (item !== null) {
        return deserializer(item);
      }

      // Sinon, utiliser la valeur initiale
      const value =
        initialValue instanceof Function ? initialValue() : initialValue;

      // Si une valeur initiale est fournie, la stocker
      if (value !== undefined) {
        window.localStorage.setItem(storageKey, serializer(value as T));
      }

      return value as T;
    } catch (error) {
      onError(error as Error);
      return initialValue as T;
    }
  });

  // Mettre à jour localStorage quand la valeur change
  watch(
    () => toValue(key),
    (newKey, oldKey) => {
      try {
        // Supprimer l'ancienne clé si elle a changé
        if (oldKey !== newKey) {
          window.localStorage.removeItem(oldKey);
        }

        // Stocker avec la nouvelle clé
        window.localStorage.setItem(newKey, serializer(storedValue.value));
      } catch (error) {
        onError(error as Error);
      }
    }
  );

  // Observer les changements de valeur
  watch(
    storedValue,
    (newValue) => {
      try {
        const storageKey = toValue(key);

        if (newValue === undefined) {
          window.localStorage.removeItem(storageKey);
        } else {
          window.localStorage.setItem(storageKey, serializer(newValue));
        }
      } catch (error) {
        onError(error as Error);
      }
    },
    { deep: true }
  );

  // Fonctions de manipulation
  function setValue(value: T) {
    storedValue.value = value;
  }

  function removeItem() {
    try {
      window.localStorage.removeItem(toValue(key));
      storedValue.value = undefined as unknown as T;
    } catch (error) {
      onError(error as Error);
    }
  }

  return {
    value: storedValue,
    setValue,
    removeItem,
  };
}
```

## 3. Composable UI: `useNavigation`

```typescript
// composables/ui/navigation/useNavigation.ts
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRouter, useRoute, RouteLocationRaw } from "vue-router";

export interface NavigationOptions {
  confirmNavigation?: boolean;
  trackHistory?: boolean;
  maxHistoryLength?: number;
}

/**
 * Gère la navigation avec historique et confirmation
 *
 * @param options - Options de configuration
 * @returns Fonctions et états pour la navigation
 */
export function useNavigation(options: NavigationOptions = {}) {
  const {
    confirmNavigation = false,
    trackHistory = true,
    maxHistoryLength = 10,
  } = options;

  const router = useRouter();
  const route = useRoute();

  // État interne
  const isNavigating = ref(false);
  const navigationHistory = ref<string[]>([]);
  const pendingNavigation = ref<RouteLocationRaw | null>(null);

  // Calculer si l'utilisateur peut retourner en arrière
  const canGoBack = computed(
    () => navigationHistory.value.length > 0 || window.history.length > 1
  );

  // Ajouter la route actuelle à l'historique
  onMounted(() => {
    if (trackHistory) {
      navigationHistory.value.push(route.fullPath);

      // Limiter la taille de l'historique
      if (navigationHistory.value.length > maxHistoryLength) {
        navigationHistory.value.shift();
      }
    }
  });

  // Nettoyer les écouteurs d'événements
  onUnmounted(() => {
    // Nettoyer tout écouteur ou ressource
  });

  // Naviguer vers une route
  async function navigateTo(to: RouteLocationRaw) {
    if (isNavigating.value) return;

    isNavigating.value = true;

    try {
      if (confirmNavigation) {
        pendingNavigation.value = to;
        // La navigation sera complétée après confirmation
      } else {
        await router.push(to);

        if (trackHistory) {
          const path =
            typeof to === "string" ? to : router.resolve(to).fullPath;
          navigationHistory.value.push(path);

          // Limiter la taille de l'historique
          if (navigationHistory.value.length > maxHistoryLength) {
            navigationHistory.value.shift();
          }
        }
      }
    } catch (error) {
      console.error("Navigation error:", error);
    } finally {
      isNavigating.value = false;
    }
  }

  // Confirmer une navigation en attente
  function confirmPendingNavigation() {
    if (pendingNavigation.value) {
      const to = pendingNavigation.value;
      pendingNavigation.value = null;
      navigateTo(to);
    }
  }

  // Annuler une navigation en attente
  function cancelPendingNavigation() {
    pendingNavigation.value = null;
    isNavigating.value = false;
  }

  // Retourner en arrière
  function goBack() {
    if (isNavigating.value) return;

    isNavigating.value = true;

    try {
      if (navigationHistory.value.length > 1) {
        // Enlever la page actuelle
        navigationHistory.value.pop();
        // Récupérer la page précédente
        const previousPath = navigationHistory.value.pop();
        if (previousPath) {
          router.push(previousPath);
        } else {
          router.back();
        }
      } else {
        router.back();
      }
    } catch (error) {
      console.error("Navigation error:", error);
    } finally {
      isNavigating.value = false;
    }
  }

  return {
    // État
    isNavigating,
    canGoBack,
    navigationHistory: computed(() => [...navigationHistory.value]),
    hasPendingNavigation: computed(() => pendingNavigation.value !== null),

    // Actions
    navigateTo,
    goBack,
    confirmPendingNavigation,
    cancelPendingNavigation,
  };
}
```

## 4. Composable d'Application: `useAuthentication`

```typescript
// composables/application/auth/useAuthentication.ts
import { ref, computed, watch } from 'vue'
import { useUserValidation } from '@/composables/domain/user/useUserValidation'
import { useApiAuth } from '@/composables/infrastructure/api/useApiAuth'
import { useLocalStorage } from '@/composables/infrastructure/storage/useLocalStorage'
import type { User } from '@/types/User'

/**
 * Gestion du processus d'authentification complet
 */
export function useAuthentication() {
  // État utilisateur
  const user = ref<User>({
    name: '',
    email: '',
    password: ''
  })

  // Utiliser les composables des autres couches
  const { value: authToken, setValue: setAuthToken, removeItem: removeAuthToken }
    = useLocalStorage<string | null>('auth_token', null)

  const { login: apiLogin, logout: apiLogout, refreshToken: apiRefreshToken }
    = useApiAuth()

  const { isValid, validationErrors, validate }
    = useUserValidation(user)

  // État interne
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const isAuthenticated = computed(() => authToken.value !== null)

  // Tenter de vérifier l'authentification automatiquement
  async function checkAuth() {
    if (!authToken.value) return false

    isLoading.value = true
    error.value = null

    try {
      const result = await apiRefreshToken(authToken.value)
      if (result.success) {
        setAuthToken(result.token)
        return true
      } else {
        // Token invalide ou expiré
        await logout()
        return false
      }
    } catch (err) {
      error.value = 'Erreur lors de la vérification de l'authentification'
      return false
    } finally {
      isLoading.value = false
    }
  }

  // Se connecter avec email/mot de passe
  async function login(email: string, password: string) {
    isLoading.value = true
    error.value = null

    try {
      // Mettre à jour l'utilisateur pour validation
      user.value = {
        ...user.value,
        email,
        password
      }

      // Valider les données
      if (!validate()) {
        error.value = 'Données d'authentification invalides'
        return false
      }

      // Appeler l'API
      const result = await apiLogin(email, password)

      if (result.success) {
        setAuthToken(result.token)
        return true
      } else {
        error.value = result.error || 'Échec de l'authentification'
        return false
      }
    } catch (err) {
      error.value = 'Erreur lors de la tentative de connexion'
      return false
    } finally {
      isLoading.value = false
    }
  }

  // Se déconnecter
  async function logout() {
    isLoading.value = true
    error.value = null

    try {
      if (authToken.value) {
        await apiLogout(authToken.value)
      }

      removeAuthToken()
      return true
    } catch (err) {
      error.value = 'Erreur lors de la déconnexion'
      return false
    } finally {
      isLoading.value = false
    }
  }

  // Vérifier l'authentification au chargement
  checkAuth()

  return {
    // État
    user,
    isAuthenticated,
    isLoading,
    error,
    validationErrors,

    // Actions
    login,
    logout,
    checkAuth
  }
}
```

Chacun de ces exemples illustre les bonnes pratiques pour les composables Vue 3:

1. **Interface claire et documentée** avec JSDoc
2. **Responsabilité unique** pour chaque composable
3. **Paramètres flexibles** avec support de `MaybeRefOrGetter` pour la réactivité
4. **Gestion du cycle de vie** avec `onMounted` et `onUnmounted`
5. **Interfaces minimalistes** ne retournant que le nécessaire
6. **Séparation des préoccupations** selon les couches architecturales
7. **Traitement des erreurs** approprié
8. **Structure cohérente** à travers les différents composables
