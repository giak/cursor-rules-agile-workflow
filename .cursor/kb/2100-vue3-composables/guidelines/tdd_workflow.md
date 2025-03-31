# Workflow TDD pour les Composables Vue 3

Ce document décrit le processus de Test-Driven Development (TDD) recommandé pour le développement de composables Vue 3. Suivre ce workflow permet de créer des composables robustes, bien testés et maintenables.

## Étapes du processus TDD

### 1. Définir l'interface

Avant d'écrire des tests ou du code, commencez par définir clairement l'interface du composable:

```typescript
/**
 * Gère la pagination d'une liste d'éléments
 *
 * @param options - Options de configuration de la pagination
 * @returns État et méthodes pour contrôler la pagination
 */
export function usePagination(options?: PaginationOptions) {
  // L'implémentation viendra plus tard

  return {
    // État à exposer
    currentPage,
    pageSize,
    totalPages,
    items,

    // Actions à exposer
    goToPage,
    nextPage,
    prevPage,
  };
}
```

#### Points clés:

- Identifiez clairement les paramètres d'entrée
- Définissez les valeurs qui seront retournées
- Documentez l'interface avec JSDoc
- Considérez les types TypeScript

### 2. Écrire les tests unitaires

Écrivez des tests pour chaque aspect du composable, en utilisant un framework comme Vitest ou Jest:

```typescript
// composables/pagination/usePagination.test.ts
import { describe, it, expect, beforeEach } from "vitest";
import { usePagination } from "./usePagination";

describe("usePagination", () => {
  // Test d'initialisation
  it("should initialize with default values when no options provided", () => {
    const { currentPage, pageSize } = usePagination();
    expect(currentPage.value).toBe(1);
    expect(pageSize.value).toBe(10);
  });

  // Test avec options personnalisées
  it("should initialize with custom values when options provided", () => {
    const { currentPage, pageSize } = usePagination({
      initialPage: 2,
      pageSize: 20,
    });
    expect(currentPage.value).toBe(2);
    expect(pageSize.value).toBe(20);
  });

  // Test des comportements
  describe("pagination behavior", () => {
    let pagination;

    beforeEach(() => {
      pagination = usePagination({
        totalItems: 100,
        pageSize: 10,
      });
    });

    it("should calculate totalPages correctly", () => {
      expect(pagination.totalPages.value).toBe(10);
    });

    it("should go to specified page", () => {
      pagination.goToPage(3);
      expect(pagination.currentPage.value).toBe(3);
    });

    it("should not go beyond last page", () => {
      pagination.goToPage(15);
      expect(pagination.currentPage.value).toBe(10);
    });

    it("should not go below first page", () => {
      pagination.goToPage(0);
      expect(pagination.currentPage.value).toBe(1);
    });

    it("should move to next page", () => {
      pagination.nextPage();
      expect(pagination.currentPage.value).toBe(2);
    });

    it("should move to previous page", () => {
      pagination.goToPage(5);
      pagination.prevPage();
      expect(pagination.currentPage.value).toBe(4);
    });
  });

  // Test des cas limites
  describe("edge cases", () => {
    it("should handle zero items", () => {
      const { totalPages, nextPage, currentPage } = usePagination({
        totalItems: 0,
      });
      expect(totalPages.value).toBe(0);

      nextPage(); // Essayer de passer à la page suivante
      expect(currentPage.value).toBe(1); // Reste à 1
    });

    it("should handle reactive changes to total items", async () => {
      const totalItems = ref(100);
      const { totalPages } = usePagination({ totalItems });

      expect(totalPages.value).toBe(10);

      totalItems.value = 200;
      await nextTick();
      expect(totalPages.value).toBe(20);
    });
  });
});
```

#### Points clés:

- Testez l'initialisation avec valeurs par défaut et personnalisées
- Testez chaque fonction retournée
- Testez les cas limites et d'erreur
- Testez la réactivité (si applicable)
- Mocker les dépendances externes si nécessaire

### 3. Implémenter le composable

Maintenant, implémentez le composable pour faire passer les tests:

```typescript
// composables/pagination/usePagination.ts
import { ref, computed, watch } from "vue";
import { toValue, type MaybeRefOrGetter } from "vue";

export interface PaginationOptions {
  initialPage?: number;
  pageSize?: number;
  totalItems?: MaybeRefOrGetter<number>;
}

export function usePagination(options: PaginationOptions = {}) {
  // Valeurs par défaut
  const {
    initialPage = 1,
    pageSize: initialPageSize = 10,
    totalItems: initialTotalItems = 0,
  } = options;

  // État réactif
  const currentPage = ref(initialPage);
  const pageSize = ref(initialPageSize);
  const totalItemsRef = ref(toValue(initialTotalItems));

  // Observer les changements dans totalItems si c'est une ref
  if (typeof initialTotalItems === "object" && "value" in initialTotalItems) {
    watch(initialTotalItems, (newVal) => {
      totalItemsRef.value = newVal;
    });
  }

  // Propriétés calculées
  const totalPages = computed(() => {
    if (totalItemsRef.value === 0) return 0;
    return Math.ceil(totalItemsRef.value / pageSize.value);
  });

  const items = computed(() => {
    // Calcul des éléments à afficher pour la page courante
    const start = (currentPage.value - 1) * pageSize.value;
    const end = Math.min(start + pageSize.value, totalItemsRef.value);
    return { start, end };
  });

  // Actions
  function goToPage(page: number) {
    // Assurer que la page est dans les limites valides
    if (totalPages.value === 0) {
      currentPage.value = 1;
      return;
    }

    currentPage.value = Math.max(1, Math.min(page, totalPages.value));
  }

  function nextPage() {
    goToPage(currentPage.value + 1);
  }

  function prevPage() {
    goToPage(currentPage.value - 1);
  }

  return {
    // État
    currentPage,
    pageSize,
    totalPages,
    items,

    // Actions
    goToPage,
    nextPage,
    prevPage,
  };
}
```

#### Points clés:

- Implémenter l'interface définie à l'étape 1
- Faire passer les tests écrits à l'étape 2
- Utiliser `toValue` pour les paramètres réactifs
- Observer les changements quand nécessaire

### 4. Tests d'intégration

Une fois les tests unitaires réussis, vérifiez l'intégration avec de vrais composants:

```typescript
// tests/integration/PaginationIntegration.spec.ts
import { mount } from "@vue/test-utils";
import { usePagination } from "@/composables/pagination/usePagination";
import PaginationComponent from "./PaginationComponent.vue";

describe("Pagination Integration", () => {
  it("should work correctly when integrated with a component", async () => {
    const wrapper = mount(PaginationComponent, {
      props: {
        items: Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`),
        pageSize: 10,
      },
    });

    // Vérifier l'affichage initial
    expect(wrapper.findAll(".item")).toHaveLength(10);

    // Aller à la page suivante
    await wrapper.find(".next-button").trigger("click");

    // Vérifier que les bons éléments sont affichés
    expect(wrapper.findAll(".item")[0].text()).toBe("Item 11");
  });
});
```

```vue
<!-- tests/integration/PaginationComponent.vue -->
<template>
  <div>
    <div class="items">
      <div v-for="item in visibleItems" :key="item" class="item">
        {{ item }}
      </div>
    </div>

    <div class="pagination">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="prev-button"
      >
        Previous
      </button>

      <span>Page {{ currentPage }} of {{ totalPages }}</span>

      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="next-button"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { usePagination } from "@/composables/pagination/usePagination";

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  pageSize: {
    type: Number,
    default: 10,
  },
});

const {
  currentPage,
  totalPages,
  items: pageItems,
  nextPage,
  prevPage,
} = usePagination({
  totalItems: computed(() => props.items.length),
  pageSize: props.pageSize,
});

const visibleItems = computed(() => {
  const { start, end } = pageItems.value;
  return props.items.slice(start, end);
});
</script>
```

#### Points clés:

- Tester l'intégration avec de vrais composants
- Vérifier le comportement interactif
- S'assurer que l'état du composable reste cohérent

### 5. Documentation et exemples

Complétez la documentation JSDoc et ajoutez des exemples d'utilisation:

````typescript
/**
 * Gère la pagination d'une liste d'éléments
 *
 * @param options - Options de configuration de la pagination
 * @param options.initialPage - Page initiale (défaut: 1)
 * @param options.pageSize - Nombre d'éléments par page (défaut: 10)
 * @param options.totalItems - Nombre total d'éléments (peut être référence réactive)
 *
 * @returns État et méthodes pour contrôler la pagination
 *
 * @example
 * Basic usage:
 * ```ts
 * const { currentPage, totalPages, nextPage, prevPage } = usePagination({
 *   totalItems: 100,
 *   pageSize: 10
 * })
 * ```
 *
 * With reactive total:
 * ```ts
 * const items = ref([...])
 * const { currentPage, items: paginatedItems } = usePagination({
 *   totalItems: computed(() => items.value.length)
 * })
 *
 * // Displayed items
 * const displayedItems = computed(() => {
 *   const { start, end } = paginatedItems.value
 *   return items.value.slice(start, end)
 * })
 * ```
 */
export function usePagination(options: PaginationOptions = {}) {
  // Implémentation...
}
````

## Bonnes pratiques TDD pour les composables

1. **Tests isolés**: Testez chaque composable indépendamment des autres.
2. **Mocks appropriés**: Mocker les dépendances externes pour isoler les tests.
3. **Test de réactivité**: Vérifiez que le composable réagit correctement aux changements réactifs.
4. **Tests d'interface**: Assurez-vous que l'interface publique est stable et respecte les contrats.
5. **Granularité**: Préférez plusieurs petits composables testables à un grand composable complexe.

## Structure des tests recommandée

```
/composables
  /domain
    /user
      useUserValidation.ts
      useUserValidation.test.ts
  /ui
    /pagination
      usePagination.ts
      usePagination.test.ts
      usePagination.integration.test.ts
  /infrastructure
    /storage
      useLocalStorage.ts
      useLocalStorage.test.ts
      useLocalStorage.mock.ts  # pour les tests d'intégration
```

## Outils recommandés

- **Vitest**: Framework de test rapide et compatible avec Vue
- **@vue/test-utils**: Utilitaires de test pour Vue
- **vitest-mock-extended**: Pour créer des mocks typés
- **happy-dom** ou **jsdom**: Pour simuler le DOM

## Workflow complet

1. **Spécification**: Définir clairement ce que le composable doit faire
2. **Interface**: Définir l'interface (paramètres et retours)
3. **Tests**: Écrire les tests unitaires
4. **Implémentation**: Coder le composable pour faire passer les tests
5. **Refactoring**: Améliorer le code sans casser les tests
6. **Documentation**: Documenter l'API et fournir des exemples
7. **Intégration**: Tester l'intégration avec d'autres composants
8. **Revue**: Faire réviser le code et les tests par les pairs
