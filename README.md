# Guide du développeur scientifique

Bienvenue sur ce guide compilant les connaissances fondamentales et bonnes pratiques issues du domaine de du développement informatique (computer science) pour les scientifiques et ingénieurs non initiés. Ces pages concernent ceux qui sont particulièrement intéressé et/ou concerné par une activité digitale marqué dans leur activité tel que la modélisation, la simulation, l'analyse de donnée, la data science, l'automatisation des tâches, le déploiement de solution et d'autres sujets.

## Table des matières

- [Home](index.md)
  1. [Git Basics](1-git_basics/git_basics.md)
     - [Local and Remote Repositories](1-git_basics/local_remote_repositories.md)
     - [Commencer avec GitLab](1-git_basics/getting_started_with_gitlab.md)
     - [Branching Strategy](1-git_basics/branching_strategy.md)
  2. [Collaboration Procedure](2-collaboration_procedure/collab_procedure.md)
     - [Project Management](2-collaboration_procedure/project_management.md)
         - [Classic project Management](2-collaboration_procedure/project_management/A-Classic_Project_Management.md)
             - [Initial Project Setup](2-collaboration_procedure/project_management/A-Classic_Project_Management/i-initialiser_projet.md)
             - [Launching the Project](2-collaboration_procedure/project_management/A-Classic_Project_Management/ii-lancer-projet.md)
             - [Conception, Production, and Exploitation](2-collaboration_procedure/project_management/A-Classic_Project_Management/iii-conception_production_exploitation.md)
         - [Agile project Management](2-collaboration_procedure/project_management/B-Agile_Project_Management.md)
             - [Tuckman's Team Model](2-collaboration_procedure/project_management/B-Agile_Project_Management/i-equipe_modele_tuckman.md)
             - [User Needs](2-collaboration_procedure/project_management/B-Agile_Project_Management/ii-besoin_utilisateur.md)
             - [Agile Visual Tools](2-collaboration_procedure/project_management/B-Agile_Project_Management/iii-outils_visuels_agile.md)
             - [Conclusion](2-collaboration_procedure/project_management/B-Agile_Project_Management/iv-conclusion.md)
         - [Data Science Project Guide](2-collaboration_procedure/project_management/C-Data_Science_Project_Guide.md)
  3. Best Practices
     - [Code Writing](3-bests_practices/code_writing.md)
       - [Architecture](3-bests_practices/code_writing/architecture.md)
       - [Beautiful code](3-bests_practices/code_writing/beautiful_code_pep8.md)
       - [Programming style](3-bests_practices/code_writing/programming_style.md)
         - [Object-Oriented programming](3-bests_practices/code_writing/programming_style/object_oriented_programming.md)
         - Functional programming (en cours)
     - [IDE](3-bests_practices/IDE.md)
         - [Visual Studio Code](3-bests_practices/IDE/visual_studio_code.md)
         - [PyCharm](3-bests_practices/IDE/pycharm.md)
     - [Python Environment](3-bests_practices/python_environment.md)
         - [Anaconda](3-bests_practices/python_environment/anaconda.md)
         - [Miniconda](3-bests_practices/python_environment/miniconda.md)
         - [Mamba](3-bests_practices/python_environment/mamba.md)
         - [Venv](3-bests_practices/python_environment/venv.md)
     - [Structure de dossier](3-bests_practices/repository_structure/project_arborescence.md)
     - Documentation
       - [ReadMe ? Wiki ?](3-bests_practices/documentation/why_read_me_why_wiki.md)
       - [Documentation technique du code et Docstrings](3-bests_practices/documentation/technical_doc_code.md)
       - Documentation scientifique du projet - Analyse fonctionnelle
       - Documentation du cas d'application - Use case
  4. Test & Validation
     - [Les test et validations](4-test_validation/test_valid.md)
     - [Test unitaires](4-test_validation/test_unitaire.md)
     - [Test d'intégration](4-test_validation/test_integration.md)
     - [Test fonctionnel](4-test_validation/test_fonctionnels.md)
  5. Compétence scientifiques et techniques
     - Calcul scientifique
       - [Résolution d'un système d'équations algébriques non linéaire](5-scientific_technical_skills/NLAE_resolution.md)
       - [Résolution d'un système d'équations différentielles ordinaire](5-scientific_technical_skills/ODE_resolution.md)
       - Résolution d'un bilan de population
         - Méthode des moments
         - Méthode par discrétisation
       - Résolution d'un système d'équations algébro-différentielles
       - Résolution d'un système d'équations aux dérivées partielles
     - Python et OIAnalytics
       - Utiliser l'API d'OIAnalytics
