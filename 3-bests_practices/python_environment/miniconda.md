# Gestion des Environnements Python avec Miniconda & pip

## Introduction

### 1. Problèmes Généraux avec les Environnements Python
- **Conflits de Dépendances** : Différents projets nécessitent différentes versions des mêmes bibliothèques.
- **Problèmes d'Installation Globale** : L'installation de bibliothèques de manière globale peut provoquer des conflits et affecter les paramètres système.
- **Reproductibilité** : Assurer que le code fonctionne de manière cohérente sur différentes machines ou après des modifications.

### 2. Pourquoi Utiliser des Environnements Python ?
- **Isolation** : Séparer les dépendances des projets.
- **Cohérence** : Assurer la même configuration sur différents environnements de développement.
- **Flexibilité** : Passer facilement d'une configuration à une autre pour différents projets.

## Solution : Utilisation de Miniconda et pip

### 1. Introduction à Miniconda
- **Qu'est-ce que Miniconda ?**
  - Un installateur minimal pour Conda, un gestionnaire de paquets.
  - Il permet de créer et de gérer des environnements Python isolés.
- **Pourquoi Miniconda plutôt qu'Anaconda ?**
  - Installation plus légère et plus rapide.
  - Vous pouvez installer uniquement les paquets dont vous avez besoin.

### 2. Introduction à pip
- **Qu'est-ce que pip ?**
  - L'installateur de paquets pour Python.
  - Permet d'installer et de gérer des bibliothèques Python supplémentaires non disponibles via Conda.
- **Compléter Conda avec pip**
  - Utilisation de pip dans des environnements Conda pour accéder à la gamme complète des paquets Python.

## Workflow de Base pour la Gestion des Environnements Python

### 1. Installation de Miniconda
- **Téléchargement de Miniconda**
  - [Lien de téléchargement](https://docs.conda.io/en/latest/miniconda.html)
  
### 2. Création d'un Nouvel Environnement avec Conda
- **Commande pour Créer un Environnement**
    ```bash
    conda create --name monenv
    ```
- **Activation de l'Environnement**
    ```bash
    conda activate --name monenv
    ```
- **Désactivation de l'Environnement**
    ```bash
    conda deactivate
    ```
### 3. Installation de Paquets avec Conda
- **Recherche de Paquets**
    ```bash
    conda search nom_du_paquet
    ```
- **Installation d'un Paquet**
    ```bash
    conda install nom_du_paquet
    ```
- **Liste des Paquets Installés**
    ```bash
    conda list
    ```
### 4. Gestion des Environnements
- **Lister Tous les Environnements**
    ```bash
    conda env list
    ```
- **Suppression d'un Environnement**
    ```bash
    conda env remove --name monenv
    ```
### 5. Utilisation de pip dans un Environnement Conda
- Pourquoi Utiliser pip dans un Environnement Conda ?
  - Accéder aux paquets non disponibles dans Conda.
- Installation de pip dans un Environnement Conda
    ```bash
    conda install pip
    ```
- Utilisation de pip pour Installer des Paquets
    ```bash
    pip install nom_du_paquet
    ```
### 6. Geler et Exporter des Environnements avec conda
- Exporter un Environnement vers un Fichier YAML
    ```bash
    conda env export > environnement.yaml
    ```
- Créer un Environnement à partir d'un Fichier YAML
    ```bash
    conda env create -f environnement.yaml
    ```
### 7. Geler et Exporter des Environnements avec pip
- Exporter un Environnement vers un Fichier `requirements.txt`
    ```bash
    pip freeze > requirements.txt
    ```
- Créer un Environnement à partir d'un Fichier `requirements.txt`
    ```bash
    pip install -r requirements.txt
    ```

### 8. Conseils et Bonnes Pratiques Supplémentaires
- **Garder les Environnements Propres** : Supprimer régulièrement les environnements et les paquets inutilisés.
- **Contrôle de Version pour les Environnements** : Commiter `environment.yaml` et `requirements.txt` au contrôle de version.
- **Mise à Jour des Paquets** : Mettre régulièrement à jour les paquets pour bénéficier des dernières fonctionnalités et des mises à jour de sécurité.

## Annexe
- Erreurs Courantes et Dépannage
- Utilisation Avancée
  - Utilisation de conda-forge pour une gamme plus large de paquets
  - Configuration de Jupyter Notebooks dans des environnements Conda
- Glossaire des Termes
