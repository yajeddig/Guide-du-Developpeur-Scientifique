# Rédiger un README Minimal

## Objectif
Fournir les informations essentielles pour comprendre, installer et exécuter le projet.

## Sections indispensables
1. Nom du projet
2. Description courte (1-2 phrases)
3. Installation rapide
4. Commande d'exécution
5. Arborescence simplifiée
6. Licence (si applicable)

## Modèle express
```markdown
# Nom du projet

Description rapide du but (1 phrase).

## Installation
```bash
python -m venv .venv
. .venv/Scripts/Activate.ps1
pip install -r requirements.txt
```

## Exécution
```bash
python main.py
```

## Arborescence
```text
project/
  ├─ src/
  ├─ data/
  ├─ README.md
  └─ requirements.txt
```
```

## Anti-patterns
- Historique dans le README
- Documentation complète inline
- Sections vides

## Aller plus loin
Ajouter : badges, contributeurs, roadmap (Parcours B/C)
