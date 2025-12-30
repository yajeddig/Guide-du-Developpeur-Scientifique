---
layout: default
---

⏱️ **Durée estimée :** 30 minutes (lecture + pratique)
📋 **Prérequis :** Python 3.3+, ligne de commande basique
🎯 **Objectifs :** 
- Maîtriser l'outil venv natif de Python
- Créer et gérer des environnements virtuels légers
- Comprendre les avantages de la solution intégrée
- Utiliser venv pour des projets simples et portables

**TL;DR :** Ce chapitre présente venv comme solution native et légère pour la gestion d'environnements Python sans outils externes.
# Gestion des Environnements Python avec venv

## Introduction

### 1. Problèmes courants sans gestion d'environnements Python

* **Conflits de dépendances:** Différents projets Python peuvent nécessiter des versions spécifiques, parfois incompatibles, des mêmes bibliothèques. L'installation de ces bibliothèques de manière globale peut entraîner des conflits et des erreurs d'exécution difficiles à résoudre.
* **Problèmes d'installation globale:** Installer des bibliothèques directement dans votre environnement Python système peut perturber d'autres projets ou même affecter la stabilité de votre système d'exploitation.
* **Reproductibilité:** Il est crucial de pouvoir recréer un environnement de développement identique sur différentes machines ou après une longue période pour garantir que votre code fonctionne de manière cohérente.

### 2. Pourquoi utiliser des environnements Python ?

* **Isolation:** Les environnements virtuels créent des espaces isolés pour chaque projet, vous permettant d'installer des dépendances spécifiques sans affecter d'autres projets ou votre système global.
* **Cohérence:** Ils garantissent que votre code fonctionne de manière fiable sur différentes machines ou configurations, améliorant ainsi la reproductibilité de vos résultats.
* **Flexibilité:** Vous pouvez facilement basculer entre différents environnements pour travailler sur différents projets, chacun avec ses propres configurations de dépendances.

## Solution : Utilisation de venv

### 1. Introduction à venv

* **Qu'est-ce que venv ?**
  * `venv` est un module intégré à la bibliothèque standard de Python depuis la version 3.3. Il permet de créer des environnements virtuels légers et isolés pour vos projets Python.
  * Chaque environnement virtuel créé avec `venv` possède sa propre installation de Python et son propre ensemble de bibliothèques installées, ce qui évite les conflits entre les différents projets.

### 2. Pourquoi utiliser venv ?

* **Léger et intégré:** `venv` fait partie de la bibliothèque standard de Python, vous n'avez donc pas besoin d'installer d'outils supplémentaires.
* **Facilité d'utilisation:** La création et la gestion des environnements virtuels avec `venv` sont simples et intuitives.
* **Portabilité:** Les environnements créés avec `venv` sont facilement transportables entre différentes machines, ce qui facilite le partage de votre code et de son environnement de développement.

## Flux de Travail de Base pour la Gestion des Environnements Python avec venv

### 1. Installation de Python

* **Téléchargement de Python**
  * Téléchargez la dernière version de Python 3 depuis le [site officiel de Python](https://www.python.org/downloads/).
* **Installation**
  * Suivez les instructions d'installation pour votre système d'exploitation (Windows, macOS ou Linux).
  * Assurez-vous que l'option "Add Python to PATH" est cochée lors de l'installation pour pouvoir exécuter Python et `pip` depuis n'importe quel emplacement dans votre terminal.

### 2. Création d'un Nouvel Environnement avec venv

* **Commande pour créer un environnement**

  * Naviguez vers le répertoire de votre projet dans votre terminal.
  * Exécutez la commande suivante :

    ```bash
    python3 -m venv mon_environnement
    ```

  * Remplacez `mon_environnement` par le nom de votre choix pour l'environnement virtuel.
  * Cela créera un répertoire nommé `mon_environnement` contenant l'environnement virtuel.

### 3. Activation de l'Environnement

* **Windows**

    ```bash
    .\mon_environnement\Scripts\activate
    ```

* **macOS et Linux**

    ```bash
    source mon_environnement/bin/activate
    ```

  * Une fois l'environnement activé, vous verrez le nom de l'environnement apparaître au début de votre invite de commande, indiquant que vous travaillez dans cet environnement isolé.

### 4. Désactivation de l'Environnement

* **Commande**

    ```bash
    deactivate
    ```

  * Cette commande vous permet de quitter l'environnement virtuel et de revenir à votre environnement Python système.

### 5. Installation de Paquets avec pip

* **Recherche de paquets**

    ```bash
    pip search nom_du_paquet
    ```

* **Installation d'un paquet**

    ```bash
    pip install nom_du_paquet
    ```

* **Liste des paquets installés dans l'environnement actif**

    ```bash
    pip list
    ```

### 6. Geler et exporter des environnements

* **Générer un fichier `requirements.txt`**

    Une fois que vous avez installé tous les paquets nécessaires à votre projet dans l'environnement virtuel, vous pouvez générer un fichier `requirements.txt` qui liste toutes ces dépendances :

    ```bash
    pip freeze > requirements.txt
    ```

* **Utilisation de `requirements.txt` pour recréer un environnement**

    Pour partager votre environnement ou le recréer sur une autre machine, vous pouvez utiliser le fichier `requirements.txt`.

    1. Créez un nouvel environnement virtuel avec `venv`.
    2. Activez l'environnement.
    3. Exécutez la commande suivante :

    ```bash
    pip install -r requirements.txt
    ```

    Cela installera tous les paquets listés dans le fichier `requirements.txt`, recréant ainsi l'environnement d'origine.

### 7. Conseils et Bonnes Pratiques Supplémentaires

* **Garder les environnements propres:** Supprimez régulièrement les environnements virtuels que vous n'utilisez plus pour libérer de l'espace disque et éviter la confusion.
* **Contrôle de version pour les environnements:** Ajoutez le fichier `requirements.txt` à votre système de contrôle de version (Git) pour faciliter la collaboration et la reproductibilité de votre environnement.
* **Mise à jour des paquets:** Mettez régulièrement à jour les paquets de vos environnements virtuels pour bénéficier des dernières fonctionnalités, améliorations de performances et correctifs de sécurité. Utilisez `pip install --upgrade nom_du_paquet` pour mettre à jour un paquet spécifique, ou `pip freeze --local | grep -v '^\-e' | cut -d = -f 1  | xargs -n1 pip install -U` pour mettre à jour tous les paquets listés dans `requirements.txt`.
* **Environnements pour chaque projet:** Créez un environnement virtuel dédié pour chaque projet Python pour éviter les conflits de dépendances et assurer l'isolation de chaque projet.
* **Documentation:** Documentez clairement les dépendances de votre projet dans le fichier `requirements.txt` pour faciliter la collaboration et la reproductibilité.

## Conclusion

La gestion des environnements virtuels avec `venv` est une pratique essentielle pour tout développeur Python. En utilisant `venv`, vous pouvez créer des environnements de développement isolés, éviter les conflits de dépendances, et garantir la reproductibilité de vos projets.

<!-- ## Annexe

* **Erreurs courantes et dépannage**
* **Utilisation avancée**
    * Utilisation de scripts d'automatisation pour la gestion des environnements
    * Configuration de Jupyter Notebooks dans des environnements `venv`
* **Glossaire des termes** -->
