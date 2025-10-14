# Bonnes Pratiques de Documentation avec Git, GitHub et GitLab

**Durée :** 45 minutes  
**Prérequis :** [Git Basics](../../../1-git_basics/git_basics.md), [Gestion d'Environnement Python](../../python_environment/anaconda.md)  
**Objectifs :**

- Comprendre l'importance de la documentation dans les projets scientifiques
- Maîtriser la rédaction de README efficaces
- Savoir utiliser les wikis pour la documentation étendue
- Distinguer README et wiki selon le contexte d'usage

**TL;DR :** Guide complet pour documenter efficacement vos projets avec README et wikis, deux outils complémentaires essentiels pour la collaboration scientifique.

## 1. Introduction

Git est comme un journal de bord pour votre code, qui enregistre chaque modification apportée au fil du temps. GitHub et GitLab sont des plateformes en ligne qui hébergent ces journaux de bord (appelés "dépôts"), facilitant la collaboration et le partage de code entre plusieurs personnes. **GitHub** est particulièrement populaire pour les projets open-source, tandis que **GitLab** offre des fonctionnalités supplémentaires pour la gestion de projets et le déploiement de code.

Une bonne documentation est essentielle pour rendre votre projet compréhensible et accessible, que ce soit pour vous-même dans le futur, pour vos collaborateurs, ou pour d'autres scientifiques qui pourraient vouloir utiliser ou contribuer à votre travail. Deux éléments clés de cette documentation sont le fichier `README` et le wiki.

## 2. Le Fichier `README` : Votre carte de visite

Imaginez le `README` comme la porte d'entrée de votre projet. C'est le premier document que les gens voient lorsqu'ils découvrent votre dépôt, il doit donc être clair, concis et informatif. Il doit donner un aperçu rapide de votre projet et répondre aux questions essentielles :

- **Qu'est-ce que ce projet ?**
- **À quoi sert-il ?**
- **Comment l'installer et l'utiliser ?**

### Contenu Usuel du `README`

- **Titre du Projet :** Le nom de votre projet, clair et descriptif.
- **Description :** Un bref résumé de l'objectif du projet, de ses fonctionnalités principales et de son public cible.
- **Arborescence :** Idéalement l'arborescence du dossier afin de rapidement s'y retrouver [voir arborescence](repository_structure_complete/project_arborescence.md)
- **Installation :** Des instructions étape par étape pour installer les logiciels nécessaires et configurer l'environnement de développement.
- **Utilisation :** Des explications claires sur comment exécuter votre code, avec des exemples concrets si possible.
- **Contribution :** Si vous souhaitez que d'autres personnes contribuent à votre projet, expliquez comment ils peuvent le faire (par exemple, en soumettant des modifications via des "pull requests").
- **Crédits :** Mentionnez les auteurs et les contributeurs du projet.
- **Licence :** Indiquez la licence sous laquelle votre projet est distribué (par exemple, MIT, GPL, etc.).

### Exemple de `README` simplifié

```markdown
# Analyse des données de l'expérience XYZ

## Description
Ce projet vise à analyser les données collectées lors de l'expérience XYZ pour comprendre l'impact de [variable indépendante] sur [variable dépendante].

## Installation
1. Clonez ce dépôt : `git clone https://github.com/votre_nom/analyse-donnees-xyz.git`
2. Installez les dépendances : `pip install -r requirements.txt`

## Utilisation
Exécutez le script principal : `python analyse.py`

## Contribution
Les contributions sont les bienvenues ! Veuillez suivre les [directives de contribution](CONTRIBUTING.md).

## Crédits
* Auteur principal : [Votre Nom]
* Contributeurs : [Liste des contributeurs]

## Licence
Ce projet est sous licence MIT.
```

## 3. Le Wiki : Votre encyclopédie du projet

Si le `README` est la porte d'entrée, le wiki est la bibliothèque de votre projet. Il permet de documenter en détail tous les aspects de votre travail, de fournir des informations de référence, et d'expliquer les choix techniques et scientifiques.

### Contenu Usuel du Wiki

- **Page d'Accueil :** Une présentation générale du projet, avec des liens vers les sections importantes du wiki.
- **Guides Utilisateur :** Des instructions détaillées sur l'utilisation de votre code, avec des exemples, des captures d'écran, etc.
- **Documentation Technique :** Expliquez les outils et les bibliothèques que vous utilisez, la structure de votre code, et les choix de conception que vous avez faits.
- **Documentation Scientifique :** Décrivez le contexte scientifique de votre projet, les modèles théoriques utilisés, les hypothèses formulées, et les méthodes d'analyse employées.
- **FAQs :** Répondez aux questions fréquemment posées sur votre projet.
- **Roadmap :** Présentez les développements futurs prévus pour votre projet.
- **Journal des Modifications :** Gardez une trace des changements importants apportés au projet au fil du temps.

## 4. README vs Wiki : Quand les utiliser ?

- **README :** Pour une présentation concise et rapide de votre projet. C'est l'endroit idéal pour donner aux nouveaux utilisateurs les informations essentielles pour démarrer.
- **Wiki :** Pour une documentation détaillée et structurée. Utilisez le wiki pour expliquer les aspects plus complexes de votre projet, fournir des informations de référence, et documenter les choix techniques et scientifiques.

## 5. Conclusion

Une bonne documentation est un investissement précieux pour tout projet scientifique. Elle facilite la compréhension, la collaboration et la maintenance de votre code. En utilisant efficacement le `README` et le wiki, vous rendez votre projet plus accessible et plus utile pour vous-même et pour les autres.
