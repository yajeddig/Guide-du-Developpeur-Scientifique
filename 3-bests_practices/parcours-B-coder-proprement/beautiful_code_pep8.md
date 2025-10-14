---
⏱️ **Durée estimée :** 30 minutes (lecture + exercices de style)
📋 **Prérequis :** Bases de Python, expérience de programmation
🎯 **Objectifs :** 
- Maîtriser les conventions de style PEP8
- Améliorer la lisibilité et maintenabilité du code
- Utiliser les outils de vérification automatique
- Adopter un style cohérent et professionnel

**TL;DR :** Ce chapitre détaille les conventions PEP8 pour écrire du Python lisible et maintenable selon les standards.
---

# **Guide Stylistique PEP8 pour Python**


La formation [OpenClassRoom - Écrivez du code Python maintenable](https://openclassrooms.com/fr/courses/7160741-ecrivez-du-code-python-maintenable) est assez courte et vous apprends toute les bonnes pratiques de rédaction d'un code maintenable.

## **Introduction**

Le PEP8 est un document qui fournit des conventions pour le codage en Python. Il a été écrit avec comme objectif de promouvoir une syntaxe qui est visuellement agréable et qui favorise une lecture du code par des développeurs venant de divers horizons dans le langage Python. Suivre ces conventions aide à maintenir la qualité du code, à favoriser la collaboration entre développeurs et à faciliter la maintenance du code sur le long terme.

## **Pourquoi le PEP8 est-il nécessaire ?**

* **Lisibilité :** Le Python est souvent appelé "exécutable pseudocode" en raison de sa lisibilité. Le PEP8 améliore cette caractéristique en standardisant la présentation du code.
* **Maintenabilité :** Un code conforme au PEP8 est plus facile à comprendre et à modifier par d'autres développeurs, ce qui est crucial pour les projets à long terme.
* **Uniformité :** Suivre un guide stylistique commun favorise l'uniformité du code au sein d'un projet ou entre différents projets.

## **Principaux Points du Guide PEP8**

### **Indentation**

* Utilisez 4 espaces par niveau d'indentation. Ne mélangez pas les tabulations et les espaces pour l'indentation.

### **Longueur des lignes**

* Limitez toutes les lignes à un maximum de 79 caractères pour le code et 72 caractères pour les commentaires et les docstrings.

### **Imports**

* Les imports doivent être placés en haut du fichier, juste après les commentaires du module et les docstrings, et avant les variables du module global et les constantes.
* Les imports doivent être regroupés dans l'ordre suivant : bibliothèques standard, bibliothèques tierces, imports locaux/application spécifique.
* Chaque groupe d'imports doit être séparé par une ligne vide.

### **Espaces**

* Utilisez des espaces autour des opérateurs et après les virgules, mais pas directement à l'intérieur des parenthèses, des crochets ou des accolades.
* N'utilisez pas d'espaces autour de l'affectation de variables utilisées pour indiquer un argument de mot-clé ou le nom d'un paramètre par défaut.

### **Conventions de nommage**

* **Modules :** Utilisez des noms courts, en minuscules, et si nécessaire, séparez les mots par des underscores.
* **Classes :** Utilisez la convention CapWords (ou CamelCase).
* **Fonctions :** Les noms des fonctions doivent être en minuscules, avec des mots séparés par des underscores pour améliorer la lisibilité.
* **Variables :** Identique aux fonctions.

### **Bonnes pratiques**

* Comparez les booléens par **`True`** et **`False`** plutôt que par **`==`**.
* Utilisez des "docstrings" pour documenter les modules, classes, méthodes et fonctions.
* Utilisez des exceptions pour gérer les erreurs plutôt que des codes de retour.

## **Conclusion**

Adhérer au PEP8 améliore non seulement la qualité du code, mais facilite également la collaboration et la maintenance. Même si suivre chaque règle à la lettre n'est pas toujours possible ou nécessaire, s'efforcer de respecter ces conventions est un bon point de départ pour écrire du code Python propre et professionnel.

---

N'oubliez pas que le PEP8 est un guide, et non une série de règles strictes. Son objectif principal est d'améliorer la lisibilité et la cohérence du code Python à travers le vaste écosystème de projets Python. Il est également recommandé d'utiliser des outils comme **`flake8`**, **`pylint`**, ou **`black`** pour automatiquement vérifier la conformité de votre code avec le PEP8.

# Tutoriel d'Utilisation de Black, le Formateur de Code Python

## Introduction

Black est un formateur de code Python qui adopte une approche opinionnée. Son but est de standardiser le formatage du code Python de manière automatique, permettant aux développeurs de se concentrer sur la logique plutôt que sur le style. Black reformate tout votre code dans un style uniforme, ce qui réduit le temps passé à discuter du style du code pendant les revues de code. Voyons comment l'utiliser.

## Installation

Black peut être installé via pip, le gestionnaire de paquets Python. Assurez-vous que vous avez Python 3.6 ou une version ultérieure avant de commencer.

Ouvrez votre terminal et tapez la commande suivante :

```sh
pip install black
```

Cela installera Black et ses dépendances.

## Utilisation Basique

Pour formater un fichier spécifique, utilisez la commande suivante dans votre terminal :

```sh
black chemin/vers/votre_fichier.py
```

Black reformatera le fichier spécifié selon les standards qu'il préconise.

Si vous souhaitez formater tous les fichiers Python dans un répertoire, vous pouvez exécuter Black sur le répertoire :

```sh
black chemin/vers/votre_dossier/
```

Black parcourra récursivement le dossier et reformatera tous les fichiers `.py` qu'il trouve.

## Options Utiles

### \--check

Si vous voulez simplement vérifier quels fichiers seraient reformattés sans appliquer les modifications, vous pouvez utiliser l'option `--check` :

```sh
black --check chemin/vers/votre_dossier/
```

### \--diff

Pour voir les modifications spécifiques que Black propose sans les appliquer, utilisez l'option `--diff` :

```sh
black --diff chemin/vers/votre_fichier.py
```

### \--line-length

Bien que Black ne propose pas beaucoup d'options de configuration, vous pouvez ajuster la longueur de ligne maximale (88 caractères par défaut) avec l'option `--line-length` :

```sh
black --line-length 100 chemin/vers/votre_fichier.py
```

### \--exclude

Pour exclure certains fichiers ou dossiers du formatage, utilisez l'option `--exclude` suivie d'une expression régulière :

```sh
black --exclude='/(\.venv|build)/' chemin/vers/votre_dossier/
```

## Intégration dans l'Éditeur de Code

Black peut être intégré dans de nombreux éditeurs de code, comme VSCode, PyCharm, et Sublime Text, pour formater automatiquement votre code à chaque sauvegarde. Pour cela, consultez la documentation spécifique de votre éditeur pour configurer Black comme formateur de code Python par défaut.

## Conclusion

Black simplifie la vie des développeurs Python en s'occupant du formatage du code pour eux. Cela vous permet de vous concentrer sur la création de fonctionnalités plutôt que sur le style de votre code. En suivant ce tutoriel, vous devriez être en mesure d'installer et d'utiliser Black pour améliorer la lisibilité et la cohérence de votre code Python.

## Ressources 

[OpenClassRoom - Écrivez du code Python maintenable](https://openclassrooms.com/fr/courses/7160741-ecrivez-du-code-python-maintenable)

https://realpython.com/python-pep8/

Voir la partie [Architecture](architecture.md) pour comprendre le lien entre architecture et lisibilité du code.

