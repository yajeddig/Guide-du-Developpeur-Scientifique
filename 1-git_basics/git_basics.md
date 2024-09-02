# Fondamentaux de git

## Généralités

- Git est un outil de gestion de versions qui est gratuit et open-source.
- Il est largement adopté par les développeurs pour sa flexibilité et sa puissance.
- Git permet l'archivage et la conservation des étapes de développement, assurant une traçabilité complète.
- Git permet de revenir à une version antérieure de son projet à tout moment et offre la possibilité de consulter les différences entre les différentes versions.
- Git facilite le versioning de son travail, mais aussi le travail en collaboration. Chacun possède une version du projet, qui est synchronisé régulièrement entre eux afin que chacun bénéficie des avancées de l'autre.

## Git est décentralisé

- **Gestion centralisée :** Dans les systèmes de gestion de versions centralisés, chaque modification est enregistrée sur un serveur central.

  ![image.png](image\git_centraliser.png){width="194" height="154"}
  
- **Gestion décentralisée avec Git :** Git permet à chaque utilisateur de travailler de manière autonome, en synchronisant les modifications avec les autres développeurs à la demande.

  ![image.png](image/git_decentralise.png){width="194" height="154"}

## Installation de Git

### Windows

1. Rendez-vous sur [la page de téléchargement officielle de Git](https://git-scm.com/download/win).
2. Téléchargez l'installateur et exécutez-le.
3. Suivez les instructions de l'installateur en laissant les options par défaut sauf si vous avez des préférences spécifiques.

### macOS

1. Ouvrez Terminal.
2. Tapez la commande suivante pour installer Git via Homebrew (si Homebrew est installé) :

   ```bash
   brew install git
   ```

3. Alternativement, vous pouvez télécharger l'installateur depuis [la page de téléchargement officielle de Git](https://git-scm.com/download/mac) et suivre les instructions.

### Linux

1. Ouvrez un terminal.
2. Utilisez le gestionnaire de paquets de votre distribution pour installer Git. Par exemple, sur une distribution basée sur Debian/Ubuntu, utilisez :

   ```bash
   sudo apt-get update
   sudo apt-get install git
   ```

   Pour les autres distributions, utilisez les commandes appropriées pour votre gestionnaire de paquets (`yum`, `dnf`, `pacman`, etc.).

## Configuration de Git

Une fois Git installé, il est recommandé de le configurer avec vos informations personnelles afin que vos commits soient correctement identifiés.

1. **Configurer votre nom d'utilisateur** :

   ```bash
   git config --global user.name "Votre Nom"
   ```

2. **Configurer votre adresse e-mail** :

   ```bash
   git config --global user.email "votre.email@example.com"
   ```

   > **Important :** Assurez-vous que l'adresse e-mail configurée ici correspond à celle que vous utiliserez sur des plateformes comme GitHub ou GitLab. Si l'adresse e-mail est différente, vos commits ne seront pas associés correctement à votre compte sur ces plateformes, ce qui pourrait entraîner des problèmes de suivi ou de reconnaissance de vos contributions.

3. **Vérifier votre configuration** :

   Pour vérifier la configuration, utilisez la commande suivante :

   ```bash
   git config --list
   ```

   Cela affichera une liste des configurations actuelles.

4. **Configurer l'éditeur de texte par défaut** :

   Par défaut, Git utilise l'éditeur de texte de votre système (souvent Vim). Pour utiliser un autre éditeur, par exemple Visual Studio Code, utilisez la commande suivante :

   ```bash
   git config --global core.editor "code --wait"
   ```

   Remplacez `"code --wait"` par la commande pour ouvrir votre éditeur préféré.

5. **Configurer les alias Git** :

   Vous pouvez configurer des alias pour simplifier l'utilisation des commandes Git courantes. Par exemple :

   ```bash
   git config --global alias.st status
   git config --global alias.co checkout
   git config --global alias.br branch
   git config --global alias.ci commit
   ```

   Ces alias permettent de taper des commandes plus courtes comme `git st` au lieu de `git status`.



## En conclusion

Git est essentiel pour le travail collaboratif dans le développement moderne. Il offre une flexibilité et un contrôle incomparables pour le suivi des modifications, le travail en équipe et la livraison continue de logiciels de qualité.

Pour commencer avec Git, consultez [la documentation officielle de Git](https://git-scm.com/doc) ou suivez [ce tutoriel interactif](https://learngitbranching.js.org/).

## Ressources supplémentaires : 

[OpenClassRoom - Gérez du code avec Git et GitHub](https://openclassrooms.com/fr/courses/7162856-gerez-du-code-avec-git-et-github) 

[OpenClassRoom - Devenez un expert de Git et GitHub](https://openclassrooms.com/fr/courses/7688581-devenez-un-expert-de-git-et-github)




