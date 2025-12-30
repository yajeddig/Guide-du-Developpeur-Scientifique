# Bases : Environnements Python

**Objectif :** Créer, activer et utiliser un environnement isolé minimal.

## Pourquoi ?

Éviter les conflits de dépendances entre projets et garantir la reproductibilité.

## Outils recommandés (niveau A)

- `venv` (standard)
- `pip`

## Étapes minimales

```bash
# Créer un environnement
python -m venv .venv

# Activer (Windows PowerShell)
. .venv/Scripts/Activate.ps1

# Mettre à jour pip
python -m pip install --upgrade pip

# Geler les dépendances
pip freeze > requirements.txt
```

## Bonnes pratiques de base

- Un fichier `requirements.txt` versionné
- Jamais de dépendances globales implicites
- Un script `activate` documenté dans le README

## Aller plus loin ensuite

Passez à conda/mamba (gestion binaire, perfs) dans le parcours B.
