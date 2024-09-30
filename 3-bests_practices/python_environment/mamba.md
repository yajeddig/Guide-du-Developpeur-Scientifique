# Gestion des Environnements Python avec Mamba & pip

## Introduction

### 1. Problèmes Généraux avec les Environnements Python

- **Conflits de Dépendances** : Différents projets nécessitent différentes versions des mêmes bibliothèques.
- **Problèmes d'Installation Globale** : L'installation de bibliothèques de manière globale peut provoquer des conflits et affecter les paramètres système.
- **Reproductibilité** : Assurer que le code fonctionne de manière cohérente sur différentes machines ou après des modifications.

### 2. Pourquoi Utiliser des Environnements Python ?

- **Isolation** : Séparer les dépendances des projets.
- **Cohérence** : Assurer la même configuration sur différents environnements de développement.
- **Flexibilité** : Passer facilement d'une configuration à une autre pour différents projets.

## Solution : Utilisation de Mamba et pip

### 1. Introduction à Mamba

- **Qu'est-ce que Mamba ?**
  - Un gestionnaire de paquets rapide et réimplémentation de Conda.
  - Il permet de créer et de gérer des environnements Python isolés de manière plus rapide et efficace.
- **Pourquoi Mamba plutôt que Conda ?**
  - Vitesse accrue pour la résolution des dépendances et les installations.
  - Optimisation pour des performances élevées et une meilleure expérience utilisateur.

### 2. Introduction à pip

- **Qu'est-ce que pip ?**
  - L'installateur de paquets pour Python.
  - Permet d'installer et de gérer des bibliothèques Python supplémentaires non disponibles via Conda.
- **Compléter Mamba avec pip**
  - Utilisation de pip dans des environnements Mamba pour accéder à la gamme complète des paquets Python.

## Flux de Travail de Base pour la Gestion des Environnements Python

### 1. Installation de Mamba

- **Téléchargement et Installation de Mamba**
  - Instructions pour installer Mamba via Conda :

  ```bash
  conda install mamba -n base -c conda-forge
  ```

### 2. Création d'un Nouvel Environnement avec Mamba

- **Commande pour Créer un Environnement**

  ```bash
  mamba create --name monenv
  ```

- **Activation de l'Environnement**

  ```bash
  mamba activate monenv
  ```

- **Désactivation de l'Environnement**

  ```bash
  mamba deactivate
  ```

### 3. Installation de Paquets avec Mamba

- **Recherche de Paquets**

  ```bash
  mamba search nom_du_paquet
  ```

- **Installation d'un Paquet**

  ```bash
  mamba install nom_du_paquet
  ```

- **Liste des Paquets Installés**

  ```bash
  mamba list
  ```

### 4. Gestion des Environnements

- **Lister Tous les Environnements**

  ```bash
  mamba env list
  ```

- **Suppression d'un Environnement**

  ```bash
  mamba env remove --name monenv
  ```

### 5. Utilisation de pip dans un Environnement Mamba

- **Pourquoi Utiliser pip dans un Environnement Mamba ?**
  - Accéder aux paquets non disponibles dans Conda.
- **Installation de pip dans un Environnement Mamba**

  ```bash
  mamba install pip
  ```

- **Utilisation de pip pour Installer des Paquets**

  ```bash
  pip install nom_du_paquet
  ```

### 6. Geler et Exporter des Environnements

- **Exporter un Environnement vers un Fichier YAML**

  ```bash
  mamba env export > environnement.yaml
  ```

- **Créer un Environnement à partir d'un Fichier YAML**

  ```bash
  mamba env create -f environnement.yaml
  ```

### 7. Génération d'un requirements.txt et Reprise de Projet

- **Générer un fichier requirements.txt**
  - Une fois les paquets installés dans votre environnement, vous pouvez générer un fichier `requirements.txt` pour lister toutes les dépendances de votre projet.

  ```bash
  pip freeze > requirements.txt
  ```

- **Utilisation de requirements.txt pour Reprendre un Projet**
  - Pour reprendre un projet ou pour partager votre environnement avec d'autres, ils peuvent installer les mêmes dépendances en utilisant le fichier `requirements.txt`.

  ```bash
  pip install -r requirements.txt
  ```

### 8. Conseils et Bonnes Pratiques Supplémentaires

- **Garder les Environnements Propres** : Supprimer régulièrement les environnements et les paquets inutilisés.
- **Contrôle de Version pour les Environnements** : Commiter `environment.yaml` et `requirements.txt` au contrôle de version.
- **Mise à Jour des Paquets** : Mettre régulièrement à jour les paquets pour bénéficier des dernières fonctionnalités et des mises à jour de sécurité.

## Conclusion

- **Lectures et Ressources Supplémentaires**
  - Documentation Officielle de Mamba
  - Documentation de pip
  - Tutoriels et Guides

<!-- ## Annexe

- **Erreurs Courantes et Dépannage**
- **Utilisation Avancée**
  - Utilisation de `conda-forge` pour une gamme plus large de paquets
  - Configuration de Jupyter Notebooks dans des environnements Mamba
- **Glossaire des Termes** -->
