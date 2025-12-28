# Bilans de Population (PBE)

## 1. Introduction

Les **équations de bilan de population (PBE)** modélisent l'évolution d'une distribution de particules ou entités dans un système en intégrant plusieurs phénomènes :

- **Naissance / Nucléation**
- **Décès / Attrition**
- **Croissance**
- **Agrégation / Agglomération**
- **Fragmentation / Rupture**

---

## 2. Formulation Générale

L'équation générale s'écrit :

$
\frac{\partial n(t,x)}{\partial t} + \nabla \cdot \Bigl( \mathbf{V}(t,x)\, n(t,x) \Bigr) = \underbrace{\,\partial_x \Bigl(G(x)n(t,x)\Bigr)}_{\text{Croissance}} + \underbrace{ {\text{naiss}}(t,x)}_{\text{Naissance}} - \underbrace{D(t,x)}_{\text{Décès}}+ \underbrace{B_{\text{agg}}(t,x) - D_{\text{agg}}(t,x)}_{\text{Agrégation}}   + \underbrace{B_{\text{frag}}(t,x) - D_{\text{frag}}(t,x)}_{\text{Fragmentation}}   + \underbrace{I(t,x) - O(t,x)}_{\text{Transport}}
$

### Nomenclature

| Symbole                     | Signification                                                           |
|-----------------------------|-------------------------------------------------------------------------|
| **$t$**                   | Temps                                                                   |
| **$x$**                   | Propriété caractéristique (ex. taille, masse, etc.)                     |
| **$n(t,x)$**              | Densité en nombre de particules possédant la propriété $x$ au temps $t$ |
| **$\mathbf{V}(t,x)$**     | Vecteur vitesse (pour transport spatial ou dans l'espace des propriétés)  |
| **$G(x)$**                | Taux de croissance (dépendant de $x$)                                   |
| **$S_{\text{naiss}}(t,x)$** | Terme de naissance ou nucléation                                        |
| **$D(t,x)$**              | Terme de décès (attrition)                                              |
| **$B_{\text{agg}}(t,x)$**  | Terme de création par agrégation                                        |
| **$D_{\text{agg}}(t,x)$**  | Terme de disparition par agrégation                                     |
| **$B_{\text{frag}}(t,x)$** | Terme de création par fragmentation                                     |
| **$D_{\text{frag}}(t,x)$** | Terme de disparition par fragmentation                                  |
| **$I(t,x)$**              | Terme d'entrée (apport de particules)                                   |
| **$O(t,x)$**              | Terme de sortie (retrait de particules)                                 |

> **Remarque importante :**  
> Le terme de **croissance** est exprimé sous forme dérivée par rapport à $x$ :  
> $\displaystyle G(x)\,\partial_x n(t,x)$.  
> Cela permet de tenir compte de la dépendance de la cinétique de croissance à la propriété $x$.

---

## 3. Modélisation des Phénomènes

Chaque terme représente un mécanisme :

- **Naissance / Nucléation**  
  $S_{\text{naiss}}(t,x)$ : Création de nouvelles particules (ex. formation de cristaux).

- **Décès / Attrition**  
  $D(t,x)$ : Perte de particules par dégradation ou autres mécanismes.

- **Croissance**  
  $\partial_x \Bigl(G(x)n(t,x)\Bigr)$ : Évolution de la propriété $x$ (ex. augmentation de la taille).

- **Agrégation / Agglomération**  
  $\displaystyle B_{\text{agg}}(t,x) - D_{\text{agg}}(t,x)$ : Fusion ou association de particules.

- **Fragmentation / Rupture**  
  $\displaystyle B_{\text{frag}}(t,x) - D_{\text{frag}}(t,x)$ : Division des particules.

- **Transport**  
  $I(t,x) - O(t,x)$ : Entrée ou sortie de particules dans le système.

Les équations de bilan de population (PBE) permettent de décrire l’évolution d’une distribution de particules (ou entités) en intégrant plusieurs mécanismes physiques. Pour quantifier ces interactions, on introduit souvent des fonctions dites **noyaux** (*kernels*).  
Un **noyau** est une fonction qui détermine le taux d’interaction entre particules en fonction de leurs propriétés (taille, masse, etc.). Il traduit la physique sous-jacente (collision, rupture, etc.) et intervient directement dans les termes sources ou puits de la PBE.

---

### Nucléation (ou Naissance)

- **Description :**  
  Processus de formation de nouvelles particules dans le système, souvent par condensation ou réaction chimique.
  
- **Modélisation :**  
  - **Terme source :** $S_{\text{naiss}}(t,x)$  
    Peut être défini de manière constante ou dépendre d’un surcroît de concentration/saturation.
  - **Exemple classique :**  
    Une nucléation homogène où le taux est constant pour une certaine plage de $x$ :
    $
    S_{\text{naiss}}(t,x) = J_0\, \delta(x - x_0)
    $
    avec $J_0$ le taux de nucléation et $\delta$ la fonction delta de Dirac, indiquant la formation de particules de taille $x_0$.

---

### Croissance

- **Description :**  
  Augmentation continue d’une propriété (ex. taille ou masse) d’une particule au cours du temps.
  
- **Modélisation :**  
  - **Taux de croissance :** $G(x)$  
    Il exprime la vitesse de changement de la propriété $x$ et apparaît dans le terme :
    $
    G(x)\, \partial_x n(t,x)
    $
    Ce terme traduit l’effet différentiel sur la distribution, en tenant compte de la dépendance de la croissance à la taille.

- **Exemples de modèles :**
  - **Linéaire :** $G(x) = k\, x$  
    (la croissance est proportionnelle à la taille)
  - **Puissance :** $G(x) = k\, x^\alpha$  
    où \(\alpha\) est un exposant déterminé expérimentalement.

---

### Agrégation / Agglomération

- **Description :**  
  Fusion ou coalescence de deux particules pour former une particule plus grosse.
  
- **Modélisation avec noyau d’agrégation :**  
  - **Noyau d’agrégation :** $K(x,y)$  
    Il définit le taux de collision (et potentiellement de fusion) entre une particule de taille $x$ et une autre de taille $y$.  
  - **Termes dans la PBE :**
    - **Naissance par agrégation :**
      $
      B_{\text{agg}}(t,x) = \frac{1}{2} \int_0^x K(x-y,y)\, n(t,x-y)\, n(t,y) \, dy
      $
    - **Mort par agrégation :**
      $
      D_{\text{agg}}(t,x) = n(t,x) \int_0^\infty K(x,y)\, n(t,y)\, dy
      $

- **Kernels classiques :**

  | **Modèle**               | **Expression**                   | **Commentaires**                                                   |
  |--------------------------|----------------------------------|--------------------------------------------------------------------|
  | **Noyau constant**       | $K(x,y)=K_0$                 | Hypothèse simple, taux de collision indépendant des tailles.       |
  | **Noyau somme**          | $K(x,y)=K_0 (x+y)$             | Tient compte de la contribution additive de chaque taille.         |
  | **Noyau produit**        | $K(x,y)=K_0\, x\, y$           | Utilisé dans certains systèmes où le taux augmente fortement avec la taille. |
  | **Kernel de Smoluchowski** | $K(x,y) \propto (x^{1/3}+y^{1/3})(x^{-1/3}+y^{-1/3})$ | Adapté aux collisions browniens.                                     |

---

### Fragmentation / Rupture

- **Description :**  
  Division d’une particule en plusieurs fragments.
  
- **Modélisation avec noyau de fragmentation :**  
  - **Taux de rupture :** $F(x)$  
    Exprime la fréquence de rupture d’une particule de taille $x$.
  - **Distribution des fragments :** $b(y,x)$  
    Fonction de probabilité indiquant la proportion de fragments de taille $y$ issus de la rupture d’une particule de taille $x$.  
  - **Termes dans la PBE :**
    - **Mort par fragmentation :**
      $
      D_{\text{frag}}(t,x) = F(x)\, n(t,x)
      $
    - **Naissance par fragmentation :**
      $
      B_{\text{frag}}(t,x) = \int_x^\infty F(z)\, b(x,z)\, n(t,z) \, dz
      $

- **Kernels classiques :**
  
  | **Modèle**                       | **Expression / Hypothèse**                                              | **Commentaires**                                                   |
  |----------------------------------|-------------------------------------------------------------------------|--------------------------------------------------------------------|
  | **Rupture binaire**              | $b(y,x) = \delta(y - x/2)$                                           | Chaque particule se casse en deux fragments de taille égale.       |
  | **Distribution uniforme**        | $b(y,x) = \frac{1}{x}$ pour $0<y<x$                              | Chaque fragment est également probable, sous condition de conservation. |
  | **Modèle de Weibull**            | $F(x) = k\, x^\beta$ et $b(y,x)$ selon une loi de Weibull         | Permet d’ajuster la sensibilité à la taille via l’exposant \(\beta\).  |

---

### Autres Phénomènes (Transport, Décès)

- **Transport :**  
  Les termes $I(t,x)$ et $O(t,x)$ modélisent l’entrée et la sortie de particules.  
  Ils peuvent être définis par des flux imposés ou par des conditions aux limites en fonction du système.

- **Décès / Attrition :**  
  Le terme $D(t,x)$ représente la disparition spontanée ou provoquée des particules (ex. par dissolution ou dégradation).  
  Il peut être modélisé par une loi exponentielle $D(t,x)=k_d\, n(t,x)$ ou par d’autres formes selon la nature du phénomène.

---

### Conclusion Pédagogique

- **Importance des noyaux :**  
  Chaque phénomène (agrégation, fragmentation, etc.) est décrit par un noyau spécifique qui quantifie l’interaction entre particules ou le taux de rupture.  
  La bonne sélection du noyau permet d’adapter le modèle aux conditions expérimentales et physiques du procédé.

- **Choix du modèle :**  
  - Pour **l’agrégation**, le choix entre noyau constant, somme ou produit (ou des modèles plus élaborés comme ceux dérivés de la dynamique brownienne) dépend du régime dominant (diffusion, turbulence, etc.).
  - Pour **la fragmentation**, la forme du noyau (et de la distribution des fragments) est essentielle pour reproduire correctement la distribution finale des tailles après rupture.

En combinant ces éléments, la PBE offre une approche flexible et puissante pour modéliser la dynamique des systèmes particulaires, tout en laissant le soin au modélisateur de choisir les noyaux adaptés aux mécanismes physiques qu’il souhaite représenter.

---

## 4. Méthodes de Résolution Numérique

### 4.1 Méthode des Moments

**Principe :**  
Calculer les moments de la distribution :

$
M_n(t) = \int_0^\infty x^n\, n(t,x)\, dx
$

Ce procédé réduit l'EDP à un système d'EDO pour $M_n(t)$.

**Variantes et leurs avantages/inconvénients :**

| Variante                               | Avantages                                            | Inconvénients                                    |
|----------------------------------------|------------------------------------------------------|--------------------------------------------------|
| **Simple (moments premiers)**          | Facile à implémenter, faible coût de calcul          | Perte d'information sur la forme complète        |
| **Quadratique / par quadrature**       | Meilleure reconstruction de la distribution          | Complexité accrue, coût numérique plus élevé     |
| **Fermeture par fonction d'approximation** | Flexibilité dans le choix du modèle (ex. log-normal)   | Dépend fortement de l'hypothèse sur la distribution |

**Avantages généraux :**

- Réduction dimensionnelle (système d'EDO de faible taille)
- Rapidité de calcul

**Inconvénients généraux :**

- Approximation de la distribution complète
- Difficulté à capturer des phénomènes complexes (non linéaires)

---

### 4.2 Méthode Sectionnelle / Discrétisation

**Principe :**  
Discrétiser l'espace de la propriété $x$ en $N$ sections et écrire un bilan pour chaque section.

Pour chaque section $i$ :

$
\frac{dn_i(t)}{dt} = F_i\big(n_1, n_2, \dots, n_N\big)
$

**Variantes et leurs avantages/inconvénients :**

| Variante                | Avantages                                            | Inconvénients                                  |
|-------------------------|------------------------------------------------------|------------------------------------------------|
| **Volumes Finis**       | Conservation stricte des quantités physiques         | Peut nécessiter un maillage fin pour précision  |
| **Éléments Finis**      | Bonne précision locale et flexibilité géométrique      | Coût en calcul potentiellement plus élevé       |
| **Sections fixes vs. adaptatives** | Simplicité (sections fixes) ou meilleure adaptation (adaptatives) | Choix de la grille peut influencer la solution  |

**Avantages généraux :**

- Représentation complète de la distribution
- Possibilité de suivre précisément l'évolution locale

**Inconvénients généraux :**

- Coût de calcul élevé (nombre important d'équations)
- Sensibilité au choix et à la finesse de la discrétisation

---

## 5. Implémentation Python

### 5.1 Exemple : Méthode des Moments

Cet exemple simplifié résout un système ODE pour deux moments (nombre total $M_0$ et somme des tailles $M_1$). La cinétique de croissance dépendrait, dans un modèle complet, de la fonction $G(x)$ intégrée dans le calcul des dérivées des moments.

```python
import numpy as np
from scipy.integrate import solve_ivp
import matplotlib.pyplot as plt

def moment_odes(t, M, params):
    """
    Évolution des moments.
    Variables :
      - M[0] : Moment d'ordre 0 (nombre total de particules)
      - M[1] : Moment d'ordre 1 (somme des tailles)
      
    Paramètres du modèle :
      - birth_rate : taux de naissance
      - k_decay   : coefficient de décès
      - k_growth  : coefficient moyen de croissance (dans un modèle complet, dépend de G(x))
    """
    birth_rate = params.get("birth_rate", 1.0)
    k_decay    = params.get("k_decay", 0.05)
    k_growth   = params.get("k_growth", 0.1)
    
    M0, M1 = M
    dM0_dt = birth_rate - k_decay * M0
    # Pour un modèle complet, la contribution de croissance serait calculée via une intégration pondérée de G(x)
    dM1_dt = k_growth * M0 - k_decay * M1  
    return [dM0_dt, dM1_dt]

# Paramètres et conditions initiales
params = {"birth_rate": 1.0, "k_decay": 0.05, "k_growth": 0.1}
M_initial = [0, 0]  # [M0, M1]
t_span = (0, 50)

sol = solve_ivp(lambda t, M: moment_odes(t, M, params), t_span, M_initial, dense_output=True)

# Affichage
t_eval = np.linspace(*t_span, 200)
M0, M1 = sol.sol(t_eval)
plt.plot(t_eval, M0, label='M0 (nombre total)')
plt.plot(t_eval, M1, label='M1 (somme des tailles)')
plt.xlabel("Temps")
plt.ylabel("Moments")
plt.legend()
plt.show()
```

---

### 5.2 Exemple : Méthode Sectionnelle

Dans cet exemple, l'espace des tailles est discrétisé sur une grille $x_{\text{grid}}$. Le terme de croissance transfère une quantité depuis une section vers la suivante.

```python
def sectional_odes(t, n, params, x_grid):
    """
    Évolution des densités n[i] dans chaque section associée à x_grid[i].
    Exemple simplifié avec transfert dû à la croissance :
      - La croissance est donnée par k * x, et affecte la section i et i+1.
    """
    N = len(n)
    dn_dt = np.zeros_like(n)
    k = params.get("k", 0.1)
    for i in range(N):
        # Croissance locale dans la section i
        growth = k * x_grid[i] * n[i]
        dn_dt[i] -= growth  # perte dans la section i
        if i < N - 1:
            dn_dt[i+1] += growth  # apport à la section suivante
    return dn_dt

# Discrétisation et conditions initiales
x_grid = np.linspace(1, 10, 50)
n0 = np.zeros_like(x_grid)
n0[0] = 100  # Concentration initiale dans la première section

sol_sec = solve_ivp(lambda t, n: sectional_odes(t, n, {"k": 0.1}, x_grid),
                    t_span, n0, dense_output=True)

# Affichage de quelques sections
plt.figure()
for i in [0, 10, 20, 30, 40]:
    plt.plot(sol_sec.t, sol_sec.y[i, :], label=f'Section {i}')
plt.xlabel("Temps")
plt.ylabel("Densité")
plt.legend()
plt.show()
```

---

## 6. Conclusion

- **PBE** : Permettent d'intégrer plusieurs phénomènes (naissance, décès, croissance, agrégation, fragmentation) dans un cadre mathématique général.
- **Méthode des moments**  
  - *Avantages* : Réduction dimensionnelle, rapidité.  
  - *Inconvénients* : Approximation de la distribution complète.
- **Méthode sectionnelle**  
  - *Avantages* : Représentation détaillée de la distribution.  
  - *Inconvénients* : Coût de calcul plus élevé et sensibilité à la discrétisation.

Chaque méthode présente des variantes permettant d'adapter la modélisation en fonction des hypothèses du système étudié et des ressources numériques disponibles.

## Quid des distributions non gaussiennes

- **Méthode des moments :**  
  - Habituellement, elle nécessite une fermeture (closure) qui repose sur une hypothèse sur la forme de la distribution (souvent gaussienne).  
  - **Pour des distributions non gaussiennes :**  
    - Des fermetures alternatives (ex. fermetures basées sur la quadrature, QMOM) permettent de mieux capturer des formes arbitraires.  
    - Ces variantes utilisent des points de quadrature et des poids ajustables pour reconstituer la distribution sans présumer sa forme.

- **Méthode sectionnelle :**  
  - Elle discrétise directement l'espace des propriétés, sans supposer de forme particulière de la distribution.  
  - **Avantage :**  
    - Elle s'adapte naturellement aux distributions non gaussiennes, à condition que la discrétisation soit suffisamment fine pour capturer les variations de forme.
