 <?php
 	//connexion a notre base de donnée
 	$dbh = new PDO('mysql:host=localhost;dbname=TP3','root','lpdip:17');
 	//on vérifie si il y a eu une saisie et qu'elle ne soit pas vide
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
 		$insert = false;
 	}
 	//on vérifie si on a cliqué sur le bouton supprimer
 	if(isset($_POST["supprimer"])){
 		$id = $_POST["idSuppr"];
 		//on supprime la saisie souhaité
 		$sql= 'DELETE FROM saisie WHERE id ='.$id;
 		$dbh->exec($sql);
 	}
 	//on vérifie si on a cliqué sur le bouton valider
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
 ?>



<!doctype html>
<html lang="fr">
	<head>
	  <meta charset="utf-8">
	</head>
	<body>
	 	<h1>To do list</h1>
	 	<ul>
		 	<?php
		 		//on parcours la variable saisies 
		 		foreach ($saisies as $value): 
		 	?>
		 	<!-- formulaire qui contient la liste et le bouton supprimer et valider-->
		 	<form name=suppr action="index.php" method="post">
		 		<li>
		 			<?php if($value['valider']): ?> <strike> <?php endif; ?>
		 			"<?= $value['libelle'] ?>"
		 			<?php if($value['valider']): ?> </strike> <?php endif; ?>
		 			<input type="hidden" name ="idSuppr" value=<?= $value['id'] ?> />
		 			<input type="submit" name ="supprimer" value="Supprimer" />
		 			<input type="hidden" name ="valValider" value=<?= $value['valider'] ?> />
		 			<input type="submit" name ="valider" value="Valider / Non Valider" />	
		 		</li>
		 	</form>
		 	<?php endforeach; ?>
	 	</ul>
	 	<h1>Ajouter un élement à la liste : </h1>
	 	<!-- si on vient d'insérer une valeur on l'affiche sinon on dit que rien n'est saisie-->
	 	<?php if($insert): ?>
	 		Vous avez saisie <?= $valeur ?>
	 	<?php else: ?>
	 		Vous n'avez rien saisie
	 	<?php endif; ?>
	 	<!-- formulaire d'ajout -->
	 	<form action="index.php" method="post">
	 		<p>Votre saisie : <input type="text" name="value" /></p>
	 		<p><input type="submit" value="OK" /></p>
		</form>
	</body>
</html>