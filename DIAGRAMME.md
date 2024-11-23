# Diagramme du Projet Learn Online

Ce document contient un lien vers le diagramme en ligne représentant la structure du projet Learn Online, ainsi que des explications sur chaque partie.

## Lien vers le Diagramme

[Diagramme Mermaid](https://www.mermaidchart.com/app/projects/92cb7091-46c8-487b-b7ec-82d56d933c0e/diagrams/10738d84-a29e-49f9-9d69-5f5785366b71/version/v0.1/edit?pluginSource=none) - Cliquez sur ce lien pour visualiser et interagir avec le diagramme.

## Explications du Diagramme

Le diagramme représente la structure des fichiers et dossiers du projet, ainsi que les interactions entre eux.

### Frontend
- **Components** : Comprend les différents types de composants organisés selon la méthodologie Atomic Design.
  - **Atoms** : Composants de base comme des boutons et des champs de saisie.
  - **Molecules** : Combinaisons de composants atomiques, par exemple, le formulaire de connexion.
  - **Organisms** : Composants plus complexes qui regroupent plusieurs molécules.
  - **Templates** : Structures de page réutilisables.
  
- **Routes** : Définit les différentes routes de l'application, comme les modules et les utilisateurs.

- **Store** : Gère l'état global de l'application avec Redux.

- **API** : Contient les définitions des endpoints pour communiquer avec le backend.

### Backend
- **Symfony API** : Gère la logique métier et les interactions avec la base de données.
  - **Controllers** : Reçoivent les requêtes HTTP et renvoient les réponses appropriées.
  - **Entities** : Modèles représentant les données dans la base de données.
  - **Repositories** : Gèrent l'accès aux données.

- **Database** : Utilise PostgreSQL pour stocker les données de l'application.

### Interactions
- Les appels API sont effectués depuis le frontend vers le backend.
- Les controllers interagissent avec les repositories pour récupérer ou modifier des données.
- Les repositories accèdent aux données dans la base de données PostgreSQL.
