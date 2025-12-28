# SQL Intermédiaire

---

## 1. **JOINS (Jointures)**

Les jointures permettent de combiner des enregistrements de plusieurs tables en fonction d'une colonne commune, généralement une clé primaire et une clé étrangère. Voici un aperçu des types de jointures et de leurs applications.

### Exemple Pratique

Imaginons une base de données contenant deux tables :

- **Utilisateurs** : contenant des informations de base sur les utilisateurs (`id`, `nom`, `age`, `ville_id`).
- **Villes** : contenant les noms des villes (`ville_id`, `nom_ville`).

### Types de Jointures et Syntaxe

1. **INNER JOIN** : Renvoie les enregistrements qui ont des correspondances dans les deux tables.

   ```sql
   SELECT Utilisateurs.nom, Villes.nom_ville
   FROM Utilisateurs
   INNER JOIN Villes ON Utilisateurs.ville_id = Villes.ville_id;
   ```

   **Explication** : Cette requête sélectionne les utilisateurs ayant un identifiant de ville qui correspond à un enregistrement dans la table `Villes`.

2. **LEFT JOIN** : Renvoie tous les enregistrements de la table de gauche (ici, `Utilisateurs`), et les enregistrements correspondants de la table de droite (ici, `Villes`). Si aucune correspondance n'est trouvée, des valeurs nulles sont retournées pour les colonnes de la table de droite.

   ```sql
   SELECT Utilisateurs.nom, Villes.nom_ville
   FROM Utilisateurs
   LEFT JOIN Villes ON Utilisateurs.ville_id = Villes.ville_id;
   ```

   **Utilité** : Permet de récupérer tous les utilisateurs, même si certains n'ont pas de ville associée dans `Villes`.

3. **RIGHT JOIN** et **FULL OUTER JOIN** fonctionnent de manière similaire, mais sont moins fréquemment utilisés. Ils récupèrent, respectivement, toutes les valeurs de la table de droite, ou de toutes les tables.

4. **CROSS JOIN** : Produit le produit cartésien des deux tables (tous les enregistrements de `Utilisateurs` avec tous ceux de `Villes`), utilisé rarement.

---

## 2. **Combiner des Requêtes avec UNION**

L'opérateur `UNION` combine les résultats de deux ou plusieurs requêtes `SELECT` en une seule liste. Les résultats doivent avoir le même nombre de colonnes et des types de données compatibles.

### Exemple Pratique

Supposons que vous avez deux tables, **Employes** et **Freelances**, et que vous voulez obtenir une liste unique de toutes les personnes avec leur nom et ville.

```sql
SELECT nom, ville FROM Employes
UNION
SELECT nom, ville FROM Freelances;
```

**Explication** : Cette requête retourne tous les noms uniques des employés et freelances. Si vous voulez inclure des doublons, utilisez `UNION ALL`.

---

## 3. **Gestion des Valeurs Nulles**

En SQL, les valeurs nulles représentent l'absence d'une valeur. Il est souvent nécessaire de gérer les valeurs nulles dans les requêtes pour éviter des résultats inattendus.

### Fonctions de Gestion des Nulles

1. **ISNULL** : Vérifie si une valeur est nulle.

   ```sql
   SELECT nom FROM Utilisateurs WHERE email IS NULL;
   ```

2. **NULLIF** : Compare deux expressions et retourne `NULL` si elles sont égales, sinon retourne la première valeur.

   ```sql
   SELECT NULLIF(100, 100);  -- Retourne NULL
   ```

3. **COALESCE** : Retourne la première valeur non nulle d'une liste d'arguments.

   ```sql
   SELECT nom, COALESCE(email, 'Pas d\'email') FROM Utilisateurs;
   ```

   **Utilité** : Fournir une valeur par défaut si l'attribut `email` est nul.

---

## 4. **Conversion de Types et Conditions Dynamiques**

### Conversion de Types avec CAST

La fonction `CAST` permet de convertir une valeur d'un type à un autre. Par exemple, convertir une chaîne en entier pour des calculs.

```sql
SELECT CAST(age AS VARCHAR(3)) FROM Utilisateurs;
```

**Utilité** : Cela est utile pour aligner les types dans les calculs ou pour le formatage.

### Conditions Dynamiques avec CASE WHEN

`CASE WHEN` permet de définir des conditions dynamiques dans une requête SQL, souvent utilisé pour classer ou transformer des données.

### Exemple Pratique

Supposons que vous voulez classer les utilisateurs par tranche d'âge.

```sql
SELECT nom,
       CASE
           WHEN age < 18 THEN 'Mineur'
           WHEN age BETWEEN 18 AND 65 THEN 'Adulte'
           ELSE 'Senior'
       END AS categorie_age
FROM Utilisateurs;
```

**Explication** : Cette requête classe les utilisateurs en trois catégories d'âge : mineur, adulte, et senior.

---

## Résumé et Illustration

1. **Jointures** : Combinez plusieurs tables pour récupérer des informations consolidées.
2. **UNION** : Combinez les résultats de plusieurs requêtes `SELECT` pour obtenir une liste unique.
3. **Gestion des Valeurs Nulles** : Utilisez `ISNULL`, `NULLIF`, et `COALESCE` pour contrôler les valeurs nulles.
4. **Conversions et Conditions** : `CAST` pour les conversions et `CASE WHEN` pour des logiques conditionnelles.

---

*(Laissez ici un espace pour des illustrations, comme des schémas montrant le fonctionnement des jointures, un exemple visuel d'une table combinée avec `UNION`, ou des graphiques expliquant l'utilisation de `CASE WHEN`)*

---

Cette deuxième section approfondit l’utilisation des fonctions et commandes pour manipuler les données de manière plus avancée et flexible, ce qui est essentiel pour les analyses et rapports plus complexes. Souhaitez-vous passer à la rédaction de la section avancée ?
