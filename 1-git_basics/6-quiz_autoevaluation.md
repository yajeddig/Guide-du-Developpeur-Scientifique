---
⏱️ **Durée estimée :** 30-40 minutes
📋 **Prérequis :** Avoir lu les 4 sections Git Basics
🎯 **Objectifs :**
- Valider votre compréhension des concepts Git
- Identifier les points à réviser
- Tester vos réflexes sur des cas pratiques
- Vous préparer à collaborer efficacement

**TL;DR :** Quiz d'auto-évaluation avec 15 questions (30% théorie, 70% pratique) pour valider vos acquis Git.
---

# 🎯 Quiz d'Auto-Évaluation - Section 1 : Git Basics

## 📖 Comment utiliser ce quiz ?

Ce quiz contient **15 questions** couvrant les 4 fichiers de la section Git Basics :
- **Questions 1-5** : Théorie (30%) - Concepts fondamentaux
- **Questions 6-15** : Pratique (70%) - Situations réelles

**Notation suggérée :**
- ✅ **13-15 bonnes réponses** : Excellent ! Vous maîtrisez Git
- ⚠️ **10-12 bonnes réponses** : Bien, mais revoyez certains concepts
- 🔄 **< 10 bonnes réponses** : Relisez les sections et refaites le quiz

**Format des réponses :**
Les réponses sont dans des blocs dépliables `<details>`. Essayez de répondre AVANT de les ouvrir !

---

## 📚 PARTIE 1 - THÉORIE (Questions 1-5)

### Question 1 - Concept de Git

**Quelle est la principale caractéristique qui différencie Git des systèmes de contrôle de version centralisés (comme SVN) ?**

A) Git est plus rapide
B) Git est décentralisé : chaque développeur a une copie complète de l'historique
C) Git ne nécessite pas de connexion Internet
D) Git est gratuit et open-source

<details>
<summary>📝 Voir la réponse</summary>

**Réponse correcte : B**

**Explication :**
La caractéristique fondamentale de Git est sa **nature décentralisée** (Distributed Version Control System - DVCS). Chaque développeur possède une copie complète du dépôt avec tout son historique, ce qui permet :
- De travailler hors ligne
- Une meilleure résilience (pas de point de défaillance unique)
- Des opérations locales ultra-rapides (commit, diff, log)
- La flexibilité dans les workflows collaboratifs

Les options A, C et D sont des conséquences ou des avantages, mais pas la caractéristique *principale* différenciatrice.

**Référence :** `1-git_basics.md` - Section "Git est décentralisé"

</details>

---

### Question 2 - Zone de Staging

**À quoi sert la "zone de staging" (ou index) dans Git ?**

A) C'est un espace de stockage temporaire pour les gros fichiers
B) C'est une zone où on prépare les modifications avant de les committer
C) C'est l'équivalent de la branche de développement
D) C'est un système de cache pour accélérer Git

<details>
<summary>📝 Voir la réponse</summary>

**Réponse correcte : B**

**Explication :**
La **zone de staging** (ou index) est une zone intermédiaire entre votre répertoire de travail et le dépôt Git. Elle permet de :
- **Sélectionner** précisément quelles modifications inclure dans le prochain commit
- **Organiser** vos changements en commits logiques (même si plusieurs fichiers ont été modifiés)
- **Réviser** les modifications avant de les valider définitivement

Workflow typique :
1. **Working Directory** : vous modifiez des fichiers
2. **Staging Area** (git add) : vous préparez les modifications
3. **Repository** (git commit) : vous validez les modifications

**Référence :** `2-local_remote_repositories.md` - Section "Zone de staging et zone de travail"

</details>

---

### Question 3 - Branches

**Quelle affirmation est VRAIE concernant les branches Git ?**

A) Créer une branche copie tous les fichiers du projet, ce qui prend beaucoup d'espace
B) On ne peut avoir qu'une seule branche active à la fois sur son ordinateur
C) Les branches sont des pointeurs légers vers des commits, leur création est quasi-instantanée
D) Il faut toujours merger une branche avant de la supprimer

<details>
<summary>📝 Voir la réponse</summary>

**Réponse correcte : C**

**Explication :**
Dans Git, une branche est simplement un **pointeur mobile vers un commit**. C'est juste une référence (40 caractères SHA-1), pas une copie de fichiers. Cela rend :
- La **création** de branches instantanée (quelques millisecondes)
- Le **stockage** négligeable (quelques octets)
- Le **changement** de branche très rapide

Les autres affirmations sont fausses :
- A : Faux - Pas de copie physique, juste un pointeur
- B : Faux - Vous pouvez avoir plusieurs branches locales, mais vous ne pouvez en checkout qu'une à la fois
- D : Faux - Vous pouvez supprimer une branche non mergée (Git vous avertira avec -d, mais -D force la suppression)

**Référence :** `4-branching_strategy.md` - Introduction et concept des branches

</details>

---

### Question 4 - Remote vs Local

**Quelle commande permet de récupérer les modifications du dépôt distant SANS les fusionner automatiquement avec votre branche locale ?**

A) `git pull`
B) `git fetch`
C) `git clone`
D) `git merge origin/main`

<details>
<summary>📝 Voir la réponse</summary>

**Réponse correcte : B**

**Explication :**
- **`git fetch`** : Télécharge les modifications du remote SANS les fusionner. Vous pouvez ensuite inspecter les changements avant de décider de les intégrer.

- **`git pull`** : Équivaut à `git fetch` + `git merge` (récupération ET fusion automatique)

- **`git clone`** : Copie un dépôt distant pour la première fois (pas pour mettre à jour)

- **`git merge origin/main`** : Fusionne la branche distante, mais il faut d'abord avoir fait `git fetch`

**Workflow recommandé :**
```bash
git fetch origin           # Récupérer les changements
git log origin/main        # Inspecter les nouveaux commits
git diff origin/main       # Voir les différences
git merge origin/main      # Fusionner si OK
```

**Référence :** `2-local_remote_repositories.md` - Section "git fetch et git pull"

</details>

---

### Question 5 - Git Flow

**Dans la stratégie Git Flow, quelle est la branche qui contient toujours le code en production ?**

A) `develop`
B) `main` (ou `master`)
C) `release`
D) `feature`

<details>
<summary>📝 Voir la réponse</summary>

**Réponse correcte : B**

**Explication :**
Dans **Git Flow**, il y a deux branches principales permanentes :

1. **`main`** (ou `master`) :
   - Code **en production** (production-ready)
   - Chaque commit = une nouvelle version déployée
   - Toujours stable et fonctionnel

2. **`develop`** :
   - Branche d'**intégration** pour le développement
   - Contient les dernières fonctionnalités complétées
   - Pas forcément stable

Les branches temporaires :
- **`feature/*`** : Nouvelles fonctionnalités (partent de `develop`)
- **`release/*`** : Préparation d'une release (partent de `develop`, mergent dans `main` ET `develop`)
- **`hotfix/*`** : Corrections urgentes (partent de `main`, mergent dans `main` ET `develop`)

**Référence :** `4-branching_strategy.md` - Section "Git Flow"

</details>

---

## 💻 PARTIE 2 - PRATIQUE (Questions 6-15)

### Question 6 - Staging Sélectif ⭐ PRATIQUE

**Vous avez modifié 3 fichiers : `analysis.py`, `utils.py`, et `config.yaml`. Vous voulez committer UNIQUEMENT les modifications de `analysis.py`. Quelles commandes utilisez-vous ?**

A)
```bash
git add .
git commit -m "Update analysis"
```

B)
```bash
git add analysis.py
git commit -m "Update analysis"
```

C)
```bash
git commit -m "Update analysis" analysis.py
```

D)
```bash
git add analysis.py utils.py config.yaml
git commit analysis.py -m "Update analysis"
```

<details>
<summary>📝 Voir la réponse</summary>

**Réponses correctes : B et C**

**Explication :**
Pour committer sélectivement un seul fichier parmi plusieurs modifiés :

**Option B (méthode classique)** :
```bash
git add analysis.py         # Stage uniquement analysis.py
git commit -m "Update analysis"
```

**Option C (méthode directe)** :
```bash
git commit -m "Update analysis" analysis.py  # Add + commit en une ligne
```

**Pourquoi les autres sont incorrectes :**
- **A** : `git add .` stage TOUS les fichiers modifiés (y compris utils.py et config.yaml)
- **D** : Stage les 3 fichiers mais essaye de committer seulement analysis.py (syntaxe invalide)

**Bonne pratique :**
Toujours vérifier ce qui sera commité avec `git status` avant le commit !

**Référence :** `2-local_remote_repositories.md` - Section "Zone de staging"

</details>

---

### Question 7 - Annuler un Commit Local ⭐ PRATIQUE

**Vous venez de faire un commit local (PAS encore pushé) mais vous réalisez que vous avez oublié d'ajouter un fichier. Que faites-vous ?**

A) `git reset --hard HEAD~1` puis refaire le commit complet
B) `git commit --amend` après avoir ajouté le fichier oublié
C) Créer un nouveau commit "Fix: add forgotten file"
D) `git revert HEAD`

<details>
<summary>📝 Voir la réponse</summary>

**Meilleure réponse : B**

**Explication :**
`git commit --amend` permet de **modifier le dernier commit** (avant push). C'est parfait pour :
- Ajouter des fichiers oubliés
- Corriger le message de commit
- Modifier des changements mineurs

```bash
git add fichier_oublie.py
git commit --amend --no-edit  # Garde le même message
# OU
git commit --amend -m "Nouveau message"
```

**Pourquoi les autres options sont moins bonnes :**
- **A** : `reset --hard` SUPPRIME les modifications (destructif et inutile ici)
- **C** : Fonctionne mais pollue l'historique avec un commit "fix"
- **D** : `git revert` crée un commit *inverse* (utilisé pour annuler des commits déjà pushés)

**⚠️ ATTENTION :**
N'utilisez JAMAIS `--amend` sur un commit déjà pushé et partagé (cela réécrit l'historique) !

**Référence :** `2-local_remote_repositories.md` - Commandes Git essentielles

</details>

---

### Question 8 - Conflit de Merge ⭐⭐ PRATIQUE

**Lors d'un `git merge`, vous obtenez un conflit dans `data_processing.py`. Le fichier contient maintenant :**

```python
<<<<<<< HEAD
result = calculate_mean(data, method='arithmetic')
=======
result = calculate_median(data, trim=0.1)
>>>>>>> feature/new-stats
```

**Que signifie ce marqueur ?**

A) `HEAD` est la version correcte, supprimez le reste
B) La partie entre `<<<<<<< HEAD` et `=======` est votre version actuelle, la partie après `=======` vient de la branche `feature/new-stats`
C) Git a automatiquement corrigé le conflit, vous pouvez committer directement
D) Le fichier est corrompu, restaurez-le depuis GitHub

<details>
<summary>📝 Voir la réponse</summary>

**Réponse correcte : B**

**Explication :**
Les marqueurs de conflit Git :
```
<<<<<<< HEAD
[Votre version actuelle - branche où vous êtes]
=======
[Version de la branche que vous mergez]
>>>>>>> nom-de-la-branche
```

**Étapes pour résoudre :**
1. **Analyser** les deux versions
2. **Décider** quelle version garder (ou combiner les deux)
3. **Supprimer** les marqueurs `<<<<<<<`, `=======`, `>>>>>>>`
4. **Tester** que le code fonctionne
5. **Ajouter** le fichier résolu : `git add data_processing.py`
6. **Finaliser** le merge : `git commit`

**Exemple de résolution (si on veut garder les deux) :**
```python
# Résolution : on garde les deux calculs
mean_result = calculate_mean(data, method='arithmetic')
median_result = calculate_median(data, trim=0.1)
```

**Référence :** `4-branching_strategy.md` - Section "Conflits de fusion"

</details>

---

### Question 9 - Premier Push ⭐ PRATIQUE

**Vous venez de créer une nouvelle branche `feature/data-viz` localement. Quelle commande utilisez-vous pour la pousser sur GitHub pour la première fois ?**

A) `git push`
B) `git push origin feature/data-viz`
C) `git push -u origin feature/data-viz`
D) `git push --set-upstream origin feature/data-viz`

<details>
<summary>📝 Voir la réponse</summary>

**Réponses correctes : C et D (équivalentes)**

**Explication :**
Pour pousser une **nouvelle branche** sur le remote, utilisez `-u` (ou `--set-upstream`) :

```bash
git push -u origin feature/data-viz
# Équivalent à :
git push --set-upstream origin feature/data-viz
```

**Pourquoi `-u` est important :**
- Crée la branche sur le remote
- **Configure le tracking** : associe votre branche locale à la branche distante
- Les prochains `git push` et `git pull` n'auront plus besoin de spécifier `origin feature/data-viz`

**Différence avec les autres options :**
- **A** : `git push` seul échoue car la branche n'existe pas encore sur le remote
- **B** : Fonctionne pour le push initial MAIS ne configure pas le tracking (vous devrez spécifier `origin feature/data-viz` à chaque fois)

**Après le premier push avec `-u` :**
```bash
git push   # Suffit !
git pull   # Suffit aussi !
```

**Référence :** `3-getting_started_with_github.md` - Section "git push"

</details>

---

### Question 10 - Collaboration d'Équipe ⭐⭐ PRATIQUE

**Votre collègue a pushé des commits sur la branche `develop` pendant que vous travailliez sur votre branche `feature/model-training`. Avant de merger votre feature dans `develop`, vous voulez intégrer ses changements. Quelle est la meilleure approche ?**

A)
```bash
git checkout develop
git pull
git checkout feature/model-training
git merge develop
```

B)
```bash
git checkout feature/model-training
git pull origin develop
```

C)
```bash
git fetch origin
git merge origin/develop
```

D)
```bash
git checkout develop
git merge feature/model-training
git push
```

<details>
<summary>📝 Voir la réponse</summary>

**Meilleure réponse : A**

**Explication :**
Pour intégrer les derniers changements de `develop` dans votre branche feature :

**Option A (méthode recommandée)** :
```bash
git checkout develop              # Aller sur develop
git pull                          # Récupérer les derniers changements
git checkout feature/model-training  # Revenir à votre feature
git merge develop                 # Intégrer develop dans votre feature
# Résoudre les conflits si nécessaire
git push                          # Pousser votre feature mise à jour
```

**Pourquoi les autres sont moins bonnes :**
- **B** : `git pull origin develop` fusionne directement sans vérifier l'état de `develop` localement (peut causer des problèmes)
- **C** : Fonctionne mais ne met pas à jour votre branche `develop` locale (moins propre)
- **D** : **ERREUR** - merge votre feature dans develop (inverse de ce qu'on veut !)

**Alternative avec rebase (plus avancé) :**
```bash
git checkout feature/model-training
git rebase develop  # Rejoue vos commits par-dessus develop
```

**Référence :** `4-branching_strategy.md` - Workflows de collaboration

</details>

---

### Question 11 - Historique Git ⭐ PRATIQUE

**Vous cherchez à savoir qui a modifié la fonction `process_data()` dans `pipeline.py` et pourquoi. Quelle(s) commande(s) utilisez-vous ?**

A) `git log pipeline.py`
B) `git blame pipeline.py`
C) `git log -p pipeline.py` puis chercher la fonction
D) Toutes ces commandes peuvent aider

<details>
<summary>📝 Voir la réponse</summary>

**Réponse correcte : D**

**Explication :**
Plusieurs commandes Git permettent d'investiguer l'historique d'un fichier :

**1. `git log pipeline.py`**
- Affiche l'historique des commits ayant modifié ce fichier
- Utile pour voir la chronologie
```bash
git log --oneline pipeline.py  # Version condensée
```

**2. `git blame pipeline.py`**
- Affiche ligne par ligne **qui a modifié quoi** et **quand**
- Parfait pour identifier l'auteur d'une ligne spécifique
```bash
git blame -L 10,20 pipeline.py  # Lignes 10 à 20 seulement
```

**3. `git log -p pipeline.py`**
- Affiche l'historique AVEC les diffs (changements)
- Permet de voir exactement ce qui a changé
```bash
git log -p --grep="process_data" pipeline.py  # Filtrer par mot-clé
```

**Commande bonus :**
```bash
git log -S "process_data" pipeline.py  # Chercher quand "process_data" a été ajouté/modifié
```

**Workflow d'investigation typique :**
1. `git blame` → identifier le commit concerné
2. `git show <commit-hash>` → voir tous les changements de ce commit
3. `git log -p <commit-hash>` → contexte historique

**Référence :** `2-local_remote_repositories.md` - Commandes d'exploration

</details>

---

### Question 12 - .gitignore ⭐⭐ PRATIQUE

**Vous avez accidentellement commité un fichier `data/raw/experiments.csv` (100 MB) que vous vouliez ignorer. Que faites-vous ?**

A) Ajouter `data/raw/*.csv` au `.gitignore` et commit
B) `git rm --cached data/raw/experiments.csv`, ajouter la règle au `.gitignore`, puis commit
C) Supprimer le fichier localement, le `.gitignore` gérera le reste
D) Rien, le `.gitignore` s'applique rétroactivement

<details>
<summary>📝 Voir la réponse</summary>

**Réponse correcte : B**

**Explication :**
Le `.gitignore` ne fonctionne que pour les fichiers **non-trackés**. Si un fichier est déjà commité, il faut :

**Étape 1 : Retirer du tracking Git (sans supprimer localement)**
```bash
git rm --cached data/raw/experiments.csv
# --cached = retire du Git SANS supprimer le fichier local
```

**Étape 2 : Ajouter la règle au .gitignore**
```bash
echo "data/raw/*.csv" >> .gitignore
# Ou éditer .gitignore manuellement
```

**Étape 3 : Committer**
```bash
git add .gitignore
git commit -m "chore: remove experiments.csv from tracking and ignore CSV files"
```

**Pourquoi les autres sont incorrectes :**
- **A** : Le `.gitignore` n'affecte pas les fichiers déjà trackés
- **C** : Supprimerait le fichier localement (on veut le garder !)
- **D** : Le `.gitignore` n'est PAS rétroactif

**⚠️ Problème persistant :**
Le fichier reste dans l'historique Git ! Pour le supprimer complètement (fichiers sensibles) :
```bash
git filter-branch --tree-filter 'rm -f data/raw/experiments.csv' HEAD
# Ou utiliser BFG Repo-Cleaner (plus simple)
```

**Référence :** `1-git_basics.md` - Section "Fonctionnalité supplémentaire 2 : Git Ignore"

</details>

---

### Question 13 - Cloner un Projet ⭐ PRATIQUE

**Vous rejoignez une équipe travaillant sur `https://github.com/team/scientific-analysis`. Quelle séquence de commandes utilisez-vous pour commencer à contribuer ?**

A)
```bash
git clone https://github.com/team/scientific-analysis.git
cd scientific-analysis
git checkout -b feature/my-contribution
```

B)
```bash
git init scientific-analysis
git remote add origin https://github.com/team/scientific-analysis.git
git pull
```

C)
```bash
git fork https://github.com/team/scientific-analysis.git
git clone https://github.com/MOI/scientific-analysis.git
```

D)
```bash
git download https://github.com/team/scientific-analysis.git
```

<details>
<summary>📝 Voir la réponse</summary>

**Meilleure réponse : A**

**Explication :**

**Option A (workflow standard)** :
```bash
git clone https://github.com/team/scientific-analysis.git  # Cloner
cd scientific-analysis                                      # Entrer dans le dossier
git checkout -b feature/my-contribution                     # Créer branche feature
# Commencer à travailler !
```

**Pourquoi les autres sont incorrectes :**
- **B** : Fonctionne mais inutilement complexe (`git clone` fait tout ça automatiquement)
- **C** : `git fork` n'existe pas (le fork se fait sur l'interface GitHub)
- **D** : `git download` n'existe pas

**Workflow complet pour contribution :**

**1. Si vous avez accès direct au dépôt :**
```bash
git clone https://github.com/team/scientific-analysis.git
cd scientific-analysis
git checkout -b feature/my-work
# ... faire vos modifications ...
git push -u origin feature/my-work
# Créer une Pull Request sur GitHub
```

**2. Si vous n'avez PAS d'accès (projet open-source) :**
```bash
# Sur GitHub : cliquer "Fork" (crée une copie sous votre compte)
git clone https://github.com/VOTRE_USERNAME/scientific-analysis.git
cd scientific-analysis
git remote add upstream https://github.com/team/scientific-analysis.git  # Garder un lien avec l'original
git checkout -b feature/my-work
# ... modifications ...
git push -u origin feature/my-work
# Pull Request depuis votre fork vers le dépôt original
```

**Référence :** `3-getting_started_with_github.md` - Scénario de pratique 3

</details>

---

### Question 14 - Revenir en Arrière ⭐⭐ PRATIQUE

**Vous avez mergé une branche `feature/experimental` dans `develop` mais les tests automatiques révèlent des bugs critiques. La branche a déjà été pushée. Que faites-vous ?**

A) `git reset --hard HEAD~1` puis force push
B) `git revert -m 1 <merge-commit-hash>`
C) Supprimer la branche `feature/experimental`
D) `git checkout` vers le commit avant le merge

<details>
<summary>📝 Voir la réponse</summary>

**Meilleure réponse : B**

**Explication :**
Quand un commit problématique est **déjà pushé et partagé**, utilisez `git revert` (PAS `reset`) :

**Solution recommandée :**
```bash
git log --oneline  # Identifier le hash du merge commit
git revert -m 1 <merge-commit-hash>
git push
```

**Pourquoi `-m 1` ?**
Pour un merge commit, Git a 2 parents :
- Parent 1 (`-m 1`) : la branche principale (develop)
- Parent 2 (`-m 2`) : la branche mergée (feature/experimental)

`-m 1` dit à Git de revenir à l'état de `develop` avant le merge.

**Pourquoi les autres sont dangereuses/incorrectes :**

- **A - `git reset --hard` + force push** :
  - ⚠️ **TRÈS DANGEREUX** sur une branche partagée
  - Réécrit l'historique
  - Peut causer des problèmes pour les autres développeurs
  - À utiliser UNIQUEMENT sur des branches personnelles non-pushées

- **C - Supprimer la branche** : N'annule pas le merge déjà fait

- **D - `git checkout`** : Ne fait que consulter, ne corrige pas le problème

**Différence clé :**
```bash
git reset  # RÉÉCRIT l'historique (dangereux si partagé)
git revert # CRÉE un nouveau commit inverse (sûr)
```

**Workflow complet :**
```bash
# 1. Identifier le merge commit
git log --graph --oneline

# 2. Reverter le merge
git revert -m 1 abc1234

# 3. Éditer le message de commit
# "Revert: merge feature/experimental due to critical bugs"

# 4. Pousser
git push origin develop

# 5. Corriger les bugs dans feature/experimental
# 6. Re-merger une fois corrigé
```

**Référence :** `4-branching_strategy.md` - Résolution des conflits et gestion des erreurs

</details>

---

### Question 15 - Sécurité Git ⭐⭐⭐ PRATIQUE (Real-World)

**Catastrophe ! Vous venez de réaliser que vous avez commité et pushé un fichier `credentials.json` contenant votre clé API AWS sur GitHub. Que devez-vous faire IMMÉDIATEMENT ?**

A) Supprimer le fichier, commit, push, et ajouter `credentials.json` au `.gitignore`
B) Supprimer le dépôt GitHub et le recréer
C) **RÉVOQUER la clé API**, puis nettoyer l'historique Git avec BFG Repo-Cleaner ou `git filter-branch`
D) Rendre le dépôt privé

<details>
<summary>📝 Voir la réponse</summary>

**Réponse correcte : C**

**Explication :**
C'est un scénario **critique de sécurité** réel. Voici le protocole d'urgence :

**🚨 ÉTAPE 1 : RÉVOQUER LE SECRET IMMÉDIATEMENT (priorité absolue)**
```bash
# Se connecter à AWS Console
# Révoquer/Supprimer la clé API exposée
# Générer une nouvelle clé
```

**⏱️ TEMPS CRITIQUE : Faites ceci AVANT toute autre action !**
Pourquoi ? Des bots scannent GitHub 24/7 et peuvent trouver et exploiter votre clé en quelques minutes.

**🧹 ÉTAPE 2 : Nettoyer l'historique Git**

**Option A - BFG Repo-Cleaner (plus simple)** :
```bash
# Télécharger BFG : https://rtyley.github.io/bfg-repo-cleaner/
java -jar bfg.jar --delete-files credentials.json
git reflog expire --expire=now --all
git gc --prune=now --aggressive
git push --force
```

**Option B - git filter-branch (natif Git)** :
```bash
git filter-branch --force --index-filter \
  'git rm --cached --ignore-unmatch credentials.json' \
  --prune-empty --tag-name-filter cat -- --all
git push --force --all
```

**🛡️ ÉTAPE 3 : Prévention future**
```bash
echo "credentials.json" >> .gitignore
echo "*.env" >> .gitignore
echo "secrets/" >> .gitignore
git add .gitignore
git commit -m "chore: add security patterns to gitignore"
```

**Pourquoi les autres options sont INSUFFISANTES :**

- **A** : Le fichier reste dans l'**historique Git** ! N'importe qui peut faire `git checkout` vers un ancien commit et le voir
- **B** : Supprimer le dépôt ne révoque PAS la clé (elle est peut-être déjà copiée)
- **D** : Trop tard - le secret était public, même brièvement

**📚 Leçon Importante :**
> **Une fois qu'un secret est commité dans Git, il doit être considéré comme compromis, même après suppression.**

**🔒 Bonnes pratiques de sécurité :**
1. **Jamais** de secrets en dur dans le code
2. Utiliser des **variables d'environnement** (`.env` + `.gitignore`)
3. Utiliser des **gestionnaires de secrets** (AWS Secrets Manager, HashiCorp Vault)
4. Activer **GitHub Secret Scanning** (détecte automatiquement les secrets)
5. Utiliser **pre-commit hooks** pour bloquer les commits avec secrets

**Exemple de .env (gitignored) :**
```bash
# .env (JAMAIS commité)
AWS_ACCESS_KEY_ID=AKIA...
AWS_SECRET_ACCESS_KEY=...
```

**Code Python utilisant les variables d'environnement :**
```python
import os
from dotenv import load_dotenv

load_dotenv()  # Charge .env
api_key = os.getenv('AWS_ACCESS_KEY_ID')
```

**Référence :** `3-getting_started_with_github.md` - Bonnes pratiques de sécurité

</details>

---

## 🎓 Résultats et Prochaines Étapes

### Scoring

Comptez vos bonnes réponses :

| Score | Niveau | Recommandation |
|-------|--------|----------------|
| **13-15** | ✅ **Expert Git** | Vous maîtrisez Git ! Passez aux exercices pratiques comme [l'exercice fil rouge](5-exercice_fil_rouge.md) |
| **10-12** | ⚠️ **Bon niveau** | Solides bases, mais révisez les questions ratées. Pratiquez avec de vrais projets |
| **7-9** | 🔄 **Bases acquises** | Relisez les sections correspondant aux questions manquées |
| **< 7** | 📚 **À revoir** | Recommencez la lecture des 4 fichiers Git Basics avant de refaire le quiz |

---

### Questions que vous avez ratées ?

**Si vous avez raté des questions sur :**

- **Concepts de base (Q1-Q5)** → Relire [1-git_basics.md](1-git_basics.md)
- **Staging et commits (Q6, Q7, Q12)** → Relire [2-local_remote_repositories.md](2-local_remote_repositories.md)
- **Collaboration (Q9, Q10, Q13)** → Relire [3-getting_started_with_github.md](3-getting_started_with_github.md)
- **Branches et merges (Q3, Q5, Q8, Q14)** → Relire [4-branching_strategy.md](4-branching_strategy.md)
- **Sécurité (Q15)** → Approfondir les bonnes pratiques de sécurité

---

### 🚀 Prochaine Étape

Une fois que vous êtes à l'aise avec ce quiz :

1. **Pratiquez !** → [Exercice Fil Rouge : Votre Première Contribution Open Source](5-exercice_fil_rouge.md)
2. **Appliquez !** → Créez un projet personnel en appliquant toutes ces bonnes pratiques
3. **Collaborez !** → Contribuez à un projet open-source

---

### 💡 Ressources pour Aller Plus Loin

- 📹 [Git and GitHub - Tutoriel Complet](https://youtu.be/hrTQipWp6co) (référencé dans 1-git_basics.md)
- 📖 [Pro Git Book](https://git-scm.com/book/en/v2) - La référence ultime (gratuit)
- 🎮 [Learn Git Branching](https://learngitbranching.js.org/) - Apprendre en s'amusant
- 🔧 [Oh Shit, Git!?!](https://ohshitgit.com/) - Solutions aux problèmes courants

---

**🎉 Félicitations d'avoir complété ce quiz ! Continuez à pratiquer Git quotidiennement pour maîtriser l'outil. 🚀**
