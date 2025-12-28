---
layout: default
---

⏱️ **Durée estimée :** 45 minutes (exercice pratique complet)
📋 **Prérequis :** [Git Basics](1-git_basics.md), [Local & Remote Repositories](2-local_remote_repositories.md), [Getting Started with GitHub](3-getting_started_with_github.md), [Branching Strategy](4-branching_strategy.md)
🎯 **Objectifs :** 
- Mettre en pratique l'ensemble du workflow Git
- Contribuer une amélioration réelle au guide
- Maîtriser le processus de Pull Request
- Valider ses acquis en situation réelle

**TL;DR :** Exercice fil rouge qui vous guide pour faire votre première contribution open source en corrigeant une faute d'orthographe dans ce guide.
# 🎯 Exercice Fil Rouge : Votre Première Contribution

## 🚀 Objectif de l'exercice

**Mission :** Corriger une faute d'orthographe volontaire dans ce guide et soumettre votre première Pull Request !

Cet exercice vous fait traverser **tout le workflow Git/GitHub** en situation réelle :
- Fork d'un projet open source
- Clone local et création de branche
- Modification et commit avec message conventionnel
- Push et création d'une Pull Request

**🎁 Bonus :** Votre contribution sera réellement utile au projet !

---

## 📋 Étapes détaillées

### Étape 1 : Fork du repository

1. **Rendez-vous sur :** https://github.com/yajeddig/Guide-du-Developpeur-Scientifique
2. **Cliquez sur "Fork"** en haut à droite
3. **Laissez les options par défaut** et cliquez "Create fork"

✅ **Validation :** Vous devriez voir votre fork à l'adresse `https://github.com/VOTRE_USERNAME/Guide-du-Developpeur-Scientifique`

### Étape 2 : Clone local

```bash
# Remplacez VOTRE_USERNAME par votre nom d'utilisateur GitHub
git clone https://github.com/VOTRE_USERNAME/Guide-du-Developpeur-Scientifique.git

# Naviguez dans le dossier
cd Guide-du-Developpeur-Scientifique

# Vérifiez votre remote
git remote -v
```

✅ **Validation :** Vous devriez voir deux lignes avec `origin` pointant vers votre fork.

### Étape 3 : Ajout du remote upstream

```bash
# Ajoutez le repository original comme upstream
git remote add upstream https://github.com/yajeddig/Guide-du-Developpeur-Scientifique.git

# Vérifiez
git remote -v
```

✅ **Validation :** Vous devriez maintenant voir 4 lignes : `origin` (votre fork) et `upstream` (repo original).

### Étape 4 : Création de votre branche

```bash
# Assurez-vous d'être sur main et à jour
git checkout main
git pull upstream main

# Créez votre branche de travail
git checkout -b fix/typo-section-git

# Vérifiez votre branche
git branch
```

✅ **Validation :** Votre branche active devrait être `fix/typo-section-git` (marquée avec *).

### Étape 5 : Trouvez et corrigez la faute

**🔍 Mission de détective :** Une faute d'orthographe se cache dans le fichier `1-git_basics/2-local_remote_repositories.md`

**Indice :** Cherchez la section "**Liaison entre dépôt local et distant**" et lisez attentivement... 👀

<!-- Faute volontaire : "liason" au lieu de "liaison" à la ligne ~45 -->

1. **Ouvrez le fichier :** `1-git_basics/2-local_remote_repositories.md`
2. **Trouvez la faute** (elle se trouve dans le texte d'explication)
3. **Corrigez-la** avec votre éditeur de texte favori
4. **Sauvegardez** le fichier

### Étape 6 : Commit de votre correction

```bash
# Vérifiez les fichiers modifiés
git status

# Ajoutez votre modification
git add 1-git_basics/2-local_remote_repositories.md

# Commitez avec un message conventionnel
git commit -m "fix(git-basics): corriger faute d'orthographe dans section liaison local/distant

- Correction de 'liason' en 'liaison' dans l'explication
- Améliore la lisibilité de la documentation"
```

✅ **Validation :** `git log --oneline -1` devrait montrer votre commit avec le message.

### Étape 7 : Push vers votre fork

```bash
# Poussez votre branche vers votre fork
git push origin fix/typo-section-git
```

✅ **Validation :** GitHub vous affichera un lien pour créer une Pull Request.

### Étape 8 : Création de la Pull Request

1. **Suivez le lien** affiché dans votre terminal OU
2. **Allez sur votre fork** sur GitHub
3. **Cliquez sur "Compare & pull request"**
4. **Remplissez le formulaire :**

**Titre :** `fix(git-basics): corriger faute d'orthographe dans section liaison`

**Description :**
```markdown
## 📝 Description
Correction d'une faute d'orthographe dans le fichier `1-git_basics/2-local_remote_repositories.md`.

## 🔧 Changements
- Correction de "liason" en "liaison" dans la section expliquant la liaison entre dépôt local et distant

## ✅ Checklist
- [x] Faute corrigée
- [x] Fichier sauvegardé
- [x] Commit avec message conventionnel
- [x] Branche pushée

## 🎯 Type de contribution
- [x] Correction orthographique/grammaticale
- [ ] Nouvelle fonctionnalité
- [ ] Correction de bug
- [ ] Amélioration de documentation

**Premier exercice fil rouge terminé !** 🎉
```

5. **Ajoutez le label** `good-first-issue` si disponible
6. **Cliquez sur "Create pull request"**

---

## ✅ Checklist de validation finale

### Avant de soumettre votre PR :

- [ ] **Fork créé** : Votre repository fork existe sur GitHub
- [ ] **Clone réussi** : Repository cloné localement
- [ ] **Branche créée** : Branche `fix/typo-section-git` active
- [ ] **Faute trouvée** : Faute d'orthographe identifiée et corrigée
- [ ] **Commit propre** : Message de commit suit les conventions
- [ ] **Push réussi** : Branche poussée vers votre fork
- [ ] **PR créée** : Pull Request ouverte avec description complète

### Auto-évaluation des acquis :

- [ ] **Git flow maîtrisé** : Je comprends fork → clone → branch → commit → push → PR
- [ ] **Messages de commit** : J'utilise des messages clairs et conventionnels  
- [ ] **Collaboration** : Je sais contribuer à un projet open source
- [ ] **GitHub interface** : Je navigue facilement dans l'interface GitHub

---

## ⚠️ Erreurs courantes et solutions

### Erreur 1 : "Permission denied" lors du push

**Cause :** Vous essayez de pusher vers le repository original au lieu de votre fork.

**Solution :**
```bash
# Vérifiez vos remotes
git remote -v

# Si origin pointe vers yajeddig/Guide-du-Developpeur-Scientifique :
git remote set-url origin https://github.com/VOTRE_USERNAME/Guide-du-Developpeur-Scientifique.git
```

### Erreur 2 : "Branch already exists"

**Cause :** Vous avez déjà une branche avec ce nom.

**Solution :**
```bash
# Supprimez l'ancienne branche
git branch -D fix/typo-section-git

# Recréez-la
git checkout -b fix/typo-section-git
```

### Erreur 3 : "Nothing to commit"

**Cause :** Vous n'avez pas sauvegardé le fichier ou oublié le `git add`.

**Solution :**
```bash
# Vérifiez le statut
git status

# Si le fichier n'apparaît pas, sauvegardez-le dans votre éditeur
# Puis ajoutez-le
git add 1-git_basics/2-local_remote_repositories.md
```

### Erreur 4 : "Merge conflicts"

**Cause :** Quelqu'un d'autre a modifié le même fichier.

**Solution :**
```bash
# Mettez à jour votre branche
git fetch upstream
git rebase upstream/main

# Résolvez les conflits manuellement si nécessaire
```

---

## 🎉 Félicitations !

Si vous avez terminé cet exercice, vous maîtrisez maintenant :

✅ **Le workflow Git complet** pour contribuer à un projet open source  
✅ **Les bonnes pratiques** de message de commit et de Pull Request  
✅ **La collaboration** sur GitHub avec fork/PR  
✅ **La gestion des branches** et des remotes  

**🎯 Prochaine étape :** Explorez les [bonnes pratiques de développement](../3-bests_practices/bests_practices.md) pour améliorer la qualité de votre code !

---

## 📚 Ressources complémentaires

- [Guide GitHub : Forking a repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Tutoriel Git interactif](https://learngitbranching.js.org/)
- [GitHub Flow](https://guides.github.com/introduction/flow/)

**💡 Astuce :** Bookmarkez cette page ! Vous pourrez réutiliser ce processus pour contribuer à d'autres projets open source.