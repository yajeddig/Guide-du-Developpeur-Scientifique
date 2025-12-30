# Bonne pratique d'organisation d'un dépôt de code (repository)

**Durée :** 40 minutes  
**Prérequis :** [Git Basics](../../../1-git_basics/1-git_basics.md), [Procédures de Collaboration](../../../2-collaboration_procedure/collab_procedure.md)  
**Objectifs :**

- Comprendre l'importance d'une structure de projet normalisée
- Connaître les conventions d'organisation pour les projets scientifiques
- Savoir adapter la structure selon le type d'activité
- Maîtriser les bonnes pratiques de séparation données/code/documentation

**TL;DR :** Guide pour structurer efficacement vos dépôts de code scientifique avec une organisation claire et des conventions standardisées.

L'organisation d'un dépôt de code doit être normalisé et formalisé au sein d'une organisation, et adapté à un type d'activité.

## Proposition d'organisation d'un dossier

Voici une proposition de structure de fichier

```bash
project_root/
├── data/
│   ├── raw/                            # Données brutes importées de la base de données en ligne
│   ├── processed/                      # Données traitées
│   ├── interim/                        # Données intermédiaires lors du traitement
│   └── external/                       # Données externes si nécessaire
├── src/
│   ├── __init__.py
│   ├── load_data.py                    # Module pour charger les données depuis la base de données en ligne
│   ├── process_data.py                 # Module pour le traitement des données
│   ├── feature_engineering/
│   │   ├── __init__.py
│   │   └── ...                         # Modules pour le feature engineering
│   ├── event_detection/
│   │   ├── __init__.py
│   │   └── ...                         # Modules pour la détection d'événements
│   ├── output_formatting/
│   │   ├── __init__.py
│   │   └── ...                         # Modules pour le formatage des sorties
│   └── utils/
│       ├── __init__.py
│       └── helper_functions.py         # Fonctions utilitaires communes
├── tests/
│   ├── __init__.py
│   ├── test_load_data.py
│   ├── test_process_data.py
│   ├── feature_engineering/
│   │   ├── __init__.py
│   │   └── ...                         # Tests pour le feature engineering
│   ├── event_detection/
│   │   ├── __init__.py
│   │   └── ...                         # Tests pour la détection d'événements
│   ├── output_formatting/
│   │   ├── __init__.py
│   │   └── ...                         # Tests pour le formatage des sorties
│   └── utils/
│       ├── __init__.py
│       └── test_helper_functions.py     # Tests pour les fonctions utilitaires
├── notebooks/
│   ├── exploratory_data_analysis.ipynb  # Notebook pour l'analyse exploratoire des données
│   ├── feature_engineering.ipynb        # Notebook pour les expérimentations de feature engineering
│   └── model_training.ipynb             # Notebook pour l'entraînement des modèles (si applicable)
├── .gitignore
├── README.md
└── requirements.txt
```

### Explication

1. **data/**: Contient toutes les données utilisées et générées par le projet, classées en fonction de leur état (brutes, traitées, intermédiaires, externes).
2. **src/** : Contient tout le code source du projet, organisé par fonctionnalité. Chaque sous-dossier correspond à une étape du processus :
    - **load_data.py** : Module pour charger les données depuis la base de données en ligne.
    - **process_data.py** : Module principal pour le traitement des données.
    - **feature_engineering/** : Sous-dossier pour les modules de feature engineering.
    - **event_detection/** : Sous-dossier pour les modules de détection d'événements.
    - **output_formatting/** : Sous-dossier pour les modules de formatage de sortie.
    - **utils/**: Contient des fonctions utilitaires communes.
3. **tests/** : Contient les tests pour chaque module de code source, organisé de manière similaire à src/ pour une correspondance facile.
4. **notebooks/**: Contient les notebooks Jupyter pour l'analyse exploratoire, les expérimentations de feature engineering et l'entraînement des modèles.
5. **.gitignore** : Fichier pour indiquer quels fichiers et dossiers doivent être ignorés par Git.
6. **README.md** : Fichier de documentation principal pour une vue d'ensemble rapide du projet.
7. **requirements.txt** : Fichier listant les dépendances Python nécessaires pour le projet.

Cette structure permet une organisation claire et modulaire, facilitant la maintenance et l'extensibilité du projet.

## Script pour générer automatiquement cet arborescence

```python
import os

# Définir la structure de dossiers et fichiers
structure = {
        "data": ["raw", "processed", "interim", "external"],
        "src": {
            "feature_engineering": [],
            "event_detection": [],
            "output_formatting": [],
            "utils": ["__init__.py", "helper_functions.py"]
        },
        "tests": {
            "feature_engineering": ["__init__.py"],
            "event_detection": ["__init__.py"],
            "output_formatting": ["__init__.py"],
            "utils": ["__init__.py", "test_helper_functions.py"]
        },
        "notebooks": [
            "exploratory_data_analysis.ipynb",
            "feature_engineering.ipynb",
            "model_training.ipynb"
        ],
        ".gitignore": "",
        "README.md": "",
        "requirements.txt": ""
}

# Fonction pour créer les dossiers et fichiers
def create_structure(base_path, structure):
    for name, content in structure.items():
        path = os.path.join(base_path, name)
        if isinstance(content, dict):
            os.makedirs(path, exist_ok=True)
            create_structure(path, content)
        elif isinstance(content, list):
            os.makedirs(path, exist_ok=True)
            for item in content:
                if isinstance(item, dict):
                    create_structure(path, item)
                else:
                    open(os.path.join(path, item), 'a').close()
        else:
            open(path, 'a').close()

# Créer la structure de dossiers et fichiers
base_path = os.path.join(os.getcwd(), "project_root")
create_structure(base_path, structure)
```

Ce script vous permettra, une fois exécuté, d'obtenir automatiquement tout les dossiers et fichiers prévus dans le répertoire ou il a été exécuté.

### Explication et mode d'emploi

1. **Définir la structure de dossiers et fichiers** : La structure est définie sous forme de dictionnaire imbriqué, où les clés représentent les noms des dossiers et les valeurs peuvent être des listes (pour les fichiers) ou d'autres dictionnaires (pour les sous-dossiers).

2. **Fonction `create_structure`** : Cette fonction récursive parcourt le dictionnaire de structure et crée les dossiers et fichiers nécessaires.

3. **Création de la structure** : Le chemin de base est défini comme le répertoire courant (où le script est exécuté) et la fonction create_structure est appelée avec cette base et la structure définie.
