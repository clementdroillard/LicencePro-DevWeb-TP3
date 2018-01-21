 <?php

 	require 'vendor/autoload.php';
 	Mustache_Autoloader::register();
 	 //connexion a notre api
 	include("connexion.php");

 	//la variable saisies prend les valeurs de la table saisie 
 	$saisies = json_decode(file_get_contents($api.'todo/'));

	$m = new Mustache_Engine(array(
    	'loader' => new Mustache_Loader_FilesystemLoader(dirname(__FILE__) . '/views'),
	));
	//affichage de notre vue 
 	echo $m->render('liste' ,array('saisies'=>$saisies));

 ?>
