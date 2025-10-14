---
⏱️ **Durée estimée :** 35 minutes (installation + configuration)
📋 **Prérequis :** Notions de Python, installation de PyCharm
🎯 **Objectifs :** 
- Découvrir l'interface de PyCharm
- Configurer l'environnement de développement
- Utiliser les fonctionnalités avancées de débogage
- Comprendre les avantages et inconvénients vs VSCode

**TL;DR :** Ce chapitre présente PyCharm comme alternative IDE pour le développement Python professionnel.
---

# PyCharm

## Installation, configuration et prise en main de PyCharm

Voici comment installer, configurer et utiliser PyCharm pour le développement Python :

### 1. Installation de PyCharm
- Rendez-vous sur [le site officiel de JetBrains](https://www.jetbrains.com/pycharm/download/) et téléchargez la version Community (gratuite) ou Professional.
- Installez PyCharm en suivant les instructions pour votre système d'exploitation (Windows, macOS, Linux).

### 2. Création d'un nouveau projet Python
- Lancez PyCharm.
- Cliquez sur **"New Project"**.
- Choisissez **"Pure Python"** comme type de projet.
- Sélectionnez ou configurez l'interpréteur Python (PyCharm détecte généralement les installations existantes).
- Donnez un nom à votre projet et cliquez sur **"Create"**.

### 3. Configuration de l'environnement Python
- Pour ajouter un nouvel interpréteur ou un environnement virtuel :
  - Allez dans **File > Settings > Project: [nom du projet] > Python Interpreter**.
  - Cliquez sur la roue dentée puis sur **"Add..."** pour choisir un nouvel interpréteur ou créer un environnement virtuel (venv, conda, etc.).

### 4. Édition et exécution de code
- Créez un nouveau fichier Python via **File > New > Python File**.
- Écrivez votre code.
- Pour exécuter le fichier, faites un clic droit sur le fichier et sélectionnez **"Run 'nom_du_fichier'"** ou utilisez le bouton vert en haut à droite.

### 5. Débogage
- Placez des points d'arrêt en cliquant à gauche des numéros de ligne.
- Lancez le débogueur avec le bouton **"Debug"** (bug vert).
- Utilisez les outils de débogage pour inspecter les variables, exécuter le code pas à pas, etc.

### 6. Fonctionnalités avancées
- **Auto-complétion et suggestions intelligentes** : PyCharm propose des suggestions de code et complète automatiquement les instructions.
- **Refactoring** : Renommez, déplacez, ou modifiez des blocs de code facilement.
- **Intégration Git** : Gérez votre code source avec Git directement dans PyCharm (commit, push, pull, etc.).
- **Tests unitaires** : Configurez et exécutez des tests avec pytest, unittest, etc.

### 7. Avantages et inconvénients vs VSCode
- **Avantages** : Outils de refactoring puissants, débogueur avancé, gestion des environnements Python, intégration profonde avec les frameworks Python.
- **Inconvénients** : Plus lourd et parfois plus lent que VSCode, moins flexible pour d'autres langages, certaines fonctionnalités avancées sont payantes (version Professional).

Pour plus de détails, consultez la [documentation officielle PyCharm](https://www.jetbrains.com/pycharm/documentation/).