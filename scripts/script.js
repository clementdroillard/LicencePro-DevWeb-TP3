//clic sur le bouton supprimer
function supprimer(id)
{
	//on envoie la requete pour supprimer
	var xhr = new XMLHttpRequest();
	xhr.open("DELETE", "scripts/delete.php", true);
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
	xhr.open("PUT", "scripts/valider.php", true);
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
				document.getElementById("btnUpdate"+id).setAttribute('onclick',"modifier("+id+",0)");
			}
			else{
				var strike = document.createElement("strike");
				strike.style.fontSize = "xx-large";
				strike.id = "strike"+id;
				liste.insertBefore(strike,libelle);
				libelle.parentNode.removeChild(libelle);
				strike.appendChild(libelle);
				document.getElementById("btnUpdate"+id).setAttribute('onclick',"modifier("+id+",1)");
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
			ul.innerHTML += "<li id =li"+id+" class=\"list-group-item\"><span  id=element"+id+"><span id=lib"+id+" style=\"font-size: x-large;\">"+saisie+"</span></span><span id=boutton"+id+">&nbsp;&nbsp;<button id=\"btnVal"+id+"\" class=\"btn btn-success fa fa-check-square\" onclick=\"valider("+id+");\" /><button id=\"btnUpdate"+id+"\" class=\"btn btn-warning fa fa-pencil\" onclick=\"modifier("+id+",0);\"/><button id=\"btnSpr"+id+"\" class=\"btn btn-danger fa fa-trash\" onclick=\"supprimer("+id+");\" /></span></li>";
			document.getElementById("infoSaisie").innerHTML = "Vous avez saisie : \""+saisie+"\"";
			document.getElementById("saisie").value = "";
			document.location.href="#li"+id;
		}
	};
}


//clic sur le bouton modifier
function modifier(id,valider)
{
	//on affiche le champ modifiacation 
	var saisie = document.getElementById("lib"+id).innerHTML.trim();
	var element = document.getElementById("element"+id);
	var buttonSupr = document.getElementById("btnSpr"+id);
	var buttonVal = document.getElementById("btnVal"+id);
	var fonction = "validermodif("+id+","+valider+",'"+saisie+"');";

	document.getElementById("btnUpdate"+id).setAttribute('onclick',fonction);

	element.innerHTML = "<input style=\"font-size: x-large;\" id=\"update"+id+"\" type=\"text\" class=\"form-control\" name=\"msg\" value="+saisie+" />";
	buttonSupr.parentNode.removeChild(buttonSupr);
	buttonVal.parentNode.removeChild(buttonVal);
}

function validermodif(id,valider,saisieOld)
{
	var saisieNew = document.getElementById("update"+id).value;
	var element = document.getElementById("element"+id);
	var buttons = document.getElementById("boutton"+id);
	var saisie;

	//on envoie la requete pour modifier
	var xhr = new XMLHttpRequest();
	xhr.open("PUT", "scripts/update.php", true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send("update="+saisieNew+"&id="+id+"&old="+saisieOld);
	//lorsque la requete est effectué
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			//requete ok
			saisie = saisieNew;
		}
		else{
			//requete ko
			saisie = saisieOld;
		}
		//on enleve le champ de saisie
		if (valider) 
		{
			element.innerHTML = "<strike id=strike"+id+" style=\"font-size: xx-large;\"><span id=lib"+id+" style=\"font-size: x-large;\">"+saisie+" </span></strike>";
	 
		}
		else
		{
			element.innerHTML ="<span id=lib"+id+" style=\"font-size: x-large;\">"+saisie+"</span>";
		}
		buttons.innerHTML = "&nbsp;&nbsp;<button id=\"btnVal"+id+"\" class=\"btn btn-success fa fa-check-square\" onclick=\"valider("+id+");\" /><button id=\"btnUpdate"+id+"\" class=\"btn btn-warning fa fa-pencil\" onclick=\"modifier("+id+","+valider+");\"/><button id=\"btnSpr"+id+"\" class=\"btn btn-danger fa fa-trash\" onclick=\"supprimer("+id+");\" />";
	};
}