# Objets et Classes en Python

**Temps estimé nécessaire :** 10 minutes

## Objectifs

Dans cette lecture, vous apprendrez :

- Concepts fondamentaux des objets et des classes en Python.
- Structure du code des classes et des objets.
- Exemples concrets liés aux objets et aux classes.

### Introduction aux classes et objets

Python est un langage de programmation orienté objet (POO) qui utilise un paradigme centré autour des objets et des classes.

Examinons ces concepts fondamentaux.

#### Classes

Une classe est un plan ou un modèle pour créer des objets. Elle définit la structure et le comportement que ses objets auront.

Pensez à une classe comme un emporte-pièce et aux objets comme les biscuits découpés à partir de ce modèle.

En Python, vous pouvez créer des classes en utilisant le mot-clé `class`.

##### Création de classes

Lorsque vous créez une classe, vous spécifiez les `attributs` (données) et les `méthodes` (fonctions) que les objets de cette classe auront. Les `attributs` sont définis comme des variables au sein de la classe, et les `méthodes` sont définies comme des fonctions. Par exemple, vous pouvez concevoir une classe "Voiture" avec des attributs tels que "couleur" et "vitesse", ainsi que des méthodes comme "accélérer".

#### Objets

Un _objet_ est une unité fondamentale en Python qui représente une entité ou un concept du monde réel. Les objets peuvent être tangibles (comme une voiture) ou abstraits (comme la note d'un étudiant).

_Tout objet a deux caractéristiques principales :_

##### État

Les _attributs ou données_ qui décrivent l'objet. Pour votre objet "Voiture", cela pourrait inclure des attributs comme "couleur", "vitesse" et "niveau de carburant".

##### Comportement

Les _actions ou méthodes_ que l'objet peut effectuer. En Python, les méthodes sont des fonctions qui appartiennent aux objets et peuvent modifier l'état de l'objet ou effectuer des opérations spécifiques.

#### Instanciation des objets

- Une fois que vous avez défini une classe, vous pouvez créer des objets individuels (instances) basés sur cette classe.
- Chaque objet est indépendant et a son propre ensemble d'attributs et de méthodes.
- Pour créer un objet, vous utilisez le nom de la classe suivi de parenthèses, ainsi : `ma_voiture = Voiture()`

#### Interaction avec les objets

Vous interagissez avec les objets en appelant leurs méthodes ou en accédant à leurs attributs en utilisant la notation par point.

Par exemple, si vous avez un objet Voiture nommé **ma_voiture**, vous pouvez définir sa couleur avec **ma_voiture.couleur = "bleu"** et l'accélérer avec **ma_voiture.accelerer()** s'il existe une méthode `accelerer` définie dans la classe.

### Structure du code des classes et des objets

> Veuillez ne pas copier et utiliser directement ce code car il s'agit d'un modèle pour l'explication et non pour des résultats spécifiques.

#### Déclaration de classe (class NomDeLaClasse)

- Le mot-clé `class` est utilisé pour déclarer une classe en Python.
- `NomDeLaClasse` est le nom de la classe, typiquement en utilisant les conventions de nommage CamelCase.

```python
class ClassName:
```

#### **Attributs de classe (class_attribute = value)**

- Les attributs de classe sont des variables partagées entre toutes les instances de la classe.
- Ils sont définis dans la classe mais en dehors de toute méthode.

```python
class ClassName:
    # Attributs de classe (partagés par toutes les instances)
    class_attribute = value
```

#### **Méthode de constructeur (def init(self, attribute1, attribute2, …):)**

- La méthode`__init__`est une méthode spéciale connue sous le nom de constructeur.
- Elle initialise les **attributs d'instance** (également appelés variables d'instance) lorsqu'un objet est créé.
- Le paramètre`self`est le premier paramètre du constructeur, faisant référence à l'instance en cours de création.
- **attribute1**, **attribute2**, etc., sont des paramètres passés au constructeur lors de la création d'un objet.
- À l'intérieur du constructeur, `self.attribute1`, `self.attribute2`, etc., sont utilisés pour attribuer des valeurs aux attributs d'instance.

```python
class ClassName:
    # Attributs de classe (partagés par toutes les instances)
    class_attribute = value

# Méthode de constructeur (initialiser les attributs d'instance)
def __init__(self, attribute1, attribute2, ...):
    pass
    # ...
```

#### **Attributs d'instance (self.attribute1 = attribute1)**

- Les attributs d'instance sont des variables qui stockent des données spécifiques à chaque instance de la classe.
- Ils sont initialisés dans la méthode `__init__`en utilisant le mot-clé self suivi du nom de l'attribut.
- Ces attributs contiennent des données uniques pour chaque objet créé à partir de la classe.

```python
class ClassName:
    # Attributs de classe (partagés par toutes les instances)
    class_attribute = value

# Méthode de constructeur (initialiser les attributs d'instance)
def __init__(self, attribute1, attribute2, ...):
    self.attribute1 = attribute1
    self.attribute2 = attribute2
    # ...`
```

#### **Méthodes d'instance (def method1(self, parameter1, parameter2, …):)**

- Les méthodes d'instance sont des fonctions définies dans la classe.
- Elles opèrent sur les données de l'instance (attributs d'instance) et peuvent effectuer des actions spécifiques aux instances.
- Le paramètre **self** est requis dans les méthodes d'instance, leur permettant d'accéder aux attributs d'instance et d'appeler d'autres méthodes au sein de la classe.

```python
class ClassName:
    # Attributs de classe (partagés par toutes les instances)
    class_attribute = value`

# Méthode de constructeur (initialiser les attributs d'instance)
def __init__(self, attribute1, attribute2, ...):
    self.attribute1 = attribute1
    self.attribute2 = attribute2
    # ...`

# Instance methods (functions)
    def method1(self, parameter1, parameter2, ...):
    # Method logic
    pass`
```

> _En utilisant les mêmes étapes, vous pouvez définir plusieurs méthodes d'instance._

```python
class ClassName:
 # Attributs de classe (partagés par toutes les instances)
 class_attribute = value
 
 # Méthode de constructeur (initialiser les attributs d'instance)
 def __init__(self, attribute1, attribute2, ...):
     self.attribute1 = attribute1
     self.attribute2 = attribute2
     # ...

# Instance methods (functions)
def method1(self, parameter1, parameter2, ...):
    # Method logic`
    pass`

def method2(self, parameter1, parameter2, ...):
    # Method logic
    pass
```

> _Note: Vous avez maintenant créé une classe fictive._

#### **Création d'objets (Instances)**

- Pour créer des objets (instances) de la classe, vous appelez la classe comme une fonction et fournissez les arguments requis par le constructeur.
- Chaque objet est une instance distincte de la classe, avec ses propres attributs d'instance et la capacité d'appeler les méthodes définies dans la classe.

```python
# Créer des objets (instances) de la classe
object1 = ClassName(arg1, arg2, ...)
object2 = ClassName(arg1, arg2, ...)
```

#### **Appel de méthodes sur des objets**

- Dans cette section, vous appellerez des méthodes sur des objets, spécifiquement `object1` et `object2`.
- Les **method1** et **method2** sont définies dans la classe **class**, et vous les appellerez respectivement sur **object1** et **object2**.
- Vous passerez les valeurs **param1_value** et **param2_value** comme arguments à ces méthodes. Ces arguments sont utilisés dans la logique de la méthode.

#### **Method 1: Using dot notation**

- C'est la manière la plus simple d'appeler une méthode d'un objet. Vous utilisez la notation par point **(objet.methode())** pour invoquer la méthode directement sur l'objet.
- Par exemple, `result1 = object1.method1(param1_value, param2_value, ...)` appelle **methode1** sur **objet1**.

```python
# Appel de méthodes sur des objets
# Méthode 1 : Utilisation de la notation par point
result1 = object1.method1(param1_value, param2_value, ...)
result2 = object2.method2(param1_value, param2_value, ...)
```

#### **Méthode 2 : Affectation des méthodes d'objet à des variables**

- Voici une manière alternative d'appeler une méthode d'un objet en attribuant la référence de la méthode à une variable
- `method_reference = object1.method1` assigne la méthode **method1** de **object1** à la variable **method_reference**.
- Plus tard, vous pouvez appeler la méthode en utilisant la variable ainsi: **result3 = method_reference(param1_value, param2_value, …)**.

```python
# Méthode 2 : Affectation des méthodes d'objet à des variables
method_reference = object1.method1 # Attribuer la méthode à une variable
result3 = method_reference(param1_value, param2_value, ...)
```

#### **Accès aux attributs d'objet**

- Ici, vous accédez à un attribut d'un objet en utilisant la notation par point.
- `attribute_value = object1.attribute1` récupère la valeur de l'attribut **attribute1** de **object1** et l'assigne à la variable **attribute_value**.

```python
# Accès aux attributs d'objet
attribute_value = object1.attribute1 # Accéder à l'attribut en utilisant la notation par point
```

#### **Modification des attributs d'objet**

- Vous allez modifier un attribut d'un objet en utilisant la notation par point.
- `object1.attribute2 = new_value` attribue la nouvelle valeur **new_value** à l'attribut **attribute2** de **objet1**.

```python
# Modification des attributs d'objet
object1.attribute2 = new_value # Changer la valeur d'un attribut en utilisant la notation par point
```

#### **Accès aux attributs de classe (partagés par toutes les instances)**

- Enfin, accéder à un attribut de classe partagé par toutes les instances de la classe.
- `class_attr_value = ClassName.class_attribute` accède à l'attribut de classe `class_attribute` de la classe `ClassName` et attribue sa valeur à la variable  `class_attr_value`.

```python
# Accès aux attributs de classe (partagés par toutes les instances)
class_attr_value = ClassName.class_attribute
```

#### **Exemple concret**

Écrivons un programme Python qui simule une classe de voiture simple, permettant de créer des instances de voiture, de les accélérer et d'afficher leur vitesse actuelle.

1. Commençons par définir une classe `Car` qui inclut les attributs et méthodes suivants :

- Attribut de classe `max_speed`, qui est fixé à **120 km/h**.
- Méthode de constructeur `__init__` qui prends des paramètres pour les attributs suivants :  **car's make, model, color, and an optional speed (defaulting to 0)**. Cette méthode initialise les attributs d'instance pour la marque,le modèle, la couleur et la vitesse.
- Méthode `accelerate(self, acceleration)` thqui permet à la voiture d'accélerer. Si l'accélération ne dépasse pas `max_speed`, mise à jour de l'attribut **car's speed**. Sinon, fixer la vitesse à **max_speed**.
- Méthode `get_speed(self)` qui retourne la vitesse actuelle de la voiture

```python
 class Car:
    # Attribut de classe (partagé par toutes les instances)
    max_speed = 120 # Maximum speed in km/h
 
 # Méthode de constructeur (initialiser les attributs d'instance)
 def __init__(self, make, model, color, speed=0):
    self.make = make
    self.model = model
    self.color = color
    self.speed = speed # vitesse initiale à 0

 # Méthode pour accélérer la voiture
 def accelerate(self, acceleration):
    if self.speed + acceleration <= Car.max_speed:
        self.speed += acceleration
    else:
        self.speed = Car.max_speed
 
 # Méthode pour retourner la vitesse de la voiture
 def get_speed(self):
    return self.speed
```

1. Vous allez maintenant instancier deux objets de la classe `Car`, chacun ayant les caractéristiques suivantes :

- car1: **Make = "Toyota", Model = "Camry", Color = "Blue"**
- car2: **Make = "Honda", Model = "Civic", Color = "Red"**

```python
# Créer des objets (instances) de la classe Voiture
car1 = Car("Toyota", "Camry", "Blue")
car2 = Car("Honda", "Civic", "Red")
```

3. En utilisant la méthode "accélérer", vous augmenterez la vitesse de la voiture 1 de 30 km/h et celle de la voiture 2 de 20 km/h.

```python
# Accélérer les voitures
car1.accelerate(30)
car2.accelerate(20)
```

4. Enfin, vous afficherez la vitesse actuelle de chaque voiture en utilisant la méthode `get_speed`.

```python
# Imprimer les vitesses actuelles des voitures
print(f"{car1.make} {car1.model} is currently at {car1.get_speed()} km/h.")
print(f"{car2.make} {car2.model} is currently at {car2.get_speed()} km/h.")
```

## **Prochaines étapes**

En conclusion, cette lecture permet d'acquérir une compréhension fondamentale des objets et des classes en Python, concepts essentiels de la programmation orientée objet. Les classes servent de plans pour créer des objets, en encapsulant des données, des attributs et des méthodes. Les objets représentent des entités du monde réel et possèdent leur propre état et comportement. L'exemple de code structuré présenté dans la lecture souligne les éléments clés d'une classe, y compris les attributs de la classe, la méthode du constructeur pour initialiser les attributs d'instance, et les méthodes d'instance pour définir la fonctionnalité spécifique à l'objet.

## **Auteur**

Younes AJEDDIG d'après le travail de [Akansha Yadav](https://www.linkedin.com/in/akansha-yadav-4bb7321a9/))

## **Ressources**

[OpenClassRoom - Apprennez la programmation orientée objet avec python](https://openclassrooms.com/fr/courses/7150616-apprenez-la-programmation-orientee-objet-avec-python?archived-source=4302126)
