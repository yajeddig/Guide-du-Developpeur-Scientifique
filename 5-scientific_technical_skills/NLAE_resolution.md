---
layout: default
---

⏱️ **Durée estimée :** 50 minutes (lecture + pratique)
📋 **Prérequis :** Algèbre non-linéaire, SciPy, méthodes numériques
🎯 **Objectifs :** 
- Comprendre les défis des systèmes non-linéaires
- Maîtriser fsolve et les méthodes de Newton
- Implémenter des solveurs robustes
- Gérer la convergence et les solutions multiples

**TL;DR :** Ce chapitre explique la résolution des systèmes d'équations algébriques non-linéaires avec Python.
# Résolution de Systèmes d'Équations Algébriques Non Linéaires en Python : Un guide pour les scientifiques

## Introduction

Imaginez que vous essayez de trouver l'intersection de deux courbes complexes. C'est un peu comme chercher le point de rencontre de deux chemins sinueux dans une forêt dense. Dans le monde mathématique, cela revient à résoudre un système d'équations algébriques non linéaires.

Contrairement aux systèmes linéaires, qui peuvent être résolus avec des méthodes directes comme l'élimination gaussienne, les systèmes non linéaires nécessitent souvent des approches numériques plus sophistiquées. Heureusement, Python, avec ses bibliothèques puissantes, offre plusieurs outils pour vous aider à naviguer dans cette forêt mathématique et à trouver les solutions recherchées.

## Méthodes Numériques Disponibles

Python propose plusieurs méthodes pour résoudre ces systèmes complexes :

1. **Méthode de Newton-Raphson:** Une méthode itérative qui affine progressivement une estimation initiale de la solution jusqu'à atteindre une précision suffisante. C'est comme suivre un sentier qui se rapproche de plus en plus du point d'intersection.
2. **`scipy.optimize.fsolve`:** Une fonction de la bibliothèque SciPy qui implémente une version robuste et optimisée de la méthode de Newton-Raphson. C'est comme avoir un guide expérimenté qui vous aide à trouver le chemin le plus rapide vers la solution.
3. **Méthode de Levenberg-Marquardt:** Une méthode hybride qui combine les avantages de la descente de gradient et de la méthode de Gauss-Newton. Elle est particulièrement utile lorsque les équations sont complexes ou que les estimations initiales sont éloignées de la solution.

## Exemples de Code

### 1. Utilisation de `fsolve` de SciPy : La voie rapide

```python
import numpy as np
from scipy.optimize import fsolve

# Définir le système d'équations
def equations(vars):
    x, y = vars
    eq1 = x**2 + y**2 - 4  # Première équation : x² + y² = 4 (un cercle)
    eq2 = x * y - 1        # Deuxième équation: x * y = 1 (une hyperbole)
    return [eq1, eq2]

# Valeurs initiales (une estimation de la solution)
initial_guess = [1, 1]

# Résoudre le système
solution = fsolve(equations, initial_guess)

print(f'Solution: x = {solution[0]}, y = {solution[1]}')
```

### 2. Utilisation de SymPy pour une Approche Symbolique : La voie élégante

SymPy permet de résoudre des équations de manière symbolique, c'est-à-dire en manipulant les expressions mathématiques directement plutôt que de les évaluer numériquement.

```python
import sympy as sp

# Définir les variables
x, y = sp.symbols('x y')

# Définir les équations
eq1 = sp.Eq(x**2 + y**2, 4)
eq2 = sp.Eq(x * y, 1)

# Résoudre le système
solution = sp.solve((eq1, eq2), (x, y))

print(f'Solutions: {solution}') 
```

### 3. Implémentation de la Méthode de Newton-Raphson : La voie personnalisée (avec gestion des erreurs)

```python
import numpy as np

# Définir le système d'équations
def f(vars):
    x, y = vars
    return np.array([x**2 + y**2 - 4, x * y - 1])

# Définir la Jacobienne
def jacobian(vars):
    x, y = vars
    return np.array([[2*x, 2*y], [y, x]])

# Méthode de Newton-Raphson avec gestion des erreurs
def newton_raphson(f, jacobian, initial_guess, tol=1e-10, max_iter=100):
    guess = np.array(initial_guess, dtype=float)
    for _ in range(max_iter):
        jacob = jacobian(guess)
        func = f(guess)
        try:
            delta = np.linalg.solve(jacob, -func)
        except np.linalg.LinAlgError:
            print("Singular matrix encountered. Adjusting guess slightly and continuing.")
            guess += np.random.uniform(-1e-4, 1e-4, size=guess.shape)
            continue
        guess += delta
        if np.linalg.norm(delta) < tol:
            return guess
    raise ValueError("Méthode de Newton-Raphson n'a pas convergé")

# Valeurs initiales
initial_guess = [1, 1]

# Résoudre le système
solution = newton_raphson(f, jacobian, initial_guess)

print(f'Solution: x = {solution[0]}, y = {solution[1]}')

```

### Explication de la gestion des erreurs

* **Matrices singulières :** Parfois, la méthode de Newton-Raphson peut rencontrer une situation où la matrice jacobienne est singulière (non inversible). Cela peut bloquer la progression de l'algorithme.
* **Gestion de l'erreur :** Le code inclut un bloc `try-except` pour détecter cette erreur. Si une matrice singulière est rencontrée, une petite perturbation aléatoire est ajoutée à l'estimation actuelle pour tenter de contourner le problème et permettre à l'algorithme de continuer.

## Conclusion

Résoudre des systèmes d'équations non linéaires est une tâche courante dans de nombreux domaines scientifiques. Python, grâce à ses bibliothèques puissantes comme SciPy et SymPy, offre des outils efficaces pour résoudre ces systèmes, que vous préfériez une approche numérique directe, une résolution symbolique élégante ou une implémentation personnalisée avec gestion des erreurs.

**Astuce :** N'oubliez pas que le choix de la méthode et des valeurs initiales peut influencer la convergence et la précision de la solution. Il est souvent utile d'expérimenter avec différentes approches et de visualiser les résultats pour s'assurer de leur validité.
