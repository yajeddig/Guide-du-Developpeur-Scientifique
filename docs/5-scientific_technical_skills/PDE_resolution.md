---
layout: default
---

⏱️ **Durée estimée :** 90 minutes (lecture + implémentation)
📋 **Prérequis :** Calcul différentiel, NumPy, notions d'EDP
🎯 **Objectifs :** 
- Comprendre les méthodes de discrétisation
- Implémenter des schémas numériques (différences finies, éléments finis)
- Résoudre des EDP en 1D, 2D et 3D
- Analyser la stabilité et la convergence

**TL;DR :** Ce chapitre couvre la résolution numérique des équations aux dérivées partielles avec des méthodes avancées.
# Introduction aux Équations aux Dérivées Partielles (EDP)

Les EDP modélisent de nombreux phénomènes physiques tels que le transfert de chaleur, la propagation d’ondes ou les écoulements fluides. Par exemple, l’équation de la chaleur en 1D s’exprime par  

$$
\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}
$$

où $u(x,t)$ est la température, $\alpha$ le coefficient de diffusion, $x$ la variable spatiale et $t$ le temps.

Les mêmes concepts s’étendent naturellement aux problèmes en 2D et 3D. Par exemple, l’équation de la chaleur en 2D s’écrit  

$$
\frac{\partial u}{\partial t} = \alpha \left( \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} \right),
$$  

et en 3D, on ajoute la dérivée selon $z$.

Pour résoudre numériquement une EDP, il faut :

- **Discrétiser le domaine spatial et temporel.**  
- **Remplacer les dérivées par des approximations numériques** (différences finies, éléments finis, volumes finis, etc.).  
- **Choisir un schéma d’intégration** (explicite, implicite, ou mixte) et résoudre le problème algébriquement à chaque pas de temps.

---

## Méthodes Numériques pour les EDP

Nous présentons ici trois grandes familles de méthodes et leur extension aux problèmes multidimensionnels.

### Méthode des Différences Finies (FDM)

#### Schéma Explicite – FTCS (Forward Time Centered Space)

Pour l’équation de la chaleur en 1D,

$$
\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2},
$$  

on remplace la dérivée temporelle par une différence avancée et la dérivée spatiale seconde par une différence centrée :
  
- **Dérivée temporelle (forward) :**  

  $$
\frac{\partial u}{\partial t}(x_i,t^n) \approx \frac{u_i^{n+1} - u_i^n}{\Delta t}.
  ```
  
- **Dérivée spatiale seconde (centrée) :**  

  $$
  

  \frac{\partial^2 u}{\partial x^2}(x_i,t^n) \approx \frac{u_{i+1}^n - 2u_i^n + u_{i-1}^n}{(\Delta x)^2}.
  

  $$
  
Le schéma s’écrit alors :
$$math
u_i^{n+1} = u_i^n + \lambda \left( u_{i+1}^n - 2u_i^n + u_{i-1}^n \right),
```  

avec $\lambda = \alpha\,\Delta t/(\Delta x)^2$.  
**Condition de stabilité (CFL) :** En 1D, il faut généralement que $\lambda \leq \frac{1}{2}$.

##### Exemple en Python pour le cas 1D

```python
import numpy as np
import matplotlib.pyplot as plt

## Paramètres 1D
L = 1.0         ## Longueur du domaine
T = 0.1         ## Temps total de simulation
nx = 50         ## Nombre de points spatiaux
nt = 200        ## Nombre de pas de temps
alpha = 0.01    ## Coefficient de diffusion

dx = L / (nx - 1)
dt = T / nt
lam = alpha * dt / dx**2

if lam > 0.5:
    raise ValueError("Schéma instable (lam > 0.5).")

x = np.linspace(0, L, nx)
u = np.exp(-100 * (x - L/2)**2)  ## condition initiale

## Boucle temporelle FTCS
for n in range(nt):
    u_new = u.copy()
    for i in range(1, nx-1):
        u_new[i] = u[i] + lam * (u[i+1] - 2*u[i] + u[i-1])
    u = u_new

plt.plot(x, u, 'b-', label="u(x,T)")
plt.xlabel("x")
plt.ylabel("u")
plt.title("Solution de l'équation de la chaleur (FTCS, 1D)")
plt.legend()
plt.show()
```

#### Extension aux cas 2D et 3D

En 2D, pour l’équation

$$
\frac{\partial u}{\partial t} = \alpha \left( \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} \right),
$$  

la discrétisation implique deux directions spatiales. Par exemple, en FTCS 2D :

```python
import numpy as np
import matplotlib.pyplot as plt

## Paramètres 2D
Lx, Ly = 1.0, 1.0
T = 0.1
nx, ny = 50, 50
nt = 200
alpha = 0.01

dx = Lx / (nx - 1)
dy = Ly / (ny - 1)
dt = T / nt
lam_x = alpha * dt / dx**2
lam_y = alpha * dt / dy**2

if lam_x + lam_y > 0.5:
    raise ValueError("Schéma FTCS instable en 2D.")

x = np.linspace(0, Lx, nx)
y = np.linspace(0, Ly, ny)
X, Y = np.meshgrid(x, y)
u = np.exp(-100*((X-0.5)**2 + (Y-0.5)**2))  ## distribution initiale

for n in range(nt):
    u_new = u.copy()
    for i in range(1, ny-1):
        for j in range(1, nx-1):
            u_new[i, j] = u[i, j] \
                + lam_x * (u[i, j+1] - 2*u[i, j] + u[i, j-1]) \
                + lam_y * (u[i+1, j] - 2*u[i, j] + u[i-1, j])
    u = u_new

plt.imshow(u, extent=[0, Lx, 0, Ly], origin='lower')
plt.colorbar()
plt.title("Solution 2D de l'équation de la chaleur (FTCS)")
plt.show()
```

Pour le cas 3D, le principe est analogue en ajoutant la dérivée seconde selon $z$ et en itérant sur trois dimensions. La gestion du maillage et de la boucle temporelle se fait à l’aide de tableaux 3D et de trois boucles imbriquées.

---

### Méthode des Éléments Finis (FEM)

#### Principe

La FEM repose sur :

- **La discrétisation du domaine** en éléments (triangles en 2D, tétraèdres en 3D ou segments en 1D) à l’aide d’un maillage.
- **La formulation variationnelle** du problème, par exemple en recherchant $u$ tel que pour toute fonction test $v$,
  
$$
\int_\Omega k(x) \frac{du}{dx}\frac{dv}{dx}\,dx = \int_\Omega f(x)v(x)\,dx.
$$

- **L'assemblage d'un système linéaire** $KU = F$, où $K$ est la matrice de rigidité.

#### Définir la Géométrie et Générer le Maillage

La définition de la géométrie consiste à décrire le domaine de résolution (par exemple, un rectangle, un cercle ou un domaine complexe en 3D). Le maillage se réalise par :

- **Génération de points et d’éléments :** En 1D, une simple répartition linéaire (avec `np.linspace`) suffit. En 2D et 3D, on utilise des outils comme Gmsh, Salomé ou des fonctions intégrées dans des bibliothèques comme FEniCS ou SfePy.
- **Exportation et lecture du maillage :** Le maillage généré est ensuite importé dans le logiciel de résolution. Par exemple, dans FEniCS, on peut créer un maillage rectangulaire par :

  ```python
  from fenics import *
  mesh = UnitSquareMesh(50, 50)  ## maillage 2D d'une unité carrée
  ```
  
Ces outils permettent de contrôler la taille des éléments, d’affiner localement la résolution et de définir des régions avec des propriétés différentes.

#### Exemple de Pseudo-code avec SfePy

```python
from sfepy.discrete.fem import Mesh, FEDomain, Field
from sfepy.discrete import Problem
import numpy as np

## Charger ou générer le maillage
mesh = Mesh.from_file('mon_domaine.vtk')
domain = FEDomain('domain', mesh)

## Définir le champ de solution (ex: température en 2D)
field = Field.from_args('temperature', np.float64, 'scalar', domain, approx_order=1)

## Formulation variationnelle (équation faible)
## Exemple avec le terme de diffusion
from sfepy.terms import Term
term = Term.new('dw_laplace(temperature)', integral, region, temperature=field)

## Assemblage et résolution
from sfepy.discrete import Problem
problem = Problem('heat_equation', equations={'eq': term})
solution = problem.solve()
solution.save('solution.vtk')
```

---

### Méthode des Volumes Finis (FVM)

#### Principe des volumes finis

La FVM divise le domaine en volumes de contrôle et applique le principe de conservation sur chacun :

- **Intégration sur chaque volume :** Pour l’équation de la chaleur en 1D, l’intégration sur un volume $V_i$ donne
  
$$
\frac{d}{dt}\int_{V_i} u\,dx = \alpha \left( \text{flux entrant} - \text{flux sortant} \right).
$$

- **Approximation des flux :** Ceux-ci sont calculés à partir des valeurs moyennes dans les volumes adjacents.

#### Exemple en Python pour 1D

```python
import numpy as np
import matplotlib.pyplot as plt

L = 1.0         ## Longueur du domaine
T = 0.1         ## Temps de simulation
nx = 50         ## Nombre de volumes de contrôle
nt = 200        ## Pas de temps
alpha = 0.01

dx = L / nx    ## taille du volume de contrôle
dt = T / nt

x = np.linspace(dx/2, L-dx/2, nx)
u = np.exp(-100 * (x - L/2)**2)

for n in range(nt):
    u_new = u.copy()
    for i in range(1, nx-1):
        flux_in = alpha * (u[i-1] - u[i]) / dx
        flux_out = alpha * (u[i] - u[i+1]) / dx
        u_new[i] = u[i] + dt/dx * (flux_in - flux_out)
    ## Conditions aux limites (par exemple, Dirichlet)
    u_new[0] = u_new[-1] = 0
    u = u_new

plt.plot(x, u, 'g-', label="u(x,T)")
plt.xlabel("x")
plt.ylabel("u")
plt.title("Solution de l'équation de la chaleur (FVM, 1D)")
plt.legend()
plt.show()
```

---

## Conditions aux Limites : Types et Configuration

La définition précise des conditions aux limites (CL) est essentielle pour la résolution d’une EDP. Voici les principaux types :

- **Condition de Dirichlet :** La valeur de la solution est imposée sur le bord.  
  *Exemple concret en 1D :* Pour fixer $u(0,t)=0$ et $u(L,t)=0$, on affecte dans le code :
  
  ```python
  u_new[0] = 0
  u_new[-1] = 0
  ```

- **Condition de Neumann :** La dérivée normale (flux) est imposée sur le bord.  
  *Exemple :* Pour fixer $u_x(0,t)=q$, on peut utiliser une différence finie :
  
  ```python
  u_new[0] = u_new[1] - q*dx
  ```

- **Condition de Robin :** Combinaison linéaire de la valeur de la solution et de sa dérivée normale, souvent de la forme $a\,u + b\,u_x = c$.  
- **Condition périodique :** La solution est identique sur des bords opposés, utile pour les domaines cycliques.

Dans un schéma numérique, le choix et l’implémentation des CL doivent être cohérents avec la méthode de discrétisation (FDM, FEM ou FVM) et avec la physique du problème.

---
Ci-dessous se trouve une présentation en trois parties : d’abord les équations générales de transport réactif pour un système comportant NC constituants soumis à NR réactions, ensuite la spécialisation à un problème 1D impliquant trois espèces (A, B, C) avec la réaction A + B → C, et enfin une implémentation en Python.

---

## 4. Équations Générales de Transport Réactif

Pour un système comportant NC constituants transportés et NR réactions de cinétique, on peut écrire pour chaque espèce $i$ (avec $i=1,\dots,NC$) l’équation de transport réactif sous la forme générale suivante :

$$
\frac{\partial C_i}{\partial t} + \nabla \cdot \Bigl(\mathbf{u}\, C_i\Bigr) = \nabla \cdot \Bigl( D_i\, \nabla C_i \Bigr) + \sum_{j=1}^{NR} \mu_{i,j}\, R_j(C_1, C_2, \dots, C_{NC}),
$$

où :

- $C_i = C_i(\mathbf{x},t)$ est la concentration de l’espèce $i$ (fonction de la position $\mathbf{x}$ et du temps $t$).
- $\mathbf{u}$ est le champ de vitesse (advection).
- $D_i$ représente le coefficient de diffusion de l’espèce $i$ (qui peut être un scalaire ou un tenseur selon le problème).
- $R_j$ (pour $j=1,\dots,NR$) est le taux de réaction associé à la réaction $j$ (par exemple, suivant une loi de vitesse de type masse d’action).
- $\mu_{i,j}$ est le coefficient stœchiométrique algébrique de l’espèce $i$ dans la réaction $j$ (valeurs négatives pour une espèce consommée, positives pour une espèce produite).

Cette équation se veut indépendante du système de coordonnées ou de la dimension spatiale. Le terme d’advection $\nabla \cdot (\mathbf{u}\, C_i)$ exprime le transport par le flux, le terme de diffusion $\nabla \cdot ( D_i\, \nabla C_i )$ modélise la dispersion, et la somme sur $j$ traduit l’ensemble des contributions réactionnelles.

---

### Exmeple d'application à un système 1D avec Réaction A + B → C

Nous considérons maintenant un exemple en 1D où trois espèces (A, B et C) sont transportées dans un canal avec écoulement, diffusent et réagissent selon la réaction :

$$
\text{A} + \text{B} \longrightarrow \text{C}.
$$

Pour ce cas particulier :

- Le nombre de constituants est $NC=3$ (les espèces A, B et C).
- Il n’y a qu’une seule réaction ($NR=1$).
- Les coefficients stœchiométriques seront :
  - $\mu_{A,1} = -1$ (A est consommée),
  - $\mu_{B,1} = -1$ (B est consommée),
  - $\mu_{C,1} = +1$ (C est produite).

En 1D (la variable spatiale étant $x$), et en supposant un écoulement constant de vitesse $u$, les équations deviennent :

- Pour l’espèce A :

  $$
\frac{\partial C_A}{\partial t} + u\,\frac{\partial C_A}{\partial x} = D_A\,\frac{\partial^2 C_A}{\partial x^2} - k_r\, C_A\, C_B,
  ```

- Pour l’espèce B :

  $$


  \frac{\partial C_B}{\partial t} + u\,\frac{\partial C_B}{\partial x} = D_B\,\frac{\partial^2 C_B}{\partial x^2} - k_r\, C_A\, C_B,


  $$

- Pour l’espèce C :

  $$


  \frac{\partial C_C}{\partial t} + u\,\frac{\partial C_C}{\partial x} = D_C\,\frac{\partial^2 C_C}{\partial x^2} + k_r\, C_A\, C_B.


  $$

Ici, $k_r$ est la constante de réaction selon une loi de masse d’action, et $D_A$, $D_B$ et $D_C$ sont les coefficients de diffusion respectifs.

---

### Implémentation en Python

L’exemple suivant montre comment discrétiser et résoudre ces équations en 1D à l’aide d’un schéma en différences finies. L’advection est traitée à l’aide d’un schéma en différences arrière (upwind) et la diffusion par un schéma centré.
$$python
import numpy as np
import matplotlib.pyplot as plt

## Paramètres du domaine et de la simulation
L = 10.0         ## Longueur du canal
T = 5.0          ## Temps total de simulation
nx = 100         ## Nombre de points spatiaux
nt = 500         ## Nombre de pas de temps
dx = L / (nx - 1)
dt = T / nt

## Paramètres physiques
u_flow = 1.0     ## Vitesse de l'écoulement (advection)
D_A = 0.1        ## Coefficient de diffusion pour A
D_B = 0.1        ## Coefficient de diffusion pour B
D_C = 0.1        ## Coefficient de diffusion pour C
k_r = 0.05       ## Constante de réaction

## Conditions initiales : distribution de concentration
x = np.linspace(0, L, nx)
C_A = np.zeros(nx)
C_B = np.zeros(nx)
C_C = np.zeros(nx)

## Injection ponctuelle : A est injectée près de L/4, B près de 3L/4
C_A[int(nx/4)] = 1.0
C_B[int(3*nx/4)] = 1.0

## Boucle temporelle (schéma explicite en différences finies)
for n in range(nt):
    C_A_new = C_A.copy()
    C_B_new = C_B.copy()
    C_C_new = C_C.copy()
    
    ## Mise à jour interne (pour i=1 à nx-2)
    for i in range(1, nx-1):
        ## Calcul du terme d'advection (schéma upwind : différence arrière)
        adv_A = -u_flow * (C_A[i] - C_A[i-1]) / dx
        adv_B = -u_flow * (C_B[i] - C_B[i-1]) / dx
        adv_C = -u_flow * (C_C[i] - C_C[i-1]) / dx
        
        ## Calcul du terme de diffusion (schéma centré)
        diff_A = D_A * (C_A[i+1] - 2*C_A[i] + C_A[i-1]) / dx**2
        diff_B = D_B * (C_B[i+1] - 2*C_B[i] + C_B[i-1]) / dx**2
        diff_C = D_C * (C_C[i+1] - 2*C_C[i] + C_C[i-1]) / dx**2
        
        ## Terme réactionnel (loi de masse d'action)
        react = k_r * C_A[i] * C_B[i]
        
        ## Mise à jour des concentrations
        C_A_new[i] = C_A[i] + dt * (adv_A + diff_A - react)
        C_B_new[i] = C_B[i] + dt * (adv_B + diff_B - react)
        C_C_new[i] = C_C[i] + dt * (adv_C + diff_C + react)
    
    ## Conditions aux limites : par exemple, conditions de Dirichlet (concentration nulle aux extrémités)
    C_A_new[0] = C_A_new[-1] = 0
    C_B_new[0] = C_B_new[-1] = 0
    C_C_new[0] = C_C_new[-1] = 0
    
    ## Mise à jour pour le pas suivant
    C_A, C_B, C_C = C_A_new, C_B_new, C_C_new

## Visualisation des résultats
plt.figure(figsize=(8, 5))
plt.plot(x, C_A, label="C_A")
plt.plot(x, C_B, label="C_B")
plt.plot(x, C_C, label="C_C")
plt.xlabel("Position (x)")
plt.ylabel("Concentration")
plt.title("Transport et réaction A + B → C en hydraulique 1D")
plt.legend()
plt.show()
```

---

### Conclusion sur l'exemple de transport et réaction

1. **Équations générales :**  
   Les équations de transport réactif se généralisent pour $NC$ espèces et $NR$ réactions avec  

$$
\frac{\partial C_i}{\partial t} + \nabla \cdot (\mathbf{u}\,C_i) = \nabla \cdot (D_i\,\nabla C_i) + \sum_{j=1}^{NR} \mu_{i,j}\, R_j(C_1,\dots,C_{NC}).
$$

2. **Cas spécifique 1D (A, B, C) :**  
   Pour la réaction A + B → C, avec $\mu_{A,1}=\mu_{B,1}=-1$ et $\mu_{C,1}=+1$, les équations deviennent

$$
\begin{aligned}
\frac{\partial C_A}{\partial t} + u\,\frac{\partial C_A}{\partial x} &= D_A\,\frac{\partial^2 C_A}{\partial x^2} - k_r\,C_A\,C_B, \\
\frac{\partial C_B}{\partial t} + u\,\frac{\partial C_B}{\partial x} &= D_B\,\frac{\partial^2 C_B}{\partial x^2} - k_r\,C_A\,C_B, \\
\frac{\partial C_C}{\partial t} + u\,\frac{\partial C_C}{\partial x} &= D_C\,\frac{\partial^2 C_C}{\partial x^2} + k_r\,C_A\,C_B.
\end{aligned}
$$

3. **Implémentation en Python :**  
   Le code présenté utilise un schéma en différences finies (upwind pour l’advection et centré pour la diffusion) pour résoudre ces équations dans un domaine 1D.

Cette démarche permet d’aller d’une formulation mathématique très générale à une application numérique concrète adaptée à un problème d’hydraulique réactif.

## 5. Conclusion

Pour résoudre numériquement une EDP, il faut :

- Choisir une méthode de discrétisation adaptée (FDM, FEM ou FVM).
- Définir la géométrie du domaine et générer un maillage approprié (en 1D, 2D ou 3D).
- Mettre en place les conditions aux limites correspondant à la physique du problème (Dirichlet, Neumann, Robin, périodiques).
- Implémenter un schéma d’intégration temporelle (explicite, implicite ou mixte) pour obtenir la solution numérique.

L’exemple d’hydraulique présenté illustre comment intégrer le transport advection-diffusion et un modèle réactionnel dans un contexte 1D. Cette approche modulaire vous permettra de passer d’une formulation mathématique à une implémentation numérique robuste, en adaptant la méthode aux exigences de votre application spécifique.

## Equations de Barré de Saint Venant

### 1. Les Équations de Barré de Saint-Venant

Les équations de Saint-Venant (ou équations de l’écoulement en eaux peu profondes) sont utilisées pour modéliser la dynamique des écoulements libres dans des canaux, rivières ou bassins peu profonds. Sous l’hypothèse que l’épaisseur verticale est bien inférieure aux dimensions horizontales, ces équations résultent de l’intégration verticale des équations de Navier–Stokes. La formulation dite « de Barré de Saint-Venant » est une version qui, tout en restant fidèle aux principes de conservation, présente une écriture adaptée à certains types de modélisations hydrauliques.

#### Formulation Hydraulique Générale

Pour un domaine donné, les équations de Saint-Venant se décomposent en deux parties fondamentales :

1. **Conservation de la masse (équation de continuité) :**

$$
\frac{\partial h}{\partial t} + \nabla\cdot (h\,\mathbf{u}) = 0,
$$

   où  

- $h = h(\mathbf{x},t)$ est la hauteur d’eau (profondeur locale),  
- $\mathbf{u} = \mathbf{u}(\mathbf{x},t)$ est le vecteur vitesse moyen (horizontal),  
- $\nabla\cdot (h\,\mathbf{u})$ représente le flux volumique horizontal.

2. **Conservation de la quantité de mouvement :**

$$
\frac{\partial (h\,\mathbf{u})}{\partial t} + \nabla\cdot \Bigl(h\,\mathbf{u}\otimes\mathbf{u} + \frac{1}{2}\,g\,h^2\,\mathbf{I}\Bigr) = -g\,h\,\nabla z_b - \tau,
$$

   où  

- $g$ est l’accélération due à la pesanteur,  
- $z_b$ représente l’élévation du lit,  
- $\tau$ désigne les termes de frottement (résultant de la rugosité du lit ou d’autres pertes).

Cette formulation permet de décrire l’évolution de l’écoulement en fonction des variations locales de la profondeur $h$ et du champ de vitesse $\mathbf{u}$.

---

### 2. Intégration d’un Modèle de Transport Réactif

Pour modéliser le transport de constituants dissous (ou en suspension) dans l’écoulement et leur réaction chimique, on ajoute pour chaque espèce $i$ (avec $i=1,\dots,NC$) une équation de transport qui tient compte de l’advection, de la diffusion et de la réaction. Dans une formulation très généraliste (indépendante du système de coordonnées ou de la dimension spatiale), on peut écrire :

$$
\frac{\partial (h\,C_i)}{\partial t} + \nabla \cdot \Bigl(h\,\mathbf{u}\,C_i\Bigr) = \nabla \cdot \Bigl(h\,D_i\,\nabla C_i\Bigr) + h \sum_{j=1}^{NR} \mu_{i,j}\, R_j(C_1, C_2, \dots, C_{NC}),
$$

avec :

- $C_i = C_i(\mathbf{x},t)$ la concentration (moyenne en profondeur) de l’espèce $i$,
- $D_i$ le coefficient de diffusion associé,
- $NR$ le nombre de réactions considérées,
- $R_j$ la vitesse de la réaction $j$ (souvent déterminée par une loi de vitesse type masse d’action),
- $\mu_{i,j}$ le coefficient stœchiométrique algébrique (négatif pour la consommation, positif pour la production) de l’espèce $i$ dans la réaction $j$.

Le terme $h$ apparaît ici parce que l’on considère des quantités intégrées verticalement dans le fluide.

---

### 3. Spécialisation au Cas 1D avec la Réaction A + B → C

Pour illustrer, nous considérons un canal 1D (variable $x$) dans lequel le régime hydraulique est modélisé par les équations de Saint-Venant. Par souci de simplicité (et pour se concentrer sur le transport réactif), nous supposerons ici que la hauteur d’eau $h$ et la vitesse $u$ sont stationnaires et constantes (ce qui peut correspondre à un régime hydraulique établi).

#### Équations Hydrauliques Simplifiées

Dans ce cas, la conservation de la masse se réduit à :

$$
\frac{\partial h}{\partial t} + \frac{\partial (h\,u)}{\partial x} = 0.
$$

En régime stationnaire, $h$ et $u$ sont constants. La conservation du moment ne sera pas résolue ici puisque nous imposons directement $h$ et $u$.

#### Équations de Transport Réactif

Pour le transport des trois espèces A, B et C, et pour la réaction unique :

$$
\text{A} + \text{B} \longrightarrow \text{C},
$$

les coefficients stœchiométriques sont :

- $\mu_{A,1} = -1$,
- $\mu_{B,1} = -1$,
- $\mu_{C,1} = +1$.

Les équations de transport, en supposant $h$ constant, s’écrivent alors pour chaque espèce :

- Pour A :

  $$
\frac{\partial (h\,C_A)}{\partial t} + \frac{\partial (h\,u\,C_A)}{\partial x} = \frac{\partial}{\partial x}\Bigl(h\,D_A\,\frac{\partial C_A}{\partial x}\Bigr) - h\,k_r\,C_A\,C_B.
  ```

- Pour B :

  $$


  \frac{\partial (h\,C_B)}{\partial t} + \frac{\partial (h\,u\,C_B)}{\partial x} = \frac{\partial}{\partial x}\Bigl(h\,D_B\,\frac{\partial C_B}{\partial x}\Bigr) - h\,k_r\,C_A\,C_B.


  $$

- Pour C :

  $$


  \frac{\partial (h\,C_C)}{\partial t} + \frac{\partial (h\,u\,C_C)}{\partial x} = \frac{\partial}{\partial x}\Bigl(h\,D_C\,\frac{\partial C_C}{\partial x}\Bigr) + h\,k_r\,C_A\,C_B.


  $$

En divisant par $h$ (constante et non nulle), on obtient :

- Pour A :

  $$


  \frac{\partial C_A}{\partial t} + u\,\frac{\partial C_A}{\partial x} = D_A\,\frac{\partial^2 C_A}{\partial x^2} - k_r\,C_A\,C_B,


  $$

- Pour B :

  $$


  \frac{\partial C_B}{\partial t} + u\,\frac{\partial C_B}{\partial x} = D_B\,\frac{\partial^2 C_B}{\partial x^2} - k_r\,C_A\,C_B,


  $$

- Pour C :

  $$


  \frac{\partial C_C}{\partial t} + u\,\frac{\partial C_C}{\partial x} = D_C\,\frac{\partial^2 C_C}{\partial x^2} + k_r\,C_A\,C_B.


  $$

Ces équations reprennent la structure d’un problème de transport advection-diffusion réactif, mais dans le contexte d’un écoulement décrit par les équations de Saint-Venant en régime stationnaire.

---

### 4. Implémentation en Python (Cas 1D)

Dans l’exemple ci-dessous, nous supposons un canal 1D avec une hauteur d’eau $h$ et une vitesse $u$ constantes. Nous résolvons les équations de transport réactif pour les espèces A, B et C en utilisant un schéma explicite en différences finies : un schéma « upwind » pour l’advection et un schéma centré pour la diffusion.
$$python
import numpy as np
import matplotlib.pyplot as plt

# --- Paramètres du domaine hydraulique ---
L = 10.0         # Longueur du canal (m)
T = 5.0          # Durée totale de la simulation (s)
nx = 100         # Nombre de points spatiaux
nt = 500         # Nombre de pas de temps
dx = L / (nx - 1)
dt = T / nt

# --- Paramètres hydrauliques (régime stationnaire) ---
h = 1.0          # Hauteur d'eau constante (m)
u_flow = 1.0     # Vitesse de l'écoulement constante (m/s)

# --- Paramètres du transport réactif ---
D_A = 0.1        # Coefficient de diffusion pour A
D_B = 0.1        # Coefficient de diffusion pour B
D_C = 0.1        # Coefficient de diffusion pour C
k_r = 0.05       # Constante de réaction (A + B -> C)

# --- Conditions initiales pour les concentrations ---
x = np.linspace(0, L, nx)
C_A = np.zeros(nx)
C_B = np.zeros(nx)
C_C = np.zeros(nx)

# Injection ponctuelle : A est injectée près de x ~ L/4 et B près de x ~ 3L/4
C_A[int(nx/4)] = 1.0
C_B[int(3*nx/4)] = 1.0

# --- Boucle temporelle : schéma explicite en différences finies ---
for n in range(nt):
    C_A_new = C_A.copy()
    C_B_new = C_B.copy()
    C_C_new = C_C.copy()
    
    # Mise à jour pour les points internes (i = 1 à nx-2)
    for i in range(1, nx-1):
        # Advection (schéma upwind : différence arrière)
        adv_A = -u_flow * (C_A[i] - C_A[i-1]) / dx
        adv_B = -u_flow * (C_B[i] - C_B[i-1]) / dx
        adv_C = -u_flow * (C_C[i] - C_C[i-1]) / dx
        
        # Diffusion (schéma centré)
        diff_A = D_A * (C_A[i+1] - 2 * C_A[i] + C_A[i-1]) / dx**2
        diff_B = D_B * (C_B[i+1] - 2 * C_B[i] + C_B[i-1]) / dx**2
        diff_C = D_C * (C_C[i+1] - 2 * C_C[i] + C_C[i-1]) / dx**2
        
        # Terme réactionnel (loi de masse d'action)
        react = k_r * C_A[i] * C_B[i]
        
        # Mise à jour des concentrations
        C_A_new[i] = C_A[i] + dt * (adv_A + diff_A - react)
        C_B_new[i] = C_B[i] + dt * (adv_B + diff_B - react)
        C_C_new[i] = C_C[i] + dt * (adv_C + diff_C + react)
    
    # Conditions aux limites (Dirichlet : concentrations nulles aux extrémités)
    C_A_new[0] = C_A_new[-1] = 0
    C_B_new[0] = C_B_new[-1] = 0
    C_C_new[0] = C_C_new[-1] = 0
    
    # Passage au pas de temps suivant
    C_A, C_B, C_C = C_A_new, C_B_new, C_C_new

# --- Visualisation ---
plt.figure(figsize=(8, 5))
plt.plot(x, C_A, label="C_A")
plt.plot(x, C_B, label="C_B")
plt.plot(x, C_C, label="C_C")
plt.xlabel("Position (x)")
plt.ylabel("Concentration")
plt.title("Modèle réactif A + B → C dans un canal (modèle simplifié Saint-Venant)")
plt.legend()
plt.show()
```

---

### Conclusion sur la résolution des équations de Saint-Venant avec transport et réaction

1. **Présentation Générale :**  
   Les équations de Barré de Saint-Venant modélisent l’écoulement en eaux peu profondes en intégrant verticalement les équations de Navier–Stokes. Leur formulation repose sur la conservation de la masse et de la quantité de mouvement.

2. **Transport Réactif :**  
   En ajoutant une équation de transport pour chaque constituant, on peut décrire l’advection, la diffusion et la réaction des espèces. La formulation générale est :

$$
\frac{\partial (h\,C_i)}{\partial t} + \nabla \cdot (h\,\mathbf{u}\,C_i) = \nabla \cdot (h\,D_i\,\nabla C_i) + h \sum_{j=1}^{NR} \mu_{i,j}\,R_j(C_1,\dots,C_{NC}).
$$

3. **Cas 1D avec A, B, C :**  
   Pour la réaction A + B → C (avec $\mu_{A,1}=\mu_{B,1}=-1$ et $\mu_{C,1}=+1$), et en supposant un régime hydraulique stationnaire ( $h$ et $u$ constants), les équations se simplifient et prennent la forme usuelle d’un problème advection–diffusion–réaction.

4. **Implémentation Numérique :**  
   L’exemple en Python présenté montre comment discrétiser ces équations en 1D à l’aide d’un schéma en différences finies (upwind pour l’advection et centré pour la diffusion), couplé à un terme réactionnel de type masse d’action.

Cette démarche démontre comment partir d’une formulation mathématique générale des équations de Barré de Saint-Venant et y intégrer un modèle de transport réactif pour obtenir une application numérique concrète dans un canal hydraulique.

Nous pouvons, dans certains cas, considérer que le transport et la réaction chimiques n’influencent pas significativement la dynamique hydraulique. Cette approche découplée signifie que le champ de vitesse et la hauteur d’eau, obtenus à partir de la résolution des équations de Saint-Venant, sont supposés être indépendants des concentrations ou des réactions en jeu. Voici comment formaliser cette hypothèse, dans quelles circonstances elle est pertinente, comment la valider, et comment l’exploiter mathématiquement avant d’illustrer le tout sur le cas 1D avec la réaction A + B → C.

---

### 1. L’Hypothèse de Découplage

#### a. Description de l’Hypothèse

L’hypothèse consiste à considérer que le transport des constituants dissous et leurs réactions chimiques n’ont pas d’effet rétroactif sur le régime hydraulique. Autrement dit, les concentrations restent suffisamment faibles ou la réaction n’entraîne pas de variations notables de densité, viscosité ou autres propriétés physiques du fluide. Ainsi, le champ de vitesse $\mathbf{u}(\mathbf{x},t)$ et, si nécessaire, la hauteur d’eau $h(\mathbf{x},t)$ peuvent être calculés en résolvant les équations de Saint-Venant sans tenir compte des effets du transport réactif.

#### b. Conditions d’Utilisation et Validation

Cette approche découplée fait sens dans les cas suivants :

- **Concentrations faibles :** Par exemple, lorsqu’on étudie la dispersion de polluants en très faible quantité dans une rivière.  
- **Réactions non exothermiques ou peu énergétiques :** Si la réaction ne modifie pas significativement la densité ou la viscosité du fluide.  
- **Régimes établis :** Lorsque l’écoulement est en régime permanent ou quasi-permanent et que les variations induites par les réactions n’affectent pas la dynamique globale.

Pour valider cette hypothèse, on peut :

- **Comparer les ordres de grandeur :** Vérifier que les modifications de propriétés physiques dues aux variations de concentration restent négligeables par rapport aux valeurs caractéristiques du fluide.  
- **Réaliser des simulations comparatives :** Confronter un modèle couplé complet (si disponible) avec le modèle découplé, ou comparer aux données expérimentales, pour s’assurer que les écarts sont acceptables.  
- **Utiliser des critères de faible couplage :** Par exemple, si le nombre de Peclet ou un paramètre similaire évaluant l’influence des réactions sur l’écoulement reste faible.

---

### 2. Formulation Mathématique Générale du Découplage

#### a. Résolution Hydraulique

Les équations de Saint-Venant (ou de Barré de Saint-Venant) en dimension générale sont écrites sous la forme :

- **Conservation de la masse :**  
  
  $$
\frac{\partial h}{\partial t} + \nabla\cdot (h\,\mathbf{u}) = 0,
  ```

- **Conservation de la quantité de mouvement :**  
  
  $$
  
  
  \frac{\partial (h\,\mathbf{u})}{\partial t} + \nabla\cdot \Bigl(h\,\mathbf{u}\otimes\mathbf{u} + \frac{1}{2}\,g\,h^2\,\mathbf{I}\Bigr) = -g\,h\,\nabla z_b - \tau,
  
  
  $$

où $z_b$ est l'élévation du lit, $g$ la pesanteur et $\tau$ les pertes de charge ou frottements.

En résolvant ces équations (par exemple avec un schéma numérique adapté), on obtient le champ de vitesse $\mathbf{u}(\mathbf{x},t)$ (et $h(\mathbf{x},t)$ si nécessaire).

#### b. Application Découplée au Transport Réactif

Une fois le champ hydraulique obtenu, on considère ce dernier comme donné dans l’équation de transport des constituants. La formulation générale pour chaque espèce $i$ (pour $i=1,\dots,NC$) est alors :
$$math
\frac{\partial (h\,C_i)}{\partial t} + \nabla \cdot \Bigl(h\,\mathbf{u}\, C_i\Bigr) = \nabla \cdot \Bigl(h\,D_i\, \nabla C_i\Bigr) + h \sum_{j=1}^{NR} \mu_{i,j}\, R_j(C_1,\dots,C_{NC}),
```

où :

- $C_i(\mathbf{x},t)$ est la concentration de l’espèce $i$ (moyennée en profondeur),
- $D_i$ est son coefficient de diffusion,
- $R_j$ est la vitesse de la réaction $j$ et $\mu_{i,j}$ le coefficient stœchiométrique associé.

Si $h$ est constant ou si l’on souhaite travailler avec des concentrations « normalisées » par la hauteur, on peut diviser l’équation par $h$ (non nul) pour obtenir :

$$
\frac{\partial C_i}{\partial t} + \mathbf{u}\cdot\nabla C_i = D_i\, \Delta C_i + \sum_{j=1}^{NR} \mu_{i,j}\, R_j(C_1,\dots,C_{NC}).
$$

Cette équation de transport réactif est ainsi traitée de manière découplée en utilisant $\mathbf{u}$ et éventuellement $h$ fournis par la résolution hydraulique.

---

### 3. Application au Cas 1D avec la Réaction A + B → C

#### a. Hypothèse Spécifique

Pour un canal 1D, nous supposons que le régime hydraulique est établi et que la hauteur d’eau $h$ ainsi que la vitesse $u$ sont connus et constants dans le domaine. Cette hypothèse est raisonnable dans un canal de débit stable et lorsque les concentrations de A, B et C restent faibles, de sorte qu’elles n’influencent pas la dynamique d’écoulement.

#### b. Écriture des Équations

En appliquant le découplage, et en supposant $h$ constant (nous prendrons $h = 1$ pour simplifier la forme), les équations de transport réactif pour les trois espèces deviennent :

- **Pour l’espèce A :**
  
  $$
\frac{\partial C_A}{\partial t} + u\,\frac{\partial C_A}{\partial x} = D_A\,\frac{\partial^2 C_A}{\partial x^2} - k_r\, C_A\, C_B,
  ```

- **Pour l’espèce B :**
  
  $$

  
  \frac{\partial C_B}{\partial t} + u\,\frac{\partial C_B}{\partial x} = D_B\,\frac{\partial^2 C_B}{\partial x^2} - k_r\, C_A\, C_B,

  
  $$

- **Pour l’espèce C :**
  
  $$

  
  \frac{\partial C_C}{\partial t} + u\,\frac{\partial C_C}{\partial x} = D_C\,\frac{\partial^2 C_C}{\partial x^2} + k_r\, C_A\, C_B.

  
  $$

Ici, $k_r$ est la constante de réaction (loi de masse d’action), et $u$ est le champ de vitesse obtenu préalablement de la résolution hydraulique.

#### c. Implémentation en Python

Dans cet exemple, nous supposons que le champ hydraulique a été calculé séparément et que nous disposons d’un $u$ constant (par exemple, $u = 1.0$ m/s). Nous utilisons un schéma explicite en différences finies avec un traitement "upwind" pour l’advection.
$$python
import numpy as np
import matplotlib.pyplot as plt

# --- Paramètres du domaine ---
L = 10.0         # Longueur du canal (m)
T = 5.0          # Durée totale de la simulation (s)
nx = 100         # Nombre de points spatiaux
nt = 500         # Nombre de pas de temps
dx = L / (nx - 1)
dt = T / nt

# --- Paramètres hydrauliques (champ calculé séparément) ---
# Supposons ici un régime stationnaire avec h constant et u constant
h = 1.0          # Hauteur d'eau (m) constante
u_flow = 1.0     # Vitesse d'écoulement (m/s) récupérée de la résolution des Saint-Venant

# --- Paramètres du transport réactif ---
D_A = 0.1        # Coefficient de diffusion pour A
D_B = 0.1        # Coefficient de diffusion pour B
D_C = 0.1        # Coefficient de diffusion pour C
k_r = 0.05       # Constante de réaction (A + B -> C)

# --- Conditions initiales pour les concentrations ---
x = np.linspace(0, L, nx)
C_A = np.zeros(nx)
C_B = np.zeros(nx)
C_C = np.zeros(nx)

# Injection ponctuelle : A est injectée près de x ~ L/4, B près de x ~ 3L/4
C_A[int(nx/4)] = 1.0
C_B[int(3*nx/4)] = 1.0

# --- Boucle temporelle : schéma explicite en différences finies ---
for n in range(nt):
    C_A_new = C_A.copy()
    C_B_new = C_B.copy()
    C_C_new = C_C.copy()
    
    # Mise à jour des points internes (i = 1 à nx-2)
    for i in range(1, nx-1):
        # Advection (schéma upwind, différence arrière)
        adv_A = -u_flow * (C_A[i] - C_A[i-1]) / dx
        adv_B = -u_flow * (C_B[i] - C_B[i-1]) / dx
        adv_C = -u_flow * (C_C[i] - C_C[i-1]) / dx
        
        # Diffusion (schéma centré)
        diff_A = D_A * (C_A[i+1] - 2 * C_A[i] + C_A[i-1]) / dx**2
        diff_B = D_B * (C_B[i+1] - 2 * C_B[i] + C_B[i-1]) / dx**2
        diff_C = D_C * (C_C[i+1] - 2 * C_C[i] + C_C[i-1]) / dx**2
        
        # Terme réactionnel (loi de masse d'action)
        react = k_r * C_A[i] * C_B[i]
        
        # Mise à jour des concentrations
        C_A_new[i] = C_A[i] + dt * (adv_A + diff_A - react)
        C_B_new[i] = C_B[i] + dt * (adv_B + diff_B - react)
        C_C_new[i] = C_C[i] + dt * (adv_C + diff_C + react)
    
    # Conditions aux limites : par exemple, conditions de Dirichlet (concentration nulle aux extrémités)
    C_A_new[0] = C_A_new[-1] = 0
    C_B_new[0] = C_B_new[-1] = 0
    C_C_new[0] = C_C_new[-1] = 0
    
    # Passage au pas de temps suivant
    C_A, C_B, C_C = C_A_new, C_B_new, C_C_new

# --- Visualisation des résultats ---
plt.figure(figsize=(8, 5))
plt.plot(x, C_A, label="C_A")
plt.plot(x, C_B, label="C_B")
plt.plot(x, C_C, label="C_C")
plt.xlabel("Position (x)")
plt.ylabel("Concentration")
plt.title("Transport et réaction A + B → C avec champ hydraulique découplé")
plt.legend()
plt.show()
```

---

### Conclusion sur le découplage des équations de Saint-Venant et du transport/réaction

1. **Hypothèse de découplage :**  
   On suppose que le transport et la réaction ne modifient pas le champ hydraulique, ce qui est valable lorsque les concentrations restent faibles et que la réaction n’affecte pas les propriétés physiques du fluide. Cette hypothèse doit être validée par des comparaisons d’ordres de grandeur ou par des simulations comparatives.

2. **Procédure générale :**  
   - **Étape 1 :** Résoudre les équations de Saint-Venant pour obtenir $h(\mathbf{x},t)$ et $\mathbf{u}(\mathbf{x},t)$.  
   - **Étape 2 :** Utiliser ces champs, supposés indépendants, comme données dans l’équation de transport réactif :

  $$


  \frac{\partial (h\,C_i)}{\partial t} + \nabla \cdot (h\,\mathbf{u}\,C_i) = \nabla \cdot (h\,D_i\,\nabla C_i) + h \sum_{j=1}^{NR} \mu_{i,j}\,R_j.


  $$

- **Étape 3 :** Dans le cas où $h$ est constant, diviser par $h$ pour obtenir une équation plus simple.

3. **Application au cas 1D avec A, B et C :**  
   En supposant $u$ constant et issu d’une simulation hydraulique découplée, nous obtenons un système d’équations d’advection–diffusion–réaction pour A, B et C. L’implémentation en Python ci-dessus illustre cette approche en utilisant un schéma explicite en différences finies.

Cette démarche permet de traiter de manière modulaire le problème complexe en deux étapes distinctes, facilitant ainsi la résolution numérique et l’analyse de l’influence de chaque phénomène.
