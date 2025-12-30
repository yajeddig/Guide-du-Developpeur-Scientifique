# Introduction aux algorithmes de résolution des systèmes d'équations différentielles ordinaires

Considérons une équation différentielle ordinaire (EDO) de la forme :

$
\frac{dy}{dt} = f(t,y), \quad y(t_0)=y_0,
$

où $f$ est une fonction donnée, $t$ le temps et $y$ la solution recherchée. Les méthodes numériques consistent à approximer $y(t)$ sur un intervalle de temps en avançant par pas $h$. Chaque algorithme présente un schéma d’approximation différent et gère différemment l’estimation de l’erreur locale et la stabilité.

---

## 1. Méthodes de Runge-Kutta

Les méthodes de Runge-Kutta sont des schémas à un seul pas, appréciés pour leur simplicité et leur précision. L’idée générale est de combiner plusieurs évaluations de $f(t,y)$ sur un intervalle pour obtenir une approximation de $y(t+h)$.

### a. La Méthode Classique de Runge-Kutta d’Ordre 4 (RK4)

**Étapes :**

1. Calculer le premier coefficient (pente initiale) :  
   $
   k_1 = f(t_n, y_n)
   $
2. Calculer le second coefficient en estimant la pente au milieu du pas :  
   $
   k_2 = f\left(t_n + \frac{h}{2}, \, y_n + \frac{h}{2}\, k_1\right)
   $
3. Calculer le troisième coefficient, toujours au milieu du pas mais avec la pente $k_2$ :  
   $
   k_3 = f\left(t_n + \frac{h}{2}, \, y_n + \frac{h}{2}\, k_2\right)
   $
4. Calculer le quatrième coefficient en évaluant la pente à la fin du pas :  
   $
   k_4 = f\left(t_n + h, \, y_n + h\, k_3\right)
   $
5. Mettre à jour la solution :  
   $
   y_{n+1} = y_n + \frac{h}{6}\left(k_1 + 2k_2 + 2k_3 + k_4\right)
   $

Ce schéma, d’ordre 4, assure une bonne précision pour un pas $h$ donné.

**Implémentation en Python :**

```python
def rk4(f, t0, tf, y0, h):
    import numpy as np
    t_values = [t0]
    y_values = [y0]
    t = t0
    y = y0
    while t < tf:
        k1 = f(t, y)
        k2 = f(t + h/2, y + h/2 * k1)
        k3 = f(t + h/2, y + h/2 * k2)
        k4 = f(t + h, y + h * k3)
        y = y + h/6 * (k1 + 2*k2 + 2*k3 + k4)
        t = t + h
        t_values.append(t)
        y_values.append(y)
    return np.array(t_values), np.array(y_values)

# Exemple d'application : résoudre dy/dt = -2*y avec y(0)=1
import numpy as np
import matplotlib.pyplot as plt

def f(t, y):
    return -2 * y

t0, tf, y0, h = 0, 2, 1, 0.1
t_vals, y_vals = rk4(f, t0, tf, y0, h)

plt.plot(t_vals, y_vals, 'o-', label="Solution RK4")
plt.xlabel("t")
plt.ylabel("y")
plt.legend()
plt.show()
```

---

### b. La Méthode Dormand-Prince (Méthode Embedding RK)

Utilisée notamment dans le solveur *ode45*, cette méthode est une variante de Runge-Kutta qui intègre deux approximations de différents ordres pour estimer l’erreur locale.

**Principe général :**

1. On calcule une série de coefficients $k_1, k_2, \ldots, k_s$ en suivant un schéma donné par un tableau de Butcher (avec des coefficients $a_{ij}$ et $c_i$) :

   Pour $i = 1,\dots,s$,
   $
   k_i = f\Bigl(t_n + c_i h, \, y_n + h\sum_{j=1}^{i-1} a_{ij} k_j\Bigr).
   $
2. On combine ces coefficients pour obtenir deux approximations :
   - Une approximation d’ordre élevé (par exemple, 5ème) :
     $
     y_{n+1} = y_n + h \sum_{i=1}^{s} b_i\, k_i,
     $
   - Une approximation d’ordre inférieur (par exemple, 4ème) :
     $
     \hat{y}_{n+1} = y_n + h \sum_{i=1}^{s} \hat{b}_i\, k_i.
     $
3. L’erreur locale est alors estimée par :
   $
   \text{Erreur} = \left\|y_{n+1} - \hat{y}_{n+1}\right\|.
   $
4. En fonction de cette erreur, le pas $h$ est adapté pour le prochain intervalle d’intégration.

Ce double calcul permet d’ajuster automatiquement le pas afin de garantir une précision constante tout en optimisant le temps de calcul.

Le solveur `RK45` est basé sur la méthode Dormand-Prince, qui utilise deux approximations d’ordre différent pour contrôler l’erreur locale et adapter le pas.

**Utilisation avec SciPy :**

```python
from scipy.integrate import solve_ivp
import numpy as np
import matplotlib.pyplot as plt

def f(t, y):
    return -2 * y

t_span = (0, 2)
y0 = [1]
# On définit des points d'évaluation pour visualiser la solution
t_eval = np.linspace(0, 2, 21)

sol = solve_ivp(f, t_span, y0, method='RK45', t_eval=t_eval)

plt.plot(sol.t, sol.y[0], 'o-', label='Solution RK45 (Dormand-Prince)')
plt.xlabel('t')
plt.ylabel('y')
plt.legend()
plt.show()
```

---

## 2. Méthodes Multi-Pas : Adams-Bashforth-Moulton

Ces méthodes utilisent plusieurs points précédents pour prédire et corriger la solution, ce qui peut offrir une meilleure efficacité lorsque la solution est suffisamment régulière.

### a. Schéma Prédicteur-Correcteur

**Phase de prédiction (Adams-Bashforth, méthode explicite) :**

Pour un schéma à $k$ étapes, on prédit $y_{n+1}^{(0)}$ par :
$
y_{n+1}^{(0)} = y_n + h \sum_{j=0}^{k-1} \beta_j f(t_{n-j}, y_{n-j}),
$
où les coefficients $\beta_j$ sont déterminés pour obtenir l’ordre désiré.

**Phase de correction (Adams-Moulton, méthode implicite) :**

On affine ensuite cette prédiction en résolvant :
$
y_{n+1} = y_n + h \left[\alpha_{-1} f(t_{n+1}, y_{n+1}) + \sum_{j=0}^{k-1} \alpha_j f(t_{n-j}, y_{n-j})\right].
$
Ici, $\alpha_{-1}$ et $\alpha_j$ sont des coefficients choisis pour assurer la stabilité et l’ordre de la méthode.

La correction nécessite souvent une itération (souvent une seule itération suffit si la prédiction est bonne) pour résoudre l’équation implicite.

**Implémentation en Python :**

```python
def adams_bashforth_moulton(f, t0, tf, y0, h):
    import numpy as np
    t_values = [t0]
    y_values = [y0]
    
    # On initialise avec une étape RK4 pour obtenir y1
    t1 = t0 + h
    k1 = f(t0, y0)
    k2 = f(t0 + h/2, y0 + h/2 * k1)
    k3 = f(t0 + h/2, y0 + h/2 * k2)
    k4 = f(t1, y0 + h * k3)
    y1 = y0 + h/6 * (k1 + 2*k2 + 2*k3 + k4)
    
    t_values.append(t1)
    y_values.append(y1)
    
    t = t1
    # Boucle pour les étapes suivantes
    for i in range(1, int((tf-t0)/h)):
        # Prédiction par Adams-Bashforth
        y_pred = y_values[-1] + h * (1.5 * f(t, y_values[-1]) - 0.5 * f(t - h, y_values[-2]))
        t_next = t + h
        # Correction par Adams-Moulton
        y_corr = y_values[-1] + h * (0.5 * f(t_next, y_pred) + 0.5 * f(t, y_values[-1]))
        t = t_next
        t_values.append(t)
        y_values.append(y_corr)
        
    return np.array(t_values), np.array(y_values)

# Exemple d'application : résoudre dy/dt = -2*y avec y(0)=1
import numpy as np
import matplotlib.pyplot as plt

def f(t, y):
    return -2 * y

t0, tf, y0, h = 0, 2, 1, 0.1
t_vals, y_vals = adams_bashforth_moulton(f, t0, tf, y0, h)

plt.plot(t_vals, y_vals, 'o-', label="Solution Adams-Bashforth-Moulton")
plt.xlabel("t")
plt.ylabel("y")
plt.legend()
plt.show()
```

---

## 3. Méthodes Implicites pour Problèmes Raides : Backward Differentiation Formulas (BDF)

Pour les équations différentielles raides, les méthodes implicites offrent une meilleure stabilité. Les BDF sont des méthodes multi-pas implicites.

**Forme Générale d’un BDF d’ordre $k$ :**

L’équation à résoudre est :
$
\sum_{j=0}^{k} \alpha_j y_{n-j} = h\, f(t_n, y_n),
$
où les coefficients $\alpha_j$ sont préalablement déterminés pour garantir l’ordre du schéma et optimiser la stabilité.

**Procédure de Résolution :**

1. **Construction de l’équation implicite :**  
   On doit trouver $y_n$ tel que :
   $
   G(y_n) = \sum_{j=0}^{k} \alpha_j y_{n-j} - h\, f(t_n, y_n) = 0.
   $
2. **Utilisation de la méthode de Newton :**  
   Pour résoudre $G(y_n) = 0$, on linéarise $G$ autour d’une approximation $y_n^{(i)}$ :
   $
   G(y_n^{(i)}) + G'(y_n^{(i)})(y_n^{(i+1)} - y_n^{(i)}) = 0.
   $
   La mise à jour s’effectue donc par :
   $
   y_n^{(i+1)} = y_n^{(i)} - \frac{G(y_n^{(i)})}{G'(y_n^{(i)})}.
   $
   Le processus itératif continue jusqu’à convergence.

Ces méthodes demandent, à chaque pas, la résolution d’un système non linéaire, ce qui peut être coûteux, mais elles offrent une robustesse appréciable pour les problèmes raides.

**Implémentation en python**

```python
from scipy.integrate import solve_ivp
import numpy as np
import matplotlib.pyplot as plt

def f_stiff(t, y):
    return -1000 * y + 3000 - 2000 * np.exp(-t)

t_span = (0, 0.1)
y0 = [0]
t_eval = np.linspace(0, 0.1, 101)

sol = solve_ivp(f_stiff, t_span, y0, method='BDF', t_eval=t_eval)

plt.plot(sol.t, sol.y[0], 'o-', label='Solution BDF')
plt.xlabel('t')
plt.ylabel('y')
plt.legend()
plt.show()
```

---

## 4. Méthodes de Type Rosenbrock

Les méthodes Rosenbrock sont des schémas linéairement implicites qui simplifient la résolution d’équations raides en évitant la résolution complète d’un système non linéaire à chaque pas.

**Principe Général :**

1. **Calcul des pentes linéarisées :**

   Pour chaque étape $i$ (avec $s$ étapes au total), on calcule un vecteur $k_i$ en résolvant :
   $
   \left(I - \gamma h J\right) k_i = f\left(t_n + c_i h, \, y_n + \sum_{j=1}^{i-1} a_{ij} k_j\right) + h J \sum_{j=1}^{i-1} \gamma_{ij} k_j,
   $
   où :
   - $I$ est la matrice identité,
   - $J = \frac{\partial f}{\partial y}(t_n, y_n)$ est la jacobienne de $f$ évaluée en $(t_n, y_n)$,
   - $\gamma$, $a_{ij}$, $c_i$ et $\gamma_{ij}$ sont des coefficients déterminés par la méthode.

2. **Mise à jour de la solution :**
   $
   y_{n+1} = y_n + \sum_{i=1}^{s} m_i\, k_i,
   $
   où $m_i$ sont également des coefficients choisis pour assurer l’ordre de la méthode.

Ces schémas présentent l’avantage de ne nécessiter, à chaque étape, que la résolution d’un système linéaire (impliquant la matrice $I - \gamma h J$), ce qui réduit le coût comparé à une méthode pleinement implicite telle que le BDF.

```python
# Exemple utilisant scikits.odes
from scikits.odes.ode import Ode
import numpy as np
import matplotlib.pyplot as plt

def f_rosenbrock(t, y, ydot, p):
    # ODE : dy/dt = -2*y
    ydot[0] = -2 * y[0]

# Paramètres de tolérance
rtol = 1e-6
atol = 1e-6
y0 = [1.0]
t0 = 0.0
tf = 2.0

# Création de l'objet solveur en spécifiant la méthode "rosenbrock"
solver = Ode('rosenbrock', f_rosenbrock, rtol=rtol, atol=atol)

# Résolution de l'ODE
solution = solver.solve([t0, tf], y0)

# Extraction des résultats
t_vals = solution.values.t
y_vals = solution.values.y[:,0]

plt.plot(t_vals, y_vals, 'o-', label='Solution Rosenbrock')
plt.xlabel('t')
plt.ylabel('y')
plt.legend()
plt.show()
```

---

*Note :* Si scikits.odes n’est pas disponible, d’autres interfaces vers SUNDIALS (comme pySundials) peuvent être utilisées pour obtenir des méthodes de type Rosenbrock.

## Conclusion

Les algorithmes de résolution des équations différentielles reposent sur des schémas d’intégration numérique adaptés à la nature du problème :

- **Les méthodes de Runge-Kutta** (classique RK4 et variantes comme Dormand-Prince) fournissent des schémas explicites, avec des évaluations multiples de $f$ pour estimer $y_{n+1}$ et contrôler l’erreur.
- **Les méthodes multi-pas** d’Adams-Bashforth-Moulton exploitent plusieurs valeurs précédentes pour prédire et corriger la solution.
- **Les méthodes implicites** comme les BDF offrent une grande stabilité pour les problèmes raides, au prix de la résolution d’équations non linéaires (souvent par la méthode de Newton).
- **Les méthodes de type Rosenbrock** combinent stabilité et coût réduit en linéarisant le problème à chaque pas.

Chaque méthode présente ses avantages et inconvénients en termes de précision, de stabilité et de coût de calcul. La sélection de l’algorithme approprié dépend de la nature du problème différentiel et des exigences en matière de performance numérique.

---

Voici ci-dessous une présentation récapitulative sous forme de tableau, suivie d'explications succinctes pour chaque méthode. Ce tableau présente pour chaque algorithme de résolution d'EDO ses caractéristiques, limites, forces/faiblesses et le cas d'application idéal.

| **Méthode**                       | **Caractéristiques**                                                                                                                                                                       | **Limites**                                                                                                                                                        | **Forces / Faiblesses**                                                                                                                                  | **Cas d'application idéal**                                                             |
|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| **RK4 (Runge-Kutta d'ordre 4)**   | Méthode explicite à un seul pas ; utilise 4 évaluations de la fonction $f(t,y)$ par pas avec la formule : <br>$k_1=f(t_n,y_n)$, <br>$k_2=f(t_n+\tfrac{h}{2},y_n+\tfrac{h}{2}k_1)$, <br>$k_3=f(t_n+\tfrac{h}{2},y_n+\tfrac{h}{2}k_2)$, <br>$k_4=f(t_n+h,y_n+hk_3)$ ; <br>$y_{n+1}=y_n+\tfrac{h}{6}(k_1+2k_2+2k_3+k_4)$.                   | Pas de contrôle d'erreur intrinsèque ni pas adaptatif ; nécessite souvent des pas très petits pour assurer la stabilité dans des cas raides.                        | Très simple à implémenter et à comprendre ; offre une bonne précision pour des systèmes non raides.                                                         | Problèmes non raides, de faible dimension, applications pédagogiques et simulations simples.         |
| **RK45 (Dormand-Prince)**         | Méthode Runge-Kutta à pas adaptatif basée sur le schéma Dormand-Prince. Elle calcule deux approximations (d'ordres 4 et 5) pour estimer l'erreur locale et ajuster automatiquement $h$. | Moins adaptée aux systèmes raides et peut entraîner un surcoût computationnel en cas de systèmes complexes ou très sensibles aux variations rapides.             | Excellente précision et robustesse pour une large gamme d'EDO non raides grâce au contrôle d'erreur et à l'adaptation automatique du pas.                | ODE non raides pour lesquelles un contrôle d'erreur fin et un ajustement du pas sont souhaités.       |
| **Adams-Bashforth-Moulton**       | Méthode multi-pas de type prédicteur-correcteur. La phase de prédiction (Adams-Bashforth) estime $y_{n+1}^{(0)}$ à partir des valeurs précédentes, puis la phase de correction (Adams-Moulton) affine cette estimation via une formule implicite. <br>Exemple pour 2 étapes : <br>$y_{n+1}^{(0)}=y_n+h\Bigl(\tfrac{3}{2}f(t_n,y_n)-\tfrac{1}{2}f(t_{n-1},y_{n-1})\Bigr)$ puis <br>$y_{n+1}=y_n+h\Bigl(\tfrac{1}{2}f(t_{n+1},y_{n+1}^{(0)})+\tfrac{1}{2}f(t_n,y_n)\Bigr)$.        | Nécessite d'initialiser la méthode avec des valeurs obtenues par une méthode à un seul pas (bootstrapping). La stabilité et la précision dépendent de la régularité de la solution.             | Très efficace pour des solutions lisses ; permet de réduire le nombre d'évaluations de $f$ sur de longues intégrations, mais est sensible aux erreurs accumulées si la solution varie brusquement. | Problèmes avec solutions suffisamment régulières et lisses, pour de longues intégrations temporelles. |
| **BDF (Backward Differentiation Formulas)**  | Méthodes multi-pas implicites ; écrivent une relation linéaire entre plusieurs $y_{n-j}$ et $f(t_n,y_n)$ : <br>$\sum_{j=0}^{k}\alpha_j y_{n-j}=h\,f(t_n,y_n)$. <br>La solution $y_n$ est obtenue en résolvant une équation non linéaire (souvent par la méthode de Newton). | Impliquent la résolution à chaque pas d'un système non linéaire, ce qui est coûteux en calcul et rend l'implémentation plus complexe, surtout pour des systèmes de grande dimension.               | Très stables pour les problèmes raides et efficaces pour gérer des disparités d'échelles temporelles.                                                                          | Problèmes raides, où la stabilité est prioritaire, en particulier lorsque le système présente des composantes rapides et lentes.    |
| **Rosenbrock**                    | Méthodes linéairement implicites qui linéarisent l'EDO. Pour chaque étape, elles résolvent un système linéaire de la forme : <br>$\left(I-\gamma h J\right) k_i = f\Bigl(t_n+c_i h,\, y_n+\sum_{j=1}^{i-1} a_{ij}k_j\Bigr)+h J\sum_{j=1}^{i-1} \gamma_{ij}k_j$, <br>avec $J$ la jacobienne de $f$ ; mise à jour par <br>$y_{n+1}=y_n+\sum_{i=1}^{s} m_i k_i$. | Nécessitent le calcul ou l'approximation de la jacobienne $J$, ce qui peut être coûteux et compliqué pour certains systèmes.                                                     | Bon compromis pour traiter la raideur sans recourir à une résolution complète non linéaire à chaque pas. Moins coûteux que les BDF sur certains systèmes, mais requièrent la connaissance de $J$.           | Systèmes raides modérés à sévères, pour lesquels le calcul de la jacobienne est faisable et une méthode implicite linéarisée offre un gain en performance. |

---

### Explications supplémentaires :

- **Méthodes explicites (RK4, RK45) :**  
  Ces méthodes calculent la prochaine valeur $y_{n+1}$ uniquement à partir de l'information connue à $t_n$ et utilisent des évaluations multiples de $f$ pour améliorer la précision. Elles sont généralement simples à coder et très intuitives, mais manquent de robustesse face à la raideur.

- **Méthodes multi-pas (Adams-Bashforth-Moulton) :**  
  En utilisant plusieurs points précédents, ces méthodes optimisent le nombre d'évaluations de $f$ pour des intégrations longues sur des solutions lisses. Leur efficacité peut toutefois être compromise si la solution présente des discontinuités ou des variations brusques.

- **Méthodes implicites (BDF, Rosenbrock) :**  
  Adaptées aux problèmes raides, elles nécessitent la résolution d'équations (non linéaires pour les BDF, linéaires pour les Rosenbrock) à chaque pas. Cela les rend plus coûteuses en termes de calcul, mais elles garantissent une meilleure stabilité lorsque le système présente des échelles de temps très disparates.

