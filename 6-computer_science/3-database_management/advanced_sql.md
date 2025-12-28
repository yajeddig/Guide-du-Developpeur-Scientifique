# SQL Avancé

---

## 1. **Sous-requêtes (Subqueries)**

Les sous-requêtes sont des requêtes imbriquées dans une autre requête SQL. Elles permettent d’extraire des données de manière dynamique et peuvent être placées dans différentes parties d'une requête, comme dans `SELECT`, `FROM` ou `WHERE`.

### Types de Sous-Requêtes et Exemples

1. **Sous-requête dans le SELECT**
   Utilisée pour calculer des valeurs dynamiques ou des agrégats dans chaque ligne de la table principale.

   ```sql
   SELECT nom,
          (SELECT AVG(age) FROM Utilisateurs) AS age_moyen
   FROM Utilisateurs;
   ```

   **Explication** : Cette requête ajoute une colonne `age_moyen` qui affiche la moyenne d’âge pour chaque utilisateur, bien que la moyenne reste constante.

2. **Sous-requête dans le WHERE**
   Utilisée pour filtrer les données de la requête principale en fonction des résultats de la sous-requête.

   ```sql
   SELECT nom FROM Utilisateurs
   WHERE ville_id IN (SELECT ville_id FROM Villes WHERE nom_ville = 'Paris');
   ```

   **Explication** : Cette requête récupère les noms des utilisateurs vivant dans la ville de Paris.

3. **Sous-requête dans le FROM**
   Crée une « table virtuelle » qui peut être utilisée comme source de données dans la requête principale.

   ```sql
   SELECT ville, AVG(age) AS age_moyen
   FROM (SELECT ville, age FROM Utilisateurs WHERE age > 18) AS utilisateurs_adultes
   GROUP BY ville;
   ```

   **Utilité** : Utile pour appliquer des opérations sur un ensemble filtré de données.

---

## 2. **Fonctions de Fenêtre (Window Functions)**

Les fonctions de fenêtre permettent de calculer des valeurs sur un ensemble d'enregistrements liés à la ligne courante, sans réduire le nombre de lignes, contrairement à `GROUP BY`. Ces fonctions sont très utiles pour les analyses de tendances, les classements, etc.

### Exemple Pratique avec `OVER()`

1. **Utilisation de OVER() avec PARTITION BY**
   Supposons que vous avez besoin de calculer le salaire moyen par département, sans grouper les résultats.

   ```sql
   SELECT nom, departement, salaire,
          AVG(salaire) OVER (PARTITION BY departement) AS salaire_moyen_dept
   FROM Employes;
   ```

   **Explication** : Cette requête retourne le salaire moyen par département pour chaque employé, en ajoutant une colonne `salaire_moyen_dept`.

2. **Fenêtre de Rang avec OVER() ORDER BY**
   Vous pouvez également utiliser `OVER()` pour créer des rangs.

   ```sql
   SELECT nom, departement, salaire,
          RANK() OVER (ORDER BY salaire DESC) AS classement_salaire
   FROM Employes;
   ```

   **Explication** : Ici, les employés sont classés par ordre de salaire, avec une nouvelle colonne `classement_salaire`.

---

## 3. **Fonctions de Classement**

Les fonctions de classement sont souvent utilisées avec les fonctions de fenêtre pour attribuer des rangs, sans nécessairement regrouper les données. Les trois fonctions principales sont `RANK`, `DENSE_RANK`, et `ROW_NUMBER`.

### Exemples et Explications

1. **RANK**
   Attribue un rang, en laissant des écarts en cas d’égalité.

   ```sql
   SELECT nom, salaire,
          RANK() OVER (ORDER BY salaire DESC) AS rang
   FROM Employes;
   ```

   **Explication** : Si deux employés ont le même salaire, ils auront le même rang, et le rang suivant sautera un nombre.

2. **DENSE_RANK**
   Attribue un rang, mais sans laisser d’écarts en cas d’égalité.

   ```sql
   SELECT nom, salaire,
          DENSE_RANK() OVER (ORDER BY salaire DESC) AS dense_rang
   FROM Employes;
   ```

   **Différence** : Contrairement à `RANK`, `DENSE_RANK` ne saute pas de rang en cas d’égalité.

3. **ROW_NUMBER**
   Attribue un numéro de ligne unique à chaque enregistrement.

   ```sql
   SELECT nom, salaire,
          ROW_NUMBER() OVER (ORDER BY salaire DESC) AS row_num
   FROM Employes;
   ```

   **Utilité** : Idéal pour créer un index unique dans une requête.

---

## Résumé et Illustration

1. **Sous-requêtes** : Manipulez des données en les imbriquant dans des requêtes principales pour des analyses avancées.
2. **Fonctions de Fenêtre** : Utilisez des fonctions de fenêtre comme `AVG`, `SUM`, avec `PARTITION BY` et `ORDER BY` pour des calculs sur des ensembles de données sans réduction.
3. **Fonctions de Classement** : Appliquez des rangs et indices avec `RANK`, `DENSE_RANK`, et `ROW_NUMBER` pour des analyses de classement.
