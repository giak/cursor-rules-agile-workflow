# Scénario 2: Faites Évoluer Votre Assistant - Modifiez Votre Règle Facilement ! 🛠️🔄

## Objectif : Adapter et Améliorer Vos Assistants Personnels Sans Effort ! 💪

Bravo ! Vous avez créé votre premier assistant (`@9001-init-readme`) dans le Scénario 1. Mais le monde change, vos standards évoluent, et c'est là toute la beauté des règles Cursor : elles sont conçues pour être **modifiées facilement** !

Oubliez la galère de retrouver un ancien prompt pour le corriger, ou de déchiffrer un script complexe. Grâce à la structure claire (`.mdc` + `KB`) mise en place par `0000`, adapter votre assistant est un jeu d'enfant.

**Ce que vous allez découvrir (et pourquoi c'est génial !) :**

1.  Pourquoi la **séparation entre "cerveau" (`.mdc`) et "mémoire" (`KB`)** rend les modifications si simples.
2.  Comment cibler **précisément** l'élément à changer (le template, la logique, les exemples...).
3.  Utiliser (encore !) **l'IA pour vous aider** à modifier le contenu.
4.  Tester et valider votre assistant mis à jour en un clin d'œil.

**Prêt à rendre votre assistant README encore meilleur ? Allons-y !**

## Prérequis

1.  Avoir **terminé le Scénario 1** et donc posséder la règle `@9001-init-readme` fonctionnelle dans votre projet (`.cursor/rules/9001-init-readme.mdc` et `.cursor/kb/9001-init-readme/`).

## Votre Mission d'Évolution : Ajouter des Badges au README ! 뱃✨

Notre assistant `@9001-init-readme` est super, mais un README moderne a souvent des badges (statut du build, licence, etc.) tout en haut.

**Objectif de la modification :** Ajouter une section "Badges" au début du template standard généré par notre assistant.

## Étape 1 : Où se Cache l'Information ? Trouvez la "Mémoire" (KB) ! 🗺️🧠

La première question à se poser est : "Qu'est-ce que je veux changer ?"

*   Est-ce la **logique** de l'assistant (ex: vérifier autre chose avant de créer le fichier) ? -> On irait dans le fichier `.mdc`.
*   Est-ce le **contenu** généré (le texte du README) ? -> C'est dans la **"mémoire" (KB)** !

Dans notre cas, nous voulons changer le *contenu* du README standard. L'information se trouve donc dans le fichier template de la KB.

**Votre Action :** Naviguez jusqu'au fichier template :
`.cursor/kb/9001-init-readme/readme_template.md`

**Point Clé :** Pour cette modification, nous n'avons **pas besoin de toucher au fichier `.mdc`** (le "cerveau"). La logique reste la même, seul le contenu de la "mémoire" change. C'est ça, la puissance de la séparation !

## Étape 2 : Modifier le Template - L'IA à la Rescousse ! ✍️🤖

Ouvrez `readme_template.md`. Nous allons ajouter une section pour les badges au tout début.

**🔥 Le Super-Pouvoir (encore !) : Collaborez avec l'IA !**

Pas besoin de chercher la syntaxe Markdown pour les badges. Demandons à l'IA :

```
@Chat @Web Donne-moi quelques exemples de badges Markdown courants pour un projet GitHub (par exemple: licence MIT, statut build GitHub Actions, version npm). Je veux juste les placeholders pour l'instant.
```

**Votre Action (Assistée !) :**

1.  Prenez les exemples fournis par l'IA (ou vos propres placeholders).
2.  **Modifiez** le fichier `readme_template.md` pour insérer ces badges au début.

**Exemple de modification dans `readme_template.md` :**

```diff:.cursor/kb/9001-init-readme/readme_template.md
+<!-- Badges -->
+<p align="center">
+  <a href="LICENSE.md"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Licence MIT"></a>
+  <a href="https://github.com/<VOTRE_USER>/<VOTRE_REPO>/actions/workflows/main.yml"><img src="https://github.com/<VOTRE_USER>/<VOTRE_REPO>/actions/workflows/main.yml/badge.svg" alt="Build Status"></a>
+  <a href="https://www.npmjs.com/package/<VOTRE_PACKAGE>"><img src="https://img.shields.io/npm/v/<VOTRE_PACKAGE>.svg" alt="Version NPM"></a>
+</p>
+
 # Nom de Votre Projet

 > Une courte description de votre projet.
```

**(N'oubliez pas de remplacer les placeholders comme `<VOTRE_USER>/<VOTRE_REPO>` plus tard si vous utilisez ce template pour de vrai !)**

**Sauvegardez** le fichier `readme_template.md`.

## Étape 3 : (Bonus) Mettre à Jour les Exemples - Gardons Tout Cohérent ! 🔄📚

C'est une bonne pratique : si vous modifiez ce que fait la règle, mettez aussi à jour ses exemples dans la KB pour refléter le changement.

**Votre Action (Assistée !) :**

1.  Ouvrez `.cursor/kb/9001-init-readme/example.md`.
2.  Demandez à l'IA de vous aider à mettre à jour l'exemple de sortie :
    ```
    @Chat Modifie l'exemple de sortie dans ce fichier pour montrer que le README généré inclut maintenant une section de badges (avec des placeholders) au début, avant le titre principal.
    ```
3.  **Intégrez** la modification suggérée par l'IA dans `example.md`.

## Étape 4 : Tester Votre Assistant Amélioré ! 🚀✅

Le moment de vérité !

1.  **Supprimez** le fichier `README.md` existant à la racine de votre projet (pour permettre à l'assistant de le recréer).
2.  Lancez votre assistant mis à jour :
    ```
    @9001-init-readme
    ```

**Résultat Attendu :** Le fichier `README.md` est recréé, et cette fois... **il contient la nouvelle section de badges** tout en haut ! 🎉

## La Magie de la Modification Structurée ✨

Réfléchissez à ce que vous venez de faire :

*   Vous vouliez changer le contenu généré.
*   Vous avez identifié **un seul fichier** à modifier (`readme_template.md`).
*   Vous avez fait la modification (avec l'aide de l'IA).
*   Vous avez testé.

**Comparez cela à l'approche "tout dans le prompt" :** Vous auriez dû retrouver votre ancien (long) prompt, modifier la structure dedans, relancer, espérer que l'IA comprenne bien la modification... Quelle galère !

Avec la structure de règles Cursor :

*   **Modification Chirurgicale :** Vous ciblez exactement ce qui doit changer.
*   **Maintenabilité Incroyable :** Facile de revenir plus tard et de comprendre où faire les ajustements.
*   **Clarté :** La séparation logique (`.mdc`) / connaissance (`KB`) rend tout plus lisible.

## Conclusion : Vos Assistants Évoluent avec Vous ! 🌱

Félicitations ! Vous avez non seulement créé un assistant, mais vous savez maintenant comment le **faire évoluer simplement et efficacement**. C'est essentiel, car vos besoins et vos projets ne sont jamais figés.

La structure mise en place par `0000` n'est pas juste là pour la création initiale, elle est pensée pour **tout le cycle de vie** de vos automatisations personnelles.

**Prochaines étapes possibles :**

*   Essayer de modifier la **logique** (`Ω`) dans le fichier `.mdc` (par exemple, ajouter un message différent si le fichier existe).
*   Ajouter d'autres **fichiers à la KB** (peut-être un `CONTRIBUTING_template.md` ?).
*   Créer un **nouvel assistant** pour une autre tâche répétitive !

**Continuez d'explorer, de modifier et de personnaliser. Vos assistants Cursor sont là pour grandir avec vous et vous faire gagner un temps précieux !** 