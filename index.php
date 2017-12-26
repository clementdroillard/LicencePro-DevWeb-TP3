 <?php

 	require 'vendor/autoload.php';
 	Mustache_Autoloader::register();
 	 //connexion a notre base de donnee
 	include("connexion.php");


 	//la variable saisies prend les valeurs de la table saisie 
 	$saisies = $dbh->query('select id,libelle,valider from saisie');

	$m = new Mustache_Engine(array(
    	'loader' => new Mustache_Loader_FilesystemLoader(dirname(__FILE__) . '/views'),
	));
	//affichage de notre vue 
 	echo $m->render('liste' ,array('saisies'=>$saisies));

 ?>
