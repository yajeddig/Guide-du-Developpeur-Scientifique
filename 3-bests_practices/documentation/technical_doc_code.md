# Documentation technique d'un code

## Qu'est-ce qu'un Docstring ?

Un **docstring** (ou "documentation string") est une chaîne de caractères utilisée pour documenter des modules, des classes, des méthodes et des fonctions dans un code source Python. Les docstrings sont placées directement après la définition d'un module, d'une classe ou d'une fonction et sont délimitées par des triples guillemets (`"""` ou `'''`). Ils servent à expliquer le but du code, comment l'utiliser, et d'autres informations pertinentes.

### Exemple de Docstring

```python
def calculer_moyenne(liste_nombres):
    """
    Calcule la moyenne d'une liste de nombres.

    Args:
        liste_nombres (list): La liste des nombres dont on veut calculer la moyenne.

    Returns:
        float: La moyenne des nombres dans la liste.

    Raises:
        ValueError: Si la liste est vide.
    """
    if not liste_nombres:
        raise ValueError("La liste ne peut pas être vide.")
    return sum(liste_nombres) / len(liste_nombres)
```

## Conventions de Rédaction des Docstrings

La rédaction des docstrings suit généralement des conventions établies pour garantir la clarté et la cohérence. Voici quelques-unes des conventions les plus courantes :

### 1. PEP 257 : Convention de base

La [PEP 257](https://peps.python.org/pep-0257/) fournit des conventions de style pour les docstrings. Voici quelques-unes des directives clés :

- **Docstrings pour les modules** : Doivent mentionner les objets exportés par le module, ainsi que tout concept ou convention importante.

- **Docstrings pour les classes** : Doivent résumer l’objectif de la classe et mentionner les méthodes et attributs importants.

- **Docstrings pour les méthodes et fonctions** : Doivent décrire leur comportement, leurs arguments, leur valeur de retour et les exceptions qu'elles peuvent lever.

### 2. Google Style

La convention Google pour les docstrings est également très populaire et est souvent utilisée pour sa clarté et sa structure. Elle utilise des sections spécifiques comme `Args`, `Returns` et `Raises` pour organiser l'information.

### 3. NumPy/SciPy Style

Le style NumPy/SciPy est particulièrement populaire dans les projets scientifiques et de calcul numérique. Il utilise des sections comme `Parameters`, `Returns` et `Raises` avec un formatage spécifique pour faciliter la génération automatique de documentation.

## Utilisation des Docstrings

Les docstrings peuvent être accédées de différentes manières :

* **Via l'attribut `__doc__`** : Chaque objet Python (module, classe, fonction, méthode) possède un attribut `__doc__` qui contient son docstring.
* **Avec la fonction `help()`** : La fonction `help()` affiche le docstring d'un objet, fournissant ainsi une aide interactive.
* **Génération de documentation automatique** : Des outils comme Sphinx, pdoc3 ou pydocmd peuvent extraire les docstrings de votre code et générer une documentation complète au format HTML ou autre.

## Générer la documentation technique d'un code grâce aux docstrings

Les docstrings sont un outil puissant pour documenter le code Python. En suivant les conventions établies, vous pouvez rendre votre code plus lisible et plus facile à maintenir pour vous-même et pour les autres développeurs.

Pour générer la documentation technique d'un code à partir des docstrings en utilisant le format Markdown, vous pouvez utiliser des outils comme **pdoc**, **Sphinx**, ou **pydocmd**. Ces outils peuvent extraire les docstrings des modules Python et générer des fichiers de documentation en différents formats, y compris Markdown ou HTML.

**Exemple avec pdoc3**

1. **Installer pdoc3:**

   ```bash
   pip install pdoc3
   ```

2. **Générer la documentation:**

   ```bash
   pdoc --output-dir docs --format markdown my_project
   ```

   Cette commande va créer une documentation dans le répertoire `docs` sous forme de fichiers Markdown pour chaque module de votre projet.

Vous pouvez ensuite intégrer ces fichiers Markdown dans le wiki de votre projet ou les utiliser pour créer un site web de documentation statique.

**Conclusion**

Les docstrings sont un élément essentiel de la documentation technique d'un code Python. En les utilisant de manière cohérente et en suivant les conventions établies, vous facilitez la compréhension, la maintenance et la collaboration sur votre projet. N'hésitez pas à explorer les différents outils de génération de documentation pour automatiser ce processus et rendre votre documentation encore plus accessible et utile. 
