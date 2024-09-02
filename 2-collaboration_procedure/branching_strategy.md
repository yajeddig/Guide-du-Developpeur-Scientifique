# Stratégie de Gestion des Branches dans Git/GitLab

## Introduction

Cette documentation est destinée à introduire les concepts et les pratiques de gestion des branches avec Git/GitLab. L'objectif est de faciliter la collaboration et d'améliorer le processus de développement au sein de notre projet.

## Comprendre les branches dans Git

### Définition d'une branche

Une branche dans Git permet le développement parallèle de différentes fonctionnalités ou corrections, sans interférer avec le travail des autres. C'est une copie indépendante du projet, qui peut être fusionnée avec d'autres branches.

### Utilité des branches

Les branches permettent le développement isolé de nouvelles fonctionnalités, la correction de bugs, et la préparation de versions du logiciel.

## Stratégie de branches proposée

### 1\. Structure des branches

- **Branch Main (Master):** Contient la version du projet en production, stable et déployée.
- **Branch Dev:** Utilisée pour l'intégration et les tests des nouvelles fonctionnalités avant leur déploiement.
- **Branches Feature:** Pour le développement de nouvelles fonctionnalités ou améliorations, créez une branche dédiée à partir de Dev.
- **HotFixes:** Branches pour des corrections urgentes, créées à partir de Main et destinées à être fusionnées rapidement.

![image.png](image/branch_strat.png)

### 2\. Workflow de développement

- **Développement de fonctionnalités:** Créez une branche Feature pour chaque nouvelle fonctionnalité ou amélioration. Fusionnez cette branche avec Dev après le développement pour intégration et tests.
- **Intégration et déploiement:** Après validation dans Dev, les modifications sont prêtes à être fusionnées dans Main pour déploiement.

### 3\. Gestion des merges et Pull Requests

- **Merge:** Fusionnez les branches après le développement et la validation. Utilisez cette méthode pour intégrer les fonctionnalités dans Dev, puis de Dev dans Main.
- **Pull Request:** Créez une demande de tirage pour solliciter l'examen et le feedback avant de fusionner. Cela assure la qualité du code et la cohérence dans le projet.

## Gestion des conflits

- **Prévention:** Maintenez vos branches à jour avec les dernières modifications de la branche parente pour minimiser les conflits.
- **Résolution:** En cas de conflit lors d'une fusion, résolvez ces conflits manuellement en choisissant les modifications à garder.

## Conclusion

Utiliser judicieusement les branches permet d'organiser efficacement le développement de votre projet. Respectez la stratégie établie pour faciliter la collaboration et assurer la stabilité de votre code.