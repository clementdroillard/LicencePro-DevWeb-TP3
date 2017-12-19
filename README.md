Le TP3 de notre cours de développement web.
Prérequis :
- Un poste Linux / serveur web 
- Configuration d'apache2
- Configuration de MySql
- Une application de gestion de base de données

Ce TP permet d'ajouter, supprimer, valider un element d'une liste stocké sur une bdd MySql.

Pour l'installation de l'application il faut créer une base de données MySql.
Sur cette base exécuté le code sql contenue dans le fichier TP3.sql.

Dans le fichier connexion.php modifier pour la connexion a la base :
$dbh = new PDO('mysql:host=localhost;dbname=LeNomDeLaBDD','VotreLoginMySQL','VotreMdpMySQL');
En remplacant LeNomDeLaBDD,VotreLoginMySQL,VotreMdpMySQL par vos informations.

