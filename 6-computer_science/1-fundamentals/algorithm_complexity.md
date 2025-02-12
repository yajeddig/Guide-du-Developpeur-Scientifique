# Introduction aux Algorithmes et à l'Analyse de Complexité

Un **algorithme** est une suite finie d'instructions précises permettant de résoudre un problème ou d’accomplir une tâche. Pour évaluer la performance d’un algorithme, on utilise la **notation BigO**. Celle-ci décrit le comportement asymptotique du temps de calcul (ou de l’utilisation mémoire) en fonction de la taille de l’entrée, souvent notée *n*.  

- **O(1)** signifie un temps constant, peu importe la taille des données.  
- **O(n)** indique que le temps d’exécution augmente de manière linéaire avec *n*.  
- **O(n²)** signifie une augmentation quadratique (par exemple, doubler le nombre d’éléments quadruple le temps d’exécution).  
- **O(n log n)** est typique des algorithmes performants pour le tri, car ils combinent une croissance linéaire et logarithmique.

Cette notation vous aide à choisir le bon algorithme selon la taille et la complexité de vos données.

---

# Les Algorithmes de Tri Performants

Les algorithmes de tri permettent de ranger des éléments dans un ordre défini (ex. : croissant). Nous présentons ici plusieurs méthodes, du plus simple aux plus performantes, en expliquant leurs principes et en donnant des exemples.

## 1. Bubble Sort (Tri à Bulles)

### Principe et Exemple

Le tri à bulles compare chaque paire d’éléments adjacents et les échange si l’élément de gauche est plus grand que celui de droite. On répète ces comparaisons jusqu’à ce que la liste soit triée.

**Exemple :**  
Pour trier `[5, 3, 8, 2]` :

- **Première passe :**  
  - Compare 5 et 3 → 5 > 3, échange → `[3, 5, 8, 2]`  
  - Compare 5 et 8 → pas d’échange → `[3, 5, 8, 2]`  
  - Compare 8 et 2 → 8 > 2, échange → `[3, 5, 2, 8]`
  
- **Deuxième passe :**  
  - Compare 3 et 5 → pas d’échange  
  - Compare 5 et 2 → 5 > 2, échange → `[3, 2, 5, 8]`  
  - Compare 5 et 8 → pas d’échange
  
- **Troisième passe :**  
  - Compare 3 et 2 → 3 > 2, échange → `[2, 3, 5, 8]`

### Complexité

Le tri à bulles a une complexité de **O(n²)**, ce qui le rend inefficace pour de grandes listes.

---

## 2. Insertion Sort (Tri par Insertion)

### Principe et Exemple

L’insertion sort construit progressivement une liste triée. Chaque nouvel élément est comparé aux éléments déjà triés et inséré à la bonne position.

**Exemple :**  
Pour trier `[5, 3, 8, 2]` :

1. On considère 5 comme trié.
2. On insère 3 avant 5, ce qui donne `[3, 5, 8, 2]`.
3. 8 se place après 5, la liste reste `[3, 5, 8, 2]`.
4. On insère 2 au début pour obtenir `[2, 3, 5, 8]`.

### Complexité

La complexité moyenne est **O(n²)**, mais cet algorithme est efficace sur des listes déjà presque triées.

---

## 3. Merge Sort (Tri par Fusion)

### Principe et Exemple

Le merge sort utilise la technique « diviser pour régner ». On divise la liste en deux sous-listes, on trie chacune d’elles, puis on fusionne les listes triées.

**Exemple Schématique :**

```
Liste initiale : [5, 3, 8, 2]
Diviser en : [5, 3] et [8, 2]
Trier chaque moitié : [3, 5] et [2, 8]
Fusionner : [2, 3, 5, 8]
```

### Complexité

La complexité de merge sort est **O(n log n)**, ce qui le rend très efficace pour trier de grandes listes.

---

## 4. Quick Sort (Tri Rapide)

### Principe et Exemple

Le quick sort choisit un **pivot** (un élément de la liste) et partitionne la liste en deux parties : une avec les éléments inférieurs au pivot et une avec ceux supérieurs. Le processus est ensuite appliqué récursivement aux sous-listes.

**Exemple :**  
Pour trier `[5, 3, 8, 2]` avec 5 comme pivot :  

- Partitionner en :  
  - Moins que 5 : `[3, 2]`  
  - Pivot : `[5]`  
  - Plus grand que 5 : `[8]`  
- Trier récursivement `[3, 2]` pour obtenir `[2, 3]`, puis fusionner pour avoir `[2, 3, 5, 8]`.

### Complexité

En moyenne, quick sort est **O(n log n)**. Dans le pire des cas (mauvais choix de pivot), la complexité peut devenir **O(n²)**, mais des optimisations (comme le choix aléatoire du pivot) permettent d’éviter ce scénario.

---

## 5. Heap Sort (Tri par Tas)

### Principe et Exemple

Heap sort convertit d’abord la liste en une structure de données appelée **tas** (heap). Un tas est un arbre binaire où chaque nœud est supérieur (ou inférieur) à ses enfants. On extrait ensuite successivement le maximum (ou le minimum) pour construire la liste triée.

**Exemple Simplifié :**

1. Construire un tas max à partir de la liste.
2. Extraire l’élément racine (le plus grand), le placer à la fin de la liste.
3. Réajuster le tas et répéter jusqu’à épuisement.

### Complexité

Le heapsort a une complexité garantie de **O(n log n)**, quel que soit l’ordre initial.

---

## 6. Shell Sort

### Principe et Exemple

Le shell sort est une amélioration du tri par insertion. Il commence par trier des éléments distants dans la liste, puis réduit progressivement l’écart entre les éléments comparés jusqu’à obtenir un tri par insertion classique.

**Principe :**

- Choisir un intervalle (gap) initial (par exemple, la moitié de la longueur de la liste).
- Effectuer des tris par insertion sur des sous-listes constituées d’éléments séparés par cet intervalle.
- Réduire l’intervalle et répéter le processus jusqu’à ce que le gap soit égal à 1.

### Complexité

La complexité exacte dépend du choix des intervalles, mais Shell sort est souvent plus rapide que l’insertion sort pour des listes de taille moyenne, avec une complexité variant généralement entre **O(n^(3/2))** et **O(n log² n)**.

---

# Algorithmes de Calcul Scientifique Performants

Au-delà du tri, de nombreux algorithmes sont utilisés en calcul scientifique pour résoudre des équations complexes et analyser des systèmes.

## 1. Résolution d'Équations Différentielles

### a. Méthode d'Euler et Euler Améliorée

**Euler Classique :**  
Pour résoudre l'équation différentielle \( \frac{dy}{dt} = f(t, y) \) avec la condition initiale \( y(t_0) = y_0 \), l’algorithme calcule :
\[
y(t_{n+1}) = y(t_n) + h \times f(t_n, y(t_n))
\]
où \( h \) est le pas de temps.

**Euler Améliorée (Point Milieu) :**  

1. Calculer une première estimation :  
   \[
   y^* = y(t_n) + h \times f(t_n, y(t_n))
   \]
2. Utiliser cette estimation pour obtenir une meilleure valeur :  
   \[
   y(t_{n+1}) = y(t_n) + \frac{h}{2} \times \left[f(t_n, y(t_n)) + f(t_{n+1}, y^*)\right]
   \]

### b. Méthode de Runge-Kutta d'Ordre 4 (RK4)

La méthode RK4 est très utilisée pour son équilibre entre précision et complexité.  
**Étapes de calcul :**

1. Calculer les coefficients :
   \[
   \begin{aligned}
   k_1 &= f(t_n, y(t_n)) \\
   k_2 &= f\left(t_n + \frac{h}{2}, y(t_n) + \frac{h}{2}k_1\right) \\
   k_3 &= f\left(t_n + \frac{h}{2}, y(t_n) + \frac{h}{2}k_2\right) \\
   k_4 &= f(t_n + h, y(t_n) + h \times k_3)
   \end{aligned}
   \]
2. Mettre à jour la solution :
   \[
   y(t_{n+1}) = y(t_n) + \frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)
   \]

Cette méthode offre une bonne précision même pour des pas de temps relativement grands.

---

## 2. Résolution de Systèmes Linéaires

### a. Décomposition LU

Pour résoudre le système \( Ax = b \), la décomposition LU factorise la matrice \( A \) en deux matrices triangulaires :  

- \( L \) (triangulaire inférieure)  
- \( U \) (triangulaire supérieure)

**Processus :**

1. Factoriser : \( A = LU \).
2. Résoudre \( Ly = b \) par substitution avant.
3. Résoudre \( Ux = y \) par substitution arrière.

**Avantage :**  
Cette méthode est particulièrement efficace lorsque le même système (ou des systèmes avec la même matrice \( A \)) doit être résolu plusieurs fois.

### b. Méthode du Gradient Conjugué

Utilisée pour résoudre des systèmes linéaires symétriques et définis positifs, souvent issus de la discrétisation d’équations aux dérivées partielles.  
**Principe :**

- Partir d’une solution initiale.
- Calculer le gradient de l’erreur.
- Mettre à jour la solution dans la direction conjuguée pour minimiser l’erreur.

**Avantage :**  
Elle est particulièrement adaptée aux matrices creuses et aux très grands systèmes.

---

## 3. Transformée de Fourier Rapide (FFT)

### Principe et Exemple

La FFT est une méthode optimisée pour calculer la transformée de Fourier, qui décompose un signal en ses composantes de fréquence.  
**Principe de la FFT :**

- Réduire le calcul direct de la transformée de Fourier (complexité **O(n²)**) à une complexité de **O(n log n)** en utilisant des symétries et des divisions récursives du signal.

**Application :**  
La FFT est utilisée en traitement du signal, compression d’images, et analyse de vibrations.

---

# Analyse de la Complexité – Quelques Exemples

- **O(1) (Complexité constante) :**  
  Accès direct à un élément dans un tableau (ex. : `tableau[3]`).

- **O(n) (Complexité linéaire) :**  
  Parcourir une liste de *n* éléments nécessite *n* opérations.

- **O(n²) (Complexité quadratique) :**  
  Un algorithme qui compare chaque élément à tous les autres (comme bubble sort) effectue environ \( n \times n \) opérations.

- **O(n log n) (Complexité quasi linéaire) :**  
  Utilisé par merge sort, quick sort et heap sort. Par exemple, pour une liste de 1000 éléments, le nombre d'opérations est proportionnel à \( 1000 \times \log_2 1000 \).

Ces notions vous aident à estimer la rapidité et l’efficacité d’un algorithme selon la taille des données.

---

# Conclusion

Les algorithmes sont les briques de base de la programmation et du calcul scientifique. Nous avons présenté plusieurs algorithmes de tri performants, dont le merge sort, quick sort, heap sort et shell sort, qui offrent des performances supérieures par rapport aux méthodes simples comme le bubble sort et l'insertion sort. En parallèle, des méthodes avancées telles que la méthode de Runge-Kutta pour la résolution d’équations différentielles, la décomposition LU et le gradient conjugué pour les systèmes linéaires, ainsi que la FFT pour l'analyse de signaux, démontrent comment l’optimisation des algorithmes peut transformer des problèmes complexes en solutions efficaces.

En comprenant à la fois le fonctionnement détaillé (avec des formules et des exemples) et la complexité (notation BigO) de ces algorithmes, vous serez mieux armé pour choisir et implémenter les solutions adaptées à vos défis de programmation et de calcul scientifique.
