# les systèmes d'équations algébro-différentielles

Les équations différentielles-algébriques (DAE) constituent un cadre mathématique essentiel pour la modélisation de systèmes complexes où la dynamique est soumise à des contraintes instantanées. En effet, contrairement aux équations différentielles ordinaires (ODE) qui décrivent uniquement l’évolution temporelle d’un système, les DAE intègrent simultanément des équations différentielles et des équations algébriques. Cette combinaison impose non seulement de résoudre la dynamique des variables d’état, mais également de satisfaire des contraintes qui doivent être vérifiées à tout instant.

On retrouve naturellement les DAE dans de nombreux domaines scientifiques et industriels. Par exemple, en génie électrique, elles permettent de modéliser les circuits intégrant des composants passifs et actifs, où les lois de Kirchhoff introduisent des contraintes algébriques entre tensions et courants. En mécanique, elles interviennent dans la modélisation des systèmes à contraintes, tels que les robots ou les mécanismes multi-corps, garantissant que les relations géométriques ou de contact soient respectées. Dans le domaine de la chimie, les DAE s’appliquent à la modélisation des réactions en équilibre ou quasi-stationnaire, où certaines concentrations évoluent rapidement tout en satisfaisant des conditions d’équilibre immédiat.

Ce qui rend les DAE particulièrement intéressantes et complexes, c’est la nécessité de concilier la dynamique évolutive avec la cohérence imposée par les contraintes algébriques. La présence de ces dernières conduit à des défis spécifiques, notamment en ce qui concerne le choix des conditions initiales qui doivent être compatibles tant au niveau des variables que de leurs dérivées, et la définition de l’indice du système qui mesure la difficulté à obtenir une formulation équivalente en ODE. Ainsi, la résolution des DAE requiert des techniques analytiques et numériques sur mesure, adaptées aux spécificités de chaque application.

## 1. Représentation mathématique

### Forme générale

Un système d'équations algébro‑différentielles (souvent noté DAE, pour Differential-Algebraic Equations) peut s'écrire sous la forme
$
F\bigl(t, x(t), \dot{x}(t)\bigr)=0,
$
où :

- $t$ est la variable indépendante (typiquement le temps),
- $x(t) \in \mathbb{R}^n$ est le vecteur des variables d'état,
- $\dot{x}(t)$ désigne la dérivée par rapport à $t$,
- $F: \mathbb{R} \times \mathbb{R}^n \times \mathbb{R}^n \to \mathbb{R}^m$ est une fonction suffisamment régulière.

### Forme semi‑explicite

Il est courant de distinguer les variables différentielles $x(t)$ des variables algébriques $y(t)$. Le système se présente alors sous la forme
$
\begin{cases}
\dot{x}(t) = f(t, x(t), y(t)), \\
0 = g(t, x(t), y(t)),
\end{cases}
$
avec $f: \mathbb{R} \times \mathbb{R}^{n_x} \times \mathbb{R}^{n_y} \to \mathbb{R}^{n_x}$ et $g: \mathbb{R} \times \mathbb{R}^{n_x} \times \mathbb{R}^{n_y} \to \mathbb{R}^{n_y}$. Ici, la première équation décrit la dynamique tandis que la seconde impose des contraintes algébriques instantanées.

### Forme matricielle

Une représentation matricielle souvent utilisée est
$
E(x,t) \,\dot{x}(t) = f(x,t),
$
dans laquelle la matrice $E(x,t)$ peut être singulière, reflétant ainsi la présence de contraintes algébriques. Lorsque $E$ est inversible, le système se réduit à un problème d'ODE classique.

---

## 2. Conditions initiales et cohérence

### 2.1 Conditions initiales consistentes pour les variables

Pour résoudre numériquement un système DAE, il est impératif de fournir des conditions initiales consistantes. Cela signifie que, à l'instant initial $t_0$, les valeurs de $x(t_0)$ (et de $y(t_0)$ dans le cas semi‑explicite) doivent satisfaire :
$
g(t_0, x(t_0), y(t_0)) = 0.
$
Ces conditions garantissent que les contraintes algébriques sont respectées dès le départ.

### 2.2 Initialisation des dérivées

Dans un DAE, les dérivées $\dot{x}(t_0)$ ne sont pas complètement libres ; elles doivent être compatibles avec la dynamique imposée par le système. Concrètement, pour un système exprimé sous la forme
$
F\bigl(t, x(t), \dot{x}(t)\bigr)=0,
$
les conditions initiales doivent également satisfaire
$
F\bigl(t_0, x(t_0), \dot{x}(t_0)\bigr)=0.
$
Dans la formulation semi‑explicite, la dérivée initiale est donnée par
$
\dot{x}(t_0)=f\bigl(t_0, x(t_0), y(t_0)\bigr),
$
ce qui implique que l'on ne choisit pas arbitrairement $\dot{x}(t_0)$ mais qu'elle est déterminée par la fonction $f$ une fois que $x(t_0)$ et $y(t_0)$ sont fixés, pour autant que ces valeurs soient consistantes. Pour des systèmes d'indice supérieur à 1, il peut être nécessaire de différencier les contraintes algébriques afin d'obtenir la cohérence des dérivées initiales.

---

## 3. Caractéristiques principales et implications pour la résolution numérique

### 3.1 Indice du système

L’indice d’un DAE mesure le nombre de différentiations requises pour transformer le système en un problème d’ODE standard :

- **Indice 1** : Les conditions initiales $x(t_0)$ et $y(t_0)$ permettent de déterminer directement $\dot{x}(t_0)$ via $f$, ce qui facilite la mise en œuvre numérique.
- **Indices supérieurs** : La cohérence de $\dot{x}(t_0)$ (et potentiellement de dérivées d'ordre supérieur) nécessite des manipulations supplémentaires, souvent par différentiation des contraintes $g$.

### 3.2 Méthodes numériques adaptées

Les méthodes de résolution des DAE, telles que les méthodes implicites de Runge‑Kutta ou les schémas de collocation, tiennent compte de cette structure mixte. Elles nécessitent en général :

- La spécification d’un ensemble de conditions initiales consistantes pour $x(t_0)$ (et $y(t_0)$ si applicable),
- La garantie que, si une initialisation explicite de $\dot{x}(t_0)$ est requise par le schéma, celle-ci est calculée de manière cohérente à partir de $F$ ou, dans le cas semi‑explicite, par $f$.

---

## Conclusion

Pour la résolution numérique d’un système d’équations algébro‑différentielles, il ne suffit pas d’initialiser les variables d’état $x(t_0)$ (et $y(t_0)$ dans le cas semi‑explicite) ; il est également essentiel que les dérivées initiales $\dot{x}(t_0)$ soient compatibles avec le système, c’est-à-dire que l’on ait $F\bigl(t_0, x(t_0), \dot{x}(t_0)\bigr)=0$. La mise en œuvre de cette cohérence conditionnelle, surtout dans le cas de systèmes d’indice supérieur à 1, est cruciale pour garantir l'existence, l'unicité et la stabilité numérique de la solution.