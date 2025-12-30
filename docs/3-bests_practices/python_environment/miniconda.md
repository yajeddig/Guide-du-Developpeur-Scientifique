---
layout: default
---

⏱️ **Durée estimée :** 45 minutes (installation + configuration)
📋 **Prérequis :** Bases de Python, ligne de commande
🎯 **Objectifs :** 
- Comprendre les avantages de Miniconda vs Anaconda
- Maîtriser l'installation minimale et personnalisable
- Apprendre à créer et gérer des environnements légers
- Combiner conda et pip pour une gestion optimale

**TL;DR :** Ce chapitre présente Miniconda comme alternative légère à Anaconda pour une gestion précise des environnements.
# Gestion des Environnements Python avec Miniconda & pip

## Introduction

### 1. Problèmes Généraux avec les Environnements Python

- **Conflits de Dépendances** : Différents projets peuvent nécessiter des versions différentes des mêmes bibliothèques. Installer ces bibliothèques globalement peut entraîner des conflits et des erreurs difficiles à résoudre.
- **Problèmes d'Installation Globale** : L'installation directe de bibliothèques dans votre environnement Python système peut perturber d'autres projets ou même affecter la stabilité de votre système d'exploitation.
- **Reproductibilité** : Il est essentiel de pouvoir recréer un environnement de développement identique sur différentes machines ou après une longue période pour garantir que votre code fonctionne de manière cohérente.

### 2. Pourquoi Utiliser des Environnements Python ?

- **Isolation** : Les environnements virtuels créent des espaces isolés pour chaque projet, vous permettant d'installer des dépendances spécifiques sans affecter d'autres projets ou votre système global.
- **Cohérence** : Ils garantissent que votre code fonctionne de manière fiable sur différentes machines ou configurations, améliorant ainsi la reproductibilité de vos résultats.
- **Flexibilité** : Vous pouvez facilement basculer entre différents environnements pour travailler sur différents projets, chacun avec ses propres configurations de dépendances.

## Solution : Utilisation de Miniconda et pip

### 1. Introduction à Miniconda

- **Qu'est-ce que Miniconda ?**
  - Une version minimale de la distribution Anaconda, incluant uniquement le gestionnaire de paquets `conda`, Python et quelques paquets essentiels.
  - Idéal pour les utilisateurs qui souhaitent un contrôle précis sur les paquets installés et qui préfèrent une installation légère.

- **Pourquoi Miniconda plutôt qu'Anaconda ?**
  - **Installation plus légère et plus rapide:** Miniconda occupe moins d'espace disque et s'installe plus rapidement qu'Anaconda, qui inclut de nombreuses bibliothèques pré-installées.
  - **Flexibilité:** Avec Miniconda, vous installez uniquement les paquets dont vous avez besoin, ce qui vous permet de personnaliser votre environnement de développement selon vos exigences spécifiques.

### 2. Introduction à pip

- **Qu'est-ce que pip ?**
  - Le gestionnaire de paquets officiel de Python.
  - Permet d'installer et de gérer des bibliothèques Python à partir du Python Package Index (PyPI).

- **Complémentarité avec Conda**
  - `pip` peut être utilisé au sein d'environnements Miniconda pour installer des paquets qui ne sont pas disponibles via les canaux Conda ou pour gérer des dépendances spécifiques à un projet.

## Workflow de Base pour la Gestion des Environnements Python avec Miniconda

### 1. Installation de Miniconda

- **Téléchargement de Miniconda**
  - Téléchargez la version appropriée pour votre système d'exploitation depuis le [site officiel de Miniconda](https://docs.conda.io/en/latest/miniconda.html).
  - Suivez les instructions d'installation.

### 2. Création d'un nouvel environnement avec Conda

- **Commande pour créer un environnement**

    ```bash
    conda create --name mon_environnement python=3.9 
    ```

  - Remplacez `mon_environnement` par le nom de votre choix pour l'environnement.
  - Spécifiez la version de Python souhaitée (ici, Python 3.9).

- **Activation de l'environnement**

    ```bash
    conda activate mon_environnement
    ```

- **Désactivation de l'environnement**

    ```bash
    conda deactivate
    ```

### 3. Installation de Paquets

- **Avec Conda**

  - **Recherche de paquets:**

    ```bash
    conda search nom_du_paquet
    ```

  - **Installation d'un paquet:**

    ```bash
    conda install nom_du_paquet
    ```

  - **Liste des paquets installés dans l'environnement actif:**

    ```bash
    conda list
    ```

- **Avec pip**

  - **Installation de pip dans un environnement Conda (si nécessaire):**

      ```bash
      conda install pip
      ```

  - **Utilisation de pip pour installer des paquets:**

      ```bash
      pip install nom_du_paquet
      ```

### 4. Gestion des Environnements

- **Lister tous les environnements**

    ```bash
    conda env list
    ```

- **Suppression d'un environnement**

    ```bash
    conda env remove --name mon_environnement
    ```

### 5. Exportation et recréation d'environnements avec Conda

- **Exporter un environnement vers un fichier YAML**

    ```bash
    conda env export --no-builds > environment.yml
    ```

  - **Remarque** : Supprimez les chemins de fichiers absolus du fichier `.yaml` pour qu'il soit portable et utilisable par d'autres utilisateurs.

- **Recréer un environnement à partir du fichier `environment.yml`**

    ```bash
    conda env create --name mon_environnement --file environment.yml
    ```

### 6. Génération d'un `requirements.txt` et reprise de projet

- **Générer un fichier `requirements.txt`**

    Une fois les paquets installés dans votre environnement (avec `conda` ou `pip`), vous pouvez générer un fichier `requirements.txt` listant toutes les dépendances Python de votre projet :

    ```bash
    pip freeze > requirements.txt
    ```

- **Utilisation de `requirements.txt` pour reprendre un projet**

    Pour partager votre environnement ou recréer le même environnement sur une autre machine, vous pouvez utiliser le fichier `requirements.txt` :

    ```bash
    conda create --name mon_environnement 
    conda activate mon_environnement
    pip install -r requirements.txt
    ```

### 7. Conseils et Bonnes Pratiques Supplémentaires

- **Garder les environnements propres** : Supprimez régulièrement les environnements et les paquets inutilisés pour libérer de l'espace disque et éviter la confusion.
- **Contrôle de version pour les environnements** : Ajoutez les fichiers `environment.yml` et `requirements.txt` à votre système de contrôle de version (Git) pour faciliter la collaboration et la reproductibilité de votre environnement.
- **Mise à jour des paquets** : Mettez régulièrement à jour les paquets de vos environnements pour bénéficier des dernières fonctionnalités, améliorations de performances et correctifs de sécurité.
- **Choisissez le bon outil** : Utilisez `conda` pour installer des paquets lorsque c'est possible, car il gère également les dépendances non-Python. Utilisez `pip` pour les paquets qui ne sont pas disponibles via conda.
- **Environnements pour chaque projet** : Créez un environnement dédié pour chaque projet Python pour éviter les conflits de dépendances.
- **Documentation** : Documentez clairement les dépendances de votre projet dans le fichier `environment.yml` ou `requirements.txt` pour faciliter la collaboration et la reproductibilité.

### 8. Débogage

- **Les packages ne s'importent pas alors qu'ils sont bien installés dans l'environnement**

  - **Vérifiez l'environnement actif:** Assurez-vous que vous avez bien activé l'environnement correct avec `conda activate mon_environnement`.
  - **Redémarrez le noyau:** Si vous utilisez un notebook Jupyter, redémarrez le noyau pour que les changements d'environnement soient pris en compte
  - **Recréez l'environnement:** Si le problème persiste, essayez de supprimer et de recréer l'environnement à partir de votre fichier `environment.yml`.

<!-- ## Annexe

- **Erreurs Courantes et Dépannage**
- **Utilisation Avancée**
    - Utilisation de `conda-forge` pour une gamme plus large de paquets.
    - Configuration de Jupyter Notebooks dans des environnements Conda.
- **Glossaire des Termes** -->
