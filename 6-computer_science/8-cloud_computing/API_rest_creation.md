# Concevoir et coder une API RESTful en Python

**Durée :** 90 minutes  
**Prérequis :** [Python Avancé](../2-programming_languages/advanced_python.md), [Architecture](../../../3-bests_practices/code_writing/architecture.md)  
**Objectifs :**
- Comprendre les principes REST et les APIs RESTful
- Maîtriser Flask pour créer des APIs Python
- Implémenter les méthodes HTTP (GET, POST, PUT, DELETE)
- Gérer l'authentification et la sécurité de base
- Tester et documenter une API

**TL;DR :** Guide complet pour créer une API RESTful en Python avec Flask, de la conception au déploiement.

Cette page vous guide dans la conception et le développement d'une API RESTful en Python. Nous utiliserons le framework **Flask** pour illustrer le processus, car il est simple et adapté aux débutants. Ce guide s'adresse aux personnes non initiées et présente les concepts de base ainsi qu'un exemple de code complet.

---

## 1. Comprendre le concept d'API RESTful

Une **API RESTful** est une interface qui permet à différentes applications de communiquer entre elles en utilisant les principes du REST (Representational State Transfer). Les points clés à retenir :

- **Ressources** : Chaque élément (comme un utilisateur, un produit, etc.) est une ressource accessible via une URL.
- **Méthodes HTTP** : Les opérations sur les ressources se font par des méthodes telles que :
  - `GET` pour récupérer des données,
  - `POST` pour créer une nouvelle ressource,
  - `PUT` ou `PATCH` pour mettre à jour une ressource existante,
  - `DELETE` pour supprimer une ressource.
- **Stateless** : Chaque requête est indépendante, le serveur ne conserve aucune information sur les requêtes précédentes.
- **Format des données** : Les échanges se font souvent au format **JSON**, qui est facile à lire et à manipuler.

---

## 2. Choisir un framework

Plusieurs frameworks Python permettent de développer des API RESTful, tels que :

- **Flask** : Léger, simple à utiliser et parfait pour débuter.
- **FastAPI** : Moderne, rapide et basé sur les annotations de type Python.
- **Django Rest Framework (DRF)** : Pour des projets plus complexes.

Dans ce guide, nous utiliserons **Flask** pour sa simplicité et sa facilité d'apprentissage.

---

## 3. Installation de Flask

Avant de commencer, installez Flask en utilisant `pip` :

```bash
pip install Flask
```

---

## 4. Concevoir l'API

Avant de coder, il est important de définir :

- **Les ressources à gérer** : Par exemple, une ressource "utilisateur" avec des attributs comme `id`, `name` et `email`.
- **Les endpoints** : Les URL qui permettront d'accéder aux ressources. Par exemple :
  - `GET /users` : Récupérer la liste des utilisateurs.
  - `GET /users/<id>` : Récupérer les informations d'un utilisateur précis.
  - `POST /users` : Créer un nouvel utilisateur.
  - `PUT /users/<id>` ou `PATCH /users/<id>` : Mettre à jour un utilisateur.
  - `DELETE /users/<id>` : Supprimer un utilisateur.
- **Les méthodes HTTP** : Elles correspondent aux actions à réaliser sur les ressources.
- **La structure des réponses** : En général, on renvoie des données au format JSON et des codes de statut HTTP adaptés (200, 201, 400, 404, etc.).

---

## 5. Coder une API RESTful avec Flask

Voici un exemple complet d'API permettant de gérer une liste d'utilisateurs :

```python
from flask import Flask, request, jsonify

app = Flask(__name__)

# Simulation d'une base de données avec une liste de dictionnaires
users = [
    {"id": 1, "name": "Alice", "email": "alice@example.com"},
    {"id": 2, "name": "Bob", "email": "bob@example.com"}
]

# Endpoint pour récupérer la liste des utilisateurs
@app.route('/users', methods=['GET'])
def get_users():
    return jsonify(users), 200

# Endpoint pour récupérer un utilisateur par son ID
@app.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = next((u for u in users if u["id"] == user_id), None)
    if user:
        return jsonify(user), 200
    else:
        return jsonify({"error": "Utilisateur non trouvé"}), 404

# Endpoint pour créer un nouvel utilisateur
@app.route('/users', methods=['POST'])
def create_user():
    new_user = request.get_json()
    # Vérification des données reçues
    if not new_user or not new_user.get("name") or not new_user.get("email"):
        return jsonify({"error": "Données invalides"}), 400
    # Attribution d'un nouvel ID
    new_user["id"] = users[-1]["id"] + 1 if users else 1
    users.append(new_user)
    return jsonify(new_user), 201

# Endpoint pour mettre à jour un utilisateur existant
@app.route('/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    user = next((u for u in users if u["id"] == user_id), None)
    if not user:
        return jsonify({"error": "Utilisateur non trouvé"}), 404
    data = request.get_json()
    # Mise à jour des informations, avec des valeurs par défaut si non fournies
    user.update({
        "name": data.get("name", user["name"]),
        "email": data.get("email", user["email"])
    })
    return jsonify(user), 200

# Endpoint pour supprimer un utilisateur
@app.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    global users
    users = [u for u in users if u["id"] != user_id]
    return jsonify({"message": "Utilisateur supprimé"}), 200

if __name__ == '__main__':
    app.run(debug=True)
```

### Explications du code

- **Initialisation** :  
  On importe les modules nécessaires et on initialise l'application Flask avec `app = Flask(__name__)`.

- **Base de données simulée** :  
  La variable `users` contient une liste de dictionnaires représentant les utilisateurs.

- **Définition des endpoints** :  
  Chaque endpoint est défini avec le décorateur `@app.route`. Par exemple, le endpoint `/users` gère la récupération (`GET`) de tous les utilisateurs et la création (`POST`) d'un nouvel utilisateur.

- **Méthodes HTTP** :  
  - `GET` : Pour récupérer des données.
  - `POST` : Pour envoyer des données et créer une nouvelle ressource.
  - `PUT` : Pour mettre à jour une ressource existante.
  - `DELETE` : Pour supprimer une ressource.

- **Gestion des réponses** :  
  La fonction `jsonify` convertit les données Python en JSON. Les codes de statut HTTP (`200`, `201`, `400`, `404`) permettent d'indiquer le résultat de la requête.

- **Exécution du serveur** :  
  Le bloc `if __name__ == '__main__':` permet de démarrer l'application en mode debug, utile pour le développement.

---

## 6. Tester l'API

Une fois l'API lancée (en exécutant le script Python), vous pouvez la tester de différentes manières :

- **Navigateur Web** :  
  Accédez à l'URL [http://127.0.0.1:5000/users](http://127.0.0.1:5000/users) pour voir la liste des utilisateurs.

- **Outils dédiés** :  
  Utilisez **Postman** ou **Insomnia** pour tester les requêtes `POST`, `PUT` et `DELETE`.

- **Ligne de commande avec curl** :

  ```bash
  # Exemple d'une requête GET
  curl -X GET http://127.0.0.1:5000/users
  ```

---

## 7. Bonnes pratiques

- **Organisation du code** :  
  Pour des projets plus importants, envisagez de séparer votre code en plusieurs modules (par exemple, séparer la logique de l'API, la gestion de la base de données, etc.).

- **Validation et gestion des erreurs** :  
  Vérifiez toujours les données reçues et gérez les erreurs de manière appropriée pour éviter les plantages.

- **Sécurisation** :  
  Implémentez des mécanismes d'authentification et d'autorisation si votre API est accessible publiquement.

- **Documentation** :  
  Documentez vos endpoints pour faciliter leur utilisation par d'autres développeurs ou par vous-même à l'avenir.

---

## Conclusion

Vous venez de découvrir comment concevoir et coder une API RESTful en Python en utilisant Flask. Cette base vous permet de développer des API simples que vous pouvez étendre et complexifier au fil de vos besoins. N'hésitez pas à expérimenter, ajouter de nouvelles fonctionnalités, et adopter de bonnes pratiques pour améliorer la robustesse et la sécurité de vos applications.

Bonne programmation et à bientôt pour de nouvelles aventures dans le développement d'API !
