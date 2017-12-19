//clic sur le bouton supprimer
function supprimer(id)
{
	//on envoie la requete pour supprimer
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "scripts/delete.php", true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send("del="+id);

	//lorsque la requete a réussi
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			//suppression de la ligne dans le html
			var liste = document.getElementById("li"+id);
			liste.parentNode.removeChild(liste);
		}
	};
}

//clic sur le bouton valider
function valider(id)
{
	var liste = document.getElementById("element"+id);
	var libelle = document.getElementById("lib"+id);
	var valider;
	//on vérifie si c'est deja valider ou non
	if(document.getElementById("strike"+id) != null)
	{
		valider = 1;
	}
	else
	{
		valider = 0;
	}
	//requete pour changer le statut de validation
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "scripts/valider.php", true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send("valider="+valider+"&id="+id);

	//lorsque la requete est effectué
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			//on modifie le html
			if(valider){
				var strike = document.getElementById("strike"+id);
				strike.parentNode.removeChild(strike);
				liste.appendChild(libelle);
			}
			else{
				var strike = document.createElement("strike");
				strike.style.fontSize = "xx-large";
				strike.id = "strike"+id
				liste.insertBefore(strike,libelle);
				libelle.parentNode.removeChild(libelle);
				strike.appendChild(libelle);
			}
		}
	};
}

//clic sur le bouton ajouter
function ajouter()
{
	var saisie = document.getElementById("saisie").value;
	var xhr = new XMLHttpRequest();
	//si la sasie n'est pas vide on fait la requete d'ajout
	if(saisie != "")
	{
		xhr.open("POST", "scripts/insert.php", true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.send("insert="+saisie);
	}
	else
	{
		document.getElementById("infoSaisie").innerHTML = "Vous n'avez rien saisie";
	}

	//la requete vient d'etre effectué
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			//on ajoute la ligne dans le html
			var id = xhr.responseText;
			id = id.trim();
			var ul = document.getElementById("ul");
			ul.innerHTML += "<li id =li"+id+" class=\"list-group-item\"><span  id=element"+id+"><span id=lib"+id+" style=\"font-size: x-large;\">"+saisie+"</span></span><span id=boutton"+id+"><button id=\"btnSpr"+id+"\" onclick=\"supprimer("+id+");\">Supprimer</button><button id=\"btnVal"+id+"\" onclick=\"valider("+id+");\">Valider / Non Valider</button></span></li>";
			document.getElementById("infoSaisie").innerHTML = "Vous avez saisie : \""+saisie+"\"";
			document.getElementById("saisie").value = "";
		}
	};
}