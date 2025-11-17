# 📋 Pull Request Checklist

<!--
  INSTRUCTIONS :

  1. Copiez cette checklist dans votre projet (fichier .github/PULL_REQUEST_TEMPLATE.md)
  2. Supprimez les sections non pertinentes pour votre projet
  3. Personnalisez les critères selon vos besoins
  4. Cochez les cases avec [x] au fur et à mesure

  USAGE :
  - Cette checklist apparaîtra automatiquement dans chaque nouvelle PR
  - Aide à standardiser les revues de code
  - Assure la qualité avant merge
-->

## 📝 Description

<!-- Décrivez brièvement les changements apportés -->

**Type de changement :**
- [ ] 🐛 Bug fix (correction non-breaking)
- [ ] ✨ Nouvelle fonctionnalité (changement non-breaking ajoutant une fonctionnalité)
- [ ] 💥 Breaking change (fix ou feature qui casserait la compatibilité)
- [ ] 📚 Documentation uniquement
- [ ] 🎨 Refactoring (pas de changement fonctionnel)
- [ ] ⚡ Amélioration de performance
- [ ] ✅ Ajout/modification de tests

**Résumé des changements :**
<!-- 2-3 phrases expliquant QUOI et POURQUOI (pas le COMMENT - c'est dans le code) -->

**Issue(s) liée(s) :**
<!-- Référencez les issues avec #numéro -->
Closes #
Fixes #
Relates to #

---

## ✅ Checklist Générale

### Code Quality

- [ ] Mon code suit les conventions de style du projet (PEP 8, etc.)
- [ ] J'ai effectué une auto-revue de mon code
- [ ] J'ai commenté les parties complexes/non-évidentes
- [ ] Aucun code mort (code commenté, imports inutilisés) n'a été laissé
- [ ] Aucun print() ou console.log() de debug n'a été laissé
- [ ] Les noms de variables/fonctions sont clairs et descriptifs

### Tests

- [ ] J'ai ajouté des tests qui prouvent que mon fix fonctionne / ma feature marche
- [ ] Les tests unitaires nouveaux et existants passent localement
- [ ] J'ai testé manuellement les changements (si applicable)
- [ ] Les cas limites (edge cases) sont couverts
- [ ] La couverture de tests n'a pas diminué

**Commande de test utilisée :**
```bash
# Exemple : pytest tests/ -v --cov
```

### Documentation

- [ ] J'ai mis à jour la documentation correspondante (README, docs/, etc.)
- [ ] J'ai ajouté/mis à jour les docstrings des fonctions modifiées
- [ ] J'ai mis à jour le CHANGELOG.md (si applicable)
- [ ] Les exemples d'utilisation sont à jour
- [ ] J'ai ajouté des commentaires dans le code pour les parties complexes

### Sécurité & Secrets

- [ ] Aucune information sensible n'est présente (mots de passe, clés API, tokens)
- [ ] Les fichiers de configuration sensibles sont dans .gitignore
- [ ] Les secrets sont gérés via variables d'environnement (.env)
- [ ] Aucune donnée personnelle (PII) n'est exposée dans les logs/tests

### Dépendances

- [ ] J'ai mis à jour requirements.txt (si de nouvelles dépendances)
- [ ] Les nouvelles dépendances sont justifiées (pas d'overkill)
- [ ] Les versions des packages sont spécifiées
- [ ] `pip install -r requirements.txt` fonctionne sans erreur

### Git & Commits

- [ ] Mes commits suivent les Conventional Commits (feat:, fix:, docs:, etc.)
- [ ] J'ai rebasé ma branche sur la dernière version de `main`/`dev`
- [ ] Pas de conflits de merge
- [ ] L'historique Git est propre (pas de "fix typo", "oops", etc. multiples)
- [ ] Ma branche a un nom descriptif (feature/xxx, fix/xxx)

---

## 🧪 Tests Effectués

### Environnement de Test

- **OS** : <!-- macOS 13.4, Ubuntu 22.04, Windows 11, etc. -->
- **Python** : <!-- 3.8, 3.9, 3.10, 3.11, etc. -->
- **Packages clés** : <!-- numpy 1.24.3, pandas 2.0.3, etc. -->

### Scénarios Testés

<!-- Décrire les tests manuels effectués -->

**Test 1 : [Nom du scénario]**
- [ ] ✅ Fonctionne comme attendu
- Résultat : <!-- Décrire brièvement -->

**Test 2 : [Cas limite]**
- [ ] ✅ Erreur gérée correctement
- Résultat :

**Test 3 : [Performance]**
- [ ] ✅ Pas de régression de performance
- Métriques : <!-- Temps d'exécution, mémoire, etc. -->

---

## 📊 Impact

### Breaking Changes

- [ ] ⚠️ Ce PR introduit des breaking changes
  - Si oui, documenter les changements nécessaires dans la migration :
  <!-- Exemple : Renommer fonction X en Y, changer signature de Z, etc. -->

### Performance

- [ ] 📈 Amélioration de performance (préciser : temps, mémoire, etc.)
- [ ] 🔄 Neutre (pas d'impact)
- [ ] ⚠️ Régression potentielle (justifier et documenter)

**Benchmarks (si applicable) :**
```
Avant :  X.XX secondes
Après :  Y.YY secondes
Gain :   Z%
```

### Compatibilité

- [ ] Compatible avec Python 3.8+
- [ ] Compatible avec les versions précédentes du projet
- [ ] Testé sur Linux / macOS / Windows (cocher les pertinents)

---

## 🔍 Revue de Code - Checklist pour le Reviewer

<!-- Section pour les reviewers -->

### Pour le Reviewer

- [ ] Le code est clair et compréhensible
- [ ] Les tests sont suffisants et pertinents
- [ ] La documentation est à jour et claire
- [ ] Pas de code dupliqué
- [ ] Pas de sur-engineering (YAGNI - You Ain't Gonna Need It)
- [ ] Les performances sont acceptables
- [ ] Les cas d'erreur sont gérés
- [ ] Le code est sécurisé

**Feedback du reviewer :**
<!-- Commentaires, suggestions, questions -->

---

## 📸 Screenshots / Démos

<!-- Si applicable : ajouter des captures d'écran, GIFs, ou liens vers démos -->

**Avant :**
<!-- Image ou description de l'état avant les changements -->

**Après :**
<!-- Image ou description de l'état après les changements -->

---

## 🔗 Contexte Additionnel

<!-- Tout autre contexte utile pour comprendre cette PR -->

**Approche choisie :**
<!-- Expliquer pourquoi cette solution plutôt qu'une autre -->

**Alternatives considérées :**
<!-- Mentionner les autres approches envisagées et pourquoi elles ont été écartées -->

**TODO restants (si applicable) :**
- [ ] Tâche à faire dans une PR future
- [ ] Amélioration potentielle

**Références :**
- Documentation : [lien]
- Article/Paper : [lien]
- Discussion : [lien vers issue/forum]

---

## 🎯 Critères de Merge

**Cette PR peut être mergée quand :**
- [ ] Toutes les CI checks passent (tests, linting, etc.)
- [ ] Au moins 1 reviewer a approuvé
- [ ] Tous les commentaires de review ont été adressés
- [ ] La documentation est à jour
- [ ] Aucun conflit avec la branche de base

**Reviewers requis :** <!-- @mention des personnes -->
- [ ] @reviewer1
- [ ] @reviewer2

---

## 📌 Notes pour le Merge

<!-- Instructions spéciales pour le merge si nécessaire -->

**Type de merge :**
- [ ] Merge commit (garder l'historique)
- [ ] Squash and merge (condenser les commits)
- [ ] Rebase and merge (historique linéaire)

**Actions post-merge :**
- [ ] Déployer en staging
- [ ] Mettre à jour la documentation externe
- [ ] Annoncer le changement (si breaking change)
- [ ] Créer un tag de version (si release)

---

## ✍️ Signature

**Je certifie que :**
- [ ] J'ai lu et suivi les guidelines de contribution
- [ ] Mon code est original ou correctement attribué
- [ ] Je comprends que ce code sera sous licence [LICENCE_DU_PROJET]
- [ ] J'accepte le processus de revue de code

**Auteur :** @[votre_username]
**Date :** YYYY-MM-DD
**Branche :** `[nom_de_votre_branche]`

---

<!--
  TEMPLATES DE MESSAGES DE COMMIT CONVENTIONNELS :

  feat: Ajouter la fonctionnalité X
  fix: Corriger le bug Y
  docs: Mettre à jour la documentation Z
  style: Formater le code selon PEP8
  refactor: Restructurer le module A
  perf: Optimiser l'algorithme B
  test: Ajouter tests pour C
  chore: Mettre à jour les dépendances
  ci: Modifier le pipeline CI/CD

  Exemples complets :
  - feat(auth): ajouter l'authentification OAuth2
  - fix(data): corriger la lecture des fichiers CSV encodés UTF-16
  - docs(readme): ajouter exemple d'utilisation avec Pandas
-->

---

**Merci pour votre contribution ! 🎉**
