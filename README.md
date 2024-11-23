
# Projet Learn Online

## Installation

### Backend (API Symfony)

1. Clonez le repository :
   
   git clone https://github.com/Elvi-2202/learn-online.git
   
2. Naviguez vers le dossier de l'API :
   
   cd learn-online/api-modules
   
3. Installez les dépendances :
   
   composer install
   
4. Configurez votre base de données dans le fichier `.env`
5. Créez la base de données :
   
   php bin/console doctrine:database:create
   
6. Exécutez les migrations :
   
   php bin/console doctrine:migrations:migrate
   
7. Lancez le serveur Symfony :
   
   symfony server --no-tls


### Frontend (React)

1. Naviguez vers le dossier frontend :
   
   cd learn-online/cours-en-ligne
   
2. Installez les dépendances :
   
   npm install
   
3. Lancez l'application :
   
   npm start
   

## Présentation de l'application

Learn Online est une plateforme d'apprentissage en ligne permettant aux utilisateurs de s'inscrire, de se connecter et d'accéder à divers modules de cours. L'application offre une interface utilisateur intuitive pour naviguer à travers les modules et suivre sa progression.

### Détails des endpoints

- POST `/api/login_check` : Authentification de l'utilisateur
- GET `/api/modules` : Récupération de tous les modules
- POST `/api/logout` : Déconnexion de l'utilisateur

## Stacks techniques

- Backend : Symfony 6, PHP 8.1, PostgreSQL
- Frontend : React, TypeScript, Redux Toolkit
- Authentification : JWT (JSON Web Tokens)
- API : RESTful

## Structure de la base de données
![Schéma de la base de données](https://lucid.app/lucidspark/b4d61cd1-d39d-41dd-98c0-9aa7f3700d75/edit?viewport_loc=132%2C200%2C1707%2C780%2C0_0&invitationId=inv_06727cd4-4f63-42bf-ac5f-690e2036f52f)

- Utilisateurs
id (PK) : Identifiant unique de l'utilisateur
email: Adresse email de l'utilisateur
mot de passe : Mot de passe haché
rôles: Rôles de l'utilisateur dans l'application

- Modules
id (PK) : Identifiant unique du module
titre : Titre du module
description: Description détaillée du module
contenu : Contenu du module

## Généralité Sécurité

- Utilisation de JWT pour l'authentification
- Hachage des mots de passe avec bcrypt
- Validation des données côté serveur
- Protection CSRF
- Gestion des rôles et permissions

## Features

### Wireframe

****

### Intégration des wireframes

L'interface utilisateur a été développée en suivant fidèlement les wireframes, assurant une expérience utilisateur cohérente et intuitive.

### Authentification JWT

L'authentification utilise des JSON Web Tokens (JWT) pour sécuriser les communications entre le frontend et le backend. Voici comment cela fonctionne :

L'utilisateur envoie ses identifiants (email/mot de passe)
Le serveur vérifie les informations d'identification dans la table Users
Si valide, un JWT est généré contenant l'id et les rôles de l'utilisateur
Le JWT est renvoyé au client qui le stocke
Le client inclut le JWT dans l'en-tête Autorisation de chaque requête
Le serveur valide le JWT à chaque requête pour autoriser l'accès

### Récupération des modules

Les modules sont récupérés depuis l'API backend et affichés dans l'interface utilisateur. L'accès aux modules est restreint aux utilisateurs authentifiés.

## Explication du JWT Token

Un JWT (JSON Web Token) est composé de trois parties : Header, Payload, et Signature.

- Header : Contient le type de token et l'algorithme de hachage.
- Payload : Contient les claims (informations sur l'utilisateur).
- Signature : Assure l'intégrité du token.

Le token est utilisé pour maintenir l'état de connexion de l'utilisateur et autoriser l'accès aux ressources protégées sans avoir besoin de constamment ré-authentifier l'utilisateur.


