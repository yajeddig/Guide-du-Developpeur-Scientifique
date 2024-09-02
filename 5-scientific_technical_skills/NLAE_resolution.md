# Résolution de Systèmes d'Équations Algébriques Non Linéaires en Python

## Introduction

Les systèmes d'équations algébriques non linéaires apparaissent fréquemment dans divers domaines scientifiques et techniques. Contrairement aux systèmes linéaires, ils ne peuvent pas être résolus en utilisant des méthodes analytiques simples et nécessitent souvent des approches numériques. Python, avec ses bibliothèques riches et diversifiées, offre plusieurs outils puissants pour résoudre ces systèmes.

## Méthodes Numériques Disponibles

Parmi les nombreuses méthodes disponibles, les plus couramment utilisées pour résoudre des systèmes d'équations non linéaires en Python sont :

1. **Méthode de Newton-Raphson** : Une méthode itérative efficace pour les systèmes non linéaires.
2. **Scipy.optimize.fsolve** : Une fonction de la bibliothèque SciPy qui implémente une version améliorée de la méthode de Newton-Raphson.
3. **Méthode de Levenberg-Marquardt** : Une méthode qui combine les mérites de la descente de gradient et de la méthode de Gauss-Newton.

## Exemples de Code

### 1. Utilisation de `fsolve` de SciPy

La fonction `fsolve` de SciPy est souvent utilisée pour résoudre des systèmes d'équations non linéaires. Voici un exemple illustrant son utilisation :

```python
import numpy as np
from scipy.optimize import fsolve

# Définir le système d'équations
def equations(vars):
    x, y = vars
    eq1 = x**2 + y**2 - 4
    eq2 = x * y - 1
    return [eq1, eq2]

# Valeurs initiales
initial_guess = [1, 1]

# Résoudre le système
solution = fsolve(equations, initial_guess)

print(f'Solution: x = {solution[0]}, y = {solution[1]}')
```

### 2. Utilisation de SymPy pour une Approche Symbolique

SymPy permet de manipuler des expressions symboliques et de résoudre des systèmes d'équations algébriques symboliquement. Voici comment :

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

### 3. Utilisation de la Méthode de Newton-Raphson

La méthode de Newton-Raphson peut être implémentée manuellement pour résoudre des systèmes d'équations non linéaires. Voici un exemple intégrant la gestion des erreurs pour les matrices singulières :

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

### Explication

1. **Gestion des erreurs** : La méthode `try-except` est utilisée pour détecter et gérer les erreurs de matrice singulière. Lorsqu'une matrice singulière est rencontrée, une petite perturbation aléatoire est ajoutée au vecteur de variables pour tenter de sortir de la singularité.

2. **Perturbation des variables** : Si une matrice singulière est rencontrée, les variables sont ajustées légèrement avec une perturbation aléatoire très petite (`np.random.uniform(-1e-4, 1e-4, size=guess.shape)`).

Cette approche permet à la méthode de Newton-Raphson de continuer même lorsqu'une singularité est rencontrée, augmentant ainsi la robustesse de l'algorithme.

## Conclusion

Résoudre des systèmes d'équations non linéaires en Python peut être réalisé efficacement en utilisant des outils comme SciPy et SymPy. La méthode choisie dépend souvent du problème spécifique et des préférences personnelles pour les approches symboliques ou numériques. Grâce à la flexibilité et la puissance des bibliothèques Python, même les systèmes d'équations non linéaires complexes peuvent être résolus avec précision et efficacité.