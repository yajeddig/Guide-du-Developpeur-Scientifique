# Workflows Git Avancés

## Objectif
Optimiser la collaboration multi-équipe et la qualité logicielle.

## Principaux modèles
| Workflow | Usage recommandé | Avantages | Limites |
|----------|------------------|-----------|---------|
| GitHub Flow | SaaS, déploiements fréquents | Simple, rapide | Peu de protection sur main |
| Git Flow | Produits versionnés | Clair pour releases | Lourdeur tags / branches multiples |
| Trunk Based | Forte intégration continue | Feedback rapide | Discipline élevée requise |
| Release Train | Organisations à cadence fixe | Prévisibilité | Complexité planning |

## Stratégies de branches
- Nommer : `feature/`, `fix/`, `chore/`, `exp/`
- Protection : règles sur `main` (reviews, CI verte)
- Merge préférentiel : squash vs rebase merge selon historique souhaité

## Pull Requests efficaces
Checklist recommandée :
- [ ] Description claire (quoi/pourquoi)
- [ ] Portée limitée (<300 lignes diff)
- [ ] Tests ajoutés/MAJ
- [ ] Documentation impactée mise à jour
- [ ] Pas de secrets / credentials

## Automatisation essentielle
- CI: tests + lint + build
- Hooks pré-commit (format, sécurité basique)
- Templates : issues + PR
- Labels : `good-first-issue`, `breaking-change`, `needs-review`

## Indicateurs santé
| Indicateur | Cible |
|------------|-------|
| Lead time commit→prod | < 24h |
| Taux PR > 500 lignes | < 10% |
| Couverture tests | > 80% |
| MTTR (incident) | < 2h |

## Passage à l’échelle
- Mono-repo : standardisation + partage libs
- Multi-repos : frontières claires, versionning libs
- Documentation : ADR (Architecture Decision Records)

## Aller plus loin
Relier avec :
- Section Git (branching strategy)
- CI/CD avancé (à venir)
- Qualimétrie & métriques d’équipe
