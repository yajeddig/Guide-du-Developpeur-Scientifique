# Fondamentaux de Git : Un guide pour les scientifiques

## Ressources Recommandées

Avant de plonger dans ce guide, nous vous recommandons de consulter les ressources suivantes pour une compréhension approfondie et illustrée de Git. Ces ressources sont de haute qualité, pédagogiques et richement illustrées, et vous fourniront une base solide pour maîtriser Git.

- **[Git and GitHub - 0 Experience to Professional in 1 Tutorial (Part 1)](https://youtu.be/hrTQipWp6co?si=pXiKAMMw5HjMfJA1)**
  - 0:00 Qu'est-ce que Git ?
  - 1:31 Comment installer Git
  - 2:00 Installation sur Mac
  - 3:31 Installation sur Windows
  - 4:21 Configuration du projet
  - 5:33 Configuration de Git
  - 7:38 Création d'une version
  - 11:59 Visualisation de l'historique et modification d'un commit
  - 14:50 Visualisation de Git + Fondamentaux de Git
  - 16:28 Zone de staging et zone de travail
  - 20:22 Compléter l'historique des versions
  - 22:20 Visualisation des versions précédentes du code
  - 25:15 Restauration du code à une version précédente
  - 26:25 Introduction au branchement Git
  - 29:15 Restauration du code comme Google Docs
  - 31:55 Fonctionnalité supplémentaire 1 : Alias Git
  - 33:41 Fonctionnalité supplémentaire 2 : Git Ignore
  - 34:55 Fonctionnalité supplémentaire 3 : Comment supprimer Git

- **[Git and GitHub - 0 Experience to Professional in 1 Tutorial (Part 2)](https://youtu.be/1ibmWyt8hfw?si=ZxZzBilEMGjil2az)**
  - 0:00 Introduction
  - 0:29 Présentation du projet - Sauvegarde en ligne
  - 2:02 Introduction à GitHub
  - 4:13 Fonctionnalité 1 - Création d'une sauvegarde en ligne
  - 9:55 `git push`
  - 12:11 Dépannage si `git push` ne fonctionne pas
  - 13:05 Vérifier que vous avez exécuté `git config`
  - 13:22 Ajouter votre nom d'utilisateur dans l'URL distante
  - 14:08 Utiliser un jeton d'accès personnel
  - 15:34 Fonctionnalités de GitHub
  - 17:19 Fonctionnalité 2 - Synchroniser les modifications de l'ordinateur vers GitHub
  - 20:25 Plus d'informations sur `git push`
  - 25:08 Fonctionnalité 3 - Synchroniser les modifications de GitHub vers l'ordinateur
  - 29:43 `git fetch` et `git pull`
  - 32:20 Résumé
  - 33:50 Scénario de pratique 1 - Projet existant
  - 36:56 Scénario de pratique 2 - Nouveau projet
  - 39:48 Scénario de pratique 3 - Rejoindre une équipe
  - 41:48 Configuration des clés SSH pour GitHub
  - 43:01 Configuration des clés SSH sur Mac
  - 47:24 Configuration des clés SSH sur Windows PowerShell
  - 51:58 Utilisation de notre clé SSH
  - 55:17 Ce qui suit dans la partie 3

- **[Git Branching and Merging - Detailed Tutorial (Part 3)](https://youtu.be/Q1kHG842HoI?si=SUVyf6Ej0lvD7I-N)**
  - 0:00 Branches
  - 1:42 Exemple de branchement
  - 11:31 Fusion
  - 19:23 Conflits de fusion
  - 27:26 Flux de travail avec les branches de fonctionnalités
  - 37:51 Mise à jour du dépôt local après la fusion
  - 40:27 Conflits de fusion dans le flux de travail des branches de fonctionnalités
  - 48:52 Résolution des conflits de fusion sur notre ordinateur

- **Guides étape par étape pour apprendre Git et GitHub :**
  - [Débutant](https://roadmap.sh/git-github?r=git-github-beginner)
  - [Complet](https://roadmap.sh/git-github)

- **Cours OpenClassrooms :**
  - [Gérez du code avec Git et GitHub](https://openclassrooms.com/fr/courses/7162856-gerez-du-code-avec-git-et-github)
  - [Devenez un expert de Git et GitHub](https://openclassrooms.com/fr/courses/7688581-devenez-un-expert-de-git-et-github)

---

## Introduction

Git est un outil indispensable pour garder une trace de l'évolution de votre travail, un peu comme une machine à remonter le temps pour votre code et vos données. Il est particulièrement utile pour les projets scientifiques où le suivi des modifications et la collaboration sont essentiels.

Nous vous encourageons vivement à consulter les ressources recommandées ci-dessus pour une immersion complète dans l'univers de Git. Ces ressources vous offriront des explications détaillées, des exemples pratiques et des illustrations pour faciliter votre apprentissage.

## Pourquoi utiliser Git ?

Imaginez que vous travaillez sur un projet complexe et que vous faites une erreur qui casse tout. Pas de panique ! Git vous permet de revenir à une version précédente, comme si vous remontiez dans le temps avant l'erreur. De plus, Git est essentiel pour le travail en équipe. Il permet à plusieurs personnes de travailler sur le même projet sans se marcher sur les pieds. Chacun a sa propre copie du projet, et Git permet de fusionner intelligemment les modifications de chacun.

## Git est décentralisé : La liberté du travail collaboratif

Git est un système décentralisé, ce qui signifie qu'il n'y a pas de serveur central qui contrôle tout. Chaque membre de l'équipe a une copie complète de l'historique du projet. Cela offre plusieurs avantages :

- **Travail hors ligne** : Vous pouvez travailler sur votre projet même sans connexion Internet.
- **Sécurité** : Si un ordinateur tombe en panne, l'historique du projet est préservé sur les autres ordinateurs.
- **Flexibilité** : Chaque membre de l'équipe peut expérimenter sans crainte de casser le travail des autres.

![Gestion décentralisée avec Git](image/git_decentralise.png)

## Généralités

- Git est un outil de gestion de versions gratuit et open-source.
- Il est largement adopté par les développeurs pour sa flexibilité et sa puissance.
- Git permet l'archivage et la conservation des étapes de développement, assurant une traçabilité complète.
- Il permet de revenir à une version antérieure de son projet à tout moment et offre la possibilité de consulter les différences entre les différentes versions.
- Git facilite le versionnage de votre travail, mais aussi le travail en collaboration. Chacun possède une version du projet, qui est synchronisée régulièrement pour que tous bénéficient des avancées des autres.

## Installation de Git

Bien que les ressources recommandées fournissent des instructions détaillées, voici un rappel rapide sur la façon d'installer Git sur différents systèmes d'exploitation.

### Windows

1. Rendez-vous sur [la page de téléchargement officielle de Git](https://git-scm.com/download/win).
2. Téléchargez l'installateur et exécutez-le.
3. Suivez les instructions de l'installateur en laissant les options par défaut, sauf si vous avez des préférences spécifiques.

### macOS

1. Ouvrez le Terminal.
2. Installez Git via Homebrew (si Homebrew est installé) :

   ```bash
   brew install git
   ```

3. Alternativement, téléchargez l'installateur depuis [la page de téléchargement officielle de Git](https://git-scm.com/download/mac) et suivez les instructions.

### Linux

1. Ouvrez un terminal.
2. Utilisez le gestionnaire de paquets de votre distribution pour installer Git. Par exemple, sur Debian/Ubuntu :

   ```bash
   sudo apt-get update
   sudo apt-get install git
   ```

   Pour les autres distributions, utilisez les commandes appropriées (`yum`, `dnf`, `pacman`, etc.).

## Configuration de Git

Après l'installation, configurez Git avec vos informations personnelles pour que vos commits soient correctement identifiés.

1. **Configurer votre nom d'utilisateur** :

   ```bash
   git config --global user.name "Votre Nom"
   ```

2. **Configurer votre adresse e-mail** :

   ```bash
   git config --global user.email "votre.email@example.com"
   ```

   > **Important :** Assurez-vous que l'adresse e-mail correspond à celle que vous utiliserez sur des plateformes comme GitHub ou GitLab.

3. **Vérifier votre configuration** :

   ```bash
   git config --list
   ```

4. **Configurer l'éditeur de texte par défaut** :

   ```bash
   git config --global core.editor "code --wait"
   ```

   Remplacez `"code --wait"` par la commande pour votre éditeur préféré.

5. **Configurer des alias Git** :

   ```bash
   git config --global alias.st status
   git config --global alias.co checkout
   git config --global alias.br branch
   git config --global alias.ci commit
   ```

## En Conclusion

Git est essentiel pour le travail collaboratif dans le développement moderne. Il offre une flexibilité et un contrôle incomparables pour le suivi des modifications, le travail en équipe et la livraison continue de projets de qualité.

Pour approfondir vos connaissances, n'hésitez pas à revenir aux ressources recommandées au début de ce guide.

---

*Note : Ce guide est une introduction concise à Git. Les ressources recommandées offrent des explications plus détaillées et des supports visuels pour enrichir votre apprentissage.*