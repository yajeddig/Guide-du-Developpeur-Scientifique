# Structure de dépôt minimale

## Objectif

Fournir une base simple, lisible et extensible.

## Arborescence recommandée

```text
project/
  ├─ src/                # Code source
  ├─ data/               # Données (éviter de versionner >10MB)
  ├─ tests/ (optionnel)  # Premiers tests
  ├─ README.md           # Documentation minimale
  ├─ requirements.txt    # Dépendances
  └─ .gitignore          # Fichiers à ignorer
```

## Règles de base

- Un seul point d'entrée (ex: `src/main.py`)
- Pas de notebooks dans `src/`
- Données brutes non versionnées si volumineuses

## .gitignore minimal

```gitignore
__pycache__/
*.pyc
.venv/
.env
.DS_Store
.ipynb_checkpoints/
```

## Prochaine étape

Introduire modules, packaging et tests structurés (Parcours B).
