---
layout: default
---

⏱️ **Durée estimée :** 30 minutes (lecture + pratique)
📋 **Prérequis :** Git installé, compte GitHub créé
🎯 **Objectifs :** 
- Configurer Git avec ses identifiants GitHub
- Comprendre l'authentification avec GitHub
- Savoir cloner un dépôt distant
- Effectuer ses premiers push et pull

**TL;DR :** Ce chapitre explique comment synchroniser ton travail local avec GitHub et commencer à collaborer.
# Démarrer avec Git et GitHub : Un guide pour les scientifiques

L'objectif de cette section est de vous guider dans les premières étapes de l'utilisation de Git et GitHub pour gérer vos projets et simulateurs.

## Prérequis

### Installation de Git

1. **Télécharger Git** : Rendez-vous sur [le site officiel de Git](https://git-scm.com/) et téléchargez la dernière version de Git adaptée à votre système d'exploitation.
2. **Installer Git** : Suivez les instructions d'installation et conservez les paramètres par défaut, sauf si vous avez des préférences spécifiques.

### Configuration initiale de Git

1. **Configurer Git avec votre nom d'utilisateur et votre email** :

- Ouvrez votre terminal ou Git Bash.
- Exécutez les commandes suivantes pour configurer votre nom d'utilisateur et votre email :

```bash
  git config --global user.name "VotreNomUtilisateur"
  git config --global user.email "VotreEmail@example.com"
```

  Assurez-vous que ces informations correspondent exactement à celles de votre compte GitHub.

### Créer un jeton d'accès personnel pour GitHub (si nécessaire)

(Note : Vous pouvez cloner des projets GitHub sur votre ordinateur via VSCode sans jeton d'accès personnel si vous utilisez HTTPS.)

1. Connectez-vous à votre compte GitHub.
2. Allez dans les paramètres de votre profil.
3. Sélectionnez **Developer settings** (Paramètres développeur), puis **Personal access tokens** (Jetons d'accès personnels).
4. Cliquez sur **Generate new token** (Générer un nouveau jeton).
5. Donnez un nom à votre jeton, sélectionnez les autorisations nécessaires (par exemple : `repo`), puis cliquez sur **Generate token**.
6. Copiez le jeton généré et conservez-le dans un endroit sûr. Vous en aurez besoin pour vous connecter à GitHub via Git si vous utilisez SSH.

## Création d'un projet sur GitHub

1. Depuis la page d'accueil de GitHub, cliquez sur le bouton vert **New** (Nouveau) en haut à gauche.
2. Choisissez un nom pour le projet (par exemple : "Projet_A", "Simulation_B", etc.).
3. Sélectionnez la visibilité du projet (public ou privé).
4. Cochez la case **Initialize this repository with a README** (Initialiser ce dépôt avec un README).
5. Cliquez sur **Create repository** (Créer le dépôt).

## Lier un dépôt local au dépôt GitHub

Avant de commencer à coder, créez un dossier local pour votre projet et connectez-le à votre dépôt GitHub.

1. Créez un dossier pour votre projet (par exemple : "Mon_Projet") à l'emplacement de votre choix sur votre ordinateur.
2. Ouvrez votre terminal ou Git Bash et naviguez jusqu'à ce dossier.
3. Sur la page de votre dépôt GitHub, cliquez sur le bouton vert **Code**, puis copiez l'URL du dépôt (HTTPS ou SSH).
4. Dans votre terminal, exécutez la commande suivante pour cloner le dépôt :

   ```bash
   git clone <URL_du_dépôt>
   ```

## Votre premier script Python synchronisé avec GitHub

Si vous utilisez **Visual Studio Code (VS Code)** :

1. Ouvrez le dossier de votre projet dans VSCode.
2. Créez un nouveau fichier `.py`.
3. Écrivez votre première fonction dans ce fichier `.py`.
4. Dans la barre latérale, cliquez sur l'icône de contrôle de version (**Source Control**).
5. Ajoutez vos modifications en cliquant sur le **+** à côté du fichier modifié.
6. Rédigez un message de commit décrivant vos modifications, puis cliquez sur la coche pour valider (commit).
7. Cliquez sur les trois points (...) puis sur **Push** pour envoyer vos modifications vers GitHub.

Il est recommandé d'utiliser des branches pour organiser votre travail. Créez une nouvelle branche pour chaque fonctionnalité ou correction de bug, puis fusionnez-les dans la branche principale (`main`) une fois votre travail terminé et validé.

## Utilisation plus poussée de GitHub

- [Playlist : Git - Débutant (YouTube : Xavki)](https://youtube.com/playlist?list=PLn6POgpklwWpUfM8BaIU1deH6peqHdmWL&si=r9dyhOo8JqEvq2AY)
- [OpenClassRoom - Gérez du code avec Git et GitHub](https://openclassrooms.com/fr/courses/7162856-gerez-du-code-avec-git-et-github)
- [OpenClassRoom - Devenez un expert de Git et GitHub](https://openclassrooms.com/fr/courses/7688581-devenez-un-expert-de-git-et-github)
- [Documentation GitHub avec des tutoriels et guides](https://docs.github.com/fr)
