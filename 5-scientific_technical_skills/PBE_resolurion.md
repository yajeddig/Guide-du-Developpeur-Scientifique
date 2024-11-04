# Guide du Développeur : Bilans de Population (PBE)

## Introduction aux Équations de Bilan de Population (PBE)

Les équations de bilan de population (PBE - Population Balance Equations) constituent un outil mathématique puissant pour modéliser l'évolution de distributions de particules ou d'entités dans un système. Ces équations permettent de décrire la dynamique d'un système particulaire en tenant compte de divers phénomènes physiques tels que la nucléation, la croissance, l'agrégation et la rupture des particules.

## Forme Générale d'un PBE

La forme générale d'un PBE peut s'écrire sous la forme d'une équation aux dérivées partielles qui intègre tous ces phénomènes :

$$
\frac{\partial n(t, x)}{\partial t} + \nabla \cdot (\mathbf{V} n(t, x)) = G(x) \frac{\partial n(t, x)}{\partial x} + B_{\text{agg}}(t, x) - D_{\text{agg}}(t, x) + B_{\text{break}}(t, x) - D_{\text{break}}(t, x) + S_{\text{nuc}}(t, x) + I(t, x) - O(t, x)
$$

Où :

- $n(t, x)$ : Fonction de densité en nombre de particules ayant la propriété $x$ à l'instant $t$
- $\mathbf{V}$ : Vecteur de vitesse (pour les propriétés spatiales ou internes)
- $G(x)$ : Fonction de taux de croissance
- $B_{\text{agg}}(t, x)$ : Terme de naissance dû à l'agrégation
- $D_{\text{agg}}(t, x)$ : Terme de mort dû à l'agrégation
- $B_{\text{break}}(t, x)$ : Terme de naissance dû à la rupture
- $D_{\text{break}}(t, x)$ : Terme de mort dû à la rupture
- $S_{\text{nuc}}(t, x)$ : Terme source dû à la nucléation
- $I(t, x)$ : Terme d'entrée représentant l'apport de particules
- $O(t, x)$ : Terme de sortie représentant le départ de particules

## Phénomènes Physiques Modélisés par un bilan de population

1. **Nucléation** ou **Naissance** : Création de nouvelles particules dans le système, ou de personne qui naissent dans une population
2. **Croissance** ou **Vieillissement** : Augmentation de la taille ou de la masse des particules au cours du temps, ou augmentation de l'age de la population.
3. **Agrégation (Coalescence)** ou **Association** : Fusion de particules plus petites pour former des particules plus grosses, ou suivi de la formation de famille.
4. **Rupture (Fragmentation)** : Division de particules plus grosses en particules plus petites, ou séparation de famille.
5. **Transport** : Entrée et sortie de particules dans le système, entrée et sortie d'un pays.
<!-- Ajouter mort ? -->
Chacun de ces phénomènes est représenté dans l'équation générale par des termes spécifiques, permettant de décrire finement la dynamique du système particulaire.

## Résolution Numérique des PBE

La résolution analytique des PBE étant généralement complexe, des méthodes numériques sont employées. Parmi les principales approches on peut citer :

- **Méthode des Moments** : Simplification du PBE en un système d'équations différentielles ordinaires (EDO) décrivant l'évolution des moments de la distribution.
- **Méthodes Sectionnelles** : Discrétisation de l'espace des propriétés en sections, avec un bilan de population pour chaque section.
- **Méthodes de Volumes Finis et Éléments Finis** : Résolution numérique de l'équation aux dérivées partielles, en assurant la conservation des lois physiques.
- **Méthodes Stochastiques (Monte Carlo)** : Particulièrement adaptées aux problèmes de grande dimension.

Ces différentes méthodes visent à obtenir des solutions précises, évolutives et calculatoirement réalisables aux PBE, permettant ainsi aux ingénieurs et scientifiques de prédire le comportement des systèmes particulaires et d'optimiser les procédés.

Dans la suite de ce guide, nous allons présenter la mise en œuvre de deux de ces méthodes numériques : la méthode des moments et la méthode sectionnelle.

## Méthodes Numériques pour Résoudre les PBE

### Méthode des Moments

Dans un contexte plus général, les moments d'une distribution peuvent être définis pour toute distribution de probabilité, pas seulement pour des distributions représentant la taille des particules. Les moments permettent de caractériser la distribution d'une variable aléatoire $ X $ (qui peut représenter diverses propriétés, comme la taille, la masse, la position, etc.) autour d'un point de référence, généralement la moyenne.

### Définition générale des moments

1. **Moment d'ordre $ n $ centré à l'origine** :
   Le moment d'ordre $ n $ autour de l'origine pour une variable aléatoire continue $ X $ avec une densité de probabilité $ f(x) $ est défini par :
   $$
   M_n = \int_{-\infty}^{\infty} x^n \, f(x) \, dx
   $$
   où $ x $ est la variable aléatoire et $ f(x) $ est la fonction de densité de probabilité.

2. **Moment d'ordre $ n $ centré** (ou moment centré) :
   Les moments centrés sont calculés par rapport à la moyenne $ \mu $ de la distribution, ce qui permet de caractériser la dispersion des valeurs autour de la moyenne. Le moment centré d'ordre $ n $ est donné par :
   $$
   \mu_n' = \int_{-\infty}^{\infty} (x - \mu)^n \, f(x) \, dx
   $$
   où $ \mu $ est la moyenne de la distribution définie par $ \mu = \int_{-\infty}^{\infty} x \, f(x) \, dx $.

### Les premiers moments en général

1. **Moment d'ordre 0** :
   - Le moment d'ordre 0 est toujours égal à 1 pour une distribution de probabilité normale (intégrale de la densité sur tout l'espace).

2. **Moment d'ordre 1** (Moyenne ou espérance) :
   - Le moment d'ordre 1 est l'espérance $ E[X] $, qui représente la moyenne de la distribution.
   $$
   M_1 = \mu = \int_{-\infty}^{\infty} x \, f(x) \, dx
   $$

3. **Moment d'ordre 2 centré** (Variance) :
   - Le moment centré d'ordre 2 est la variance, qui mesure la dispersion des valeurs autour de la moyenne.
   $$
   \sigma^2 = \mu_2' = \int_{-\infty}^{\infty} (x - \mu)^2 \, f(x) \, dx
   $$

4. **Moment d'ordre 3 centré** (Asymétrie ou Skewness) :
   - Le moment centré d'ordre 3 est utilisé pour mesurer l'asymétrie de la distribution. Une valeur positive indique une distribution étalée à droite, et une valeur négative, à gauche.
   $$
   \text{Skewness} = \frac{\mu_3'}{\sigma^3} = \frac{1}{\sigma^3} \int_{-\infty}^{\infty} (x - \mu)^3 \, f(x) \, dx
   $$

5. **Moment d'ordre 4 centré** (Aplatissement ou Kurtosis) :
   - Le moment centré d'ordre 4 est utilisé pour mesurer l'aplatissement de la distribution. Un kurtosis supérieur à 3 indique une distribution plus pointue que la normale, et inférieur à 3, une distribution plus aplatie.
   $$
   \text{Kurtosis} = \frac{\mu_4'}{\sigma^4} = \frac{1}{\sigma^4} \int_{-\infty}^{\infty} (x - \mu)^4 \, f(x) \, dx
   $$

### Utilité des moments dans un cas général

- **Moyenne (Moment d'ordre 1)** : Indique le centre de gravité de la distribution.
- **Variance (Moment d'ordre 2)** : Indique l'étalement ou la dispersion des données.
- **Asymétrie (Moment d'ordre 3)** : Indique la symétrie ou l'asymétrie de la distribution.
- **Aplatissement (Moment d'ordre 4)** : Indique la concentration des données autour de la moyenne.

Les moments d'une distribution sont des outils essentiels en statistique et en probabilités, car ils permettent de décrire et d'analyser la forme et les caractéristiques fondamentales d'une distribution de manière systématique.

### Utilisation des moments sur une distribution de particule

La méthode des moments consiste à simplifier le PBE en un système d'équations différentielles ordinaires (EDO) décrivant l'évolution temporelle des moments de la distribution.

Les moments d'une distribution sont des quantités statistiques qui caractérisent la forme et la répartition de la distribution. Plus précisément, le moment d'ordre $ n $ d'une distribution est défini par l'intégrale :

$$
M_n = \int_0^{\infty} L^n \, n(L) \, dL
$$

où :

- $ M_n $ est le moment d'ordre $ n $,
- $ L $ représente la taille des particules (ou toute autre propriété caractéristique),
- $ n(L) $ est la fonction de densité de population qui indique le nombre de particules de taille $ L $.

### Signification des premiers moments

1. **Moment d'ordre 0 ($ M_0 $)** :
   - Représente le nombre total de particules dans le système. C'est un indicateur de la quantité de particules indépendamment de leur taille.
   - Mathématiquement :
   $$
   M_0 = \int_0^{\infty} n(L) \, dL
   $$

2. **Moment d'ordre 1 ($ M_1 $)** :
   - Représente la somme des longueurs de toutes les particules dans le système. Ce moment est proportionnel à une longueur totale.
   - Mathématiquement :
   $$
   M_1 = \int_0^{\infty} L \, n(L) \, dL
   $$

3. **Moment d'ordre 2 ($ M_2 $)** :
   - Correspond à la somme des carrés des tailles des particules et est proportionnel à une surface totale. Ce moment est lié à des propriétés telles que l'aire de section transversale des particules.
   - Mathématiquement :
   $$
   M_2 = \int_0^{\infty} L^2 \, n(L) \, dL
   $$

4. **Moment d'ordre 3 ($ M_3 $)** :
   - Est proportionnel au volume total des particules, donc représente une mesure du volume total ou de la masse (si la densité est uniforme) de toutes les particules dans le système.
   - Mathématiquement :
   $$
   M_3 = \int_0^{\infty} L^3 \, n(L) \, dL
   $$

### Utilité des moments

Les moments permettent de calculer des grandeurs moyennes telles que la taille moyenne des particules, l'écart-type, et d'autres caractéristiques de la distribution. Par exemple, le diamètre moyen en nombre ($ D_{n,0} $), le diamètre de Sauter ($ D_{3,2} $), et le diamètre moyen en masse ($ D_{4,3} $) peuvent être calculés à l'aide des moments de la distribution :

- **Diamètre moyen en nombre** ($ D_{n,0} $) :

$$
D_{n,0} = \frac{M_1}{M_0}
$$

- **Diamètre de Sauter** ($ D_{3,2} $) :

$$
D_{3,2} = \frac{M_3}{M_2}
$$

- **Diamètre moyen en masse** ($ D_{4,3} $) :

$$
D_{4,3} = \frac{M_4}{M_3}
$$

Ces moments et les grandeurs dérivées permettent de caractériser finement la distribution des particules dans un système et sont essentiels dans des applications telles que la modélisation de procédés de cristallisation, la pulvérisation, et d'autres procédés industriels.

En dérivant ces moments par rapport au temps, on obtient un système d'EDO couplées qui peut être résolu numériquement :

```python
def solve_moments(n0, t_span, parameters):
    """
    Résolution du PBE par la méthode des moments.
    
    Paramètres:
    n0 (numpy.ndarray) : Condition initiale pour les moments
    t_span (tuple) : Intervalle de temps à simuler (t0, tf)
    parameters (dict) : Paramètres du modèle (coefficients de croissance, agrégation, etc.)
    
    Retourne:
    scipy.integrate.solve_ivp.Solution : Objet contenant la solution temporelle des moments
    """
    def moment_odes(t, m):
        """
        Système d'EDO pour l'évolution des moments.
        
        Paramètres:
        t (float) : Temps courant
        m (numpy.ndarray) : Vecteur des moments
        
        Retourne:
        numpy.ndarray : Dérivées temporelles des moments
        """
        dmdt = np.zeros_like(m)
        
        # Calculer les termes sources/puits pour chaque moment
        # en fonction des paramètres du modèle
        
        return dmdt
    
    # Résolution du système d'EDO avec solve_ivp
    from scipy.integrate import solve_ivp
    solution = solve_ivp(moment_odes, t_span, n0)
    
    return solution
```

### Méthode Sectionnelle

La méthode sectionnelle consiste à discrétiser l'espace des propriétés en un nombre fini de sections, puis à écrire un bilan de population pour chacune de ces sections.

Soit $N$ le nombre de sections, on note $n_i(t)$ la densité en nombre de particules dans la section $i$ à l'instant $t$.

Le système d'EDO régissant l'évolution temporelle de ces densités s'écrit :

```python
def sectional_method(n0, t_span, x_grid, parameters):
    """
    Résolution du PBE par la méthode sectionnelle.
    
    Paramètres:
    n0 (numpy.ndarray) : Condition initiale pour les densités dans chaque section
    t_span (tuple) : Intervalle de temps à simuler (t0, tf)
    x_grid (numpy.ndarray) : Grille des propriétés discrétisées
    parameters (dict) : Paramètres du modèle (coefficients de croissance, agrégation, etc.)
    
    Retourne:
    scipy.integrate.solve_ivp.Solution : Objet contenant la solution temporelle des densités par section
    """
    def section_odes(t, n):
        """
        Système d'EDO pour l'évolution des densités par section.
        
        Paramètres:
        t (float) : Temps courant
        n (numpy.ndarray) : Vecteur des densités par section
        
        Retourne:
        numpy.ndarray : Dérivées temporelles des densités
        """
        dndt = np.zeros_like(n)
        
        # Calculer les flux entre les sections en fonction des paramètres du modèle
        
        return dndt
    
    # Résolution du système d'EDO avec solve_ivp
    from scipy.integrate import solve_ivp
    solution = solve_ivp(section_odes, t_span, n0)
    
    return solution
```

Ces deux méthodes numériques permettent de résoudre de manière efficace les équations de bilan de population, en fournissant la distribution temporelle des particules ou des entités modélisées.

Dans la prochaine section, nous aborderons les bonnes pratiques pour l'implémentation et l'analyse des résultats.
