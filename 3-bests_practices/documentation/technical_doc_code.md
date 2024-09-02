# Documentation technique d'un code

## Qu'est-ce qu'un Docstring ?

Un **docstring** (ou "documentation string") est une chaîne de caractères utilisée pour documenter des modules, des classes, des méthodes et des fonctions dans un code source Python. Les docstrings sont placées directement après la définition d'un module, d'une classe ou d'une fonction et sont délimitées par des triples guillemets (`"""` ou `'''`).

### Exemple de Docstring

```python
def function_name(parameters):
    """
    Summary of the function.

    Extended description of the function.

    Args:
        param1 (type): Description of param1.
        param2 (type): Description of param2.

    Returns:
        type: Description of the return value.

    Raises:
        ExceptionName: Description of the condition when this exception is raised.
    """
    pass
```

## Conventions de Rédaction des Docstrings

La rédaction des docstrings suit généralement des conventions établies pour garantir la clarté et la cohérence. Voici quelques-unes des conventions les plus courantes :

### 1. **PEP 257**: Convention de base

La PEP 257 fournit des conventions de style pour les docstrings. Voici quelques-unes des directives clés :

- **Docstrings pour les modules** : Un docstring de module doit mentionner les objets exportés par le module, ainsi que tout concept ou convention importante.

    ```python
    """
    This module provides functionalities to handle user authentication.

    Exported functions:
        - login
        - logout
        - is_authenticated
    """
    ```

- **Docstrings pour les classes** : Un docstring de classe doit résumer l’objectif de la classe et mentionner les méthodes importantes. Si la classe est simple, un docstring d'une seule ligne peut suffire.

    ```python
    class MyClass:
        """
        A simple example class.
        
        Attributes:
            attr1 (type): Description of `attr1`.
            attr2 (type): Description of `attr2`.
        """
        def __init__(self, attr1, attr2):
            self.attr1 = attr1
            self.attr2 = attr2
    ```

- **Docstrings pour les méthodes et fonctions** : Un docstring de méthode ou de fonction doit décrire son comportement, ses arguments, sa valeur de retour et les exceptions qu'elle peut lever.

    ```python
    def example_function(param1, param2):
        """
        Example function to demonstrate docstring conventions.
        
        Args:
            param1 (int): The first parameter.
            param2 (str): The second parameter.
        
        Returns:
            bool: True if successful, False otherwise.
        
        Raises:
            ValueError: If param1 is not an integer.
        """
        if not isinstance(param1, int):
            raise ValueError("param1 must be an integer")
        return True
    ```

### 2. **Google Style**

La convention Google pour les docstrings est également très populaire et est souvent utilisée pour sa clarté et sa structure.

```python
def example_function(param1, param2):
    """
    Example function to demonstrate Google style docstrings.

    Args:
        param1 (int): The first parameter.
        param2 (str): The second parameter.

    Returns:
        bool: True if successful, False otherwise.

    Raises:
        ValueError: If param1 is not an integer.
    """
    if not isinstance(param1, int):
        raise ValueError("param1 must be an integer")
    return True
```

### 3. **NumPy/SciPy Style**

Le style NumPy/SciPy est particulièrement populaire dans les projets scientifiques et de calcul numérique.

```python
def example_function(param1, param2):
    """
    Example function to demonstrate NumPy/SciPy style docstrings.

    Parameters
    ----------
    param1 : int
        The first parameter.
    param2 : str
        The second parameter.

    Returns
    -------
    bool
        True if successful, False otherwise.

    Raises
    ------
    ValueError
        If param1 is not an integer.
    """
    if not isinstance(param1, int):
        raise ValueError("param1 must be an integer")
    return True
```

## Utilisation des Docstrings

Les docstrings peuvent être accédées via l'attribut `__doc__` des objets ou en utilisant la fonction `help()` dans Python.

### Exemple

```python
def example():
    """
    Example function to show how docstrings are used.
    """
    pass

print(example.__doc__)
help(example)
```

## Générer la documentation technique d'un code grâce aux docstrings

Les docstrings sont un outil puissant pour documenter le code Python. En suivant les conventions établies, vous pouvez rendre votre code plus lisible et plus facile à maintenir pour vous-même et pour les autres développeurs.
Pour générer la documentation technique d'un code à partir des docstrings en utilisant le format Markdown, vous pouvez utiliser des outils comme **pdoc**, **Sphinx**, ou **pydocmd**. Ces outils peuvent extraire les docstrings des modules Python et générer des fichiers de documentation en différents formats, y compris Markdown ou HTML.

Voici un exemple avec **pdoc** pour un projet avec une structure simple :

### Structure du projet

```
my_project/
├── main_script.py
├── module1.py
└── module2.py
```

### Contenu des fichiers

**main_script.py**

```python
"""
Main script of the project.
"""

from module1 import function1
from module2 import function2

def main():
    """Main function of the script."""
    result1 = function1()
    result2 = function2()
    print(result1, result2)

if __name__ == "__main__":
    main()
```

**module1.py**

```python
"""
Module 1 of the project.
"""

def function1():
    """
    Function 1 of module 1.
    
    Returns:
        str: A greeting message.
    """
    return "Hello from module 1!"
```

**module2.py**

```python
"""
Module 2 of the project.
"""

def function2():
    """
    Function 2 of module 2.
    
    Returns:
        str: A farewell message.
    """
    return "Goodbye from module 2!"
```

### Étapes pour générer la documentation avec pdoc3

1. **Installer pdoc3**
   Vous pouvez installer `pdoc3` via pip :

   ```sh
   pip install pdoc3
   ```

2. **Générer la documentation**
   Exécutez la commande suivante pour générer la documentation en Markdown :

   ```sh
   pdoc --output-dir docs --format markdown my_project
   ```

3. **Résultat**
   Cette commande va créer une documentation dans le répertoire `docs` sous forme de fichiers Markdown pour chaque module de votre projet. Par exemple, le contenu généré pour `module1.py` pourrait ressembler à ceci :

**docs/module1.md**

```markdown
# Module 1 of the project

## function1

Function 1 of module 1.

**Returns:**

- `str`: A greeting message.
```

**docs/module2.md**

```markdown
# Module 2 of the project

## function2

Function 2 of module 2.

**Returns:**

- `str`: A farewell message.
```

**docs/main_script.md**

```markdown
# Main script of the project

## main

Main function of the script.
```

Vous pouvez ensuite intégrer ces fichiers Markdown dans le wiki de votre projet pour avoir une documentation technique complète basée sur les docstrings présentes dans vos fichiers source.
