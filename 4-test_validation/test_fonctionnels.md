---
⏱️ **Durée estimée :** 35 minutes (lecture + pratique)
📋 **Prérequis :** Tests unitaires et d'intégration, scénarios utilisateur
🎯 **Objectifs :** 
- Comprendre la perspective utilisateur dans les tests
- Apprendre à valider les exigences fonctionnelles
- Maîtriser les outils de test end-to-end
- Concevoir des scénarios de test réalistes

**TL;DR :** Ce chapitre explique comment tester les fonctionnalités complètes du point de vue de l'utilisateur final.
---

# Les Tests Fonctionnels

## Présentation des Tests Fonctionnels

Les tests fonctionnels sont des tests automatisés qui vérifient que le logiciel remplit correctement les exigences fonctionnelles spécifiées. Ils se concentrent sur ce que le système fait et s'assurent que toutes les fonctionnalités fonctionnent comme prévu du point de vue de l'utilisateur final. Ces tests couvrent généralement des cas d'utilisation complets et sont souvent basés sur des scénarios réels.

## Intérêt des Tests Fonctionnels

1. **Validation des Exigences** :
   Les tests fonctionnels permettent de vérifier que le logiciel répond aux spécifications et exigences fonctionnelles définies.

2. **Expérience Utilisateur** :
   Ils garantissent que les fonctionnalités du système fonctionnent correctement du point de vue de l'utilisateur, assurant une expérience utilisateur fluide.

3. **Réduction des Risques** :
   En vérifiant que toutes les fonctionnalités principales fonctionnent comme prévu, les tests fonctionnels réduisent les risques de défaillance en production.

4. **Assurance Qualité** :
   Ils contribuent à la qualité globale du logiciel en vérifiant que toutes les fonctionnalités critiques fonctionnent correctement.

## Mise en Place des Tests Fonctionnels

### Généralités

1. **Choix d'un Framework de Test** :
   - Pour Python, `pytest` avec des plugins comme `pytest-bdd` pour le comportement piloté par les tests (BDD) ou des outils comme `Selenium` pour les tests d'interface utilisateur peuvent être utilisés.

2. **Structure des Tests Fonctionnels** :
   - Les tests fonctionnels doivent être organisés de manière à refléter les cas d'utilisation et les scénarios utilisateur.
   - Ils peuvent être placés dans un répertoire dédié, par exemple `tests/functional`.

### Exemple de Test Fonctionnel pour une Application de Simulation en Génie Chimique

Imaginons que nous ayons une application de simulation de réacteur chimique qui permet aux ingénieurs de calculer les conversions, sélectivités et rendements pour différentes conditions opératoires.

1. **Création d'un Fichier de Test Fonctionnel** :
   Créez un fichier de test fonctionnel, par exemple `test_simulation.py`, dans le répertoire `tests/functional`.

2. **Écriture d'un Test Fonctionnel** :
   Voici un exemple de test fonctionnel pour vérifier que l'application calcule correctement la conversion d'un réactif dans un réacteur à lit fixe.

```python
# fichier: tests/functional/test_simulation.py
import pytest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

def test_reactor_simulation():
    # Configure the WebDriver
    driver = webdriver.Chrome()
    driver.get("http://localhost:5000/reactor-simulation")
    
    # Find the input fields and enter the simulation parameters
    concentration_field = driver.find_element_by_name("initial_concentration")
    concentration_field.send_keys("1.0")  # Initial concentration in mol/L
    
    temperature_field = driver.find_element_by_name("temperature")
    temperature_field.send_keys("300")  # Temperature in K
    
    flow_rate_field = driver.find_element_by_name("flow_rate")
    flow_rate_field.send_keys("0.1")  # Flow rate in L/s
    
    # Submit the simulation form
    submit_button = driver.find_element_by_name("submit")
    submit_button.click()
    
    # Allow some time for the simulation to run and the results to load
    time.sleep(5)
    
    # Check the output for the conversion result
    conversion_result = driver.find_element_by_id("conversion").text
    assert conversion_result == "0.85"  # Expected conversion result
    
    # Close the WebDriver
    driver.quit()
```

Dans cet exemple :
   - `webdriver.Chrome()` initialise un navigateur Chrome pour exécuter le test.
   - `driver.get("http://localhost:5000/reactor-simulation")` ouvre la page de simulation du réacteur.
   - `find_element_by_name` recherche les champs de formulaire par leur nom et `send_keys` permet de saisir du texte dans les champs pour les paramètres de la simulation.
   - `submit_button.click()` soumet le formulaire pour lancer la simulation.
   - `time.sleep(5)` attend quelques secondes pour que la simulation se termine et les résultats s'affichent.
   - `assert conversion_result == "0.85"` vérifie que le résultat de conversion affiché est conforme aux attentes.
   - `driver.quit()` ferme le navigateur.

3. **Exécution des Tests** :
   Pour exécuter vos tests fonctionnels, ouvrez un terminal dans le répertoire de votre projet et lancez `pytest` :
   ```sh
   pytest tests/functional
   ```
   Vous verrez un rapport des tests indiquant lesquels ont réussi ou échoué.

### Utilisation de Visual Studio Code (VSCode) pour les Tests Fonctionnels

1. **Organisation des Tests** :
   - Assurez-vous que vos tests fonctionnels sont placés dans un répertoire dédié (par exemple, `tests/functional`).

2. **Exploration et Exécution des Tests** :
   - VSCode détectera automatiquement vos fichiers de test si correctement configuré.
   - Utilisez l'interface de Test Explorer pour exécuter et visualiser les résultats des tests fonctionnels.

3. **Débogage des Tests** :
   - VSCode permet de déboguer les tests fonctionnels de la même manière que les tests unitaires et d'intégration. Cliquez avec le bouton droit sur un test et sélectionnez "Debug Test" pour démarrer le débogueur.

# Conclusion

Les tests fonctionnels sont essentiels pour garantir que les fonctionnalités de votre application répondent aux exigences et offrent une expérience utilisateur optimale. En utilisant des outils comme `pytest` et `Selenium`, ainsi qu'un environnement de développement comme VSCode, vous pouvez facilement mettre en place et exécuter des tests fonctionnels pour améliorer la qualité et la fiabilité de votre logiciel. Les tests fonctionnels, lorsqu'ils sont bien conçus et correctement exécutés, permettent de valider les cas d'utilisation et de détecter les problèmes avant qu'ils n'affectent les utilisateurs finaux.