# Fondamentaux SQL

## Page 1 : les bases SQL

### 1. **Introduction aux Bases de Données Relationnelles**

**Définition des bases de données relationnelles :**  
Une base de données relationnelle est une collection de données organisées sous forme de tables. Chaque table contient des lignes (enregistrements) et des colonnes (attributs), et les données sont structurées pour représenter les relations entre différents ensembles d'informations. Ce type de base de données permet de gérer des informations en appliquant des règles strictes pour assurer leur intégrité.

**Concepts de schéma, clé primaire et clé étrangère :**  

- **Schéma :** Ensemble des tables et des relations entre elles, définissant la structure globale de la base de données.
- **Clé primaire (Primary Key) :** Un attribut ou un ensemble d'attributs unique par table, identifiant chaque enregistrement de manière distincte. Par exemple, dans une table `Utilisateurs`, la colonne `id` pourrait être la clé primaire, car elle est unique pour chaque utilisateur.
- **Clé étrangère (Foreign Key) :** Un attribut qui crée un lien entre deux tables. Il fait référence à la clé primaire d'une autre table, permettant de relier les informations de deux tables. Par exemple, dans une table `Commandes`, une colonne `utilisateur_id` pourrait être une clé étrangère, reliant chaque commande à un utilisateur spécifique dans la table `Utilisateurs`.

---

### 2. **Types de Données et Contraintes**

**Types de données courants :**  

- **INT :** Stocke des nombres entiers, utile pour des identifiants ou des comptages.
- **VARCHAR(n) :** Stocke des chaînes de caractères de longueur variable, jusqu'à une limite de `n` caractères. Par exemple, un nom ou une adresse.
- **DATE :** Stocke des dates, ce qui permet de gérer des informations temporelles.
- **BOOLEAN :** Stocke des valeurs binaires (Vrai/Faux).
  
**Contraintes :**  
Les contraintes sont des règles appliquées aux colonnes pour assurer l'intégrité des données :

- **NOT NULL :** Indique que la colonne doit contenir une valeur, elle ne peut pas être vide.
- **UNIQUE :** Assure que toutes les valeurs d'une colonne sont uniques.
- **PRIMARY KEY :** Combine `NOT NULL` et `UNIQUE`, en identifiant de manière unique chaque enregistrement.
- **FOREIGN KEY :** Enforce une relation entre deux tables pour maintenir la cohérence des données.

---

### 3. **Opérateurs et Syntaxe de Base**

#### Opérateurs courants

Les opérateurs suivants permettent de comparer et filtrer les données :

- `=` : égalité
- `<`, `>` : inférieur, supérieur
- `<>` ou `!=` : différent

#### Syntaxe de base pour récupérer des données

1. **SELECT** et **FROM**  
   Ces mots-clés permettent de sélectionner des données d'une ou plusieurs tables.

   ```sql
   SELECT nom, age FROM Utilisateurs;
   ```

   Cet exemple sélectionne les colonnes `nom` et `age` de la table `Utilisateurs`.

2. **Filtrage avec WHERE**  
   La clause `WHERE` permet de spécifier des conditions pour filtrer les résultats.

   ```sql
   SELECT nom FROM Utilisateurs WHERE age > 18;
   ```

   Ici, on récupère les noms des utilisateurs ayant un âge supérieur à 18.

3. **Opérateurs logiques : LIKE, IN, BETWEEN, IS NULL**  
   Ces opérateurs permettent d’affiner les filtres :
   - `LIKE` : Utilisé pour des recherches de motifs.

     ```sql
     SELECT nom FROM Utilisateurs WHERE nom LIKE 'A%';
     ```

     Cet exemple sélectionne les utilisateurs dont le nom commence par "A".
   - `IN` : Vérifie si une valeur est dans une liste donnée.

     ```sql
     SELECT nom FROM Utilisateurs WHERE age IN (18, 25, 30);
     ```

   - `BETWEEN` : Vérifie si une valeur est dans une plage.

     ```sql
     SELECT nom FROM Utilisateurs WHERE age BETWEEN 20 AND 30;
     ```

   - `IS NULL` : Vérifie si une colonne est vide.

     ```sql
     SELECT nom FROM Utilisateurs WHERE email IS NULL;
     ```

4. **Conditions combinées : AND, OR, NOT**  
   Ces opérateurs permettent de combiner plusieurs conditions :

   ```sql
   SELECT nom FROM Utilisateurs WHERE age > 18 AND ville = 'Paris';
   ```

---

### 4. **Tri et Limitation des Résultats**

1. **ORDER BY**  
   La clause `ORDER BY` permet de trier les résultats par une ou plusieurs colonnes.

   ```sql
   SELECT nom, age FROM Utilisateurs ORDER BY age DESC;
   ```

   Ici, on trie les utilisateurs par âge décroissant.

2. **LIMIT** et **OFFSET**  
   Ces clauses permettent de limiter le nombre de résultats.

   ```sql
   SELECT nom FROM Utilisateurs ORDER BY age DESC LIMIT 10 OFFSET 5;
   ```

   Cet exemple retourne les 10 utilisateurs suivants après les 5 premiers, classés par âge décroissant.

---

### 5. **Regroupement et Agrégation**

1. **Groupement avec GROUP BY et filtrage de groupes avec HAVING**  
   `GROUP BY` permet de regrouper les enregistrements par valeur de colonne, souvent utilisé avec des fonctions d'agrégation.

   ```sql
   SELECT ville, COUNT(*) FROM Utilisateurs GROUP BY ville;
   ```

   Ici, on compte le nombre d’utilisateurs par ville.

   La clause `HAVING` filtre les groupes.

   ```sql
   SELECT ville, COUNT(*) FROM Utilisateurs GROUP BY ville HAVING COUNT(*) > 5;
   ```

   Cet exemple sélectionne les villes ayant plus de 5 utilisateurs.

2. **Fonctions d'agrégation : SUM, COUNT, AVG, MIN, MAX, DISTINCT**  
   - `SUM` : Calcule la somme.
   - `COUNT` : Compte le nombre d'enregistrements.
   - `AVG` : Calcule la moyenne.
   - `MIN` et `MAX` : Renvoient respectivement la valeur minimale et maximale.
   - `DISTINCT` : Élimine les doublons.

   Exemple :

   ```sql
   SELECT ville, AVG(age) FROM Utilisateurs GROUP BY ville;
   ```

   Calcule l’âge moyen des utilisateurs par ville.

---

### Situation Pratique : Interagir avec une Base de Données

**Contexte :**  
Vous travaillez sur une application qui doit interagir avec une base de données relationnelle pour stocker et extraire des informations utilisateurs. Vous allez accéder à cette base de données, exécuter une requête, récupérer les données dans un format utilisable par un programme en Python, C ou C#, et mettre à jour la base de données avec de nouvelles informations.

---

#### 1. Accéder à la Base de Données

Pour se connecter à une base de données, il est nécessaire d’utiliser une bibliothèque compatible avec votre langage de programmation, comme `psycopg2` ou `sqlite3` en Python, `libpq` pour C, ou `SqlClient` en C#. Voici un exemple de code pour chaque langage.

**En Python :**

```python
import sqlite3

# Connexion à la base de données
conn = sqlite3.connect('ma_base_de_donnees.db')
cursor = conn.cursor()
```

**En C :**

```c
#include <libpq-fe.h>

PGconn *conn = PQconnectdb("dbname=ma_base_de_donnees user=mon_utilisateur password=mon_mot_de_passe host=localhost");
if (PQstatus(conn) == CONNECTION_BAD) {
    printf("Erreur de connexion à la base de données.\n");
    PQfinish(conn);
    return 1;
}
```

**En C# :**

```csharp
using System.Data.SqlClient;

var connectionString = "Data Source=localhost;Initial Catalog=ma_base_de_donnees;User ID=mon_utilisateur;Password=mon_mot_de_passe";
using (SqlConnection conn = new SqlConnection(connectionString)) {
    conn.Open();
    // Connexion réussie
}
```

---

#### 2. Faire une Requête

Une fois connecté, vous pouvez exécuter une requête SQL pour récupérer des données. Supposons que vous souhaitez obtenir la liste des utilisateurs dans la table `Utilisateurs`.

**Python :**

```python
cursor.execute("SELECT * FROM Utilisateurs WHERE age > 18;")
```

**C :**

```c
PGresult *res = PQexec(conn, "SELECT * FROM Utilisateurs WHERE age > 18;");
```

**C# :**

```csharp
var command = new SqlCommand("SELECT * FROM Utilisateurs WHERE age > 18;", conn);
```

---

#### 3. Récupérer les Données sous un Format Exploitable

Ensuite, vous devez récupérer les données sous un format que vous pouvez utiliser dans votre code. Cela dépend du langage de programmation, mais dans chaque cas, vous convertirez les données en un format de tableau ou liste facilement manipulable.

**Python :**

```python
# Récupérer les résultats sous forme de liste
resultats = cursor.fetchall()
for row in resultats:
    print(row)  # Accéder aux données utilisateur
```

**C :**

```c
int rows = PQntuples(res);
int cols = PQnfields(res);

for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        printf("%s ", PQgetvalue(res, i, j));
    }
    printf("\n");
}
PQclear(res);
```

**C# :**

```csharp
using (SqlDataReader reader = command.ExecuteReader()) {
    while (reader.Read()) {
        Console.WriteLine(reader["nom"].ToString()); // Accéder aux colonnes par nom ou par index
    }
}
```

---

#### 4. Renvoyer des Données dans la Base de Données

Pour insérer ou mettre à jour des données, vous devez utiliser une requête SQL d'insertion ou de mise à jour.

**Exemple de mise à jour :** ajout d’un nouvel utilisateur dans la base de données.

**Python :**

```python
# Insertion d'un nouvel utilisateur
cursor.execute("INSERT INTO Utilisateurs (nom, age, ville) VALUES (?, ?, ?)", ("Alice", 25, "Paris"))
conn.commit()  # Confirme l'insertion
```

**C :**

```c
PGresult *res_insert = PQexec(conn, "INSERT INTO Utilisateurs (nom, age, ville) VALUES ('Alice', 25, 'Paris');");
if (PQresultStatus(res_insert) != PGRES_COMMAND_OK) {
    printf("Échec de l'insertion.\n");
}
PQclear(res_insert);
```

**C# :**

```csharp
var insertCommand = new SqlCommand("INSERT INTO Utilisateurs (nom, age, ville) VALUES (@nom, @age, @ville)", conn);
insertCommand.Parameters.AddWithValue("@nom", "Alice");
insertCommand.Parameters.AddWithValue("@age", 25);
insertCommand.Parameters.AddWithValue("@ville", "Paris");
insertCommand.ExecuteNonQuery();
```

---

### Résumé

1. **Connexion** : Utilisez les bibliothèques natives du langage pour établir une connexion à la base de données.
2. **Requête SQL** : Écrivez des requêtes SQL pour extraire les informations souhaitées.
3. **Format des Données** : Récupérez les données dans un format compatible (listes, tableaux, etc.).
4. **Modification des Données** : Utilisez des requêtes `INSERT` ou `UPDATE` pour ajouter ou mettre à jour les informations.

Ces étapes vous permettent de manipuler facilement les données depuis une base de données pour des applications en Python, C, ou C#.
