Le TP3 de notre cours de dévellopement web.
Prérequis :
- Un pose Linux
- Configuration de apache2
- Configuration de MySql

Ce TP permet d'ajouter,supprimer,valider un element d'une liste stocké sur une bdd MySql :

Pour l'installation de l'application il faut créer une base de donnée MySql.
Sur cette base exécuté le code sql contenue dans le fichier TP3.sql.

Dans le fichier index.php modifier la ligne 3 pour la connexion a la base :
$dbh = new PDO('mysql:host=localhost;dbname=LeNomDeLaBDD','VotreLoginMySQL','VotreMdpMySQL');
En remplacant LeNomDeLaBDD,VotreLoginMySQL,VotreMdpMySQL par vos informations.

Il faut ensuite prendre le fichier index.php le mettre dans /var/www/html.

Ouvrir un navigateur web sur 127.0.0.1 qui va afficher l'application
