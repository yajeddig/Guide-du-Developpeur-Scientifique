# Guide du Développeur Scientifique

Bienvenue sur ce guide, conçu pour vous accompagner dans l'acquisition des connaissances fondamentales et des bonnes pratiques du développement informatique. Que vous soyez scientifique, ingénieur ou chercheur, si votre travail implique une dimension numérique significative – modélisation, simulation, analyse de données, data science, automatisation, déploiement de solutions, etc. – ce guide est fait pour vous.

## Pourquoi ce guide ?

La science moderne s'appuie de plus en plus sur des outils numériques. Que ce soit pour traiter de vastes ensembles de données, simuler des phénomènes complexes ou automatiser des tâches répétitives, la maîtrise des compétences en développement informatique est devenue indispensable.

Ce guide a pour but de vous fournir les bases nécessaires pour :

- **Écrire du code de qualité** : clair, maintenable et facile à partager.
- **Utiliser les outils essentiels** : Git, GitHub, environnements de développement, etc.
- **Comprendre les concepts clés** : architecture logicielle, tests, différents styles de programmation.
- **Aborder des techniques spécifiques** : calcul scientifique, résolution d'équations, etc.

Que vous soyez débutant ou que vous cherchiez à renforcer vos compétences, ce guide vous accompagnera dans votre parcours pour devenir un développeur scientifique autonome et efficace.

## 📊 Statut des sections










| Section | Statut | Dernière MàJ | Niveau recommandé |
|---------|--------|--------------|-------------------|
| 1 - Git Basics | ✅ Complet | 2025-01 | Débutant |
| 2 - Collaboration | 🚧 En révision | - | Avancé |
| 3A - Survival Kit | ✅ Complet | 2025-01 | Débutant |
| 3B - Code propre | 🟡 Partiel | 2024-12 | Intermédiaire |
| 3C - Collab avancée | 🟡 Partiel | 2024-12 | Avancé |
| 4 - Tests | 🚧 En révision | - | Intermédiaire |
| 5 - Scientific (2 exemples) | ✅ Complet | 2025-01 | Tous niveaux |
| 5 - Scientific (complet) | 🚧 En cours | - | - |
| 6 - Lexique CS | 📝 Planifié | - | Tous niveaux |

**Légende :** ✅ Utilisable en prod | 🟡 Utilisable mais incomplet | 🚧 En travaux | 📝 Pas commencé

_Note:_ Les dates « Dernière MàJ » pour les lignes marquées ✅ sont mises à jour automatiquement lors des pushes sur la branche par défaut via GitHub Actions.

## 🎯 Parcours d'Apprentissage

Pour vous guider dans votre progression, nous avons conçu **[des parcours d'apprentissage structurés](0-getting_started/learning_paths.md)** avec trois niveaux de compétences :

- **🌱 Niveau 1 - Débutant (0-6 mois)** : Git + Survival Kit + Premier projet collaboratif
- **🚀 Niveau 2 - Autonome (6-12 mois)** : Code propre + Tests + Méthodes numériques  
- **🎯 Niveau 3 - Expert (12+ mois)** : Collaboration avancée + Gestion projet + Culture CS

Chaque niveau propose des durées estimées, des critères de validation mesurables et des projets concrets pour valider vos acquis.

**➡️ [Découvrir les parcours d'apprentissage](0-getting_started/learning_paths.md)**

---

## Table des Matières

### 1. Git Basics

| **Sujet** | **Description** |
|-----------|-----------------|
| [Git Basics](1-git_basics/1-git_basics.md) | Introduction aux bases de Git. |
| [Local & Remote Repositories](1-git_basics/2-local_remote_repositories.md) | Gestion des dépôts locaux et distants. |
| [Getting Started with GitHub](1-git_basics/3-getting_started_with_github.md) | Premiers pas avec GitHub. |
| [Branching Strategy](1-git_basics/4-branching_strategy.md) | Stratégies de branchement pour une gestion efficace du code. |
| [**🎯 Exercice Fil Rouge**](1-git_basics/5-exercice_fil_rouge.md) | **Exercice pratique complet : votre première contribution open source !** |
| [**📝 Quiz d'Auto-Évaluation**](1-git_basics/6-quiz_autoevaluation.md) | **Testez vos connaissances avec 15 questions (30% théorie, 70% pratique)** |

---

### 2. Collaboration Procedure

| **Sujet** | **Description** |
|-----------|-----------------|
| [Collaboration Procedure](2-collaboration_procedure/collab_procedure.md) | Introduction aux procédures de collaboration. |
| [Project Management](2-collaboration_procedure/project_management.md) | Ressources en ligne et conseils pour la gestion de projet. |
| &nbsp;&nbsp;&nbsp;• [Classic Project Management](2-collaboration_procedure/project_management/A-Classic_Project_Management.md) | Gestion de projet classique : initialiser, lancer et exploiter un projet. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(_Détails supplémentaires dans le dossier_ `A-Classic_Project_Management/`) | |
| &nbsp;&nbsp;&nbsp;• [Agile Project Management](2-collaboration_procedure/project_management/B-Agile_Project_Management.md) | Gestion de projet Agile, incluant le modèle d'équipe de Tuckman et les outils visuels. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(_Consultez le dossier_ `B-Agile_Project_Management/` _pour des exemples concrets_) | |
| &nbsp;&nbsp;&nbsp;• [Data Science Project Guide](2-collaboration_procedure/project_management/C-Data_Science_Project_Guide.md) | Guide dédié à la gestion de projets en Data Science. |
| [Project Management Resources](2-collaboration_procedure/project_management/) | Ressources graphiques (images, schémas) associées à la gestion de projet. |

---

### 3. Best Practices (Parcours)

| **Parcours / Module** | **Description** |
|-----------------------|-----------------|
| [Index des Parcours](3-bests_practices/README.md) | Vue d'ensemble des trois parcours progressifs. |
| 🥉 [Parcours A - Survival Kit](3-bests_practices/parcours-A-survival-kit/README.md) | Bases minimales professionnelles (env, README, structure minimale). |
| &nbsp;&nbsp;&nbsp;• [Environnement Python - Basics](3-bests_practices/parcours-A-survival-kit/python_environment_basics.md) | Créer et gérer un environnement léger. |
| &nbsp;&nbsp;&nbsp;• [README minimal](3-bests_practices/parcours-A-survival-kit/readme_minimal.md) | Structurer un README efficace rapidement. |
| &nbsp;&nbsp;&nbsp;• [Structure dépôt minimale](3-bests_practices/parcours-A-survival-kit/repo_structure_minimal.md) | Organisation initiale simple. |
| 🥈 [Parcours B - Coder Proprement](3-bests_practices/parcours-B-coder-proprement/README.md) | Lisibilité, architecture et qualité du code. |
| &nbsp;&nbsp;&nbsp;• [PEP8 / Beautiful Code](3-bests_practices/parcours-B-coder-proprement/beautiful_code_pep8.md) | Conventions de style et formatters. |
| &nbsp;&nbsp;&nbsp;• [Architecture](3-bests_practices/parcours-B-coder-proprement/architecture.md) | Structurer le logiciel avant de coder. |
| &nbsp;&nbsp;&nbsp;• [Styles de Programmation](3-bests_practices/parcours-B-coder-proprement/programming_style.md) | Paradigmes et choix contextuels. |
| &nbsp;&nbsp;&nbsp;• [VSCode](3-bests_practices/parcours-B-coder-proprement/IDE/visual_studio_code.md) | Configuration productive VSCode. |
| &nbsp;&nbsp;&nbsp;• [PyCharm](3-bests_practices/parcours-B-coder-proprement/IDE/pycharm.md) | Utilisation de PyCharm. |
| 🥇 [Parcours C - Collaborer à l'Échelle](3-bests_practices/parcours-C-collaborer-echelle/README.md) | Standardisation, doc avancée, collaboration. |
| &nbsp;&nbsp;&nbsp;• [Documentation Scientifique](3-bests_practices/parcours-C-collaborer-echelle/scientific_doc.md) | Structurer une doc de recherche. |
| &nbsp;&nbsp;&nbsp;• [Documentation Technique](3-bests_practices/parcours-C-collaborer-echelle/technical_doc_code.md) | Docstrings & génération automatique. |
| &nbsp;&nbsp;&nbsp;• [README vs Wiki](3-bests_practices/parcours-C-collaborer-echelle/why_read_me_why_wiki.md) | Choisir l'outil adapté. |
| &nbsp;&nbsp;&nbsp;• [Structure dépôt complète](3-bests_practices/parcours-C-collaborer-echelle/repository_structure_complete/project_arborescence.md) | Organisation modulaire avancée. |
| &nbsp;&nbsp;&nbsp;• [Workflows Git Avancés](3-bests_practices/parcours-C-collaborer-echelle/advanced_git_workflows.md) | Branching & collaboration avancée. |

---

### 4. Test & Validation

| **Sujet** | **Description** |
|-----------|-----------------|
| [Test & Validation](4-test_validation/test_valid.md) | Importance des tests dans le développement logiciel. |
| [Tests Unitaires](4-test_validation/test_unitaire.md) | Mise en place et exécution des tests unitaires. |
| [Tests d'Intégration](4-test_validation/test_integration.md) | Stratégies de test pour l'intégration des composants. |
| [Tests Fonctionnels](4-test_validation/test_fonctionnels.md) | Validation des fonctionnalités via des tests fonctionnels. |

---

### 5. Compétences Scientifiques et Techniques

| **Sujet** | **Description** |
|-----------|-----------------|
| **Calcul Scientifique & Méthodes Numériques** | Techniques pour la résolution d'équations et la modélisation numérique. |
| &nbsp;&nbsp;&nbsp;• [Résolution d'un système d'équations différentielles ordinaires](5-scientific_technical_skills/ODE_resolution.md) <br/> &nbsp;&nbsp;&nbsp;• [Introduction aux algorithmes de résolution des systèmes d'équations différentielles ordinaires](5-scientific_technical_skills/ODE_algorithm.md)  | Algorithmes et Méthodes pour résoudre les équations différentielles ordinaires. |
| &nbsp;&nbsp;&nbsp;• [Bilan de Population (PBE)](5-scientific_technical_skills/PBE_resolurion.md) | Approches (méthode des moments, discrétisation, etc.) pour résoudre des bilans de population. |
| &nbsp;&nbsp;&nbsp;• [Résolution d'un système d'équations algébro-différentielles](5-scientific_technical_skills/DAE_resolution.md) | Techniques de résolution pour les systèmes DAE. |
| &nbsp;&nbsp;&nbsp;• [Résolution d'un système d'équations aux dérivées partielles](5-scientific_technical_skills/PDE_resolution.md) | Méthodes pour résoudre des EDP complexes. |


---

### 6. Computer Science

| **Sujet** | **Description** |
|-----------|-----------------|
| [Fundamentals -_En construction_](6-computer_science/1-fundamentals/) | Concepts fondamentaux en algorithmique et structures de données. |
| &nbsp;&nbsp;&nbsp;• [Algorithm Complexity](6-computer_science/1-fundamentals/algorithm_complexity.md) | Introduction à la complexité algorithmique. |
| &nbsp;&nbsp;&nbsp;• [Data Structures & Algorithms](6-computer_science/1-fundamentals/data_structure_and_algorithm.md) | Principes des structures de données et algorithmes. |
| [Programming Languages -_En construction_](6-computer_science/2-programming_languages/) | Présentation de plusieurs langages (R, Python, C/C++/C#, JavaScript, Matlab, Rust/Go). |
| [Database Management -_En construction_](6-computer_science/3-database_management/) | Concepts et pratiques avancées en SQL et gestion de données. |
| [Big Data -_En construction_](6-computer_science/4-big_data/) | Introduction aux concepts de Hadoop, Spark, MapReduce et au streaming. |
| [Machine Learning -_En construction_](6-computer_science/5-machine_learning/) | Bases et techniques du machine learning et du deep learning. |
| [DevOps -_En construction_](6-computer_science/6-devops/) | Principes de CI/CD, containerisation et infrastructure as code. |
| [Cybersecurity -_En construction_](6-computer_science/7-cybersecurity/) | Bonnes pratiques et stratégies de sécurité pour les applications web. |
| [Cloud Computing -_En construction_](6-computer_science/8-cloud_computing/) | Concepts d'API REST, services cloud et architectures microservices. |
| [Computer Science Overview -_En construction_](6-computer_science/computer_science.md) | Synthèse des notions clés en informatique. |

---

## 🗺️ Roadmap du Projet

### ✅ Phase 1 - Fondations (Terminée)
- [x] Section 1 : Git Basics - Complète avec exercices et quiz
- [x] Section 2 : Collaboration - Gestion de projet classique et Agile
- [x] Section 3 : Best Practices - 3 parcours progressifs (A, B, C)
- [x] Section 4 : Tests - Unitaires, intégration, fonctionnels
- [x] Section 5 : Calcul scientifique - ODE, DAE, PDE, PBE
- [x] Templates : README, .gitignore, requirements, PR checklist

### 🚧 Phase 2 - Machine Learning & Langages (Q1 2025)

| Fichier | Description | Priorité |
|---------|-------------|----------|
| `6-computer_science/5-machine_learning/introduction.md` | Concepts ML, types d'apprentissage | ⭐⭐⭐ |
| `6-computer_science/5-machine_learning/supervised_classification.md` | Scikit-learn, métriques, validation | ⭐⭐⭐ |
| `6-computer_science/5-machine_learning/supervised_regression.md` | Régression, feature engineering | ⭐⭐⭐ |
| `6-computer_science/5-machine_learning/unsupervised.md` | Clustering, PCA, réduction dimensionnalité | ⭐⭐ |
| `6-computer_science/5-machine_learning/time_series.md` | ARIMA, Prophet, forecasting | ⭐⭐ |
| `6-computer_science/5-machine_learning/deeplearning_framework.md` | PyTorch/TensorFlow basics | ⭐⭐ |
| `6-computer_science/2-programming_languages/advanced_python.md` | Decorators, generators, async/await | ⭐⭐⭐ |
| `6-computer_science/2-programming_languages/c_cpp_csharp.md` | Pointeurs, mémoire, interop Python | ⭐⭐ |
| `6-computer_science/2-programming_languages/matlab.md` | Bases MATLAB pour scientifiques | ⭐⭐ |

### 📅 Phase 3 - DevOps & Cloud (Q2 2025)

| Fichier | Description | Priorité |
|---------|-------------|----------|
| `6-computer_science/6-devops/ci_cd.md` | GitHub Actions, Jenkins, pipelines | ⭐⭐⭐ |
| `6-computer_science/6-devops/contener.md` | Docker, Kubernetes basics | ⭐⭐⭐ |
| `6-computer_science/6-devops/infrastructure_as_code.md` | Terraform, Ansible | ⭐⭐ |
| `6-computer_science/8-cloud_computing/intro_to_cloud_services.md` | AWS/Azure/GCP overview | ⭐⭐ |
| `6-computer_science/8-cloud_computing/microservices_scalable_architectures.md` | Architecture microservices | ⭐⭐ |

### 📅 Phase 4 - Big Data & Sécurité (Q3 2025)

| Fichier | Description | Priorité |
|---------|-------------|----------|
| `6-computer_science/4-big_data/hadoop_spark.md` | Écosystème Hadoop, Spark basics | ⭐⭐ |
| `6-computer_science/4-big_data/mapreduce_concept.md` | Paradigme MapReduce | ⭐⭐ |
| `6-computer_science/4-big_data/streaming.md` | Kafka, traitement temps réel | ⭐ |
| `6-computer_science/7-cybersecurity/security_principles.md` | Principes fondamentaux sécurité | ⭐⭐ |
| `6-computer_science/7-cybersecurity/webapp_security.md` | OWASP, sécurité web | ⭐⭐ |
| `6-computer_science/7-cybersecurity/best_practice.md` | Bonnes pratiques développeur | ⭐ |

### 📅 Phase 5 - Compléments (Q4 2025)

| Fichier | Description | Priorité |
|---------|-------------|----------|
| `6-computer_science/1-fundamentals/data_structure_and_algorithm.md` | Structures avancées, graphes | ⭐ |
| `6-computer_science/3-database_management/datalake_datawharehouse.md` | Data lakes vs warehouses | ⭐ |
| `6-computer_science/3-database_management/optimized_request.md` | Optimisation SQL avancée | ⭐ |
| `6-computer_science/2-programming_languages/R.md` | R pour statistiques | ⭐ |
| `6-computer_science/2-programming_languages/javascript.md` | JS pour visualisation | ⭐ |
| `6-computer_science/2-programming_languages/rust_go.md` | Langages systèmes modernes | ⭐ |

### 💡 Comment contribuer

Vous souhaitez aider à compléter ce guide ?

1. Consultez la roadmap ci-dessus et choisissez un fichier à compléter
2. Créez une branche `feature/nom-du-fichier`
3. Utilisez les templates existants comme référence ([templates/](templates/))
4. Soumettez une PR avec le [checklist PR](templates/PR_checklist.md)

Les contributions sont les bienvenues, même partielles ! Un fichier avec 50% du contenu est mieux qu'un fichier vide.

---

## Ressources complémentaires

- **📦 Templates Prêts à l'Emploi** : Consultez le dossier [templates/](templates/) pour des modèles réutilisables (README, .gitignore, requirements.txt, PR checklist)
- **LICENSE** : Consultez le fichier [LICENSE](LICENSE) pour les détails sur les droits d'utilisation.

---

Nous vous souhaitons une bonne lecture et une excellente progression dans l'apprentissage des pratiques du développement scientifique !
