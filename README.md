# Guide du Développeur Scientifique

Bienvenue sur ce guide, conçu pour vous accompagner dans l'acquisition des connaissances fondamentales et des bonnes pratiques du développement informatique. Que vous soyez scientifique, ingénieur ou chercheur, si votre travail implique une dimension numérique significative - modélisation, simulation, analyse de données, data science, automatisation, déploiement de solutions, etc. - ce guide est fait pour vous.

## Pourquoi ce guide ?

La science moderne s'appuie de plus en plus sur des outils numériques. Que ce soit pour traiter de vastes ensembles de données, simuler des phénomènes complexes ou automatiser des tâches répétitives, la maîtrise des compétences en développement informatique est devenue indispensable.

Ce guide a pour but de vous fournir les bases nécessaires pour :

* **Écrire du code de qualité** : clair, maintenable et facile à partager.
* **Utiliser les outils essentiels** : Git, GitHub, environnements de développement, etc.
* **Comprendre les concepts clés** : architecture logicielle, tests, différents styles de programmation.
* **Aborder des techniques spécifiques** : calcul scientifique, résolution d'équations, etc.

Que vous soyez débutant ou que vous cherchiez à renforcer vos compétences, ce guide vous accompagnera dans votre parcours pour devenir un développeur scientifique autonome et efficace.

## Table des Matières

### 1. Git Basics

| **Sujet** | **Description** |
|-----------|-----------------|
| [Git Basics](1-git_basics/1-git_basics.md) | Introduction aux bases de Git. |
| [Local and Remote Repositories](1-git_basics/2-local_remote_repositories.md) | Introduction aux dépôts locaux et distants. |
| [Commencer avec GitLab](1-git_basics/3-getting_started_with_github.md) | Guide pour débuter avec GitLab. |
| [Branching Strategy](1-git_basics/4-branching_strategy.md) | Stratégies de branchement pour une gestion efficace du code. |

### 2. Collaboration Procedure

| **Sujet** | **Description** |
|-----------|-----------------|
| [Collaboration Procedure](2-collaboration_procedure/collab_procedure.md) | Introduction aux procédures de collaboration. |
| [Ressource en ligne](2-collaboration_procedure/project_management.md) | Ressources en ligne pour la gestion de projet, et l'utilisation des outils intégré dans GitHub ou Gitlab |
| - [Classic Project Management](2-collaboration_procedure/project_management/A-Classic_Project_Management.md) | Gestion de projet classique, de l'initialisation à l'exploitation. |
| - [Agile Project Management](2-collaboration_procedure/project_management/B-Agile_Project_Management.md) | Gestion de projet Agile, y compris le modèle d'équipe de Tuckman et les outils visuels. |
| - [Data Science Project Guide](2-collaboration_procedure/project_management/C-Data_Science_Project_Guide.md) | Guide pour la gestion de projets en data science. |

### 3. Best Practices

| **Sujet** | **Description** |
|-----------|-----------------|
| [Best Practices](3-bests_practices/code_writing.md) | Bonnes pratiques de développement. |
| [Code Writing](3-bests_practices/code_writing.md) | Meilleures pratiques pour écrire du code propre et maintenable. |
| - [Architecture](3-bests_practices/code_writing/architecture.md) | Principes d'architecture logicielle. |
| - [Beautiful Code](3-bests_practices/code_writing/beautiful_code_pep8.md) | Conseils pour écrire du code lisible et bien structuré (PEP 8). |
| - [Programming Style](3-bests_practices/code_writing/programming_style.md) | Différents styles de programmation, incluant la programmation orientée objet et fonctionnelle. |
| [IDE](3-bests_practices/IDE.md) | Choix et configuration d'environnements de développement intégrés (IDE). |
| - [Visual Studio Code](3-bests_practices/IDE/visual_studio_code.md) | Guide pour utiliser Visual Studio Code. |
| - [PyCharm](3-bests_practices/IDE/pycharm.md) | Guide pour utiliser PyCharm. |
| [Python Environment](3-bests_practices/python_environment.md) | Gestion des environnements Python avec Anaconda, Miniconda, Mamba, et venv. |
| [Structure de Dossier](3-bests_practices/repository_structure/project_arborescence.md) | Conseils pour organiser les répertoires de projets. |
| [Documentation](3-bests_practices/documentation/why_read_me_why_wiki.md) | Guide pour rédiger la documentation, incluant les ReadMe, les Docstrings, et les cas d'application. |
| - [Rédiger ses documents en MarkDown](3-bests_practices/documentation/markdown.md) | Présentation du langage MarkDown (entre la légèreté de Word et la performance de LateX). |
| - [Pourquoi écrire un ReadMe et un Wiki](3-bests_practices/documentation/why_read_me_why_wiki.md) | ReadMe et Wiki sont les principaux document d'un outil bien conçu et opérationnel. |
| - [Documentation technique](3-bests_practices/documentation/technical_doc_code.md) | Présentation de la documentation technique, et des Docstrings en python |
| - [Documentation scientifique](3-bests_practices/documentation/markdown.md) | Documentation scientifique allant droit au but tout en étant suffisamment riche pour comprendre l'outil |

### 4. Test & Validation

| **Sujet** | **Description** |
|-----------|-----------------|
| [Les tests et validations](4-test_validation/test_valid.md) | Importance des tests dans le cycle de développement. |
| [Tests Unitaires](4-test_validation/test_unitaire.md) | Mise en place et exécution des tests unitaires. |
| [Tests d'Intégration](4-test_validation/test_integration.md) | Stratégies pour tester l'intégration des composants. |
| [Tests Fonctionnels](4-test_validation/test_fonctionnels.md) | Validation des fonctionnalités à travers les tests fonctionnels. |

### 5. Compétences Scientifiques et Techniques

| **Sujet** | **Description** |
|-----------|-----------------|
| **Calcul Scientifique** | Techniques de calcul scientifique, résolution d'équations, et méthodes numériques. |
| - [Résolution d'un système d'équations algébriques non linéaires](5-scientific_technical_skills/NLAE_resolution.md) | Résolution des systèmes d'équations algébriques non linéaires. |
| - [Résolution d'un système d'équations différentielles ordinaires](5-scientific_technical_skills/ODE_resolution.md) | Méthodes pour résoudre les équations différentielles ordinaires. |
| - Résolution d'un bilan de population | Approches pour la résolution des bilans de population. |
| -- Méthode des moments | Utilisation de la méthode des moments pour les bilans de population. |
| -- Méthode par discrétisation | Application de la méthode par discrétisation pour les bilans de population. |
| - Résolution d'un système d'équations algébro-différentielles | Techniques pour résoudre les systèmes d'équations algébro-différentielles. |
| - Résolution d'un système d'équations aux dérivées partielles | Approches pour résoudre les systèmes d'équations aux dérivées partielles. |

---
