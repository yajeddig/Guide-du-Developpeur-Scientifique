# Comprendre et utiliser une API avec Python

**Durée :** 60 minutes  
**Prérequis :** [Python Basics](../../../3-bests_practices/python_environment.md), Requêtes HTTP  
**Objectifs :**
- Comprendre le concept d'API et son utilité
- Maîtriser les requêtes HTTP avec Python
- Savoir utiliser les bibliothèques requests et json
- Gérer l'authentification et les erreurs d'API
- Interpréter et traiter les réponses JSON

**TL;DR :** Introduction pratique aux APIs avec Python pour récupérer et manipuler des données distantes.

Bienvenue dans cette introduction aux API, destinée aux personnes qui débutent. Vous apprendrez ici ce qu'est une API, comment elle fonctionne et comment l'utiliser avec du code Python.

---

## Qu'est-ce qu'une API ?

Une **API** (Application Programming Interface) est un ensemble de règles et de protocoles qui permet à différentes applications de communiquer entre elles. En d'autres termes, une API sert d'interface entre deux systèmes, facilitant l'échange de données et l'exécution de commandes.

Par exemple, lorsqu'une application météo affiche les prévisions du jour, elle utilise probablement une API pour récupérer ces informations depuis un serveur distant.

---

## Comment fonctionne une API ?

La majorité des API modernes, notamment les API **RESTful**, fonctionnent via le protocole HTTP, le même utilisé par votre navigateur web. Voici les concepts clés :

- **Endpoints :**  
  Ce sont des URL spécifiques qui représentent des ressources (par exemple, des données sur les utilisateurs, des articles, etc.).  
  Exemple : `https://api.exemple.com/utilisateurs`

- **Méthodes HTTP :**  
  Les actions sur les ressources se font à l'aide de différentes méthodes :
  - `GET` : Récupérer des informations.
  - `POST` : Envoyer des informations pour créer une nouvelle ressource.
  - `PUT` ou `PATCH` : Mettre à jour des informations existantes.
  - `DELETE` : Supprimer une ressource.

- **Stateless :**  
  Chaque requête envoyée à l'API est indépendante. Le serveur ne garde pas en mémoire les échanges précédents.

- **Format des données :**  
  Les échanges se font généralement en **JSON** (JavaScript Object Notation), un format léger et facile à lire.

---

## Utiliser une API avec Python

Pour interagir avec une API en Python, nous utilisons souvent la bibliothèque `requests`. Cette bibliothèque permet d'envoyer facilement des requêtes HTTP et de traiter les réponses.

### Étape 1 : Installer la bibliothèque `requests`

Si vous ne l'avez pas déjà, installez `requests` via `pip` :

```bash
pip install requests
```

### Étape 2 : Envoyer une requête GET

Pour récupérer des données depuis une API, nous utilisons la méthode `get`.

### Exemple de code en Python

```python
import requests

# URL de l'API (exemple)
url = "https://api.exemple.com/donnees"

# Envoyer une requête GET
response = requests.get(url)

# Vérifier si la requête a réussi (code 200 signifie "OK")
if response.status_code == 200:
    # Convertir la réponse JSON en dictionnaire Python
    data = response.json()
    # Afficher les données récupérées
    print("Données reçues :", data)
else:
    # En cas d'erreur, afficher le code de statut HTTP
    print("Erreur lors de la requête :", response.status_code)
```

---

## Quelques points à retenir

- **Documentation de l'API :**  
  Chaque API dispose d'une documentation qui détaille les endpoints disponibles, les paramètres à utiliser, et les méthodes d'authentification éventuelles (comme des clés API ou des tokens).  
  **Conseil :** Prenez toujours le temps de lire cette documentation avant de commencer.

- **Authentification :**  
  Certaines API nécessitent une authentification pour accéder aux données. Voici un exemple avec une clé API dans l'en-tête de la requête :

  ```python
  headers = {
      "Authorization": "Bearer VOTRE_CLE_API"
  }
  response = requests.get(url, headers=headers)
  ```

- **Erreurs et codes de statut HTTP :**  
  Chaque réponse d'API comporte un code de statut qui indique si la requête a été traitée avec succès :
  - `200 OK` : La requête a réussi.
  - `201 Created` : Une nouvelle ressource a été créée.
  - `400 Bad Request` : La requête comporte une erreur.
  - `401 Unauthorized` : L'authentification est requise ou a échoué.
  - `404 Not Found` : La ressource demandée n'existe pas.

---

## Conclusion

Les API sont des outils puissants qui permettent de connecter vos applications à une multitude de services et de données en ligne. Grâce à Python et à la bibliothèque `requests`, il est facile d'envoyer des requêtes à une API et d'exploiter les données retournées dans vos projets scientifiques ou personnels.

N'oubliez pas :  

- **Lire la documentation** de l'API que vous utilisez.  
- **Tester vos requêtes** et gérer les erreurs de manière appropriée.

Bonne exploration et n'hésitez pas à expérimenter pour mieux comprendre le fonctionnement des API !
