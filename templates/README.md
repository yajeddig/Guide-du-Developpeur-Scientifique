# 📦 Templates Prêts à l'Emploi

Ce dossier contient des **templates réutilisables** pour démarrer rapidement vos projets scientifiques avec les bonnes pratiques en place.

## 📋 Contenu

| Template | Description | Utilisation recommandée |
|----------|-------------|-------------------------|
| [README_template.md](README_template.md) | Structure de README avec sections annotées | Tous les projets publics |
| [.gitignore_python_scientific](.gitignore_python_scientific) | Fichiers à ignorer pour projets Python scientifiques | Projets Python/Data Science |
| [requirements_template.txt](requirements_template.txt) | Gestion des dépendances Python organisées | Projets Python avec dépendances |
| [PR_checklist.md](PR_checklist.md) | Checklist de validation pour Pull Requests | Projets collaboratifs |

---

## 🚀 Comment Utiliser ces Templates ?

### 1️⃣ Télécharger un template

**Option A - Téléchargement direct :**
```bash
# Exemple : télécharger le README template
curl -O https://raw.githubusercontent.com/yajeddig/Guide-du-Developpeur-Scientifique/main/templates/README_template.md
```

**Option B - Cloner tout le dossier :**
```bash
git clone https://github.com/yajeddig/Guide-du-Developpeur-Scientifique.git
cp -r Guide-du-Developpeur-Scientifique/templates/ mon-projet/
```

**Option C - Via l'interface GitHub :**
1. Naviguer vers le fichier template souhaité
2. Cliquer sur "Raw"
3. Copier-coller le contenu dans votre projet

---

### 2️⃣ Personnaliser le template

Tous les templates contiennent des **sections annotées** entre `<!-- ... -->` ou `# TODO:` :

```markdown
<!-- TODO: Remplacer par le nom de votre projet -->
# Mon Super Projet
```

**Rechercher et remplacer :**
- `[NOM_PROJET]` → Le nom de votre projet
- `[VOTRE_NOM]` → Votre nom ou organisation
- `[DESCRIPTION]` → Description courte du projet
- `TODO:` → Compléter avec vos informations

---

### 3️⃣ Adapter à vos besoins

Les templates sont des **points de départ**, pas des contraintes :
- ✅ Ajoutez des sections spécifiques à votre domaine
- ✅ Supprimez ce qui n'est pas pertinent
- ✅ Adaptez la structure à votre workflow
- ⚠️ Gardez au minimum : Description, Installation, Usage, Licence

---

## 🎯 Cas d'Usage par Template

### README_template.md
**Utilisez-le pour :**
- Nouveau projet GitHub/GitLab
- Rendre votre code compréhensible par d'autres
- Documentation d'un package Python
- Projet académique à partager

**Sections clés :**
- Badges de statut (CI/CD, licence, version)
- Installation en une commande
- Exemple d'utilisation rapide
- Guide de contribution

---

### .gitignore_python_scientific
**Utilisez-le pour :**
- Projets Python avec Jupyter Notebooks
- Analyses de données avec fichiers volumineux
- Simulations numériques générant des outputs
- Travail avec IDE (PyCharm, VSCode)

**Couvre :**
- Environnements virtuels (venv, conda)
- Fichiers Python compilés (.pyc, __pycache__)
- Notebooks Jupyter (checkpoints)
- Données volumineuses (.csv, .h5, .nc)
- Configurations IDE

---

### requirements_template.txt
**Utilisez-le pour :**
- Partager votre environnement Python
- Assurer la reproductibilité des résultats
- Déploiement sur serveurs de calcul
- Installation rapide pour collaborateurs

**Organisation :**
- Dépendances par catégories (calcul, viz, tests)
- Versions pinnées pour reproductibilité
- Commentaires pour expliquer les choix

---

### PR_checklist.md
**Utilisez-le pour :**
- Standardiser les revues de code
- Projets en équipe avec contributions multiples
- Assurer la qualité avant merge
- Former les nouveaux contributeurs

**Checklist :**
- Tests passent
- Documentation à jour
- Code formaté (PEP8)
- Pas de secrets exposés

---

## 💡 Bonnes Pratiques

### ✅ À FAIRE
- Personnaliser immédiatement après copie
- Supprimer les sections non pertinentes
- Ajouter des exemples spécifiques à votre projet
- Maintenir à jour au fil du projet

### ❌ À ÉVITER
- Laisser les `TODO:` non complétés
- Copier-coller sans comprendre
- Tout garder "au cas où"
- Oublier de mettre à jour la licence

---

## 📚 Références

Ces templates sont basés sur :
- [PEP 621](https://peps.python.org/pep-0621/) - Métadonnées des projets Python
- [Keep a Changelog](https://keepachangelog.com/) - Standards de changelog
- [Conventional Commits](https://www.conventionalcommits.org/) - Messages de commit
- [Awesome README](https://github.com/matiassingers/awesome-readme) - Exemples de README

---

## 🤝 Contribuer

Vous avez un template utile à partager ?
1. Fork le projet
2. Ajoutez votre template dans `templates/`
3. Mettez à jour ce README
4. Créez une Pull Request

**Templates recherchés :**
- `CONTRIBUTING.md` détaillé
- `CODE_OF_CONDUCT.md`
- `CITATION.cff` pour publications scientifiques
- Templates de documentation Sphinx/MkDocs

---

**✨ Ces templates vous font gagner du temps ? N'hésitez pas à ⭐ star le projet !**
