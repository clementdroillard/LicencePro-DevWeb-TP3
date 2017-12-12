 <?php
 	require 'vendor/autoload.php';
 	Mustache_Autoloader::register();
 	//connexion a notre base de donnÃ©e
 	$dbh = new PDO('mysql:host=localhost;dbname=TP3','root','rt2018');
 	//on vÃ©rifie si il y a eu une saisie et qu'elle ne soit pas vide
 	if(isset($_POST["value"]) && $_POST["value"] != '')
 	{
 		$insert = true;
 		//contient la valeur qui vient d'etre saisie
 		$valeur =htmlspecialchars($_POST["value"], ENT_QUOTES); 
 		//insertion de la valeur dans la base
 		$sql = 'INSERT INTO saisie(libelle,valider) VALUES(\''.$valeur.'\',false)';
 		$dbh->exec($sql);
 	}
 	//la saisie est vide ou il y a pas de saisie
 	else
 	{
 		$valeur = "";
 		$insert = false;
 	}
 	//on vÃ©rifie si on a cliquÃ© sur le bouton supprimer
 	if(isset($_POST["supprimer"]) && is_numeric($_POST["idSuppr"])){
 		$id = $_POST["idSuppr"];
 		//on supprime la saisie souhaitÃ©
 		$sql= 'DELETE FROM saisie WHERE id ='.$id;
 		$dbh->exec($sql);
 	}
 	//on vÃ©rifie si on a cliquÃ© sur le bouton valider
 	if(isset($_POST["valider"])){
 		$id = $_POST["idSuppr"];
 		$valider = $_POST["valValider"];
 		//on change la valeur de la validation 
 		$valider = (boolval(!$valider) ? 'true' : 'false');
 		//on met cette valeur dans la bdd
 		$sql= 'UPDATE saisie SET valider = '.$valider.' WHERE id ='.$id;
 		$dbh->exec($sql);
 	}
 	//la variable saisies prend les valeurs de la table saisie 
 	$saisies = $dbh->query('select id,libelle,valider from saisie');

 	
	$m = new Mustache_Engine(array(
    	'loader' => new Mustache_Loader_FilesystemLoader(dirname(__FILE__) . '/views'),
	));
 	echo $m->render('liste' ,array('saisies'=>$saisies,'insert'=>$insert, 'valeur'=>$valeur ));

 ?>


